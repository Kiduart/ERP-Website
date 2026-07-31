import type { GetStaticPaths, GetStaticProps } from "next";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { moduleFeaturePageSeo } from "@/lib/pageSeo";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/seoSchemas";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { ProductIcon } from "@/components/product/ProductIcon";
import { CapabilitySheetRequest } from "@/components/product/CapabilitySheetRequest";
import {
  ACCENTS,
  Breadcrumbs,
  HiddenCapabilitiesLink,
  StatChip,
  type AccentName,
} from "@/components/product/ProductPrimitives";
import type { PublicModule } from "@/data/featureMatrix";
import { MATRIX_CATEGORIES, getMatrixCategory, toPublicModule } from "@/data/featureMatrix";
import { AREA_NARRATIVE_BY_SLUG } from "@/data/productNarrative";
import { PANEL_BY_SLUG } from "@/data/productPanels";

type ModulePageProps = {
  area: { slug: string; label: string; stage: string; icon: string; accent: AccentName };
  productModule: PublicModule;
  counts: { features: number; subModules: number };
  siblings: { slug: string; name: string; featureCount: number }[];
  panels: { slug: string; label: string }[];
};

export default function FeatureModule({ area, productModule, counts, siblings, panels }: ModulePageProps) {
  const tokens = ACCENTS[area.accent];
  const trail = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: area.label, path: `/features/${area.slug}` },
    { name: productModule.name, path: `/features/${area.slug}/${productModule.slug}` },
  ];

  return (
    <>
      <PageSeoHead
        {...moduleFeaturePageSeo({
          areaSlug: area.slug,
          areaLabel: area.label,
          moduleSlug: productModule.slug,
          moduleName: productModule.name,
          featureCount: counts.features,
          subModuleCount: counts.subModules,
        })}
      />
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema(trail),
          buildItemListSchema(
            `${productModule.name} workflows in KIDUART`,
            productModule.subModules.map((subModule) => ({ name: subModule.name })),
          ),
        ]}
      />

      <PageTransition className="pt-20 pb-0">
        <section className="relative overflow-hidden border-b border-brand-navy/[0.06] bg-white pb-12 pt-12 md:pb-16">
          <BackgroundBlobs
            blobs={[
              { color: "#0c716b", size: 300, position: "top-right", opacity: 0.09 },
              { color: "#003049", size: 280, position: "bottom-left", opacity: 0.07 },
            ]}
          />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs trail={trail} />

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
              <SectionReveal>
                <Link
                  href={`/features/${area.slug}`}
                  className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 transition-colors hover:bg-white ${tokens.border} ${tokens.softBg}`}
                >
                  <ProductIcon name={area.icon} className={`h-4 w-4 ${tokens.text}`} />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
                    {area.label}
                  </span>
                </Link>

                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
                  Functional module · {area.label}
                </p>
                <h1 className="mt-3 text-[clamp(2rem,1.5rem+2vw,3.25rem)] font-bold leading-[1.12] text-brand-navy">
                  {productModule.name}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-8 text-brand-navy/[0.78]">
                  {productModule.name} sits inside the {area.label.toLowerCase()} area. Each workflow
                  group below lists what your team will use most often; the rest we walk through live,
                  against your own school setup.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-base font-bold text-brand-beige transition-all duration-300 hover:-translate-y-1 hover:bg-brand-teal"
                  >
                    Demo {productModule.name}
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  {productModule.hiddenFeatureCount > 0 && (
                    <a
                      href="#capability-sheet"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/[0.14] bg-white px-7 py-3.5 text-base font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                    >
                      Request the full sheet
                    </a>
                  )}
                </div>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <div className="fabric-board overflow-hidden rounded-[2rem] border border-brand-navy/[0.12] bg-white/75 p-4 shadow-2xl shadow-brand-navy/[0.08] backdrop-blur-sm sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 px-1 pb-3">
                    <p className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-teal">
                      <span className="console-live-dot h-1.5 w-1.5 rounded-full bg-brand-teal" aria-hidden="true" />
                      Module depth
                    </p>
                    <p className="text-xs font-semibold text-brand-navy/[0.72]">
                      Ask for the full sheet when you need every line
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <StatChip value="Workflows" label="Day-to-day use" />
                    <StatChip value="Groups" label="Inside this module" />
                  </div>

                  <div className="mt-3 rounded-[1.35rem] border border-brand-navy/[0.1] bg-white p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
                      Workflow groups inside
                    </p>
                    <ul className="mt-3 space-y-2">
                      {productModule.subModules.map((subModule, index) => (
                        <li key={subModule.slug}>
                          <a
                            href={`#sub-${subModule.slug}`}
                            className="flex items-center justify-between gap-3 rounded-xl border border-brand-navy/[0.08] bg-brand-beige/25 px-3.5 py-2.5 text-sm transition-colors hover:border-brand-teal/40 hover:text-brand-teal"
                          >
                            <span className="font-semibold text-brand-navy">
                              <span className="mr-2 text-xs font-bold text-brand-navy/[0.72]">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              {subModule.name}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-brand-beige/25">
          <BackgroundBlobs blobs={[{ color: "#0c716b", size: 280, position: "center-left", opacity: 0.08 }]} />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionReveal className="mb-8">
              <p className="section-kicker">Capabilities by workflow</p>
              <h2 className="mt-4 text-3xl font-bold text-brand-navy md:text-4xl">
                What {productModule.name.toLowerCase()} covers day to day
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-brand-navy/[0.74]">
                The capabilities schools ask about most are listed below. Anything gated jumps
                straight to the sheet request so you can get the rest in writing.
              </p>
            </SectionReveal>

            <div className="space-y-6">
              {productModule.subModules.map((subModule, index) => (
                <div key={subModule.slug} id={`sub-${subModule.slug}`} className="scroll-mt-28">
                  <SectionReveal
                    delay={Math.min(index * 0.05, 0.2)}
                    className="overflow-hidden rounded-[1.75rem] border border-brand-navy/[0.1] bg-white shadow-sm shadow-brand-navy/[0.04]"
                  >
                  <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-brand-navy/[0.08] bg-brand-beige/20 px-6 py-5 md:px-8">
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
                        Workflow {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-1 text-2xl font-bold text-brand-navy">{subModule.name}</h2>
                    </div>
                  </div>

                  <ul className="grid gap-2.5 p-6 sm:grid-cols-2 md:p-8">
                    {subModule.features.map((feature) => (
                      <li
                        key={`${subModule.slug}-${feature.name}`}
                        className="flex items-start gap-3 rounded-2xl bg-brand-beige/25 px-4 py-3"
                      >
                        <span
                          className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${tokens.softBg}`}
                          aria-hidden="true"
                        >
                          <Check className={`h-3 w-3 ${tokens.text}`} />
                        </span>
                        <span className="text-sm leading-6 text-brand-navy/[0.84]">
                          {feature.name}
                        </span>
                      </li>
                    ))}
                    {subModule.hiddenFeatureCount > 0 && (
                      <li className="sm:col-span-2">
                        <HiddenCapabilitiesLink label={`in ${subModule.name}`} />
                      </li>
                    )}
                  </ul>
                  </SectionReveal>
                </div>
              ))}
            </div>

            {productModule.hiddenFeatureCount > 0 && (
              <SectionReveal className="mt-8">
                <CapabilitySheetRequest
                  context={`${productModule.name} (${area.label})`}
                  hiddenCount={productModule.hiddenFeatureCount}
                  totalCount={counts.features}
                />
              </SectionReveal>
            )}
          </div>
        </section>

        <section className="section-space-tight relative overflow-hidden bg-white">
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <SectionReveal className="rounded-[2rem] border border-brand-navy/[0.1] bg-brand-beige/20 p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-teal">Same area</p>
                <h2 className="mt-2 text-2xl font-bold text-brand-navy">Other modules in {area.label}</h2>
                <ul className="mt-5 space-y-2.5">
                  {siblings.map((sibling) => (
                    <li key={sibling.slug}>
                      <Link
                        href={`/features/${area.slug}/${sibling.slug}`}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-brand-navy/[0.08] bg-white px-4 py-3.5 transition-colors hover:border-brand-teal/40 hover:text-brand-teal"
                      >
                        <span className="text-sm font-bold text-brand-navy">{sibling.name}</span>
                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy/[0.7]">
                          Open module
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/features/${area.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-bold text-brand-beige transition-colors hover:bg-brand-teal"
                >
                  Back to {area.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </SectionReveal>

              <SectionReveal delay={0.08} className="rounded-[2rem] border border-brand-navy/[0.1] bg-brand-navy p-6 text-brand-beige md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">Role panels</p>
                <h2 className="mt-2 text-2xl font-bold text-brand-beige">Which panel uses this</h2>
                <p className="mt-3 text-sm leading-6 text-brand-beige/80">
                  Roles reach {productModule.name.toLowerCase()} through these dashboards, with permissions
                  deciding what each person can open.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {panels.map((panel) => (
                    <li key={panel.slug}>
                      <Link
                        href={`/platform/${panel.slug}`}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-bold text-brand-beige transition-colors hover:border-brand-yellow/50 hover:text-brand-yellow"
                      >
                        {panel.label}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            </div>
          </div>
        </section>

        <CtaSection
          title={`Ask us to demo ${productModule.name} end to end`}
          subtitle="Bring a real scenario from your school and we will run it through this module during the call."
        />
      </PageTransition>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: MATRIX_CATEGORIES.flatMap((category) =>
    category.modules.map((entry) => ({ params: { area: category.slug, module: entry.slug } })),
  ),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ModulePageProps> = async (context) => {
  const areaSlug = String(context.params?.area);
  const moduleSlug = String(context.params?.module);
  const category = getMatrixCategory(areaSlug);
  const narrative = AREA_NARRATIVE_BY_SLUG[areaSlug];
  const matrixModule = category?.modules.find((entry) => entry.slug === moduleSlug);

  if (!category || !narrative || !matrixModule) {
    return { notFound: true };
  }

  return {
    props: {
      area: {
        slug: category.slug,
        label: narrative.label,
        stage: narrative.stage,
        icon: narrative.icon,
        accent: narrative.accent,
      },
      productModule: toPublicModule(matrixModule),
      counts: {
        features: matrixModule.featureCount,
        subModules: matrixModule.subModules.length,
      },
      siblings: category.modules
        .filter((entry) => entry.slug !== matrixModule.slug)
        .sort((a, b) => b.featureCount - a.featureCount)
        .slice(0, 6)
        .map((entry) => ({ slug: entry.slug, name: entry.name, featureCount: entry.featureCount })),
      panels: narrative.panels
        .map((slug) => PANEL_BY_SLUG[slug])
        .filter(Boolean)
        .map((panel) => ({ slug: panel.slug, label: panel.label })),
    },
  };
};
