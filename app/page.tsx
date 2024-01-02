'use client';

import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Element } from 'react-scroll';

import { About } from './components/about';
import { Pattern } from './components/pattern';

export default function Home() {
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
      <Element name="intro" className="relative flex justify-center items-center min-h-[92vh]">
        <div className="flex flex-col gap-[8vh] z-10">
          <Intro />
          <Intro isTransparent />
          <Intro />
        </div>
        <Pattern />
        <motion.div
          className="absolute bottom-20 -right-12 sm:right-0 rotate-90 text-base sm:text-xl flex justify-start items-center gap-2 w-28"
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
      <About />
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
