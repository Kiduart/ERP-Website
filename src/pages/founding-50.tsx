import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { pageSeo } from "@/lib/pageSeo";
import { Link } from "wouter";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Headphones,
  Medal,
  Users,
  Wallet,
} from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Zero software cost",
    body: "KIDUART platform software fees waived for the current academic session for confirmed Founding 50 schools.",
  },
  {
    icon: Medal,
    title: "Premium ERP features",
    body: "Access to the school ERP modules listed in your written Founding 50 confirmation — admissions, fees, attendance, academics, and parent communication workflows as agreed.",
  },
  {
    icon: Clock3,
    title: "Save time. Work smarter.",
    body: "One system for daily school operations so staff spend less time on spreadsheets and WhatsApp follow-ups.",
  },
  {
    icon: Users,
    title: "Selected founding cohort",
    body: "Up to 50 eligible Indian schools after demo and fit review — seats are limited on purpose so onboarding quality stays high.",
  },
  {
    icon: Headphones,
    title: "Dedicated support",
    body: "Founding schools get onboarding attention from the same Noida team that builds the product.",
  },
] as const;

const faq = [
  {
    q: "What is the Founding 50 Schools offer?",
    a: "A limited KIDUART campaign for up to 50 eligible schools to use the school ERP at zero software cost for the current academic session, with premium modules confirmed in writing after a free demo.",
  },
  {
    q: "Is every school that applies automatically free?",
    a: "No. Schools are selected after a demo and operational fit review. Founding 50 means a maximum of fifty confirmed seats, not the first fifty form submissions.",
  },
  {
    q: "What does zero software cost include?",
    a: "It refers to waived KIDUART subscription/platform software fees for the agreed academic session. Third-party costs (SMS, payment gateway, hardware) and custom work are separate unless stated in writing.",
  },
  {
    q: "Where are the legal terms?",
    a: "Full campaign terms are in the KIDUART Terms & Conditions under Founding 50 Schools Offer, and summarized on this page.",
  },
] as const;

export default function Founding50Page() {
  const seo = pageSeo.founding50;

  return (
    <>
      <PageSeoHead {...seo} />
      <SchemaMarkup
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Offer",
            name: "KIDUART Founding 50 Schools — Zero software cost for current academic session",
            description: seo.description,
            url: "https://www.kiduart.com/founding-50",
            price: "0",
            priceCurrency: "INR",
            availability: "https://schema.org/LimitedAvailability",
            category: "School ERP Software",
            eligibleRegion: {
              "@type": "Country",
              name: "IN",
            },
            seller: {
              "@type": "Organization",
              name: "KIDUART",
              url: "https://www.kiduart.com",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          },
        ]}
      />

      <PageTransition className="pt-20 pb-0">
        <section className="relative overflow-hidden border-b border-brand-navy/5 bg-[#f7f4eb]">
          <div className="page-shell relative z-10 grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <SectionReveal instant className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-teal">
                Limited campaign
              </p>
              <h1 className="mt-4 text-[clamp(2rem,1.4rem+2vw,3.1rem)] font-bold leading-[1.08] text-brand-navy">
                Founding 50 Schools —{" "}
                <span className="text-brand-orange">
                  zero software cost
                </span>{" "}
                for the current academic session
              </h1>
              <p className="mt-5 text-lg leading-8 text-brand-navy/72">
                Your school could be one of fifty Indian schools selected for
                KIDUART school ERP at zero software cost this session —
                premium modules, clear T&amp;Cs, free demo to start.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-brand-navy"
                >
                  <CalendarDays className="h-5 w-5" aria-hidden="true" />
                  Book your free demo
                </Link>
                <Link
                  href="/terms-conditions#founding-50"
                  className="inline-flex items-center justify-center rounded-full border border-brand-navy/15 bg-white px-7 py-3.5 text-base font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                >
                  Read offer terms
                </Link>
              </div>
              <p className="mt-4 text-sm text-brand-navy/55">
                *T&amp;C apply · Seats limited · Written confirmation required
              </p>
            </SectionReveal>

            <SectionReveal instant className="mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[1.5rem] border border-brand-navy/10 bg-white shadow-xl shadow-brand-navy/10">
                <img
                  src="/images/campaign/founding-50-poster.png"
                  alt="KIDUART Founding 50 Schools poster: school ERP software at zero cost, book a free demo"
                  className="h-auto w-full"
                  width={682}
                  height={720}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="section-space bg-white">
          <div className="page-shell">
            <SectionReveal className="mx-auto max-w-2xl text-center">
              <h2 className="section-title text-brand-navy">
                What founding schools get
              </h2>
              <p className="section-copy mt-4 text-brand-navy/70">
                Clear benefits, honest limits — no vague “everything free forever”
                claims.
              </p>
            </SectionReveal>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, body }) => (
                <li
                  key={title}
                  className="rounded-2xl border border-brand-navy/[0.08] bg-brand-beige/25 p-6"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-brand-beige">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-brand-navy">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-brand-navy/72">
                    {body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-space border-y border-brand-navy/5 bg-brand-beige/30">
          <div className="page-shell mx-auto max-w-3xl">
            <SectionReveal>
              <h2 className="section-title text-center text-brand-navy">
                Campaign FAQ
              </h2>
            </SectionReveal>
            <dl className="mt-10 space-y-4">
              {faq.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-brand-navy/10 bg-white p-5 sm:p-6"
                >
                  <dt className="flex items-start gap-2 text-base font-bold text-brand-navy">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal"
                      aria-hidden="true"
                    />
                    {item.q}
                  </dt>
                  <dd className="mt-2 pl-7 text-sm leading-7 text-brand-navy/72">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-center text-sm text-brand-navy/60">
              Full legal wording:{" "}
              <Link
                href="/terms-conditions#founding-50"
                className="font-bold text-brand-teal underline-offset-2 hover:underline"
              >
                Terms & Conditions — Founding 50 Schools Offer
              </Link>
            </p>
          </div>
        </section>

        <CtaSection
          title="Ready to see if your school fits Founding 50?"
          subtitle="Book a free demo. We’ll map your needs and confirm whether a founding seat is available for zero software cost this session."
        />
      </PageTransition>
    </>
  );
}
