"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WaveBackground from "@/components/utils/WaveBackground";
import { theme } from "@/components/utils/theme";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function CurrentOpenings({ openings }) {
  const typography = theme?.typography || defaultTypography;

  const [filters, setFilters] = useState({
    location: "",
    department: "",
    keywords: "",
  });

  const [visibleOpenings, setVisibleOpenings] = useState(3);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ location: false, department: false });
  const [debouncedKeywords, setDebouncedKeywords] = useState(filters.keywords);

  const locationRef = useRef(null);
  const departmentRef = useRef(null);

  // Debounce keyword search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeywords(filters.keywords);
    }, 300);
    return () => clearTimeout(handler);
  }, [filters.keywords]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target) &&
        departmentRef.current &&
        !departmentRef.current.contains(event.target)
      ) {
        setDropdownOpen({ location: false, department: false });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const locations = [...new Set(openings.map((opening) => opening.location))];
  const departments = [...new Set(openings.map((opening) => opening.department))];

  const filteredOpenings = useMemo(() => {
    return openings.filter((opening) => {
      const matchesLocation = filters.location ? opening.location === filters.location : true;
      const matchesDepartment = filters.department ? opening.department === filters.department : true;
      const matchesKeywords = debouncedKeywords
        ? opening.keywords.some((keyword) =>
            keyword.toLowerCase().includes(debouncedKeywords.toLowerCase())
          ) || opening.title.toLowerCase().includes(debouncedKeywords.toLowerCase())
        : true;
      return matchesLocation && matchesDepartment && matchesKeywords;
    });
  }, [openings, filters.location, filters.department, debouncedKeywords]);

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyPresetFilter = (preset) => {
    if (preset === "remote") {
      setFilters((prev) => ({ ...prev, location: "Remote", department: "", keywords: "" }));
    } else if (preset === "engineering") {
      setFilters((prev) => ({ ...prev, location: "", department: "Engineering", keywords: "" }));
    }
  };

  const clearFilters = () => {
    setFilters({ location: "", department: "", keywords: "" });
    setVisibleOpenings(3);
  };

  const loadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleOpenings((prev) => Math.min(prev + 3, filteredOpenings.length));
      setIsLoadingMore(false);
    }, 500);
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <div id="current-openings" className="relative py-16">
      <WaveBackground gradient={theme.gradients.purpleToGreen} height="90px" opacity={0.05} particleShape="star" waveCount={4} texture="smooth" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-gray-600 bg-clip-text text-transparent mb-12 text-center"
          style={{ fontFamily: typography.heading }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Current Openings
        </motion.h2>
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          <motion.button
            onClick={() => applyPresetFilter("remote")}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm font-semibold"
            style={{ fontFamily: typography.body }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Remote Jobs
          </motion.button>
          <motion.button
            onClick={() => applyPresetFilter("engineering")}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm font-semibold"
            style={{ fontFamily: typography.body }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Engineering Jobs
          </motion.button>
        </div>
        <AnimatePresence>
          {(filters.location || filters.department || filters.keywords) && (
            <motion.div
              className="mb-6 flex flex-wrap gap-2 justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {filters.location && (
                <motion.span
                  className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  style={{ fontFamily: typography.body }}
                >
                  📍 {filters.location}
                  <button
                    onClick={() => handleFilterChange("location", "")}
                    className="ml-1 text-gray-500 hover:text-primary"
                  >
                    ✕
                  </button>
                </motion.span>
              )}
              {filters.department && (
                <motion.span
                  className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  style={{ fontFamily: typography.body }}
                >
                  🏢 {filters.department}
                  <button
                    onClick={() => handleFilterChange("department", "")}
                    className="ml-1 text-gray-500 hover:text-primary"
                  >
                    ✕
                  </button>
                </motion.span>
              )}
              {filters.keywords && (
                <motion.span
                  className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  style={{ fontFamily: typography.body }}
                >
                  🔍 {filters.keywords}
                  <button
                    onClick={() => handleFilterChange("keywords", "")}
                    className="ml-1 text-gray-500 hover:text-primary"
                  >
                    ✕
                  </button>
                </motion.span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-center bg-gradient-to-br from-white to-gray-100 p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full col-span-1" ref={locationRef}>
            <motion.button
              onClick={() => setDropdownOpen((prev) => ({ ...prev, location: !prev.location }))}
              className="w-full p-3 pl-10 pr-8 bg-white rounded-lg border border-gray-300 shadow-sm text-gray-700 flex items-center justify-between"
              style={{ fontFamily: typography.body }}
              whileHover={{ scale: 1.02, boxShadow: `0 0 10px ${theme.colors.grayDark}10` }}
              whileTap={{ scale: 0.98 }}
              aria-expanded={dropdownOpen.location}
              aria-label="Select Location"
            >
              <span className="flex items-center gap-2">
                📍 {filters.location || "All Locations"}
              </span>
              <motion.svg
                className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: dropdownOpen.location ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>
            <AnimatePresence>
              {dropdownOpen.location && (
                <motion.ul
                  className="absolute top-full left-0 w-full mt-1 bg-white rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <li
                    onClick={() => {
                      handleFilterChange("location", "");
                      setDropdownOpen((prev) => ({ ...prev, location: false }));
                    }}
                    className="p-3 hover:bg-gray-100 cursor-pointer text-gray-700"
                    style={{ fontFamily: typography.body }}
                  >
                    All Locations
                  </li>
                  {locations.map((location) => (
                    <li
                      key={location}
                      onClick={() => {
                        handleFilterChange("location", location);
                        setDropdownOpen((prev) => ({ ...prev, location: false }));
                      }}
                      className="p-3 hover:bg-gray-100 cursor-pointer text-gray-700"
                      style={{ fontFamily: typography.body }}
                    >
                      {location}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <div className="relative w-full col-span-1" ref={departmentRef}>
            <motion.button
              onClick={() => setDropdownOpen((prev) => ({ ...prev, department: !prev.department }))}
              className="w-full p-3 pl-10 pr-8 bg-white rounded-lg border border-gray-300 shadow-sm text-gray-700 flex items-center justify-between"
              style={{ fontFamily: typography.body }}
              whileHover={{ scale: 1.02, boxShadow: `0 0 10px ${theme.colors.grayDark}10` }}
              whileTap={{ scale: 0.98 }}
              aria-expanded={dropdownOpen.department}
              aria-label="Select Department"
            >
              <span className="flex items-center gap-2">
                🏢 {filters.department || "All Departments"}
              </span>
              <motion.svg
                className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: dropdownOpen.department ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>
            <AnimatePresence>
              {dropdownOpen.department && (
                <motion.ul
                  className="absolute top-full left-0 w-full mt-1 bg-white rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <li
                    onClick={() => {
                      handleFilterChange("department", "");
                      setDropdownOpen((prev) => ({ ...prev, department: false }));
                    }}
                    className="p-3 hover:bg-gray-100 cursor-pointer text-gray-700"
                    style={{ fontFamily: typography.body }}
                  >
                    All Departments
                  </li>
                  {departments.map((department) => (
                    <li
                      key={department}
                      onClick={() => {
                        handleFilterChange("department", department);
                        setDropdownOpen((prev) => ({ ...prev, department: false }));
                      }}
                      className="p-3 hover:bg-gray-100 cursor-pointer text-gray-700"
                      style={{ fontFamily: typography.body }}
                    >
                      {department}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <div className="relative w-full col-span-1">
            <motion.input
              type="text"
              name="keywords"
              value={filters.keywords}
              onChange={(e) => handleFilterChange("keywords", e.target.value)}
              placeholder="Search by keywords..."
              className="w-full p-3 pl-10 bg-white rounded-lg border border-gray-300 shadow-sm text-gray-700 pr-10"
              style={{ fontFamily: typography.body }}
              whileHover={{ scale: 1.02, boxShadow: `0 0 10px ${theme.colors.grayDark}10` }}
              transition={{ duration: 0.3 }}
              aria-label="Search by keywords"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
            {filters.keywords && (
              <button
                onClick={() => handleFilterChange("keywords", "")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
                aria-label="Clear keyword search"
              >
                ✕
              </button>
            )}
          </div>
          {(filters.location || filters.department || filters.keywords) && (
            <div className="col-span-1 sm:col-span-3 flex justify-center">
              <motion.button
                onClick={clearFilters}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 text-sm font-semibold"
                style={{ fontFamily: typography.body }}
                whileHover={{ scale: 1.02, boxShadow: `0 0 10px ${theme.colors.grayDark}10` }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                aria-label="Clear all filters"
              >
                Clear Filters
              </motion.button>
            </div>
          )}
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {filteredOpenings.length > 0 ? (
            filteredOpenings.slice(0, visibleOpenings).map((opening, index) => (
              <motion.div
                key={opening.id}
                variants={cardVariants}
                whileHover="hover"
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                {index === 0 && (
                  <div className="absolute top-0 left-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-br-lg">
                    Featured
                  </div>
                )}
                <h3
                  className="text-xl font-semibold text-primary mb-2"
                  style={{ fontFamily: typography.heading }}
                >
                  {opening.title}
                </h3>
                <p
                  className="text-gray-600 text-sm mb-1"
                  style={{ fontFamily: typography.body }}
                >
                  Location: {opening.location}
                </p>
                <p
                  className="text-gray-600 text-sm mb-4"
                  style={{ fontFamily: typography.body }}
                >
                  Department: {opening.department}
                </p>
                <motion.a
                  href={`/company/careers-culture/apply/${opening.id}`}
                  className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm font-semibold"
                  style={{ fontFamily: typography.body }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Quick Apply
                </motion.a>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full" style={{ fontFamily: typography.body }}>
              No openings match your criteria.
            </p>
          )}
        </motion.div>
        {visibleOpenings < filteredOpenings.length && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={loadMore}
              disabled={isLoadingMore}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm font-semibold disabled:opacity-50"
              style={{ fontFamily: typography.body }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoadingMore ? "Loading..." : "Load More"}
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}