import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { pageSeo } from "@/lib/pageSeo";
import { softwareApplicationSchema } from "@/lib/seoSchemas";
import type { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Link } from "wouter";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { HomeCurveHero } from "@/components/ui/CustomHeroes";
import type { AtlasArea } from "@/components/ui/CapabilityAtlas";
import type {
  FabricCategory,
  FabricStatus,
} from "@/components/ui/IntegrationFabric";
import type {
  PerimeterLayer,
  PerimeterScenario,
} from "@/components/ui/SecurityPerimeter";
import { AREA_NARRATIVES } from "@/data/productNarrative";
import {
  MATRIX_CATEGORIES,
  countSubModules,
  topModules,
} from "@/data/featureMatrix";
import integrationsData, {
  INTEGRATION_CATEGORIES,
} from "@/data/integrationsData";
import { SECURITY_LAYERS, SECURITY_SCENARIOS } from "@/data/securityPosture";
import { CONTACT_PHONE_E164 } from "@/lib/contact";
import { ArrowRight } from "lucide-react";

const SchoolJourney = dynamic(
  () => import("@/components/ui/SchoolJourney").then((m) => m.SchoolJourney),
  { ssr: true },
);
const SystemSwitchboard = dynamic(
  () =>
    import("@/components/ui/SystemSwitchboard").then(
      (m) => m.SystemSwitchboard,
    ),
  { ssr: true },
);
const CapabilityAtlas = dynamic(
  () =>
    import("@/components/ui/CapabilityAtlas").then((m) => m.CapabilityAtlas),
  { ssr: true },
);
const IntelligenceConsole = dynamic(
  () =>
    import("@/components/ui/IntelligenceConsole").then(
      (m) => m.IntelligenceConsole,
    ),
  { ssr: true },
);
const RolloutRunway = dynamic(
  () => import("@/components/ui/RolloutRunway").then((m) => m.RolloutRunway),
  { ssr: true },
);
const FoundingCharter = dynamic(
  () =>
    import("@/components/ui/FoundingCharter").then((m) => m.FoundingCharter),
  { ssr: true },
);
const VendorChecklistTeaser = dynamic(
  () =>
    import("@/components/ui/VendorChecklist").then(
      (m) => m.VendorChecklistTeaser,
    ),
  { ssr: true },
);
const IntegrationFabric = dynamic(
  () =>
    import("@/components/ui/IntegrationFabric").then(
      (m) => m.IntegrationFabric,
    ),
  { ssr: true },
);
const SecurityPerimeter = dynamic(
  () =>
    import("@/components/ui/SecurityPerimeter").then(
      (m) => m.SecurityPerimeter,
    ),
  { ssr: true },
);
const CtaSection = dynamic(
  () => import("@/components/ui/CtaSection").then((m) => m.CtaSection),
  { ssr: true },
);
const FloatingIcons = dynamic(
  () =>
    import("@/components/animations/FloatingIcons").then(
      (m) => m.FloatingIcons,
    ),
  { ssr: false },
);
const BackgroundBlobs = dynamic(
  () =>
    import("@/components/animations/BackgroundBlobs").then(
      (m) => m.BackgroundBlobs,
    ),
  { ssr: false },
);
type HomeProps = {
  areaCards: AtlasArea[];
  integrationBoard: FabricCategory[];
  integrationCounts: {
    live: number;
    guided: number;
    planned: number;
    total: number;
  };
  securityLayers: PerimeterLayer[];
  securityScenarios: PerimeterScenario[];
  securityStats: { layers: number; modules: number; capabilities: number };
};

