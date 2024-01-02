'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export function Header(): React.ReactNode {
  return (
    <motion.header
      className="bg-white fixed w-full flex justify-between items-center py-3 px-[4%] sm:px-6 z-20 shadow-sm"
      animate={{ y: 0 }}
      initial={{ y: -100 }}
      transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
    >
      <Link className="cursor-pointer" to="intro" spy={true} smooth={true} offset={0} duration={500}>
        <h1 className="font-black text-base sm:text-3xl">ryan</h1>
      </Link>
      <nav className="flex gap-8 items-center">
        <NavItem href="about" text="about" />
        <NavItem href="skills" text="skills" />
        <NavItem href="projects" text="projects" />
        <Link className="cursor-pointer" to="contact" spy={true} smooth={true} offset={0} duration={500}>
          <motion.div
            className="py-1 sm:py-2 px-3 sm:px-6 bg-black text-white text-sm sm:text-base rounded-full"
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

function NavItem({ href, text }: { href: string; text: string }): React.ReactNode {
  return (
    <Link className="cursor-pointer" to={href} spy={true} smooth={true} offset={0} duration={500}>
      <motion.div className="hidden sm:inline-block" initial="initial" whileHover="hover">
        <span>{text}</span>
        <motion.div className="h-[0.1rem] rounded-full bg-accent-light" variants={linkMotion} />
      </motion.div>
    </Link>
  );
}
