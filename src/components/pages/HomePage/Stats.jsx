"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function StatsDisplay() {
  const stats = [
    { value: 500, label: 'Schools Impacted', suffix: '+', icon: '🏫' },
    { value: 10000, label: 'Students Empowered', suffix: '+', icon: '🎓' },
    { value: 1000000, label: 'Records Managed', suffix: '+', icon: '📜' },
    { value: 99.9, label: 'System Uptime', suffix: '%', icon: '⏰' },
  ];

  // State to hold the current animated values for each stat
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const animateValues = () => {
      stats.forEach((stat, index) => {
        const targetValue = stat.value;
        const duration = 2000; // Duration in ms (2 seconds)
        const frameRate = 16; // Update every 16ms (~60fps)
        const totalFrames = Math.ceil(duration / frameRate);
        const increment = targetValue / totalFrames;

        let currentFrame = 0;
        const interval = setInterval(() => {
          currentFrame++;
          const newValue = Math.min(increment * currentFrame, targetValue);

          setAnimatedValues((prev) => {
            const updatedValues = [...prev];
            updatedValues[index] = newValue;
            return updatedValues;
          });

          if (currentFrame >= totalFrames) {
            clearInterval(interval);
          }
        }, frameRate);
      });
    };

    // Start the animation when the component mounts
    animateValues();

    // Cleanup intervals on unmount
    return () => {
      stats.forEach((_, index) => {
        clearInterval(index);
      });
    };
  }, []);

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        delay: index * 0.15,
        type: 'spring',
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 20,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.3,
      rotate: 15,
      boxShadow: '0 0 20px rgba(0, 182, 239, 0.7)',
      transition: { duration: 0.3 },
    },
  };

  const underlineVariants = {
    hidden: { width: '0%' },
    visible: {
      width: '70%',
      transition: { duration: 0.9, ease: 'easeOut', delay: 0.5 },
    },
    hover: {
      boxShadow: '0 0 15px rgba(0, 182, 239, 0.7)',
      transition: { duration: 0.3, repeat: Infinity, repeatType: 'reverse' },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative w-full py-20 px-6 bg-gray-50 overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="wave" style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '150px',
          background: 'linear-gradient(90deg, rgba(0, 182, 239, 0.3), rgba(255, 105, 180, 0.3))',
          animation: 'wave 10s linear infinite',
        }} />
        <div className="wave" style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '150px',
          background: 'linear-gradient(90deg, rgba(0, 182, 239, 0.2), rgba(255, 105, 180, 0.2))',
          animation: 'wave 15s linear infinite reverse',
          animationDelay: '-5s',
        }} />
        <style jsx>{`
          @keyframes wave {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(1000px);
            }
          }
          .wave {
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230099ff' fill-opacity='1' d='M0,256L60,240C120,224,240,192,360,181.3C480,171,600,181,720,197.3C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
            background-size: 1000px 150px;
            background-repeat: repeat-x;
          }
        `}</style>
      </div>

      {/* Subtle Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accentCyan rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accentCyan/5 to-white opacity-60" />

      {/* Stats Section */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accentCyan">
            Our Impact
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover="hover"
              custom={index}
            >
              {/* Background Gradient Layer */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accentCyan/10 to-neonPink/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />

              {/* Ripple Effect on Hover */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                whileHover={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(0, 182, 239, 0.2) 0%, transparent 70%)',
                  scale: [1, 1.5],
                  opacity: [0, 1, 0],
                  transition: { duration: 0.6, repeat: Infinity },
                }}
              />

              {/* Icon */}
              <motion.div
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className="relative z-10"
              >
                <span className="text-4xl">{stat.icon}</span>
              </motion.div>

              {/* Stat Value */}
              <div className="relative z-10 text-5xl font-extrabold text-primary font-inter mb-3 mt-4">
                {Math.round(animatedValues[index])}
                <span className="text-3xl">{stat.suffix}</span>
                {/* Animated Glowing Underline */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-accentCyan to-neonPink rounded-full"
                  variants={underlineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                />
              </div>

              {/* Stat Label */}
              <div className="relative z-10 text-lg text-gray-700 font-poppins">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}