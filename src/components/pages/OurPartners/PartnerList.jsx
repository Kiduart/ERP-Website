"use client";

import DecorativeCircles from "@/components/utils/DecorativeCircles";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";
import { motion } from "framer-motion";
import Image from "next/image";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function PartnerList({ partners }) {
  // Use fallback if theme is undefined
  const typography = theme?.typography || defaultTypography;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
    hover: { scale: 1.05, rotateX: 5, rotateY: 5, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative py-16">
      <WaveBackground gradient={theme.gradients.primaryToCyan} height="100px" opacity={0.1} particleShape="diamond" waveCount={3} texture="wavy" />
      <ParticleEffect count={40} color={theme.colors.accentPurple} shape="triangle" speed={0.5} style={{ zIndex: 0 }} />
      <DecorativeCircles
        positions={[
          { size: '350px', top: '-100px', left: '-100px' },
          { size: '300px', bottom: '-80px', right: '-80px' },
          { size: '200px', top: '20%', right: '-50px' },
        ]}
        colors={['bg-emeraldGreen', 'bg-neonOrange', 'bg-skyBlue']}
        style={{ zIndex: 0 }}
      />
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            variants={cardVariants}
            whileHover="hover"
            className="relative group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent group-hover:border-primary/50"
            style={{
              backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
              backgroundSize: "300px 300px",
              boxShadow: `0 0 20px ${theme.colors.accentCyan}20`,
            }}
          >
            <motion.div
              className="absolute inset-0 border-4 border-transparent rounded-xl"
              animate={{
                borderColor: [
                  theme.colors.accentCyan,
                  theme.colors.neonPink,
                  theme.colors.skyBlue,
                  theme.colors.accentCyan,
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ zIndex: 1 }}
            />
            <div className="relative h-32 flex items-center justify-center bg-gradient-to-b from-gray-100 to-white">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={120}
                style={{ objectFit: "contain" }}
                loading="lazy"
                onError={(e) => (e.target.src = "https://via.placeholder.com/120?text=Logo")}
              />
            </div>
            <div className="p-6 relative z-20">
              <h3
                className="text-xl font-semibold text-primary mb-2 group-hover:bg-gradient-to-r group-hover:from-accentCyan group-hover:to-neonPink group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-center"
                style={{ fontFamily: typography.heading }}
              >
                {partner.name}
              </h3>
              <p
                className="text-grayDark text-sm mb-4 text-center"
                style={{ fontFamily: typography.body }}
              >
                {partner.description}
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-neonPink transition-colors duration-300 text-sm font-semibold pointer-events-auto z-30"
                  style={{ fontFamily: typography.body }}
                >
                  Visit Website
                </a>
                <a
                  href={partner.profile}
                  className="inline-block px-4 py-2 bg-accentCyan text-white rounded-lg hover:bg-skyBlue transition-colors duration-300 text-sm font-semibold pointer-events-auto z-30"
                  style={{ fontFamily: typography.body }}
                >
                  Visit Profile
                </a>
              </div>
            </div>
            <motion.div
              className="absolute top-0 right-0 w-28 h-28 bg-neonPink/10 rounded-full -translate-y-14 translate-x-14 group-hover:scale-125 transition-transform duration-300"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ zIndex: 2 }}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accentCyan/5 rounded-lg blur-3xl opacity-50"></div>
      </motion.div>
    </div>
  );
}