"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GlobalImpact() {
  const counters = [
    { value: 90, label: 'Countries & Territories', suffix: '+' },
    { value: 60, label: 'Million Students', suffix: 'M+' },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
      <motion.div
        className="md:w-1/2"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=600&auto=format&fit=crop"
          alt="World map"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
          loading="lazy"
        />
      </motion.div>
      <div className="md:w-1/2">
        <motion.h3
          className="text-2xl font-semibold text-primary font-inter mb-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Global Reach
        </motion.h3>
        <motion.p
          className="text-lg text-grayDark font-poppins mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          KIDURAT’s solutions empower schools in over 90 countries, serving millions of students with innovative tools for education management.
        </motion.p>
        <div className="grid grid-cols-2 gap-4">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h4 className="text-4xl font-bold text-accentCyan font-inter">
                {counter.value}
                <span className="text-2xl">{counter.suffix}</span>
              </h4>
              <p className="text-sm text-grayDark font-poppins">{counter.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}