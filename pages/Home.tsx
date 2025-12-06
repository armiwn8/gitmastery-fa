import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeft, Terminal, Shield, Award } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="w-full h-full overflow-y-auto custom-scrollbar p-6 md:p-12">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-10">
        <div className="flex-1 space-y-8 text-center md:text-right">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold">
            نسخه آزمایشی v1.0
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-l from-primary to-purple-500">
            استادِ گیت شو!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
            اولین پلتفرم تعاملی و فارسی آموزش گیت. بدون نصب هیچ نرم‌افزاری، 
            در محیط شبیه‌سازی شده کد بزن، چالش‌ها را حل کن و مهارتت را بالا ببر.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <NavLink to="/playground" className="px-8 py-4 bg-primary hover:bg-primary-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/30 transition-transform transform hover:-translate-y-1 flex items-center justify-center gap-3">
              شروع یادگیری
              <ArrowLeft />
            </NavLink>
            <NavLink to="/cheatsheet" className="px-8 py-4 bg-white dark:bg-bg-surface hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 rounded-2xl font-bold text-lg transition-transform transform hover:-translate-y-1">
              مشاهده تقلب‌نامه
            </NavLink>
          </div>
        </div>
        
        {/* Abstract Graphic */}
        <div className="flex-1 relative hidden md:block">
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-3xl shadow-2xl border border-gray-800 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-500 text-xs font-mono mr-auto">bash — 80x24</span>
            </div>
            <div className="font-mono text-sm space-y-2 dir-ltr text-left">
              <div className="flex gap-2">
                <span className="text-green-400">user@gitmaster:~$</span>
                <span className="text-white typing-effect">git init project</span>
              </div>
              <div className="text-gray-400">Initialized empty Git repository in /project/.git/</div>
              <div className="flex gap-2">
                <span className="text-green-400">user@gitmaster:~$</span>
                <span className="text-white">git add .</span>
              </div>
              <div className="flex gap-2">
                <span className="text-green-400">user@gitmaster:~$</span>
                <span className="text-white">git commit -m "Start learning"</span>
              </div>
              <div className="text-gray-400">[main (root-commit) 8a2b1c] Start learning</div>
              <div className="text-gray-400 pl-4"> 2 files changed, 14 insertions(+)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto mt-24 grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-bg-surface p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition">
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
            <Terminal size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3">محیط واقعی</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            دستورات گیت را در یک ترمینال شبیه‌سازی شده اجرا کنید. بدون ترس از خرابکاری، آزمایش کنید.
          </p>
        </div>
        <div className="bg-white dark:bg-bg-surface p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition">
          <div className="w-14 h-14 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6">
            <Shield size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3">مسیر یادگیری</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            از مفاهیم پایه مثل init و commit شروع کنید تا مباحث پیشرفته مثل rebase و cherry-pick.
          </p>
        </div>
        <div className="bg-white dark:bg-bg-surface p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition">
          <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6">
            <Award size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3">مبتنی بر بازی</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            با حل چالش‌ها امتیاز (XP) بگیرید، سطح خود را بالا ببرید و نشان‌های افتخار دریافت کنید.
          </p>
        </div>
      </section>
    </div>
  );
};