import type { GetStaticPaths, GetStaticProps } from "next";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { areaPageSeo } from "@/lib/pageSeo";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/seoSchemas";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { ModuleShelf, type ShelfModule } from "@/components/product/ModuleShelf";
import { ProductIcon } from "@/components/product/ProductIcon";
import { CapabilitySheetRequest } from "@/components/product/CapabilitySheetRequest";
import {
  ACCENTS,
  Breadcrumbs,
  FlowRail,
  OutcomeList,
  SectionHeading,
  SignalList,
  type AccentName,
} from "@/components/product/ProductPrimitives";
import {
  MATRIX_CATEGORIES,
  countSubModules,
  getMatrixCategory,
  toPublicModule,
} from "@/data/featureMatrix";
import { AREA_NARRATIVE_BY_SLUG, type AreaNarrative } from "@/data/productNarrative";
import { PANEL_BY_SLUG } from "@/data/productPanels";

type AreaPageProps = {
  narrative: AreaNarrative;
  modules: ShelfModule[];
  counts: {
    features: number;
    modules: number;
    subModules: number;
  };
  panels: { slug: string; label: string; stage: string }[];
  siblings: { slug: string; label: string; featureCount: number }[];
};

export default function FeatureArea({ narrative, modules, counts, panels, siblings }: AreaPageProps) {
  const accent: AccentName = narrative.accent;
  const tokens = ACCENTS[accent];
  const hiddenFeatureCount = modules.reduce((sum, entry) => sum + entry.hiddenFeatureCount, 0);

  return (
    <>
      <PageSeoHead
        {...areaPageSeo({
          slug: narrative.slug,
          label: narrative.label,
          headline: narrative.headline,
          featureCount: counts.features,
          moduleCount: counts.modules,
          summary: narrative.summary,
        })}
      />
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
            { name: narrative.label, path: `/features/${narrative.slug}` },
          ]),
          buildItemListSchema(
            `${narrative.label} modules in KIDUART`,
            modules.map((module) => ({
              name: module.name,
              path: `/features/${narrative.slug}/${module.slug}`,
            })),
          ),
        ]}
      />

      <PageTransition className="pt-20 pb-0">
        <section className="relative overflow-hidden border-b border-brand-navy/[0.06] bg-white pb-14 pt-12 md:pb-20 md:pt-16">
          <BackgroundBlobs
            blobs={[
              { color: "#003049", size: 340, position: "top-left", opacity: 0.08 },
              { color: "#0c716b", size: 320, position: "bottom-right", opacity: 0.1 },
              { color: "#f77f00", size: 260, position: "center-right", opacity: 0.08 },
            ]}
          />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              trail={[
                { name: "Home", path: "/" },
                { name: "Features", path: "/features" },
                { name: narrative.label, path: `/features/${narrative.slug}` },
              ]}
            />

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
              <SectionReveal>
                <div
                  className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 ${tokens.border} ${tokens.softBg}`}
                >
                  <ProductIcon name={narrative.icon} className={`h-4 w-4 ${tokens.text}`} />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
                    {narrative.stage}
                  </span>
                </div>

                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
                  {narrative.label} · part of the full platform
                </p>
                <h1 className="mt-3 text-[clamp(2rem,1.5rem+2vw,3.25rem)] font-bold leading-[1.12] text-brand-navy">
                  {narrative.headline}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-8 text-brand-navy/[0.78]">{narrative.intro}</p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-base font-bold text-brand-beige transition-all duration-300 hover:-translate-y-1 hover:bg-brand-teal"
                  >
                    Book a demo on {narrative.label.toLowerCase()}
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  <a
                    href="#modules"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/[0.14] bg-white px-7 py-3.5 text-base font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                  >
                    Browse modules in this area
                  </a>
                  <Link
                    href="/features"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-5 py-3.5 text-sm font-bold text-brand-navy/[0.72] transition-colors hover:text-brand-teal"
                  >
                    All areas
                  </Link>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <div className="fabric-board overflow-hidden rounded-[2rem] border border-brand-navy/[0.12] bg-white/75 p-4 shadow-2xl shadow-brand-navy/[0.08] backdrop-blur-sm sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 px-1 pb-3">
                    <p className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-teal">
                      <span className="console-live-dot h-1.5 w-1.5 rounded-full bg-brand-teal" aria-hidden="true" />
                      From the capability matrix
                    </p>
                    <p className="text-xs font-semibold text-brand-navy/[0.72]">Live in the product</p>
                  </div>

                  <SignalList
                    items={[
                      {
                        id: "modules",
                        title: "Modules in this area",
                        detail: "Open any module below to judge depth yourself",
                        href: "#modules",
                      },
                      {
                        id: "workflows",
                        title: "Daily school workflows",
                        detail: "What staff and families actually open each day",
                        href: "#modules",
                      },
                      {
                        id: "sheet",
                        title: "Full capability sheet",
                        detail: "Request every remaining line when you need it",
                        href: "#capability-sheet",
                      },
                    ]}
                  />

                  <div className="mt-3 rounded-[1.35rem] border border-brand-navy/[0.1] bg-white p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
                      Who works here
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {narrative.roles.map((role) => (
                        <li
                          key={role}
                          className="rounded-full border border-brand-navy/[0.1] bg-brand-beige/30 px-3 py-1.5 text-sm font-semibold text-brand-navy"
                        >
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {modules.length > 0 && (
                    <div className="mt-3 rounded-[1.35rem] border border-brand-navy/[0.1] bg-brand-navy p-5 text-brand-beige">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
                        Largest modules in this area
                      </p>
                      <ul className="mt-3 space-y-2">
                        {modules.slice(0, 4).map((module) => (
                          <li key={module.slug}>
                            <a
                              href={`#module-${module.slug}`}
                              className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm transition-colors hover:border-brand-yellow/40 hover:text-brand-yellow"
                            >
                              <span className="font-semibold">{module.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-brand-beige/25">
          <BackgroundBlobs
            blobs={[
              { color: "#0c716b", size: 300, position: "top-left", opacity: 0.08 },
              { color: "#f77f00", size: 280, position: "bottom-right", opacity: 0.09 },
            ]}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <SectionHeading
                kicker="How the flow runs"
                title={`${narrative.label} in the order your school does it`}
                description={narrative.summary}
              />
            </SectionReveal>
            <SectionReveal delay={0.08} className="mt-10">
              <FlowRail steps={narrative.dailyFlow} accent={accent} />
            </SectionReveal>

            <SectionReveal delay={0.12} className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[2rem] border border-brand-navy/[0.1] bg-white p-6 shadow-sm md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-teal">Outcomes</p>
                <h3 className="mt-2 text-2xl font-bold text-brand-navy">What changes for your team</h3>
                <div className="mt-5">
                  <OutcomeList items={narrative.outcomes} accent={accent} />
                </div>
              </div>
              <div className="rounded-[2rem] border border-brand-navy/[0.1] bg-white p-6 shadow-sm md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-teal">Role panels</p>
                <h3 className="mt-2 text-2xl font-bold text-brand-navy">Where you will use it</h3>
                <p className="mt-3 text-sm leading-6 text-brand-navy/[0.76]">
                  This area appears inside the panels below, each showing only what that role is
                  allowed to see.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {panels.map((panel) => (
                    <li key={panel.slug}>
                      <Link
                        href={`/platform/${panel.slug}`}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-brand-navy/[0.1] bg-brand-beige/25 px-4 py-3.5 transition-colors hover:border-brand-teal/40 hover:bg-white"
                      >
                        <span>
                          <span className="block text-sm font-bold text-brand-navy">{panel.label}</span>
                          <span className="mt-0.5 block text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy/[0.7]">
                            {panel.stage}
                          </span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-brand-navy/50" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </section>

        <section id="modules" className="section-space relative scroll-mt-24 overflow-hidden bg-white">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <SectionHeading
                kicker="Modules in this area"
                title="Every module, with the capabilities schools ask about most"
                description={`Open any module to see how it is structured and what your team will use daily. ${narrative.label} connects to the rest of the platform in everyday school work.`}
              />
            </SectionReveal>

            <SectionReveal delay={0.08} className="mt-10">
              <ModuleShelf areaSlug={narrative.slug} modules={modules} accent={accent} />
            </SectionReveal>

            {hiddenFeatureCount > 0 && (
              <SectionReveal delay={0.1} className="mt-10">
                <CapabilitySheetRequest
                  context={narrative.label}
                  hiddenCount={hiddenFeatureCount}
                  totalCount={counts.features}
                />
              </SectionReveal>
            )}
          </div>
        </section>

        <section className="section-space-tight relative overflow-hidden border-y border-brand-navy/[0.06] bg-brand-beige/25">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="text-2xl font-bold text-brand-navy">Continue through the platform</h2>
              <p className="mt-3 max-w-3xl leading-7 text-brand-navy/[0.76]">
                Schools rarely buy one module. These areas connect directly to {narrative.label.toLowerCase()} in
                daily use.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {siblings.map((sibling) => (
                  <li key={sibling.slug}>
                    <Link
                      href={`/features/${sibling.slug}`}
                      className="flex h-full flex-col justify-between rounded-2xl border border-brand-navy/[0.1] bg-white px-5 py-4 transition-colors hover:border-brand-teal/40"
                    >
                      <span className="text-base font-bold text-brand-navy">{sibling.label}</span>
                      <span className="mt-2 text-sm text-brand-navy/[0.72]">
                        Connected in daily use
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </section>

        <CtaSection
          title={`See ${narrative.label.toLowerCase()} running on your own school data`}
          subtitle="We will set up a session with your classes, fee heads and staff structure so you can judge the fit properly."
        />
      </PageTransition>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: MATRIX_CATEGORIES.map((category) => ({ params: { area: category.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<AreaPageProps> = async (context) => {
  const areaSlug = String(context.params?.area);
  const category = getMatrixCategory(areaSlug);
  const narrative = AREA_NARRATIVE_BY_SLUG[areaSlug];

  if (!category || !narrative) {
    return { notFound: true };
  }

  const orderedModules = [...category.modules].sort((a, b) => b.featureCount - a.featureCount);

  const siblings = MATRIX_CATEGORIES.filter((entry) => entry.slug !== areaSlug)
    .map((entry) => ({
      slug: entry.slug,
      label: AREA_NARRATIVE_BY_SLUG[entry.slug]?.label ?? entry.name,
      featureCount: entry.featureCount,
    }))
    .sort((a, b) => b.featureCount - a.featureCount)
    .slice(0, 4);

  return {
    props: {
      narrative,
      modules: orderedModules.map(toPublicModule),
      counts: {
        features: category.featureCount,
        modules: category.moduleCount,
        subModules: countSubModules(category),
      },
      panels: narrative.panels
        .map((slug) => PANEL_BY_SLUG[slug])
        .filter(Boolean)
        .map((panel) => ({ slug: panel.slug, label: panel.label, stage: panel.stage })),
      siblings,
    },
  };
};
