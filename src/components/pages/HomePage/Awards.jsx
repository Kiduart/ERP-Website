"use client";

import Card from '@/components/common/Card';
import DecorativeCircles from '@/components/utils/DecorativeCircles';
import { motion } from 'framer-motion';


export default function AwardsList() {
  const awards = [
    {
      title: 'EdTech Breakthrough Award 2023',
      description: 'Recognizing innovation in educational technology.',
      icon: 'https://img.icons8.com/color/48/000000/trophy.png',
    },
    {
      title: '2023 Stevie Awards',
      description: 'For excellence in sales and customer service.',
      icon: 'https://img.icons8.com/color/48/000000/medal.png',
    },
    {
      title: 'IEdTech Trusted Apps Certified 2023',
      description: 'Certified for trust and reliability.',
      icon: 'https://img.icons8.com/color/48/000000/verified-badge.png',
    },
    {
      title: 'BIG Innovation Award 2023',
      description: 'Awarded for groundbreaking innovation.',
      icon: 'https://img.icons8.com/color/48/000000/idea.png',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  const positions = [
    { size: '300px', top: '-50px', left: '-50px' },
    { size: '200px', bottom: '-30px', right: '-30px' },
  ];

  return (
    <div className="relative">
      <DecorativeCircles positions={positions} colors={['bg-accentYellow', 'bg-accentPurple', 'bg-accentCyan']} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            whileHover="hover"
          >
            <Card
              icon={<img src={award.icon} alt={award.title} className="w-12 h-12 mx-auto" />}
              title={award.title}
              description={award.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}