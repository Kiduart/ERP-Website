import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { InView } from "@/components/ui/InView";
import { Stagger } from "@/components/ui/Stagger";
import { PageTransition } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { FoundingCharter } from "@/components/ui/FoundingCharter";
import { ImageBackdropHero } from "@/components/ui/CustomHeroes";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Skeleton } from "@/components/ui/skeleton";
import { MATRIX_TOTALS } from "@/data/featureMatrix";
import { PRODUCT_PANELS } from "@/data/productPanels";
import { PRODUCT_PERSONAS } from "@/data/productPersonas";
import { CONTACT_LOCATION, CONTACT_PHONE_DISPLAY } from "@/lib/contact";
import { pageSeo } from "@/lib/pageSeo";
import { buildBreadcrumbSchema, organizationSchema } from "@/lib/seoSchemas";
import { onSmoothHashClick } from "@/lib/smoothScroll";
import {
  ArrowRight,
  BellRing,
  Linkedin,
  Lightbulb,
  MapPin,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { Link } from "wouter";
import type { GetStaticProps } from "next";

type AboutProps = {
  totals: typeof MATRIX_TOTALS;
  panelCount: number;
  personaCount: number;
};

const TIMELINE = [
  {
    title: "Listen in Uttar Pradesh",
    body: "Fee files in five Excels. Attendance on paper. Parents calling the desk for answers nobody can find. Same story in every admin office we sat in.",
  },
  {
    title: "Build around roles",
    body: "Ten panels  because a class teacher, an accountant, and a trustee need different things from the same record. Short training is a design outcome.",
  },
  {
    title: "One capability matrix",
    body: "Features, platform, and pricing stay consistent because they come from the same source of truth engineering maintains  not a marketing slide deck.",
  },
  {
    title: "Next phase: KIDUORBIT",
    body: "Intelligence on data schools already record. Not launched yet. ERP baseline first; orbit when the streams are clean.",
  },
];

export default function About({
  totals,
  panelCount,
  personaCount,
}: AboutProps) {
  return (
    <PageTransition className="pt-20 pb-0">
      <PageSeoHead {...pageSeo.about} />
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          organizationSchema,
        ]}
      />

      <ImageBackdropHero
        eyebrow="Our story"
        title="We built KIDUART because school admin should not feel this hard."
        subtitle="Every week, school administrators across India spend hours fixing fee records in spreadsheets, sending attendance updates on WhatsApp, and manually chasing parents for documents. We thought there had to be a better way. Turns out, there is."
        image="/about.jpg"
        fullHeight={true}
        overlayClassName="bg-[linear-gradient(135deg,rgba(250,248,240,0.82),rgba(250,248,240,0.58))]"
        floatingIcons={["Sparkles", "Lightbulb", "Users"]}
        actions={
          <>
            <Link
              href="/demo"
              className="rounded-full bg-brand-navy px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
            >
              Request Demo
            </Link>
            <a
              href="#team"
              onClick={(e) => onSmoothHashClick(e)}
              className="rounded-full border border-brand-navy/[0.14] bg-white/70 px-8 py-4 text-base font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
            >
              Meet the team
            </a>
          </>
        }
      />

      <section className="section-space relative overflow-hidden bg-white">
        <BackgroundBlobs
          blobs={[
            {
              color: "#fcbf49",
              size: 280,
              position: "center-left",
              opacity: 0.12,
            },
            {
              color: "#0c716b",
              size: 280,
              position: "center-right",
              opacity: 0.12,
            },
          ]}
        />
        <FloatingIcons icons={["Lightbulb", "Users"]} count={4} />
        <div className="page-shell relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
            <InView once className="motion-rise">
              <p className="section-kicker">Where we started</p>
              <h2 className="section-title mt-4 text-brand-navy">
                Why we built KIDUART
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-navy/[0.74]">
                We spent time with school administrators in Uttar Pradesh. The
                same frustrations came up in every conversation fee data
                scattered across files, attendance copied into a register at end
                of day, parents calling for information nobody had time to look
                up.
              </p>
              <p className="mt-4 text-lg leading-8 text-brand-navy/[0.74]">
                One conviction stuck: a school on the right software is a school
                where staff focus on students, not paperwork and that software
                should not be a privilege.
              </p>
            </InView>

            <InView
              once
              className="motion-rise flex flex-col justify-center rounded-[1.75rem] border border-brand-navy/10 bg-[#f4f7f8] p-7 md:p-8"
            >
              <MapPin className="h-6 w-6 text-brand-teal" />
              <h3 className="mt-4 text-xl font-bold text-brand-navy">
                Based in Noida
              </h3>
              <p className="mt-2 text-sm leading-7 text-brand-navy/[0.72]">
                {CONTACT_LOCATION}. Demos, rollout, and support run with the
                same team that ships the product.
              </p>
              <p className="mt-4 font-mono text-sm font-bold text-brand-navy">
                {CONTACT_PHONE_DISPLAY}
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-teal">
                support@kiduart.com
              </p>
            </InView>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-brand-navy/5">
        <img
          src="/images/banner/home-hero.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-40 blur-[2px]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,247,248,0.92)_0%,rgba(250,248,240,0.88)_50%,rgba(244,247,248,0.94)_100%)]" />
        <div className="page-shell relative z-10 section-space">
          <InView once className="motion-rise mx-auto max-w-2xl text-center">
            <p className="section-kicker">The path</p>
            <h2 className="section-title mt-4 text-brand-navy">
              From listening rooms to the next orbit
            </h2>
            <p className="mt-3 text-brand-navy/70">
              How a Noida school-ERP company moved from admin-office frustration
              to role panels and a careful next phase for AI.
            </p>
          </InView>

          <div className="relative mx-auto mt-14 max-w-3xl">
            <div
              aria-hidden="true"
              className="runway-spine absolute bottom-0 left-[1.15rem] top-0 w-1 rounded-full bg-brand-navy/10 md:left-1/2 md:-ml-0.5"
            />
            <ol className="space-y-8">
              {TIMELINE.map((item, index) => (
                <InView
                  key={item.title}
                  once
                  className={`motion-rise relative grid gap-4 md:grid-cols-2 md:gap-10 ${
                    index % 2 === 1 ? "md:text-right" : ""
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 1 ? "md:col-start-2" : ""
                    } rounded-[1.35rem] border border-brand-navy/8 bg-white/90 p-6 shadow-sm backdrop-blur-sm`}
                  >
                    <span className="font-serif text-lg font-bold text-brand-orange-ink">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-brand-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-brand-navy/[0.72]">
                      {item.body}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute left-[0.85rem] top-8 z-10 h-4 w-4 rounded-full border-2 border-brand-yellow bg-brand-navy md:left-1/2 md:-ml-2"
                  />
                </InView>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="page-shell">
          <Stagger
            className="grid gap-6 md:grid-cols-2"
            itemClassName="motion-brick"
          >
            {[
              {
                title: "Our mission",
                icon: Target,
                copy: "Give schools in India  not just the large, well-funded ones  the operational clarity that used to require a full IT department. Good software should not be a privilege.",
              },
              {
                title: "Our vision",
                icon: Lightbulb,
                copy: "A school where a class teacher starts the morning knowing who needs a call, finance closes the month without a missed payment trail, and parents feel kept in the loop  not chased for information.",
              },
            ].map((pillar) => (
              <article
                key={pillar.title}
                className="relative overflow-hidden rounded-[1.75rem] border border-brand-navy/10 bg-white p-8 shadow-lg shadow-brand-navy/[0.04] md:p-10"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-6 hidden w-px bg-brand-orange/30 sm:block"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-7 hidden w-px bg-brand-orange/15 sm:block"
                />
                <div className="sm:pl-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal/10">
                    <pillar.icon className="h-6 w-6 text-brand-teal" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-brand-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-brand-navy/[0.74]">
                    {pillar.copy}
                  </p>
                </div>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-space border-y border-brand-navy/5 bg-brand-beige/25">
        <div className="page-shell">
          <InView once className="motion-rise mb-10 max-w-2xl">
            <p className="section-kicker">Proof before polish</p>
            <h2 className="section-title mt-4 text-brand-navy">
              The same charter we publish on the homepage
            </h2>
            <p className="mt-3 text-brand-navy/70">
              Honest commitments not borrowed credibility. This is how we hold
              ourselves when the story section is still blank.
            </p>
          </InView>
          <FoundingCharter />
        </div>
      </section>

      <section
        id="team"
        className="section-space scroll-mt-28 border-y border-brand-navy/5 bg-brand-beige/20"
      >
        <div className="page-shell">
          <InView once className="motion-rise mb-16 text-center">
            <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">
              The team behind KIDUART
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-brand-navy/70">
              KIDUART is built by a founding team with backgrounds in education
              technology, school operations, and product engineering. We are
              based in Noida, Uttar Pradesh, and work directly with school teams
              every development cycle. Individual profiles will be published
              here soon.
            </p>
          </InView>

          <div className="mx-auto grid max-w-5xl gap-12">
            <Stagger
              className="grid gap-4 sm:grid-cols-2"
              itemClassName="motion-brick"
            >
              {[0, 1].map((slot) => (
                <div key={slot} className="text-center">
                  <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-full border-4 border-white bg-brand-navy/[0.04] shadow-xl">
                    <Skeleton className="h-full w-full rounded-full bg-brand-navy/10" />
                  </div>
                  <Skeleton className="mx-auto h-6 w-40 rounded-full bg-brand-navy/10" />
                  <Skeleton className="mx-auto mt-3 h-4 w-52 rounded-full bg-brand-teal/15" />
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-beige px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange-ink">
                    <Sparkles className="h-3.5 w-3.5" />
                    Profile coming soon
                  </div>
                </div>
              ))}
            </Stagger>

            <InView once>
              <div className="motion-brick flex h-full flex-col justify-between rounded-[2rem] border border-brand-teal/15 bg-white p-8 text-center shadow-lg shadow-brand-navy/5">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal">
                    <BellRing className="h-4 w-4" />
                    Stay in the loop
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-brand-navy">
                    Stay close to what we are building
                  </h3>
                  <p className="mt-4 text-base leading-7 text-brand-navy/[0.68]">
                    Product updates, school-ops notes, and company milestones on
                    LinkedIn. Follow KIDUART for early looks at what ships next
                    including KIDUORBIT.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <a
                    href="https://www.linkedin.com/company/kiduart"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
                  >
                    <Linkedin className="h-4 w-4" />
                    Follow on LinkedIn
                  </a>
                  <Link
                    href="/careers"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-navy/[0.12] bg-brand-beige/60 px-6 py-3.5 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                  >
                    Careers & internships
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </InView>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="page-shell">
          <InView once className="motion-rise mx-auto max-w-3xl text-center">
            <div className="section-kicker">What we have built so far</div>
            <h2 className="section-title mt-6 text-brand-navy">
              Built from one capability matrix not a slide deck
            </h2>
            <p className="section-copy mt-4 text-brand-navy/70">
              Soft proof of scope. Open any tile to the live page generated from
              the same matrix. KIDUART school ERP covers admissions, fees,
              attendance, exams, and parent communication for Indian schools.
            </p>
          </InView>

          <InView
            once
            className="motion-rise mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
          >
            {[
              {
                value: totals.categories,
                label: "Functional areas",
                href: "/features",
              },
              {
                value: `${totals.modules}+`,
                label: "Business workflows",
                href: "/features",
              },
              {
                value: panelCount,
                label: "Dedicated panels",
                href: "/platform",
              },
              {
                value: personaCount,
                label: "Role solutions",
                href: "/solutions",
              },
              { value: "0", label: "Per-user charges", href: "/pricing" },
              { value: "Open", label: "Capability map", href: "/features" },
            ].map((stat) => (
              <Link
                key={stat.label}
                href={stat.href}
                className="rounded-2xl border border-brand-navy/[0.1] bg-brand-beige/20 px-4 py-5 text-center transition-colors hover:border-brand-teal/40"
              >
                <div className="text-2xl font-extrabold text-brand-navy">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-navy/[0.72]">
                  {stat.label}
                </div>
              </Link>
            ))}
          </InView>

          <Stagger
            className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3"
            itemClassName="motion-brick"
          >
            {[
              {
                title: "We build around roles, not screens",
                copy: "Ten panels ship because a class teacher, an accountant and a trustee need different things from the same record.",
              },
              {
                title: "We do not publish numbers we cannot back",
                copy: "No invented adoption stats. Where a claim needs live school data, we mark it coming soon  including KIDUORBIT.",
              },
              {
                title: "We build for Indian school reality",
                copy: "Fee heads, concessions, board grading, TCs, transport routes, SMS for parents without smartphones.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-brand-navy/[0.08] bg-brand-beige/20 p-7"
              >
                <Trophy
                  className="h-8 w-8 text-brand-yellow"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-xl font-bold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-navy/[0.76]">
                  {item.copy}
                </p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaSection
        title="Ready to see it for your school?"
        subtitle="Book a live walkthrough tailored to your school's size, structure, and the specific problems you want to solve."
      />
    </PageTransition>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => ({
  props: {
    totals: MATRIX_TOTALS,
    panelCount: PRODUCT_PANELS.length,
    personaCount: PRODUCT_PERSONAS.length,
  },
});
