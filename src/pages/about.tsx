import Head from "next/head";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { ImageBackdropHero } from "@/components/ui/CustomHeroes";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, BellRing, Lightbulb, Linkedin, Sparkles, Target, Trophy } from "lucide-react";
import Link from "next/link";
import type { GetStaticProps } from "next";
import { MATRIX_TOTALS } from "@/data/featureMatrix";
import { PRODUCT_PANELS } from "@/data/productPanels";
import { PRODUCT_PERSONAS } from "@/data/productPersonas";

type AboutProps = {
  totals: typeof MATRIX_TOTALS;
  panelCount: number;
  personaCount: number;
};

export default function About({ totals, panelCount, personaCount }: AboutProps) {
  const pillars = [
    {
      title: "Our Mission",
      copy: "To give schools in India , not just the large, well-funded ones , the kind of operational clarity that used to require a full IT department. Good software should not be a privilege.", // CONTENT: Updated mission copy with accessibility focus
      icon: Target,
      tone: "bg-white",
      iconWrap: "bg-brand-orange/10",
      iconColor: "text-brand-orange",
    },
    {
      title: "Our Vision",
      copy: "A school where a class teacher starts the morning knowing exactly who needs a call, where the finance team closes the month without a single missed payment, and where parents feel kept in the loop , not chased for information.", // CONTENT: Rewrote vision with role-specific clarity
      icon: Lightbulb,
      tone: "bg-brand-teal/10",
      iconWrap: "bg-white/75",
      iconColor: "text-brand-teal",
    },
  ];

  return (
    <PageTransition className="pt-20 pb-0">
      <Head>
        <title>About KIDUART | School ERP Built for Indian Schools</title>
        <meta name="description" content="KIDUART is an Indian school ERP company based in Noida, Uttar Pradesh. We build software that makes admissions, fee management, attendance, and daily school operations simpler for every team." />
        {/* CONTENT: Replaced About metadata with updated positioning and locality */}
        <link rel="canonical" href="https://www.kiduart.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KIDUART" />
        <meta property="og:title" content="About KIDUART | School ERP Built for Indian Schools" />
        <meta property="og:description" content="KIDUART is an Indian school ERP company based in Noida, Uttar Pradesh. We build software that makes admissions, fee management, attendance, and daily school operations simpler for every team." />
        <meta property="og:url" content="https://www.kiduart.com/about" />
        <meta property="og:image" content="https://www.kiduart.com/images/banner/home-hero.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About KIDUART | School ERP Built for Indian Schools" />
        <meta name="twitter:description" content="KIDUART is an Indian school ERP company based in Noida, Uttar Pradesh. We build software that makes admissions, fee management, attendance, and daily school operations simpler for every team." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "KIDUART",
            "url": "https://www.kiduart.com",
            "logo": "https://www.kiduart.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-92175-34128",
              "contactType": "customer support",
              "areaServed": "IN",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Noida",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "description": "KIDUART builds school ERP software for Indian educational institutions, covering admissions, fees, attendance, exams, and parent communication."
          })}}
        />
      </Head>
      {/* SEO-UPGRADE: Added About page metadata, canonical tag, and Organization JSON-LD */}
      <ImageBackdropHero
        eyebrow="Our story"
        title="We built KIDUART because school admin should not feel this hard."
        subtitle="Every week, school administrators across India spend hours fixing fee records in spreadsheets, sending attendance updates on WhatsApp, and manually chasing parents for documents. We thought there had to be a better way. Turns out, there is."
        // SEO-UPGRADE: Repositioned About hero to reflect founder story and school pain points
        image="/about.jpg"
        fullHeight={true}
        overlayClassName="bg-[linear-gradient(135deg,rgba(250,248,240,0.82),rgba(250,248,240,0.58))]"
        floatingIcons={["Sparkles", "Lightbulb", "Users"]}
        actions={(
          <>
            <Link
              href="/demo"
              className="rounded-full bg-brand-navy px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
            >
              Request Demo
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-brand-navy/[0.14] bg-white/70 px-8 py-4 text-base font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
            >
              Talk to Us
            </Link>
          </>
        )}
      />

      <section className="section-space relative overflow-hidden bg-white">
        <BackgroundBlobs
          blobs={[
            { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
            { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 },
          ]}
        />
        <FloatingIcons icons={["Lightbulb", "Brain"]} count={4} />
        <div className="page-shell relative z-10">
          <SectionReveal className="mx-auto mb-16 max-w-3xl text-center">
            <div className="section-kicker">Where we started</div>
            <h2 className="section-title mt-6 text-brand-navy">Why we built KIDUART</h2>
            <p className="section-copy mt-4 text-brand-navy/70">
              We spent time talking to school administrators in Uttar Pradesh. The same frustrations came up in every conversation , fee data scattered across five Excel files, attendance marked on paper and copied into a register at end of day, parents calling the front desk for information that no one had time to look up. KIDUART came from one conviction: a school running on the right software is a school where staff can focus on students, not paperwork.
            </p>
            {/* SEO-UPGRADE: Replaced placeholder Why We Exist copy with India-grounded narrative */}
          </SectionReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <SectionReveal key={pillar.title} delay={index * 0.1}>
                <div className={`flex h-full flex-col rounded-[2rem] border border-brand-navy/[0.06] p-10 shadow-lg shadow-brand-navy/5 ${pillar.tone}`}>
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${pillar.iconWrap}`}>
                    <pillar.icon className={`h-7 w-7 ${pillar.iconColor}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-navy">{pillar.title}</h3>
                  <p className="mt-5 text-lg leading-8 text-brand-navy/70">{pillar.copy}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-brand-navy/5 bg-brand-beige/20">
        <div className="page-shell">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">The team behind KIDUART</h2>
            {/* SEO-UPGRADE: Updated leadership heading to accurate near-term expectation */}
            <p className="mt-3 text-lg text-brand-navy/70">KIDUART is built by a founding team with backgrounds in education technology, school operations, and product engineering. We are based in Noida, Uttar Pradesh, and work directly with school teams to shape the platform in every development cycle. Individual profiles will be published here soon; until then, follow us on LinkedIn for company updates.</p>
            {/* SEO-UPGRADE: Replaced leadership placeholder paragraph with trust-building company context */}
          </SectionReveal>

          <div className="mx-auto grid max-w-5xl gap-12">
            <div className="grid gap-4 sm:grid-cols-2">
                <SectionReveal delay={0.14}>
                  <div className="text-center">
                    {/* rounded-[2rem] border border-brand-navy/[0.08] bg-white p-8 text-center shadow-lg shadow-brand-navy/5 */}
                    <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-full border-4 border-white bg-brand-navy/[0.04] shadow-xl">
                      <Skeleton className="h-full w-full rounded-full bg-brand-navy/10" />
                    </div>
                    <Skeleton className="mx-auto h-6 w-40 rounded-full bg-brand-navy/10" />
                    <Skeleton className="mx-auto mt-3 h-4 w-52 rounded-full bg-brand-teal/15" />
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-beige px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange-ink">
                      <Sparkles className="h-3.5 w-3.5" />
                      Profile coming soon
                    </div>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="text-center">
                    {/* rounded-[2rem] border border-brand-navy/[0.08] bg-white p-8 text-center shadow-lg shadow-brand-navy/5 */}
                    <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-full border-4 border-white bg-brand-navy/[0.04] shadow-xl">
                      <Skeleton className="h-full w-full rounded-full bg-brand-navy/10" />
                    </div>
                    <Skeleton className="mx-auto h-6 w-40 rounded-full bg-brand-navy/10" />
                    <Skeleton className="mx-auto mt-3 h-4 w-52 rounded-full bg-brand-teal/15" />
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-beige px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange-ink">
                      <Sparkles className="h-3.5 w-3.5" />
                      Profile coming soon
                    </div>
                  </div>
                </SectionReveal>
              </div>

            <SectionReveal delay={0.14}>
              <div className="flex h-full flex-col justify-between text-center rounded-[2rem] border border-brand-teal/15 bg-white p-8 shadow-lg shadow-brand-navy/5">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal">
                    <BellRing className="h-4 w-4" />
                    Stay in the loop
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-brand-navy">Stay close to what we are building</h3>
                  <p className="mt-4 text-base leading-7 text-brand-navy/[0.68]">
                    We share product updates, school management insights, and company milestones on LinkedIn. Follow KIDUART to get early looks at what is coming next.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
                  >
                    <Linkedin className="h-4 w-4" />
                    Follow on LinkedIn
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-navy/[0.12] bg-brand-beige/60 px-6 py-3.5 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                  >
                    Subscribe for updates
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="page-shell">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <div className="section-kicker">What we have built so far</div>
            <h2 className="section-title mt-6 text-brand-navy">
              {totals.modules} modules, {totals.features.toLocaleString("en-IN")} features, one school record
            </h2>
            <p className="section-copy mt-4 text-brand-navy/70">
              We keep a single capability matrix as the source of truth for the product, and this website is generated
              from it. That is why the numbers on our features, platform and pricing pages agree with each other — they
              come from the same file our engineering team maintains, not from a slide deck.
            </p>
          </SectionReveal>

          <SectionReveal className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { value: totals.categories, label: "Module areas", href: "/features" },
              { value: totals.modules, label: "Modules", href: "/features" },
              { value: totals.subModules, label: "Sub-modules", href: "/features" },
              { value: totals.features.toLocaleString("en-IN"), label: "Features", href: "/features" },
              { value: panelCount, label: "Role panels", href: "/platform" },
              { value: personaCount, label: "Role solutions", href: "/solutions" },
            ].map((stat) => (
              <Link
                key={stat.label}
                href={stat.href}
                className="rounded-2xl border border-brand-navy/[0.1] bg-brand-beige/20 px-4 py-5 text-center transition-colors hover:border-brand-teal/40"
              >
                <div className="text-2xl font-extrabold text-brand-navy">{stat.value}</div>
                <div className="mt-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-navy/[0.72]">
                  {stat.label}
                </div>
              </Link>
            ))}
          </SectionReveal>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                title: "We build around roles, not screens",
                copy: "Ten panels ship with the product because a class teacher, an accountant and a trustee need different things from the same record. Short training is a design outcome, not a promise.",
              },
              {
                title: "We do not publish numbers we cannot back",
                copy: "You will not find invented adoption statistics or unverified time savings on this site. Where a claim needs live school data, we mark it coming soon until we have it.",
              },
              {
                title: "We build for Indian school reality",
                copy: "Fee heads and concessions, board-specific grading, transfer certificates, transport routes, SMS for parents without smartphones — the details that decide whether software survives a real school year.",
              },
            ].map((item) => (
              <SectionReveal
                key={item.title}
                className="rounded-[1.75rem] border border-brand-navy/[0.08] bg-brand-beige/20 p-7"
              >
                <Trophy className="h-8 w-8 text-brand-yellow" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-navy/[0.76]">{item.copy}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Ready to see it for your school?" subtitle="Book a live walkthrough tailored to your school's size, structure, and the specific problems you want to solve." />
      {/* SEO-UPGRADE: Updated About page CTA to demo-focused action and clarity */}
    </PageTransition>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => ({
  props: {
    totals: MATRIX_TOTALS,
    panelCount: PRODUCT_PANELS.length,
    personaCount: PRODUCT_PERSONAS.length,
  },
});
