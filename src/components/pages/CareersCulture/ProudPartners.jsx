"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function ProudPartners({ partners }) {
  const typography = theme?.typography || defaultTypography;

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative py-16">
      <WaveBackground gradient={theme.gradients.cyanToPink} height="80px" opacity={0.1} particleShape="circle" waveCount={3} texture="smooth" />
      <ParticleEffect count={20} color={theme.colors.neonPink} shape="circle" />
      <DecorativeCircles
        positions={[
          { size: '200px', top: '-50px', left: '-50px' },
          { size: '150px', bottom: '-30px', right: '-30px' },
        ]}
        colors={['bg-primary', 'bg-skyBlue']}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent mb-12 text-center"
          style={{ fontFamily: typography.heading }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Proud to Partner With
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-12"
          variants={logoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={logoVariants}
              whileHover="hover"
              className="relative w-32 h-32 grayscale group-hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                style={{ objectFit: "contain" }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}