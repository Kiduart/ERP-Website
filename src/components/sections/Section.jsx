"use client";

import { motion } from 'framer-motion';
import Heading from '../common/Heading';
import { theme } from '../utils/theme';
import WaveBackground from '../utils/WaveBackground';

export default function Section({ title, children, variant = 'default', glassmorphism = false, titleAlign = 'center', className = '' }) {
  const variants = {
    default: `bg-grayLight`,
    gradient: `bg-gradient-to-br ${theme.gradients.purpleToGreen}`,
    solid: `bg-white`,
  };

  const titleStyles = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  };

  return (
    <motion.section
      className={`py-20 relative ${glassmorphism ? 'backdrop-blur-md bg-white/10' : variants[variant]} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
    >
      {variant === 'solid' && <WaveBackground gradient={theme.gradients.cyanToPink} height="120px" opacity={0.1} />}
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <div className={titleStyles[titleAlign]}>
            <Heading size="lg">{title}</Heading>
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}