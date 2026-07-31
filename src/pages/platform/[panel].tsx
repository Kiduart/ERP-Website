import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { SITE_ORIGIN } from "@/components/seo/PageSeoHead";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/seoSchemas";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { PanelMockup } from "@/components/product/PanelMockup";
import { ProductIcon } from "@/components/product/ProductIcon";
import {
  ACCENTS,
  Breadcrumbs,
  SectionHeading,
  SignalList,
  type AccentName,
} from "@/components/product/ProductPrimitives";
import { findMatrixModule, getMatrixCategory } from "@/data/featureMatrix";
import { AREA_NARRATIVE_BY_SLUG } from "@/data/productNarrative";
import { PANEL_SLUGS, PRODUCT_PANELS, getPanel } from "@/data/productPanels";
import type { PanelLayout } from "@/data/productPanels";

type PanelModuleCard = {
  areaSlug: string;
  areaLabel: string;
  moduleName: string;
  moduleSlug: string;
  featureCount: number;
  subModules: string[];
};

type PanelAreaLink = {
  slug: string;
  label: string;
  stage: string;
  featureCount: number;
  moduleCount: number;
};

type PanelPageProps = {
  panel: {
    slug: string;
    order: number;
    label: string;
    shortLabel: string;
    stage: string;
    headline: string;
    summary: string;
    intro: string;
    audience: string[];
    whatYouSee: string[];
    firstHour: string[];
    image: string;
    imageAlt: string;
    icon: string;
    accent: AccentName;
    layout: PanelLayout;
  };
  modules: PanelModuleCard[];
  areas: PanelAreaLink[];
  totals: { features: number; modules: number };
  neighbours: {
    previous: { slug: string; label: string } | null;
    next: { slug: string; label: string } | null;
  };
};

