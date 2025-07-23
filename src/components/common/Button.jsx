"use client";

import { motion } from 'framer-motion';
import { theme } from '../utils/theme';

export default function Button({ text, href, size = 'medium', variant = 'primary', className = '' }) {
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const variantStyles = {
    primary: `bg-gradient-to-r ${theme.gradients.cyanToPink} text-white`,
    secondary: `bg-secondary text-white`,
    outline: `bg-transparent border-2 border-accentCyan text-accentCyan hover:bg-accentCyan hover:text-white`,
  };

  const baseStyles = `font-semibold rounded-lg shadow-md transition-all duration-300 font-inter ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } },
    tap: { scale: 0.95 },
  };

  const content = (
    <motion.div className="relative" whileHover="hover" whileTap="tap" variants={buttonVariants}>
      <div className={`relative z-10 ${baseStyles}`}>{text}</div>
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        whileHover={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 182, 239, 0.3) 0%, transparent 70%)',
          scale: [1, 1.5],
          opacity: [0, 0.8, 0],
          transition: { duration: 0.6, ease: 'easeOut' },
        }}
      />
    </motion.div>
  );

  return href ? (
    <a href={href} className="inline-block">{content}</a>
  ) : (
    <button className="inline-block">{content}</button>
  );
}