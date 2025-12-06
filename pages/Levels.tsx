import React from 'react';
import { useNavigate } from 'react-router-dom';
import { challenges } from '../data/challenges';
import { useStore } from '../store/useStore';
import { Lock, Check, Star } from 'lucide-react';

export const Levels: React.FC = () => {
  const { user, startChallenge } = useStore();
  const navigate = useNavigate();

  // Group by level
  const grouped = {
    beginner: challenges.filter(c => c.level === 'beginner'),
    intermediate: challenges.filter(c => c.level === 'intermediate'),
    advanced: challenges.filter(c => c.level === 'advanced'),
  };

  return (
    <div className="w-full h-full overflow-y-auto p-6 md:p-12 custom-scrollbar">
      <h1 className="text-3xl font-bold mb-8">نقشه راه یادگیری</h1>
      
      <div className="space-y-12 max-w-4xl mx-auto">
        
        {/* Beginner */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-green-100 text-green-600 rounded-xl">
               <Star size={24} fill="currentColor" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">مقدماتی</h2>
              <p className="text-gray-500">شروع کار با مفاهیم اولیه گیت</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {grouped.beginner.map(challenge => {
              const isCompleted = user.completedChallenges.includes(challenge.id);
              return (
                <button
                   key={challenge.id}
                   onClick={() => {
                     startChallenge(challenge.id);
                     navigate('/playground');
                   }}
                   className={`relative w-full p-6 rounded-2xl border-2 transition-all group overflow-hidden text-right ${isCompleted ? 'bg-green-50/50 border-green-200 dark:bg-green-900/10 dark:border-green-900' : 'bg-white dark:bg-bg-surface border-gray-100 dark:border-gray-800 hover:border-primary/50'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">LVL {challenge.id}</span>
                    {isCompleted ? <div className="p-1 bg-green-500 rounded-full text-white"><Check size={14} /></div> : null}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{challenge.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{challenge.description.substring(0, 60)}...</p>
                  <div className="flex items-center gap-2 text-xs font-bold text-primary">
                    <span>{challenge.xp} XP</span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Intermediate */}
        <section className="opacity-75">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-yellow-100 text-yellow-600 rounded-xl">
               <Star size={24} fill="currentColor" />
            </div>
             <div>
              <h2 className="text-2xl font-bold">متوسط</h2>
              <p className="text-gray-500">کار با شاخه‌ها و مدیریت تغییرات</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {grouped.intermediate.map(challenge => (
               <button
                   key={challenge.id}
                   onClick={() => {
                     startChallenge(challenge.id);
                     navigate('/playground');
                   }}
                   className="relative w-full p-6 rounded-2xl bg-white dark:bg-bg-surface border border-gray-100 dark:border-gray-800 hover:border-primary transition-colors text-right"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">LVL {challenge.id}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{challenge.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-bold text-primary mt-4">
                    <span>{challenge.xp} XP</span>
                  </div>
                </button>
            ))}
          </div>
        </section>

         {/* Advanced */}
        <section className="opacity-50 grayscale">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl">
               <Star size={24} fill="currentColor" />
            </div>
             <div>
              <h2 className="text-2xl font-bold">پیشرفته</h2>
              <p className="text-gray-500">قفل شده</p>
            </div>
          </div>
          <div className="p-10 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl text-center text-gray-400">
             <Lock className="mx-auto mb-2" />
             <p>برای باز کردن این سطح باید مراحل قبلی را تکمیل کنید</p>
          </div>
        </section>

      </div>
    </div>
  );
};