import React from 'react';
import { useStore } from '../store/useStore';

export const GitGraph: React.FC = () => {
  const gitState = useStore(state => state.gitState);
  const { commits, HEAD } = gitState;
  
  const reversedCommits = [...commits].reverse();

  return (
    <div className="h-full bg-white dark:bg-bg-surface border border-gray-200 dark:border-gray-800 rounded-lg p-4 overflow-y-auto">
      <h3 className="text-gray-500 text-xs font-bold uppercase mb-4 tracking-wider">تاریخچه کامیت‌ها</h3>
      
      {commits.length === 0 ? (
        <div className="text-center text-gray-400 text-sm mt-10">
          هنوز کامیتی وجود ندارد
        </div>
      ) : (
        <div className="relative border-r-2 border-gray-300 dark:border-gray-700 mr-4 space-y-6 pr-6">
          {reversedCommits.map((commit) => (
            <div key={commit.id} className="relative flex items-center">
              {/* Dot */}
              <div className={`absolute -right-[29px] w-4 h-4 rounded-full border-2 ${HEAD === commit.id ? 'bg-primary border-primary shadow-[0_0_10px_rgba(52,98,238,0.5)]' : 'bg-gray-200 dark:bg-gray-700 border-gray-400'}`}></div>
              
              <div className={`flex-1 p-3 rounded-md border ${HEAD === commit.id ? 'bg-primary/10 border-primary/30' : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'}`}>
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-mono text-primary-600 dark:text-blue-400 font-bold">{commit.id}</span>
                  <span className="text-[10px] text-gray-400">{commit.timestamp.toLocaleTimeString()}</span>
                </div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{commit.message}</p>
                <div className="mt-2 flex gap-1 flex-wrap">
                  {Object.keys(gitState.branches).map(branch => 
                    gitState.branches[branch] === commit.id && (
                      <span key={branch} className="px-2 py-0.5 rounded text-[10px] bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                        {branch}
                      </span>
                    )
                  )}
                  {HEAD === commit.id && (
                    <span className="px-2 py-0.5 rounded text-[10px] bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                      HEAD
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};