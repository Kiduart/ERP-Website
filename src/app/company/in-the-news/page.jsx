"use client";

import CurvedDivider from "@/components/pages/InTheNews/CurvedDivider";
import FeaturedNewsSection from "@/components/pages/InTheNews/FeaturedNewsSection";
import NewsArchiveSection from "@/components/pages/InTheNews/NewsArchiveSection";
import Hero from "@/components/sections/Hero";

const newsItems = [
  {
    id: "1",
    title: "KIDURAT Wins EdTech Award 2024",
    date: "Jan 15, 2024",
    year: 2024,
    month: "January",
    country: "USA",
    description: "KIDURAT recognized for innovation in educational technology.",
    content: "KIDURAT has been awarded the prestigious EdTech Award 2024 for its groundbreaking contributions to educational technology. The award ceremony, held in New York, celebrated KIDURAT’s AI-driven solutions that have transformed school management systems across the globe. CEO John Doe emphasized the company’s commitment to empowering educators with tools that enhance learning outcomes.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    tags: ["EdTech", "Awards", "AI"],
  },
  {
    id: "5",
    title: "KIDURAT Named Top Innovator of 2024",
    date: "Jan 20, 2024",
    year: 2024,
    month: "January",
    country: "USA",
    description: "KIDURAT honored as a top innovator in EdTech for 2024.",
    content: "KIDURAT has been named a Top Innovator of 2024 by EdTech Review for its cutting-edge AI solutions. The recognition highlights KIDURAT’s impact on modernizing education systems worldwide. The award was presented at a gala event in San Francisco, where KIDURAT’s team demonstrated their platform’s capabilities to an audience of educators and tech leaders.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    tags: ["EdTech", "Innovation", "AI"],
  },
  {
    id: "2",
    title: "Featured in TechTimes",
    date: "Mar 22, 2024",
    year: 2024,
    month: "March",
    country: "UK",
    description: "KIDURAT highlighted for its AI-driven school management solutions.",
    content: "TechTimes recently featured KIDURAT in its annual EdTech spotlight, praising the company’s innovative use of AI in school management. The article dives deep into how KIDURAT’s platform streamlines administrative tasks, improves communication between teachers and parents, and enhances student performance tracking.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    featured: false,
    tags: ["EdTech", "AI", "School Management"],
  },
  {
    id: "3",
    title: "KIDURAT Partners with Local Schools",
    date: "Jun 10, 2023",
    year: 2023,
    month: "June",
    country: "India",
    description: "Expanding our reach to support more educational institutions.",
    content: "KIDURAT announced a partnership with over 50 local schools in India to implement its school management system. This initiative aims to digitize administrative processes, making them more efficient and accessible for schools in rural areas. The partnership has already shown promising results, with a 30% increase in administrative efficiency.",
    image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae1e5b?q=80&w=2070&auto=format&fit=crop",
    featured: false,
    tags: ["Education", "Partnership", "India"],
  },
  {
    id: "4",
    title: "AI Features Highlighted at Education Summit",
    date: "Sep 5, 2023",
    year: 2023,
    month: "September",
    country: "Canada",
    description: "KIDURAT's AI capabilities showcased at the 2023 Summit.",
    content: "At the 2023 Education Summit in Toronto, KIDURAT’s AI features took center stage. The platform’s ability to predict student performance and automate scheduling was a major highlight, drawing attention from educators worldwide. The summit provided a platform for KIDURAT to connect with potential partners and expand its global reach.",
    image: "https://images.unsplash.com/photo-1554224154-26053ffc0fe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    featured: false,
    tags: ["EdTech", "AI", "Summit"],
  },
];

export default function InTheNews() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "In The News" },
  ];

  const newsFloatingIcons = [
    { icon: "📰", size: "35px", top: "6%", left: "4%", delay: 0 },
    { icon: "📢", size: "30px", top: "14%", right: "6%", delay: 1 },
    { icon: "🎤", size: "32px", bottom: "10%", left: "8%", delay: 2 },
  ];

  const newsImageElements = [
    {
      className: "rounded-full border-2 border-dashed border-secondary",
      size: 120,
      angle: 225,
      initial: { x: -120 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-neonOrange",
      style: { background: "linear-gradient(135deg, rgb(255 165 0), rgb(255 105 180))" },
      size: 80,
      angle: 135,
      initial: { x: 120 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-accentPurple",
      style: { background: "linear-gradient(135deg, rgb(111 66 193), rgb(249 206 51))" },
      size: 50,
      angle: 45,
      initial: { y: -120 },
      animate: { y: 0 },
    },
    {
      className: "",
      imgSrc: "https://img.icons8.com/color/96/000000/news.png",
      imgAlt: "News icon",
      size: 90,
      angle: 315,
      initial: { y: 120 },
      animate: { y: 0 },
    },
  ];

  const featuredNews = newsItems.filter((item) => item.featured);
  const fallbackImage = "https://via.placeholder.com/1200x600?text=News+Image+Not+Found";

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50">
      <Hero
        title="In The News"
        description="Discover the latest updates and media coverage about KIDURAT."
        breadcrumbItems={breadcrumbItems}
        gradientClass="from-accentCyan/80 via-neonPink/60 to-primary/80"
        circleColors={["bg-accentCyan", "bg-neonPink", "bg-primary"]}
        circlePositions={[
          { size: "350px", top: "-60px", left: "-70px" },
          { size: "250px", bottom: "10px", right: "-30px" },
        ]}
        floatingIcons={newsFloatingIcons}
        imageElements={newsImageElements}
        icon="📰"
        showImage={true}
        showTrustBadge={false}
      />
      <CurvedDivider
        fillColor="text-gray-50"
        path="M0,0 C280,120 720,0 1440,100 L1440,0 L0,0 Z"
        className="text-gray-50"
      />
      {featuredNews.length > 0 && (
        <FeaturedNewsSection featuredNews={featuredNews} fallbackImage={fallbackImage} />
      )}
      <CurvedDivider
        fillColor="text-white"
        path="M0,100 C280,0 720,120 1440,0 L1440,100 L0,100 Z"
        className="text-white"
      />
      <NewsArchiveSection newsItems={newsItems} />
    </div>
  );
}