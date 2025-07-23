"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import WaveBackground from '@/components/utils/WaveBackground';
import Card from '@/components/common/Card';

export default function Statistics() {
  const stats = [
    {
      title: '60M+',
      value: 60,
      description: 'Students served globally with our K-12 solutions.',
      icon: '🎓',
    },
    {
      title: '18K',
      value: 18,
      description: 'Customers trust KIDURAT for their schools.',
      icon: '🏫',
    },
    {
      title: '90/100',
      value: 90,
      description: 'Top U.S. districts by student enrollment.',
      icon: '🏆',
    },
    {
      title: '300K',
      value: 300,
      description: 'Active members in our PowerSchool Community.',
      icon: '👥',
    },
    {
      title: '90+',
      value: 90,
      description: 'Countries and territories using KIDURAT.',
      icon: '🌍',
    },
  ];

  useEffect(() => {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseFloat(entry.target.getAttribute('data-count'));
            let current = 0;
            const increment = target / 50;
            const updateCounter = () => {
              if (current < target) {
                current += increment;
                entry.target.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
              } else {
                entry.target.textContent = target;
              }
            };
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <WaveBackground gradient="from-accentCyan to-neonPink" height="80px" opacity={0.1} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              title={
                <span className="text-3xl font-bold text-accentCyan">
                  <span data-count={stat.value}>{0}</span>
                  {stat.title.includes('+') ? '+' : stat.title.includes('/') ? '/100' : 'K'}
                </span>
              }
              description={stat.description}
              icon={stat.icon}
              variant="highlight"
              className="text-center p-4"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}