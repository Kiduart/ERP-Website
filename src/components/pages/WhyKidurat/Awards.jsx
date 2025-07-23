"use client";

import Card from '@/components/common/Card';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Awards() {
  const items = [
    {
      title: 'EdTech Breakthrough Award 2023',
      description: 'Recognizing innovation in educational technology.',
      image: 'https://images.unsplash.com/photo-1580636528039-7a81e24b3d7c?q=80&w=100&auto=format&fit=crop',
    },
    {
      title: 'Stevie Awards 2023',
      description: 'Excellence in sales and customer service.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=100&auto=format&fit=crop',
    },
    {
      title: 'ISO 27001 Certified',
      description: 'Certified for information security management.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=100&auto=format&fit=crop',
    },
    {
      title: 'GDPR Compliant',
      description: 'Ensuring data protection and privacy.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=100&auto=format&fit=crop',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            title={item.title}
            description={
              <div className="flex flex-col items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="mb-4 rounded-full"
                  loading="lazy"
                />
                <p className="text-white font-poppins text-sm">{item.description}</p>
              </div>
            }
            variant="award"
            className="hover:shadow-[0_0_15px_rgba(0,182,239,0.5)]"
          />
        </motion.div>
      ))}
    </div>
  );
}