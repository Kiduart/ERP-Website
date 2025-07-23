import { useState } from "react";
import Link from "next/link";
import Section from "@/components/sections/Section";
import MotionWrapper from "@/components/MotionWrapper";
import FallbackImage from "@/components/FallbackImage";
import { theme } from "@/components/utils/theme";
import DecorativeCircles from "@/components/utils/DecorativeCircles";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function FeaturedNewsSection({ featuredNews, fallbackImage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = featuredNews.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const decorativePositions = [
    { size: "300px", top: "-50px", left: "-100px" },
    { size: "200px", bottom: "0", right: "-50px" },
  ];

  // Use fallback if theme is undefined
  const typography = theme?.typography || defaultTypography;

  return (
    <Section title="Featured News" className="bg-gradient-to-br from-white to-accentCyan/10 relative">
      <DecorativeCircles positions={decorativePositions} colors={["bg-primary", "bg-neonPink"]} />
      <div className="relative max-w-5xl mx-auto">
        <div className="overflow-hidden">
          <MotionWrapper
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href={`/company/in-the-news/${featuredNews[currentIndex].id}`}>
              <div className="relative group">
                <div className="relative">
                  <FallbackImage
                    src={featuredNews[currentIndex].image}
                    alt={featuredNews[currentIndex].title}
                    className="w-full h-72 object-cover rounded-t-lg"
                    fallbackSrc={fallbackImage}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg"></div>
                  <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs" style={{ fontFamily: typography.body }}>
                    {featuredNews[currentIndex].country}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent" style={{ fontFamily: typography.heading }}>
                      {featuredNews[currentIndex].title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm mt-1" style={{ fontFamily: typography.body }}>
                      <span>{featuredNews[currentIndex].date}</span>
                      <span>·</span>
                      <span>{featuredNews[currentIndex].country}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-b-lg shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex space-x-2 mb-2">
                    {featuredNews[currentIndex].tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-grayDark px-2 py-1 rounded-full text-xs" style={{ fontFamily: typography.body }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray line-clamp-3 mb-4" style={{ fontFamily: typography.body }}>{featuredNews[currentIndex].content}</p>
                  <button className="inline-flex items-center text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-colors duration-300" style={{ fontFamily: typography.heading }}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Read More
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md" style={{ fontFamily: typography.heading }}>
                  Featured
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-neonPink/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-300"></div>
              </div>
            </Link>
          </MotionWrapper>
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/80 transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/80 transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="flex justify-center mt-4 space-x-2">
          {featuredNews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"} transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}