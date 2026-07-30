import type { GetStaticProps } from "next";
import { Link } from "wouter";
import { ArrowRight, BrainCircuit, Sparkles } from "lucide-react";
import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { pageSeo } from "@/lib/pageSeo";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/seoSchemas";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CircleShowcaseHero } from "@/components/ui/CustomHeroes";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/contact";
import { CapabilityMap, type CapabilityArea } from "@/components/product/CapabilityMap";
import { MATRIX_CATEGORIES, MATRIX_TOTALS, countSubModules, topModules } from "@/data/featureMatrix";
import { AREA_NARRATIVE_BY_SLUG } from "@/data/productNarrative";
import { PRODUCT_PANELS } from "@/data/productPanels";

type FeaturesPageProps = {
  areas: CapabilityArea[];
  totals: typeof MATRIX_TOTALS;
  panels: { slug: string; shortLabel: string }[];
};

const aiAssistantPoints = [
  "Timetable generation that avoids teacher conflicts and room clashes",
  "Attendance patterns flagged before they become a term-long problem",
  "Draft messages for fee reminders, attendance alerts and school notices",
  "Fee follow-up lists ordered by payment history rather than guesswork",
];

export default function Features({ areas, totals, panels }: FeaturesPageProps) {
  const highlights = [
    { value: totals.categories, suffix: "", label: "module areas" },
    { value: totals.modules, suffix: "", label: "functional modules" },
    { value: totals.subModules, suffix: "", label: "sub-modules" },
    { value: totals.features, suffix: "", label: "shipped features" },
  ];

  return (
    <>
      <PageSeoHead
        {...pageSeo.features}
        title={`School ERP Features: ${totals.modules} Modules, ${totals.features} Features | KIDUART`}
        description={`Explore all ${totals.categories} module areas of the KIDUART school ERP — ${totals.modules} functional modules and ${totals.features} features covering admissions, academics, fees, HR, transport, hostel, library and security.`}
      />
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
          ]),
          buildItemListSchema(
            "KIDUART school ERP module areas",
            areas.map((area) => ({ name: area.label, path: `/features/${area.slug}` })),
          ),
        ]}
      />

      <PageTransition className="pt-20 pb-0">
        <CircleShowcaseHero
          eyebrow={`${totals.modules} modules · ${totals.features} features`}
          title="Every module your school actually runs, documented feature by feature"
          subtitle={`KIDUART ships ${totals.features} features across ${totals.modules} functional modules in ${totals.categories} areas — from the first admission enquiry to consolidated multi-campus reporting. This page is the full map, not a highlight reel.`}
          image="/images/banner/features-hero.jpg"
          actions={
            <>
              <Link
                href="/demo"
                className="w-full rounded-full bg-brand-orange px-8 py-4 text-center text-base font-bold text-brand-navy shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-brand-navy hover:text-brand-beige sm:w-auto"
              >
                Book Free Demo
              </Link>
              <Link
                href="/pricing"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-brand-navy/[0.12] bg-white px-8 py-4 text-base font-bold text-brand-navy transition-colors duration-300 hover:border-brand-teal hover:text-brand-teal sm:w-auto"
              >
                See what each plan includes <ArrowRight className="h-5 w-5" />
              </Link>
            </>
          }
        />

        <section className="section-space-tight relative overflow-hidden border-y border-brand-navy/5 bg-white">
          <BackgroundBlobs
            blobs={[
              { color: "#fcbf49", size: 280, position: "center-left", opacity: 0.14 },
              { color: "#0c716b", size: 280, position: "center-right", opacity: 0.14 },
            ]}
          />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((highlight, index) => (
                <SectionReveal
                  key={highlight.label}
                  delay={index * 0.06}
                  className="rounded-3xl border border-brand-navy/[0.08] bg-brand-beige/20 px-6 py-8"
                >
                  <div className="text-4xl font-extrabold text-brand-navy">
                    <AnimatedCounter end={highlight.value} suffix={highlight.suffix} />
                  </div>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-navy/[0.72]">
                    {highlight.label}
                  </p>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={0.1} className="mt-8">
              <div className="rounded-3xl border border-brand-navy/[0.08] bg-white p-6 md:p-8">
                <h2 className="text-2xl font-bold text-brand-navy">
                  Counted from the product, not from marketing
                </h2>
                <p className="mt-3 leading-7 text-brand-navy/[0.78]">
                  These numbers come straight from our capability matrix — the same sheet our
                  engineering and implementation teams work from. Every module listed on this site
                  exists in the platform today, so a single school and a multi-campus group can both
                  start with what they actually run.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {panels.map((panel) => (
                    <Link
                      key={panel.slug}
                      href={`/platform/${panel.slug}`}
                      className="rounded-full border border-brand-navy/[0.12] bg-brand-beige/25 px-3.5 py-1.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                    >
                      {panel.shortLabel} panel
                    </Link>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-brand-beige/25">
          <BackgroundBlobs
            blobs={[
              { color: "#003049", size: 380, position: "top-left", opacity: 0.1 },
              { color: "#f77f00", size: 340, position: "bottom-right", opacity: 0.12 },
            ]}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal className="mx-auto mb-12 max-w-3xl text-center">
              <p className="section-kicker">Capability map</p>
              <h2 className="mt-4 text-4xl font-bold text-brand-navy">
                Pick the area you are evaluating
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-navy/[0.74]">
                Each area opens into its own page with every module and sub-module it contains, plus
                the capabilities schools ask about most — so you can judge the depth for yourself.
              </p>
            </SectionReveal>

            <CapabilityMap areas={areas} />
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-brand-navy" style={{ color: "#fcf6d3" }}>
          <BackgroundBlobs
            blobs={[
              { color: "#fcbf49", size: 420, position: "top-right", opacity: 0.16 },
              { color: "#0c716b", size: 420, position: "bottom-left", opacity: 0.16 },
            ]}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <SectionReveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-brand-yellow">
                  The intelligence layer
                </div>
                <h2 className="mt-6 text-4xl font-bold text-brand-beige">
                  KIDUORBIT works on your school's data, not generic templates
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-beige/80">
                  Because attendance, fees, exams and staff records already sit in one system, the
                  analytics layer can point staff at the right classroom, the right ledger and the
                  right conversation. People still make the call; the platform narrows where to look.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {aiAssistantPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-brand-beige/90"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow/15">
                        <Sparkles className="h-5 w-5 text-brand-yellow" aria-hidden="true" />
                      </div>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/kiduorbit"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-6 py-3 text-base font-bold text-brand-yellow transition-colors hover:bg-brand-yellow hover:text-brand-navy"
                >
                  Read how KIDUORBIT works <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </SectionReveal>

              <SectionReveal delay={0.12} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl">
                <div className="rounded-[1.75rem] border border-white/10 bg-brand-beige p-6 text-brand-navy">
                  <div className="flex items-center justify-between border-b border-brand-navy/10 pb-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-teal">
                        Ask the platform
                      </p>
                      <h3 className="mt-2 text-2xl font-bold">Questions staff actually have</h3>
                    </div>
                    <BrainCircuit className="h-10 w-10 text-brand-orange" aria-hidden="true" />
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      "Which sections dropped below 80% attendance this month?",
                      "Who is pending on the second instalment after concessions?",
                      "Where does the timetable clash if two teachers are on leave?",
                      "Which campus is behind on collection this quarter?",
                    ].map((task) => (
                      <div key={task} className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                        <p className="text-sm leading-6 text-brand-navy/[0.78]">{task}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-white">
          <BackgroundBlobs blobs={[{ color: "#0c716b", size: 320, position: "center-right", opacity: 0.12 }]} />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionReveal className="rounded-[2rem] border border-brand-navy/[0.08] bg-brand-beige/20 p-8 text-center md:p-12">
              <p className="section-kicker">Built for real schools</p>
              <h2 className="mt-4 text-4xl font-bold text-brand-navy">
                Bring your fee structure and class setup — we will run the demo on it
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-brand-navy/[0.74]">
                A module list only proves depth. A demo on your own session, sections and fee heads
                proves fit. Pick whichever modules matter most and we will walk those first.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/demo"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-teal sm:w-auto"
                >
                  Book a free demo
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-navy/15 bg-white px-8 py-4 text-lg font-bold text-brand-navy transition-colors hover:border-brand-teal/35 hover:text-brand-teal sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Ask about your use case
                </a>
              </div>
            </SectionReveal>
          </div>
        </section>

        <CtaSection
          title="Want to see how these modules work together in a real school?"
          subtitle="Book a live walkthrough built around your school's size and the specific workflows you want to improve."
        />
      </PageTransition>
    </>
  );
}

export const getStaticProps: GetStaticProps<FeaturesPageProps> = async () => {
  const areas: CapabilityArea[] = MATRIX_CATEGORIES.map((category) => {
    const narrative = AREA_NARRATIVE_BY_SLUG[category.slug];
    return {
      slug: category.slug,
      label: narrative?.label ?? category.name,
      stage: narrative?.stage ?? category.name,
      headline: narrative?.headline ?? category.name,
      summary: narrative?.summary ?? "",
      featureCount: category.featureCount,
      moduleCount: category.moduleCount,
      subModuleCount: countSubModules(category),
      icon: narrative?.icon ?? "LayoutDashboard",
      accent: narrative?.accent ?? "navy",
      topModules: topModules(category, 5).map((module) => ({
        name: module.name,
        slug: module.slug,
        featureCount: module.featureCount,
      })),
    };
  });

  return {
    props: {
      areas,
      totals: MATRIX_TOTALS,
      panels: PRODUCT_PANELS.map((panel) => ({ slug: panel.slug, shortLabel: panel.shortLabel })),
    },
  };
};
