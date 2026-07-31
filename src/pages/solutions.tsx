import type { GetStaticProps } from "next";
import Image from "next/image";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { SITE_ORIGIN } from "@/components/seo/PageSeoHead";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/seoSchemas";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { CtaSection } from "@/components/ui/CtaSection";
import { InView } from "@/components/ui/InView";
import { Stagger } from "@/components/ui/Stagger";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { ProductIcon } from "@/components/product/ProductIcon";
import {
  ACCENTS,
  SectionHeading,
  StatChip,
  type AccentName,
} from "@/components/product/ProductPrimitives";
import { MATRIX_TOTALS } from "@/data/featureMatrix";
import { PRODUCT_PERSONAS } from "@/data/productPersonas";

type PersonaCard = {
  slug: string;
  label: string;
  pageLabel: string;
  stage: string;
  headline: string;
  summary: string;
  roleNames: string[];
  leadChallenge: { problem: string; solution: string };
  challengeCount: number;
  image: string;
  imageAlt: string;
  icon: string;
  accent: AccentName;
};

type SolutionsPageProps = {
  personas: PersonaCard[];
  totals: typeof MATRIX_TOTALS;
};

/** Numbers stay unpublished until they come from real school data. */
const impactHighlights = [
  {
    label: "Schools onboarded",
    note: "We will publish this once our first cohort completes a full academic session.",
  },
  {
    label: "Admin effort saved",
    note: "Measured per school after go-live, from real module usage rather than estimates.",
  },
  {
    label: "Parent communication reach",
    note: "Reported from message delivery logs once volumes are meaningful.",
  },
];

