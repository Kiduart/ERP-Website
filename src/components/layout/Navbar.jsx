"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaRocket } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setDropdownOpen(null);
  };

  const handleDropdownToggle = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Resources',
      href: '/resources',
      subItems: [
        {
          section: 'KIDURAT',
          items: [
            { name: 'Features', href: '/features' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'FAQ', href: '/faq' },
            { name: 'Priority', href: '/priority' },
          ],
        },
      ],
    },
    {
      name: 'Company',
      href: '/company',
      subItems: [
        {
          section: 'ABOUT KIDURAT',
          items: [
            { name: 'Why KIDURAT?', href: '/company/why-kidurat' },
            { name: 'About Us', href: '/company/about-us' },
            { name: 'In The News', href: '/company/in-the-news' },
            { name: 'Contact Us', href: '/company/contact' },
            { name: 'Our Leadership', href: '/company/leadership-team' },
          ],
        },
        {
          section: 'PARTNERSHIPS',
          items: [
            { name: 'Our Partners', href: '/company/our-partners' },
          ],
        },
        {
          section: 'CAREERS',
          items: [
            { name: 'Careers & Culture', href: '/company/careers-culture' },
          ],
        },
      ],
    },
    { name: 'Request a Demo', href: '/request-demo' },
  ];

  const linkVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const subLinkVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const dropdownVariants = {
    hidden: { height: 0, clipPath: 'inset(0 0 100% 0)', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    visible: { height: 'auto', clipPath: 'inset(0 0 0 0)', opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { height: 0, clipPath: 'inset(0 0 100% 0)', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const mobileMenuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const underlineVariants = {
    hidden: { width: '0%' },
    hover: {
      width: '100%',
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <motion.nav
      className="sticky top-0 z-[60] w-full bg-white shadow-sm hover:shadow-md transition-shadow backdrop-blur-md"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <style jsx global>{`
        .gradient-underline {
          position: relative;
        }
        .gradient-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #00b6ef, #ff69b4);
          transition: width 0.4s ease 0.1s;
        }
        .gradient-underline:hover::after {
          width: 100%;
        }
        .subheading-underline {
          position: relative;
        }
        .subheading-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(to right, #00b6ef, #ff69b4);
          transition: width 0.3s ease;
        }
        .subheading-underline:hover::after {
          width: 100%;
        }
        .dropdown-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, #00b6ef, #ff69b4);
          z-index: -1;
        }
      `}</style>


      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20 relative">
          <div className="flex-shrink-0">
            <Link href="/">
              <motion.img
                src="https://fav.farm/📚"
                alt="KIDURAT Logo"
                className="h-12 w-auto"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            </Link>
          </div>
          <div className="hidden md:flex gap-12 items-center relative z-10">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.subItems && setDropdownOpen(item.name)}
                onMouseLeave={() => item.subItems && setDropdownOpen(null)}
              >
                {item.subItems ? (
                  <motion.div
                    className="flex items-center text-grayDark font-semibold text-lg font-inter gradient-underline"
                    whileHover="hover"
                    variants={linkVariants}
                  >
                    <span>{item.name}</span>
                    <FaChevronDown className="ml-2 h-4 w-4" />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accentCyan to-neonPink"
                      variants={underlineVariants}
                      initial="hidden"
                      whileHover="hover"
                    />
                  </motion.div>
                ) : (
                  <motion.div whileHover="hover" variants={linkVariants} className="relative">
                    <Link
                      href={item.href}
                      className={`${
                        item.name === 'Request a Demo'
                          ? 'bg-gradient-to-r from-accentCyan to-neonPink text-white px-6 py-2 rounded-lg flex items-center gap-2'
                          : 'text-grayDark font-semibold text-lg font-inter gradient-underline'
                      } transition-all duration-300`}
                    >
                      {item.name}
                      {item.name === 'Request a Demo' && <FaRocket className="h-4 w-4" />}
                      {item.name !== 'Request a Demo' && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accentCyan to-neonPink"
                          variants={underlineVariants}
                          initial="hidden"
                          whileHover="hover"
                        />
                      )}
                    </Link>
                    {item.name === 'Request a Demo' && (
                      <motion.div
                        className="absolute inset-0 rounded-lg pointer-events-none"
                        whileHover={{
                          background: 'radial-gradient(circle at 50% 50%, rgba(0, 182, 239, 0.3) 0%, transparent 70%)',
                          scale: [1, 1.5],
                          opacity: [0, 0.8, 0],
                          transition: { duration: 0.6, repeat: 2, ease: 'easeOut' },
                        }}
                      />
                    )}
                  </motion.div>
                )}
                <AnimatePresence>
                  {item.subItems && dropdownOpen === item.name && (
                    <motion.div
                      className={`absolute top-[55px] left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md shadow-lg dropdown-container overflow-hidden ${
                        item.name === 'Community & Support' || item.name === 'Company'
                          ? 'w-[50vw] max-w-3xl min-w-[900px]'
                          : 'min-w-[200px] max-w-[300px]'
                      }`}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      onMouseEnter={() => setDropdownOpen(item.name)}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      <div className="px-6 py-6">
                        {item.name === 'Community & Support' || item.name === 'Company' || item.name === 'Resources' ? (
                          <div className="grid grid-cols-3 gap-10">
                            {item.subItems.map((section, index) => (
                              <div
                                key={index}
                                className={`space-y-4 min-w-0 ${index < item.subItems.length - 1 ? 'border-r border-gray-200 pr-6' : ''}`}
                              >
                                <div className="relative text-2xl font-extrabold text-primary font-inter border-l-4 border-primary pl-3">
                                  {section.section}
                                  <motion.div
                                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accentCyan to-neonPink"
                                    variants={underlineVariants}
                                    initial="hidden"
                                    whileHover="hover"
                                  />
                                  <motion.div 
                                  className="absolute button text-2xl font-extract text primary"
                                  >
                                    
                                  </motion.div>
                                </div>
                                {section.items.map((subItem) => (
                                  <motion.div key={subItem.name} whileHover="hover" variants={subLinkVariants}>
                                    <Link
                                      href={subItem.href}
                                      className="block text-grayDark font-semibold text-base font-inter rounded-md px-3 py-2 subheading-underline"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-col gap-2">
                            {item.subItems.map((subItem, index) => (
                              <motion.div key={index} whileHover="hover" variants={subLinkVariants}>
                                <Link
                                  href={subItem.href}
                                  className="block text-grayDark font-semibold text-base font-inter rounded-md px-3 py-2 subheading-underline"
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                      {/* Particle Burst on Hover */}
                      <motion.div className="absolute inset-0 pointer-events-none">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-accentCyan rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            whileHover={{
                              x: (Math.random() - 0.5) * 50,
                              y: (Math.random() - 0.5) * 50,
                              opacity: [1, 0],
                              transition: { duration: 0.5, ease: 'easeOut' },
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="md:hidden relative z-10">
            <motion.button
              onClick={toggleMenu}
              className="text-grayDark focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-md border-t border-gray-200"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <div>
                      <motion.div
                        className="flex items-center justify-between text-grayDark font-semibold text-lg font-inter"
                        onClick={() => handleDropdownToggle(item.name)}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span>{item.name}</span>
                        <FaChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen === item.name ? 'rotate-180' : ''}`} />
                      </motion.div>
                      {dropdownOpen === item.name && (
                        <div className="pl-4 mt-2 space-y-4">
                          {item.subItems.map((section, index) => (
                            <div key={index} className="space-y-3">
                              {section.section ? (
                                <>
                                  <div className="relative text-2xl font-extrabold text-primary font-inter border-l-4 border-primary pl-3">
                                    {section.section}
                                    <motion.div
                                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accentCyan to-neonPink"
                                      variants={underlineVariants}
                                      initial="hidden"
                                      whileHover="hover"
                                    />
                                  </div>
                                  {section.items.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block text-grayDark font-semibold text-base font-inter"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </>
                              ) : (
                                <Link
                                  key={section.name}
                                  href={section.href}
                                  className="block text-grayDark font-semibold text-base font-inter"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {section.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Link
                        href={item.href}
                        className={`block ${
                          item.name === 'Request a Demo'
                            ? 'bg-gradient-to-r from-accentCyan to-neonPink text-white px-6 py-2 rounded-lg flex items-center gap-2 justify-center'
                            : 'text-grayDark font-semibold text-lg font-inter'
                        } transition-all duration-300 text-center`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                        {item.name === 'Request a Demo' && <FaRocket className="h-4 w-4" />}
                      </Link>
                      {item.name === 'Request a Demo' && (
                        <motion.div
                          className="absolute inset-0 rounded-lg pointer-events-none"
                          whileHover={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(0, 182, 239, 0.3) 0%, transparent 70%)',
                            scale: [1, 1.5],
                            opacity: [0, 0.8, 0],
                            transition: { duration: 0.6, repeat: 2, ease: 'easeOut' },
                          }}
                        />
                      )}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}