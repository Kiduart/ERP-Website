import { useState } from "react";
import Section from "@/components/sections/Section";
import MotionWrapper from "@/components/MotionWrapper";
import NewsList from "./NewsList";
import { theme } from "@/components/utils/theme";
import ParticleEffect from "@/components/utils/ParticleEffect";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function NewsArchiveSection({ newsItems }) {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const years = ["All", ...new Set(newsItems.map((item) => item.year))].sort((a, b) => b - a);
  const months = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ].filter((month) => month === "All" || newsItems.some((item) => item.month === month));
  const countries = ["All", ...new Set(newsItems.map((item) => item.country))].sort();

  const resetFilters = () => {
    setSelectedYear("All");
    setSelectedMonth("All");
    setSelectedCountry("All");
    setSearchQuery("");
  };

  const filteredNews = newsItems.filter((item) => {
    const matchesYear = selectedYear === "All" || item.year === parseInt(selectedYear);
    const matchesMonth = selectedMonth === "All" || item.month === selectedMonth;
    const matchesCountry = selectedCountry === "All" || item.country === selectedCountry;
    const matchesSearch = searchQuery
      ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesYear && matchesMonth && matchesCountry && matchesSearch && !item.featured;
  });

  // Use fallback if theme is undefined
  const typography = theme?.typography || defaultTypography;

  return (
    <Section title="News Archive" className="bg-white relative">
      <ParticleEffect count={20} />
      <MotionWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center px-4 sm:px-0"
      >
        <div className="w-full sm:w-72">
          <label className="block bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent font-semibold mb-2 flex items-center" style={{ fontFamily: typography.heading }}>
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search News
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or content..."
              className="w-full border border-gray-300 rounded-lg p-3 bg-gradient-to-r from-white to-gray-50 text-grayDark shadow-sm hover:shadow-md transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-primary pl-10"
              style={{ fontFamily: typography.body }}
            />
            <svg className="w-5 h-5 text-grayDark absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <div className="w-full sm:w-60">
          <label className="block bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent font-semibold mb-2 flex items-center" style={{ fontFamily: typography.heading }}>
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Filter by Year
          </label>
          <div className="relative group">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="appearance-none w-full border border-gray-300 rounded-lg p-3 bg-gradient-to-r from-white to-gray-50 text-grayDark shadow-sm hover:shadow-md transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-primary group-hover:border-primary/50"
              style={{ fontFamily: typography.body }}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-grayDark group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-60">
          <label className="block bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent font-semibold mb-2 flex items-center" style={{ fontFamily: typography.heading }}>
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Filter by Month
          </label>
          <div className="relative group">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="appearance-none w-full border border-gray-300 rounded-lg p-3 bg-gradient-to-r from-white to-gray-50 text-grayDark shadow-sm hover:shadow-md transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-primary group-hover:border-primary/50"
              style={{ fontFamily: typography.body }}
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-grayDark group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-60">
          <label className="block bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent font-semibold mb-2 flex items-center" style={{ fontFamily: typography.heading }}>
            <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Filter by Country
          </label>
          <div className="relative group">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="appearance-none w-full border border-gray-300 rounded-lg p-3 bg-gradient-to-r from-white to-gray-50 text-grayDark shadow-sm hover:shadow-md transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-primary group-hover:border-primary/50"
              style={{ fontFamily: typography.body }}
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-grayDark group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <button
            onClick={resetFilters}
            className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors duration-300 flex items-center justify-center"
            style={{ fontFamily: typography.heading }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Reset Filters
          </button>
        </div>
      </MotionWrapper>
      {filteredNews.length > 0 ? (
        <NewsList newsItems={filteredNews} />
      ) : (
        <p className="text-gray text-center py-10 text-lg" style={{ fontFamily: typography.body }}>
          No news found for the selected filters.
        </p>
      )}
    </Section>
  );
}