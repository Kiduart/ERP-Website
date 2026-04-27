import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Rocket, Heart, BookOpen, Laptop, Briefcase, Smile, MapPin, Building2, Clock } from "lucide-react";

export default function Careers() {
  const benefits = [
    { icon: Laptop, title: "Flexible Remote Work", desc: "Work from anywhere or from our beautiful hub offices." },
    { icon: BookOpen, title: "Learning Budget", desc: "$2,000 annual stipend for courses, books, and conferences." },
    { icon: Heart, title: "Health & Wellness", desc: "Premium health insurance and monthly wellness allowance." },
    { icon: Rocket, title: "Equity Package", desc: "Generous stock options because we want you to own what you build." },
    { icon: Smile, title: "Parental Leave", desc: "16 weeks of fully paid leave for all new parents." },
    { icon: Briefcase, title: "Annual Retreats", desc: "All-expenses-paid team gatherings in beautiful locations." },
  ];

  const jobs = [
    { role: "Senior Frontend Developer", dept: "Engineering", loc: "Remote / US", type: "Full-time" },
    { role: "Backend Node.js Engineer", dept: "Engineering", loc: "London, UK", type: "Full-time" },
    { role: "Product Manager (Analytics)", dept: "Product", loc: "Remote / Global", type: "Full-time" },
    { role: "Customer Success Manager", dept: "Customer Success", loc: "New York, NY", type: "Full-time" },
  ];

  return (
    <PageTransition className="pt-20 pb-0">
      <section className="relative overflow-hidden bg-[#f4f1e8]">
        <div className="page-shell relative z-10 grid min-h-[calc(100svh-5rem)] items-center gap-12 py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal className="max-w-xl">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-brand-teal">17 years of experience</div>
            <h1 className="text-[clamp(2.2rem,1.55rem+2.3vw,4.7rem)] font-bold leading-[0.98] text-brand-navy">
              Build the future
              <br />
              of education
              <br />
              with us
            </h1>
            <p className="mt-6 text-[clamp(1rem,0.96rem+0.2vw,1.08rem)] leading-7 text-brand-navy/65">
              Join a team focused on removing administrative friction so educators can spend more time where it matters most.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.08} className="flex justify-center lg:justify-end">
            <div className="relative aspect-square w-[min(80vw,34rem)] overflow-hidden rounded-full border-[14px] border-white shadow-[0_26px_70px_rgba(0,48,73,0.16)]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1400"
                alt="Careers hero"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 bg-brand-beige/30 relative overflow-hidden">
        <BackgroundBlobs
          blobs={[
            { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
            { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 },
          ]}
        />
        <FloatingIcons icons={["Heart", "Rocket", "BookOpen"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Rocket, title: "Innovation", desc: "We use cutting-edge tech to solve complex, real-world problems in education." },
              { icon: Heart, title: "Impact", desc: "Your work directly affects millions of students, teachers, and parents daily." },
              { icon: BookOpen, title: "Learning", desc: "We foster a culture of continuous learning and professional growth." },
            ].map((item, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1} className="bg-white p-8 rounded-3xl shadow-lg border border-brand-navy/5 text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{item.title}</h3>
                <p className="text-brand-navy/70">{item.desc}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-brand-navy/5 relative overflow-hidden">
        <BackgroundBlobs blobs={[{ color: "#f77f00", size: 300, position: "bottom-left", opacity: 0.15 }]} />
        <FloatingIcons icons={["Smile", "Star"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionReveal className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Culture</h2>
            <p className="text-lg text-brand-navy/70 leading-relaxed mb-12">
              We believe in high autonomy and high alignment. We don&apos;t micromanage. We hire smart people, give them hard problems, and trust them to deliver. We value clear communication, empathy, and a bias for action.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((ben, i) => (
              <SectionReveal key={i} delay={i * 0.05} className="flex gap-4 text-left bg-brand-beige/20 p-6 rounded-2xl">
                <ben.icon className="w-8 h-8 text-brand-orange shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">{ben.title}</h4>
                  <p className="text-sm text-brand-navy/60">{ben.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-beige/10 relative overflow-hidden" id="open-roles">
        <BackgroundBlobs blobs={[{ color: "#0c716b", size: 300, position: "top-right", opacity: 0.15 }]} />
        <FloatingIcons icons={["Users", "Briefcase"]} count={4} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Open Positions</h2>
            <p className="text-brand-navy/70 text-lg">Find your perfect fit and apply today.</p>
          </SectionReveal>

          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-navy/10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{job.role}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-brand-navy/60 font-medium">
                    <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> {job.dept}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.loc}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-teal transition-colors shrink-0">
                  Apply Now
                </button>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-brand-navy/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-brand-navy mb-12">Our Hiring Process</h2>
            <div className="flex flex-col md:flex-row justify-between items-center relative gap-8 md:gap-0">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-brand-beige -translate-y-1/2 -z-10"></div>
              {[
                { step: "1", title: "Application", desc: "Submit resume & portfolio" },
                { step: "2", title: "Interview", desc: "Meet the team & tech assessment" },
                { step: "3", title: "Offer", desc: "Welcome aboard!" },
              ].map((s, i) => (
                <div key={i} className="bg-white px-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-brand-teal text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-brand-teal/20">
                    {s.step}
                  </div>
                  <h4 className="font-bold text-brand-navy">{s.title}</h4>
                  <p className="text-sm text-brand-navy/60">{s.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <CtaSection title="Don&apos;t see a fit?" subtitle="Send your resume to careers@eduerp.com and we&apos;ll keep you in mind for future roles." />
    </PageTransition>
  );
}
