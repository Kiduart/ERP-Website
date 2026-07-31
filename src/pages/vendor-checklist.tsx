import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { HeroSection } from "@/components/ui/HeroSection";
import { VendorChecklist } from "@/components/ui/VendorChecklist";
import { VENDOR_QUESTIONS } from "@/data/vendorQuestions";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";

export default function VendorChecklistPage() {
  return (
    <PageTransition className="pb-0 pt-20">
      <PageSeoHead
        title="School ERP Vendor Evaluation Checklist | KIDUART"
        description="Use these nine due-diligence questions when comparing school ERP vendors in India. Check payment ownership, data isolation, exports, permissions, audit logs, privacy, security and real feature availability."
        path="/vendor-checklist"
        keywords="school ERP vendor checklist, school management software comparison, ERP due diligence questions, compare school ERP India, school data security checklist"
      />

      <HeroSection
        title="Do not compare school ERP demos. Compare the answers vendors give under pressure."
        subtitle={`Take these ${VENDOR_QUESTIONS.length} questions into every school ERP call. Each one exposes a place where ownership, security, privacy, lock-in or roadmap claims usually become unclear.`}
        image="/images/banner/security-hero.jpg"
        layout="center"
      />

      <section className="section-space relative overflow-hidden bg-brand-navy text-brand-beige">
        <BackgroundBlobs
          blobs={[
            { color: "#fcbf49", size: 380, position: "top-left", opacity: 0.13 },
            { color: "#0c716b", size: 380, position: "bottom-right", opacity: 0.15 },
          ]}
        />
        <FloatingIcons icons={["CheckCircle2", "ShieldCheck", "Users"]} count={4} />
        <div className="page-shell relative z-10">
          <SectionReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-yellow">
              Buyer&apos;s due-diligence checklist
            </p>
            <h2 className="mt-5 text-3xl font-bold text-brand-beige md:text-4xl">
              Ask the same list to us and every vendor you shortlist
            </h2>
            <p className="mt-4 text-base leading-8 text-brand-beige/[0.8]">
              A vendor-written comparison table will always end with that vendor winning. This page gives
              your school one consistent test instead. Tick the questions that matter, compare the answers,
              and follow the evidence links rather than accepting adjectives.
            </p>
          </SectionReveal>

          <SectionReveal>
            <VendorChecklist />
          </SectionReveal>
        </div>
      </section>

      <CtaSection
        title="Put KIDUART through the same checklist"
        subtitle="Bring your principal, accountant or IT reviewer. We will answer each question on screen and say plainly where a control is optional, guided or still on the roadmap."
      />
    </PageTransition>
  );
}
