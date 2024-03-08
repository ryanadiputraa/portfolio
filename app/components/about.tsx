'use client';

import { MutableRefObject } from 'react';
import { Element } from 'react-scroll';

import { Theme } from '@/types/theme';
import { SubHeader } from './sub-header';

interface Experience {
  company: string;
  time: string;
  position: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    company: 'Garena Indonesia',
    time: 'Sep 2022 - Present',
    position: 'Frontend Engineer',
    skills: ['ReactJS', 'ReduxJS', 'Micro Frontend', 'Javascript', 'Docker', 'SCSS'],
  },
  {
    company: 'Dicoding Academy (Kampus Merdeka)',
    time: 'Feb 2022 – Aug 2022',
    position: 'Multi Platform and Backend',
    skills: ['Flutter', 'NodeJS', 'Express', 'TypeScript', 'MongoDB', 'Dart'],
  },
  {
    company: 'Glints Academy (Kampus Merdeka)',
    time: 'Aug 2021 – Feb 2022',
    position: 'International Internship Student',
    skills: ['Pragmatic Programmer', 'Code Review', 'Software Development', 'Time Management'],
  },
];

export function About({ theme, aboutRef }: { theme: Theme; aboutRef: MutableRefObject<null> }): React.ReactNode {
  return (
    <Element name="about" className="max-w-[96rem] mx-auto">
      <p
        ref={aboutRef}
        className="text-accent-light text-3xl sm:text-7xl py-40 sm:py-56 sm:px-24 text-center sm:text-left leading-10"
      >
        I&apos;m a software engineer who enjoys developing software to solve real-world problems and learning new things
        or technologies while doing it.
      </p>
      <SubHeader title="EXPERIENCE" />
      <div className="mb-24 flex flex-col gap-12">
        {experiences.map((experience) => (
          <ExperienceItem theme={theme} key={experience.time} experience={experience} />
        ))}
      </div>
    </Element>
  );
}

function ExperienceItem({ theme, experience }: { theme: Theme; experience: Experience }): React.ReactNode {
  return (
    <div className="flex justify-between gap-4 py-2 sm:px-24">
      <div className="flex flex-col items-end flex-[3] text-right gap-1">
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
        <span className={`${theme === 'light' ? 'text-black' : 'text-white'} text-lg sm:text-3xl font-medium`}>
          {experience.position}
        </span>
        <div className="flex flex-wrap gap-2 sm:gap-4 italic">
          {experience.skills.map((skill) => (
            <div
              key={skill}
              className={`${
                theme === 'light' ? 'text-black' : 'text-white'
              } border-2 border-accent py-1 px-4 rounded-full text-xs sm:text-base`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
