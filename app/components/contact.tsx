'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Element } from 'react-scroll';

import { ContactForm } from './contact-form';
import { SubHeader } from './sub-header';

export function Contact(): React.ReactNode {
  return (
    <Element name="contact" className="py-20 sm:px-20 max-w-[96rem] mx-auto">
      <SubHeader title="CONTACT" />
      <div className="flex justify-between gap-20 flex-col md:flex-row">
        <div className="flex-[7] flex flex-col">
          <h6 className="text-3xl sm:text-5xl font-semibold mb-4">Drop me a Line</h6>
          <ContactForm />
        </div>
        <div className="flex-[3] flex flex-col items-start gap-12">
          <div>
            <h6 className="text-xl sm:text-3xl font-bold mb-2">Contact Details</h6>
            <ContactItem ico="/img/email.png" text="ryannadiputraa@gmail.com" link="mailto:ryannadiputraa@gmail.com" />
          </div>
          <div>
            <h6 className="text-xl sm:text-3xl font-semibold mb-2">Digital Spaces</h6>
            <div className="flex flex-col gap-1 items-start">
              <ContactItem ico="/img/github.png" text="Github" link="mailto:ryannadiputraa@gmail.com" />
              <ContactItem ico="/img/linkedin.png" text="LinkedIn" link="mailto:ryannadiputraa@gmail.com" />
            </div>
          </div>
          <div>
            <h6 className="text-xl sm:text-3xl font-bold mb-2">Location</h6>
            <div className="flex flex-col gap-1 items-start">
              <div className="flex items-center gap-2 pb-1">
                <Image src={'/img/location.png'} width={24} height={18} alt="location" />
                <span>Palu, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

const linkMotion = {
  initial: { width: 0 },
  hover: { width: '100%', transition: { duration: 0.1, ease: 'easeInOut' } },
};

interface ContactItemProps {
  ico?: string;
  text: string;
  link: string;
}

function ContactItem({ ico, text, link }: ContactItemProps): React.ReactNode {
  return (
    <motion.div className="inline-block" initial="initial" whileHover="hover">
      <div className="flex items-center pb-1">
        {ico && <Image src={ico} width={24} height={18} alt={text} className="mr-2" />}
        <a href={link} className="text-xl">
          {text}
        </a>
      </div>
      <motion.div className="h-[0.1rem] rounded-full bg-accent-light" variants={linkMotion} />
    </motion.div>
  );
}
