'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from 'react-scroll';

import { Theme } from '@/types/theme';

export function Header({ theme }: { theme: Theme }): React.ReactNode {
  return (
    <motion.header
      className={`${
        theme === 'light' ? 'bg-white' : 'bg-black'
      } transition-colors duration-500 fixed w-full flex justify-between items-center py-3 px-[4%] sm:px-6 z-20 shadow-sm ${
        theme === 'light' ? 'shadow-white-grey' : 'shadow-light-grey'
      }`}
      animate={{ y: 0 }}
      initial={{ y: -100 }}
      transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
    >
      <Link className="cursor-pointer" to="intro" spy={true} smooth={true} offset={-50} duration={1000}>
        <Image src={theme === 'light' ? '/img/logo.svg' : '/img/logo-white.svg'} width={40} height={40} alt="logo" />
      </Link>
      <nav className="flex gap-8 items-center">
        <NavItem theme={theme} href="about" text="about" />
        <NavItem theme={theme} href="projects" text="projects" />
        <Link className="cursor-pointer" to="contact" spy={true} smooth={true} offset={0} duration={1000}>
          <motion.div
            className={`${
              theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'
            } py-1 sm:py-2 px-3 sm:px-6 text-sm sm:text-base rounded-full text-center`}
            whileHover={{
              scale: 1.05,
            }}
          >
            Contact Me
          </motion.div>
        </Link>
      </nav>
    </motion.header>
  );
}

const linkMotion = {
  initial: { width: 0 },
  hover: { width: '100%', transition: { duration: 0.1, ease: 'easeInOut' } },
};

function NavItem({ theme, href, text }: { theme: Theme; href: string; text: string }): React.ReactNode {
  return (
    <Link className="cursor-pointer" to={href} spy={true} smooth={true} offset={0} duration={1000}>
      <motion.div className="hidden sm:inline-block" initial="initial" whileHover="hover">
        <span className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>{text}</span>
        <motion.div className="h-[0.1rem] rounded-full bg-accent-light" variants={linkMotion} />
      </motion.div>
    </Link>
  );
}
