import type { GetStaticPaths, GetStaticProps } from "next";
import { Link } from "wouter";
import { ArrowRight, Check, Lock } from "lucide-react";
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
            `${productModule.name} sub-modules in KIDUART`,
            productModule.subModules.map((subModule) => ({ name: subModule.name })),
          ),
        ]}
      />

      <PageTransition className="pt-20 pb-0">
        <section className="relative overflow-hidden border-b border-brand-navy/[0.06] bg-white pb-12 pt-12 md:pb-16">
          <BackgroundBlobs blobs={[{ color: "#0c716b", size: 300, position: "top-right", opacity: 0.09 }]} />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs trail={trail} />

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
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

                <h1 className="mt-6 text-4xl font-bold leading-tight text-brand-navy md:text-5xl">
                  {productModule.name}
                </h1>
                <p className="mt-5 text-lg leading-8 text-brand-navy/[0.78]">
                  {productModule.name} ships {counts.features} capabilities across {counts.subModules}{" "}
                  {counts.subModules === 1 ? "sub-module" : "sub-modules"}, as part of the{" "}
                  {area.label.toLowerCase()} area. Each sub-module below lists what your team will use
                  most often; the rest we walk through live, against your own school setup.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.1} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <StatChip value={counts.features} label="Features" />
                  <StatChip value={counts.subModules} label="Sub-modules" />
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-brand-beige/25">
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {productModule.subModules.map((subModule, index) => (
                <SectionReveal
                  key={subModule.slug}
                  delay={Math.min(index * 0.05, 0.2)}
                  className="rounded-[2rem] border border-brand-navy/[0.08] bg-white p-6 shadow-sm md:p-8"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-brand-navy/[0.08] pb-5">
                    <h2 className="text-2xl font-bold text-brand-navy">{subModule.name}</h2>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
                      {subModule.featureCount}{" "}
                      {subModule.featureCount === 1 ? "capability" : "capabilities"}
                    </p>
                  </div>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
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
                      <li className="flex items-start gap-3 rounded-2xl border border-dashed border-brand-navy/20 px-4 py-3">
                        <span
                          className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-navy/[0.06]"
                          aria-hidden="true"
                        >
                          <Lock className="h-3 w-3 text-brand-navy/60" />
                        </span>
                        <span className="text-sm leading-6 text-brand-navy/[0.75]">
                          {subModule.hiddenFeatureCount} further capabilities in {subModule.name} —
                          walked through on a demo call.
                        </span>
                      </li>
                    )}
                  </ul>
                </SectionReveal>
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
              <SectionReveal className="rounded-[2rem] border border-brand-navy/[0.08] bg-brand-beige/20 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-brand-navy">Other modules in {area.label}</h2>
                <ul className="mt-5 space-y-2.5">
                  {siblings.map((sibling) => (
                    <li key={sibling.slug}>
                      <Link
                        href={`/features/${area.slug}/${sibling.slug}`}
                        className="flex items-center justify-between gap-4 rounded-2xl bg-white px-4 py-3 transition-colors hover:text-brand-teal"
                      >
                        <span className="text-sm font-bold text-brand-navy">{sibling.name}</span>
                        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy/[0.7]">
                          {sibling.featureCount} features
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/features/${area.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-navy underline-offset-4 hover:text-brand-teal hover:underline"
                >
                  Back to {area.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </SectionReveal>

              <SectionReveal delay={0.08} className="rounded-[2rem] border border-brand-navy/[0.08] bg-brand-navy p-6 text-brand-beige md:p-8">
                <h2 className="text-2xl font-bold text-brand-beige">Which panel uses this</h2>
                <p className="mt-3 text-sm leading-6 text-brand-beige/80">
                  Roles reach {productModule.name.toLowerCase()} through these dashboards, with permissions
                  deciding what each person can open.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {panels.map((panel) => (
                    <li key={panel.slug}>
                      <Link
                        href={`/platform/${panel.slug}`}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-brand-beige transition-colors hover:border-brand-yellow/50 hover:text-brand-yellow"
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
