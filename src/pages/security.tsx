import type { GetStaticProps } from "next";
import { Link } from "wouter";
import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { pageSeo } from "@/lib/pageSeo";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { HeroSection } from "@/components/ui/HeroSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { ArrowRight, Info } from "lucide-react";
import { SecurityStack } from "@/components/product/SecurityStack";
import { SecurityPerimeter } from "@/components/ui/SecurityPerimeter";
import {
  DATA_HANDLING_PRINCIPLES,
  SECURITY_HONESTY,
  SECURITY_LAYERS,
  SECURITY_SCENARIOS,
  type SecurityLayer,
} from "@/data/securityPosture";
import { getMatrixCategory } from "@/data/featureMatrix";

type SecurityPageProps = {
  layers: SecurityLayer[];
  areaFeatureCount: number;
  areaModuleCount: number;
};

export default function Security({ layers, areaFeatureCount, areaModuleCount }: SecurityPageProps) {
  return (
    <PageTransition className="pt-20 pb-0">
      <PageSeoHead {...pageSeo.security} />
      <HeroSection
        title="School data carries real consequences. We build like it does."
        subtitle="Student profiles, fee transactions, attendance and exam results sit behind role-based permissions, authenticator-app MFA, session control, tenant-level data separation and audit logging — not a paid security bolt-on."
        image="/images/banner/security-hero.jpg"
        layout="center"
      />

      <section className="section-space-tight relative overflow-hidden border-b border-brand-navy/5 bg-white">
        <BackgroundBlobs
          blobs={[
            { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.14 },
            { color: "#0c716b", size: 300, position: "center-right", opacity: 0.14 },
          ]}
        />
        <FloatingIcons icons={["ShieldCheck", "Lock"]} count={4} />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-start">
            <SectionReveal>
              <p className="section-kicker">Why this page exists</p>
              <h2 className="mt-4 text-3xl font-bold text-brand-navy md:text-4xl">
                Schools hold the most sensitive data there is, and almost none of it is optional
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-navy/[0.74]">
                A school system holds records of minors, guardian contact details, family financial history and
                academic performance. None of it can be deleted to reduce risk — a transfer certificate needs the
                history, and a fee dispute needs the ledger. So the only workable answer is to control who can reach
                what, prove what happened, and keep one school's data out of another's reach.
              </p>
              <p className="mt-4 text-lg leading-8 text-brand-navy/[0.74]">
                Security in KIDUART is not a paid add-on. It is a functional area like any other, with its own
                workflows and controls, and it applies to every panel — from the system admin console down to a parent
                checking one child's attendance.
              </p>
              <Link
                href="/features/security-and-authentication"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3.5 text-sm font-bold text-brand-beige transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
              >
                See the security module area <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </SectionReveal>

            <SectionReveal delay={0.15} className="rounded-[2rem] border border-brand-navy/[0.1] bg-white p-5 shadow-sm sm:p-6">
              <ul className="space-y-3">
                {[
                  { value: "Six", label: "Defence layers", detail: "Login to audit — stacked, not bolted on" },
                  { value: "Role-based", label: "Access control", detail: "Teachers, finance and parents see only their desk" },
                  { value: "Per school", label: "Data isolation", detail: "Each campus stays in its own tenant" },
                  { value: "Audited", label: "Sensitive actions", detail: "Marks, fees and permissions leave a trail" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-brand-navy/[0.08] bg-brand-beige/25 px-4 py-3.5"
                  >
                    <span className="min-w-[6.5rem] shrink-0 text-base font-extrabold leading-tight text-brand-navy sm:min-w-[7.5rem] sm:text-lg">
                      {item.value}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-[0.14em] text-brand-teal">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-brand-navy/[0.74]">{item.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-2xl border border-brand-navy/[0.1] bg-brand-beige/25 p-5">
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-brand-navy">
                  The short version
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-navy/[0.78]">
                  Verified logins with optional authenticator-app MFA, permissions decided by role, each school in its
                  own tenant database, sessions you can revoke, optional IP and location fencing, and an audit trail
                  for sensitive actions.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="section-space relative overflow-hidden border-b border-brand-navy/5 bg-white">
        <BackgroundBlobs
          blobs={[
            { color: "#0c716b", size: 340, position: "top-left", opacity: 0.1 },
            { color: "#f77f00", size: 320, position: "bottom-right", opacity: 0.1 },
          ]}
        />
        <div className="page-shell relative z-10">
          <SectionReveal className="mx-auto mb-10 max-w-3xl text-center">
            <p className="section-kicker">Threats, translated into school situations</p>
            <h2 className="mt-5 text-3xl font-bold text-brand-navy md:text-4xl">
              What happens when a password leaks, a teacher leaves, or a mark changes quietly?
            </h2>
            <p className="mt-4 text-lg leading-8 text-brand-navy/[0.74]">
              Work through every scenario. Each answer points to the exact defence layer and the
              controls that exist in the product today.
            </p>
          </SectionReveal>

          <SectionReveal>
            <SecurityPerimeter
              layers={layers}
              scenarios={SECURITY_SCENARIOS}
              stats={{
                layers: layers.length,
                modules: areaModuleCount,
                capabilities: areaFeatureCount,
              }}
            />
          </SectionReveal>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-brand-beige/25">
        <BackgroundBlobs blobs={[{ color: "#003049", size: 380, position: "top-right", opacity: 0.1 }]} />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Defence in depth</p>
            <h2 className="mt-4 text-3xl font-bold text-brand-navy md:text-4xl">
              Six layers between a login screen and a student record
            </h2>
            <p className="mt-4 text-lg leading-8 text-brand-navy/[0.74]">
              Read them the way a request travels: someone signs in, their role is checked, their school is resolved,
              their session is tracked, the network they came from is evaluated, and whatever they change is written
              to the log.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-14">
            <SecurityStack layers={layers} />
          </SectionReveal>
        </div>
      </section>

      <section className="section-space relative overflow-hidden border-y border-brand-navy/5 bg-white">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">How we handle school data</p>
            <h2 className="mt-4 text-3xl font-bold text-brand-navy md:text-4xl">
              Four rules we hold ourselves to
            </h2>
            <p className="mt-4 text-lg leading-8 text-brand-navy/[0.74]">
              These are the same principles written into our privacy policy — stated here in plain language so your
              IT reviewer does not have to read legal text to understand them.
            </p>
          </SectionReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {DATA_HANDLING_PRINCIPLES.map((principle, idx) => (
              <SectionReveal
                key={principle.title}
                delay={idx * 0.06}
                className="relative rounded-[1.75rem] border border-brand-navy/[0.1] bg-brand-beige/20 p-7"
              >
                <span className="absolute right-6 top-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-extrabold text-brand-navy shadow-sm">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="max-w-[85%] text-xl font-bold text-brand-navy">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-navy/[0.78]">{principle.detail}</p>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-10 text-center">
            <Link
              href="/privacy-policy"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy underline underline-offset-4 transition-colors hover:text-brand-teal"
            >
              Read the full privacy policy <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-brand-navy text-brand-beige">
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-yellow">
              What we do not claim
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              The honest boundaries of our security story
            </h2>
            <p className="mt-4 text-lg leading-8 text-brand-beige/[0.82]">
              Most vendor security pages read the same. This section says what is not true yet, because that is the
              part your IT reviewer actually needs.
            </p>
          </SectionReveal>

          <div className="mt-12 space-y-4">
            {SECURITY_HONESTY.map((item, idx) => (
              <SectionReveal
                key={item.title}
                delay={idx * 0.06}
                className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-6"
              >
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-beige/[0.82]">{item.detail}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Bring your IT reviewer to the demo"
        subtitle="We will walk through login controls, role permissions, session handling, data separation and audit logging on screen — and answer what we have not built yet just as directly."
      />
    </PageTransition>
  );
}

export const getStaticProps: GetStaticProps<SecurityPageProps> = async () => {
  const category = getMatrixCategory("security-and-authentication");

  return {
    props: {
      layers: SECURITY_LAYERS,
      areaFeatureCount: category?.featureCount ?? 0,
      areaModuleCount: category?.moduleCount ?? 0,
    },
  };
};
