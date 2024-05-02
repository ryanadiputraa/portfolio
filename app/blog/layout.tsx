import Image from 'next/image';
import { Header } from './header';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const now = new Date();

  return (
    <>
      <Header />
      <main className="min-h-[95vh] pt-20 pb-4 px-[4%] max-w-5xl mx-auto">{children}</main>
      <footer className="flex justify-between items-center py-3 px-6">
        <div className="flex items-center gap-4">
          <a href="https://github.com/ryanadiputraa" target="_blank" className="flex items-center gap-2">
            <Image
              src={'/assets/img/github.png'}
              width={30}
              height={30}
              alt="github"
              className="invert-0 dark:invert"
            />
          </a>
          <a href="https://www.linkedin.com/in/ryanadiputraa" target="_blank" className="flex items-center gap-2">
            <Image
              src={'/assets/img/linkedin.png'}
              width={30}
              height={30}
              alt="github"
              className="invert-0 dark:invert"
            />
          </a>
        </div>
        <p>
          © {now.getFullYear()}, <span className="font-black">RYAN ADI PUTRA</span>
        </p>
      </footer>
    </>
  );
}
