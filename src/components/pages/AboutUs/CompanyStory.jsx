"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import WaveBackground from '@/components/utils/WaveBackground';
import DecorativeCircles from '@/components/utils/DecorativeCircles';
import { useState } from 'react';
import { theme } from '../../utils/theme';

export default function CompanyStory() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const images = [
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
  ];

  const stats = [
    { value: '10M+', label: 'Students Impacted' },
    { value: '50+', label: 'Countries Served' },
    { value: '2018', label: 'Founded' },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hover: { scale: 1.05, boxShadow: `0 0 20px ${theme.colors.accentCyan}50` },
  };

  const underlineVariants = {
    hidden: { width: '0%' },
    visible: { width: '70%', transition: { duration: 1, ease: 'easeOut', delay: 0.4 } },
    hover: { boxShadow: `0 0 15px ${theme.colors.accentCyan}` },
  };

  return (
    <motion.div className="relative w-full py-12 px-6 overflow-hidden">
      <WaveBackground gradient={theme.gradients.purpleToGreen} height="100px" opacity={0.3} />
      <DecorativeCircles
        positions={[
          { size: '200px', top: '-50px', left: '-50px', opacity: 0.2 },
          { size: '150px', bottom: '-30px', right: '-30px', opacity: 0.2 },
        ]}
        colors={['bg-accentCyan', 'bg-neonPink']}
      />
      <div className="relative max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariants}>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
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
                  src={`https://www.youtube.com/embed/RncpQnwMYts?autoplay=${isPlaying ? 1 : 0}&mute=1&loop=1&playlist=RncpQnwMYts`}
                  title="AI in Action"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center py-2">
                  <p className="text-lg font-inter">AI in Action</p>
                </div>
                <motion.button
                  className="absolute top-4 right-4 bg-white/80 text-primary rounded-full p-2"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 1)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </motion.button>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {images.map((src, index) => (
                  <motion.div
                    key={index}
                    className="relative h-24 rounded-lg overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(src)}
                  >
                    <Image
                      src={src}
                      alt={`Story image ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 33vw, 20vw"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop';
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className="lg:w-1/2 text-right">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accentCyan font-inter mb-6">
                Our Global Journey
              </h3>
              <motion.div
                className="w-32 h-1 ml-auto mb-6 bg-gradient-to-r from-accentCyan to-neonPink rounded-full"
                variants={underlineVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              />
              <div className="backdrop-blur-md bg-white/10 rounded-lg p-8 shadow-lg border border-white/20">
                <p className="text-lg text-gray-800 font-poppins mb-4">
                  Founded in 2018, KIDURAT set out to revolutionize education with AI-driven solutions. Our first ERP system in 2020 empowered small schools, followed by AI analytics in 2023 that transformed data-driven education.
                </p>
                <p className="text-lg text-gray-800 font-poppins mb-4">
                  By 2025, we’ve impacted over 10 million students across 50+ countries, partnering with educators to ensure equity and innovation. Our journey continues with a next-gen platform launching this year.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <p className="text-2xl font-bold text-accentCyan">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Selected story image"
            width={800}
            height={600}
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop';
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}