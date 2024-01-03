'use client';

import { motion } from 'framer-motion';

export function SubHeader({ title }: { title: string }) {
  return (
    <motion.h4
      className="text-4xl sm:text-7xl text-accent font-medium text-center mb-8"
      initial={{ y: 50, clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ y: 0, clipPath: 'inset(0% 0 0 0)' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {title}
    </motion.h4>
  );
}
