import Head from "next/head";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Rocket, Heart, BookOpen, Laptop, Briefcase, Smile, MapPin, Building2, Clock } from "lucide-react";

export default function Careers() {
  const benefits = [
    { icon: Laptop, title: "Flexible location", desc: "Work from our Noida office or remotely. We care about the output, not the postcode." },
    { icon: BookOpen, title: "Learning support", desc: "Annual budget for courses, books, and conferences , because standing still professionally is not an option here." },
    { icon: Heart, title: "Health coverage", desc: "Comprehensive health insurance for you and, depending on your plan, your family." },
    { icon: Rocket, title: "Early equity", desc: "Stock options available for key roles , because we want the people building this to benefit from where it goes." },
    { icon: Smile, title: "Parental leave", desc: "Generous paid leave for all new parents. We believe in people having a life outside work." },
    { icon: Briefcase, title: "Team time", desc: "Regular in-person gatherings for a fully distributed team , because remote works better with occasional face time." },
  ];

  const jobs = [
    { role: "Senior Frontend Developer", dept: "Engineering", loc: "Noida, Uttar Pradesh / Remote India", type: "Full-time" },
    { role: "Backend Node.js Engineer", dept: "Engineering", loc: "Noida, Uttar Pradesh", type: "Full-time" },
    { role: "Product Manager (Analytics)", dept: "Product", loc: "Remote India", type: "Full-time" },
    { role: "Customer Success Manager", dept: "Customer Success", loc: "Noida, Uttar Pradesh", type: "Full-time" },
  ];

  return (
    <PageTransition className="pt-20 pb-0">
      <Head>
        <title>Careers at KIDUART | Build School ERP Software That Matters</title>
        <meta
          name="description"
          content="Join KIDUART and build software that gives schools in India the operational clarity they deserve. We are hiring engineers, product managers, and customer success specialists."
        />
        <link rel="canonical" href="https://www.kiduart.com/careers" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KIDUART" />
        <meta property="og:title" content="Careers at KIDUART | Build School ERP Software That Matters" />
        <meta property="og:description" content="Join KIDUART and build software that gives schools in India the operational clarity they deserve. We are hiring engineers, product managers, and customer success specialists." />
        <meta property="og:url" content="https://www.kiduart.com/careers" />
        <meta property="og:image" content="https://www.kiduart.com/images/banner/home-hero.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at KIDUART | Build School ERP Software That Matters" />
        <meta name="twitter:description" content="Join KIDUART and build software that gives schools in India the operational clarity they deserve. We are hiring engineers, product managers, and customer success specialists." />
      </Head>
      <section className="relative overflow-hidden bg-[#f4f1e8]">
        <div className="page-shell relative z-10 grid min-h-[calc(100svh-5rem)] items-center gap-12 py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal className="max-w-xl">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-brand-teal">Join the team</div>
            <h1 className="text-[clamp(2.2rem,1.55rem+2.3vw,4.7rem)] font-bold leading-[0.98] text-brand-navy">
              Build software
              <br />
              that changes
              <br />
              how schools work
            </h1>
            <p className="mt-6 text-[clamp(1rem,0.96rem+0.2vw,1.08rem)] leading-7 text-brand-navy/65">
              We are a small team working on a real problem , school administration in India is still heavily manual, and we are building the platform that changes that. If that sounds like the kind of work you want to do, you should talk to us.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.08} className="flex justify-center lg:justify-end">
            <div className="relative aspect-square w-[min(80vw,34rem)] overflow-hidden rounded-full border-[14px] border-white shadow-[0_26px_70px_rgba(0,48,73,0.16)]">
              <img
                src="/images/banner/career-post-1.jpg"
                alt="KIDUART team working on school ERP software in Noida India"
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
              { icon: Rocket, title: "Meaningful work", desc: "The software you build is used by school administrators, teachers, and parents every day. You can see the impact directly." },
              { icon: Heart, title: "Tight feedback loops", desc: "We talk to real school teams regularly. What they need shapes what we build , and your work reaches them fast." },
              { icon: BookOpen, title: "Room to grow", desc: "We invest in people who want to get better at their craft. Learning time is protected, not squeezed into gaps." },
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
            <h2 className="text-3xl font-bold text-brand-navy mb-6">How we work</h2>
            <p className="text-lg text-brand-navy/70 leading-relaxed mb-12">
              We hire for judgement and trust people to use it. There is no micromanagement here , just clear goals, honest feedback, and the expectation that everyone does the work they said they would. We value direct communication, intellectual curiosity, and a preference for shipping over discussing.
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
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Open roles</h2>
            <p className="text-brand-navy/70 text-lg">We are growing carefully , hiring for quality over speed. If you see a role that fits, apply. If you do not see one but think you belong here anyway, reach out.</p>
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

      <CtaSection title="Do not see the right role listed?" subtitle="Send us a note at careers@kiduart.com with what you do and what kind of work you are looking for. We keep strong candidates in mind for roles as they open." />
    </PageTransition>
  );
}
