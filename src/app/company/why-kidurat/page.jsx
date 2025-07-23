"use client";

import Hero from '../../../components/sections/Hero';
import Section from '../../../components/sections/Section';
import Statistics from '../../../components/pages/WhyKidurat/Statistics';
import ComprehensiveSolutions from '../../../components/pages/WhyKidurat/ComprehensiveSolutions';
import SupportNetwork from '../../../components/pages/WhyKidurat/SupportNetwork';
import GlobalImpact from '../../../components/pages/WhyKidurat/GlobalImpact';
import Awards from '../../../components/pages/WhyKidurat/Awards';
import DiscoverSolutions from '../../../components/pages/WhyKidurat/DiscoverSolutions';
import ParticleEffect from '../../../components/utils/ParticleEffect';

export default function WhyKidurat() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Company', href: '/company' },
    { label: 'Why KIDURAT?' },
  ];

  const whyKiduratFloatingIcons = [
    { icon: '🏆', size: '28px', top: '10%', left: '6%', delay: 0 },
    { icon: '🌟', size: '26px', bottom: '15%', right: '8%', delay: 0.8 },
  ];

  const whyKiduratImageElements = [
    {
      className: "rounded-full border-2 border-dashed border-accentCyan",
      size: 80,
      angle: 225,
      initial: { x: -80 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-emeraldGreen",
      style: { background: 'linear-gradient(135deg, rgb(0 201 87), rgb(83 192 183))' },
      size: 50,
      angle: 45,
      initial: { y: -80 },
      animate: { y: 0 },
    },
  ];

  return (
    <div className="w-full relative">
      <ParticleEffect count={3} />
      <Hero
        title="Why Choose KIDURAT?"
        description="Transforming education with innovative, cloud-based solutions for schools worldwide."
        breadcrumbItems={breadcrumbItems}
        gradientClass="from-accentCyan/70 to-neonPink/50"
        circleColors={['bg-accentCyan', 'bg-neonPink']}
        circlePositions={[
          { size: '280px', top: '-50px', left: '-50px' },
          { size: '160px', bottom: '20px', right: '-20px' },
        ]}
        floatingIcons={whyKiduratFloatingIcons}
        imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
        imageElements={whyKiduratImageElements}
        icon="🏆"
        buttonText="Explore Solutions"
        buttonLink="/solutions"
        showTrustBadge={true}
      />
      <Section title="Our Impact" variant="solid" className="bg-grayLight relative">
        <Statistics />
      </Section>
      <Section title="Comprehensive Solutions" variant="solid">
        <ComprehensiveSolutions />
      </Section>
      <Section title="Support Network" glassmorphism={true}>
        <SupportNetwork />
      </Section>
      <Section title="Global Impact" variant="solid" className="bg-grayLight">
        <GlobalImpact />
      </Section>
      <Section title="Awards & Certifications" variant="gradient" className="bg-gradient-to-br from-accentPurple/70 to-emeraldGreen/50">
        <Awards />
      </Section>
      <Section title="Discover Your KIDURAT Solution" variant="solid">
        <DiscoverSolutions />
      </Section>
    </div>
  );
}