"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Breadcrumb from '@/components/common/Breadcrumb';
import Button from '@/components/common/Button';
import WaveBackground from '@/components/utils/WaveBackground';
import DecorativeCircles from '@/components/utils/DecorativeCircles';
import { theme } from '../../utils/theme';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function CompanyHero({ breadcrumbItems }) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop', caption: 'Empowering Education' },
    { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop', caption: 'Innovative Solutions' },
    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', caption: 'Global Impact' },
  ];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  };

  const aboutUsFloatingIcons = [
    { icon: '👥', size: '35px', top: '6%', left: '4%', delay: 0 },
    { icon: '🤝', size: '30px', top: '10%', right: '6%', delay: 1 },
    { icon: '🌍', size: '32px', bottom: '10%', left: '8%', delay: 2 },
  ];

  return (
    <section className="relative overflow-hidden py-16 px-6">
      <WaveBackground gradient={theme.gradients.cyanToPink} height="100px" opacity={0.1} />
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        style={{ y }}
        poster="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
      >
        <source src="/videos/company-bg.webm" type="video/webm" />
        <source src="/videos/company-bg.mp4" type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-accentCyan/60" />
      <DecorativeCircles
        positions={[
          { size: '400px', top: '-100px', right: '-100px' },
          { size: '150px', bottom: '50px', left: '-50px' },
        ]}
        colors={['bg-neonOrange', 'bg-secondary', 'bg-accentYellow']}
      />
      {aboutUsFloatingIcons.map((floatIcon, index) => (
        <motion.div
          key={index}
          className="absolute opacity-50"
          style={{
            top: floatIcon.top,
            left: floatIcon.left,
            right: floatIcon.right,
            bottom: floatIcon.bottom,
            fontSize: floatIcon.size,
            zIndex: 20,
            pointerEvents: 'auto',
            willChange: 'transform',
          }}
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: floatIcon.delay } }}
          whileHover={{ scale: 1.2, opacity: 1, boxShadow: `0 0 15px ${theme.colors.accentCyan}`, transition: { duration: 0.3 } }}
        >
          {floatIcon.icon}
        </motion.div>
      ))}
      <div className="relative max-w-7xl mx-auto z-10">
        {breadcrumbItems && <Breadcrumb items={breadcrumbItems} inHero={true} />}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-inter">
              Transforming Education
            </h1>
            <TypeAnimation
              sequence={[
                'Empowering Schools Worldwide',
                2000,
                'Innovating with AI',
                2000,
                'Building a Brighter Future',
                2000,
              ]}
              wrapper="p"
              className="text-xl text-accentYellow font-poppins mb-6"
              repeat={Infinity}
            />
            <p className="text-lg text-white font-poppins mb-6 opacity-90">
              Since 2018, KIDURAT has been revolutionizing education, impacting over 10 million students across 50+ countries with AI-driven solutions.
            </p>
            <Button
              text="Discover Our Story"
              href="#company-story"
              size="large"
              variant="primary"
              className="hover:shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentImage ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
                  <p className="text-sm font-poppins">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}