"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/common/Button';
import DecorativeCircles from '@/components/utils/DecorativeCircles';
import { theme } from '../../utils/theme';

export default function GetInTouch() {
  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.03, boxShadow: `0 0 20px ${theme.colors.accentCyan}50` },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: `0 0 20px ${theme.colors.neonPink}50` },
  };

  return (
    <motion.div className="relative py-12 px-6 max-w-7xl mx-auto">
      <DecorativeCircles
        positions={[
          { size: '150px', top: '-20px', left: '-20px', opacity: 0.3 },
          { size: '170px', bottom: '-30px', right: '-30px', opacity: 0.3 },
        ]}
        colors={['bg-accentCyan', 'bg-neonPink']}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="relative h-80 rounded-lg overflow-hidden"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
            alt="Get in Touch"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop'; }}
          />
        </motion.div>
        <motion.div
          className="backdrop-blur-md bg-white/10 rounded-lg p-8 shadow-lg border border-accentCyan/30"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-neonPink mb-4">
            Let’s Transform Education
          </h3>
          <p className="text-lg text-gray-800 font-poppins mb-6">
            Discover how KIDURAT’s AI solutions can elevate your school. Schedule a demo or reach out for a consultation.
          </p>
          <Button
            text="Contact Us"
            href="/contact"
            size="large"
            variant="primary"
            className="hover:shadow-lg"
          />
          <motion.div
            className="mt-4 w-24 h-1 bg-gradient-to-r from-accentCyan to-neonPink rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '96px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}