export default function PanelPage({ panel, modules, areas, neighbours }: PanelPageProps) {
  const tokens = ACCENTS[panel.accent];
  const trail = [
    { name: "Home", path: "/" },
    { name: "Platform", path: "/platform" },
    { name: panel.label, path: `/platform/${panel.slug}` },
  ];

  return (
    <>
      <PageSeoHead
        title={`${panel.label} — School ERP Dashboard | KIDUART`}
        description={panel.summary.length > 155 ? `${panel.summary.slice(0, 152)}...` : panel.summary}
        path={`/platform/${panel.slug}`}
        ogImage={`${SITE_ORIGIN}${panel.image}`}
        keywords={`${panel.shortLabel.toLowerCase()} dashboard school ERP, ${panel.label.toLowerCase()}, school management software ${panel.shortLabel.toLowerCase()} panel`}
      />
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema(trail),
          buildItemListSchema(
            `${panel.label} capabilities`,
            panel.whatYouSee.map((item) => ({ name: item })),
          ),
        ]}
      />

      <PageTransition className="pt-20 pb-0">
        <section className="relative overflow-hidden border-b border-brand-navy/[0.06] bg-white pb-14 pt-12">
          <BackgroundBlobs blobs={[{ color: "#003049", size: 320, position: "top-left", opacity: 0.08 }]} />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs trail={trail} />

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <SectionReveal>
                <div
                  className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 ${tokens.border} ${tokens.softBg}`}
                >
                  <ProductIcon name={panel.icon} className={`h-4 w-4 ${tokens.text}`} />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
                    {panel.stage}
                  </span>
                </div>

                <h1 className="mt-6 text-4xl font-bold leading-tight text-brand-navy md:text-5xl">
                  {panel.headline}
                </h1>
                <p className="mt-5 text-lg leading-8 text-brand-navy/[0.78]">{panel.intro}</p>

                <div className="mt-7">
                  <SignalList
                    items={[
                      {
                        id: "modules",
                        title: "Modules in reach",
                        detail: "Workflows this role opens most often",
                        href: "#panel-modules",
                      },
                      {
                        id: "day",
                        title: "Day-one setup",
                        detail: "First hour path so the panel is useful immediately",
                      },
                      {
                        id: "roles",
                        title: panel.audience.join(" · "),
                        detail: "Who signs into this panel",
                      },
                    ]}
                  />
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-base font-bold text-brand-beige transition-all duration-300 hover:-translate-y-1 hover:bg-brand-teal"
                  >
                    Demo this panel
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/platform"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/[0.14] bg-white px-7 py-3.5 text-base font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                  >
                    All panels
                  </Link>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.1} className="space-y-5">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-brand-navy/[0.08] shadow-xl shadow-brand-navy/5">
                  <Image
                    src={panel.image}
                    alt={panel.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <PanelMockup layout={panel.layout} accent={panel.accent} />
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-brand-beige/25">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <SectionReveal className="rounded-[2rem] border border-brand-navy/[0.08] bg-white p-6 md:p-8">
                <h2 className="text-2xl font-bold text-brand-navy">What this panel shows</h2>
                <p className="mt-3 text-sm leading-6 text-brand-navy/[0.76]">
                  Each item below is a real screen or workflow in the panel, not a category name.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {panel.whatYouSee.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-2xl bg-brand-beige/25 px-4 py-3">
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${tokens.softBg}`}
                        aria-hidden="true"
                      >
                        <Check className={`h-3 w-3 ${tokens.text}`} />
                      </span>
                      <span className="text-sm leading-6 text-brand-navy/[0.84]">{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionReveal>

              <SectionReveal delay={0.08} className="rounded-[2rem] border border-brand-navy/[0.08] bg-brand-navy p-6 text-brand-beige md:p-8">
                <h2 className="text-2xl font-bold text-brand-beige">Your first hour here</h2>
                <p className="mt-3 text-sm leading-6 text-brand-beige/80">
                  Implementation follows this order, so the panel is useful on day one rather than
                  after a month of configuration.
                </p>
                <ol className="mt-6 space-y-3">
                  {panel.firstHour.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-sm font-extrabold text-brand-navy">
                        {index + 1}
                      </span>
                      <span className="text-sm leading-6 text-brand-beige/90">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-sm leading-6 text-brand-beige/75">
                  Signing in as: {panel.audience.join(", ")}.
                </p>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section id="panel-modules" className="section-space relative overflow-hidden bg-white">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <SectionHeading
                kicker="Modules behind this panel"
                title="The workflows this role opens most"
                description="Each card opens the module page for that area, with the capabilities schools ask about most."
              />
            </SectionReveal>

            <SectionReveal delay={0.08} className="mt-10 grid gap-5 md:grid-cols-2">
              {modules.map((module) => (
                <Link
                  key={`${module.areaSlug}-${module.moduleSlug}`}
                  href={`/features/${module.areaSlug}/${module.moduleSlug}`}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-brand-navy/[0.08] bg-brand-beige/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:bg-white"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
                    {module.areaLabel}
                  </span>
                  <span className="mt-2 text-xl font-bold text-brand-navy">{module.moduleName}</span>
                  <span className="mt-3 text-sm leading-6 text-brand-navy/[0.78]">
                    {module.subModules.join(" · ")}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-teal">
                    Open module
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </SectionReveal>

            <SectionReveal delay={0.12} className="mt-10 rounded-[2rem] border border-brand-navy/[0.08] bg-brand-beige/20 p-6 md:p-8">
              <h3 className="text-xl font-bold text-brand-navy">Full areas this panel can reach</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {areas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/features/${area.slug}`}
                      className="flex h-full flex-col rounded-2xl bg-white px-5 py-4 transition-colors hover:text-brand-teal"
                    >
                      <span className="text-base font-bold text-brand-navy">{area.label}</span>
                      <span className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy/[0.7]">
                        Open area
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </section>

        <section className="section-space-tight relative overflow-hidden border-y border-brand-navy/[0.06] bg-brand-beige/25">
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {neighbours.previous ? (
                <Link
                  href={`/platform/${neighbours.previous.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-navy/[0.12] bg-white px-5 py-3 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  {neighbours.previous.label}
                </Link>
              ) : (
                <span />
              )}
              {neighbours.next ? (
                <Link
                  href={`/platform/${neighbours.next.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-navy/[0.12] bg-white px-5 py-3 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                >
                  {neighbours.next.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>
        </section>

        <CtaSection
          title={`See the ${panel.shortLabel} panel with your own school data`}
          subtitle="We will load a sample of your classes, staff or fee heads so the walkthrough looks like your school, not a template."
        />
      </PageTransition>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: PANEL_SLUGS.map((slug) => ({ params: { panel: slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<PanelPageProps> = async (context) => {
  const slug = String(context.params?.panel);
  const panel = getPanel(slug);

  if (!panel) return { notFound: true };

  const ordered = [...PRODUCT_PANELS].sort((a, b) => a.order - b.order);
  const index = ordered.findIndex((entry) => entry.slug === slug);
  const previous = index > 0 ? ordered[index - 1] : null;
  const next = index < ordered.length - 1 ? ordered[index + 1] : null;

  const modules: PanelModuleCard[] = panel.keyModules.flatMap((ref) => {
    const category = getMatrixCategory(ref.area);
    const matrixModule = findMatrixModule(category, ref.module);
    if (!category || !matrixModule) return [];

    return [
      {
        areaSlug: category.slug,
        areaLabel: AREA_NARRATIVE_BY_SLUG[category.slug]?.label ?? category.name,
        moduleName: matrixModule.name,
        moduleSlug: matrixModule.slug,
        featureCount: matrixModule.featureCount,
        subModules: matrixModule.subModules.map((subModule) => subModule.name),
      },
    ];
  });

  const areas: PanelAreaLink[] = panel.areas.flatMap((areaSlug) => {
    const category = getMatrixCategory(areaSlug);
    const narrative = AREA_NARRATIVE_BY_SLUG[areaSlug];
    if (!category || !narrative) return [];
    return [
      {
        slug: category.slug,
        label: narrative.label,
        stage: narrative.stage,
        featureCount: category.featureCount,
        moduleCount: category.moduleCount,
      },
    ];
  });

  return {
    props: {
      panel: {
        slug: panel.slug,
        order: panel.order,
        label: panel.label,
        shortLabel: panel.shortLabel,
        stage: panel.stage,
        headline: panel.headline,
        summary: panel.summary,
        intro: panel.intro,
        audience: panel.audience,
        whatYouSee: panel.whatYouSee,
        firstHour: panel.firstHour,
        image: panel.image,
        imageAlt: panel.imageAlt,
        icon: panel.icon,
        accent: panel.accent,
        layout: panel.layout,
      },
      modules,
      areas,
      totals: {
        features: areas.reduce((sum, area) => sum + area.featureCount, 0),
        modules: areas.reduce((sum, area) => sum + area.moduleCount, 0),
      },
      neighbours: {
        previous: previous ? { slug: previous.slug, label: previous.label } : null,
        next: next ? { slug: next.slug, label: next.label } : null,
      },
    },
  };
};
