"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { theme } from "@/components/utils/theme";
import Button from "@/components/common/Button";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function ContactForm() {
  const typography = theme?.typography || defaultTypography;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "General",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = ["General", "Sales", "Support", "Partnership", "Media"];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setStatus("success");
      // Trigger confetti animation on success
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: [theme.colors.accentCyan, theme.colors.neonPink, theme.colors.emeraldGreen],
      });
      setFormData({ name: "", email: "", inquiryType: "General", message: "" });
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    focus: {
      borderColor: theme.colors.accentCyan,
      boxShadow: `0 0 10px ${theme.colors.accentCyan}50`,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="mb-6" variants={inputVariants}>
        <label
          htmlFor="name"
          className="block text-grayDark text-sm font-semibold mb-2"
          style={{ fontFamily: typography.heading }}
        >
          Name
        </label>
        <motion.input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 bg-white text-grayDark border border-gray-300 rounded-lg focus:outline-none ${
            errors.name ? "border-neonPink" : ""
          }`}
          required
          whileFocus="focus"
          variants={inputVariants}
          placeholder="Enter your name"
          style={{ fontFamily: typography.body }}
        />
        {errors.name && (
          <p
            className="text-neonPink text-sm mt-1 font-semibold"
            style={{ fontFamily: typography.body }}
          >
            {errors.name}
          </p>
        )}
      </motion.div>
      <motion.div className="mb-6" variants={inputVariants}>
        <label
          htmlFor="email"
          className="block text-grayDark text-sm font-semibold mb-2"
          style={{ fontFamily: typography.heading }}
        >
          Email
        </label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 bg-white text-grayDark border border-gray-300 rounded-lg focus:outline-none ${
            errors.email ? "border-neonPink" : ""
          }`}
          required
          whileFocus="focus"
          variants={inputVariants}
          placeholder="Enter your email"
          style={{ fontFamily: typography.body }}
        />
        {errors.email && (
          <p
            className="text-neonPink text-sm mt-1 font-semibold"
            style={{ fontFamily: typography.body }}
          >
            {errors.email}
          </p>
        )}
      </motion.div>
      <motion.div className="mb-6" variants={inputVariants}>
        <label
          htmlFor="inquiryType"
          className="block text-grayDark text-sm font-semibold mb-2"
          style={{ fontFamily: typography.heading }}
        >
          Inquiry Type
        </label>
        <motion.select
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-white text-grayDark border border-gray-300 rounded-lg focus:outline-none"
          whileFocus="focus"
          variants={inputVariants}
          style={{ fontFamily: typography.body }}
        >
          {inquiryTypes.map((type) => (
            <option key={type} value={type} className="bg-gray-900 text-grayLight">
              {type}
            </option>
          ))}
        </motion.select>
      </motion.div>
      <motion.div className="mb-6" variants={inputVariants}>
        <label
          htmlFor="message"
          className="block text-grayDark text-sm font-semibold mb-2"
          style={{ fontFamily: typography.heading }}
        >
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-2 bg-white text-grayDark border border-gray-300 rounded-lg focus:outline-none ${
            errors.message ? "border-neonPink" : ""
          }`}
          rows="5"
          required
          whileFocus="focus"
          variants={inputVariants}
          placeholder="Enter your message"
          style={{ fontFamily: typography.body }}
        />
        {errors.message && (
          <p
            className="text-neonPink text-sm mt-1 font-semibold"
            style={{ fontFamily: typography.body }}
          >
            {errors.message}
          </p>
        )}
      </motion.div>
      <motion.div variants={inputVariants}>
        <Button
          text={isSubmitting ? "Sending..." : "Send Message"}
          size="large"
          className="w-full bg-primary hover:bg-neonPink text-white transition-colors duration-300"
          disabled={isSubmitting}
        />
      </motion.div>
      <AnimatePresence>
        {status === "success" && (
          <motion.p
            className="text-emeraldGreen text-center mt-4 font-semibold"
            style={{ fontFamily: typography.body }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            Message sent successfully! 🎉
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            className="text-neonPink text-center mt-4 font-semibold"
            style={{ fontFamily: typography.body }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            Failed to send message. Please try again.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}