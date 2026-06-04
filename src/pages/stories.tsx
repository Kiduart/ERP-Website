import Head from "next/head";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Search, MapPin, TrendingUp, ArrowRight, FolderSearch } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { bannerAltFromSrc, heroImgProps, IMAGE_DIMENSIONS, lazyImgProps } from "@/lib/imageSeo";
import { ComingSoonBadge, ComingSoonContentMask } from "@/components/common/ComingSoonOverlay";

export default function CustomerStories() {
  const filters = ["All", "K-12", "Higher Secondary", "School District", "Private School", "Religious Institution", "International School"];
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>(["All"]);

  const toggleFilter = (filter: string) => {
    if (filter === "All") {
      setActiveFilters(["All"]);
      return;
    }

    let newFilters = activeFilters.filter((f) => f !== "All");
    if (newFilters.includes(filter)) {
      newFilters = newFilters.filter((f) => f !== filter);
      if (newFilters.length === 0) newFilters = ["All"];
    } else {
      newFilters.push(filter);
    }
    setActiveFilters(newFilters);
  };

  const stories = [
    {
      slug: "k12-multi-campus",
      initial: "K",
      name: "Multi-campus K-12 school",
      location: "North India",
      type: "K-12",
      title: "Moving admissions and fees off spreadsheets across three campuses.",
      summary: "Student records lived in different files per campus. Fee reminders went out late, and the accounts team spent most of the week reconciling numbers by hand.",
      stat: "Single fee ledger for all sections",
      color: "from-brand-teal to-brand-navy",
      image: "/images/banner/stories-post-1.jpg",
    },
    {
      slug: "new-private-school",
      initial: "P",
      name: "New private school",
      location: "Western India",
      type: "Private School",
      title: "Starting with digital enrollment from year one.",
      summary: "A school in its first academic session wanted to avoid paper registers before habits set in. Even with a few hundred students, manual tracking was already slowing the office down.",
      stat: "Online forms linked to student profiles",
      color: "from-brand-orange to-brand-yellow",
      image: "/images/banner/stories-post-2.jpg",
    },
    {
      slug: "international-programme",
      initial: "I",
      name: "International programme school",
      location: "South India",
      type: "International School",
      title: "Handling IB-style grading and multilingual parent updates.",
      summary: "The academic team needed flexible grade scales and fee plans for families on different calendars, without maintaining a separate sheet for each nationality.",
      stat: "Fee plans and notices by student group",
      color: "from-brand-navy to-brand-teal",
      image: "/images/banner/stories-post-3.jpg",
    },
    {
      slug: "district-group",
      initial: "D",
      name: "School group, multiple branches",
      location: "South India",
      type: "School District",
      title: "One dashboard for a group of branch schools.",
      summary: "Leadership could not compare attendance or collections across branches because each school reported differently. Monthly compliance packs took weeks to assemble.",
      stat: "Branch-level reports from one login",
      color: "from-brand-teal to-brand-orange",
      image: "/images/banner/stories-post-4.jpg",
    },
    {
      slug: "heritage-institution",
      initial: "H",
      name: "Established faith-based school",
      location: "Western India",
      type: "Religious Institution",
      title: "Digitising registers without changing how staff work with families.",
      summary: "Decades of paper processes made staff wary of big IT projects. The goal was smaller daily wins: attendance on phone, fees online, circulars that parents actually read.",
      stat: "Daily attendance marked in under a minute per class",
      color: "from-brand-yellow to-brand-orange",
      image: "/images/banner/stories-post-5.jpg",
    },
    {
      slug: "higher-secondary",
      initial: "S",
      name: "Higher secondary school",
      location: "South India",
      type: "Higher Secondary",
      title: "Tracking board-exam readiness across subjects.",
      summary: "Teachers needed a clearer view of which students were slipping in multiple subjects before pre-board exams, not after results were printed.",
      stat: "Early alerts on attendance and marks trends",
      color: "from-brand-navy to-brand-orange",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=900",
    },
  ];

  const filteredStories = stories.filter((story) => {
    const matchesSearch =
      searchQuery === "" ||
      story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = activeFilters.includes("All") || activeFilters.includes(story.type);

    return matchesSearch && matchesFilter;
  });

  const heroStories = stories.slice(0, 5);

  return (
    <PageTransition className="pt-20 pb-0">
      <Head>
        <title>School ERP Customer Stories | KIDUART</title>
        <meta
          name="description"
          content="Illustrative scenarios for K-12, private, international, and multi-branch schools planning fees, attendance, and parent communication on KIDUART. Verified customer stories will be published as schools go live."
        />
        <link rel="canonical" href="https://www.kiduart.com/stories" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KIDUART" />
        <meta property="og:title" content="School ERP Customer Stories | KIDUART" />
        <meta property="og:description" content="Illustrative school scenarios for fees, attendance, and parent communication on KIDUART." />
        <meta property="og:url" content="https://www.kiduart.com/stories" />
        <meta property="og:image" content="https://www.kiduart.com/images/banner/home-hero.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="School ERP Customer Stories | KIDUART" />
        <meta name="twitter:description" content="Illustrative school scenarios for fees, attendance, and parent communication on KIDUART." />
      </Head>
      <section className="relative overflow-hidden bg-[#f6efdf]">
        <div className="page-shell relative z-10 flex min-h-[calc(100svh-5rem)] flex-col justify-center py-10">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            {/* <div className="mb-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Customer stories
            </div> */}
            <h5 className="text-[clamp(2.1rem,1.5rem+2.2vw,3.05rem)] font-bold leading-[0.98] text-brand-navy">
              How schools use KIDUART day to day
            </h5>
            <p className="mx-auto mt-5 max-w-2xl text-[clamp(1rem,0.96rem+0.2vw,1.06rem)] leading-7 text-brand-navy/65">
              These outlines reflect the situations we hear most often in conversations with Indian school teams: scattered records, fee follow-ups that never end, and parents who still call the office for basic updates. Full published case studies are on the way.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.08} className="mt-12 hidden items-end justify-center gap-5 lg:flex">
            {heroStories.map((story, index) => {
              const offsets = [56, 24, 0, 24, 56];
              const rotations = [-10, -5, 0, 5, 10];

              return (
                <Link
                  key={story.slug}
                  href={`/customer-stories/${story.slug}`}
                  className="group relative block h-[23rem] w-[16rem] overflow-hidden rounded-[1.7rem] bg-white shadow-[0_26px_40px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:z-20 hover:scale-[1.06]"
                  style={{ transform: `translateY(${offsets[index]}px) rotate(${rotations[index]}deg)` }}
                >
                  <img
                    src={story.image}
                    alt={bannerAltFromSrc(story.image, `Customer story cover for ${story.name}`)}
                    className="h-full w-full object-cover"
                    {...heroImgProps(IMAGE_DIMENSIONS.storyCard)}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.22))]" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 translate-y-full bg-[linear-gradient(180deg,rgba(0,48,73,0.1),rgba(0,48,73,0.92))] p-4 text-white transition-transform duration-300 group-hover:translate-y-0">
                    <div className="text-lg font-bold leading-snug">{story.name}</div>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-navy">
                      View Story <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </SectionReveal>

          <SectionReveal delay={0.08} className="mt-10 lg:hidden">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {heroStories.map((story) => (
                <Link key={story.slug} href={`/customer-stories/${story.slug}`} className="group relative block h-[20rem] min-w-[14rem] overflow-hidden rounded-[1.5rem] shadow-lg">
                  <img
                    src={story.image}
                    alt={bannerAltFromSrc(story.image, `Customer story cover for ${story.name}`)}
                    className="h-full w-full object-cover"
                    {...lazyImgProps(IMAGE_DIMENSIONS.storyCard)}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,rgba(0,48,73,0.04),rgba(0,48,73,0.92))] p-4 text-white">
                    <div className="text-lg font-bold leading-snug">{story.name}</div>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-navy">
                      View Story <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space-tight bg-brand-beige/20 min-h-[50vh] relative overflow-hidden">
        <BackgroundBlobs
          blobs={[
            { color: "#f77f00", size: 300, position: "center-left", opacity: 0.15 },
            { color: "#003049", size: 300, position: "center-right", opacity: 0.12 },
          ]}
        />
        <FloatingIcons icons={["Users", "Building2", "BookOpen"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="mb-10 max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-brand-navy/40" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by school type, region, or topic..."
                className="w-full bg-white rounded-full py-4 pl-12 pr-6 text-brand-navy shadow-xl focus:outline-none focus:ring-4 focus:ring-brand-teal/50 transition-shadow"
              />
            </div>
          </SectionReveal>

          <SectionReveal className="flex flex-wrap gap-2 justify-center mb-16">
            {filters.map((f) => {
              const isActive = activeFilters.includes(f);
              return (
                <button
                  key={f}
                  onClick={() => toggleFilter(f)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                    isActive
                      ? "bg-brand-teal text-white border-brand-teal shadow-md"
                      : "bg-white text-brand-navy border-brand-navy/10 hover:border-brand-teal/50"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </SectionReveal>

          {filteredStories.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story, idx) => (
                <SectionReveal key={story.slug} delay={idx * 0.1} className="relative overflow-hidden bg-white rounded-2xl shadow-lg shadow-brand-navy/5 border border-brand-navy/5 flex flex-col hover:-translate-y-1 transition-transform group">
                  <ComingSoonBadge />
                  <Link href={`/customer-stories/${story.slug}`} className="block pointer-events-none">
                    <div className={`h-32 bg-gradient-to-r ${story.color} flex items-center px-6 relative`}>
                      <div className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center text-2xl font-black text-brand-navy absolute -bottom-8 border-4 border-white group-hover:scale-110 transition-transform">
                        {story.initial}
                      </div>
                    </div>
                  </Link>

                  <div className="pt-12 p-6 flex flex-col flex-grow">
                    <ComingSoonContentMask className="flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-brand-navy text-lg">{story.name}</h3>
                          <div className="flex items-center gap-1 text-xs text-brand-navy/60 mt-1">
                            <MapPin className="w-3 h-3" /> {story.location}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-bold bg-brand-beige px-2 py-1 rounded text-brand-navy text-center inline-block mb-4">{story.type}</span>
                      <h4 className="text-xl font-bold text-brand-navy mb-3 leading-snug">{story.title}</h4>
                      <p className="text-brand-navy/70 text-sm mb-6 flex-grow">{story.summary}</p>

                      <div className="bg-brand-teal/5 border border-brand-teal/10 rounded-xl p-4 mb-6">
                        <div className="flex items-center gap-2 text-brand-teal font-bold text-sm">
                          <TrendingUp className="w-4 h-4" /> Impact
                        </div>
                        <div className="font-medium text-brand-navy mt-1">{story.stat}</div>
                      </div>
                    </ComingSoonContentMask>

                    <button disabled className="w-full py-3 rounded-xl border-2 border-brand-navy/10 font-bold text-brand-navy/60 opacity-50 cursor-not-allowed flex justify-center items-center gap-2">
                      Coming Soon
                    </button>
                  </div>
                </SectionReveal>
              ))}
            </div>
          ) : (
            <SectionReveal className="text-center py-20">
              <FolderSearch className="w-16 h-16 text-brand-navy/20 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-navy mb-2">No matching stories found</h3>
              <p className="text-brand-navy/60">Try adjusting the search term or removing a filter.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilters(["All"]);
                }}
                className="mt-6 px-6 py-2 bg-brand-beige text-brand-navy font-bold rounded-full hover:bg-brand-navy hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            </SectionReveal>
          )}

          {filteredStories.length > 0 && (
            <div className="mt-16 text-center">
              <button className="px-8 py-4 rounded-full bg-brand-navy text-white font-bold hover:bg-brand-teal transition-all shadow-lg hover:shadow-brand-teal/25">
                Load More Stories
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaSection title="Ready to write your own story?" subtitle="Book a demo and see what KIDUART would look like for your school's specific size and workflow." />
    </PageTransition>
  );
}
