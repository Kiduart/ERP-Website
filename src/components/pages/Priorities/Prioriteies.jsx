"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaGraduationCap,
  FaChartLine,
  FaLightbulb,
  FaExpandAlt,
  FaUserFriends,
} from "react-icons/fa";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";
import Card from "@/components/common/Card";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function Priorities() {
  const typography = theme?.typography || defaultTypography;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, rotateX: 5, rotateY: 5, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.5 } },
  };

  const positions = [
    { size: "300px", bottom: "-50px", left: "50%", transform: "translateX(-50%)" },
    { size: "200px", top: "-30px", right: "-30px" },
  ];

  const priorities = [
    {
      icon: <FaShieldAlt className="w-8 h-8 text-primary" />,
      title: "Security First",
      description:
        "We prioritize the security of your data with robust encryption and compliance with global standards.",
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-primary" />,
      title: "Student Success",
      description:
        "Our system is designed to enhance learning outcomes and support student growth through AI-driven insights.",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-primary" />,
      title: "Efficiency",
      description:
        "Streamline administrative tasks to save time and resources, allowing you to focus on education.",
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description:
        "We continuously innovate with AI and modern technologies to bring cutting-edge solutions to schools.",
    },
    {
      icon: <FaExpandAlt className="w-8 h-8 text-primary" />,
      title: "Scalability",
      description:
        "Our platform grows with your institution, supporting schools of all sizes with seamless scalability.",
    },
    {
      icon: <FaUserFriends className="w-8 h-8 text-primary" />,
      title: "User-Centric Design",
      description:
        "We design with educators and administrators in mind, ensuring an intuitive and user-friendly experience.",
    },
  ];

  return (
    <div className="relative py-16">
      <ParticleEffect count={20} color={theme.colors.accentCyan} shape="star" speed={0.2} />
      <DecorativeCircles positions={positions} colors={["bg-neonOrange", "bg-skyBlue"]} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {priorities.map((priority, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            whileHover="hover"
            className="relative group"
          >
            <motion.div
              className="absolute inset-0 border-4 border-transparent rounded-xl"
              animate={{
                borderColor: [
                  theme.colors.accentCyan,
                  theme.colors.neonPink,
                  theme.colors.neonOrange,
                  theme.colors.accentCyan,
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <Card
              icon={
                <motion.div variants={iconVariants} whileHover="hover">
                  {priority.icon}
                </motion.div>
              }
              title={priority.title}
              description={priority.description}
              className="text-center bg-gradient-to-br from-white to-gray-50 hover:bg-gradient-to-tr from-primary/10 to-accentCyan/5 transition-all duration-300"
              titleClassName={typography.heading}
              descriptionClassName={typography.body}
            />
            <motion.div
              className="absolute top-2 right-2 w-10 h-10 bg-neonPink/10 rounded-full group-hover:scale-125 transition-transform duration-300"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}