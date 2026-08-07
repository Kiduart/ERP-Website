import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { pageSeo } from "@/lib/pageSeo";
import { buildCareersFaqSchema, buildInternJobPostingSchema } from "@/lib/seoSchemas";
import { bannerAltFromSrc, heroImgProps, IMAGE_DIMENSIONS } from "@/lib/imageSeo";
import { Stagger } from "@/components/ui/Stagger";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { BookOpen, Code2, LayoutTemplate, Rocket, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import {
  careersBenefits,
  careersFaqs,
  careersHero,
  careersIconMap,
  careersSeoIntro,
  careersValues,
  careersWorkText,
  foundingInternCampaign,
  foundingInternRoles,
  hiringSteps,
  internshipApplicationUrl,
  openRoles,
  roleCategories,
  type CareersBenefit,
  type CareersValueCard,
  type HiringStep,
  type InternRole,
} from "@/data/careersData";
import { getCmsCareersPage } from "@/lib/cms/content";
import type { ContentMeta } from "@/lib/cms/types";
import type { GetStaticProps } from "next";

type CareersPageProps = {
  hero: typeof careersHero;
  values: CareersValueCard[];
  workText: typeof careersWorkText;
  benefits: CareersBenefit[];
  openRoles: typeof openRoles;
  roleCategories: string[];
  hiringSteps: HiringStep[];
  campaign: typeof foundingInternCampaign;
  internRoles: InternRole[];
  contentMeta: ContentMeta;
};

const internRoleIcons = {
  "python-intern": Code2,
  "ui-ux-intern": LayoutTemplate,
  "business-development-intern": TrendingUp,
} as const;

export default function Careers({
  hero,
  values,
  workText,
  benefits,
  openRoles,
  roleCategories,
  hiringSteps,
  campaign,
  internRoles,
}: CareersPageProps) {
  const jobPostingSchemas = internRoles.map((role) =>
    buildInternJobPostingSchema({
      title: role.title,
      description: [role.summary, ...role.details].join(" "),
      applyUrl: internshipApplicationUrl,
    }),
  );

  return (
    <PageTransition className="pt-20 pb-0">
      <PageSeoHead {...pageSeo.careers} />
      <SchemaMarkup data={[...jobPostingSchemas, buildCareersFaqSchema(careersFaqs)]} />
      <section className="relative overflow-hidden bg-[#f4f1e8]">
        <div className="page-shell relative z-10 grid min-h-[calc(100svh-5rem)] items-center gap-12 py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal className="max-w-xl">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-brand-teal">{hero.kicker}</div>
            <h1 className="text-[clamp(2.2rem,1.55rem+2.3vw,4.7rem)] font-bold leading-[0.98] text-brand-navy">
              {hero.heading.split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <p className="mt-6 text-[clamp(1rem,0.96rem+0.2vw,1.08rem)] leading-7 text-brand-navy/65">
              {hero.body}
            </p>
          </SectionReveal>

          <SectionReveal delay={0.08} className="flex justify-center lg:justify-end">
            <div className="relative aspect-square w-[min(80vw,34rem)] overflow-hidden rounded-full border-[14px] border-white shadow-[0_26px_70px_rgba(0,48,73,0.16)]">
              <img
                src={hero.image}
                alt={bannerAltFromSrc(hero.image, hero.imageAlt)}
                className="h-full w-full object-cover object-center"
                {...heroImgProps(IMAGE_DIMENSIONS.heroPortrait)}
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space bg-brand-beige/30 relative overflow-hidden">
        <BackgroundBlobs
          blobs={[
            { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
            { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 },
          ]}
        />
        <FloatingIcons icons={["Heart", "Rocket", "BookOpen"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Stagger className="grid md:grid-cols-3 gap-8" itemClassName="motion-stamp">
            {values.map((item, idx) => {
              const Icon = careersIconMap[item.icon] ?? BookOpen;
              return (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-brand-navy/5 text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{item.title}</h3>
                <p className="text-brand-navy/70">{item.desc}</p>
              </div>
            );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section-space bg-white border-y border-brand-navy/5 relative overflow-hidden">
        <BackgroundBlobs blobs={[{ color: "#f77f00", size: 300, position: "bottom-left", opacity: 0.15 }]} />
        <FloatingIcons icons={["Smile", "Star"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionReveal className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-6">{workText.heading}</h2>
            <p className="text-lg text-brand-navy/70 leading-relaxed mb-4">
              {workText.body}
            </p>
            <p className="mb-12 text-base text-brand-navy/65">
              Hybrid details for candidates:{" "}
              <Link
                href="/workplace-policy"
                className="font-bold text-brand-teal underline underline-offset-4 hover:text-brand-navy"
              >
                Workplace Policy
              </Link>
              .
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((ben, i) => {
              const Icon = careersIconMap[ben.icon] ?? BookOpen;
              return (
              <SectionReveal key={i} delay={i * 0.05} className="flex gap-4 text-left bg-brand-beige/20 p-6 rounded-2xl">
                <Icon className="w-8 h-8 text-brand-orange shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">{ben.title}</h4>
                  <p className="text-sm text-brand-navy/60">{ben.desc}</p>
                </div>
              </SectionReveal>
            );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-white border-y border-brand-navy/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">{careersSeoIntro.heading}</h2>
            <div className="space-y-5 text-lg leading-relaxed text-brand-navy/70">
              {careersSeoIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space bg-brand-beige/10 relative overflow-hidden" id="open-roles">
        <BackgroundBlobs blobs={[{ color: "#0c716b", size: 300, position: "top-right", opacity: 0.15 }]} />
        <FloatingIcons icons={["Users", "Briefcase"]} count={4} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center mb-12">
            <div className="mb-4 inline-flex rounded-full bg-brand-orange/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-orange-ink">
              {campaign.badge}
            </div>
            <h2 className="text-3xl font-bold text-brand-navy mb-4">{openRoles.heading}</h2>
            <p className="mx-auto max-w-2xl text-lg text-brand-navy/70">{openRoles.stateBody}</p>
          </SectionReveal>

          <SectionReveal className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 px-2 sm:flex-row sm:items-start sm:gap-10">
            <figure className="m-0 w-full max-w-[17rem] sm:max-w-[19rem]">
              <img
                src={campaign.teaserImage}
                alt={campaign.teaserAlt}
                width={819}
                height={1024}
                className="h-auto w-full rounded-2xl shadow-[0_12px_40px_rgba(0,48,73,0.12)]"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="m-0 w-full max-w-[17rem] sm:max-w-[19rem]">
              <img
                src={campaign.hiringImage}
                alt={campaign.hiringAlt}
                width={819}
                height={1024}
                className="h-auto w-full rounded-2xl shadow-[0_12px_40px_rgba(0,48,73,0.12)]"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </SectionReveal>

          <SectionReveal className="mt-12 text-center">
            <h3 className="text-[clamp(1.8rem,1.4rem+1.2vw,2.5rem)] font-bold text-brand-navy">{campaign.title}</h3>
            <p className="mt-3 text-lg font-semibold text-brand-orange-ink">{campaign.subtitle}</p>
            <p className="mx-auto mt-4 max-w-2xl text-brand-navy/70">{campaign.intro}</p>
          </SectionReveal>

          <Stagger className="mt-10 grid gap-6 md:grid-cols-3" itemClassName="motion-brick">
            {internRoles.map((role) => {
              const Icon = internRoleIcons[role.id as keyof typeof internRoleIcons] ?? Rocket;
              return (
                <div key={role.id} className="flex h-full flex-col rounded-3xl border border-brand-navy/10 bg-white p-7 shadow-lg shadow-brand-navy/5">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal/10">
                      <Icon className="h-6 w-6 text-brand-teal" />
                    </div>
                    <span className="rounded-full bg-brand-beige px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-navy">
                      {role.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-brand-navy">{role.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-brand-navy/70">{role.summary}</p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {role.details.map((detail) => (
                      <li key={detail} className="flex gap-2 text-sm leading-relaxed text-brand-navy/65">
                        <span className="mt-1 shrink-0 text-brand-teal" aria-hidden="true">
                          •
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={openRoles.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-brand-navy/10 px-5 py-3 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                  >
                    Apply for this role
                  </a>
                </div>
              );
            })}
          </Stagger>

          <SectionReveal className="mt-10 rounded-[1.75rem] border border-brand-navy/10 bg-white p-8 text-center shadow-lg shadow-brand-navy/5">
            <h3 className="text-2xl font-bold text-brand-navy">{openRoles.stateTitle}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-brand-navy/70">
              {openRoles.applyNote}
            </p>
            <a
              href={openRoles.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-navy px-8 py-4 font-bold text-white transition-colors hover:bg-brand-teal"
            >
              {openRoles.ctaLabel} →
            </a>
          </SectionReveal>

          <SectionReveal className="mt-8 text-center">
            <h3 className="text-lg font-bold text-brand-navy">{openRoles.categoriesHeading}</h3>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {roleCategories.map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full bg-brand-beige px-4 py-2 text-sm font-semibold text-brand-navy"
                >
                  {item}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space bg-brand-beige/20 border-t border-brand-navy/5" id="internship-faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Internship FAQs</h2>
            <p className="text-lg text-brand-navy/70">
              Common questions from applicants interested in our Noida internship roles.
            </p>
          </SectionReveal>
          <div className="space-y-4">
            {careersFaqs.map((faq, index) => (
              <SectionReveal key={faq.q} delay={index * 0.04}>
                <details className="group rounded-2xl border border-brand-navy/10 bg-white px-6 py-5 shadow-sm shadow-brand-navy/5">
                  <summary className="cursor-pointer list-none font-semibold text-brand-navy marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {faq.q}
                      <span className="text-brand-teal transition-transform group-open:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-brand-navy/70">{faq.a}</p>
                </details>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white border-t border-brand-navy/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-brand-navy mb-12">Our Hiring Process</h2>
            <div className="flex flex-col md:flex-row justify-between items-center relative gap-8 md:gap-0">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-brand-beige -translate-y-1/2 -z-10"></div>
              {hiringSteps.map((s, i) => (
                <div key={i} className="bg-white px-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-brand-teal text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-brand-teal/20">
                    {s.step}
                  </div>
                  <h4 className="font-bold text-brand-navy">{s.title}</h4>
                  <p className="text-sm text-brand-navy/60">{s.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <CtaSection title="Questions about eligibility or timelines?" subtitle="Email careers@kiduart.com for general enquiries. To apply, use the application form on this page." />
    </PageTransition>
  );
}

export const getStaticProps: GetStaticProps<CareersPageProps> = async (context) => {
  const preview = context.preview ?? false;
  const page = await getCmsCareersPage({ preview });
  return {
    props: {
      hero: page.data.hero ?? careersHero,
      values: page.data.values?.length ? page.data.values : careersValues,
      workText: page.data.workText ?? careersWorkText,
      benefits: page.data.benefits?.length ? page.data.benefits : careersBenefits,
      openRoles: page.data.openRoles ?? openRoles,
      roleCategories: page.data.roleCategories?.length ? page.data.roleCategories : roleCategories,
      hiringSteps: page.data.hiringSteps?.length ? page.data.hiringSteps : hiringSteps,
      campaign: foundingInternCampaign,
      internRoles: foundingInternRoles,
      contentMeta: page.meta,
    },
    revalidate: preview ? 1 : 300,
  };
};
