export interface File {
  name: string;
  content: string;
}

export interface Commit {
  id: string;
  message: string;
  author: string;
  timestamp: Date;
  parentIds: string[];
  files: Record<string, string>; // Snapshot of files
}

export interface Branch {
  name: string;
  commitId: string | null;
}

export interface GitState {
  workingDirectory: Record<string, string>;
  stagingArea: Record<string, string>;
  commits: Commit[];
  branches: Record<string, string | null>; // name -> commitId
  currentBranch: string;
  HEAD: string | null; // commitId
  isInitialized: boolean;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  initialFiles: Record<string, string>;
  hints: string[];
  checkGoal: (state: GitState) => boolean;
  xp: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  xp: number;
  level: number;
  completedChallenges: string[];
  badges: string[];
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}