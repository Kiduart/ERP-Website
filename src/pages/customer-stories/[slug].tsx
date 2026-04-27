import { useParams, Link } from "wouter";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { ArrowLeft, ArrowRight, MapPin, Quote, TrendingUp, CheckCircle2, ChevronRight } from "lucide-react";

const storiesData: Record<string, any> = {
  "delhi-public-school": {
    school: "Delhi Public School",
    location: "New Delhi, India",
    role: "K-12",
    challenge: "Managing 2,400+ students across 3 campuses with fragmented systems led to frequent data errors, slow fee collection (only 68% on-time), and overwhelmed administrative staff.",
    solution: "Deployed KIDUART across all three campuses with centralized student management, automated fee collection, and real-time parent communication.",
    results: ["92% fee collection rate (up from 68%)", "40% reduction in administrative overhead", "500+ hours saved per month across campuses", "Parent satisfaction score improved from 6.2 to 8.7/10"],
    quote: "KIDUART transformed how we run our three campuses. What used to require a 10-person admin team now runs smoothly with 6 people, and our parents are happier than ever.",
    leadership: "Dr. Ramesh Gupta, Principal",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1600",
  },
  "greenfield-academy": {
    school: "Greenfield Academy",
    location: "Mumbai, India",
    role: "Private School",
    challenge: "A newly established premium school needed a modern ERP from day one. Manual systems were already causing issues in the first year with just 400 students.",
    solution: "Implemented KIDUART from inception with full module deployment including KIDUORBIT AI for early student performance tracking.",
    results: ["Zero administrative backlog since launch", "100% digital enrollment process", "Parent app adoption rate of 94%", "3 teachers hired instead of 8 due to automation"],
    quote: "Starting with KIDUART was the best technology decision we made. Our parents constantly comment on how professional our communication is.",
    leadership: "Mrs. Anita Fernandez, Founder & Director",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=1600",
  },
  "sunrise-international": {
    school: "Sunrise International School",
    location: "Bangalore, India",
    role: "International School",
    challenge: "As an IB school, Sunrise needed a flexible system that could handle their unique grading scale, multi-language communication, and complex fee structures for international families.",
    solution: "Customized KIDUART with IB grade mapping, multi-currency fee handling, and multi-language parent communication.",
    results: ["IB grade integration saves 8 hours/week per teacher", "Multi-currency billing for 40+ nationalities", "Parent communication response time cut by 65%", "Board reporting automated entirely"],
    quote: "We evaluated 7 systems. KIDUART was the only one that could truly adapt to our IB requirements without extensive custom development.",
    leadership: "Mr. David Williams, Head of School",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1600",
  },
  "metro-schools-district": {
    school: "Metro Schools District",
    location: "Chennai, India",
    role: "School District",
    challenge: "Overseeing 12 schools with completely inconsistent data practices made district-level reporting impossible. Compliance reports took 3 weeks to compile manually.",
    solution: "Deployed KIDUART district-wide with centralized reporting, standardized data entry, and executive dashboards for district leadership.",
    results: ["Compliance reports now generated in 2 hours (previously 3 weeks)", "100% data standardization across 12 schools", "District enrollment tracking in real time", "$180,000 annual savings in administrative costs"],
    quote: "Having a single source of truth for all 12 schools has changed how we operate. I can see the health of the entire district from my phone.",
    leadership: "Dr. Sunita Krishnaswamy, District Superintendent",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600",
  },
  "st-mary-school": {
    school: "St. Mary's School",
    location: "Pune, India",
    role: "Religious Institution",
    challenge: "A 60-year-old institution with deeply entrenched paper-based processes needed to modernize without losing institutional culture or disrupting longtime staff.",
    solution: "Phased KIDUART implementation starting with fee management (the biggest pain point), then attendance, then full academic management over 6 months.",
    results: ["Paper usage reduced by 85%", "Fee collection efficiency improved to 97%", "Staff adoption rate of 100% within 90 days", "5 part-time admin positions eliminated through automation"],
    quote: "We were worried change would be difficult with our long-serving staff. KIDUART's training team was exceptional, and the system is intuitive enough that everyone adapted quickly.",
    leadership: "Sister Margaret, School Administrator",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1600",
  },
  "brighton-college": {
    school: "Brighton College",
    location: "Hyderabad, India",
    role: "Higher Secondary",
    challenge: "A competitive higher secondary school needed better analytics to improve board exam results and reduce the gap between teacher expectations and student performance.",
    solution: "Used KIDUORBIT predictive analytics to identify at-risk students in Grades 11-12 early, enabling targeted intervention programs.",
    results: ["Board exam pass rate improved from 78% to 94%", "42 students flagged early for intervention all passed", "Teacher workload for student monitoring cut by 50%", "College placement rate improved to 91%"],
    quote: "KIDUORBIT's early warning system is the single most impactful tool we've added. We caught struggling students 8 weeks early on average, and our results speak for themselves.",
    leadership: "Mr. Pradeep Nair, Academic Director",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600",
  },
};

