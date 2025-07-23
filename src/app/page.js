import AIRelatedData from "@/components/pages/HomePage/AIRelatedData";
import AwardsList from "@/components/pages/HomePage/Awards";
import Contact from "@/components/pages/HomePage/Contact";
import Features from "@/components/pages/HomePage/Features";
import Hero from "@/components/sections/Hero";
import Priorities from "@/components/pages/HomePage/Priorities";
import Section from "@/components/sections/Section";
import StatsDisplay from "@/components/pages/HomePage/Stats";
import Testimonial from "@/components/pages/HomePage/Testimonial";
import { theme } from "../components/utils/theme";

export default function Home() {
  const homeFloatingIcons = [
    { icon: '📖', size: '35px', top: '8%', left: '3%', delay: 0 },
    { icon: '🖥️', size: '30px', top: '12%', right: '5%', delay: 1 },
    { icon: '🏫', size: '32px', bottom: '15%', left: '10%', delay: 2 },
  ];

  const homeImageElements = [
    {
      className: "rounded-full border-2 border-dashed border-emeraldGreen",
      size: 120,
      angle: 225,
      initial: { x: -120 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-primary",
      style: { background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.emeraldGreen})` },
      size: 80,
      angle: 135,
      initial: { x: 120 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-neonPink",
      style: { background: `linear-gradient(135deg, ${theme.colors.neonPink}, ${theme.colors.accentCyan})` },
      size: 50,
      angle: 45,
      initial: { y: -120 },
      animate: { y: 0 },
    },
    {
      className: "",
      imgSrc: "https://img.icons8.com/color/96/000000/school-building.png",
      imgAlt: "School building icon",
      size: 90,
      angle: 315,
      initial: { y: 120 },
      animate: { y: 0 },
    },
  ];

  return (
    <div className="w-full">
      <Hero
        title="Transform Your School with KIDURAT"
        description="A comprehensive AI-powered ERP system designed to streamline school management and enhance student outcomes."
        buttonText="Request a Demo"
        buttonLink="/request-demo"
        gradientClass={theme.gradients.purpleToGreen}
        circleColors={['bg-neonOrange', 'bg-emeraldGreen', 'bg-skyBlue']}
        circlePositions={[{ size: '300px', bottom: '-70px', right: '-70px' }]}
        floatingIcons={homeFloatingIcons}
        imageSrc="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
        imageElements={homeImageElements}
        icon="📚"
      />
      <Section title="Our Features" variant="solid">
        <Features />
      </Section>
      <Section title="Our Priorities" variant="gradient" glassmorphism={true}>
        <Priorities />
      </Section>
      <StatsDisplay />
      <Section title="What Our Users Say" variant="solid" glassmorphism={true}>
        <Testimonial />
      </Section>
      <AIRelatedData />
      <Section title="Awards & Recognition" variant="gradient" glassmorphism={true}>
        <AwardsList />
      </Section>
      <Contact />
    </div>
  );
}