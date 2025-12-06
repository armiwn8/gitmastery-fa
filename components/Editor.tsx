import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { FileText, Plus, FolderOpen } from 'lucide-react';

export const Editor: React.FC = () => {
  const gitState = useStore(state => state.gitState);
  const updateFile = useStore(state => state.updateFile);
  const addFile = useStore(state => state.addFile);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [newFileName, setNewFileName] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const files = Object.keys(gitState.workingDirectory);

  const handleAddFile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFileName.trim()) return;
    
    const fileName = newFileName.trim();
    if (gitState.workingDirectory[fileName]) {
      setIsAdding(false);
      setSelectedFile(fileName);
      setNewFileName('');
      return;
    }
    
    addFile(fileName);
    setSelectedFile(fileName);
    setNewFileName('');
    setIsAdding(false);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-bg-surface border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
      {/* File Tabs / Explorer Header */}
      <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-[#161b22] border-b border-gray-200 dark:border-gray-800">
        <span className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
          <FolderOpen size={14} />
          فایل‌های پروژه
        </span>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-gray-500 transition"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar File List */}
        <div className="w-48 border-l border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0d1117] flex flex-col">
          {isAdding && (
            <form onSubmit={handleAddFile} className="p-2">
              <input 
                autoFocus
                className="w-full bg-white dark:bg-black border border-blue-500 rounded px-2 py-1 text-xs text-gray-900 dark:text-white outline-none dir-ltr"
                placeholder="filename..."
                value={newFileName}
                onChange={e => setNewFileName(e.target.value)}
                onBlur={() => setIsAdding(false)}
              />
            </form>
          )}
          
          <div className="flex-1 overflow-y-auto">
            {files.map(file => (
              <button
                key={file}
                onClick={() => setSelectedFile(file)}
                className={`w-full text-right px-3 py-2 text-sm flex items-center gap-2 transition-colors ${
                  selectedFile === file 
                    ? 'bg-white dark:bg-[#161b22] text-primary border-r-2 border-primary' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <FileText size={14} />
                <span className="truncate dir-ltr">{file}</span>
                {gitState.stagingArea[file] && <span className="w-2 h-2 rounded-full bg-green-500 mr-auto"></span>}
              </button>
            ))}
            {files.length === 0 && !isAdding && (
              <div className="p-4 text-center text-xs text-gray-400">
                پوشه خالی است
              </div>
            )}
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-white dark:bg-[#0d1117]">
          {selectedFile ? (
            <>
              <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-800 text-xs text-gray-400 font-mono dir-ltr flex justify-between items-center">
                <span>{selectedFile}</span>
                <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                  {gitState.stagingArea[selectedFile] ? 'Staged' : 'Modified'}
                </span>
              </div>
              <textarea
                className="flex-1 w-full p-4 bg-transparent resize-none outline-none font-mono text-sm text-gray-800 dark:text-gray-300 dir-ltr"
                value={gitState.workingDirectory[selectedFile] || ''}
                onChange={(e) => updateFile(selectedFile, e.target.value)}
                spellCheck={false}
              />
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
              یک فایل را برای ویرایش انتخاب کنید
            </div>
          )}
        </div>
      </div>
    </div>
  );
};