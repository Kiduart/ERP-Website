"use client";

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Button from '../common/Button';
import Breadcrumb from '../common/Breadcrumb';
import DecorativeCircles from '../utils/DecorativeCircles';
import WaveBackground from '../utils/WaveBackground';
import { theme } from '../utils/theme';

const HeroImageFrame = dynamic(() => import('./HeroImageFrame'), { ssr: false });

export default function Hero({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
  breadcrumbItems,
  showImage = true,
  showTrustBadge = true,
  gradientClass = theme.gradients.purpleToGreen,
  circleColors = ['bg-accentYellow', 'bg-accentCyan', 'bg-accentPurple'],
  circlePositions = [
    { size: '300px', top: '-50px', left: '50%', transform: 'translateX(-50%)' },
    { size: '250px', bottom: '-50px', right: '-50px' },
  ],
  floatingIcons = [
    { icon: '📚', size: '30px', top: '10%', left: '5%', delay: 0 },
    { icon: '✏️', size: '25px', top: '15%', right: '10%', delay: 1 },
    { icon: '🎓', size: '28px', bottom: '10%', left: '15%', delay: 2 },
  ],
  icon = null,
  imageElements = [],
}) {
  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0 },
  };

  return (
    <section
      className={`py-12 px-6 sm:py-14 md:py-16 w-full relative overflow-hidden bg-gradient-to-br ${gradientClass}`}
    >
      <WaveBackground gradient={theme.gradients.cyanToPink} height="100px" opacity={0.1} />
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accentCyan rounded-full opacity-50"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -10, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: Math.random() * 4 + 4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {floatingIcons.map((floatIcon, index) => (
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

      <DecorativeCircles positions={circlePositions} colors={circleColors} />
      <div className="max-w-7xl mx-auto relative z-10">
        {breadcrumbItems && <Breadcrumb items={breadcrumbItems} inHero={true} />}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 min-h-[60vh]">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg font-inter"
            >
              {title.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
              {icon && <span className="ml-3">{icon}</span>}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-white mb-6 opacity-90 font-poppins"
            >
              {description}
            </motion.p>
            {buttonText && buttonLink && (
              <Button
                text={buttonText}
                href={buttonLink}
                size="large"
                variant="primary"
                className="hover:shadow-lg"
              />
            )}
            {showTrustBadge && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4 flex justify-center md:justify-start items-center space-x-2"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/verified-badge.png"
                  alt="Trusted Badge"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  loading="lazy"
                />
                <p className="text-sm sm:text-base text-white font-poppins">Trusted by 500+ Schools</p>
              </motion.div>
            )}
          </div>
          {showImage && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 flex justify-center"
            >
              <HeroImageFrame
                imageSrc={imageSrc || "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"}
                altText="School Management"
                elements={imageElements}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}