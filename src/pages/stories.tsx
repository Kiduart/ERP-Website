import { Stagger } from "@/components/ui/Stagger";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Search, MapPin, TrendingUp, ArrowRight, FolderSearch } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { pageSeo } from "@/lib/pageSeo";
import { bannerAltFromSrc, heroImgProps, IMAGE_DIMENSIONS, lazyImgProps } from "@/lib/imageSeo";
import { ComingSoonBadge, ComingSoonContentMask } from "@/components/common/ComingSoonOverlay";
import { customerStoryFilters, customerStories, type CustomerStory } from "@/data/customerStoriesData";
import { getCmsCustomerStories } from "@/lib/cms/content";
import type { ContentMeta } from "@/lib/cms/types";
import type { GetStaticProps } from "next";

type CustomerStoriesPageProps = {
  stories: CustomerStory[];
  contentMeta: ContentMeta;
};

export default function CustomerStories({ stories }: CustomerStoriesPageProps) {
  const filters = [...customerStoryFilters];
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
      <PageSeoHead {...pageSeo.stories} />
      <section className="relative overflow-hidden bg-[#f6efdf]">
        <div className="page-shell relative z-10 flex min-h-[calc(100svh-5rem)] flex-col justify-center py-10">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            {/* <div className="mb-4 inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Customer stories
            </div> */}
            <h1 className="text-[clamp(2.1rem,1.5rem+2.2vw,3.05rem)] font-bold leading-[0.98] text-brand-navy">
              School ERP stories: how Indian schools run day to day
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[clamp(1rem,0.96rem+0.2vw,1.06rem)] leading-7 text-brand-navy/65">
              These school management scenarios reflect what we hear most often: scattered records, fee follow-ups that never end, and parents who still call the office for basic updates. Full published case studies are on the way.
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
            <Stagger
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              itemClassName="motion-brick motion-brick-dense"
            >
              {filteredStories.map((story) => (
                <div key={story.slug} className="relative overflow-hidden bg-white rounded-2xl shadow-lg shadow-brand-navy/5 border border-brand-navy/5 flex flex-col hover:-translate-y-1 transition-transform group">
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
                </div>
              ))}
            </Stagger>
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

export const getStaticProps: GetStaticProps<CustomerStoriesPageProps> = async (context) => {
  const preview = context.preview ?? false;
  const result = await getCmsCustomerStories({ preview });
  return {
    props: {
      stories: result.data.length ? result.data : customerStories,
      contentMeta: result.meta,
    },
    revalidate: preview ? 1 : 300,
  };
};
