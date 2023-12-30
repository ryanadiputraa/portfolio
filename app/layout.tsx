import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import { Header } from './components/header';

import './globals.css';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ryan Adi Putra',
  description: 'Software Engineer portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-white`}>
        <Header />
        <main className="pt-16 px-[4%] sm:px-4 text-base">{children}</main>
      </body>
    </html>
  );
}
