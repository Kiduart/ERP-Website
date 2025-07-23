"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { theme } from './theme';

export default function WaveBackground({
  gradient = 'from-accentCyan/60 via-neonPink/40 to-emeraldGreen/50',
  height = '120px',
  opacity = 0.25,
  particleShape = 'star',
  waveCount = 3,
  texture = 'wavy',
}) {
  const [sparkle, setSparkle] = useState(null);

  const waveVariants = (index) => ({
    animate: {
      x: [0, index % 2 === 0 ? -80 : 80, 0],
      opacity: [0.7, 1, 0.7],
      rotate: [0, index % 2 === 0 ? 2 : -2, 0],
      transition: { duration: 8 + index * 3, repeat: Infinity, ease: 'easeInOut' },
    },
  });

  const particleVariants = {
    animate: {
      y: [0, -25, 0],
      opacity: [0.4, 0.7, 0.4],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 3 },
    },
  };

  const bubbleVariants = {
    animate: {
      y: [0, -50, -50],
      scale: [1, 1.2, 0],
      opacity: [0.5, 0.8, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeOut', delay: Math.random() * 2 },
    },
  };

  const floatShapes = [
    { shape: '📚', size: '26px', top: '15%', left: '5%', delay: 0 }, // Book
    { shape: '✏️', size: '22px', bottom: '20%', right: '10%', delay: 1 }, // Pencil
    { shape: '⭐', size: '24px', top: '35%', left: '85%', delay: 2 }, // Star
  ];

  const wavePath = `
    M0,180
    C100,160 200,200 300,180
    S400,140 500,160
    S600,200 700,180
    S800,140 900,160
    S1000,200 1100,180
    S1200,140 1300,160
    S1400,180 1440,180
    V320
    H0
    Z
  `; // Organic, wavy path

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSparkle({ x, y, id: Date.now() });
    setTimeout(() => setSparkle(null), 600);
  };

  return (
    <motion.div
      className="absolute inset-0 pointer-events-auto"
      style={{ opacity }}
      aria-hidden="true"
      onClick={handleClick}
    >
      {/* Background Texture */}
      {texture === 'wavy' && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/wave.png")',
            backgroundSize: '150px',
            opacity: 0.06,
          }}
        />
      )}

      {/* Waves */}
      {[...Array(waveCount)].map((_, index) => (
        <motion.div
          key={index}
          className="wave"
          style={{
            position: 'absolute',
            bottom: `${index * 25}px`,
            left: index % 2 === 0 ? '10%' : '-5%',
            width: index % 2 === 0 ? '90%' : '95%',
            height: `calc(${height} * ${1 - index * 0.25})`,
            background: `linear-gradient(135deg, ${gradient})`,
            filter: `drop-shadow(0 4px 8px ${theme.colors.accentCyan}40)`,
            willChange: 'transform, opacity, rotate',
          }}
          variants={waveVariants(index)}
          animate="animate"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{ width: '100%', height: '100%' }}
          >
            <motion.path
              fill={theme.colors.accentPurple}
              fillOpacity="0.5"
              d={wavePath}
              animate={{
                fill: [theme.colors.accentCyan, theme.colors.neonPink, theme.colors.emeraldGreen, theme.colors.accentCyan],
                transition: { duration: 12, repeat: Infinity, ease: 'linear' },
              }}
            />
          </svg>
          <div
            className="absolute top-0 left-0 w-full h-15px"
            style={{
              background: `linear-gradient(to bottom, ${theme.colors.neonPink}30, transparent)`,
              borderRadius: '50%',
            }}
          />
        </motion.div>
      ))}

      {/* Star Particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute"
          style={{
            width: '10px',
            height: '10px',
            left: i < 2 ? `${10 + Math.random() * 20}%` : `${70 + Math.random() * 20}%`,
            top: i % 2 === 0 ? `${10 + Math.random() * 20}%` : `${70 + Math.random() * 20}%`,
            background: `radial-gradient(circle, ${theme.colors.accentPurple} 30%, transparent 70%)`,
            borderRadius: particleShape === 'star' ? '50%' : '50%',
            transform: particleShape === 'star' ? 'rotate(45deg)' : 'none',
            willChange: 'transform, opacity',
          }}
          variants={particleVariants}
          animate="animate"
          whileHover={{ scale: 1.4, transition: { duration: 0.3 } }}
        />
      ))}

      {/* Bubbles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full"
          style={{
            width: '16px',
            height: '16px',
            left: i < 2 ? `${15 + Math.random() * 25}%` : `${65 + Math.random() * 25}%`,
            top: `${60 + Math.random() * 30}%`,
            background: `radial-gradient(circle, ${theme.colors.accentCyan}50 20%, transparent 70%)`,
            border: `1px solid ${theme.colors.accentCyan}30`,
            willChange: 'transform, opacity, scale',
          }}
          variants={bubbleVariants}
          animate="animate"
        />
      ))}

      {/* Floating Shapes */}
      {floatShapes.map((shape, index) => (
        <motion.div
          key={`shape-${index}`}
          className="absolute"
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            fontSize: shape.size,
            opacity: 0.5,
            willChange: 'transform, opacity',
            pointerEvents: 'auto',
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.5, 0.8, 0.5],
            transition: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: shape.delay },
          }}
          whileHover={{ scale: 1.3, opacity: 0.9, transition: { duration: 0.3 } }}
        >
          {shape.shape}
        </motion.div>
      ))}

      {/* Click Sparkle */}
      {sparkle && (
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '20px',
            height: '20px',
            left: sparkle.x - 10,
            top: sparkle.y - 10,
            background: `radial-gradient(circle, ${theme.colors.neonPink} 20%, transparent 70%)`,
            willChange: 'transform, opacity',
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}

      <style jsx>{`
        .wave {
          background-size: 1400px ${height};
          background-repeat: repeat-x;
          position: relative;
          overflow: hidden;
        }
        .wave::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 15px;
          background: linear-gradient(to bottom, ${theme.colors.neonPink}30, transparent);
          border-radius: 50%;
          animation: pulse 6s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </motion.div>
  );
}