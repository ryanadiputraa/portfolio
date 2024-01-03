'use client';

import { MutableRefObject } from 'react';
import { Element } from 'react-scroll';

import { Theme } from '@/types/theme';
import { SubHeader } from './sub-header';

interface Experience {
  company: string;
  time: string;
  position: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: 'Garena Indonesia',
    time: 'Feb 2022 - Present',
    position: 'Frontend Engineer',
    description:
      'Developed regional and multi-regional in-game web events using ReactJS. Involved in research and improvement of web development in company such as TeleportHQ for landing page automation & multi language meta tags script automation.',
  },
  {
    company: 'Dicoding Academy (Kampus Merdeka)',
    time: 'Feb 2022 – Aug 2022',
    position: 'Multi Platform and Backend',
    description:
      'Collaborated in teams to Develop a multi platform mobile app using Flutter and NodeJS for backend to simplify shopping on physical stores and help owner manage items with generated QR Codes for each items.',
  },
  {
    company: 'Glints Academy (Kampus Merdeka)',
    time: 'Aug 2021 – Feb 2022',
    position: 'International Internship Student',
    description:
      'Developed a simple web application to learn to work in a team and improve code quality by learning clean code by being involved in code review with a mentor.',
  },
];

export function About({ theme, aboutRef }: { theme: Theme; aboutRef: MutableRefObject<null> }): React.ReactNode {
  return (
    <Element name="about" className="max-w-[96rem] mx-auto">
      <p
        ref={aboutRef}
        className="text-accent-light text-3xl sm:text-7xl py-40 sm:py-56 sm:px-24 text-center sm:text-left leading-10"
      >
        I&apos;m a Software Engineer based in Palu, Indonesia. I&apos;m passionate about building software to solve real
        world problems and learning new things or technology while doing it.
      </p>
      <SubHeader title="EXPERIENCE" />
      <div className="mb-24">
        {experiences.map((experience) => (
          <ExperienceItem theme={theme} key={experience.time} experience={experience} />
        ))}
      </div>
    </Element>
  );
}

function ExperienceItem({ theme, experience }: { theme: Theme; experience: Experience }): React.ReactNode {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 py-2 sm:px-24">
      <ul className="mt-8">
        <li className="flex gap-4">
          <div className="flex flex-col items-end flex-[2] text-right gap-1">
            <span className={`${theme === 'light' ? 'text-black' : 'text-white'} text-xl sm:text-3xl font-medium`}>
              {experience.company}
            </span>
            <span className="italic text-base sm:text-xl text-light-grey">{experience.time}</span>
          </div>
          <div className="flex flex-col items-center gap-2 pt-3">
            <div className="w-4 h-4 rounded-full bg-accent" />
            <div className="flex-grow w-1 rounded-full bg-accent" />
          </div>
          <div className="flex flex-col flex-[5] gap-1">
            <span className={`${theme === 'light' ? 'text-black' : 'text-white'} text-xl sm:text-3xl font-medium`}>
              {experience.position}
            </span>
            <p className="italic text-base sm:text-xl text-light-grey">{experience.description}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
