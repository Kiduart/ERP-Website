"use client";

import { motion } from 'framer-motion';
import { FaUser, FaClock, FaCalendar, FaMoneyBill } from 'react-icons/fa';
import Card from '@/components/common/Card';
import DecorativeCircles from '@/components/utils/DecorativeCircles';

export default function Features() {
  const features = [
    {
      icon: <FaUser className="w-8 h-8 mx-auto" />,
      title: 'Student Information',
      description: 'Easily manage student records, including personal details, grades, attendance history, and more in a centralized system.',
    },
    {
      icon: <FaClock className="w-8 h-8 mx-auto" />,
      title: 'Attendance Tracking',
      description: 'Automate attendance tracking with AI-powered facial recognition or manual entry, ensuring accuracy and saving time.',
    },
    {
      icon: <FaCalendar className="w-8 h-8 mx-auto" />,
      title: 'Timetable Management',
      description: 'Create, edit, and manage class schedules with ease, ensuring no conflicts and optimal use of resources.',
    },
    {
      icon: <FaMoneyBill className="w-8 h-8 mx-auto" />,
      title: 'Fee Management',
      description: 'Simplify fee collection, track payments, send reminders, and generate reports with our integrated fee management system.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, 0, 0.2, 1],
        delay: index * 0.15,
        type: 'spring',
        stiffness: 100,
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
      y: [-5, 5, -5],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const gradientLayerVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
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
      transition: { duration: 0.3, repeat: 3, repeatType: 'reverse', ease: 'easeInOut' },
    },
  };

  const positions = [
    { size: '300px', top: '-50px', left: '-50px' },
    { size: '250px', top: '50%', right: '-150px', transform: 'translateY(-50%)' },
  ];

  return (
    <div className="relative w-full py-16 px-6 bg-gray-50 overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="wave" style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100px',
          background: 'linear-gradient(90deg, rgba(0, 182, 239, 0.2), rgba(255, 105, 180, 0.2))',
          animation: 'wave 12s linear infinite',
          willChange: 'transform',
        }} />
        <style jsx>{`
          @keyframes wave {
            0% { transform: translateX(0); }
            100% { transform: translateX(1000px); }
          }
          .wave {
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230099ff' fill-opacity='1' d='M0,256L60,240C120,224,240,192,360,181.3C480,171,600,181,720,197.3C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
            background-size: 1000px 100px;
            background-repeat: repeat-x;
          }
        `}</style>
      </div>

      {/* Subtle Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accentCyan rounded-full opacity-50"
            style={{
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

      <DecorativeCircles positions={positions} colors={['bg-accentYellow', 'bg-accentPurple', 'bg-accentCyan']} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {features.map((feature, index) => (
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
              {feature.icon}
            </motion.div>

            {/* Feature Title */}
            <div className="relative z-20 text-xl font-bold text-primary font-inter mb-2 mt-3">
              {feature.title}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}