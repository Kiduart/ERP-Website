"use client";

import { motion } from 'framer-motion';

export default function DecorativeCircles({ positions = [], colors = ['bg-accentYellow', 'bg-accentCyan', 'bg-accentPurple'] }) {
  const circleVariants = {
    animate: { scale: [1, 1.1, 1], opacity: [0.15, 0.2, 0.15], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0 } },
  };

  return (
    <>
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${colors[index % colors.length]} opacity-15`}
          style={{
            width: pos.size || '200px',
            height: pos.size || '200px',
            top: pos.top || 'auto',
            bottom: pos.bottom || 'auto',
            left: pos.left || 'auto',
            right: pos.right || 'auto',
            transform: pos.transform || 'none',
          }}
          animate="animate"
          variants={circleVariants}
        />
      ))}
    </>
  );
}