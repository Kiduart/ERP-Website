import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { HeroSection } from "@/components/ui/HeroSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Shield, Lock, FileKey, Eye, ShieldCheck, CheckCircle2, Server, Database } from "lucide-react";

export default function Security() {
  const pillars = [
    {
      title: "Data Protection",
      icon: Database,
      desc: "All data is encrypted at rest using AES-256 and in transit via TLS 1.2+. We perform automated hourly backups to geographically distributed, secure data centers.",
      color: "text-brand-teal",
      bg: "bg-brand-teal/10"
    },
    {
      title: "Access Control",
      icon: Lock,
      desc: "Granular role-based access control (RBAC) ensures staff, students, and parents only access data relevant to them. Supports Single Sign-On (SSO) and Multi-Factor Authentication (MFA).",
      color: "text-brand-orange",
      bg: "bg-brand-orange/10"
    },
    {
      title: "Global Compliance",
      icon: FileKey,
      desc: "Built to meet rigorous international standards. Fully compliant with GDPR, FERPA, COPPA, and CCPA, ensuring student privacy is always protected.",
      color: "text-brand-yellow",
      bg: "bg-brand-yellow/20"
    },
    {
      title: "Active Monitoring",
      icon: Eye,
      desc: "24/7 security monitoring with AI-driven threat detection. Suspicious activities are automatically blocked, and audit logs are maintained for all system actions.",
      color: "text-brand-navy",
      bg: "bg-brand-navy/10"
    }
  ];

  return (
    <PageTransition className="pt-20 pb-0 tooo">
      <HeroSection
        title="Protecting School and Student Data"
        subtitle="We treat your institution's data with bank-grade security. Safety, privacy, and compliance are built into the foundation of KIDUART ERP."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        layout="center"
      />

      {/* Philosophy */}
      <section className="py-24 bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
          { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["ShieldCheck", "Lock"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Security by Design, Not as an Afterthought</h2>
              <p className="text-lg text-brand-navy/70 mb-6 leading-relaxed">
                Educational institutions are prime targets for cyber threats. That's why we've engineered KIDUART ERP from the ground up with a security-first mindset. 
                We don't just secure your data; we proactively monitor and adapt to the evolving threat landscape.
              </p>
              <ul className="space-y-4">
                {['Annual third-party penetration testing', 'Continuous vulnerability scanning', 'Strict internal access policies', 'Zero-knowledge architecture for sensitive fields'].map((item, i) => (
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
                 <h3 className="text-xl font-bold text-brand-navy mb-4">Infrastructure Security</h3>
                 <p className="text-brand-navy/70 mb-6">Hosted on enterprise-grade AWS infrastructure with 99.99% guaranteed uptime and comprehensive DDoS protection.</p>
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
      <section className="py-24 bg-brand-beige/30 border-y border-brand-navy/5 relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#f77f00", size: 300, position: "top-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Eye", "ShieldCheck", "Lock"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Security Pillars</h2>
            <p className="text-brand-navy/70 text-lg">Comprehensive protection across every layer.</p>
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

      {/* Certifications */}
      <section className="py-24 bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#0c716b", size: 300, position: "bottom-left", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Award", "Star"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-brand-navy mb-12">Verified & Certified</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { title: "ISO 27001", subtitle: "Information Security" },
                { title: "SOC 2 Type II", subtitle: "Audited & Verified" },
                { title: "GDPR", subtitle: "Privacy Compliant" },
                { title: "FERPA", subtitle: "Education Standards" }
              ].map((cert, i) => (
                <div key={i} className="px-8 py-6 rounded-2xl border-2 border-brand-navy/10 bg-brand-beige/10 min-w-[200px]">
                  <ShieldCheck className="w-10 h-10 text-brand-teal mx-auto mb-4" />
                  <div className="font-bold text-brand-navy text-lg">{cert.title}</div>
                  <div className="text-sm text-brand-navy/60 font-medium">{cert.subtitle}</div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <CtaSection title="Ready for secure school management?" subtitle="Schedule a technical deep dive with our security team." />
    </PageTransition>
  );
}
