import React, { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { challenges } from '../data/challenges';
import { Terminal } from '../components/Terminal';
import { Editor } from '../components/Editor';
import { GitGraph } from '../components/GitGraph';
import { CheckCircle, HelpCircle, ChevronRight } from 'lucide-react';

export const Playground: React.FC = () => {
  const activeChallengeId = useStore(state => state.activeChallengeId);
  const startChallenge = useStore(state => state.startChallenge);
  const user = useStore(state => state.user);
  
  const currentChallenge = challenges.find(c => c.id === activeChallengeId);
  const isCompleted = currentChallenge ? user.completedChallenges.includes(currentChallenge.id) : false;

  useEffect(() => {
    if (!activeChallengeId && challenges.length > 0) {
      const firstChallengeId = challenges[0].id;
      if (firstChallengeId) {
        startChallenge(firstChallengeId);
      }
    }
    // Only run when activeChallengeId changes from undefined/null to a value or vice versa
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChallengeId]);

  return (
    <div className="h-full flex flex-col md:flex-row p-2 md:p-4 gap-4 overflow-hidden">
      
      {/* Left Column: Instructions & Challenges List */}
      <div className="w-full md:w-1/4 flex flex-col gap-4 min-w-[280px]">
        {/* Current Mission Card */}
        <div className="bg-white dark:bg-bg-surface rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-800 flex flex-col gap-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2 h-full bg-primary"></div>
          {currentChallenge ? (
            <>
              <div className="flex justify-between items-start">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-bold">
                  مرحله {currentChallenge.id}
                </span>
                {isCompleted && <CheckCircle className="text-success" size={20} />}
              </div>
              <h2 className="text-xl font-bold">{currentChallenge.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {currentChallenge.description}
              </p>
              
              <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center gap-2 text-yellow-700 dark:text-yellow-500 mb-1">
                  <HelpCircle size={16} />
                  <span className="text-xs font-bold">راهنما</span>
                </div>
                <ul className="text-xs text-yellow-800 dark:text-yellow-400 space-y-1 list-disc list-inside">
                  {currentChallenge.hints.map((hint, i) => <li key={i}>{hint}</li>)}
                </ul>
              </div>
            </>
          ) : (
            <div className="text-center py-10">
              <p>هیچ چالشی انتخاب نشده است.</p>
            </div>
          )}
        </div>

        {/* Challenge List Mini */}
        <div className="flex-1 bg-white dark:bg-bg-surface rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-100 dark:border-gray-800">
             <h3 className="font-bold text-gray-700 dark:text-gray-200">لیست مراحل</h3>
          </div>
          <div className="overflow-y-auto flex-1 p-2 space-y-1 custom-scrollbar">
            {challenges.map(c => {
               const isActive = c.id === activeChallengeId;
               const isDone = user.completedChallenges.includes(c.id);
               return (
                 <button 
                    key={c.id}
                    onClick={() => startChallenge(c.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-right text-sm ${isActive ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
                 >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono border ${isDone ? 'bg-success border-success text-white' : isActive ? 'bg-white/20 border-white text-white' : 'bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-700'}`}>
                        {isDone ? '✓' : c.id}
                      </span>
                      <span>{c.title}</span>
                    </div>
                    {isActive && <ChevronRight size={16} className="rotate-180" />}
                 </button>
               )
            })}
          </div>
        </div>
      </div>

      {/* Middle Column: Editor & Terminal */}
      <div className="flex-1 flex flex-col gap-4 min-w-[300px]">
        <div className="h-1/2 min-h-[300px]">
          <Editor />
        </div>
        <div className="h-1/2 min-h-[300px]">
          <Terminal />
        </div>
      </div>

      {/* Right Column: Visualization (Hidden on mobile) */}
      <div className="hidden lg:block w-1/5 min-w-[200px]">
        <GitGraph />
      </div>

    </div>
  );
};