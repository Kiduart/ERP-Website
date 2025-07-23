"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1500);
  };

  const linkVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 15,
      background: 'linear-gradient(135deg, #00b6ef, #ff69b4)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const inputVariants = {
    focus: {
      borderColor: 'transparent',
      boxShadow: '0 0 12px rgba(0, 182, 239, 0.6)',
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } },
    tap: { scale: 0.95 },
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

  return (
    <motion.footer
      className="relative bg-primary text-white py-10 px-6 w-full overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-20">
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
      </div>

      {/* Subtle Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Branding Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <motion.div
              className="flex items-center mb-4"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://fav.farm/📚"
                alt="KIDURAT Logo"
                className="w-8 h-8 mr-2"
                loading="lazy"
              />
              <h3 className="text-2xl font-medium text-white font-inter">KIDURAT</h3>
            </motion.div>
            <p className="text-white text-sm text-center md:text-left font-poppins">
              Empowering schools with AI-driven solutions for efficient management and enhanced learning outcomes.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                variants={iconVariants}
                className="text-white rounded-full p-1"
              >
                <FaFacebook className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                variants={iconVariants}
                className="text-white rounded-full p-1"
              >
                <FaTwitter className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                variants={iconVariants}
                className="text-white rounded-full p-1"
              >
                <FaInstagram className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                variants={iconVariants}
                className="text-white rounded-full p-1"
              >
                <FaLinkedin className="w-8 h-8" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-medium mb-4 text-white font-inter">Quick Links</h4>
            <ul className="space-y-2">
              <motion.li whileHover="hover" variants={linkVariants}>
                <Link href="/" className="text-white text-sm transition font-poppins">
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover="hover" variants={linkVariants}>
                <Link href="/company/about-us" className="text-white text-sm transition font-poppins">
                  About
                </Link>
              </motion.li>
              <motion.li whileHover="hover" variants={linkVariants}>
                <Link href="/faq" className="text-white text-sm transition font-poppins">
                  FAQ
                </Link>
              </motion.li>
              <motion.li whileHover="hover" variants={linkVariants}>
                <Link href="/company/contact" className="text-white text-sm transition font-poppins">
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-medium mb-4 text-white font-inter">Contact Us</h4>
            <p className="text-white text-sm mb-2 font-poppins">Email: support@kidurat.com</p>
            <p className="text-white text-sm mb-2 font-poppins">Phone: +1 (123) 456-7890</p>
            <p className="text-white text-sm font-poppins">Address: 123 Education Lane, Tech City</p>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="text-lg font-medium mb-4 text-white font-inter">Stay Updated</h4>
            <p className="text-white text-sm mb-4 font-poppins">Subscribe to our newsletter for the latest updates.</p>
            <motion.form
              className="flex flex-col space-y-3 bg-white/10 p-4 rounded-lg relative"
              onSubmit={handleSubscribe}
            >
              <motion.input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-md text-grayDark bg-white/20 focus:outline-none font-poppins"
                required
                whileFocus="focus"
                variants={inputVariants}
              />
              <motion.div
                className="relative"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accentCyan to-neonPink text-white px-4 py-2 rounded-md font-inter"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
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
              {isSubscribed && (
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
                      Subscribed Successfully!
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-6 border-t border-white/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white text-sm font-poppins">© {new Date().getFullYear()} KIDURAT. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}