"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import ParticleEffect from "@/components/utils/ParticleEffect";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

const products = [
  { id: "learning-platform", name: "Learning Platform" },
  { id: "school-management", name: "School Management System" },
  { id: "ai-tutor", name: "AI-Powered Tutor" },
];

const features = [
  { id: "personalized-learning", name: "Personalized Learning Paths" },
  { id: "analytics-dashboard", name: "Analytics Dashboard" },
  { id: "parent-portal", name: "Parent Portal" },
  { id: "mobile-access", name: "Mobile Accessibility" },
];

export default function DemoRequestForm() {
  const typography = theme?.typography || defaultTypography;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    selectedProducts: [],
    selectedFeatures: [],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e, type) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedList = checked
        ? [...prev[type], value]
        : prev[type].filter((item) => item !== value);
      return { ...prev, [type]: updatedList };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <div className="relative">
      <WaveBackground gradient={theme.gradients.cyanToPink} height="80px" opacity={0.1} particleShape="circle" waveCount={3} texture="smooth" />
      <ParticleEffect count={30} color={theme.colors.neonPink} shape="hexagon" speed={0.3} motionPath="spiral" />
      <DecorativeCircles
        positions={[
          { size: "250px", top: "-70px", left: "-70px" },
          { size: "200px", bottom: "-50px", right: "-50px" },
          { size: "150px", top: "30%", left: "-40px" },
        ]}
        colors={["bg-primary", "bg-skyBlue", "bg-neonOrange"]}
      />
      <motion.div
        className="relative z-10 bg-white p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
          backgroundSize: "300px 300px",
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
        />
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 relative z-10"
          style={{ fontFamily: typography.heading }}
          animate={{
            textShadow: [
              `0 0 10px ${theme.colors.accentCyan}`,
              `0 0 20px ${theme.colors.neonPink}`,
              `0 0 10px ${theme.colors.accentCyan}`,
            ],
            color: [theme.colors.accentCyan, theme.colors.neonPink, theme.colors.accentCyan],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          Talk to Sales / Get a Demo
        </h2>
        {isSubmitted ? (
          <p
            className="text-lg text-grayDark relative z-10"
            style={{ fontFamily: typography.body }}
          >
            Thank you for your request! Our team will reach out to schedule your demo shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label
                className="block text-sm font-medium text-grayDark mb-1"
                style={{ fontFamily: typography.body }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                style={{ fontFamily: typography.body }}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-grayDark mb-1"
                style={{ fontFamily: typography.body }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                style={{ fontFamily: typography.body }}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-grayDark mb-1"
                style={{ fontFamily: typography.body }}
              >
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                style={{ fontFamily: typography.body }}
              />
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-primary mb-2"
                style={{ fontFamily: typography.heading }}
              >
                Select Products
              </h3>
              <div className="space-y-3">
                {products.map((product) => (
                  <label
                    key={product.id}
                    className="flex items-center space-x-3 group cursor-pointer"
                    style={{ fontFamily: typography.body }}
                  >
                    <input
                      type="checkbox"
                      value={product.id}
                      checked={formData.selectedProducts.includes(product.id)}
                      onChange={(e) => handleCheckboxChange(e, "selectedProducts")}
                      className="h-5 w-5 text-primary focus:ring-0 border-gray-300 rounded cursor-pointer group-hover:border-neonPink transition-all duration-300"
                    />
                    <span className="group-hover:text-neonPink transition-colors duration-300">
                      {product.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-primary mb-2"
                style={{ fontFamily: typography.heading }}
              >
                Select Features
              </h3>
              <div className="space-y-3">
                {features.map((feature) => (
                  <label
                    key={feature.id}
                    className="flex items-center space-x-3 group cursor-pointer"
                    style={{ fontFamily: typography.body }}
                  >
                    <input
                      type="checkbox"
                      value={feature.id}
                      checked={formData.selectedFeatures.includes(feature.id)}
                      onChange={(e) => handleCheckboxChange(e, "selectedFeatures")}
                      className="h-5 w-5 text-primary focus:ring-0 border-gray-300 rounded cursor-pointer group-hover:border-neonPink transition-all duration-300"
                    />
                    <span className="group-hover:text-neonPink transition-colors duration-300">
                      {feature.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <motion.div animate={floatAnimation}>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-neonPink transition-colors duration-300 font-semibold shadow-lg hover:shadow-neonPink/50"
                style={{ fontFamily: typography.body }}
              >
                Request a Demo
              </button>
            </motion.div>
          </form>
        )}
      </motion.div>
    </div>
  );
}