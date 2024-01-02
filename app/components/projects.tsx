'use client';

import { motion } from 'framer-motion';
import { MutableRefObject } from 'react';
import { Element } from 'react-scroll';

import { Theme } from '@/types/theme';

interface Project {
  title: string;
  description: string;
  img: string;
  stacks: string[];
  github: string;
}

const projects: Project[] = [
  {
    title: 'ggen CLI',
    description: 'A CLI for generating go project that use idiomatic go project standard layout.',
    img: '/img/ggen.png',
    stacks: ['Go', 'Cobra', 'Bash'],
    github: 'https://github.com/ryanadiputraa/ggen',
  },
  {
    title: 'UD Rio Digital Printing Website',
    description:
      'Website for UD Rio Digital Printing, allowing customer to place orders online with automatic email notification and Admin Panel for website admin to manage products and customer orders.',
    img: '/img/udrio.png',
    stacks: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'Docker', 'NextJS', 'Typescript', 'Tailwind CSS'],
    github: 'https://github.com/ryanadiputraa/api-udrio',
  },
  {
    title: 'Spotwave',
    description:
      'Spotify playlist MP3 downloader using Spotify, Youtube, and MP3 converter API. It fetch user Spotify playlist and searchs it on Youtube, then convert and download the MP3.',
    img: '/img/spotwave.png',
    stacks: ['Go', 'Fiber', 'ReactJS', 'Typescript', 'Tailwind CSS'],
    github: 'https://github.com/ryanadiputraa/spotwave',
  },
];

export function Projects({
  theme,
  projectsRef,
}: {
  theme: Theme;
  projectsRef: MutableRefObject<null>;
}): React.ReactNode {
  return (
    <Element name="projects">
      <div ref={projectsRef} className="py-20 md:px-20">
        <h4 className="text-4xl sm:text-7xl text-accent font-medium text-center mb-8">PROJECTS</h4>
        <div className="flex flex-col">
          <ProjectItem theme={theme} project={projects[0]} classNames="w-full md:w-1/2 self-center" />
          <div className="mt-20 flex flex-wrap justify-between">
            <ProjectItem theme={theme} project={projects[1]} classNames="w-full md:w-7/12" />
            <ProjectItem theme={theme} project={projects[2]} classNames="w-full md:w-4/12" />
          </div>
        </div>
      </div>
    </Element>
  );
}

const imgContainerMotion = {
  initial: { borderRadius: 0 },
  hover: { borderRadius: '2rem', transition: { duration: 0.5, ease: 'easeInOut' } },
};
const imgMotion = {
  initial: { borderRadius: 0, scale: 1 },
  hover: { borderRadius: '2rem', scale: 1.2, transition: { duration: 0.5, ease: 'easeInOut' } },
};

function ProjectItem({
  theme,
  project,
  classNames,
}: {
  theme: Theme;
  project: Project;
  classNames?: string;
}): React.ReactNode {
  return (
    <motion.div
      className={`${classNames} ${theme === 'light' ? 'text-black' : 'text-white'} flex flex-col gap-2`}
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="w-full overflow-hidden mb-4 cursor-pointer"
        variants={imgContainerMotion}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        onClick={() => {
          window.open(project.github);
        }}
      >
        <motion.img
          src={project.img}
          alt={project.title}
          width={400}
          height={160}
          className="w-full"
          variants={imgMotion}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </motion.div>
      <div className="flex flex-wrap gap-2">
        {project.stacks.map((stack) => (
          <span key={stack} className="text-accent py-1 px-3 border-accent border-2 rounded-full">
            {stack}
          </span>
        ))}
      </div>
      <h5 className="text-5xl">{project.title}</h5>
      <p className="text-xl">{project.description}</p>
    </motion.div>
  );
}
