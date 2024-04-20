'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ReactScrollLink } from 'react-scroll';

const linkMotion = {
  initial: { width: 0 },
  hover: { width: '100%', transition: { duration: 0.1, ease: 'easeInOut' } },
};

export function Header(): React.ReactNode {
  return (
    <motion.header
      className="bg-white dark:bg-black transition-colors duration-500 fixed w-full flex justify-between items-center py-3 px-[4%] sm:px-6 z-20 shadow-sm shadow-white-grey dark:shadow-light-grey"
      animate={{ y: 0 }}
      initial={{ y: -100 }}
      transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
    >
      <ReactScrollLink className="cursor-pointer" to="intro" spy={true} smooth={true} offset={-50} duration={1000}>
        <Image src={'/assets/svg/logo.svg'} width={40} height={40} alt="logo" className="invert-0 dark:invert" />
      </ReactScrollLink>
      <nav className="flex gap-4 sm:gap-8 items-center">
        <Link className="cursor-pointer" href={'/blog'}>
          <motion.div initial="initial" whileHover="hover">
            <span className="text-xs sm:text-base">blog</span>
            <motion.div className="h-[0.1rem] rounded-full bg-accent-light" variants={linkMotion} />
          </motion.div>
        </Link>
        <NavItem href="about" text="about" />
        <NavItem href="projects" text="projects" />
        <ReactScrollLink className="cursor-pointer" to="contact" spy={true} smooth={true} offset={0} duration={1000}>
          <motion.div
            className="bg-black text-white dark:bg-white dark:text-black
             py-1 sm:py-2 px-3 sm:px-6 text-xs sm:text-base rounded-full text-center"
            whileHover={{
              scale: 1.05,
            }}
          >
            Contact Me
          </motion.div>
        </ReactScrollLink>
      </nav>
    </motion.header>
  );
}

function NavItem({ href, text }: { href: string; text: string }): React.ReactNode {
  return (
    <ReactScrollLink
      className="cursor-pointer hidden sm:inline-block"
      to={href}
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
    >
      <motion.div initial="initial" whileHover="hover">
        <span>{text}</span>
        <motion.div className="h-[0.1rem] rounded-full bg-accent-light" variants={linkMotion} />
      </motion.div>
    </ReactScrollLink>
  );
}
