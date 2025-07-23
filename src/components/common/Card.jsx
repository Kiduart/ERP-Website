"use client";

import { motion } from 'framer-motion';

export default function Card({ title, description, icon, variant = 'default', className = '' }) {
  const variants = {
    default: 'p-6 h-64 bg-white border border-gray-100',
    compact: 'p-4 h-48 bg-grayLight border-l-4 border-accentCyan',
    detailed: 'p-8 h-80 bg-gradient-to-br from-white to-grayLight border-t-4 border-neonPink',
    hero: 'p-6 h-72 bg-gradient-to-br from-accentCyan/10 to-neonPink/10 border-2 border-dashed border-primary',
    timeline: 'p-6 h-56 bg-white/80 backdrop-blur-md border-l-4 border-emeraldGreen shadow-lg',
    award: 'p-6 h-72 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-accentCyan/50 text-white',
    story: 'p-6 h-80 bg-white/90 backdrop-blur-md border border-white/20',
    highlight: 'p-6 h-64 bg-gradient-to-br from-white/80 to-accentCyan/10 border-2 border-dashed border-neonPink',
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className={`rounded-lg shadow-md flex flex-col ${variants[variant]} ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      whileHover="hover"
    >
      {icon && (
        <motion.div
          className="mb-4 text-3xl text-primary"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {typeof icon === 'string' ? <span className="text-4xl">{icon}</span> : icon}
        </motion.div>
      )}
      {title && (
        <h3 className="text-xl font-semibold text-primary font-inter mb-2">{title}</h3>
      )}
      {description && (
        <div className="text-gray-600 font-poppins flex-grow overflow-hidden text-sm">{description}</div>
      )}
    </motion.div>
  );
}