"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Breadcrumb from '@/components/common/Breadcrumb';
import Button from '@/components/common/Button';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { theme } from '@/components/utils/theme';
import ParticleEffect from '@/components/utils/ParticleEffect';
import DecorativeCircles from '@/components/utils/DecorativeCircles';
import WaveBackground from '@/components/utils/WaveBackground';

export default function LeadershipHero({ breadcrumbItems }) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop', caption: 'Visionary Leadership' },
    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', caption: 'Driving Innovation' },
    { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2070&auto=format&fit=crop', caption: 'Global Impact' },
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

  const leadershipFloatingIcons = [
    { icon: '👥', size: '35px', top: '6%', left: '4%', delay: 0 },
    { icon: '🏆', size: '30px', top: '10%', right: '6%', delay: 1 },
    { icon: '🌟', size: '32px', bottom: '10%', left: '8%', delay: 2 },
  ];

  return (
    <section className="relative overflow-hidden py-16 px-6">
      <WaveBackground gradient={theme.gradients.purpleToGreen} height="120px" opacity={0.15} particleShape="diamond" waveCount={4} texture="wavy" />
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        style={{ y }}
        poster="https://images.unsplash.com/photo-1573495804664-43a1d8c8e1e8?q=80&w=2070&auto=format&fit=crop"
      >
        <source src="/videos/company-bg.webm" type="video/webm" />
        <source src="/videos/company-bg.mp4" type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-emeraldGreen/50 opacity-80" />
      <ParticleEffect count={30} color={theme.colors.accentCyan} shape="star" />
      <DecorativeCircles
        positions={[
          { size: '450px', top: '-120px', right: '-120px' },
          { size: '200px', bottom: '60px', left: '-60px' },
          { size: '300px', top: '50%', left: '-80px' },
        ]}
        colors={['bg-neonPink', 'bg-skyBlue', 'bg-accentPurple']}
      />
      {leadershipFloatingIcons.map((floatIcon, index) => (
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
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-inter leading-tight">
              Our Leadership Team
            </h1>
            <TypeAnimation
              sequence={[
                'Guiding Innovation',
                2000,
                'Shaping Education',
                2000,
                'Empowering Futures',
                2000,
              ]}
              wrapper="p"
              className="text-xl text-skyBlue font-poppins mb-6"
              repeat={Infinity}
            />
            <p className="text-lg text-white font-poppins mb-8 opacity-90">
              Meet the visionaries behind KIDURAT, driving global educational transformation with innovation and passion.
            </p>
            <Button
              text="Explore Our Leaders"
              href="#leadership-intro"
              size="large"
              variant="primary"
              className="hover:shadow-xl hover:bg-neonPink transition-all duration-300"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 relative h-[450px] rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
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
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-center">
                  <p className="text-sm text-white font-poppins">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}