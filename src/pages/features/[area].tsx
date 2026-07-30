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
  StatChip,
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

            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <SectionReveal>
                <div
                  className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 ${tokens.border} ${tokens.softBg}`}
                >
                  <ProductIcon name={narrative.icon} className={`h-4 w-4 ${tokens.text}`} />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
                    {narrative.stage}
                  </span>
                </div>

                <h1 className="mt-6 text-4xl font-bold leading-tight text-brand-navy md:text-5xl">
                  {narrative.headline}
                </h1>
                <p className="mt-5 text-lg leading-8 text-brand-navy/[0.78]">{narrative.intro}</p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-base font-bold text-brand-beige transition-all duration-300 hover:-translate-y-1 hover:bg-brand-teal"
                  >
                    Book a demo on {narrative.label.toLowerCase()}
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/features"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/[0.14] bg-white px-7 py-3.5 text-base font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                  >
                    All 16 module areas
                  </Link>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.1} className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <StatChip value={counts.modules} label="Modules" />
                  <StatChip value={counts.subModules} label="Sub-modules" />
                  <StatChip value={counts.features} label="Features" />
                </div>
                <div className="rounded-2xl border border-brand-navy/[0.1] bg-brand-beige/25 p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-navy">
                    Who works here
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {narrative.roles.map((role) => (
                      <li
                        key={role}
                        className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-brand-navy/[0.82]"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-brand-beige/25">
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

            <SectionReveal delay={0.12} className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
              <div className="rounded-[2rem] border border-brand-navy/[0.08] bg-white p-6 md:p-8">
                <h3 className="text-2xl font-bold text-brand-navy">What changes for your team</h3>
                <div className="mt-5">
                  <OutcomeList items={narrative.outcomes} accent={accent} />
                </div>
              </div>
              <div className="rounded-[2rem] border border-brand-navy/[0.08] bg-white p-6 md:p-8">
                <h3 className="text-2xl font-bold text-brand-navy">Where you will use it</h3>
                <p className="mt-3 text-sm leading-6 text-brand-navy/[0.76]">
                  This area appears inside the panels below, each showing only what that role is
                  allowed to see.
                </p>
                <ul className="mt-5 space-y-3">
                  {panels.map((panel) => (
                    <li key={panel.slug}>
                      <Link
                        href={`/platform/${panel.slug}`}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-brand-navy/[0.1] bg-brand-beige/20 px-4 py-3 transition-colors hover:border-brand-teal/40"
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

        <section className="section-space relative overflow-hidden bg-white">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <SectionHeading
                kicker={`${counts.modules} modules · ${counts.features} capabilities`}
                title="Every module, with the capabilities schools ask about most"
                description={`Open any module to see how it is structured and what your team will use daily. ${narrative.label} is one of 16 areas in the KIDUART capability matrix.`}
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
                        {sibling.featureCount} features
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
