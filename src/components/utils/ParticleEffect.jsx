import { motion } from 'framer-motion';
import { theme } from './theme';

export default function ParticleEffect({ count = theme?.animations?.particle?.count }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: theme?.animations?.particle?.size,
            height: theme?.animations?.particle?.size,
            background: theme.colors.accentCyan,
            opacity: 0.5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}