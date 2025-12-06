import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Terminal, Map, BookOpen, User, Sun, Moon, GitBranch } from 'lucide-react';

export const Layout: React.FC = () => {
  const theme = useStore(state => state.theme);
  const toggleTheme = useStore(state => state.toggleTheme);
  const user = useStore(state => state.user);

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const navItems = [
    { to: '/', icon: <GitBranch />, label: 'خانه' },
    { to: '/levels', icon: <Map />, label: 'مراحل' },
    { to: '/playground', icon: <Terminal />, label: 'تمرین' },
    { to: '/cheatsheet', icon: <BookOpen />, label: 'تقلب‌نامه' },
    { to: '/profile', icon: <User />, label: 'پروفایل' },
  ];

  return (
    <div className="h-full w-full bg-gray-50 dark:bg-bg-dark text-gray-900 dark:text-gray-100 flex flex-col md:flex-row transition-colors duration-200">
      {/* Sidebar Navigation */}
      <nav className="w-full md:w-20 lg:w-64 bg-white dark:bg-bg-surface border-b md:border-b-0 md:border-l border-gray-200 dark:border-gray-800 flex flex-row md:flex-col justify-between p-4 z-50 shadow-sm md:shadow-none fixed md:relative bottom-0 md:top-0 h-16 md:h-full">
        <div className="hidden md:flex flex-col gap-8">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-xl">
              G
            </div>
            <span className="font-bold text-lg hidden lg:block tracking-tight text-primary">گیت مستری</span>
          </div>

          <div className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400'}`}
              >
                {React.cloneElement(item.icon as React.ReactElement, { size: 22 })}
                <span className="font-medium hidden lg:block">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex w-full justify-between items-center">
             {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `p-2 rounded-lg ${isActive ? 'text-primary bg-primary/10' : 'text-gray-400'}`}
              >
                {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
              </NavLink>
            ))}
        </div>

        <div className="hidden md:flex flex-col gap-4 px-2">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
             {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
             <span className="hidden lg:block text-sm">حالت {theme === 'dark' ? 'شب' : 'روز'}</span>
          </button>
          
          {/* User Mini Profile */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
             <img src={user.avatar} alt="User" className="w-10 h-10 rounded-full border-2 border-primary" />
             <div className="hidden lg:block">
               <p className="text-sm font-bold">{user.name}</p>
               <p className="text-xs text-primary font-mono">{user.xp} XP (Level {user.level})</p>
             </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 h-[calc(100vh-64px)] md:h-full overflow-hidden relative pt-16 md:pt-0">
        <Outlet />
      </main>
    </div>
  );
};