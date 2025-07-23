"use client";

import { motion } from "framer-motion";
import {
  FaUser,
  FaClock,
  FaCalendar,
  FaMoneyBill,
  FaChartLine,
  FaUsers,
  FaMobileAlt,
} from "react-icons/fa";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";
import Card from "@/components/common/Card";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function FeatureList() {
  const typography = theme?.typography || defaultTypography;

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 },
    }),
    hover: { scale: 1.05, rotateX: 5, rotateY: 5, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    hover: { rotate: 360, transition: { duration: 0.5 } },
  };

  const positions = [
    { size: "400px", top: "-100px", left: "-100px" },
    { size: "300px", top: "50%", right: "-150px", transform: "translateY(-50%)" },
    { size: "200px", bottom: "-50px", left: "20%" },
  ];

  const features = [
    {
      icon: <FaUser className="w-8 h-8 text-primary" />,
      title: "Student Information",
      description:
        "Easily manage student records, including personal details, grades, attendance history, and more in a centralized system.",
    },
    {
      icon: <FaClock className="w-8 h-8 text-primary" />,
      title: "Attendance Tracking",
      description:
        "Automate attendance tracking with AI-powered facial recognition or manual entry, ensuring accuracy and saving time.",
    },
    {
      icon: <FaCalendar className="w-8 h-8 text-primary" />,
      title: "Timetable Management",
      description:
        "Create, edit, and manage class schedules with ease, ensuring no conflicts and optimal use of resources.",
    },
    {
      icon: <FaMoneyBill className="w-8 h-8 text-primary" />,
      title: "Fee Management",
      description:
        "Simplify fee collection, track payments, send reminders, and generate reports with our integrated fee management system.",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-primary" />,
      title: "AI Analytics",
      description:
        "Leverage AI-driven analytics to gain insights into student performance, attendance trends, and school operations.",
    },
    {
      icon: <FaUsers className="w-8 h-8 text-primary" />,
      title: "Parent Portal",
      description:
        "Enable parents to stay informed with access to their child’s grades, attendance, and school updates in real-time.",
    },
    {
      icon: <FaMobileAlt className="w-8 h-8 text-primary" />,
      title: "Mobile App",
      description:
        "Access all features on the go with our mobile app, designed for seamless use on iOS and Android devices.",
    },
  ];

  return (
    <div className="relative py-16">
      <WaveBackground
        gradient={theme.gradients.cyanToPink}
        height="120px"
        opacity={0.15}
        particleShape="hexagon"
        waveCount={4}
        texture="smooth"
      />
      <ParticleEffect
        count={50}
        color={theme.colors.accentPurple}
        shape="triangle"
        speed={0.4}
        motionPath="spiral"
        style={{ zIndex: 0 }}
      />
      <ParticleEffect
        count={20}
        color={theme.colors.neonPink}
        shape="star"
        speed={0.2}
        motionPath="top-right"
        style={{ zIndex: 0 }}
      />
      <DecorativeCircles
        positions={positions}
        colors={["bg-neonPink", "bg-accentCyan", "bg-emeraldGreen"]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
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
                  theme.colors.skyBlue,
                  theme.colors.accentCyan,
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accentCyan/5 rounded-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <Card
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="relative z-10 bg-gradient-to-br from-white to-gray-50 hover:bg-gradient-to-tr from-primary/10 to-accentCyan/5 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                backgroundImage:
                  "url('https://www.transparenttextures.com/patterns/stardust.png')",
                backgroundSize: "300px 300px",
              }}
            />
            <motion.div
              className="absolute top-2 right-2 w-10 h-10 bg-neonPink/20 rounded-full group-hover:scale-125 transition-transform duration-300"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}