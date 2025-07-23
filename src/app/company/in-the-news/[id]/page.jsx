import Link from "next/link";
import { notFound } from "next/navigation";
import MotionWrapper from "@/components/MotionWrapper";
import FallbackImage from "@/components/FallbackImage";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

const newsItems = [
  {
    id: "1",
    title: "KIDURAT Wins EdTech Award 2024",
    date: "Jan 15, 2024",
    year: 2024,
    month: "January",
    country: "USA",
    description: "KIDURAT recognized for innovation in educational technology.",
    content: [
      "KIDURAT has been awarded the prestigious EdTech Award 2024 for its groundbreaking contributions to educational technology. The award ceremony, held in New York, celebrated KIDURAT’s AI-driven solutions that have transformed school management systems across the globe.",
      "CEO John Doe emphasized the company’s commitment to empowering educators with tools that enhance learning outcomes. 'We are thrilled to receive this recognition,' said Doe. 'Our mission is to make education more accessible and efficient through technology, and this award validates our efforts.'",
      "The event also featured a panel discussion where KIDURAT showcased its latest features, including AI-powered student performance analytics and automated scheduling systems. Attendees were impressed by the platform’s ability to streamline administrative tasks while improving educational outcomes.",
    ],
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    tags: ["EdTech", "Awards", "AI"],
    highlights: [
      "Awarded on: Jan 15, 2024",
      "Location: New York, USA",
      "Category: Innovation in EdTech",
    ],
  },
  {
    id: "5",
    title: "KIDURAT Named Top Innovator of 2024",
    date: "Jan 20, 2024",
    year: 2024,
    month: "January",
    country: "USA",
    description: "KIDURAT honored as a top innovator in EdTech for 2024.",
    content: [
      "KIDURAT has been named a Top Innovator of 2024 by EdTech Review for its cutting-edge AI solutions. The recognition highlights KIDURAT’s impact on modernizing education systems worldwide.",
      "The award was presented at a gala event in San Francisco, where KIDURAT’s team demonstrated their platform’s capabilities to an audience of educators and tech leaders.",
      "This recognition comes on the heels of KIDURAT’s rapid expansion into new markets, with plans to support over 1,000 schools by the end of 2024.",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    tags: ["EdTech", "Innovation", "AI"],
    highlights: [
      "Awarded on: Jan 20, 2024",
      "Location: San Francisco, USA",
      "Recognized by: EdTech Review",
    ],
  },
  {
    id: "2",
    title: "Featured in TechTimes",
    date: "Mar 22, 2024",
    year: 2024,
    month: "March",
    country: "UK",
    description: "KIDURAT highlighted for its AI-driven school management solutions.",
    content: [
      "TechTimes recently featured KIDURAT in its annual EdTech spotlight, praising the company’s innovative use of AI in school management. The article dives deep into how KIDURAT’s platform streamlines administrative tasks, improves communication between teachers and parents, and enhances student performance tracking.",
      "According to the article, KIDURAT’s platform has reduced administrative workload by 40% in schools that have adopted it, allowing educators to focus more on teaching.",
      "The feature also included testimonials from school principals who have seen significant improvements in parent-teacher engagement since implementing KIDURAT’s solutions.",
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    featured: false,
    tags: ["EdTech", "AI", "School Management"],
    highlights: [
      "Published on: Mar 22, 2024",
      "Featured in: TechTimes",
      "Impact: 40% reduction in admin workload",
    ],
  },
  {
    id: "3",
    title: "KIDURAT Partners with Local Schools",
    date: "Jun 10, 2023",
    year: 2023,
    month: "June",
    country: "India",
    description: "Expanding our reach to support more educational institutions.",
    content: [
      "KIDURAT announced a partnership with over 50 local schools in India to implement its school management system. This initiative aims to digitize administrative processes, making them more efficient and accessible for schools in rural areas.",
      "The partnership has already shown promising results, with a 30% increase in administrative efficiency reported by participating schools.",
    ],
    image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae1e5b?q=80&w=2070&auto=format&fit=crop",
    featured: false,
    tags: ["Education", "Partnership", "India"],
    highlights: [
      "Announced on: Jun 10, 2023",
      "Partnered with: 50+ schools",
      "Impact: 30% increase in efficiency",
    ],
  },
  {
    id: "4",
    title: "AI Features Highlighted at Education Summit",
    date: "Sep 5, 2023",
    year: 2023,
    month: "September",
    country: "Canada",
    description: "KIDURAT's AI capabilities showcased at the 2023 Summit.",
    content: [
      "At the 2023 Education Summit in Toronto, KIDURAT’s AI features took center stage. The platform’s ability to predict student performance and automate scheduling was a major highlight, drawing attention from educators worldwide.",
      "The summit provided a platform for KIDURAT to connect with potential partners and expand its global reach.",
    ],
    image: "https://images.unsplash.com/photo-1554224154-26053ffc0fe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    featured: false,
    tags: ["EdTech", "AI", "Summit"],
    highlights: [
      "Event Date: Sep 5, 2023",
      "Location: Toronto, Canada",
      "Focus: AI in Education",
    ],
  },
];

export default function NewsDetail({ params }) {
  const { id } = params;
  const news = newsItems.find((item) => item.id === id);

  if (!news) {
    notFound();
  }

  const relatedNews = newsItems
    .filter((item) => item.id !== id && item.tags.some((tag) => news.tags.includes(tag)))
    .slice(0, 3);

  const fallbackImage = "https://via.placeholder.com/1200x600?text=News+Image+Not+Found";

  // Use fallback if theme is undefined
  const typography = theme?.typography || defaultTypography;

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 relative">
      <WaveBackground gradient="from-accentCyan/60 via-neonPink/40 to-emeraldGreen/50" height="120px" opacity={0.25} particleShape="star" waveCount={3} texture="wavy" />
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accentCyan/10 rounded-full -translate-y-24 translate-x-24 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-neonPink/10 rounded-full translate-y-24 -translate-x-24 blur-2xl"></div>
            <Link
              href="/company/in-the-news"
              className="inline-flex items-center text-primary hover:bg-primary/10 px-4 py-2 rounded-full mb-8 transition-colors duration-300"
              style={{ fontFamily: typography.heading }}
            >
              <span className="mr-2">←</span> Back to News
            </Link>
            <FallbackImage
              src={news.image}
              alt={news.title}
              className="w-full h-96 object-cover rounded-lg mb-8 shadow-md"
              fallbackSrc={fallbackImage}
            />
            <h1 className="text-4xl font-bold text-primary mb-4 bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent" style={{ fontFamily: typography.heading }}>
              {news.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-grayDark mb-6" style={{ fontFamily: typography.body }}>
              <span>{news.date}</span>
              <span>·</span>
              <span>{news.country}</span>
              <span>·</span>
              <div className="flex space-x-2">
                {news.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-grayDark px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="prose prose-lg text-gray leading-relaxed" style={{ fontFamily: typography.body }}>
              {news.content.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
              {news.content.length > 1 && (
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-6">
                  "{news.content[1].split("'")[1] || news.content[1]}"
                </blockquote>
              )}
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-primary mb-4" style={{ fontFamily: typography.heading }}>Share This Article</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-grayDark hover:text-primary transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-grayDark hover:text-primary transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.66A7.77 7.77 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="text-grayDark hover:text-primary transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </MotionWrapper>
        </div>
        <div className="lg:col-span-1">
          <MotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 sticky top-4"
          >
            <h3 className="text-xl font-bold text-primary mb-4 bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent" style={{ fontFamily: typography.heading }}>
              Quick Highlights
            </h3>
            <ul className="space-y-2">
              {news.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray" style={{ fontFamily: typography.body }}>{highlight}</span>
                </li>
              ))}
            </ul>
          </MotionWrapper>
        </div>
        {relatedNews.length > 0 && (
          <div className="lg:col-span-3 mb-12">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent" style={{ fontFamily: typography.heading }}>
              Related News
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedNews.map((related, index) => (
                <MotionWrapper
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <Link href={`/company/in-the-news/${related.id}`}>
                    <div className="relative flex flex-col h-[400px] bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-transparent group-hover:border-primary/50">
                      <div className="relative">
                        <FallbackImage
                          src={related.image}
                          alt={related.title}
                          className="w-full h-48 object-cover"
                          fallbackSrc={fallbackImage}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs" style={{ fontFamily: typography.body }}>
                          {related.country}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-primary mb-2 group-hover:bg-gradient-to-r group-hover:from-accentCyan group-hover:to-neonPink group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2" style={{ fontFamily: typography.heading }}>
                          {related.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-grayDark mb-2" style={{ fontFamily: typography.body }}>
                          <span>{related.date}</span>
                          <span>·</span>
                          <span>{related.country}</span>
                        </div>
                        <p className="text-gray line-clamp-2 mb-4 flex-grow" style={{ fontFamily: typography.body }}>{related.content[0]}</p>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}