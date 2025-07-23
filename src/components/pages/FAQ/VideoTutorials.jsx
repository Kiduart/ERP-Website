"use client";

import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

const tutorials = [
  {
    title: "Setting Up Timetables",
    thumbnail: "https://images.unsplash.com/photo-1506784365847-4101e2b0da32?q=80&w=2070&auto=format&fit=crop",
    link: "/tutorials/timetables",
  },
  {
    title: "Using AI Analytics",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    link: "/tutorials/ai-analytics",
  },
  {
    title: "Managing Fees",
    thumbnail: "https://images.unsplash.com/photo-1556742524-750f5ab749fb?q=80&w=2070&auto=format&fit=crop",
    link: "/tutorials/fees",
  },
];

export default function VideoTutorials() {
  const typography = theme?.typography || defaultTypography;

  return (
    <div className="relative py-16">
      <WaveBackground gradient={theme.gradients.cyanToPink} height="80px" opacity={0.1} particleShape="circle" waveCount={3} texture="smooth" />
      <ParticleEffect count={20} color={theme.colors.neonPink} shape="circle" speed={0.3} />
      <DecorativeCircles
        positions={[
          { size: "200px", top: "-50px", left: "-50px" },
          { size: "150px", bottom: "-30px", right: "-30px" },
        ]}
        colors={["bg-primary", "bg-skyBlue"]}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative h-48">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
                  <FaPlayCircle className="text-white text-4xl group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <a
                href={tutorial.link}
                className="block p-4 bg-gradient-to-br from-white to-gray-50 hover:bg-gradient-to-tr from-primary/10 to-accentCyan/5 transition-all duration-300"
              >
                <h3
                  className="text-lg font-semibold text-primary group-hover:text-neonPink transition-colors duration-300"
                  style={{ fontFamily: typography.heading }}
                >
                  {tutorial.title}
                </h3>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}