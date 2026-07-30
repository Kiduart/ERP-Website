import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { PageSeoHead, SITE_ORIGIN } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seoSchemas";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { ProductIcon } from "@/components/product/ProductIcon";
import {
  ACCENTS,
  Breadcrumbs,
  SectionHeading,
  type AccentName,
} from "@/components/product/ProductPrimitives";
import { findMatrixModule, getMatrixCategory } from "@/data/featureMatrix";
import { AREA_NARRATIVE_BY_SLUG } from "@/data/productNarrative";
import { PANEL_BY_SLUG } from "@/data/productPanels";
import { PERSONA_SLUGS, PRODUCT_PERSONAS, getPersona } from "@/data/productPersonas";

type ChallengeCard = {
  problem: string;
  cost: string;
  solution: string;
  modules: { areaSlug: string; moduleSlug: string; moduleName: string; featureCount: number }[];
};

type SolutionDetailProps = {
  persona: {
    slug: string;
    label: string;
    pageLabel: string;
    stage: string;
    headline: string;
    summary: string;
    intro: string;
    roleNames: string[];
    dayInLife: { when: string; what: string }[];
    toolsYouGet: string[];
    faqs: { q: string; a: string }[];
    image: string;
    imageAlt: string;
    icon: string;
    accent: AccentName;
  };
  challenges: ChallengeCard[];
  panels: { slug: string; label: string; stage: string }[];
  areas: { slug: string; label: string; featureCount: number; moduleCount: number }[];
  otherPersonas: { slug: string; label: string; pageLabel: string }[];
};

