"use client";

import Button from '@/components/common/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ComprehensiveSolutions() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
      <div className="md:w-1/2">
        <motion.h3
          className="text-2xl font-semibold text-primary font-inter mb-4 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-16 after:h-[2px] after:bg-gradient-to-r after:from-accentCyan after:to-neonPink"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Unified Education Platform
        </motion.h3>
        <motion.p
          className="text-lg text-grayDark font-poppins mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          KIDURAT transcends traditional student information systems. Our cloud-based solutions streamline processes, unify data for informed decisions, and leverage ethical AI to enhance student outcomes and equity. Experience a reliable, centralized platform for educators, students, and administrators.
        </motion.p>
        <Button
          text="Learn More"
          href="/solutions"
          size="medium"
          variant="primary"
          className="hover:shadow-lg"
        />
      </div>
      <motion.div
        className="md:w-1/2"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
          alt="Education technology"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}