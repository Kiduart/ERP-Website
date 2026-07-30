import type { GetStaticProps } from "next";
import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { pageSeo } from "@/lib/pageSeo";
import { buildFaqPageSchema } from "@/lib/seoSchemas";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { ArrowRight, Check, HelpCircle, Minus } from "lucide-react";
import { Link } from "wouter";
import { ProductIcon } from "@/components/product/ProductIcon";
import { StatChip } from "@/components/product/ProductPrimitives";
import { pricingPlans } from "@/data/pricing";
import { pricingFaqs } from "@/data/pricingFaqs";
import { AREA_NARRATIVES } from "@/data/productNarrative";
import { MATRIX_CATEGORIES, MATRIX_TOTALS } from "@/data/featureMatrix";

const pricingAssurances = [
  "All logins included — staff, teachers, students, parents",
  "Only the module areas you switch on",
  "Guided onboarding in product order",
  "Full data export whenever you ask",
];

type CoverageArea = {
  slug: string;
  label: string;
  icon: string;
  moduleCount: number;
  featureCount: number;
  inCore: boolean;
};

type PricingPageProps = {
  coverage: CoverageArea[];
  totals: typeof MATRIX_TOTALS;
  coreAreaCount: number;
};

export default function Pricing({ coverage, totals, coreAreaCount }: PricingPageProps) {
  return (
    <PageTransition className="pt-20 pb-0">
      <PageSeoHead {...pageSeo.pricing} />
      <SchemaMarkup data={buildFaqPageSchema({ pricing: pricingFaqs })} />

      <section className="section-space bg-brand-beige/20 relative overflow-hidden">
        <BackgroundBlobs
          blobs={[
            { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
            { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 },
          ]}
        />
        <FloatingIcons icons={["Star", "Award", "Lightbulb"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mx-auto mb-12 max-w-3xl text-center">
            <div className="section-kicker">Straightforward school ERP pricing</div>
            <h1 className="mt-6 text-[clamp(2rem,1.45rem+1.8vw,3.75rem)] font-bold text-brand-navy">
              Pay per student, switch on the modules you actually run
            </h1>
            <p className="mt-4 text-lg leading-8 text-brand-navy/[0.72]">
              KIDUART ships {totals.categories} module areas, {totals.modules} functional modules and{" "}
              {totals.features.toLocaleString("en-IN")} features. You pay for active students — staff, teacher,
              student and parent logins are included — and your plan decides which of those areas are switched on.
            </p>
          </SectionReveal>

          <SectionReveal className="mx-auto mb-14 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            <StatChip value={totals.categories} label="Module areas" />
            <StatChip value={totals.modules} label="Functional modules" />
            <StatChip value={totals.features.toLocaleString("en-IN")} label="Features" />
            <StatChip value="0" label="Per-user charges" />
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-20">
            {pricingPlans.map((plan, idx) => (
              <SectionReveal
                key={plan.name}
                delay={idx * 0.1}
                className={`relative flex flex-col rounded-3xl bg-white p-8 shadow-2xl ${
                  plan.isPopular ? "border-2 border-brand-teal lg:scale-105" : "border border-brand-navy/10 md:my-8"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal px-4 py-1 text-sm font-bold tracking-wide text-white">
                    MOST CHOSEN
                  </div>
                )}
                <h2 className="text-2xl font-bold text-brand-navy">{plan.name}</h2>
                <p className="mt-2 text-sm leading-6 text-brand-navy/[0.7]">{plan.desc}</p>

                <div className="mt-6 border-b border-brand-navy/10 pb-6">
                  <div className="text-2xl font-extrabold text-brand-navy">
                    {plan.price === "Custom" ? "Custom quote" : "Get a quote"}
                  </div>
                  <div className="mt-1 text-sm text-brand-navy/[0.7]">
                    {plan.price === "Custom" ? "Priced per campus and student count" : `Priced ${plan.unit}`}
                  </div>
                  <p className="mt-4 rounded-2xl bg-brand-beige/40 px-4 py-3 text-sm font-semibold leading-6 text-brand-navy">
                    Best for: {plan.bestFor}
                  </p>
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-teal">
                  {plan.areas.length} module {plan.areas.length === 1 ? "area" : "areas"} included
                </p>
                <ul className="mt-4 mb-8 flex-1 space-y-3.5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" aria-hidden="true" />
                      <span className="text-sm font-medium leading-6 text-brand-navy/[0.82]">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.price === "Custom" ? "/contact" : "/demo"}
                  className={`block w-full rounded-xl py-4 text-center font-bold transition-all ${
                    plan.isPopular
                      ? "bg-brand-teal text-white shadow-lg hover:bg-brand-navy hover:shadow-brand-teal/25"
                      : "bg-brand-beige text-brand-navy hover:bg-brand-navy hover:text-white"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Book a Free Demo"}
                </Link>
              </SectionReveal>
            ))}
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pricingAssurances.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 rounded-2xl border border-brand-navy/10 bg-white px-4 py-4 text-sm font-medium leading-6 text-brand-navy"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space relative overflow-hidden border-y border-brand-navy/5 bg-white">
        <BackgroundBlobs blobs={[{ color: "#003049", size: 340, position: "top-right", opacity: 0.1 }]} />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">What each plan covers</p>
            <h2 className="mt-4 text-3xl font-bold text-brand-navy md:text-4xl">
              Every module area, and which plan turns it on
            </h2>
            <p className="mt-4 text-lg leading-8 text-brand-navy/[0.74]">
              Core carries the {coreAreaCount} areas a school cannot run a day without. Complete adds the rest.
              Group applies Complete across every campus under one organisation. Open any area to read its full
              module list before you decide.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-12 overflow-hidden rounded-[2rem] border border-brand-navy/10 shadow-xl shadow-brand-navy/5">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Module areas included in the Core, Complete and Group plans
              </caption>
              <thead>
                <tr className="bg-brand-navy text-brand-beige">
                  <th scope="col" className="px-5 py-4 text-sm font-bold uppercase tracking-[0.14em]">
                    Module area
                  </th>
                  <th scope="col" className="px-3 py-4 text-center text-sm font-bold uppercase tracking-[0.14em]">
                    Core
                  </th>
                  <th scope="col" className="px-3 py-4 text-center text-sm font-bold uppercase tracking-[0.14em]">
                    Complete
                  </th>
                  <th scope="col" className="px-3 py-4 text-center text-sm font-bold uppercase tracking-[0.14em]">
                    Group
                  </th>
                </tr>
              </thead>
              <tbody>
                {coverage.map((area, idx) => (
                  <tr
                    key={area.slug}
                    className={idx % 2 === 0 ? "bg-white" : "bg-brand-beige/25"}
                  >
                    <th scope="row" className="px-5 py-4 font-normal">
                      <Link
                        href={`/features/${area.slug}`}
                        className="group flex items-start gap-3 underline-offset-4 hover:underline"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10">
                          <ProductIcon name={area.icon} className="h-4 w-4 text-brand-teal" />
                        </span>
                        <span>
                          <span className="block font-bold text-brand-navy group-hover:text-brand-teal">
                            {area.label}
                          </span>
                          <span className="mt-0.5 block text-xs font-semibold text-brand-navy/[0.7]">
                            {area.moduleCount} modules · {area.featureCount} features
                          </span>
                        </span>
                      </Link>
                    </th>
                    <td className="px-3 py-4 text-center">
                      {area.inCore ? (
                        <>
                          <Check className="mx-auto h-5 w-5 text-brand-teal" aria-hidden="true" />
                          <span className="sr-only">Included in Core</span>
                        </>
                      ) : (
                        <>
                          <Minus className="mx-auto h-5 w-5 text-brand-navy/30" aria-hidden="true" />
                          <span className="sr-only">Not in Core</span>
                        </>
                      )}
                    </td>
                    <td className="px-3 py-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-brand-teal" aria-hidden="true" />
                      <span className="sr-only">Included in Complete</span>
                    </td>
                    <td className="px-3 py-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-brand-teal" aria-hidden="true" />
                      <span className="sr-only">Included in Group</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SectionReveal>

          <SectionReveal className="mt-8">
            <p className="max-w-3xl text-base leading-8 text-brand-navy/[0.74]">
              When an area is included in your plan, it arrives complete — the everyday actions your staff repeat
              and the configuration around them, like grading rules, fee templates, permissions and report
              formats. Nothing inside an area you already have is held back as a paid unlock.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space-tight relative overflow-hidden border-b border-brand-navy/5 bg-brand-beige/20">
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">
              Ask about these during the demo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-navy/[0.74]">
              These areas depend heavily on how your campus runs, so we scope them with you instead of guessing.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  slug: "transport-management",
                  title: "Transport & tracking",
                  note: "Routes, vehicles, drivers and live tracking — only if you run your own buses.",
                },
                {
                  slug: "hostel-management",
                  title: "Hostel & mess",
                  note: "Bed-level allocation, hostel attendance, mess and visitor log for boarding schools.",
                },
                {
                  slug: "dashboard-and-insights",
                  title: "Dashboards & insights",
                  note: "Role dashboards and AI-assisted alerts layered on your live records.",
                },
              ].map((addon) => (
                <div
                  key={addon.slug}
                  className="rounded-2xl border border-brand-navy/10 bg-white p-6 text-left"
                >
                  <h3 className="font-bold text-brand-navy">{addon.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-navy/[0.72]">{addon.note}</p>
                  <Link
                    href={`/features/${addon.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-teal transition-colors hover:text-brand-navy"
                  >
                    See the modules <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[{ color: "#0c716b", size: 300, position: "bottom-left", opacity: 0.12 }]} />
        <FloatingIcons icons={["MessageSquare", "Users"]} count={4} />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-brand-navy">Common questions about pricing and plans</h2>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {pricingFaqs.map((faq, idx) => (
              <SectionReveal
                key={faq.q}
                delay={Math.min(idx, 5) * 0.05}
                className="rounded-2xl border border-brand-navy/[0.08] bg-brand-beige/20 p-6"
              >
                <h3 className="mb-3 flex items-start gap-2 text-lg font-bold text-brand-navy">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                  {faq.q}
                </h3>
                <p className="ml-7 text-sm leading-7 text-brand-navy/[0.74]">{faq.a}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Get a price against your real student count"
        subtitle="Bring your class structure, fee book and module wish list to the demo — we will show the panels and quote the plan that fits."
      />
    </PageTransition>
  );
}

export const getStaticProps: GetStaticProps<PricingPageProps> = async () => {
  const corePlan = pricingPlans.find((plan) => plan.name === "Core");
  const coreAreas = new Set(corePlan?.areas ?? []);

  return {
    props: {
      coverage: MATRIX_CATEGORIES.map((category) => {
        const narrative = AREA_NARRATIVES.find((entry) => entry.slug === category.slug);
        return {
          slug: category.slug,
          label: narrative?.label ?? category.name,
          icon: narrative?.icon ?? "Layers",
          moduleCount: category.moduleCount,
          featureCount: category.featureCount,
          inCore: coreAreas.has(category.slug),
        };
      }),
      totals: MATRIX_TOTALS,
      coreAreaCount: coreAreas.size,
    },
  };
};
