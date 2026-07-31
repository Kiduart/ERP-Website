import type { GetStaticProps } from "next";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { pageSeo } from "@/lib/pageSeo";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/seoSchemas";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CircleShowcaseHero } from "@/components/ui/CustomHeroes";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CapabilityMap, type CapabilityArea } from "@/components/product/CapabilityMap";
import { IntelligenceLayer } from "@/components/product/IntelligenceLayer";
import { MATRIX_CATEGORIES, MATRIX_TOTALS, countSubModules, topModules } from "@/data/featureMatrix";
import { AREA_NARRATIVE_BY_SLUG } from "@/data/productNarrative";
import { PRODUCT_PANELS } from "@/data/productPanels";

type FeaturesPageProps = {
  areas: CapabilityArea[];
  totals: typeof MATRIX_TOTALS;
  panels: { slug: string; shortLabel: string }[];
};

export default function Features({ areas, totals, panels }: FeaturesPageProps) {
  const highlights: { value?: number; display?: string; suffix: string; label: string }[] = [
    { value: totals.categories, suffix: "", label: "functional areas" },
    { value: totals.modules, suffix: "+", label: "business workflows" },
    { display: "Deep", suffix: "", label: "capability matrix" },
    { display: "Full", suffix: "", label: "school operations platform" },
  ];

  return (
    <>
      <PageSeoHead
        {...pageSeo.features}
        title="School ERP Features: Modules & Capabilities | KIDUART"
        description="Explore KIDUART school ERP module areas — admissions, academics, fees, HR, transport, hostel, library and security — with the workflows schools ask about most."
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
          eyebrow="School ERP capability map"
          title="Every module your school actually runs, documented feature by feature"
          subtitle="From the first admission enquiry to consolidated multi-campus reporting — this page is the full map of what ships in the product today, not a highlight reel."
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
            <SectionReveal className="fabric-board overflow-hidden rounded-[2.25rem] border border-brand-navy/[0.12] bg-white/70 p-4 shadow-2xl shadow-brand-navy/[0.08] backdrop-blur-sm sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-4 pt-1">
                <p className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-teal">
                  <span className="console-live-dot h-1.5 w-1.5 rounded-full bg-brand-teal" aria-hidden="true" />
                  Capability depth from the product matrix
                </p>
                <p className="text-xs font-semibold text-brand-navy/[0.72]">
                  Soft counts where they help — never a feature ceiling
                </p>
              </div>

              <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={highlight.label}
                    className="relative overflow-hidden rounded-[1.5rem] border border-brand-navy/[0.1] bg-white px-6 py-7"
                  >
                    <span className="absolute right-5 top-6 flex gap-1" aria-hidden="true">
                      {highlights.map((_, dot) => (
                        <span
                          key={dot}
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            dot <= index ? "bg-brand-teal" : "bg-brand-navy/[0.14]",
                          )}
                        />
                      ))}
                    </span>
                    <dd className="text-[clamp(2.1rem,1.6rem+1.4vw,2.9rem)] font-extrabold leading-none text-brand-navy">
                      {typeof highlight.value === "number" ? (
                        <AnimatedCounter end={highlight.value} suffix={highlight.suffix} />
                      ) : (
                        highlight.display
                      )}
                    </dd>
                    <dt className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
                      {highlight.label}
                    </dt>
                    <span className="console-rail relative mt-4 block" aria-hidden="true" />
                  </div>
                ))}
              </dl>

              <div className="contact-form-panel mt-3 rounded-[1.5rem] border border-brand-navy/[0.1] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-brand-navy">
                  Counted from the product, not from marketing
                </h2>
                <p className="mt-3 max-w-3xl leading-7 text-brand-navy/[0.78]">
                  These numbers come straight from our capability matrix — the same sheet our
                  engineering and implementation teams work from. Every module listed on this site
                  exists in the platform today, so a single school and a multi-campus group can both
                  start with what they actually run.
                </p>
                <p className="mt-5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
                  Shipped into dedicated role panels
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {panels.map((panel) => (
                    <Link
                      key={panel.slug}
                      href={`/platform/${panel.slug}`}
                      className="rounded-full border border-brand-navy/[0.12] bg-white px-3.5 py-1.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
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
                Each area opens into its own page with every module and workflow group it contains, plus
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
            <SectionReveal className="mx-auto mb-10 max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-brand-yellow">
                The intelligence layer
              </p>
              <h2 className="mt-6 text-[clamp(1.9rem,1.5rem+1.6vw,2.6rem)] font-bold text-brand-beige">
                KIDUORBIT reads the same modules — it does not ask you for new data
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-beige/80">
                Attendance marks, fee ledgers, exam scores and vehicle pings are already being
                recorded by the modules above. KIDUORBIT scores them and hands staff a ranked list to
                act on. People still make the call; the platform narrows where to look.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <IntelligenceLayer />
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
