"use client";

import Button from '@/components/common/Button';
import { motion } from 'framer-motion';

export default function SupportNetwork() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold text-primary font-inter mb-4">Unparalleled Support</h3>
        <p className="text-lg text-grayDark font-poppins mb-6">
          With KIDURAT, you’re supported by award-winning professional services, dedicated support teams, and industry experts. Our conferences, user groups, and PowerSchool Community connect you with experienced professionals to meet your ongoing needs.
        </p>
        <Button
          text="Join Our Community"
          href="/community"
          size="medium"
          variant="primary"
          className="hover:shadow-lg"
        />
      </motion.div>
      <div className="md:w-1/2 relative">
        <div className="relative w-full h-0 pb-[56.25%] rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="KIDURAT Support Overview"
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/30"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-5xl text-neonPink">▶</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}