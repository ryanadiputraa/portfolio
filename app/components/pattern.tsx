'use client';

import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export function Pattern(): React.ReactNode {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 640px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 0px)' });

  const getInitialPatternSize = () => {
    if (isDesktop) return { width: '50rem', height: '50rem' };
    if (isTablet) return { width: '37rem', height: '37rem' };
    if (isMobile) return { width: '24rem', height: '30rem' };
    return { width: '0rem', height: '0rem' };
  };

  const getAnimatePatternSize = () => {
    if (isDesktop) return { width: '40rem', height: '40rem' };
    if (isTablet) return { width: '27rem', height: '27rem' };
    if (isMobile) return { width: '12rem', height: '18rem' };
    return { width: '0rem', height: '0rem' };
  };

  return (
    <motion.img
      src={'/assets/img/pattern.jpg'}
      alt="pattern"
      width={200}
      height={120}
      className="absolute mix-blend-multiply"
      initial={getInitialPatternSize()}
      animate={getAnimatePatternSize()}
      transition={{ duration: 1, delay: 0.3 }}
    />
  );
}
