import { GitState, Commit } from '../types';
import { v4 as uuidv4 } from 'uuid';

export class GitEngine {
  private getState: () => GitState;
  private setState: (state: GitState) => void;

  constructor(getState: () => GitState, setState: (state: GitState) => void) {
    this.getState = getState;
    this.setState = setState;
  }

  public execute(command: string): string {
    const parts = command.trim().split(/\s+/);
    if (parts.length === 0) return '';
    if (parts[0] !== 'git') return `bash: ${parts[0]}: command not found`;

    const cmd = parts[1];
    const args = parts.slice(2);

    switch (cmd) {
      case 'init':
        return this.init();
      case 'status':
        return this.status();
      case 'add':
        return this.add(args);
      case 'commit':
        return this.commit(args);
      case 'log':
        return this.log();
      case 'branch':
        return this.branch(args);
      case 'checkout':
        return this.checkout(args);
      default:
        return `git: '${cmd}' is not a git command. See 'git --help'.`;
    }
  }

  private init(): string {
    const state = this.getState();
    if (state.isInitialized) return 'Reinitialized existing Git repository in /project/.git/';
    
    this.setState({
      ...state,
      isInitialized: true,
      currentBranch: 'main',
      branches: { 'main': null }
    });
    return 'Initialized empty Git repository in /project/.git/';
  }

  private status(): string {
    const state = this.getState();
    if (!state.isInitialized) return 'fatal: not a git repository (or any of the parent directories): .git';
    
    const staged = Object.keys(state.stagingArea);
    
    let output = `On branch ${state.currentBranch}\n`;
    
    if (staged.length === 0) {
      output += 'nothing to commit, working tree clean';
    } else {
      output += 'Changes to be committed:\n  (use "git restore --staged <file>..." to unstage)\n\n';
      output += staged.map(f => `\tnew file:   ${f}`).join('\n');
    }
    
    return output;
  }

  private add(args: string[]): string {
    const state = this.getState();
    if (!state.isInitialized) return 'fatal: not a git repository (or any of the parent directories): .git';
    if (args.length === 0) return 'Nothing specified, nothing added.';

    const filesToAdd = args[0] === '.' ? Object.keys(state.workingDirectory) : args;
    const newStaging = { ...state.stagingArea };

    let addedCount = 0;
    filesToAdd.forEach(file => {
      if (state.workingDirectory[file]) {
        newStaging[file] = state.workingDirectory[file];
        addedCount++;
      }
    });

    if (addedCount === 0) return `fatal: pathspec '${args[0]}' did not match any files`;

    this.setState({
      ...state,
      stagingArea: newStaging
    });
    return '';
  }

  private commit(args: string[]): string {
    const state = this.getState();
    if (!state.isInitialized) return 'fatal: not a git repository (or any of the parent directories): .git';
    
    const messageIndex = args.indexOf('-m');
    if (messageIndex === -1 || messageIndex + 1 >= args.length) {
      return 'error: switch `m\' requires a value';
    }
    
    const message = args.slice(messageIndex + 1).join(' ').replace(/^"|"$/g, '');

    if (Object.keys(state.stagingArea).length === 0) {
      return `On branch ${state.currentBranch}\nnothing to commit, working tree clean`;
    }

    const newCommitId = uuidv4().substring(0, 7);
    const parentId = state.branches[state.currentBranch] || null;

    let parentFiles = {};
    if (parentId) {
      const parent = state.commits.find(c => c.id === parentId);
      if (parent) parentFiles = parent.files;
    }

    const newFilesSnapshot = { ...parentFiles, ...state.stagingArea };

    const newCommit: Commit = {
      id: newCommitId,
      message,
      author: 'User',
      timestamp: new Date(),
      parentIds: parentId ? [parentId] : [],
      files: newFilesSnapshot
    };

    this.setState({
      ...state,
      commits: [...state.commits, newCommit],
      branches: {
        ...state.branches,
        [state.currentBranch]: newCommitId
      },
      HEAD: newCommitId,
      stagingArea: {}
    });

    const rootInfo = parentId ? '' : '(root-commit) ';
    return `[${state.currentBranch} ${rootInfo}${newCommitId}] ${message}`;
  }

  private log(): string {
    const state = this.getState();
    if (!state.isInitialized) return 'fatal: not a git repository (or any of the parent directories): .git';
    if (state.commits.length === 0) return `fatal: your current branch '${state.currentBranch}' does not have any commits yet`;

    let output = '';
    let currentId = state.branches[state.currentBranch];
    
    while(currentId) {
      const commit = state.commits.find(c => c.id === currentId);
      if(!commit) break;
      output += `commit ${commit.id}\nAuthor: ${commit.author}\nDate: ${commit.timestamp.toLocaleTimeString()}\n\n    ${commit.message}\n\n`;
      currentId = commit.parentIds[0];
    }
    return output.trim();
  }

  private branch(args: string[]): string {
    const state = this.getState();
    if (!state.isInitialized) return 'fatal: not a git repository (or any of the parent directories): .git';
    
    if (args.length === 0) {
      return Object.keys(state.branches).map(b => 
        b === state.currentBranch ? `* ${b}` : `  ${b}`
      ).join('\n');
    }

    const branchName = args[0];
    if (state.branches[branchName]) return `fatal: A branch named '${branchName}' already exists.`;

    this.setState({
      ...state,
      branches: {
        ...state.branches,
        [branchName]: state.HEAD
      }
    });

    return '';
  }

  private checkout(args: string[]): string {
    const state = this.getState();
    if (!state.isInitialized) return 'fatal: not a git repository (or any of the parent directories): .git';
    if (args.length === 0) return 'fatal: you must specify a branch';

    const target = args[0];
    if (target === '-b') {
      if (args.length < 2) return 'fatal: missing branch name';
      const newBranch = args[1];
      const branchResult = this.branch([newBranch]);
      if (branchResult) return branchResult;
      return this.checkout([newBranch]);
    }

    if (!Object.keys(state.branches).includes(target)) {
      return `error: pathspec '${target}' did not match any file(s) known to git`;
    }

    const targetCommitId = state.branches[target];
    
    let newWorkingDir = { ...state.workingDirectory };
    if (targetCommitId) {
      const commit = state.commits.find(c => c.id === targetCommitId);
      if (commit) {
        newWorkingDir = { ...commit.files };
      }
    } else {
      newWorkingDir = {};
    }

    this.setState({
      ...state,
      currentBranch: target,
      HEAD: targetCommitId,
      workingDirectory: newWorkingDir,
      stagingArea: {}
    });

    return `Switched to branch '${target}'`;
  }
}