import CompanyHero from '@/components/pages/AboutUs/CompanyHero';
import Section from '@/components/sections/Section';
import CompanyStory from '@/components/pages/AboutUs/CompanyStory';
import Mission from '@/components/pages/AboutUs/Mission';
import OurJourney from '@/components/pages/AboutUs/OurJourney';
import Awards from '@/components/pages/AboutUs/Awards';
import SuccessStories from '@/components/pages/AboutUs/SuccessStories';
import LeadershipTeam from '@/components/pages/AboutUs/LeadershipTeam';
import GetInTouch from '@/components/pages/AboutUs/GetInTouch';

export default function AboutUs() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Company', href: '/company' },
    { label: 'About Us' },
  ];

  return (
    <div className="w-full relative">
      <CompanyHero breadcrumbItems={breadcrumbItems} />
      <Section title="The KIDURAT Company Story" variant="gradient" glassmorphism={true} titleAlign="right">
        <CompanyStory />
      </Section>
      <Section title="Our Mission & Vision" variant="solid" glassmorphism={true}>
        <Mission />
      </Section>
        <OurJourney />
      <Section title="Awards and Certifications" variant="solid" glassmorphism={true}>
        <Awards />
      </Section>
      <Section title="Success Stories" variant="gradient">
        <SuccessStories />
      </Section>
      <Section title="Meet Our Leadership Team" variant="solid" titleAlign="right">
        <LeadershipTeam />
      </Section>
      <Section title="Get in Touch" variant="solid" titleAlign="left">
        <GetInTouch />
      </Section>
    </div>
  );
}