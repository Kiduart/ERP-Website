"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { theme } from '../utils/theme';

export default function HeroImageFrame({ imageSrc, altText, elements = [] }) {
  const hoverVariants = {
    hover: { scale: 1.05, boxShadow: `0 15px 30px ${theme.colors.accentCyan}33`, transition: { duration: 0.3 } },
  };

  const mainCircleSize = 350;
  const radius = mainCircleSize / 2;

  const defaultElements = [
    {
      className: "rounded-full border-2 border-primary",
      style: { background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accentCyan})` },
      size: 40,
      angle: 45,
      initial: { y: -100 },
      animate: { y: 0 },
    },
    {
      className: "rounded-full border-2 border-dashed border-accentCyan",
      size: 100,
      angle: 225,
      initial: { x: -100 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-primary",
      style: { background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accentCyan})` },
      size: 70,
      angle: 135,
      initial: { x: 100 },
      animate: { x: 0 },
    },
    {
      className: "",
      imgSrc: "https://www.powerschool.com/wp-content/uploads/2024/06/WS_PSGEN-1291753_Website-Redesign-PLC_education-item-concept-2B.webp",
      imgAlt: "Stack of books with an apple",
      size: 80,
      angle: 315,
      initial: { y: 100 },
      animate: { y: 0 },
    },
  ];

  const finalElements = elements.length > 0 ? elements : defaultElements;

  return (
    <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] z-10">
      <motion.div
        className="absolute rounded-full overflow-hidden border-4 border-primary"
        style={{
          width: `${mainCircleSize}px`,
          height: `${mainCircleSize}px`,
          top: `calc(50% - ${radius}px)`,
          left: `calc(50% - ${radius}px)`,
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
          zIndex: 1,
          willChange: 'transform, box-shadow',
        }}
        variants={hoverVariants}
        whileHover="hover"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={imageSrc}
          alt={altText}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="(max-width: 768px) 100vw, 350px"
          loading="lazy"
        />
      </motion.div>
      {finalElements.map((element, index) => {
        const angleRad = (element.angle * Math.PI) / 180;
        const offset = radius + element.size / 4;
        const x = offset * Math.cos(angleRad);
        const y = offset * Math.sin(angleRad);

        return (
          <motion.div
            key={index}
            className={`absolute ${element.className}`}
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              top: `calc(50% + ${y}px - ${element.size / 2}px)`,
              left: `calc(50% + ${x}px - ${element.size / 2}px)`,
              ...element.style,
              zIndex: 2,
              willChange: 'transform',
            }}
            initial={element.initial}
            animate={{ ...element.animate, rotate: [0, 360] }}
            transition={{ rotate: { duration: 12, repeat: Infinity, ease: 'linear' }, duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.1, boxShadow: `0 0 15px ${theme.colors.accentCyan}80`, transition: { duration: 0.3 } }}
          >
            {element.imgSrc && (
              <Image
                src={element.imgSrc}
                alt={element.imgAlt}
                fill
                style={{ objectFit: 'contain' }}
                sizes={`${element.size}px`}
                loading="lazy"
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}