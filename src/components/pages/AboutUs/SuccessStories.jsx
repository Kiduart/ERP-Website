"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Card from '@/components/common/Card';

export default function SuccessStories() {
  const successStories = [
    {
      school: 'Maple Grove Schools',
      location: 'Maple Grove, MN',
      quote: 'KIDURAT Analytics boosted student performance by 20%, enabling data-driven decisions.',
      speaker: 'Dr. Sarah Thompson',
      role: 'Director of Technology',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=100&h=100&fit=crop',
      metrics: '20% increase in student performance',
    },
    {
      school: 'Grain Valley School District',
      location: 'Grain Valley, MO',
      quote: 'KIDURAT saved us 15 hours weekly, allowing teachers to focus on education.',
      speaker: 'Michael Brown',
      role: 'Superintendent',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=100&h=100&fit=crop',
      metrics: '15 hours saved weekly',
    },
    {
      school: 'Torrance Unified School District',
      location: 'Torrance, CA',
      quote: 'KIDURAT’s platform increased teacher efficiency by 30%, enhancing engagement.',
      speaker: 'Emily Davis',
      role: 'Principal',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      logo: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=100&h=100&fit=crop',
      metrics: '30% increase in teacher efficiency',
    },
  ];

  const [activeStory, setActiveStory] = useState(0);

  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div className="relative w-full py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto space-x-4 mb-8 pb-4">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className={`flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden cursor-pointer ${activeStory === index ? 'ring-4 ring-accentCyan' : ''}`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveStory(index)}
            >
              <Image
                src={story.logo}
                alt={`${story.school} logo`}
                width={128}
                height={128}
                style={{ objectFit: 'cover' }}
                loading="lazy"
                onError={(e) => { e.target.src = '/fallback-image.jpg'; }}
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          key={activeStory}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <Card
            title={`${successStories[activeStory].school}, ${successStories[activeStory].location}`}
            description={
              <>
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    style={{ contain: 'layout' }}
                  >
                    <Image
                      src={successStories[activeStory].image}
                      alt={successStories[activeStory].school}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      onError={(e) => { e.target.src = '/fallback-image.jpg'; }}
                    />
                  </motion.div>
                </div>
                <p className="text-lg italic text-gray-600 mb-4">{successStories[activeStory].quote}</p>
                <p className="font-semibold text-gray-800">{successStories[activeStory].speaker}</p>
                <p className="text-sm text-gray-600">{successStories[activeStory].role}</p>
                <p className="text-sm text-accentCyan mt-2 font-semibold">{successStories[activeStory].metrics}</p>
              </>
            }
            variant="story"
            className="max-w-3xl mx-auto bg-white/90"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}