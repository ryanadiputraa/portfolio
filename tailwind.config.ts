import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FCFCFC',
        'white-grey': '#D9D9D9',
        black: '#171715',
        'soft-black': '#262626',
        accent: '#8C8C73',
        'accent-light': '#AEAE9D',
        'light-grey': '#666666',
        grey: '#4D4D4D',
      },
    },
  },
  plugins: [],
};
export default config;
