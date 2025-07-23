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

export default function LeaderList({ leaders }) {
  // Use fallback if theme is undefined
  const typography = theme?.typography || defaultTypography;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const handleClick = (id) => {
    const element = document.getElementById(`leader-journey-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to get initials from a name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
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
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {leaders.map((leader) => (
          <motion.div
            key={leader.id}
            variants={cardVariants}
            whileHover="hover"
            onClick={() => handleClick(leader.id)}
            className="relative group bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-primary/50 cursor-pointer"
            style={{
              backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
              backgroundSize: "200px 200px",
            }}
          >
            <div className="relative h-64">
              <Image
                src={leader.photo}
                alt={leader.name}
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-4 left-4 w-12 h-12 bg-accentCyan text-white rounded-full flex items-center justify-center text-lg font-bold shadow-md group-hover:bg-neonPink transition-colors duration-300">
                {getInitials(leader.name)}
              </div>
              <div className="absolute inset-0 group-hover:bg-gradient-radial from-accentCyan/20 to-transparent transition-all duration-300"></div>
            </div>
            <div className="p-6 text-center">
              <h3
                className="text-xl font-semibold text-primary mb-2 group-hover:bg-gradient-to-r group-hover:from-accentCyan group-hover:to-neonPink group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                style={{ fontFamily: typography.heading }}
              >
                {leader.name}
              </h3>
              <p
                className="text-grayDark text-sm"
                style={{ fontFamily: typography.body }}
              >
                {leader.position}
              </p>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-neonPink/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-300"></div>
          </motion.div>
        ))}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accentCyan/5 rounded-lg blur-3xl opacity-50"></div>
      </motion.div>
    </div>
  );
}