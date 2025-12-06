import React, { useState } from 'react';
import { Search, Copy } from 'lucide-react';

const commands = [
  { cmd: 'git init', desc: 'ایجاد یک مخزن جدید گیت در پوشه فعلی', category: 'setup' },
  { cmd: 'git clone [url]', desc: 'دریافت یک کپی کامل از یک مخزن راه دور', category: 'setup' },
  { cmd: 'git status', desc: 'نمایش وضعیت فایل‌های تغییر یافته', category: 'basic' },
  { cmd: 'git add [file]', desc: 'افزودن فایل به ناحیه Staging برای کامیت بعدی', category: 'basic' },
  { cmd: 'git commit -m "[msg]"', desc: 'ثبت تغییرات استیج شده در تاریخچه با یک پیام', category: 'basic' },
  { cmd: 'git branch', desc: 'لیست کردن تمام شاخه‌های محلی', category: 'branching' },
  { cmd: 'git branch [name]', desc: 'ساختن یک شاخه جدید', category: 'branching' },
  { cmd: 'git checkout [branch]', desc: 'تغییر مسیر به یک شاخه دیگر', category: 'branching' },
  { cmd: 'git merge [branch]', desc: 'ادغام شاخه مشخص شده با شاخه فعلی', category: 'branching' },
  { cmd: 'git remote -v', desc: 'نمایش آدرس‌های مخزن راه دور', category: 'remote' },
  { cmd: 'git push', desc: 'ارسال تغییرات به مخزن راه دور', category: 'remote' },
  { cmd: 'git pull', desc: 'دریافت و ادغام تغییرات از مخزن راه دور', category: 'remote' },
];

export const CheatSheet: React.FC = () => {
  const [filter, setFilter] = useState('');

  const filtered = commands.filter(c => 
    c.cmd.toLowerCase().includes(filter.toLowerCase()) || 
    c.desc.includes(filter)
  );

  return (
    <div className="w-full h-full overflow-y-auto p-6 md:p-10 max-w-5xl mx-auto custom-scrollbar">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">تقلب‌نامه گیت</h1>
        <p className="text-gray-500">مهم‌ترین دستورات گیت که هر توسعه‌دهنده‌ای باید بداند.</p>
      </div>

      <div className="relative mb-8">
        <Search className="absolute right-4 top-3 text-gray-400" size={20} />
        <input 
          type="text" 
          placeholder="جستجو در دستورات..." 
          className="w-full bg-white dark:bg-bg-surface border border-gray-200 dark:border-gray-700 rounded-xl py-3 pr-12 pl-4 outline-none focus:ring-2 ring-primary/50 transition-shadow"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((item, idx) => (
          <div key={idx} className="bg-white dark:bg-bg-surface p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-3">
              <code className="bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-blue-400 px-3 py-1 rounded-lg font-mono text-sm font-bold dir-ltr">
                {item.cmd}
              </code>
              <button 
                className="text-gray-400 hover:text-primary transition opacity-0 group-hover:opacity-100"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(item.cmd);
                  } catch (error) {
                    console.error('Failed to copy to clipboard:', error);
                  }
                }}
                title="کپی"
              >
                <Copy size={16} />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {item.desc}
            </p>
            <span className="inline-block mt-3 text-[10px] uppercase tracking-wider text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded">
              {item.category}
            </span>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          دستوری با این مشخصات یافت نشد.
        </div>
      )}
    </div>
  );
};