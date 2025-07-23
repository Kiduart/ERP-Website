"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Button from '../../common/Button';
import WaveBackground from '../../utils/WaveBackground';
import ParticleEffect from '../../utils/ParticleEffect';
import { theme } from '../../utils/theme';

const VideoPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function MainCompanySection() {
  const sectionVariants = {
    initial: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.6, 0, 0.2, 1] } },
    hover: { boxShadow: `0 0 30px ${theme.colors.accentCyan}80`, transition: { duration: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.section
      className="relative w-full py-16 px-6 bg-gray-50 overflow-hidden"
      variants={sectionVariants}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <WaveBackground gradient={theme.gradients.purpleToGreen} height="100px" opacity={0.1} />
      <ParticleEffect count={5} color={theme.colors.accentCyan} />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2 relative"
            variants={videoVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <VideoPlayer
                url="https://www.youtube.com/watch?v=PJpnQ4B9HLE"
                width="100%"
                height="300px"
                controls
                muted
                loop
                config={{ youtube: { playerVars: { autoplay: 1 } } }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accentCyan/20 to-neonPink/20 opacity-0"
                whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
              />
            </div>
          </motion.div>
          <motion.div className="lg:w-1/2 text-center lg:text-left" variants={textVariants}>
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accentCyan mb-4">
              Empowering Education Worldwide
            </h2>
            <p className="text-lg text-gray-600 font-poppins mb-6">
              KIDURAT is a global leader in education technology, providing AI-powered solutions to streamline school management and enhance student outcomes. Since 2018, we’ve empowered over 10 million students across 50+ countries with innovative tools and a commitment to equity.
            </p>
            <Button
              text="Learn More"
              href="/company/about-us#mission"
              size="large"
              variant="primary"
              className="hover:shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}