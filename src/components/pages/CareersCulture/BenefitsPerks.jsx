"use client";

import DecorativeCircles from "@/components/utils/DecorativeCircles";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";
import { motion } from "framer-motion";


// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

const benefits = [
  { title: "Health & Wellness", description: "Comprehensive health insurance and wellness programs.", icon: "🏥" },
  { title: "Flexible Work", description: "Remote work options and flexible schedules.", icon: "🏡" },
  { title: "Learning & Growth", description: "Access to training and professional development.", icon: "📚" },
  { title: "Team Events", description: "Regular team-building activities and events.", icon: "🎉" },
];

export default function BenefitsPerks() {
  const typography = theme?.typography || defaultTypography;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
    hover: { scale: 1.05, rotateX: 5, rotateY: 5, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative py-16">
      <WaveBackground gradient={theme.gradients.primaryToCyan} height="100px" opacity={0.1} particleShape="diamond" waveCount={3} texture="wavy" />
      <ParticleEffect count={25} color={theme.colors.accentPurple} shape="star" />
      <DecorativeCircles
        positions={[
          { size: '300px', top: '-80px', left: '-80px' },
          { size: '250px', bottom: '-60px', right: '-60px' },
        ]}
        colors={['bg-emeraldGreen', 'bg-neonOrange']}
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
          Benefits & Perks
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3
                className="text-xl font-semibold text-primary mb-2"
                style={{ fontFamily: typography.heading }}
              >
                {benefit.title}
              </h3>
              <p
                className="text-grayDark text-sm"
                style={{ fontFamily: typography.body }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}