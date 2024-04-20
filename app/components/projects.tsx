'use client';

import { MutableRefObject } from 'react';
import { Element } from 'react-scroll';

import { SubHeader } from './sub-header';
import dynamic from 'next/dynamic';

const ProjectItem = dynamic(() => import('./project-item').then((mod) => mod.ProjectItem), { ssr: false });

export interface Project {
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
    img: '/assets/img/unclatter-overview.png',
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
    img: '/assets/img/ggen-overview.png',
    stacks: ['Go', 'Cobra', 'Bash'],
    github: 'https://github.com/ryanadiputraa/ggen',
  },
  {
    title: 'Spotwave',
    description:
      'Spotify playlist MP3 downloader using Spotify, Youtube, and MP3 converter API. It fetch user Spotify playlist, search song on Youtube, then convert and download the MP3.',
    img: '/assets/img/spotwave-overview.png',
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
    img: '/assets/img/whispr-overview.png',
    stacks: ['NestJS', 'Socket.IO', 'PostgreSQL', 'NextJS', 'Typescript', 'Tailwind CSS'],
    github: 'https://github.com/ryanadiputraa/whispr',
    live: 'https://whispr.devzy.my.id/',
  },
];

export function Projects({ projectsRef }: { projectsRef: MutableRefObject<null> }): React.ReactNode {
  return (
    <Element name="projects" className="max-w-[96rem] mx-auto">
      <div ref={projectsRef} className="py-20 md:px-20">
        <SubHeader title="PROJECTS" />
        <div className="mt-20 flex justify-center flex-wrap md:gap-x-[5%] gap-y-32">
          {projects.map((project, i) => (
            <ProjectItem
              key={project.title}
              project={project}
              classNames={`w-full ${i === 0 || i === 3 ? 'md:w-[55%]' : 'md:w-[40%]'}`}
            />
          ))}
        </div>
      </div>
    </Element>
  );
}
