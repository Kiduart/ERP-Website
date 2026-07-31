import type { GetStaticPaths, GetStaticProps } from "next";
import { Link } from "wouter";
import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { integrationPageSeo } from "@/lib/pageSeo";
import { buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seoSchemas";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Info, KeyRound, Receipt, Shield } from "lucide-react";
import { ProductIcon } from "@/components/product/ProductIcon";
import { IntegrationStatusPill } from "@/components/product/IntegrationStatusPill";
import { ACCENTS, Breadcrumbs, TextLink } from "@/components/product/ProductPrimitives";
import { cn } from "@/lib/utils";
import integrationsData, { INTEGRATION_STATUS_META } from "@/data/integrationsData";
import type { IntegrationEntry } from "@/data/integrationsData";
import { AREA_NARRATIVE_BY_SLUG } from "@/data/productNarrative";
import { findMatrixModule, getMatrixCategory } from "@/data/featureMatrix";

type LinkedModule = {
  areaSlug: string;
  areaLabel: string;
  moduleName: string;
  moduleSlug: string;
  featureCount: number;
};

type RelatedIntegration = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  status: IntegrationEntry["status"];
};

type IntegrationPageProps = {
  slug: string;
  integration: IntegrationEntry;
  linkedModules: LinkedModule[];
  related: RelatedIntegration[];
};

const MUTED = { color: "rgb(var(--hero-muted-rgb) / 0.8)" };

const OWNERSHIP_CARDS = [
  { key: "credentials", label: "Who holds the credentials", icon: KeyRound },
  { key: "data", label: "Where the data sits", icon: Shield },
  { key: "billing", label: "Who gets billed", icon: Receipt },
] as const;

