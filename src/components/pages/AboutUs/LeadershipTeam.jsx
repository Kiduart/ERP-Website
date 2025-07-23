"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/common/Button';
import DecorativeCircles from '@/components/utils/DecorativeCircles';
import { useState } from 'react';
import { theme } from '../../utils/theme';

export default function LeadershipTeam() {
  const [isPlaying, setIsPlaying] = useState(false);

  const teamMembers = [
    {
      name: 'Alice Johnson',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=100&h=100&fit=crop',
    },
    {
      name: 'Bob Carter',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&fit=crop',
    },
    {
      name: 'Clara Lee',
      role: 'COO',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&fit=crop',
    },
  ];

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.2 },
    }),
    hover: { scale: 1.15, boxShadow: `0 0 15px ${theme.colors.accentCyan}` },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hover: { scale: 1.05, boxShadow: `0 0 20px ${theme.colors.accentCyan}50` },
  };

  return (
    <motion.div className="relative w-full py-12 px-6 max-w-7xl mx-auto">
      <DecorativeCircles
        positions={[
          { size: '160px', top: '-20px', left: '-20px', opacity: 0.3 },
          { size: '180px', bottom: '-30px', right: '-30px', opacity: 0.3 },
        ]}
        colors={['bg-accentCyan', 'bg-neonPink']}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <p className="text-lg text-gray-800 font-poppins mb-6 text-center md:text-left">
            Meet the visionaries driving KIDURAT’s mission to revolutionize education.
          </p>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative w-20 h-20 rounded-full overflow-hidden"
                variants={avatarVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                custom={index}
                viewport={{ once: true }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="80px"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=100&h=100&fit=crop';
                  }}
                />
              </motion.div>
            ))}
          </div>
          <Button
            text="Meet the Team"
            href="/company/team"
            size="large"
            variant="primary"
            className="hover:shadow-lg mt-6"
          />
        </div>
        <motion.div
          className="relative h-60 rounded-lg overflow-hidden"
          variants={videoVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/YZ7DbgwyD4w?autoplay=${isPlaying ? 1 : 0}&mute=1&loop=1&playlist=YZ7DbgwyD4w`}
            title="Leadership Team Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center py-2">
            <p className="text-lg font-inter">Our Leadership in Action</p>
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
        </motion.div>
      </div>
    </motion.div>
  );
}