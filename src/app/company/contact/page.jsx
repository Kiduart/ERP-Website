"use client";

import dynamic from "next/dynamic";
import Hero from "../../../components/sections/Hero";
import WaveBackground from "../../../components/utils/WaveBackground";
import TalkToSales from "../../../components/pages/Contact/TalkToSales";
import ForKiduratCustomers from "../../../components/pages/Contact/ForKiduratCustomers";
import PartnersMediaEmployment from "../../../components/pages/Contact/PartnersMediaEmployment";
import KiduratLocations from "../../../components/pages/Contact/KiduratLocations";
import SendMessage from "../../../components/pages/Contact/SendMessage";
import SocialMediaLinks from "../../../components/pages/Contact/SocialMediaLinks";
import FAQSnippet from "../../../components/pages/Contact/FAQSnippet";
import CallToAction from "../../../components/pages/Contact/CallToAction";
import { theme } from "../../../components/utils/theme";

// Dynamically import ParticleEffect with SSR disabled
const ParticleEffect = dynamic(() => import("../../../components/utils/ParticleEffect"), {
  ssr: false,
});

export default function Contact() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "Contact Us" },
  ];

  const contactFloatingIcons = [
    { icon: "📞", size: "35px", top: "6%", left: "4%", delay: 0 },
    { icon: "✉️", size: "30px", top: "14%", right: "6%", delay: 1 },
    { icon: "📍", size: "32px", bottom: "10%", left: "8%", delay: 2 },
  ];

  const contactImageElements = [
    {
      className: "rounded-full border-2 border-dashed border-accentCyan",
      size: 120,
      angle: 225,
      initial: { x: -120 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-neonPink",
      style: { background: "linear-gradient(135deg, rgb(255 105 180), rgb(111 66 193))" },
      size: 80,
      angle: 135,
      initial: { x: 120 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-primary",
      style: { background: "linear-gradient(135deg, rgb(0 33 71), rgb(135 206 235))" },
      size: 50,
      angle: 45,
      initial: { y: -120 },
      animate: { y: 0 },
    },
    {
      className: "",
      imgSrc: "https://img.icons8.com/color/96/000000/phone.png",
      imgAlt: "Phone icon",
      size: 90,
      angle: 315,
      initial: { y: 120 },
      animate: { y: 0 },
    },
  ];

  return (
    <div className="w-full relative">
      <div className="relative">
        <WaveBackground gradient={theme.gradients.cyanToPink} height="80px" opacity={0.1} particleShape="circle" waveCount={3} texture="smooth" />
        <ParticleEffect count={30} color={theme.colors.neonPink} shape="hexagon" speed={0.3} motionPath="spiral" />
        <Hero
          title="Contact Us"
          description="Connect with KIDURAT for support, inquiries, or partnerships."
          breadcrumbItems={breadcrumbItems}
          gradientClass="from-accentCyan/80 via-neonPink/60 to-emeraldGreen/80"
          circleColors={["bg-neonPink", "bg-accentCyan", "bg-emeraldGreen"]}
          circlePositions={[
            { size: "250px", top: "10px", left: "-40px" },
            { size: "180px", bottom: "-20px", right: "40px" },
          ]}
          floatingIcons={contactFloatingIcons.map((icon) => ({
            ...icon,
            className: "animate-float-with-trail",
          }))}
          imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
          imageElements={contactImageElements}
          icon="📞"
          showImage={true}
          showTrustBadge={true}
          buttonText="Send a Message"
          buttonLink="#contact-form"
          titleClassName="bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent animate-glow"
        />
      </div>
      <TalkToSales />
      <ForKiduratCustomers />
      <PartnersMediaEmployment />
      <KiduratLocations />
      <SendMessage />
      <SocialMediaLinks />
      <FAQSnippet />
      <CallToAction />
    </div>
  );
}