export default function SolutionDetail({
  persona,
  challenges,
  panels,
  areas,
  otherPersonas,
}: SolutionDetailProps) {
  const tokens = ACCENTS[persona.accent];
  const trail = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: persona.label, path: `/solutions/${persona.slug}` },
  ];

  return (
    <>
      <PageSeoHead
        title={`School ERP ${persona.pageLabel} | KIDUART`}
        description={persona.summary.length > 155 ? `${persona.summary.slice(0, 152)}...` : persona.summary}
        path={`/solutions/${persona.slug}`}
        ogImage={`${SITE_ORIGIN}${persona.image}`}
        keywords={`school ERP ${persona.label.toLowerCase()}, school management software ${persona.label.toLowerCase()}, ${persona.roleNames
          .map((role) => role.toLowerCase())
          .join(", ")}`}
      />
      <SchemaMarkup
        data={[buildBreadcrumbSchema(trail), buildFaqPageSchema({ [persona.label]: persona.faqs })]}
      />

      <PageTransition className="pt-20 pb-0">
        <section className="relative overflow-hidden border-b border-brand-navy/[0.06] bg-white pb-14 pt-12">
          <BackgroundBlobs blobs={[{ color: "#003049", size: 320, position: "top-right", opacity: 0.08 }]} />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs trail={trail} />

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <SectionReveal>
                <div
                  className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 ${tokens.border} ${tokens.softBg}`}
                >
                  <ProductIcon name={persona.icon} className={`h-4 w-4 ${tokens.text}`} />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
                    {persona.stage}
                  </span>
                </div>

                <h1 className="mt-6 text-4xl font-bold leading-tight text-brand-navy md:text-5xl">
                  {persona.headline}
                </h1>
                <p className="mt-5 text-lg leading-8 text-brand-navy/[0.78]">{persona.intro}</p>

                <div className="mt-7 rounded-2xl border border-brand-navy/[0.1] bg-brand-beige/25 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy">
                    Roles this covers
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {persona.roleNames.map((role) => (
                      <li
                        key={role}
                        className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-brand-navy/[0.84]"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-base font-bold text-brand-beige transition-all duration-300 hover:-translate-y-1 hover:bg-brand-teal"
                  >
                    Book a demo for this role
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/[0.14] bg-white px-7 py-3.5 text-base font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                  >
                    All role solutions
                  </Link>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-brand-navy/[0.08] shadow-xl shadow-brand-navy/5">
                  <Image
                    src={persona.image}
                    alt={persona.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover"
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-brand-beige/25">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <SectionHeading
                kicker="Challenges and answers"
                title={`What ${persona.label.toLowerCase()} tell us goes wrong — and what replaces it`}
                description="Each row names the manual problem, what it costs, and the module that removes it. Follow the module link to see how that module is built."
              />
            </SectionReveal>

            <ol className="mt-10 space-y-5">
              {challenges.map((challenge, index) => (
                <li key={challenge.problem}>
                  <SectionReveal
                    delay={Math.min(index * 0.05, 0.2)}
                    className="overflow-hidden rounded-[2rem] border border-brand-navy/[0.08] bg-white shadow-sm"
                  >
                    <div className="grid gap-0 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                      <div className="border-b border-brand-navy/[0.08] bg-brand-beige/25 p-6 md:border-b-0 md:border-r md:p-8">
                        <span className="inline-flex h-9 items-center gap-2 rounded-full bg-white px-3.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-orange-ink">
                          Challenge {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-4 text-xl font-bold text-brand-navy">{challenge.problem}</h3>
                        <p className="mt-3 text-sm leading-6 text-brand-navy/[0.8]">{challenge.cost}</p>
                      </div>

                      <div className="p-6 md:p-8">
                        <span
                          className={`inline-flex h-9 items-center gap-2 rounded-full px-3.5 text-xs font-bold uppercase tracking-[0.16em] ${tokens.softBg} ${tokens.text}`}
                        >
                          In KIDUART
                        </span>
                        <p className="mt-4 leading-7 text-brand-navy/[0.84]">{challenge.solution}</p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {challenge.modules.map((module) => (
                            <li key={`${module.areaSlug}-${module.moduleSlug}`}>
                              <Link
                                href={`/features/${module.areaSlug}/${module.moduleSlug}`}
                                className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/[0.12] bg-brand-beige/25 px-3.5 py-1.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                              >
                                {module.moduleName}
                                <span className="text-xs font-bold text-brand-navy/[0.75]">
                                  {module.featureCount}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SectionReveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-white">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <SectionReveal>
                <SectionHeading kicker="A typical day" title={`How the day runs for ${persona.label.toLowerCase()}`} />
                <ol className="mt-8 space-y-0">
                  {persona.dayInLife.map((step, index) => (
                    <li key={step.when} className="relative flex gap-5 pb-8 last:pb-0">
                      {index < persona.dayInLife.length - 1 ? (
                        <span
                          className="absolute left-[1.15rem] top-10 h-full w-px bg-brand-navy/[0.12]"
                          aria-hidden="true"
                        />
                      ) : null}
                      <span
                        className={`relative z-10 mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white ${tokens.solidBg}`}
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                      <span>
                        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
                          {step.when}
                        </span>
                        <span className="mt-1.5 block leading-7 text-brand-navy/[0.86]">{step.what}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </SectionReveal>

              <SectionReveal delay={0.08} className="rounded-[2rem] border border-brand-navy/[0.08] bg-brand-beige/20 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-brand-navy">What you get on day one</h2>
                <ul className="mt-6 space-y-2.5">
                  {persona.toolsYouGet.map((tool) => (
                    <li key={tool} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3">
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${tokens.softBg}`}
                        aria-hidden="true"
                      >
                        <Check className={`h-3 w-3 ${tokens.text}`} />
                      </span>
                      <span className="text-sm leading-6 text-brand-navy/[0.84]">{tool}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-brand-navy/[0.1] pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy">
                    Panels this role signs into
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {panels.map((panel) => (
                      <li key={panel.slug}>
                        <Link
                          href={`/platform/${panel.slug}`}
                          className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/[0.12] bg-white px-3.5 py-1.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                        >
                          {panel.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="section-space-tight relative overflow-hidden border-y border-brand-navy/[0.06] bg-brand-beige/25">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="text-2xl font-bold text-brand-navy">Module areas behind this role</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {areas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/features/${area.slug}`}
                      className="flex h-full flex-col rounded-2xl border border-brand-navy/[0.1] bg-white px-5 py-4 transition-colors hover:border-brand-teal/40"
                    >
                      <span className="text-base font-bold text-brand-navy">{area.label}</span>
                      <span className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy/[0.7]">
                        {area.moduleCount} modules · {area.featureCount} features
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-white">
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <SectionHeading
                kicker="Questions we get"
                title={`${persona.pageLabel.replace("For ", "").replace(/^./, (c) => c.toUpperCase())} — straight answers`}
                align="center"
              />
            </SectionReveal>

            <div className="mt-10 space-y-4">
              {persona.faqs.map((faq, index) => (
                <SectionReveal
                  key={faq.q}
                  delay={Math.min(index * 0.05, 0.15)}
                  className="rounded-3xl border border-brand-navy/[0.08] bg-brand-beige/20 p-6"
                >
                  <h3 className="text-lg font-bold text-brand-navy">{faq.q}</h3>
                  <p className="mt-3 leading-7 text-brand-navy/[0.82]">{faq.a}</p>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={0.1} className="mt-12">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-navy">
                Other roles
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {otherPersonas.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/solutions/${other.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/[0.12] bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                    >
                      {other.pageLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </section>

        <CtaSection
          title={`See KIDUART from the ${persona.label.toLowerCase()} point of view`}
          subtitle="We will run the demo in the panel this role uses, on a scenario you bring from your own school."
        />
      </PageTransition>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: PERSONA_SLUGS.map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<SolutionDetailProps> = async (context) => {
  const slug = String(context.params?.slug);
  const persona = getPersona(slug);

  if (!persona) return { notFound: true };

  const challenges: ChallengeCard[] = persona.challenges.map((challenge) => ({
    problem: challenge.problem,
    cost: challenge.cost,
    solution: challenge.solution,
    modules: challenge.modules.flatMap((ref) => {
      const category = getMatrixCategory(ref.area);
      const matrixModule = findMatrixModule(category, ref.module);
      if (!category || !matrixModule) return [];
      return [
        {
          areaSlug: category.slug,
          moduleSlug: matrixModule.slug,
          moduleName: matrixModule.name,
          featureCount: matrixModule.featureCount,
        },
      ];
    }),
  }));

  return {
    props: {
      persona: {
        slug: persona.slug,
        label: persona.label,
        pageLabel: persona.pageLabel,
        stage: persona.stage,
        headline: persona.headline,
        summary: persona.summary,
        intro: persona.intro,
        roleNames: persona.roleNames,
        dayInLife: persona.dayInLife,
        toolsYouGet: persona.toolsYouGet,
        faqs: persona.faqs,
        image: persona.image,
        imageAlt: persona.imageAlt,
        icon: persona.icon,
        accent: persona.accent,
      },
      challenges,
      panels: persona.panels.flatMap((panelSlug) => {
        const panel = PANEL_BY_SLUG[panelSlug];
        return panel ? [{ slug: panel.slug, label: panel.label, stage: panel.stage }] : [];
      }),
      areas: persona.areas.flatMap((areaSlug) => {
        const category = getMatrixCategory(areaSlug);
        const narrative = AREA_NARRATIVE_BY_SLUG[areaSlug];
        if (!category || !narrative) return [];
        return [
          {
            slug: category.slug,
            label: narrative.label,
            featureCount: category.featureCount,
            moduleCount: category.moduleCount,
          },
        ];
      }),
      otherPersonas: PRODUCT_PERSONAS.filter((entry) => entry.slug !== persona.slug)
        .sort((a, b) => a.order - b.order)
        .map((entry) => ({ slug: entry.slug, label: entry.label, pageLabel: entry.pageLabel })),
    },
  };
};
