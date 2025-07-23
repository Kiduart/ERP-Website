"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import DecorativeCircles from '@/components/utils/DecorativeCircles';

export default function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Principal, ABC School",
      quote: "This ERP system has transformed how we manage our school. The AI features are a game-changer!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&fit=crop",
    },
    {
      name: "Sarah Smith",
      role: "Teacher, XYZ Academy",
      quote: "The timetable and attendance tracking features have saved us so much time. Highly recommend!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&fit=crop",
    },
    {
      name: "Michael Brown",
      role: "Administrator, DEF Institute",
      quote: "Managing student records has never been easier. The support team is also fantastic!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&fit=crop",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const positions = [
    { size: '300px', top: '-50px', left: '-50px' },
    { size: '250px', top: '50%', right: '-50px', transform: 'translateY(-50%)' },
  ];

  return (
    <div className="relative max-w-4xl mx-auto">
      <DecorativeCircles positions={positions} />
      <div className="relative w-full flex items-center justify-center z-10">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center p-8"
        >
          {isLoaded ? (
            <motion.img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-32 h-32 rounded-full mb-4 shadow-lg"
              loading="lazy"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <div className="w-32 h-32 rounded-full mb-4 shadow-lg skeleton"></div>
          )}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg italic text-gray mb-4 font-poppins"
          >
            "{testimonials[current].quote}"
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold text-primary font-inter">
              {testimonials[current].name}
            </h4>
            <p className="text-gray font-poppins">{testimonials[current].role}</p>
          </motion.div>
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-secondary transition-all"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-secondary transition-all"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots for Navigation */}
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-primary' : 'bg-gray'
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
}