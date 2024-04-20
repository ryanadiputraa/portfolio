'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import { Project } from './projects';

const imgContainerMotion = {
  initial: { borderRadius: 0 },
  hover: { borderRadius: '1.2rem', transition: { duration: 0.5, ease: 'easeInOut' } },
};
const linkContainerMotion = {
  initial: { height: 0 },
  hover: { height: '100%' },
};
const linkMotion = {
  inital: { display: 'none' },
  hover: { display: 'flex' },
};
const imgMotion = {
  initial: { scale: 1 },
  hover: { scale: 1.2, transition: { duration: 0.5, ease: 'easeInOut' } },
};

export function ProjectItem({ project, classNames }: { project: Project; classNames?: string }): React.ReactNode {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <motion.div className={`${classNames} flex flex-col gap-2`} initial="initial" whileHover="hover">
      <motion.div
        className="w-full overflow-hidden mb-4 relative"
        variants={isDesktop ? imgContainerMotion : {}}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <motion.div
          variants={isDesktop ? linkContainerMotion : {}}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="w-full bg-slate-300/70 backdrop-blur-sm absolute left-0 bottom-0 z-10 flex justify-center items-center gap-16"
        >
          <motion.a
            href={project.github}
            target="_blank"
            variants={isDesktop ? linkMotion : {}}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="hidden flex-col items-center gap-2"
          >
            <Image src={'/assets/img/github.png'} width={30} height={30} alt="github" className="w-16" />
            <span className="text-black text-sm font-bold text-center">Code</span>
          </motion.a>
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              variants={isDesktop ? linkMotion : {}}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="hidden flex-col items-center gap-2"
            >
              <Image src={'/assets/img/web.png'} width={30} height={30} alt="web" className="w-16" />
              <span className="text-black text-sm font-bold text-center">Live</span>
            </motion.a>
          )}
        </motion.div>
        <motion.img
          src={project.img}
          alt={project.title}
          width={400}
          height={160}
          className="w-full"
          variants={isDesktop ? imgMotion : {}}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </motion.div>
      <div className="flex flex-wrap gap-2">
        {project.stacks.map((stack) => (
          <span key={stack} className="text-accent py-1 px-3 border-accent border-2 rounded-full font-medium">
            {stack}
          </span>
        ))}
      </div>
      <h5 className="text-5xl font-semibold">{project.title}</h5>
      <p className="text-xl">{project.description}</p>
      {!isDesktop && (
        <div className="mt-4 flex gap-4">
          <a href={project.github} target="_blank" className="flex flex-col items-center gap-1">
            <Image
              src={'/assets/img/github.png'}
              width={20}
              height={20}
              alt="github"
              className="w-8 invert-0 dark:invert"
            />
            <span className="italic text-sm">Code</span>
          </a>
          {project.live && (
            <a href={project.github} target="_blank" className="flex flex-col items-center gap-1">
              <Image
                src={'/assets/img/web.png'}
                width={20}
                height={20}
                alt="web"
                className="w-8 invert-0 dark:invert"
              />
              <span className="italic text-sm">Live</span>
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
