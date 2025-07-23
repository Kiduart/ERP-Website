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

export default function LeaderJourneys({ leaders }) {
  // Use fallback if theme is undefined
  const typography = theme?.typography || defaultTypography;

  const gradients = [
    theme.gradients.primaryToCyan,
    theme.gradients.cyanToPink,
    theme.gradients.purpleToGreen,
  ];

  const icons = {
    "CEO & Founder": "🏆",
    "Chief Technology Officer": "💻",
    "Chief Operating Officer": "⚙️",
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
          Our Leaders’ Journeys
        </motion.h2>
        {leaders.map((leader, index) => (
          <motion.div
            id={`leader-journey-${leader.id}`}
            key={leader.id}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 mb-16 p-6 rounded-lg shadow-lg bg-gradient-to-br ${gradients[index % gradients.length]}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
              <Image
                src={leader.photo}
                alt={leader.name}
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-xl shadow-md">
                {icons[leader.position] || "🌟"}
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3
                className="text-2xl font-semibold text-white mb-2"
                style={{ fontFamily: typography.heading }}
              >
                {leader.name} - {leader.position}
              </h3>
              {leader.journey.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-white leading-relaxed mb-4 opacity-90"
                  style={{ fontFamily: typography.body }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}