export default function Home({
  areaCards,
  integrationBoard,
  integrationCounts,
  securityLayers,
  securityScenarios,
  securityStats,
}: HomeProps) {
  return (
    <>
      <PageSeoHead {...pageSeo.home} />
      <Head>
        <link
          rel="preload"
          as="image"
          type="image/avif"
          imageSrcSet="/images/banner/responsive/home-hero-640.avif 640w, /images/banner/responsive/home-hero-1024.avif 1024w, /images/banner/responsive/home-hero-1600.avif 1600w"
          imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1600px"
          fetchPriority="high"
        />
      </Head>
      <SchemaMarkup
        type="Organization"
        data={{
          name: "KIDUART",
          url: "https://www.kiduart.com",
          logo: "https://www.kiduart.com/images/logo.png",
          description:
            "School ERP software and school management system for Indian schools  admissions, fees, attendance, and parent communication",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Noida",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: `+${CONTACT_PHONE_E164}`,
            contactType: "customer service",
            email: "support@kiduart.com",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        }}
      />
      <SchemaMarkup data={softwareApplicationSchema} />

      <PageTransition instant className="pt-0 pb-0">
        <HomeCurveHero
          title="School ERP software for Indian schools  admissions to parent updates"
          subtitle="KIDUART is a cloud-based school management system that connects student records, online fee management, attendance tracking, exams, report cards, transport, library, HR, and parent communication in one school ERP."
          image="/images/banner/home-hero.jpeg"
          actions={
            <>
              <Link
                href="/demo"
                className="w-full sm:w-auto rounded-full bg-brand-navy px-8 py-4 text-center text-lg font-bold text-brand-beige shadow-xl shadow-brand-navy/20 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-teal"
              >
                Book a Free Demo
              </Link>
              <Link
                href="/features"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-brand-navy/25 bg-white px-8 py-4 text-lg font-bold text-brand-navy transition-all duration-300 hover:border-brand-teal hover:text-brand-teal"
              >
                Explore Modules <ArrowRight className="h-5 w-5" />
              </Link>
            </>
          }
        />

        <section className="section-space-tight relative overflow-hidden border-b border-brand-navy/5 bg-brand-beige/40">
          <div className="page-shell relative z-10">
            <SectionReveal className="mx-auto mb-10 max-w-3xl text-center">
              <div className="section-kicker">School operations journey</div>
              <h2 className="section-title mt-6 text-brand-navy">
                Follow the path your school runs every day
              </h2>
              <p className="section-copy mt-4 text-brand-navy/70">
                Pick any step to see what that module does. Each piece hands off
                to the next, so information entered once keeps moving through
                the school year.
              </p>
            </SectionReveal>

            <SectionReveal>
              <SchoolJourney />
            </SectionReveal>
          </div>
        </section>

        <section className="section-space-tight relative overflow-hidden border-y border-brand-navy/5 bg-white">
          <BackgroundBlobs
            blobs={[
              {
                color: "hsl(var(--blob-yellow))",
                size: 300,
                position: "center-left",
                opacity: 0.15,
              },
              {
                color: "hsl(var(--blob-teal))",
                size: 300,
                position: "center-right",
                opacity: 0.15,
              },
            ]}
          />
          <FloatingIcons icons={["Calculator", "BarChart2"]} count={4} />
          <div className="page-shell relative z-10">
            <SectionReveal className="mx-auto mb-12 max-w-3xl text-center">
              <div className="section-kicker">Built for daily school work</div>
              <h2 className="section-title mt-6 text-brand-navy">
                What changes when everything sits in one system
              </h2>
              <p className="section-copy mt-4 text-brand-navy/70">
                Flip the switch to see the same six jobs the way most schools
                run them today, and the way they run once records, fees,
                attendance and communication share one system.
              </p>
            </SectionReveal>
            <SectionReveal>
              <SystemSwitchboard />
            </SectionReveal>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-brand-beige/30">
          <BackgroundBlobs
            blobs={[
              {
                color: "hsl(var(--blob-orange))",
                size: 400,
                position: "top-right",
                opacity: 0.15,
              },
              {
                color: "hsl(var(--brand-navy))",
                size: 400,
                position: "bottom-left",
                opacity: 0.12,
              },
            ]}
          />
          <FloatingIcons
            icons={[
              "Users",
              "Calendar",
              "CreditCard",
              "MessageSquare",
              "PieChart",
            ]}
            count={5}
          />

          <div className="page-shell relative z-10">
            <SectionReveal className="mx-auto mb-12 max-w-4xl text-center">
              <div className="section-kicker">Capability atlas</div>
              <h2 className="section-title mt-6 text-brand-navy">
                Your whole school, mapped into working areas
              </h2>
              <p className="section-copy mt-4 text-brand-navy/70">
                Filter by the part of school you want to fix first. Each area
                shows how deep it runs in the live product modules and workflows
                your team already recognises.
              </p>
            </SectionReveal>

            <SectionReveal>
              <CapabilityAtlas areas={areaCards} />
            </SectionReveal>

            <SectionReveal className="mt-12 text-center">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-8 py-4 text-base font-bold text-brand-beige transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
              >
                See the full capability map <ArrowRight className="h-5 w-5" />
              </Link>
            </SectionReveal>
          </div>
        </section>

        <section
          className="section-space relative overflow-hidden bg-brand-navy text-white"
          style={{ color: "rgb(var(--hero-foreground-rgb))" }}
        >
          <BackgroundBlobs
            blobs={[
              {
                color: "hsl(var(--blob-yellow))",
                size: 400,
                position: "top-left",
                opacity: 0.15,
              },
              {
                color: "hsl(var(--blob-teal))",
                size: 400,
                position: "bottom-right",
                opacity: 0.15,
              },
            ]}
          />
          <FloatingIcons icons={["Brain", "Atom", "Lightbulb"]} count={4} />
          {/* Alpha lives in the colour itself so contrast checkers can blend it with the navy behind */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
            <div className="absolute right-[-5%] top-[-10%] h-96 w-96 rounded-full bg-[rgba(12,115,111,0.2)] blur-3xl" />
            <div className="absolute bottom-[-10%] left-[-5%] h-96 w-96 rounded-full bg-[rgba(245,129,0,0.2)] blur-3xl" />
          </div>

          <div className="page-shell relative z-10">
            <SectionReveal className="mx-auto mb-12 max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-yellow font-semibold text-sm mb-6 border border-white/20">
                The signal layer
              </div>
              <h2 className="section-title mb-4 text-brand-beige">
                Your school data is already watching. This is what it says.
              </h2>
              <p
                className="section-copy"
                style={{ color: "rgb(var(--hero-muted-rgb) / 0.7)" }}
              >
                Not a chatbot bolted on top. KIDUART runs trend, risk and
                scoring models over your own attendance, fee and exam records,
                then hands your team a short list worth acting on. Pick any
                workflow to see exactly what it reads, what it computes, and who
                gets the result.
              </p>
            </SectionReveal>

            <SectionReveal>
              <IntelligenceConsole />
            </SectionReveal>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-white">
          <BackgroundBlobs
            blobs={[
              {
                color: "#0c716b",
                size: 400,
                position: "top-left",
                opacity: 0.15,
              },
              {
                color: "#fcbf49",
                size: 400,
                position: "bottom-right",
                opacity: 0.15,
              },
            ]}
          />
          <FloatingIcons icons={["CheckCircle2", "Users", "Star"]} count={4} />
          <div className="page-shell relative z-10">
            <SectionReveal className="mx-auto mb-12 max-w-3xl text-center">
              <div className="section-kicker">The rollout runway</div>
              <h2 className="section-title mt-6 text-brand-navy">
                From your old spreadsheets to a live school, in five steps
              </h2>
              <p className="section-copy mt-4 text-brand-navy/70">
                No mid-term freeze and no blank screens. Every step below runs
                on tooling that already exists import templates that validate
                before they save, fee structures that clone across classes,
                permissions set per role, and a parallel run you sign off before
                the switch.
              </p>
            </SectionReveal>

            <SectionReveal>
              <RolloutRunway />
            </SectionReveal>

            <SectionReveal className="mx-auto mt-10 max-w-3xl rounded-2xl border border-brand-navy/[0.08] bg-brand-beige/30 px-6 py-5 text-center">
              <p className="text-sm leading-7 text-brand-navy/80">
                How long each step takes depends on how clean your existing
                records are, so we plan the dates with you instead of quoting an
                average we have not measured yet.{" "}
                <Link
                  href="/demo"
                  className="font-bold text-brand-teal underline underline-offset-4"
                >
                  Book a walkthrough
                </Link>{" "}
                and we will map your session structure on the call.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* <section className="py-24 bg-brand-beige/20 border-y border-brand-navy/5 relative overflow-hidden">
          <BackgroundBlobs blobs={[{ color: "#f77f00", size: 320, position: "center-right", opacity: 0.14 }]} />
          <FloatingIcons icons={["LayoutDashboard", "BarChart2", "MonitorSmartphone"]} count={4} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-4">Demo Screenshots</h2>
              <p className="text-lg text-brand-navy/70 max-w-3xl mx-auto">
                A quick preview of how the platform helps school teams work through dashboards, reports, and daily operational tasks.
              </p>
            </SectionReveal>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <SectionReveal className="rounded-[2rem] border border-brand-navy/10 bg-brand-navy p-6 shadow-2xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-brand-yellow">Admin Dashboard</p>
                      <h3 className="mt-2 text-2xl font-bold text-white">School overview at a glance</h3>
                    </div>
                    <div className="rounded-full bg-brand-teal/20 px-4 py-2 text-sm font-semibold text-brand-beige">Live Overview</div>
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {[
                      { label: "Today's Attendance", value: "94.8%" },
                      { label: "Pending Fees", value: "128 Accounts" },
                      { label: "Upcoming Exams", value: "12 Scheduled" },
                    ].map((card) => (
                      <div key={card.label} className="rounded-2xl bg-white p-5 text-brand-navy">
                        <p className="text-sm text-brand-navy/55">{card.label}</p>
                        <p className="mt-3 text-2xl font-extrabold">{card.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-2xl bg-white/10 p-5">
                      <p className="text-sm text-white/60">Operational Snapshot</p>
                      <div className="mt-5 h-40 rounded-2xl bg-[linear-gradient(180deg,rgba(252,191,73,0.18),rgba(12,113,107,0.05))] p-4">
                        <div className="grid h-full grid-cols-6 items-end gap-2">
                          {[40, 68, 55, 82, 74, 92].map((value, idx) => (
                            <div key={idx} className="rounded-t-full bg-brand-yellow/90" style={{ height: `${value}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white p-5 text-brand-navy">
                      <p className="text-sm text-brand-navy/55">Today's Priorities</p>
                      <div className="mt-4 space-y-3">
                        {["Admission follow-ups", "Fee reminder review", "Exam schedule approval", "Parent circular draft"].map((item) => (
                          <div key={item} className="flex items-center gap-3 rounded-xl bg-brand-beige/40 px-4 py-3">
                            <CheckCircle2 className="h-4 w-4 text-brand-teal" />
                            <span className="text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <div className="grid gap-8">
                <SectionReveal className="rounded-[2rem] border border-brand-navy/10 bg-white p-7 shadow-lg">
                  <p className="text-sm uppercase tracking-[0.25em] text-brand-teal">Finance View</p>
                  <h3 className="mt-3 text-2xl font-bold text-brand-navy">Fee collection status</h3>
                  <p className="mt-3 text-brand-navy/70">Track due fees, reminders, and collection progress without switching tools.</p>
                  <div className="mt-6 space-y-3">
                    {[
                      { label: "Collected", value: "78%" },
                      { label: "Due This Week", value: "54 Accounts" },
                      { label: "High-Risk Delays", value: "12 Alerts" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between rounded-2xl bg-brand-beige/20 px-4 py-4">
                        <span className="text-brand-navy/70">{row.label}</span>
                        <span className="font-bold text-brand-navy">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </SectionReveal>

                <SectionReveal className="rounded-[2rem] border border-brand-navy/10 bg-white p-7 shadow-lg">
                  <p className="text-sm uppercase tracking-[0.25em] text-brand-orange-ink">Teacher View</p>
                  <h3 className="mt-3 text-2xl font-bold text-brand-navy">Daily classroom workflow</h3>
                  <p className="mt-3 text-brand-navy/70">Manage attendance, class updates, and student performance from one clean interface.</p>
                  <div className="mt-6 rounded-2xl bg-brand-navy px-5 py-6 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/60">Class 8A</span>
                      <span className="text-sm text-brand-yellow">28 / 30 Present</span>
                    </div>
                    <div className="mt-4 grid gap-3">
                      {["Attendance marked", "Homework shared", "Parent note drafted"].map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
                          <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>
        </section> */}

        <section className="section-space bg-white relative overflow-hidden">
          <BackgroundBlobs
            blobs={[
              {
                color: "#0c716b",
                size: 400,
                position: "top-left",
                opacity: 0.15,
              },
              {
                color: "#fcbf49",
                size: 400,
                position: "bottom-right",
                opacity: 0.15,
              },
            ]}
          />
          <FloatingIcons icons={["Heart", "Star", "Users"]} count={4} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionReveal className="mx-auto mb-12 max-w-3xl text-center">
              <div className="section-kicker">Proof, not adjectives</div>
              <h2 className="section-title mt-6 text-brand-navy">
                No testimonials yet and we are not going to invent them
              </h2>
              <p className="section-copy mt-4 text-brand-navy/70">
                KIDUART is new to Indian schools. Rather than fill this space
                with stock photos and quotes nobody said, here is the charter we
                sign with our first schools, and the exact format their stories
                will take once they are real and verified.
              </p>
            </SectionReveal>

            <SectionReveal>
              <FoundingCharter />
            </SectionReveal>

            <SectionReveal className="mt-10">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  {
                    label: "Security controls, layer by layer",
                    href: "/security",
                  },
                  {
                    label: "What we do with school data",
                    href: "/privacy-policy",
                  },
                  {
                    label: "Every module area, in the open",
                    href: "/features",
                  },
                ].map((proof) => (
                  <Link
                    key={proof.href}
                    href={proof.href}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-navy/12 bg-brand-beige/30 px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                  >
                    {proof.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        <section
          className="section-space-tight relative overflow-hidden border-y border-white/10 bg-brand-navy"
          style={{ color: "#fcf6d3" }}
        >
          <BackgroundBlobs
            blobs={[
              {
                color: "#fcbf49",
                size: 360,
                position: "top-left",
                opacity: 0.14,
              },
              {
                color: "#0c716b",
                size: 360,
                position: "bottom-right",
                opacity: 0.14,
              },
            ]}
          />
          <FloatingIcons
            icons={["CheckCircle2", "ShieldCheck", "Users"]}
            count={4}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionReveal className="mx-auto mb-9 max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-brand-yellow">
                The buyer&apos;s due-diligence list
              </div>
              <h2 className="section-title mb-4 mt-6 text-brand-beige">
                Three questions that reveal more than a polished demo
              </h2>
              <p
                className="section-copy"
                style={{ color: "rgb(var(--hero-muted-rgb) / 0.75)" }}
              >
                Test the questions here, then take the complete nine-question
                checklist into every school ERP call. It covers payment
                ownership, data isolation, exports, privacy, permissions, audit
                trails and whether the screens in a demo are actually live.
              </p>
            </SectionReveal>

            <SectionReveal>
              <VendorChecklistTeaser />
            </SectionReveal>
          </div>
        </section>

        <section className="section-space relative overflow-hidden border-y border-brand-navy/5 bg-brand-beige/25">
          <BackgroundBlobs
            blobs={[
              {
                color: "#0c716b",
                size: 340,
                position: "top-left",
                opacity: 0.12,
              },
              {
                color: "#f77f00",
                size: 340,
                position: "bottom-right",
                opacity: 0.12,
              },
            ]}
          />
          <div className="page-shell relative z-10">
            <SectionReveal className="mx-auto mb-10 max-w-3xl text-center">
              <div className="section-kicker">The connector board</div>
              <h2 className="section-title mt-6 text-brand-navy">
                Keep the tools you pay for. Stop retyping between them.
              </h2>
              <p className="section-copy mt-4 text-brand-navy/70">
                Your payment gateway, your SMS sender ID, your WhatsApp number,
                your Google or Microsoft accounts they stay yours. KIDUART wires
                them into the record they belong to, and marks honestly which
                ones are live today, which need a setup call, and which are
                still roadmap.
              </p>
            </SectionReveal>

            <SectionReveal>
              <IntegrationFabric
                categories={integrationBoard}
                counts={integrationCounts}
              />
            </SectionReveal>

            <SectionReveal className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/integrations"
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-brand-beige transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
              >
                See all {integrationCounts.total} integrations{" "}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/integrations/api-docs"
                className="inline-flex items-center gap-2 rounded-full border border-brand-navy/[0.15] bg-white px-6 py-3 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
              >
                Read the API reference
              </Link>
            </SectionReveal>
          </div>
        </section>

        <section className="section-space-tight relative overflow-hidden border-t border-brand-navy/5 bg-white">
          <BackgroundBlobs
            blobs={[
              {
                color: "#0c716b",
                size: 320,
                position: "top-left",
                opacity: 0.1,
              },
              {
                color: "#f77f00",
                size: 300,
                position: "bottom-right",
                opacity: 0.1,
              },
            ]}
          />
          <FloatingIcons icons={["ShieldCheck", "Lock", "Eye"]} count={4} />
          <div className="page-shell relative z-10">
            <SectionReveal className="mx-auto mb-9 max-w-3xl text-center">
              <div className="section-kicker">
                Security, tested against real situations
              </div>
              <h2 className="section-title mt-6 text-brand-navy">
                Ask what happens when it goes wrong, not whether we say
                &ldquo;bank-grade&rdquo;
              </h2>
              <p className="section-copy mt-4 text-brand-navy/70">
                Try three real situations here. The complete security page
                documents all six defence layers, data-handling rules, honest
                boundaries and the controls behind each claim.
              </p>
            </SectionReveal>

            <SectionReveal>
              <SecurityPerimeter
                layers={securityLayers}
                scenarios={securityScenarios}
                stats={securityStats}
              />
            </SectionReveal>

            <SectionReveal className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/security"
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-brand-beige transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
              >
                Open the complete security review{" "}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-2 rounded-full border border-brand-navy/[0.15] bg-white px-6 py-3 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
              >
                What we do with school data
              </Link>
            </SectionReveal>
          </div>
        </section>

        <CtaSection
          title="Walk the full school journey in a live demo"
          subtitle="See student records, fees, attendance, exams, transport, library, HR, and parent updates working together. Ask about your fee book, class structure, and staff roles."
        />
      </PageTransition>
    </>
  );
}

const STATUS_ORDER: Record<FabricStatus, number> = {
  live: 0,
  guided: 1,
  planned: 2,
};

const securityArea = MATRIX_CATEGORIES.find(
  (category) => category.slug === "security-and-authentication",
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: {
    integrationBoard: INTEGRATION_CATEGORIES.map((category) => ({
      slug: category.slug,
      title: category.title,
      icon: category.icon,
      blurb: category.blurb,
      connectors: Object.entries(integrationsData)
        .filter(([, entry]) => entry.category === category.title)
        .sort(([, a], [, b]) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status])
        .map(([slug, entry]) => ({
          slug,
          name: entry.name,
          description: entry.description,
          icon: entry.icon,
          status: entry.status,
          providers: entry.providers.slice(0, 3),
        })),
    })).filter((category) => category.connectors.length > 0),
    integrationCounts: {
      live: Object.values(integrationsData).filter(
        (entry) => entry.status === "live",
      ).length,
      guided: Object.values(integrationsData).filter(
        (entry) => entry.status === "guided",
      ).length,
      planned: Object.values(integrationsData).filter(
        (entry) => entry.status === "planned",
      ).length,
      total: Object.keys(integrationsData).length,
    },
    securityLayers: SECURITY_LAYERS.map((layer) => ({
      id: layer.id,
      order: layer.order,
      title: layer.title,
      short: layer.short,
      promise: layer.promise,
      module: layer.module,
      icon: layer.icon,
    })),
    securityScenarios: SECURITY_SCENARIOS.slice(0, 3),
    securityStats: {
      layers: SECURITY_LAYERS.length,
      modules: securityArea?.moduleCount ?? 0,
      capabilities: securityArea?.featureCount ?? 0,
    },
    areaCards: MATRIX_CATEGORIES.map((category) => {
      const narrative = AREA_NARRATIVES.find(
        (entry) => entry.slug === category.slug,
      );
      return {
        slug: category.slug,
        label: narrative?.label ?? category.name,
        stage: narrative?.stage ?? "",
        summary: narrative?.summary ?? "",
        icon: narrative?.icon ?? "Layers",
        accent: narrative?.accent ?? "teal",
        moduleCount: category.moduleCount,
        subModuleCount: countSubModules(category),
        featureCount: category.featureCount,
        topModules: topModules(category, 3).map((entry) => entry.name),
      };
    }),
  },
});
