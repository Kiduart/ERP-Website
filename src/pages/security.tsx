import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { pageSeo } from "@/lib/pageSeo";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { HeroSection } from "@/components/ui/HeroSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Shield, Lock, FileKey, Eye, ShieldCheck, CheckCircle2, Server, Database } from "lucide-react";

export default function Security() {
  const pillars = [
    {
      title: "Data Encryption",
      icon: Database,
      desc: "School records are encrypted at rest and protected in transit. Automated backups and recovery flows are built into the platform operations.",
      color: "text-brand-teal",
      bg: "bg-brand-teal/10"
    },
    {
      title: "Access Control",
      icon: Lock,
      desc: "Role-based access means staff, students, and parents each see only the data relevant to their role. Single sign-on and multi-factor authentication add extra login protection.",
      color: "text-brand-orange",
      bg: "bg-brand-orange/10"
    },
    {
      title: "School-Level Data Isolation",
      icon: FileKey,
      desc: "Each school runs with dedicated data isolation through tenant-linked databases. This school-level separation helps keep data boundaries clean and controlled.",
      color: "text-brand-yellow",
      bg: "bg-brand-yellow/20"
    },
    {
      title: "Active Monitoring",
      icon: Eye,
      desc: "Authentication events and system actions are logged, with monitoring controls built into the backend security layer.",
      color: "text-brand-navy",
      bg: "bg-brand-navy/10"
    }
  ];

  return (
    <PageTransition className="pt-20 pb-0">
      <PageSeoHead {...pageSeo.security} />
      <HeroSection
        title="Your school's data has a serious job to do. We treat it that way."
        subtitle="Student profiles, fee transactions, attendance records, and exam results are protected with encryption controls, role-based permissions, MFA support, audit logging, and school-level data separation."
        // SEO-UPGRADE: Reframed hero with trust-first security messaging for schools
        image="/images/banner/security-hero.jpg"
        layout="center"
      />

      {/* Philosophy */}
      <section className="section-space bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
          { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["ShieldCheck", "Lock"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Security built into the foundation, not bolted on later</h2>
              {/* SEO-UPGRADE: Updated philosophy heading to concrete security positioning */}
              <p className="text-lg text-brand-navy/70 mb-6 leading-relaxed">
                Schools handle some of the most sensitive personal data that exists , records of minors, family financial information, medical details, disciplinary history. We did not treat security as a feature to add later. It is part of how KIDUART was architected from the first line of code.
              </p>
              <p className="text-lg text-brand-navy/70 mb-6 leading-relaxed">
                Security controls are built into everyday operations. Here is what that looks like in practice:
              </p>
              {/* SEO-UPGRADE: Added pre-checklist proof line to strengthen security credibility */}
              <ul className="space-y-4">
                {["Role-based permissions by user type", "Multi-factor authentication support", "Audit logging for critical actions", "Dedicated data isolation per school"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal" />
                    <span className="font-medium text-brand-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>
            <SectionReveal delay={0.2} className="relative">
               <div className="bg-brand-beige/30 p-8 rounded-3xl border border-brand-navy/5 relative z-10">
                 <Server className="w-12 h-12 text-brand-navy mb-6" />
                 <h3 className="text-xl font-bold text-brand-navy mb-4">Where your data lives</h3>
                 <p className="text-brand-navy/70 mb-6">KIDUART is designed for schools that need reliable access controls, clean data separation, and recoverable operations. The focus is practical protection for real school workflows, not checkbox security claims.</p>
                 {/* SEO-UPGRADE: Replaced infra panel copy with sovereignty and resilience details */}
                 <div className="h-2 w-full bg-brand-navy/10 rounded-full overflow-hidden">
                   <div className="h-full bg-brand-teal w-full"></div>
                 </div>
               </div>
               <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-teal/5 rounded-3xl -z-10"></div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-space bg-brand-beige/30 border-y border-brand-navy/5 relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#f77f00", size: 300, position: "top-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Eye", "ShieldCheck", "Lock"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Four layers of protection working together</h2>
            <p className="text-brand-navy/70 text-lg">Security is not one switch. It is how encryption, access controls, isolation, and monitoring work together across daily operations.</p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1} className="bg-white rounded-2xl p-8 shadow-lg shadow-brand-navy/5 border border-brand-navy/5 flex gap-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${pillar.bg}`}>
                  <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{pillar.title}</h3>
                  <p className="text-brand-navy/70 leading-relaxed">{pillar.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security posture */}
      <section className="section-space bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#0c716b", size: 300, position: "bottom-left", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Award", "Star"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-brand-navy mb-12">How we describe security today</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { title: "Encryption Controls", subtitle: "Implemented in core workflows" },
                { title: "Role-Based Access", subtitle: "Implemented across user roles" },
                { title: "Audit Logging", subtitle: "Available for operational review" },
                { title: "School Data Isolation", subtitle: "Dedicated separation per school" }
              ].map((cert, i) => (
                <div key={i} className="interactive-card px-8 py-6 rounded-2xl border-2 border-brand-navy/10 bg-brand-beige/10 min-w-[200px]">
                  <ShieldCheck className="w-10 h-10 text-brand-teal mx-auto mb-4" />
                  <div className="font-bold text-brand-navy text-lg">{cert.title}</div>
                  <div className="text-sm text-brand-navy/60 font-medium">{cert.subtitle}</div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <CtaSection title="Questions about how we handle your school's data?" subtitle="Our team will walk you through encryption standards, access control architecture, and compliance posture on a call. No sales pressure , just clear answers." />
      {/* SEO-UPGRADE: Updated security CTA to lower friction and invite technical review */}
    </PageTransition>
  );
}
