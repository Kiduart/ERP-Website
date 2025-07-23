"use client";

import { motion } from 'framer-motion';
import { FaShieldAlt, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import Card from '@/components/common/Card';
import DecorativeCircles from '@/components/utils/DecorativeCircles';

export default function Priorities() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  const positions = [
    { size: '300px', bottom: '-50px', left: '50%', transform: 'translateX(-50%)' },
  ];

  const priorities = [
    { icon: <FaShieldAlt className="w-8 h-8 mx-auto" />, title: 'Security First', description: 'We prioritize the security of your data with robust encryption and compliance with global standards.' },
    { icon: <FaGraduationCap className="w-8 h-8 mx-auto" />, title: 'Student Success', description: 'Our system is designed to enhance learning outcomes and support student growth through AI-driven insights.' },
    { icon: <FaChartLine className="w-8 h-8 mx-auto" />, title: 'Efficiency', description: 'Streamline administrative tasks to save time and resources, allowing you to focus on education.' },
  ];

  return (
    <div className="relative">
      <DecorativeCircles positions={positions} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
        {priorities.map((priority, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            whileHover="hover"
          >
            <Card
              icon={priority.icon}
              title={priority.title}
              description={priority.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}