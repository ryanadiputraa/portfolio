'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MutableRefObject } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';

import { Theme } from '@/types/theme';
import { SubHeader } from './sub-header';

interface Project {
  title: string;
  description: string;
  img: string;
  stacks: string[];
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: 'unClatter',
    description: 'A web content scrapping and bookmarking tool, allowing users to manage essential content.',
    img: '/img/unclatter-overview.png',
    stacks: [
      'Go',
      'Docker',
      'AWS ECS',
      'PostgreSQL',
      'Oauth2',
      'NextJS',
      'Colly',
      'Gorm',
      'Typescript',
      'Tailwind CSS',
    ],
    github: 'https://github.com/ryanadiputraa/unclatter',
    live: 'https://unclatter.devzy.my.id/',
  },
  {
    title: 'ggen',
    description: 'A CLI for generating go project that use golang standards project layout.',
    img: '/img/ggen-overview.png',
    stacks: ['Go', 'Cobra', 'Bash'],
    github: 'https://github.com/ryanadiputraa/ggen',
  },
  {
    title: 'Spotwave',
    description:
      'Spotify playlist MP3 downloader using Spotify, Youtube, and MP3 converter API. It fetch user Spotify playlist, search song on Youtube, then convert and download the MP3.',
    img: '/img/spotwave-overview.png',
    stacks: [
      'Go',
      'ReactJS',
      'Fiber',
      'Spotify API',
      'Youtube API',
      'Oauth2',
      'MP3 Rapid API',
      'Typescript',
      'Tailwind CSS',
    ],
    github: 'https://github.com/ryanadiputraa/spotwave',
    live: 'https://spotwave.devzy.my.id/',
  },
  {
    title: 'Whispr',
    description: 'Silent meet application, an anonymous idea-sharing real time app for collaborative brainstorming',
    img: '/img/whispr-overview.png',
    stacks: ['NestJS', 'Socket.IO', 'PostgreSQL', 'NextJS', 'Typescript', 'Tailwind CSS'],
    github: 'https://github.com/ryanadiputraa/whispr',
    live: 'https://whispr.devzy.my.id/',
  },
];

export function Projects({
  theme,
  projectsRef,
}: {
  theme: Theme;
  projectsRef: MutableRefObject<null>;
}): React.ReactNode {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <Element name="projects" className="max-w-[96rem] mx-auto">
      <div ref={projectsRef} className="py-20 md:px-20">
        <SubHeader title="PROJECTS" />
        <div className="mt-20 flex justify-center flex-wrap md:gap-x-[5%] gap-y-32">
          {projects.map((project, i) => (
            <ProjectItem
              key={project.title}
              project={project}
              theme={theme}
              isDesktop={isDesktop}
              classNames={`w-full ${i === 0 || i === 3 ? 'md:w-[55%]' : 'md:w-[40%]'}`}
            />
          ))}
        </div>
      </div>
    </Element>
  );
}

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

function ProjectItem({
  theme,
  project,
  isDesktop = true,
  classNames,
}: {
  theme: Theme;
  project: Project;
  isDesktop?: boolean;
  classNames?: string;
}): React.ReactNode {
  return (
    <motion.div
      className={`${classNames} ${theme === 'light' ? 'text-black' : 'text-white'} flex flex-col gap-2`}
      initial="initial"
      whileHover="hover"
    >
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
            <Image src={'/img/github.png'} width={40} height={40} alt="github" className="w-16" />
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
              <Image src={'/img/web.png'} width={40} height={40} alt="web" className="w-16" />
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
              src={theme === 'light' ? '/img/github.png' : '/img/github-white.png'}
              width={20}
              height={20}
              alt="github"
              className="w-8"
            />
            <span className="italic text-sm">Code</span>
          </a>
          {project.live && (
            <a href={project.github} target="_blank" className="flex flex-col items-center gap-1">
              <Image
                src={theme === 'light' ? '/img/web.png' : '/img/web-white.png'}
                width={20}
                height={20}
                alt="web"
                className="w-8"
              />
              <span className="italic text-sm">Live</span>
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