export default function Solutions({ personas, totals }: SolutionsPageProps) {
  return (
    <>
      <PageSeoHead
        title="School ERP Solutions by Role: Teachers, Parents, Finance, Admin | KIDUART"
        description="Role-based school ERP solutions for school groups, principals, admin staff, academic coordinators, teachers, accountants, parents and students  with the daily challenges each one faces."
        path="/solutions"
        ogImage={`${SITE_ORIGIN}/images/banner/solution-hero-1.jpg`}
        keywords="school ERP for teachers, school ERP for parents, school ERP for accountants, school management software for principals, multi campus school software, school ERP software India, parent portal for schools, cloud-based school ERP"
      />
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
          ]),
          buildItemListSchema(
            "KIDUART school ERP solutions by role",
            personas.map((persona) => ({
              name: persona.pageLabel,
              path: `/solutions/${persona.slug}`,
            })),
          ),
        ]}
      />

      <PageTransition className="pt-20 pb-0">
        <section className="relative overflow-hidden border-b border-brand-navy/[0.06] bg-white pb-14 pt-12 md:pb-20">
          <BackgroundBlobs
            blobs={[
              {
                color: "#003049",
                size: 340,
                position: "top-left",
                opacity: 0.08,
              },
              {
                color: "#f77f00",
                size: 300,
                position: "bottom-right",
                opacity: 0.1,
              },
            ]}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <SectionReveal instant>
                <p className="section-kicker">Solutions by role</p>
                <h1 className="mt-5 text-4xl font-bold leading-tight text-brand-navy md:text-5xl">
                  Eight roles, eight different jobs, one school platform
                </h1>
                <p className="mt-5 text-lg leading-8 text-brand-navy/[0.78]">
                  A principal, an accountant and a class teacher have almost
                  nothing in common in their daily work so a single generic
                  dashboard fails all three. Each page below starts from the
                  problems that role actually reports, then names the module
                  that removes it. Everything here is drawn from what KIDUART
                  ships in the product today.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-base font-bold text-brand-navy transition-all duration-300 hover:-translate-y-1 hover:bg-brand-navy hover:text-brand-beige"
                  >
                    Book a role-specific demo
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/platform"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/[0.14] bg-white px-7 py-3.5 text-base font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                  >
                    See the role panels
                  </Link>
                </div>
              </SectionReveal>

              <SectionReveal instant className="grid grid-cols-2 gap-4">
                <StatChip value={personas.length} label="Role solutions" />
                <StatChip
                  value={`${totals.modules}+`}
                  label="Business workflows"
                />
                <StatChip value={totals.categories} label="Functional areas" />
                <StatChip value={0} label="Per-user charges" />
                <div className="col-span-2 overflow-hidden rounded-[1.75rem] border border-brand-navy/[0.08]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="/images/banner/solution-hero-1.jpg"
                      alt="School staff working together on daily school operations"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-brand-beige/25">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <InView className="motion-rise" once>
              <SectionHeading
                kicker="Pick the role you are buying for"
                title="Start from the person who will use it every day"
                description="Each role page lists the challenges that role reports, the modules that answer them, a typical day, and the panel they sign in to."
              />
            </InView>

            <Stagger
              className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
              itemClassName="motion-lane h-full"
            >
              {personas.map((persona) => {
                const tokens = ACCENTS[persona.accent];
                return (
                  <Link
                    key={persona.slug}
                    href={`/solutions/${persona.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-navy/[0.08] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40"
                  >
                    <div className="relative aspect-[16/10] bg-brand-beige/40">
                      <Image
                        src={persona.image}
                        alt={persona.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${tokens.softBg}`}
                        >
                          <ProductIcon
                            name={persona.icon}
                            className={`h-4 w-4 ${tokens.text}`}
                          />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy/[0.74]">
                          {persona.stage}
                        </span>
                      </span>
                      <span className="mt-4 text-xl font-bold text-brand-navy">
                        {persona.pageLabel}
                      </span>
                      <span className="mt-3 flex-grow text-sm leading-6 text-brand-navy/[0.78]">
                        {persona.summary}
                      </span>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-teal">
                        {persona.challengeCount} challenges answered
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </Stagger>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-white">
          <BackgroundBlobs
            blobs={[
              {
                color: "#0c716b",
                size: 340,
                position: "center-left",
                opacity: 0.1,
              },
            ]}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <InView className="motion-rise" once>
              <SectionHeading
                kicker="The honest ledger"
                title="Where school days actually leak time"
                description="One line per role: the problem we hear most often, and the module that removes it. No transformation language, just the mechanism."
              />
            </InView>

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-brand-navy/[0.08]">
              <ul className="divide-y divide-brand-navy/[0.08]">
                {personas.map((persona, index) => {
                  const tokens = ACCENTS[persona.accent];
                  return (
                    <li
                      key={persona.slug}
                      className={`grid gap-4 p-6 md:grid-cols-[minmax(0,10rem)_1fr_1fr] md:items-start md:gap-8 ${
                        index % 2 === 0 ? "bg-white" : "bg-brand-beige/20"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`h-8 w-1.5 rounded-full ${tokens.bar}`}
                          aria-hidden="true"
                        />
                        <span className="text-sm font-bold text-brand-navy">
                          {persona.label}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange-ink">
                          The problem
                        </p>
                        <p className="mt-2 text-sm leading-6 text-brand-navy/[0.84]">
                          {persona.leadChallenge.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-teal">
                          What KIDUART does
                        </p>
                        <p className="mt-2 text-sm leading-6 text-brand-navy/[0.84]">
                          {persona.leadChallenge.solution}
                        </p>
                        <Link
                          href={`/solutions/${persona.slug}`}
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy underline-offset-4 hover:text-brand-teal hover:underline"
                        >
                          Read the {persona.label.toLowerCase()} page
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-space relative overflow-hidden border-y border-brand-navy/5 bg-brand-beige/25">
          <BackgroundBlobs
            blobs={[
              {
                color: "#003049",
                size: 380,
                position: "center-left",
                opacity: 0.12,
              },
            ]}
          />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-brand-navy/10 bg-white p-8 shadow-xl shadow-brand-navy/5 md:p-12">
              <InView className="motion-rise" once>
                <p className="section-kicker">Why this matters</p>
                <h2 className="mt-4 text-4xl font-bold text-brand-navy">
                  Better school systems create better daily outcomes
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-brand-navy/[0.74]">
                  KIDUART is built to remove repetitive admin work and make
                  parent communication consistent, so school teams spend more
                  time on students and teaching quality.
                </p>
              </InView>

              <Stagger
                className="mt-10 grid gap-6 md:grid-cols-3"
                itemClassName="motion-brick"
              >
                {impactHighlights.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-brand-navy/10 bg-brand-beige/20 px-6 py-8 text-center"
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-brand-orange"
                        aria-hidden="true"
                      />
                      Coming soon
                    </span>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-navy/[0.82]">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-brand-navy/[0.72]">
                      {stat.note}
                    </p>
                  </div>
                ))}
              </Stagger>
              <p className="mt-6 text-sm leading-6 text-brand-navy/[0.7]">
                We would rather show you the product than a number we cannot
                back yet. Every figure on this site will be published only after
                it comes from live school data.
              </p>
            </div>
          </div>
        </section>

        <CtaSection
          title="Book a demo for the roles joining the call"
          subtitle="Tell us who will be on the call  leadership, accounts, academics or class teachers  and we will run the walkthrough in their panels."
        />
      </PageTransition>
    </>
  );
}

export const getStaticProps: GetStaticProps<SolutionsPageProps> = async () => ({
  props: {
    personas: [...PRODUCT_PERSONAS]
      .sort((a, b) => a.order - b.order)
      .map((persona) => ({
        slug: persona.slug,
        label: persona.label,
        pageLabel: persona.pageLabel,
        stage: persona.stage,
        headline: persona.headline,
        summary: persona.summary,
        roleNames: persona.roleNames,
        leadChallenge: {
          problem: persona.challenges[0].problem,
          solution: persona.challenges[0].solution,
        },
        challengeCount: persona.challenges.length,
        image: persona.image,
        imageAlt: persona.imageAlt,
        icon: persona.icon,
        accent: persona.accent,
      })),
    totals: MATRIX_TOTALS,
  },
});
