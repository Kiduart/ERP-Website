"use client";

import Button from '@/components/common/Button';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0, 0.2, 1],
        type: 'spring',
        stiffness: 120,
      },
    },
    focus: {
      borderColor: 'transparent',
      boxShadow: '0 0 12px rgba(0, 182, 239, 0.6)',
      rotate: [0, 2, -2, 0],
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      boxShadow: '0 0 25px rgba(0, 182, 239, 0.4)',
      transition: { duration: 0.6, ease: [0.6, 0, 0.2, 1] },
    },
    hover: {
      scale: 1.03,
      rotateX: 4,
      rotateY: 4,
      boxShadow: '0 0 40px rgba(0, 182, 239, 0.6)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    float: {
      y: [-5, 5, -5],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const titleUnderlineVariants = {
    hidden: { width: '0%' },
    visible: {
      width: '50%',
      transition: { duration: 1, ease: [0.6, 0, 0.2, 1], delay: 0.3 },
    },
  };

  const sectionVariants = {
    initial: { background: 'linear-gradient(to bottom right, rgba(249, 250, 251, 1), rgba(249, 250, 251, 1))' },
    hover: {
      background: 'linear-gradient(to bottom right, rgba(0, 182, 239, 0.05), rgba(255, 105, 180, 0.05))',
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const waveVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const formContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))',
      transition: { duration: 0.6, ease: [0.6, 0, 0.2, 1] },
    },
    hover: {
      y: -5,
      boxShadow: '0 10px 20px rgba(0, 182, 239, 0.3)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="relative w-full py-20 px-6 bg-gray-50 overflow-hidden"
      variants={sectionVariants}
      initial="initial"
      whileHover="hover"
    >
      {/* Animated Wave Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        variants={waveVariants}
        animate="animate"
      >
        <div className="wave" style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100px',
          background: 'linear-gradient(90deg, rgba(0, 182, 239, 0.2), rgba(255, 105, 180, 0.2))',
          animation: 'wave 12s linear infinite',
          willChange: 'transform',
        }} />
        <style jsx>{`
          @keyframes wave {
            0% { transform: translateX(0); }
            100% { transform: translateX(1000px); }
          }
          .wave {
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230099ff' fill-opacity='1' d='M0,256L60,240C120,224,240,192,360,181.3C480,171,600,181,720,197.3C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
            background-size: 1000px 100px;
            background-repeat: repeat-x;
          }
        `}</style>
      </motion.div>

      {/* Subtle Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accentCyan rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accentCyan/5 to-white opacity-60" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accentCyan">
            Get in Touch
          </h2>
          <motion.div
            className="w-32 h-1 mx-auto mt-3 bg-gradient-to-r from-accentCyan to-neonPink rounded-full"
            variants={titleUnderlineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 font-poppins mt-2">
            Have questions? Fill out the form below, and we’ll get back to you soon!
          </p>
        </motion.div>

        {/* Image and Form Layout */}
        <div className="flex flex-col md:flex-row items-center gap-12 rounded-lg p-6">
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            animate="float"
            viewport={{ once: true, amount: 0.8 }}
            className="md:w-1/2 w-full relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Contact Us"
                className="w-full h-auto rounded-lg object-cover"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accentCyan/20 to-neonPink/20 opacity-0"
                whileHover={{ opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="md:w-1/2 w-full relative bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            variants={formContainerVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.form
              className="space-y-6 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              onSubmit={handleSubmit}
            >
              <motion.div variants={inputVariants}>
                <label htmlFor="name" className="block text-sm font-semibold text-primary font-inter">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-transparent"
                  placeholder="Your Name"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <label htmlFor="email" className="block text-sm font-semibold text-primary font-inter">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <label htmlFor="message" className="block text-sm font-semibold text-primary font-inter">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-0 focus:border-transparent"
                  placeholder="Your message here..."
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    text={isSubmitting ? "Sending..." : "Send Message"}
                    size="medium"
                    className="w-full bg-gradient-to-r from-accentCyan to-neonPink text-white"
                    disabled={isSubmitting}
                  />
                  {isSubmitting && (
                    <motion.div
                      className="absolute inset-0 rounded-md pointer-events-none"
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0, 182, 239, 0.3) 0%, transparent 70%)' }}
                    />
                  )}
                </motion.div>
              </motion.div>
              {isSubmitted && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-white/95 rounded-lg"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex items-center space-x-2">
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="text-2xl text-accentCyan"
                    >
                      ✅
                    </motion.span>
                    <p className="text-lg font-semibold font-inter text-accentCyan">
                      Message Sent Successfully!
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.form>
            <motion.div
              className="mt-6 text-center text-sm text-gray-600 font-poppins"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p>📧 Email: support@example.com</p>
              <p>📞 Phone: +1 (123) 456-7890</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}