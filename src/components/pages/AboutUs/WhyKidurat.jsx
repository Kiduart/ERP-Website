"use client";

import { motion } from 'framer-motion';
import Card from '@/components/common/Card';
import WaveBackground from '@/components/utils/WaveBackground';
import { theme } from '../../utils/theme';

export default function WhyKidurat() {
  const whyKiduratItems = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emeraldGreen">
          <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: 'Global Reach',
      description: 'Serving educators in over 50 countries, KIDURAT is uniquely positioned to meet your needs and drive educational excellence worldwide.',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neonPink">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a3 3 0 0 1-6 0v-1m6 0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m18 0H3" />
        </svg>
      ),
      title: 'Proven Experience',
      description: 'With 7+ years of expertise, we support 10+ million students globally, delivering reliable and innovative solutions.',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accentPurple">
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4M4.2 4.2l2.8 2.8m10.8 10.8l-2.8-2.8M4.2 19.8l2.8-2.8m10.8-10.8l-2.8 2.8M12 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z" />
        </svg>
      ),
      title: 'Standards-First Approach',
      description: 'Our solutions prioritize interoperability and security, ensuring a seamless and safe ecosystem for your institution.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: index * 0.2 },
    }),
    hover: {
      scale: 1.1,
      rotateX: 5,
      rotateY: 5,
      boxShadow: `0 15px 30px ${theme.colors.accentCyan}33`,
    },
  };

  return (
    <motion.div className="relative w-full py-12 px-6 overflow-hidden">
      <WaveBackground gradient={theme.gradients.cyanToPink} height="100px" opacity={0.3} />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyKiduratItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
            >
              <Card
                title={item.title}
                description={item.description}
                icon={item.icon}
                variant="highlight"
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}