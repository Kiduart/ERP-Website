import Head from "next/head";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { HeroSection } from "@/components/ui/HeroSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Shield, Lock, FileKey, Eye, ShieldCheck, CheckCircle2, Server, Database } from "lucide-react";

export default function Security() {
  const pillars = [
    {
      title: "Data Encryption", // CONTENT: Updated pillar name to explicit control area
      icon: Database,
      desc: "All records are encrypted at rest using AES-256 and in transit via TLS 1.2+. Automated hourly backups run to geographically separate, secure infrastructure. If someone intercepted a backup file, it would be completely unreadable.", // CONTENT: Expanded encryption pillar with practical risk framing
      color: "text-brand-teal",
      bg: "bg-brand-teal/10"
    },
    {
      title: "Access Control",
      icon: Lock,
      desc: "Role-based access means staff, students, and parents each see only the data relevant to their role , nothing more. Single Sign-On (SSO) and Multi-Factor Authentication (MFA) add a second layer of identity verification on every login.", // CONTENT: Clarified access-control behavior
      color: "text-brand-orange",
      bg: "bg-brand-orange/10"
    },
    {
      title: "Regulatory Compliance", // CONTENT: Renamed compliance pillar for precision
      icon: FileKey,
      desc: "Built in alignment with India's Digital Personal Data Protection Act (DPDP Act, 2023) and GDPR , ensuring student data is processed lawfully, stored securely, and never sold to third parties. Indian schools operating internationally can demonstrate dual compliance on request.",
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
      <Head>
        <title>School Data Security | How KIDUART Protects Your Institution</title>
        <meta name="description" content="KIDUART uses AES-256 encryption, role-based access control, and automated cloud backups to protect student records, fee data, and staff information. Built in compliance with India's DPDP Act and GDPR." />
        <link rel="canonical" href="https://www.kiduart.com/security" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KIDUART" />
        <meta property="og:title" content="School Data Security | How KIDUART Protects Your Institution" />
        <meta property="og:description" content="KIDUART uses AES-256 encryption, role-based access control, and automated cloud backups to protect student records, fee data, and staff information. Built in compliance with India's DPDP Act and GDPR." />
        <meta property="og:url" content="https://www.kiduart.com/security" />
        <meta property="og:image" content="https://www.kiduart.com/images/banner/home-hero.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="School Data Security | How KIDUART Protects Your Institution" />
        <meta name="twitter:description" content="KIDUART uses AES-256 encryption, role-based access control, and automated cloud backups to protect student records, fee data, and staff information. Built in compliance with India's DPDP Act and GDPR." />
      </Head>
      {/* SEO-UPGRADE: Added Security page metadata and canonical URL */}
      <HeroSection
        title="Your school's data has a serious job to do. We take that seriously."
        subtitle="Student profiles, fee transactions, attendance records, exam results , every piece of data in KIDUART is encrypted in transit and at rest. Access is locked to role. Backups run every hour. Your data stays in India."
        // SEO-UPGRADE: Reframed hero with trust-first security messaging for schools
        image="/images/banner/security-hero.jpg"
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
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Security built into the foundation, not bolted on later</h2>
              {/* SEO-UPGRADE: Updated philosophy heading to concrete security positioning */}
              <p className="text-lg text-brand-navy/70 mb-6 leading-relaxed">
                Schools handle some of the most sensitive personal data that exists , records of minors, family financial information, medical details, disciplinary history. We did not treat security as a feature to add later. It is part of how KIDUART was architected from the first line of code.
              </p>
              <p className="text-lg text-brand-navy/70 mb-6 leading-relaxed">
                We test our security posture regularly through independent audits. Here is what that covers in practice:
              </p>
              {/* SEO-UPGRADE: Added pre-checklist proof line to strengthen security credibility */}
              <ul className="space-y-4">
                {['Independent penetration testing every six months', 'Continuous automated vulnerability scanning', 'Strict least-privilege access policies for internal staff', 'Sensitive fields protected with zero-knowledge architecture'].map((item, i) => (
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
                 <p className="text-brand-navy/70 mb-6">KIDUART runs on cloud infrastructure located in India. Your school's data does not cross borders. Automated failover keeps the platform available even during infrastructure incidents. Backups run hourly and restoration drills happen quarterly , so if something goes wrong, recovery is practiced and documented, not improvised.</p>
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
      <section className="py-24 bg-brand-beige/30 border-y border-brand-navy/5 relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#f77f00", size: 300, position: "top-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Eye", "ShieldCheck", "Lock"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Four layers of protection, working together</h2>
            <p className="text-brand-navy/70 text-lg">Security is not one thing. It is how encryption, access control, compliance, and active monitoring work as a system , each layer supporting the others.</p>
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
            <h2 className="text-3xl font-bold text-brand-navy mb-12">Compliance and certification standards we are working toward</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { title: "ISO 27001", subtitle: "In progress" },
                { title: "SOC 2 Type II", subtitle: "On roadmap" },
                { title: "GDPR", subtitle: "Compliant by design" },
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

      <CtaSection title="Questions about how we handle your school's data?" subtitle="Our team will walk you through encryption standards, access control architecture, and compliance posture on a call. No sales pressure , just clear answers." />
      {/* SEO-UPGRADE: Updated security CTA to lower friction and invite technical review */}
    </PageTransition>
  );
}
