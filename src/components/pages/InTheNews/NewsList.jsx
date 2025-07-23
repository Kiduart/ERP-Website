"use client";

import Link from "next/link";
import MotionWrapper from "../../MotionWrapper";
import FallbackImage from "../../FallbackImage";
import { theme } from "@/components/utils/theme";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function NewsList({ newsItems }) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const fallbackImage = "https://via.placeholder.com/600x400?text=News+Image+Not+Found";

  // Use fallback if theme is undefined
  const typography = theme?.typography || defaultTypography;

  return (
    <MotionWrapper
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {newsItems.map((news, index) => (
        <MotionWrapper key={news.id} variants={cardVariants} whileHover="hover">
          <Link href={`/company/in-the-news/${news.id}`}>
            <div className="relative group flex flex-col h-[480px] bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-primary/50">
              <div className="relative">
                <FallbackImage
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                  fallbackSrc={fallbackImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs" style={{ fontFamily: typography.body }}>
                  {news.country}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:bg-gradient-to-r group-hover:from-accentCyan group-hover:to-neonPink group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2" style={{ fontFamily: typography.heading }}>
                  {news.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-grayDark mb-2" style={{ fontFamily: typography.body }}>
                  <span>{news.date}</span>
                  <span>·</span>
                  <span>{news.country}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {news.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-grayDark px-2 py-1 rounded-full text-xs" style={{ fontFamily: typography.body }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray line-clamp-2 mb-4 flex-grow" style={{ fontFamily: typography.body }}>{news.content}</p>
                <button className="inline-flex items-center text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-colors duration-300 self-start" style={{ fontFamily: typography.heading }}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Read More
                </button>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-neonPink/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-300"></div>
            </div>
          </Link>
        </MotionWrapper>
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accentCyan/5 rounded-lg blur-3xl opacity-50"></div>
    </MotionWrapper>
  );
}