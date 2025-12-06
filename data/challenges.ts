import { Challenge } from '../types';

export const challenges: Challenge[] = [
  {
    id: '1',
    title: 'شروع کار (Init)',
    description: 'یک مخزن گیت جدید بسازید. دستور `git init` را اجرا کنید تا مخزن شما آماده شود.',
    level: 'beginner',
    initialFiles: {},
    hints: ['تایپ کن git init'],
    checkGoal: (state) => state.isInitialized,
    xp: 50,
  },
  {
    id: '2',
    title: 'اولین کامیت',
    description: 'ابتدا مخزن گیت را راه‌اندازی کنید، سپس فایل `README.md` را به استیج ببرید و کامیت کنید.',
    level: 'beginner',
    initialFiles: {
      'README.md': '# Hello World'
    },
    hints: ['ابتدا git init را اجرا کن', 'سپس git add README.md', 'در نهایت git commit -m "message"'],
    checkGoal: (state) => {
      if (!state.isInitialized) return false;
      const headCommit = state.commits.find(c => c.id === state.HEAD);
      return !!headCommit && !!headCommit.files['README.md'];
    },
    xp: 100,
  },
  {
    id: '3',
    title: 'ساخت برنچ (Branch)',
    description: 'ابتدا مخزن گیت را راه‌اندازی کنید، سپس یک شاخه جدید به نام `feature` بسازید.',
    level: 'intermediate',
    initialFiles: { 'main.js': 'console.log("App");' },
    hints: ['ابتدا git init را اجرا کن', 'سپس git branch feature'],
    checkGoal: (state) => {
      return state.isInitialized && Object.keys(state.branches).includes('feature');
    },
    xp: 150,
  },
  {
    id: '4',
    title: 'تغییر مسیر (Checkout)',
    description: 'ابتدا یک شاخه به نام `feature` بسازید، سپس به آن بروید.',
    level: 'intermediate',
    initialFiles: { 'style.css': 'body { color: red; }' },
    hints: ['ابتدا git init را اجرا کن', 'سپس git branch feature', 'در نهایت git checkout feature'],
    checkGoal: (state) => {
      return state.isInitialized && state.currentBranch === 'feature' && Object.keys(state.branches).includes('feature');
    },
    xp: 150,
  }
];