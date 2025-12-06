import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';
import { GitEngine } from '../services/gitService';
import { challenges } from '../data/challenges';

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const gitState = useStore(state => state.gitState);
  const setGitState = useStore(state => state.setGitState);
  const terminalOutput = useStore(state => state.terminalOutput);
  const addTerminalLine = useStore(state => state.addTerminalLine);
  const clearTerminal = useStore(state => state.clearTerminal);
  const activeChallengeId = useStore(state => state.activeChallengeId);
  const completeChallenge = useStore(state => state.completeChallenge);
  const bottomRef = useRef<HTMLDivElement>(null);

  const engine = React.useMemo(() => {
    const getGitState = () => useStore.getState().gitState;
    return new GitEngine(getGitState, setGitState);
  }, [setGitState]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalOutput]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim();
    addTerminalLine('input', `$ ${cmd}`);
    setInput('');

    if (cmd === 'clear') {
      clearTerminal();
      return;
    }

    try {
      const output = engine.execute(cmd);
      if (output) addTerminalLine('output', output);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      addTerminalLine('error', `Error: ${errorMessage}`);
    }
  };

  // Check goal effect
  useEffect(() => {
    if (!activeChallengeId) return;
    const challenge = challenges.find(c => c.id === activeChallengeId);
    if (challenge && challenge.checkGoal(gitState)) {
      completeChallenge(activeChallengeId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gitState, activeChallengeId]);

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] text-green-400 font-mono text-sm p-4 rounded-lg shadow-inner overflow-hidden border border-gray-700" dir="ltr">
      <div className="flex-1 overflow-y-auto space-y-1 custom-scrollbar">
        {terminalOutput.map((line, idx) => (
          <div key={idx} className={`${line.type === 'input' ? 'text-white font-bold' : line.type === 'error' ? 'text-red-500' : 'text-gray-300'} whitespace-pre-wrap text-left`}>
            {line.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={handleCommand} className="mt-2 flex items-center border-t border-gray-700 pt-2">
        <span className="mr-2 text-blue-400 font-bold select-none">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600 text-left"
          placeholder="Enter git command..."
          autoFocus
        />
      </form>
    </div>
  );
};