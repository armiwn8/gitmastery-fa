import { create } from 'zustand';
import { User, GitState, Challenge } from '../types';
import { challenges } from '../data/challenges';

interface AppState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  user: User;
  activeChallengeId: string | null;
  gitState: GitState;
  terminalOutput: Array<{ type: 'input' | 'output' | 'error', content: string }>;
  
  // Actions
  setGitState: (state: GitState) => void;
  startChallenge: (id: string) => void;
  addTerminalLine: (type: 'input' | 'output' | 'error', content: string) => void;
  clearTerminal: () => void;
  completeChallenge: (id: string) => void;
  updateFile: (name: string, content: string) => void;
  addFile: (name: string) => void;
}

const initialGitState: GitState = {
  workingDirectory: {},
  stagingArea: {},
  commits: [],
  branches: {},
  currentBranch: 'main',
  HEAD: null,
  isInitialized: false,
};

export const useStore = create<AppState>((set, get) => ({
  theme: 'dark',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  
  user: {
    id: 'user-1',
    name: 'کدآموز',
    email: 'user@example.com',
    avatar: '/assets/images/user.jpg',
    xp: 0,
    level: 1,
    completedChallenges: [],
    badges: [],
  },

  activeChallengeId: null,
  gitState: initialGitState,
  terminalOutput: [
    { type: 'output', content: 'Welcome to GitMastery Terminal.' },
    { type: 'output', content: 'Select a challenge from the sidebar to start.' },
  ],

  setGitState: (gitState) => set({ gitState }),

  startChallenge: (id) => {
    const challenge = challenges.find(c => c.id === id);
    if (!challenge) {
      console.warn(`Challenge with id "${id}" not found`);
      return;
    }

    set({
      activeChallengeId: id,
      gitState: {
        ...initialGitState,
        workingDirectory: { ...challenge.initialFiles },
      },
      terminalOutput: [
        { type: 'output', content: `Started challenge: ${challenge.title}` },
        { type: 'output', content: 'Check the instructions panel for details.' },
      ]
    });
  },

  addTerminalLine: (type, content) => set(state => ({
    terminalOutput: [...state.terminalOutput, { type, content }]
  })),

  clearTerminal: () => set({ terminalOutput: [] }),

  completeChallenge: (id) => set(state => {
    if (state.user.completedChallenges.includes(id)) return state;
    
    const challenge = challenges.find(c => c.id === id);
    const xpGain = challenge ? challenge.xp : 0;

    return {
      user: {
        ...state.user,
        completedChallenges: [...state.user.completedChallenges, id],
        xp: state.user.xp + xpGain,
        level: Math.floor((state.user.xp + xpGain) / 500) + 1
      },
      terminalOutput: [...state.terminalOutput, { type: 'output', content: `🎉 Congratulations! Challenge completed. +${xpGain} XP` }]
    };
  }),

  updateFile: (name, content) => set(state => ({
    gitState: {
      ...state.gitState,
      workingDirectory: {
        ...state.gitState.workingDirectory,
        [name]: content
      }
    }
  })),

  addFile: (name) => set(state => ({
    gitState: {
      ...state.gitState,
      workingDirectory: {
        ...state.gitState.workingDirectory,
        [name]: ''
      }
    }
  })),

}));