export default function IntegrationDetail({
  slug,
  integration,
  linkedModules,
  related,
}: IntegrationPageProps) {
  const tokens = ACCENTS[integration.accent];
  const isPlanned = integration.status === "planned";
  const isGuided = integration.status === "guided";
  const statusMeta = INTEGRATION_STATUS_META[integration.status];

  return (
    <>
      <PageSeoHead
        {...integrationPageSeo(slug, integration.name, integration.description, integration.keywords)}
      />
      <SchemaMarkup
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Integrations", path: "/integrations" },
          { name: integration.name, path: `/integrations/${slug}` },
        ])}
      />
      <SchemaMarkup data={buildFaqPageSchema({ integration: integration.faqs })} />

      <PageTransition className="pt-20 pb-0">
        <section className="relative overflow-hidden bg-[#f5f0e6]">
          <BackgroundBlobs
            blobs={[
              { color: "#fcbf49", size: 360, position: "top-left", opacity: 0.14 },
              { color: "#0c716b", size: 360, position: "bottom-right", opacity: 0.14 },
            ]}
          />
          <FloatingIcons icons={["Blocks", "Zap", "Code2"]} count={4} heroMode />

          <div className="page-shell relative z-10 py-14 md:py-20">
            <Breadcrumbs
              trail={[
                { name: "Home", path: "/" },
                { name: "Integrations", path: "/integrations" },
                { name: integration.name, path: `/integrations/${slug}` },
              ]}
            />

            <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start">
              <SectionReveal>
                <div className="flex flex-wrap items-center gap-3">
                  <span className={cn("flex h-14 w-14 items-center justify-center rounded-2xl", tokens.softBg)}>
                    <ProductIcon name={integration.icon} className={cn("h-7 w-7", tokens.text)} />
                  </span>
                  <span className="rounded-full bg-brand-navy/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
                    {integration.category}
                  </span>
                  <IntegrationStatusPill status={integration.status} className="px-4 py-1.5 text-xs" />
                </div>

                <h1 className="mt-6 text-[clamp(2rem,1.5rem+1.8vw,3.5rem)] font-bold leading-[1.05] text-brand-navy">
                  {integration.name} with KIDUART
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-navy/[0.78]">{integration.intro}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {integration.providers.map((provider) => (
                    <span
                      key={provider}
                      className="rounded-lg border border-brand-navy/[0.12] bg-white px-3 py-1.5 text-xs font-bold text-brand-navy/[0.8]"
                    >
                      {provider}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-sm font-bold text-brand-beige transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
                  >
                    Book a demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/integrations"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 bg-white px-7 py-3.5 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                  >
                    All integrations
                  </Link>
                </div>
              </SectionReveal>

              <SectionReveal
                delay={0.12}
                className="rounded-[2rem] border border-brand-navy/[0.1] bg-white p-7 shadow-xl shadow-brand-navy/[0.06]"
              >
                <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-navy">
                  {isPlanned ? "What is planned" : "What you get"}
                </h2>
                <ul className="mt-5 space-y-3">
                  {integration.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          tokens.softBg,
                        )}
                        aria-hidden="true"
                      >
                        <Check className={cn("h-3 w-3", tokens.text)} />
                      </span>
                      <span className="text-sm leading-7 text-brand-navy/[0.82]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            </div>
          </div>
        </section>

        {isPlanned || isGuided ? (
          <section
            className={cn(
              "border-y",
              isPlanned ? "border-brand-orange/20 bg-brand-orange/[0.07]" : "border-brand-teal/20 bg-brand-teal/[0.06]",
            )}
          >
            <div className="page-shell flex items-start gap-4 py-6">
              <Info
                className={cn("mt-0.5 h-5 w-5 shrink-0", isPlanned ? "text-brand-orange" : "text-brand-teal")}
                aria-hidden="true"
              />
              <p className="text-sm leading-7 text-brand-navy/[0.82]">
                <strong className="font-bold text-brand-navy">{statusMeta.long}.</strong> {statusMeta.note}
                {isPlanned
                  ? " If it decides whether KIDUART fits your school, tell us during the demo — we prioritise by what schools actually block on."
                  : " Bring the account details to the demo and we will scope the setup call there and then."}
              </p>
            </div>
          </section>
        ) : null}

        <section className="section-space relative overflow-hidden bg-brand-navy" style={{ color: "#fcf6d3" }}>
          <BackgroundBlobs
            blobs={[
              { color: "#fcbf49", size: 380, position: "top-left", opacity: 0.14 },
              { color: "#0c716b", size: 380, position: "bottom-right", opacity: 0.14 },
            ]}
          />
          <div className="page-shell relative z-10">
            <SectionReveal className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">
                {isPlanned ? "Where this stands" : "The connection, hop by hop"}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-brand-beige md:text-4xl">
                How {integration.name} actually works here
              </h2>
              <p className="mt-4 text-base leading-8" style={MUTED}>
                {isPlanned
                  ? "This is not live yet, so here is exactly what you can do today and what will change when it ships."
                  : "No hand-waving about being 'seamlessly integrated'. This is the path a single event takes, end to end."}
              </p>
            </SectionReveal>

            <div className="relative mt-12">
              <span
                aria-hidden="true"
                className="console-rail pointer-events-none absolute left-6 right-6 top-5 hidden lg:block"
              />
              <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {integration.flow.map((step, index) => (
                  <li key={step.label}>
                    <SectionReveal delay={Math.min(index, 3) * 0.08}>
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-yellow/50 bg-brand-navy text-sm font-extrabold text-brand-yellow"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 text-lg font-bold text-brand-beige">{step.label}</h3>
                      <p className="mt-2 text-sm leading-7" style={MUTED}>
                        {step.detail}
                      </p>
                    </SectionReveal>
                  </li>
                ))}
              </ol>
            </div>

            <SectionReveal className="mt-14">
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-yellow">
                Keys, data and the bill
              </h3>
              <div className="mt-5 grid gap-5 md:grid-cols-3">
                {OWNERSHIP_CARDS.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.key}
                      className="console-panel rounded-2xl border border-white/12 bg-white/[0.05] p-6"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow/[0.16] text-brand-yellow">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <p className="mt-4 text-sm font-bold text-brand-beige">{card.label}</p>
                      <p className="mt-2 text-sm leading-7" style={MUTED}>
                        {integration.ownership[card.key]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </SectionReveal>
          </div>
        </section>

        {linkedModules.length > 0 ? (
          <section className="section-space-tight border-b border-brand-navy/5 bg-white">
            <div className="page-shell">
              <SectionReveal className="mx-auto max-w-3xl text-center">
                <p className="section-kicker">Where it lands in the product</p>
                <h2 className="mt-4 text-3xl font-bold text-brand-navy">
                  The modules this integration writes into
                </h2>
                <p className="mt-4 text-base leading-8 text-brand-navy/[0.76]">
                  An integration is only useful if it writes into the module your staff already work in.
                  These are the exact modules involved.
                </p>
              </SectionReveal>

              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {linkedModules.map((entry) => (
                  <SectionReveal
                    key={`${entry.areaSlug}-${entry.moduleSlug}`}
                    className="rounded-2xl border border-brand-navy/[0.1] bg-brand-beige/20 p-6"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-teal">
                      {entry.areaLabel}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-brand-navy">{entry.moduleName}</h3>
                    <p className="mt-2 text-sm font-semibold text-brand-navy/[0.74]">
                      Linked workflows in the product
                    </p>
                    <TextLink href={`/features/${entry.areaSlug}/${entry.moduleSlug}`} className="mt-4">
                      Open {entry.moduleName}
                    </TextLink>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section-space bg-brand-beige/25">
          <div className="page-shell">
            <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:items-start">
              <SectionReveal>
                <p className="section-kicker">{isPlanned ? "How to register interest" : "Setup, step by step"}</p>
                <h2 className="mt-4 text-3xl font-bold text-brand-navy">
                  {isPlanned ? "What happens if you need this" : `Connecting ${integration.name}`}
                </h2>
                <ol className="mt-8 space-y-5">
                  {integration.steps.map((step, idx) => (
                    <li
                      key={step}
                      className="flex gap-4 rounded-2xl border border-brand-navy/[0.08] bg-white p-5 transition-colors hover:border-brand-teal/35"
                    >
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-extrabold text-white",
                          tokens.solidBg,
                        )}
                        aria-hidden="true"
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-2 text-base leading-7 text-brand-navy/[0.82]">{step}</p>
                    </li>
                  ))}
                </ol>
              </SectionReveal>

              <SectionReveal
                delay={0.15}
                className="rounded-[2rem] border border-brand-navy/[0.1] bg-white p-7 lg:sticky lg:top-28"
              >
                <h2 className="text-xl font-bold text-brand-navy">What you need on your side</h2>
                <ul className="mt-5 space-y-4">
                  {integration.requirements.map((req) => (
                    <li key={req} className="flex gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" aria-hidden="true" />
                      <span className="text-sm leading-7 text-brand-navy/[0.82]">{req}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/demo"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-navy hover:text-brand-beige"
                >
                  Scope this on a call <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="section-space border-y border-brand-navy/5 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionReveal className="mb-10 text-center">
              <p className="section-kicker">Questions schools ask</p>
              <h2 className="mt-4 text-3xl font-bold text-brand-navy">{integration.name}, answered plainly</h2>
            </SectionReveal>

            <div className="space-y-4">
              {integration.faqs.map((faq) => (
                <SectionReveal key={faq.q}>
                  <details className="group rounded-2xl border border-brand-navy/[0.1] bg-brand-beige/20 p-6 transition-colors open:border-brand-teal/40">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-bold text-brand-navy marker:content-none">
                      {faq.q}
                      <ChevronDown
                        className="h-5 w-5 shrink-0 text-brand-navy/50 transition-transform group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="mt-4 border-t border-brand-navy/[0.08] pt-4 text-base leading-7 text-brand-navy/[0.78]">
                      {faq.a}
                    </p>
                  </details>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="section-space-tight bg-brand-beige/25">
            <div className="page-shell">
              <SectionReveal className="mb-8">
                <p className="section-kicker">Also in {integration.category.toLowerCase()}</p>
                <h2 className="mt-3 text-2xl font-bold text-brand-navy">Related integrations</h2>
              </SectionReveal>
              <div className="grid gap-5 md:grid-cols-3">
                {related.map((entry) => (
                  <SectionReveal key={entry.slug}>
                    <Link
                      href={`/integrations/${entry.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-brand-navy/[0.1] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <ProductIcon name={entry.icon} className="h-6 w-6 text-brand-teal" />
                        <IntegrationStatusPill status={entry.status} />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-brand-navy group-hover:text-brand-teal">
                        {entry.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-7 text-brand-navy/[0.76]">{entry.description}</p>
                    </Link>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <CtaSection
          title={`See ${integration.name} in a live demo`}
          subtitle="We will run the connection on screen with your own scenario — your fee book, your parent groups, your school accounts."
        />
      </PageTransition>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Object.keys(integrationsData).map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<IntegrationPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const integration = integrationsData[slug];

  if (!integration) return { notFound: true };

  const linkedModules: LinkedModule[] = integration.modules.flatMap((ref) => {
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
      },
    ];
  });

  const related: RelatedIntegration[] = Object.entries(integrationsData)
    .filter(([entrySlug, entry]) => entrySlug !== slug && entry.category === integration.category)
    .slice(0, 3)
    .map(([entrySlug, entry]) => ({
      slug: entrySlug,
      name: entry.name,
      description: entry.description,
      icon: entry.icon,
      status: entry.status,
    }));

  return { props: { slug, integration, linkedModules, related } };
};
