import Image from 'next/image';
import Link from 'next/link';

import { Header } from './components/header';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const now = new Date();

  return (
    <>
      <Header />
      <main className="min-h-[94vh] pt-20 pb-4 px-[4%] max-w-5xl mx-auto">{children}</main>
      <footer className="flex justify-between items-center py-3 px-6">
        <div className="flex items-center gap-4">
          <a href="https://github.com/ryanadiputraa" target="_blank" className="flex items-center gap-2">
            <Image
              src={'/assets/img/github.png'}
              width={24}
              height={24}
              alt="github"
              className="invert-0 dark:invert"
            />
          </a>
          <a href="https://www.linkedin.com/in/ryanadiputraa" target="_blank" className="flex items-center gap-2">
            <Image
              src={'/assets/img/linkedin.png'}
              width={24}
              height={24}
              alt="github"
              className="invert-0 dark:invert"
            />
          </a>
        </div>
        <Link href={'/'}>
          © {now.getFullYear()}, <span className="font-black">RYAN ADI PUTRA</span>
        </Link>
      </footer>
    </>
  );
}
