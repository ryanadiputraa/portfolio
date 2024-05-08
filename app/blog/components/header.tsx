'use client';

import Image from 'next/image';
import Link from 'next/link';

import useTheme, { toggleTheme } from '@/hooks/useTheme';

export function Header() {
  useTheme();

  return (
    <header className=" bg-white dark:bg-black shadow-white-grey dark:shadow-light-grey fixed w-full flex justify-between items-center py-3 px-[4%] sm:px-6 z-20 shadow-sm">
      <Link href={'/'} className="flex items-center gap-2">
        <Image src={'/assets/svg/logo.svg'} alt="logo" width={20} height={20} className="w-8 invert-0 dark:invert" />
        <span>Home</span>
      </Link>
      <div className="flex items-center gap-8">
        <Link href={'/blog'}>blog</Link>
        <button onClick={toggleTheme} className="bg-black dark:bg-white rounded-full w-12 h-6 relative">
          <div className="w-4 h-4 bg-yellow-200 dark:bg-blue-500 rounded-full absolute top-1 left-1 dark:left-7 transition-all" />
        </button>
      </div>
    </header>
  );
}
