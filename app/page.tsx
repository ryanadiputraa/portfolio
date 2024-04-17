'use client';

import Lenis from '@studio-freight/lenis';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Element, animateScroll } from 'react-scroll';

import { About } from './components/about';
import { Contact } from './components/contact';
import { Header } from './components/header';
import { Pattern } from './components/pattern';
import { Projects } from './components/projects';
import { setTheme } from './hooks/useTheme';

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const now = new Date();

  const { scrollYProgress: aboutSectionProgress } = useScroll({
    target: aboutRef,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: projectsSectionProgress } = useScroll({
    target: projectsRef,
    offset: ['start end', 'end start'],
  });

  const changeTheme = (position: number) => {
    if (position > 0.2 && position < 0.68) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  aboutSectionProgress.on('change', (latest) => changeTheme(latest));
  projectsSectionProgress.on('change', (latest) => changeTheme(latest));

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-16 px-[4%] sm:px-4 text-base bg-white dark:bg-black transition-colors duration-500">
        <Element name="intro" className="flex justify-center items-center min-h-[92vh] max-w-[96rem] mx-auto">
          <div className="flex flex-col gap-[8vh] z-10">
            <Intro />
            <Intro isTransparent />
            <Intro />
          </div>
          <Pattern />
          <motion.div
            className="absolute bottom-20 -right-8 sm:right-0 rotate-90 text-base sm:text-xl flex justify-start items-center gap-2 w-28"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
          >
            <span>scroll</span>
            <motion.div
              className="bg-black rounded-full h-1 absolute left-16"
              initial={{ width: 0 }}
              animate={{ width: '40%' }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
            />
          </motion.div>
        </Element>
        <About aboutRef={aboutRef} />
        <Projects projectsRef={projectsRef} />
        <Contact />
      </main>
      <footer className="bg-white dark:bg-black text-lg flex justify-center md:justify-between py-3 px-6">
        <p>
          © {now.getFullYear()}, <span className="font-black">RYAN ADI PUTRA</span>
        </p>
        <button
          className="font-black cursor-pointer hidden md:flex items-center gap-2"
          onClick={() => animateScroll.scrollToTop()}
        >
          BACK TO TOP
          <Image src={'/assets/img/arrow.png'} width={20} height={8} alt="arrow" className=" -rotate-90" />
        </button>
      </footer>
    </>
  );
}

function Intro({ isTransparent = false }: { isTransparent?: boolean }): React.ReactNode {
  return (
    <div className="">
      <motion.h4
        className={`font-black tracking-wider text-3xl sm:text-7xl lg:text-9xl ${
          isTransparent ? 'text-white' : 'text-soft-black'
        }`}
        style={isTransparent ? { textShadow: '0 0 0.5rem #0E0E0C' } : {}}
        initial={{ y: 100, clipPath: 'inset(100% 0 0 0)' }}
        animate={{ y: 0, clipPath: 'inset(0% 0 0 0)' }}
        transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
      >
        HEY, I&apos;M RYAN
      </motion.h4>
    </div>
  );
}
