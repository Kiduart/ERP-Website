"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Card from '@/components/common/Card';
import DecorativeCircles from '@/components/utils/DecorativeCircles';
import Tilt from 'react-parallax-tilt';
import { theme } from '../../utils/theme';

export default function Awards() {
  const awards = [
    {
      year: '2024',
      title: 'EdTech Innovation Award',
      description: 'Recognized for AI analytics transforming education globally.',
      icon: (
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-accentCyan"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M12 2L2 9l10 5 10-5-10-7zM2 15l10 5 10-5" />
        </motion.svg>
      ),
    },
    {
      year: '2024',
      title: 'Best K-12 Software',
      description: 'Honored for user-friendly platform at Global Education Summit.',
      icon: (
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-neonPink"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </motion.svg>
      ),
    },
    {
      year: '2023',
      title: 'Excellence in Cloud Technology',
      description: 'Certified for secure, scalable cloud infrastructure.',
      icon: (
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-emeraldGreen"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M2 12h20M4 8h16M6 16h12M8 4h8M10 20h4" />
        </motion.svg>
      ),
    },
  ];

  const certifications = [
    {
      title: 'ISO 27001',
      description: 'Certified for information security management.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'GDPR Compliant',
      description: 'Ensures data protection for EU users.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'SOC 2 Type II',
      description: 'Meets stringent security and privacy standards.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'FERPA Compliant',
      description: 'Protects student education records.',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  const [currentCert, setCurrentCert] = useState(0);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.1 },
    }),
    hover: { scale: 1.03, boxShadow: `0 10px 20px ${theme.colors.accentCyan}33` },
  };

  return (
    <motion.div className="relative w-full py-12 px-6">
      <DecorativeCircles
        positions={[
          { size: '180px', top: '-40px', left: '-40px', opacity: 0.3 },
          { size: '160px', bottom: '-30px', right: '-30px', opacity: 0.3 },
        ]}
        colors={['bg-accentCyan', 'bg-neonPink']}
      />
      <div className="relative max-w-7xl mx-auto">
        <h4 className="text-2xl font-bold text-primary font-inter mb-6">Awards</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {awards.map((award, index) => (
            <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.5 }}
                custom={index}
              >
                <Card
                  title={`${award.year} - ${award.title}`}
                  description={award.description}
                  icon={award.icon}
                  variant="award"
                  className="h-auto bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-2 border-accentCyan/50 text-gray-800"
                />
              </motion.div>
            </Tilt>
          ))}
        </div>
        <h4 className="text-2xl font-bold text-primary font-inter mb-6">Certifications</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden bg-white/90 backdrop-blur-md p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${theme.colors.neonPink}50` }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative h-40 mb-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop'; }}
                />
              </div>
              <h5 className="text-lg font-semibold text-primary mb-2">{cert.title}</h5>
              <p className="text-sm text-gray-800">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}