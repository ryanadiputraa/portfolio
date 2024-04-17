'use client';

import { useEffect } from 'react';

export type Theme = 'light' | 'dark';

export default function useTheme() {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }

    return () => document.documentElement.classList.remove('dark'); // reset theme for main page dynamic theme
  }, []);
}

export function toggleTheme() {
  if (localStorage.theme === 'dark') {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
  } else {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
  }
}

export function setTheme(theme: Theme, presist = false) {
  if (presist) localStorage.theme = theme;
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
