"use client";

import { motion } from "framer-motion";
import { theme } from "@/components/utils/theme";
import ParticleEffect from "@/components/utils/ParticleEffect";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

const awards = [
  { name: "Best EdTech Solution 2024", issuer: "Global Education Awards", icon: "🏆" },
  { name: "Innovation in AI Learning 2024", issuer: "Tech Innovators Summit", icon: "🏆" },
  { name: "Top Startup of the Year 2023", issuer: "EdTech Review", icon: "🏆" },
];

export default function RecentAwards() {
  const typography = theme?.typography || defaultTypography;

  return (
    <motion.div
      className="relative bg-white p-6 rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
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
      />
      <ParticleEffect count={10} color={theme.colors.accentCyan} shape="star" speed={0.2} size={3} />
      <h3
        className="text-xl font-bold bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent mb-4 relative z-10"
        style={{ fontFamily: typography.heading }}
      >
        Recent Awards
      </h3>
      <div className="space-y-4 relative z-10">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05, backgroundColor: theme.colors.accentCyan + "10" }}
            transition={{ duration: 0.3 }}
            style={{ padding: "8px", borderRadius: "8px" }}
          >
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
              {award.icon}
            </span>
            <div>
              <p
                className="text-grayDark font-medium group-hover:text-neonPink transition-colors duration-300"
                style={{ fontFamily: typography.body }}
              >
                {award.name}
              </p>
              <p
                className="text-sm text-gray-500"
                style={{ fontFamily: typography.body }}
              >
                {award.issuer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}