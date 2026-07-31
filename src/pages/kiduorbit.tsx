import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { pageSeo } from "@/lib/pageSeo";
import { OrbitCore } from "@/components/product/OrbitCore";
import { OrbitSignalConsole } from "@/components/product/OrbitSignalConsole";
import { IntelligenceConsole } from "@/components/ui/IntelligenceConsole";
import { InView } from "@/components/ui/InView";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { onSmoothHashClick } from "@/lib/smoothScroll";
import { buildBreadcrumbSchema } from "@/lib/seoSchemas";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Database, ShieldCheck } from "lucide-react";

export default function Kiduorbit() {
  return (
    <PageTransition className="pt-20 pb-0">
      <PageSeoHead {...pageSeo.kiduorbit} />
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "KIDUORBIT AI", path: "/kiduorbit" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "KIDUORBIT AI",
            url: "https://www.kiduart.com/kiduorbit",
            description: pageSeo.kiduorbit.description,
            isPartOf: {
              "@type": "WebSite",
              name: "KIDUART",
              url: "https://www.kiduart.com",
            },
            about: {
              "@type": "SoftwareApplication",
              name: "KIDUORBIT",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/PreOrder",
              },
            },
          },
        ]}
      />

      {/* AI ops-room hero */}
      <section className="relative overflow-hidden bg-brand-navy">
        <div className="cta-aurora opacity-70" aria-hidden="true" />
        <div className="cta-grid" aria-hidden="true" />
        <div className="blog-signal-grid opacity-40" aria-hidden="true" />
        <img
          src="/images/blog/blog-kiduorbit-soon.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(0,48,73,0.92)_0%,rgba(0,48,73,0.88)_50%,rgba(12,113,107,0.45)_100%)]" />

        <div className="page-shell relative z-10 py-14 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <SectionReveal instant>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-brand-yellow">
                <span className="console-live-dot h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                KIDUORBIT · AI signal layer · Not launched
              </p>
              <h1 className="mt-6 text-[clamp(2.6rem,1.4rem+3.4vw,4.8rem)] font-bold leading-[0.92] tracking-tight text-brand-beige">
                The AI brain
                <span className="mt-1 block text-brand-yellow">
                  orbiting your ERP
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-brand-beige/80">
                Pattern intelligence on attendance, fees, and academics your
                teams already enter ranked review queues for staff, not chatbot
                theatre. Next phase of KIDUART. Building now.
              </p>
              <p className="console-trace mt-6 max-w-xl overflow-x-auto rounded-xl border border-white/12 bg-brand-navy/50 px-4 py-3 font-mono text-xs text-brand-beige/70 md:text-sm">
                <span className="text-brand-yellow">▸ </span>
                tenant.streams → orbit.models → staff.review_queue
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#orbit-console"
                  onClick={(e) => onSmoothHashClick(e)}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3.5 text-sm font-bold text-brand-navy transition-transform hover:-translate-y-0.5"
                >
                  Open the orbit console
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-brand-beige"
                >
                  Demo today&apos;s ERP first
                </Link>
              </div>
            </SectionReveal>

            <SectionReveal instant className="relative">
              <OrbitCore />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Live strip */}
      <section className="border-b border-brand-navy/10 bg-[#f4f7f8] py-6">
        <div className="page-shell flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-brand-navy/50">
            signal_status // no production switch yet
          </p>
          <div className="flex flex-wrap gap-2">
            {["Building", "Tenant-local", "Staff review", "Honest roadmap"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-brand-navy/10 bg-white px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-brand-navy"
                >
                  {chip}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Orbit console  unique AI console */}
      <section
        id="orbit-console"
        className="relative scroll-mt-28 overflow-hidden bg-brand-navy py-16 md:py-24"
      >
        <div className="cta-aurora opacity-50" aria-hidden="true" />
        <div className="page-shell relative z-10">
          <InView once className="motion-rise mb-12 max-w-2xl">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-yellow">
              Orbit console
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-beige md:text-4xl">
              Workflows we are wiring into the ring
            </h2>
            <p className="mt-4 text-brand-beige/70">
              Same console dialect as the homepage signal layer scoped to what
              KIDUORBIT will add. Building lanes pulse yellow; roadmap stays
              muted.
            </p>
          </InView>
          <OrbitSignalConsole />
        </div>
      </section>

      {/* What it is */}
      <section className="section-space bg-white">
        <div className="page-shell grid gap-12 lg:grid-cols-2 lg:gap-16">
          <InView once className="motion-rise">
            <p className="section-kicker">Why orbit</p>
            <h2 className="section-title mt-4 text-brand-navy">
              Shorter scan lists. People keep the judgement.
            </h2>
            <p className="mt-5 text-lg leading-8 text-brand-navy/[0.74]">
              Signal overload is the problem not lack of care. KIDUORBIT is
              designed to surface patterns in data you already record, hand
              staff a ranked review list, and leave decisions with people who
              know the child.
            </p>
            <Link
              href="/blog/kiduorbit-predictive-analytics"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-teal"
            >
              Full preview on the Signal Desk <ArrowRight className="h-4 w-4" />
            </Link>
          </InView>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.35rem] border border-brand-teal/25 bg-brand-teal/[0.06] p-6 sm:col-span-2">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-teal">
                Will be
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Intelligence inside ERP modules",
                  "Attendance · fees · academics patterns",
                  "Flags for authorised roles only",
                  "Human follow-up queues  not labels",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex gap-2 text-sm text-brand-navy/[0.8]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.35rem] border border-brand-navy/10 bg-[#f4f7f8] p-6 sm:col-span-2">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-navy/50">
                Will not be
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-navy/[0.72]">
                {[
                  "A product without the operational ERP underneath",
                  "Public at-risk boards or WhatsApp ranking lists",
                  "Training on your students for resale elsewhere",
                  "A switch you can flip in production today",
                ].map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-navy/30" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Homepage intelligence  live today */}
      <section className="relative overflow-hidden bg-brand-navy py-16 md:py-24">
        <div className="cta-grid opacity-80" aria-hidden="true" />
        <div className="page-shell relative z-10">
          <InView once className="motion-rise mb-12 max-w-2xl">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-yellow">
              Already on the platform
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-beige md:text-4xl">
              The signal layer you can explore today
            </h2>
            <p className="mt-4 text-brand-beige/70">
              Live models and building lanes from the homepage intelligence
              console the foundation KIDUORBIT extends. Ask on demo which rows
              are clickable in your tenant.
            </p>
          </InView>
          <IntelligenceConsole />
        </div>
      </section>

      {/* Data prerequisites */}
      <section className="section-space bg-[#f4f7f8]">
        <div className="page-shell">
          <InView once className="motion-rise mx-auto max-w-2xl text-center">
            <p className="section-kicker">Data ring</p>
            <h2 className="section-title mt-4 text-brand-navy">
              Nothing extra to type if the ERP is clean
            </h2>
          </InView>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Database,
                title: "Streams in",
                copy: "Attendance marks, fee ledger events, exam scores  produced by daily work inside KIDUART.",
              },
              {
                icon: ShieldCheck,
                title: "Stays in tenant",
                copy: "Models run on your instance. We do not sell student data or train outside models on it.",
              },
              {
                icon: CheckCircle2,
                title: "Noise in → noise out",
                copy: "Paper attendance or wrong fee heads will amplify. Solid ERP first; orbit second.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[1.35rem] border border-brand-navy/8 bg-white p-6"
              >
                <card.icon className="h-6 w-6 text-brand-teal" />
                <h3 className="mt-4 text-lg font-bold text-brand-navy">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-brand-navy/[0.72]">
                  {card.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics workflow */}
      <section className="section-space bg-white">
        <div className="page-shell max-w-3xl">
          <InView once className="motion-rise">
            <p className="section-kicker">Human loop</p>
            <h2 className="section-title mt-4 text-brand-navy">
              An alert is a start never a verdict
            </h2>
          </InView>
          <ol className="relative mt-10 space-y-0">
            <span
              aria-hidden="true"
              className="absolute bottom-4 left-[0.85rem] top-4 w-px bg-brand-navy/10"
            />
            {[
              "Orbit adds a student or account to a review list",
              "Assigned staff open profile context",
              "Qualitative facts first  talk, check, call if policy allows",
              "School decides support; flag cleared or monitored",
            ].map((step, i) => (
              <li key={step} className="relative flex gap-4 pb-6">
                <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-yellow/50 bg-brand-navy font-mono text-[0.65rem] font-bold text-brand-yellow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-0.5 text-sm leading-7 text-brand-navy/[0.8]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-4 rounded-[1.25rem] border border-brand-orange/20 bg-brand-orange/[0.06] p-5 text-sm leading-7 text-brand-navy/[0.78]">
            Never publish “at-risk” lists on staff WhatsApp or notify parents of
            algorithmic scores without human review. KIDUORBIT is for clarity
            not labelling children.
          </div>
        </div>
      </section>

      <CtaSection
        title="See today’s KIDUART  then an honest orbit preview"
        subtitle="Walk fees, attendance, and role panels first. Ask what is clickable now versus what ships in the KIDUORBIT phase."
      />
    </PageTransition>
  );
}
