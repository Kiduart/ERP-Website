"use client";

import { motion } from 'framer-motion';
import { theme } from '../utils/theme';

export default function Heading({ level = 'h2', children, size = 'md', className = '' }) {
  const HeadingTag = level;
  const sizeStyles = {
    sm: 'text-2xl sm:text-3xl',
    md: 'text-3xl sm:text-4xl',
    lg: 'text-4xl sm:text-5xl',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <HeadingTag
        className={`font-bold text-primary font-inter mb-6 text-center relative after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-gradient-to-r ${theme.gradients.cyanToPink} after:transition-all after:duration-400 hover:after:w-1/2 ${sizeStyles[size]} ${className}`}
      >
        {children}
      </HeadingTag>
    </motion.div>
  );
}