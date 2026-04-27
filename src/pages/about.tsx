import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { ImageBackdropHero } from "@/components/ui/CustomHeroes";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, BellRing, Lightbulb, Linkedin, Sparkles, Target, Trophy } from "lucide-react";
import Link from "next/link";

export default function About() {
  const pillars = [
    {
      title: "Our Mission",
      copy: "To democratize access to enterprise-grade technology for educational institutions of all sizes, removing administrative friction so educators can stay focused on student success.",
      icon: Target,
      tone: "bg-white",
      iconWrap: "bg-brand-orange/10",
      iconColor: "text-brand-orange",
    },
    {
      title: "Our Vision",
      copy: "A world where data-driven insights and automated workflows support every classroom, every administrator, and every family connected to a school.",
      icon: Lightbulb,
      tone: "bg-brand-teal/10",
      iconWrap: "bg-white/75",
      iconColor: "text-brand-teal",
    },
  ];

  return (
    <PageTransition className="pt-20 pb-0">
      <ImageBackdropHero
        eyebrow="About KIDUART"
        title="Building calmer, smarter school operations for every team."
        subtitle="KIDUART brings academics, administration, finance, and parent communication into one connected operating system so schools can spend less time chasing tasks and more time shaping outcomes."
        image="/about.jpg"
        fullHeight={true}
        overlayClassName="bg-[linear-gradient(135deg,rgba(250,248,240,0.82),rgba(250,248,240,0.58))]"
        floatingIcons={["Sparkles", "Lightbulb", "Users"]}
        actions={(
          <>
            <Link
              href="/demo"
              className="rounded-full bg-brand-navy px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
            >
              Request Demo
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-brand-navy/14 bg-white/70 px-8 py-4 text-base font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
            >
              Talk to Us
            </Link>
          </>
        )}
      />

      <section className="section-space relative overflow-hidden bg-white">
        <BackgroundBlobs
          blobs={[
            { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
            { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 },
          ]}
        />
        <FloatingIcons icons={["Lightbulb", "Brain"]} count={4} />
        <div className="page-shell relative z-10">
          <SectionReveal className="mx-auto mb-16 max-w-3xl text-center">
            <div className="section-kicker">Why we exist</div>
            <h2 className="section-title mt-6 text-brand-navy">Built with the same clarity as the platform itself</h2>
            <p className="section-copy mt-4 text-brand-navy/70">
              The About experience now follows the same structured, high-contrast storytelling pattern you used on the Platform page.
            </p>
          </SectionReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <SectionReveal key={pillar.title} delay={index * 0.1}>
                <div className={`flex h-full flex-col rounded-[2rem] border border-brand-navy/6 p-10 shadow-lg shadow-brand-navy/5 ${pillar.tone}`}>
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${pillar.iconWrap}`}>
                    <pillar.icon className={`h-7 w-7 ${pillar.iconColor}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-navy">{pillar.title}</h3>
                  <p className="mt-5 text-lg leading-8 text-brand-navy/70">{pillar.copy}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-brand-navy/5 bg-brand-beige/20">
        <div className="page-shell">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">Meet the Leadership</h2>
            <p className="mt-3 text-lg text-brand-navy/70">Leadership announcements are on the way. We are keeping a little surprise energy here for now.</p>
          </SectionReveal>

          <div className="mx-auto grid max-w-5xl gap-12">
            <div className="grid gap-4 sm:grid-cols-2">
                <SectionReveal delay={0.14}>
                  <div className="text-center">
                    {/* rounded-[2rem] border border-brand-navy/8 bg-white p-8 text-center shadow-lg shadow-brand-navy/5 */}
                    <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-full border-4 border-white bg-brand-navy/4 shadow-xl">
                      <Skeleton className="h-full w-full rounded-full bg-brand-navy/10" />
                    </div>
                    <Skeleton className="mx-auto h-6 w-40 rounded-full bg-brand-navy/10" />
                    <Skeleton className="mx-auto mt-3 h-4 w-52 rounded-full bg-brand-teal/15" />
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-beige px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
                      <Sparkles className="h-3.5 w-3.5" />
                      Leadership reveal coming soon
                    </div>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="text-center">
                    {/* rounded-[2rem] border border-brand-navy/8 bg-white p-8 text-center shadow-lg shadow-brand-navy/5 */}
                    <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-full border-4 border-white bg-brand-navy/4 shadow-xl">
                      <Skeleton className="h-full w-full rounded-full bg-brand-navy/10" />
                    </div>
                    <Skeleton className="mx-auto h-6 w-40 rounded-full bg-brand-navy/10" />
                    <Skeleton className="mx-auto mt-3 h-4 w-52 rounded-full bg-brand-teal/15" />
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-beige px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
                      <Sparkles className="h-3.5 w-3.5" />
                      Leadership reveal coming soon
                    </div>
                  </div>
                </SectionReveal>
              </div>

            <SectionReveal delay={0.14}>
              <div className="flex h-full flex-col justify-between text-center rounded-[2rem] border border-brand-teal/15 bg-white p-8 shadow-lg shadow-brand-navy/5">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal">
                    <BellRing className="h-4 w-4" />
                    Stay in the loop
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-brand-navy">Soon-to-be-announced leaders, straight from KIDUART.</h3>
                  <p className="mt-4 text-base leading-7 text-brand-navy/68">
                    Follow us on LinkedIn and keep an eye on KIDUART updates for leadership reveals, company milestones, and the people building what comes next.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
                  >
                    <Linkedin className="h-4 w-4" />
                    Follow on LinkedIn
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-navy/12 bg-brand-beige/60 px-6 py-3.5 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                  >
                    Subscribe for updates
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="page-shell text-center">
          <SectionReveal>
            <Trophy className="mx-auto mb-6 h-12 w-12 text-brand-yellow" />
            <h2 className="mb-12 text-3xl font-bold text-brand-navy">Recognized for Excellence</h2>
            <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale transition-all duration-500 hover:grayscale-0">
              <div className="flex h-12 items-center rounded bg-brand-navy/5 px-6 font-bold text-brand-navy">EdTech Breakthrough 2026</div>
              <div className="flex h-12 items-center rounded bg-brand-navy/5 px-6 font-bold text-brand-navy">Best SaaS for Education</div>
              <div className="flex h-12 items-center rounded bg-brand-navy/5 px-6 font-bold text-brand-navy">ISO 27001 Certified</div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <CtaSection title="Join our growing community" subtitle="Experience why hundreds of schools choose KIDUART." />
    </PageTransition>
  );
}
