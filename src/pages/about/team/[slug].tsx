import { useParams, Link } from "wouter";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { ArrowLeft, Linkedin, Award, Briefcase, ChevronRight, Quote } from "lucide-react";
import React from "react";

const leadersData: Record<string, any> = {
  "rajesh-kumar": { 
    name: "Rajesh Kumar", 
    title: "Chief Executive Officer & Co-founder", 
    yearsExperience: 18, 
    expertise: ["EdTech Strategy", "Product Vision", "Business Development", "Educational Policy"], 
    bio: "Rajesh Kumar has spent 18 years at the intersection of technology and education. Before founding KIDUART, he served as VP of Product at two leading EdTech companies and as an advisor to the Ministry of Education on digital infrastructure. He holds an MBA from IIM Ahmedabad and a Computer Science degree from IIT Delhi. Rajesh founded KIDUART after seeing firsthand how outdated school administration technology was costing educators time that should be spent with students.", 
    quote: "Every hour we save a school administrator is an hour that goes back to what schools are actually for: educating children.", 
    linkedin: "#",
    img: "avatar-1.png"
  },
  "priya-nair": { 
    name: "Dr. Priya Nair", 
    title: "Chief Technology Officer & Co-founder", 
    yearsExperience: 15, 
    expertise: ["AI/ML Architecture", "Cloud Infrastructure", "Data Privacy", "EdTech Product Design"], 
    bio: "Dr. Priya Nair leads all technology development at KIDUART, including the KIDUORBIT AI platform. She holds a PhD in Machine Learning from IIT Bombay and spent 8 years in AI research before transitioning to product development. She has published 12 papers on AI applications in education and serves on the advisory board of three educational technology standards bodies. Her vision has shaped KIDUART's privacy-first approach to AI.", 
    quote: "AI in education must be designed with extreme care. We build every model with the question: how does this help a child's learning?", 
    linkedin: "#",
    img: "avatar-2.png"
  }
};

export default function LeaderProfile() {
  const { slug } = useParams();
  const leader = slug ? leadersData[slug] : null;

  if (!leader) {
    return (
      <PageTransition className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-brand-navy mb-6">Profile Not Found</h1>
        <p className="text-xl text-brand-navy/70 mb-8">The team member you are looking for doesn't exist.</p>
        <Link href="/about" className="px-8 py-4 rounded-full bg-brand-navy text-white font-bold inline-flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to About
        </Link>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="pt-20 pb-0">
      <section className="bg-brand-beige/30 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <Link href="/about" className="inline-flex items-center text-brand-teal font-bold mb-12 hover:underline tracking-wide uppercase text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to About
            </Link>
            
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center md:items-start">
              {/* Photo */}
              <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-brand-navy/10 relative">
                <img src={`/images/${leader.img}`} alt={leader.name} className="h-full w-full object-cover" />
              </div>

              {/* Header Info */}
              <div className="text-center md:text-left flex-grow">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-4">
                  {leader.name}
                </h1>
                <p className="text-2xl text-brand-teal font-bold mb-8">
                  {leader.title}
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                  <div className="px-5 py-2.5 bg-white rounded-full shadow-sm border border-brand-navy/5 flex items-center gap-2 font-bold text-brand-navy">
                    <Briefcase className="w-5 h-5 text-brand-yellow" />
                    {leader.yearsExperience}+ Years Experience
                  </div>
                  <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#0A66C2] hover:bg-[#0A66C2]/90 transition-colors rounded-full shadow-sm flex items-center gap-2 font-bold text-white">
                    <Linkedin className="w-5 h-5" /> LinkedIn
                  </a>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {leader.expertise.map((exp: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-brand-navy/5 text-brand-navy text-sm font-bold rounded-md">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-brand-navy mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-brand-orange" /> About {leader.name.split(' ')[0]}
            </h2>
            <div className="prose prose-lg prose-brand-navy max-w-none mb-16 leading-relaxed">
              <p>{leader.bio}</p>
            </div>
            
            <div className="bg-brand-navy rounded-[2rem] p-10 md:p-16 text-center relative mt-16 shadow-2xl">
              <Quote className="w-20 h-20 text-brand-teal/30 absolute top-8 left-8" />
              <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed italic relative z-10 font-medium">
                "{leader.quote}"
              </p>
            </div>

            <div className="mt-20 text-center border-t border-brand-navy/10 pt-16">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Want to see what {leader.name.split(' ')[0]} built?</h3>
              <Link href="/demo" className="px-8 py-4 rounded-full bg-brand-teal text-white font-bold text-lg hover:bg-brand-navy transition-colors inline-flex items-center gap-2 shadow-lg">
                Request a Demo <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
      
      <CtaSection />
    </PageTransition>
  );
}
