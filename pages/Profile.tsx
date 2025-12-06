import React from 'react';
import { useStore } from '../store/useStore';
import { User, Award, Zap, GitCommit } from 'lucide-react';

export const Profile: React.FC = () => {
  const { user } = useStore();

  const xpForCurrentLevel = (user.level - 1) * 500;
  const xpForNextLevel = user.level * 500;
  const progress = ((user.xp - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100;

  return (
    <div className="w-full h-full overflow-y-auto p-6 md:p-12 custom-scrollbar flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white dark:bg-bg-surface rounded-3xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden">
        
        {/* Header */}
        <div className="h-32 bg-gradient-to-l from-primary to-purple-600 relative">
          <div className="absolute -bottom-12 right-10 p-1 bg-white dark:bg-bg-surface rounded-full">
            <img src={user.avatar} className="w-24 h-24 rounded-full border-4 border-white dark:border-bg-surface" alt="Profile" />
          </div>
        </div>

        <div className="pt-16 pb-10 px-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-500 dir-ltr text-right">@{user.email.split('@')[0]}</p>
            </div>
            <div className="text-center">
               <span className="block text-3xl font-bold text-primary">{user.level}</span>
               <span className="text-xs text-gray-500 uppercase">سطح</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
              <Zap className="mx-auto mb-2 text-yellow-500" />
              <div className="font-bold text-lg">{user.xp}</div>
              <div className="text-xs text-gray-500">مجموع XP</div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
              <GitCommit className="mx-auto mb-2 text-blue-500" />
              <div className="font-bold text-lg">{user.completedChallenges.length}</div>
              <div className="text-xs text-gray-500">چالش‌های تکمیل شده</div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
              <Award className="mx-auto mb-2 text-purple-500" />
              <div className="font-bold text-lg">0</div>
              <div className="text-xs text-gray-500">نشان‌ها</div>
            </div>
          </div>

          {/* Level Progress */}
          <div className="mb-8">
             <div className="flex justify-between text-sm mb-2">
               <span>پیشرفت سطح {user.level}</span>
               <span className="font-mono">{user.xp} / {xpForNextLevel} XP</span>
             </div>
             <div className="w-full h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
               <div className="h-full bg-primary transition-all duration-500" style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}></div>
             </div>
          </div>

          <button className="w-full py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            ویرایش پروفایل
          </button>
        </div>

      </div>
    </div>
  );
};