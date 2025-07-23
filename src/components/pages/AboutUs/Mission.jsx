"use client";

import { motion } from 'framer-motion';
import DecorativeCircles from '@/components/utils/DecorativeCircles';
import { theme } from '../../utils/theme';

export default function Mission() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { boxShadow: `0 0 20px ${theme.colors.accentCyan}50`, scale: 1.02 },
  };

  return (
    <motion.div className="relative py-12 px-6 max-w-7xl mx-auto">
      <DecorativeCircles
        positions={[
          { size: '200px', top: '-50px', left: '-50px', opacity: 0.3 },
          { size: '150px', bottom: '-30px', right: '-30px', opacity: 0.3 },
        ]}
        colors={['bg-accentCyan', 'bg-neonPink']}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="backdrop-blur-md bg-white/10 rounded-lg p-8 shadow-lg border border-accentCyan/30"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-neonPink mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-800 font-poppins">
            Empowering educators with ethical AI to streamline operations and drive equitable student success globally.
          </p>
        </motion.div>
        <motion.div
          className="backdrop-blur-md bg-white/10 rounded-lg p-8 shadow-lg border border-neonPink/30"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonPink to-accentCyan mb-4">
            Our Vision
          </h3>
          <p className="text-lg text-gray-800 font-poppins">
            Creating a global educational ecosystem where technology fosters innovation and accessibility for all.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}