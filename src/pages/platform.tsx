import type { GetStaticProps } from "next";
import Image from "next/image";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { pageSeo } from "@/lib/pageSeo";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/seoSchemas";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { ImageBackdropHero } from "@/components/ui/CustomHeroes";
import { ProductIcon } from "@/components/product/ProductIcon";
import { ACCENTS, SectionHeading, StatChip, type AccentName } from "@/components/product/ProductPrimitives";
import { MATRIX_TOTALS, getMatrixCategory } from "@/data/featureMatrix";
import { PRODUCT_PANELS } from "@/data/productPanels";
import { AREA_NARRATIVE_BY_SLUG } from "@/data/productNarrative";

type PanelCard = {
  slug: string;
  order: number;
  label: string;
  shortLabel: string;
  stage: string;
  headline: string;
  summary: string;
  audience: string[];
  image: string;
  imageAlt: string;
  icon: string;
  accent: AccentName;
  featureCount: number;
  areaLabels: string[];
};

type PlatformPageProps = {
  panels: PanelCard[];
  totals: typeof MATRIX_TOTALS;
};

export default function Platform({ panels, totals }: PlatformPageProps) {
  return (
    <>
      <PageSeoHead
        {...pageSeo.platform}
        title="School ERP Platform: 10 Role-Based Panels & Dashboards | KIDUART"
        description="One platform, ten role panels — system admin, organisation, director, school admin, academic, teacher, finance, HR, parent and student. Each panel shows only what that role needs."
      />
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Platform", path: "/platform" },
          ]),
          buildItemListSchema(
            "KIDUART role-based panels",
            panels.map((panel) => ({ name: panel.label, path: `/platform/${panel.slug}` })),
          ),
        ]}
      />

      <PageTransition className="pt-20 pb-0">
        <ImageBackdropHero
          eyebrow="One platform, dedicated panels"
          title="The same school data, shaped for the person looking at it"
          subtitle="A principal, an accountant, a class teacher and a parent should never share a screen. KIDUART ships dedicated role panels over one database — filtered by role and permission."
          image="/images/banner/platform-hero.jpg"
        />

        <section className="section-space-tight relative overflow-hidden border-y border-brand-navy/5 bg-white">
          <BackgroundBlobs blobs={[{ color: "#0c716b", size: 300, position: "center-right", opacity: 0.1 }]} />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <SectionHeading
                kicker="Set up in this order"
                title="Panels arrive in layers, the same way a school group rolls out"
                description="The platform console provisions the organisation, the organisation adds campuses, each campus runs its own school desk, and the classroom, finance, family and student panels sit on top of that structure."
              />
            </SectionReveal>

            <SectionReveal delay={0.08} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatChip value={panels.length} label="Dedicated user panels" />
              <StatChip value={totals.categories} label="Functional areas" />
              <StatChip value={`${totals.modules}+`} label="Business workflows" />
              <StatChip value={0} label="Per-user charges" />
            </SectionReveal>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-brand-beige/25">
          <BackgroundBlobs
            blobs={[
              { color: "#003049", size: 360, position: "top-left", opacity: 0.09 },
              { color: "#f77f00", size: 320, position: "bottom-right", opacity: 0.1 },
            ]}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ol className="space-y-8">
              {panels.map((panel, index) => {
                const tokens = ACCENTS[panel.accent];
                const reversed = index % 2 === 1;

                return (
                  <li key={panel.slug}>
                    <SectionReveal
                      delay={Math.min(index * 0.04, 0.16)}
                      className="overflow-hidden rounded-[2rem] border border-brand-navy/[0.08] bg-white shadow-sm"
                    >
                      <div
                        className={`grid gap-0 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
                      >
                        <div className="relative min-h-[220px] bg-brand-beige/40">
                          <Image
                            src={panel.image}
                            alt={panel.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            loading={index < 2 ? "eager" : "lazy"}
                          />
                        </div>

                        <div className="p-6 md:p-9">
                          <div className="flex flex-wrap items-center gap-3">
                            <span
                              className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${tokens.softBg}`}
                            >
                              <ProductIcon name={panel.icon} className={`h-5 w-5 ${tokens.text}`} />
                            </span>
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy/[0.78]">
                              {panel.stage}
                            </span>
                          </div>

                          <h3 className="mt-5 text-2xl font-bold text-brand-navy md:text-3xl">
                            {panel.label}
                          </h3>
                          <p className="mt-3 text-base font-semibold leading-7 text-brand-navy">
                            {panel.headline}
                          </p>
                          <p className="mt-3 leading-7 text-brand-navy/[0.78]">{panel.summary}</p>

                          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div>
                              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
                                Who signs in
                              </dt>
                              <dd className="mt-2 text-sm leading-6 text-brand-navy/[0.82]">
                                {panel.audience.join(" · ")}
                              </dd>
                            </div>
                            <div>
                              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
                                Modules behind it
                              </dt>
                              <dd className="mt-2 text-sm leading-6 text-brand-navy/[0.82]">
                                {panel.areaLabels.join(" · ")}
                              </dd>
                            </div>
                          </dl>

                          <Link
                            href={`/platform/${panel.slug}`}
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-brand-beige transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
                          >
                            Explore the {panel.shortLabel} panel
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </SectionReveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-brand-navy" style={{ color: "#fcf6d3" }}>
          <BackgroundBlobs
            blobs={[
              { color: "#fcbf49", size: 380, position: "top-right", opacity: 0.16 },
              { color: "#0c716b", size: 380, position: "bottom-left", opacity: 0.16 },
            ]}
          />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionReveal className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-yellow">
                Access is the design, not a setting
              </p>
              <h2 className="mt-5 text-3xl font-bold text-brand-beige md:text-4xl">
                Panels are generated from roles and permissions
              </h2>
              <p className="mt-4 text-lg leading-8 text-brand-beige/85">
                Navigation is built from what a role is entitled to open, so a teacher never sees
                payroll and a parent only sees their own children. Sessions, multi-factor
                authentication, IP and geo controls sit underneath every panel.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/features/security-and-authentication"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-6 py-3 text-sm font-bold text-brand-yellow transition-colors hover:bg-brand-yellow hover:text-brand-navy"
                >
                  See the security module
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/security"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-brand-beige transition-colors hover:border-white/40"
                >
                  How we protect school data
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        <CtaSection
          title="Ask for a demo in the panel your team will actually use"
          subtitle="Tell us the roles joining the call and we will open those panels — not a generic admin tour."
        />
      </PageTransition>
    </>
  );
}

export const getStaticProps: GetStaticProps<PlatformPageProps> = async () => {
  const panels: PanelCard[] = [...PRODUCT_PANELS]
    .sort((a, b) => a.order - b.order)
    .map((panel) => {
      const featureCount = panel.areas.reduce(
        (sum, areaSlug) => sum + (getMatrixCategory(areaSlug)?.featureCount ?? 0),
        0,
      );

      return {
        slug: panel.slug,
        order: panel.order,
        label: panel.label,
        shortLabel: panel.shortLabel,
        stage: panel.stage,
        headline: panel.headline,
        summary: panel.summary,
        audience: panel.audience,
        image: panel.image,
        imageAlt: panel.imageAlt,
        icon: panel.icon,
        accent: panel.accent,
        featureCount,
        areaLabels: panel.areas.map(
          (areaSlug) => AREA_NARRATIVE_BY_SLUG[areaSlug]?.label ?? areaSlug,
        ),
      };
    });

  return { props: { panels, totals: MATRIX_TOTALS } };
};