export default function CustomerStoryDetail() {
  const { slug } = useParams();
  const story = slug ? storiesData[slug] : null;

  if (!story) {
    return (
      <PageTransition className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-brand-navy mb-6">Story Not Found</h1>
        <p className="text-xl text-brand-navy/70 mb-8">The customer story you are looking for doesn&apos;t exist.</p>
        <Link href="/stories" className="px-8 py-4 rounded-full bg-brand-navy text-white font-bold inline-flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Stories
        </Link>
      </PageTransition>
    );
  }

  const otherStories = Object.entries(storiesData).filter(([key]) => key !== slug).slice(0, 3);

  return (
    <PageTransition className="pt-20 pb-0">
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-brand-navy">
        <img src={story.image} alt={story.school} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,31,63,0.88),rgba(7,31,63,0.7))]" />
        <div className="page-shell relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-10">
          <SectionReveal className="max-w-4xl">
            <Link href="/stories" className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Back to Stories
            </Link>

            <div className="mb-6 flex flex-wrap gap-3">
              <div className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-bold text-brand-navy">
                {story.role}
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                <MapPin className="h-4 w-4 text-brand-teal" /> {story.location}
              </div>
            </div>

            <h1 className="text-[clamp(2.4rem,1.7rem+2.5vw,5.3rem)] font-bold leading-[0.96] text-white">
              {story.school}
            </h1>
            <p className="mt-5 max-w-2xl text-[clamp(1rem,0.96rem+0.22vw,1.08rem)] leading-7 text-white/80">
              {story.challenge}
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 bg-brand-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <SectionReveal>
              <div className="bg-brand-navy text-white p-10 md:p-12 rounded-[2rem] shadow-2xl relative h-full">
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-red-500 flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="font-bold text-white text-xl">1</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-brand-yellow">The Challenge</h2>
                <p className="text-lg text-white/80 leading-relaxed font-medium">{story.challenge}</p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="bg-white text-brand-navy p-10 md:p-12 rounded-[2rem] shadow-xl border border-brand-navy/5 relative h-full">
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-brand-teal flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="font-bold text-white text-xl">2</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-brand-teal">The Solution</h2>
                <p className="text-lg text-brand-navy/80 leading-relaxed font-medium">{story.solution}</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/10 mb-6">
              <TrendingUp className="w-8 h-8 text-brand-orange" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">The Results</h2>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {story.results.map((res: string, idx: number) => (
              <SectionReveal key={idx} delay={idx * 0.1}>
                <div className="bg-brand-beige/20 p-8 rounded-3xl border border-brand-navy/5 h-full flex flex-col items-center text-center">
                  <CheckCircle2 className="w-10 h-10 text-brand-teal mb-4" />
                  <p className="font-bold text-brand-navy text-lg">{res}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <SectionReveal>
            <Quote className="w-20 h-20 text-brand-teal mx-auto mb-8 opacity-50" />
            <p className="text-2xl md:text-4xl font-serif leading-relaxed mb-10 italic">
              &quot;{story.quote}&quot;
            </p>
            <div className="w-20 h-1 bg-brand-yellow mx-auto mb-6 rounded-full"></div>
            <div className="font-bold text-xl">{story.leadership.split(",")[0]}</div>
            <div className="text-brand-teal font-medium mt-1">{story.leadership.split(",")[1]}</div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-2">More Success Stories</h2>
              <p className="text-brand-navy/60">See how other institutions are thriving with KIDUART.</p>
            </div>
            <Link href="/stories" className="hidden sm:inline-flex items-center gap-2 font-bold text-brand-teal hover:text-brand-navy transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {otherStories.map(([key, data], idx) => (
              <SectionReveal key={key} delay={idx * 0.1}>
                <Link href={`/customer-stories/${key}`} className="bg-white rounded-3xl shadow-lg shadow-brand-navy/5 border border-brand-navy/5 overflow-hidden flex flex-col h-full group hover:-translate-y-1 transition-transform block p-8 relative">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-brand-beige flex items-center justify-center text-3xl font-black text-brand-navy">
                      {data.school.charAt(0)}
                    </div>
                    <span className="text-xs font-bold bg-brand-navy/5 px-3 py-1 rounded-full text-brand-navy">{data.role}</span>
                  </div>

                  <h3 className="font-bold text-brand-navy text-xl mb-4 group-hover:text-brand-teal transition-colors">{data.school}</h3>
                  <p className="text-brand-navy/70 text-sm mb-8 flex-grow line-clamp-3">{data.challenge}</p>

                  <div className="flex items-center gap-2 font-bold text-brand-teal mt-auto">
                    Read Story <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Write Your Own Success Story" subtitle="Join schools worldwide achieving operational excellence with KIDUART." />
    </PageTransition>
  );
}
