import Head from "next/head";
import { bannerAltFromSrc, heroImgProps, IMAGE_DIMENSIONS } from "@/lib/imageSeo";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { BookOpen, Heart, Rocket } from "lucide-react";
import {
  careersBenefits,
  careersHero,
  careersIconMap,
  careersValues,
  careersWorkText,
  hiringSteps,
  openRoles,
  roleCategories,
  type CareersBenefit,
  type CareersValueCard,
  type HiringStep,
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
  contentMeta: ContentMeta;
};

export default function Careers({ hero, values, workText, benefits, openRoles, roleCategories, hiringSteps }: CareersPageProps) {

  return (
    <PageTransition className="pt-20 pb-0">
      <Head>
        <title>Careers at KIDUART | Build School ERP Software That Matters</title>
        <meta
          name="description"
          content="Join KIDUART and build software that gives schools in India the operational clarity they deserve. We are hiring engineers, product managers, and customer success specialists."
        />
        <link rel="canonical" href="https://www.kiduart.com/careers" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KIDUART" />
        <meta property="og:title" content="Careers at KIDUART | Build School ERP Software That Matters" />
        <meta property="og:description" content="Join KIDUART and build software that gives schools in India the operational clarity they deserve. We are hiring engineers, product managers, and customer success specialists." />
        <meta property="og:url" content="https://www.kiduart.com/careers" />
        <meta property="og:image" content="https://www.kiduart.com/images/banner/home-hero.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at KIDUART | Build School ERP Software That Matters" />
        <meta name="twitter:description" content="Join KIDUART and build software that gives schools in India the operational clarity they deserve. We are hiring engineers, product managers, and customer success specialists." />
      </Head>
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
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, idx) => {
              const Icon = careersIconMap[item.icon] ?? BookOpen;
              return (
              <SectionReveal key={idx} delay={idx * 0.1} className="bg-white p-8 rounded-3xl shadow-lg border border-brand-navy/5 text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{item.title}</h3>
                <p className="text-brand-navy/70">{item.desc}</p>
              </SectionReveal>
            );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-white border-y border-brand-navy/5 relative overflow-hidden">
        <BackgroundBlobs blobs={[{ color: "#f77f00", size: 300, position: "bottom-left", opacity: 0.15 }]} />
        <FloatingIcons icons={["Smile", "Star"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionReveal className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-6">{workText.heading}</h2>
            <p className="text-lg text-brand-navy/70 leading-relaxed mb-12">
              {workText.body}
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

      <section className="section-space bg-brand-beige/10 relative overflow-hidden" id="open-roles">
        <BackgroundBlobs blobs={[{ color: "#0c716b", size: 300, position: "top-right", opacity: 0.15 }]} />
        <FloatingIcons icons={["Users", "Briefcase"]} count={4} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">{openRoles.heading}</h2>
          </SectionReveal>

          <SectionReveal className="rounded-2xl border-2 border-dashed border-brand-navy/20 bg-brand-beige/20 p-12 text-center">
            <div className="mb-4 text-5xl">👥</div>
            <h3 className="mb-3 text-2xl font-bold text-brand-navy">{openRoles.stateTitle}</h3>
            <p className="mx-auto mb-6 max-w-md text-brand-navy/70">
              {openRoles.stateBody}
            </p>
            <a
              href={openRoles.ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-8 py-4 font-bold text-white transition-colors hover:bg-brand-teal"
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

      <CtaSection title="Do not see the right role listed?" subtitle="Send us a note at careers@kiduart.com with what you do and what kind of work you are looking for. We keep strong candidates in mind for roles as they open." />
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
      contentMeta: page.meta,
    },
    revalidate: preview ? 1 : 300,
  };
};
