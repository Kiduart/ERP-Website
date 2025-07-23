"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AIRelatedData() {
  const aiFeatures = [
    {
      title: "Predictive Analytics",
      description: "Use AI to predict student performance and identify at-risk students early.",
      icon: '📊',
    },
    {
      title: "Automated Grading",
      description: "Save time with AI-powered grading for assignments and tests.",
      icon: '✍️',
    },
    {
      title: "Personalized Learning",
      description: "Tailor learning experiences based on AI-driven student insights.",
      icon: '🎯',
    },
  ];

  // State for video play/pause
  const [isPlaying, setIsPlaying] = useState(true);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0, 0.2, 1], // More natural easing
        delay: index * 0.1, // Faster stagger for smoother flow
        type: 'spring',
        stiffness: 120,
      },
    }),
    hover: {
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      transition: { duration: 0.3, ease: 'easeOut' },
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
        damping: 15,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.3,
      rotate: 15,
      boxShadow: '0 0 20px rgba(0, 182, 239, 0.7)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    float: {
      y: [-5, 5, -5], // Floating animation
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const underlineVariants = {
    hidden: { width: '0%' },
    visible: {
      width: '70%',
      transition: { duration: 1, ease: [0.6, 0, 0.2, 1], delay: 0.4 },
    },
    hover: {
      boxShadow: '0 0 15px rgba(0, 182, 239, 0.7)',
      transition: { duration: 0.4, repeat: 3, repeatType: 'reverse', ease: 'easeInOut' },
    },
  };

  const gradientLayerVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const titleUnderlineVariants = {
    hidden: { width: '0%' },
    visible: {
      width: '50%',
      transition: { duration: 1, ease: [0.6, 0, 0.2, 1], delay: 0.3 },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      boxShadow: '0 0 20px rgba(0, 182, 239, 0.3)',
      transition: { duration: 0.6, ease: [0.6, 0, 0.2, 1] },
    },
    hover: {
      boxShadow: '0 0 30px rgba(0, 182, 239, 0.5)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const sectionVariants = {
    initial: { background: 'linear-gradient(to bottom right, rgba(249, 250, 251, 1), rgba(249, 250, 251, 1))' },
    hover: {
      background: 'linear-gradient(to bottom right, rgba(0, 182, 239, 0.05), rgba(255, 105, 180, 0.05))',
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const waveVariants = {
    animate: {
      x: [0, -50, 0], // Subtle parallax effect
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className="relative w-full py-20 px-6 bg-gray-50 overflow-hidden"
      variants={sectionVariants}
      initial="initial"
      whileHover="hover"
    >
      {/* Animated Wave Background with Parallax */}
      <motion.div
        className="absolute inset-0 opacity-30"
        variants={waveVariants}
        animate="animate"
      >
        <div className="wave" style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '150px',
          background: 'linear-gradient(90deg, rgba(0, 182, 239, 0.3), rgba(255, 105, 180, 0.3))',
          animation: 'wave 10s linear infinite',
          willChange: 'transform',
        }} />
        <div className="wave" style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '150px',
          background: 'linear-gradient(90deg, rgba(0, 182, 239, 0.2), rgba(255, 105, 180, 0.2))',
          animation: 'wave 15s linear infinite reverse',
          animationDelay: '-5s',
          willChange: 'transform',
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
      </motion.div>

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accentCyan/5 to-white opacity-60" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accentCyan">
            AI-Powered Insights
          </h2>
          <motion.div
            className="w-32 h-1 mx-auto mt-3 bg-gradient-to-r from-accentCyan to-neonPink rounded-full"
            variants={titleUnderlineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 font-poppins mt-2">
            Leverage the power of AI to transform education with actionable insights.
          </p>
        </motion.div>

        {/* Video and Features Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Video Section */}
          <motion.div
            variants={videoVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-[300px] object-cover"
                src={`https://www.youtube.com/embed/PJpnQ4B9HLE?autoplay=${isPlaying ? 1 : 0}&mute=1&loop=1&playlist=PJpnQ4B9HLE`}
                title="AI in Action"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center py-2">
                <p className="text-lg font-inter">AI in Action</p>
              </div>
              {/* Play/Pause Toggle */}
              <motion.button
                className="absolute top-4 right-4 bg-white/80 text-primary rounded-full p-2"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 1)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? '⏸️' : '▶️'}
              </motion.button>
            </div>
          </motion.div>

          {/* AI Features */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                whileHover="hover"
                custom={index}
              >
                {/* Gradient Layer on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-accentCyan/30 to-neonPink/30"
                  variants={gradientLayerVariants}
                  initial="initial"
                  whileHover="hover"
                />

                {/* Ripple Effect on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none z-10"
                  whileHover={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(0, 182, 239, 0.3) 0%, transparent 70%)',
                    scale: [1, 1.5],
                    opacity: [0, 0.8, 0],
                    transition: { duration: 0.6, repeat: 2, ease: 'easeOut' },
                  }}
                />

                {/* Particle Burst on Hover */}
                <motion.div className="absolute inset-0 pointer-events-none z-10">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-accentCyan rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      whileHover={{
                        x: (Math.random() - 0.5) * 50,
                        y: (Math.random() - 0.5) * 50,
                        opacity: [1, 0],
                        transition: { duration: 0.5, ease: 'easeOut' },
                      }}
                    />
                  ))}
                </motion.div>

                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  animate="float"
                  viewport={{ once: true }}
                  className="relative z-20"
                >
                  <span className="text-3xl">{feature.icon}</span>
                </motion.div>

                {/* Feature Title */}
                <div className="relative z-20 text-xl font-bold text-primary font-inter mb-2 mt-3">
                  {feature.title}
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

                {/* Feature Description */}
                <div className="relative z-20 text-base text-gray-600 font-poppins mb-4">
                  {feature.description}
                </div>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  className="relative z-20 text-sm text-accentCyan font-poppins underline decoration-transparent"
                  whileHover={{
                    color: '#FF69B4', // neonPink
                    decorationColor: '#FF69B4',
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  Learn More
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}