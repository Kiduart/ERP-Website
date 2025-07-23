"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import DecorativeCircles from '@/components/utils/DecorativeCircles';
import Tilt from 'react-parallax-tilt';
import { useState, useRef } from 'react';

export default function OurJourney() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const milestones = [
    {
      year: '2018',
      title: 'KIDURAT Founded',
      description: 'Launched with a mission to revolutionize school management with AI.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    },
    {
      year: '2020',
      title: 'First ERP System',
      description: 'Empowered 500+ schools with our ERP, reducing admin tasks by 30%.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    },
    {
      year: '2022',
      title: 'Mobile App Launch',
      description: 'Reached 1M downloads with our teacher-parent app.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    },
    {
      year: '2023',
      title: 'AI Analytics',
      description: 'Improved student outcomes by 25% with AI-driven insights.',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop',
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Impacted 10M+ students across 50+ countries.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      year: '2025',
      title: 'Next-Gen Platform',
      description: 'Launched AI-driven ERP with real-time analytics.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: {
      scale: 1.05,
      filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.5))',
      transition: { duration: 0.3 },
    },
  };

  const glitchKeyframes = `
    @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(2px, -2px); }
      60% { transform: translate(-2px, -2px); }
      80% { transform: translate(2px, 2px); }
      100% { transform: translate(0); }
    }
  `;

  return (
    <motion.div
      ref={ref}
      className="relative w-full py-12 px-6 max-w-7xl mx-auto"
      style={{ zIndex: 20 }}
    >
      <style>{glitchKeyframes}</style>
      <DecorativeCircles
        positions={[
          { size: '180px', top: '-40px', left: '-40px', opacity: 0.2 },
          { size: '160px', bottom: '-30px', right: '-30px', opacity: 0.2 },
        ]}
        colors={['bg-neonPink', 'bg-accentCyan']}
      />
      <motion.div style={{ y }}>
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accentCyan font-inter mb-8 text-center">
          Our Journey
        </h3>
        <div className="relative overflow-x-auto pb-8">
          <motion.div
            className="flex space-x-6"
            animate={{ x: `-${activeIndex * 320}px` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {milestones.map((milestone, index) => (
              <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <motion.div
                  className="flex-shrink-0 w-80 rounded-lg overflow-hidden bg-white/10 backdrop-blur-md shadow-lg border border-accentCyan/30"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    filter: 'brightness(1.1) contrast(1.2)',
                    animation: index === activeIndex ? 'glitch 1s infinite' : 'none',
                  }}
                >
                  <div className="relative h-48">
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="320px"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop';
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accentCyan/40 to-neonPink/40"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-accentCyan">{milestone.year}</p>
                    <h4 className="text-lg font-semibold text-primary">{milestone.title}</h4>
                    <p className="text-sm text-gray-800">{milestone.description}</p>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
          <div className="flex justify-center mt-4 space-x-2">
            {milestones.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-accentCyan' : 'bg-gray-400'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View milestone ${milestones[index].year}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}