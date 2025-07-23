"use client";

import Button from '@/components/common/Button';
import DecorativeCircles from '@/components/utils/DecorativeCircles';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DiscoverSolutions() {
  const circlePositions = [
    { size: '100px', top: '-20px', right: '-20px', opacity: 0.1 },
  ];

  return (
    <div className="relative max-w-6xl mx-auto">
      <DecorativeCircles positions={circlePositions} colors={['bg-accentCyan']} />
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-primary font-inter mb-4">Find the Perfect KIDURAT Solution</h3>
          <p className="text-lg text-grayDark font-poppins mb-6">
            Explore our range of cloud-based tools designed to meet the unique needs of your school or district.
          </p>
          <Button
            text="Discover Solutions"
            href="/solutions"
            size="large"
            variant="primary"
            className="hover:shadow-lg"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
            alt="KIDURAT Solutions"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}