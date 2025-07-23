"use client";

import { motion } from "framer-motion";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

const values = [
  { title: "Innovation", description: "We push boundaries to create transformative educational solutions.", icon: "💡" },
  { title: "Collaboration", description: "We thrive by working together, valuing diverse perspectives.", icon: "🤝" },
  { title: "Impact", description: "We’re driven to make a meaningful difference in global education.", icon: "🌍" },
  { title: "Integrity", description: "We uphold the highest standards of honesty and transparency.", icon: "🛡️" },
];

export default function CoreValues() {
  const typography = theme?.typography || defaultTypography;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative py-16">
      <WaveBackground gradient={theme.gradients.purpleToGreen} height="90px" opacity={0.1} particleShape="star" waveCount={4} texture="smooth" />
      <ParticleEffect count={15} color={theme.colors.skyBlue} shape="diamond" />
      <DecorativeCircles
        positions={[
          { size: '250px', top: '-60px', right: '-60px' },
          { size: '200px', bottom: '-40px', left: '-40px' },
        ]}
        colors={['bg-neonPink', 'bg-accentCyan']}
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
          Our Core Values
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative p-6 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-radial from-accentCyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              />
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3
                className="text-xl font-semibold text-primary mb-2"
                style={{ fontFamily: typography.heading }}
              >
                {value.title}
              </h3>
              <p
                className="text-grayDark text-sm"
                style={{ fontFamily: typography.body }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}