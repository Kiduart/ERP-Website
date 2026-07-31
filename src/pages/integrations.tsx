import type { GetStaticProps } from "next";
import { Link } from "wouter";
import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildFaqPageSchema, buildItemListSchema } from "@/lib/seoSchemas";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { CircleShowcaseHero } from "@/components/ui/CustomHeroes";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { ArrowRight, Code2, Info, Zap } from "lucide-react";
import { ProductIcon } from "@/components/product/ProductIcon";
import {
  IntegrationDirectory,
  type DirectoryCategory,
} from "@/components/product/IntegrationDirectory";
import { STATUS_STYLE } from "@/components/product/IntegrationStatusPill";
import integrationsData, {
  INTEGRATION_CATEGORIES,
  INTEGRATIONS_NOT_SUPPORTED,
  INTEGRATION_STATUS_META,
  type IntegrationStatus,
} from "@/data/integrationsData";
import { AREA_NARRATIVE_BY_SLUG } from "@/data/productNarrative";
import { findMatrixModule, getMatrixCategory } from "@/data/featureMatrix";

const CONNECTION_STEPS = [
  {
    title: "The account stays in your name",
    detail:
      "Your Razorpay merchant ID, your SMS sender ID, your WhatsApp number, your Workspace domain. We never resell a shared account, so your settlement, credits and sender reputation stay yours.",
  },
  {
    title: "Credentials are encrypted per school",
    detail:
      "Keys and tokens are stored encrypted against your school record, isolated from every other school on the platform, and can be rotated or removed by you without touching anything else.",
  },
  {
    title: "Work is queued, not blocked",
    detail:
      "Messages and notifications go through a queue, so a slow provider never freezes the screen a clerk is working on and a failed send can be retried instead of vanishing.",
  },
  {
    title: "The provider confirms it independently",
    detail:
      "Payment and delivery callbacks are signature-verified before anything is written. A fee is closed on a confirmed webhook, not on a browser redirect that could be faked or lost.",
  },
  {
    title: "It lands in the module, with a trail",
    detail:
      "The payment appears on the fee record, the message on the communication log, the punch on the attendance register — each with a record of what happened, so a dispute has an answer.",
  },
];

const INTEGRATION_FAQS = [
  {
    q: "Do we have to change our payment gateway or SMS provider?",
    a: "No. KIDUART connects to the accounts you already run — Razorpay or Stripe for fees, Twilio, MSG91 or Amazon SNS for SMS, your own WhatsApp Business number, your own email domain. You keep the commercial relationship and the pricing you negotiated.",
  },
  {
    q: "Who pays for SMS, WhatsApp and payment gateway charges?",
    a: "You do, on your own provider accounts. That is deliberate: your SMS credits, WhatsApp conversation charges and gateway fees stay visible and negotiable to you instead of being marked up inside a subscription.",
  },
  {
    q: "Is there an extra charge for each integration?",
    a: "No. Connecting a gateway, a messaging provider or your school accounts is part of the platform. What you pay outside KIDUART is whatever your provider bills you directly.",
  },
  {
    q: "What does 'guided setup' mean on this page?",
    a: "It means the integration is built and working, but it is switched on with our team during onboarding because it needs credentials, admin consent or hardware from your side — a Zoom app, Microsoft tenant consent, or an attendance machine at the gate.",
  },
  {
    q: "We already have biometric machines and bus GPS. Do we replace them?",
    a: "No. Tell us the make and model. Punches can flow into the attendance register through a device key, and vehicle locations can sit against the route and vehicle records, so the hardware you already bought becomes useful to the office.",
  },
  {
    q: "Can our own website or internal system talk to KIDUART?",
    a: "Yes, through the REST API. Your developer gets a scoped API key rather than a shared staff login, works against versioned endpoints, and the key can be rotated or revoked without disturbing anyone's account.",
  },
  {
    q: "Do you integrate with Tally, Cashfree, PayU or DigiLocker?",
    a: "Not today. Finance data leaves as Excel, CSV or PDF for your accountant, and online fee collection runs on Razorpay or Stripe. We list what is not connected on this page rather than letting a wall of logos imply otherwise.",
  },
  {
    q: "If we leave, do we lose the data these integrations created?",
    a: "No. Payments, messages, documents and attendance records are your school's data and can be exported. Integration credentials are yours to revoke at your provider the same day.",
  },
];

type StatusLedgerEntry = {
  status: IntegrationStatus;
  count: number;
};

type IntegrationsPageProps = {
  categories: DirectoryCategory[];
  ledger: StatusLedgerEntry[];
  counts: { live: number; guided: number; planned: number; total: number };
};

export default function Integrations({ categories, ledger, counts }: IntegrationsPageProps) {
  return (
    <PageTransition className="pt-20 pb-0">
      <PageSeoHead
        title={`${counts.total} School ERP Integrations — Razorpay, WhatsApp, SMS, Google & Microsoft | KIDUART`}
        description={`Connect KIDUART with the tools your school already runs: Razorpay and Stripe fee payments, WhatsApp Business, Twilio and MSG91 SMS, email delivery, Google and Microsoft sign-in, Zoom, Teams and Meet, biometric attendance devices, bus GPS tracking and a REST API. ${counts.live} live today, ${counts.guided} set up with our team, ${counts.planned} openly marked roadmap.`}
        path="/integrations"
        keywords="school ERP integrations, Razorpay school fees, WhatsApp parent notification school, school SMS gateway India, MSG91 school SMS, Google Workspace school login, biometric attendance integration, school bus GPS tracking software, school ERP REST API"
      />
      <SchemaMarkup
        data={buildItemListSchema(
          "KIDUART integrations",
          categories.flatMap((category) =>
            category.connectors.map((connector) => ({
              name: connector.name,
              path: `/integrations/${connector.slug}`,
            })),
          ),
        )}
      />
      <SchemaMarkup data={buildFaqPageSchema({ integrations: INTEGRATION_FAQS })} />

      <CircleShowcaseHero
        eyebrow="School ERP integrations"
        title="Connect the tools your school already runs"
        subtitle={`Fee gateways, parent messaging, school sign-in accounts, online classes, gate devices and a REST API. ${counts.live} connectors are live today, ${counts.guided} are switched on with our team, and ${counts.planned} are listed as roadmap instead of being dressed up as features.`}
        image="/images/banner/integration-hero.jpg"
        actions={(
          <>
            <Link
              href="/demo"
              className="rounded-full bg-brand-orange px-7 py-3.5 text-sm font-bold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-navy hover:text-brand-beige"
            >
              Book a Free Demo
            </Link>
            <Link
              href="/integrations/api-docs"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/[0.12] bg-white px-7 py-3.5 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
            >
              View API Docs
            </Link>
          </>
        )}
      />

      <section className="section-space-tight border-b border-brand-navy/5 bg-white">
        <div className="page-shell">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Three honest labels, not one wall of logos</p>
            <h2 className="mt-4 text-3xl font-bold text-brand-navy md:text-4xl">
              Every connector on this page carries its real status
            </h2>
            <p className="mt-4 text-base leading-8 text-brand-navy/[0.76]">
              Most vendor integration pages show a grid of brand marks and let you assume everything
              works. If an integration decides whether KIDUART fits your school, you should know where it
              stands before the demo — not after signing.
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ledger.map((entry, index) => {
              const meta = INTEGRATION_STATUS_META[entry.status];
              const style = STATUS_STYLE[entry.status];
              return (
                <SectionReveal
                  key={entry.status}
                  delay={index * 0.08}
                  className="rounded-[1.5rem] border border-brand-navy/[0.1] bg-brand-beige/25 p-6"
                >
                  <div className="flex items-center gap-2.5">
                    <span aria-hidden="true" className={`h-2 w-2 rounded-full ${style.dot}`} />
                    <span className={`text-xs font-bold uppercase tracking-[0.16em] ${style.accentText}`}>
                      {meta.long}
                    </span>
                  </div>
                  <p className="mt-4 text-4xl font-extrabold leading-none text-brand-navy">{entry.count}</p>
                  <p className="mt-3 text-sm leading-7 text-brand-navy/[0.78]">{meta.note}</p>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-brand-beige/20">
        <BackgroundBlobs
          blobs={[
            { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.12 },
            { color: "#0c716b", size: 300, position: "center-right", opacity: 0.12 },
          ]}
        />
        <div className="page-shell relative z-10">
          <SectionReveal className="mb-12 max-w-3xl">
            <p className="section-kicker">The full directory</p>
            <h2 className="mt-4 text-3xl font-bold text-brand-navy md:text-4xl">
              {counts.total} connectors, grouped by the job they do
            </h2>
            <p className="mt-4 text-base leading-8 text-brand-navy/[0.76]">
              Filter by status or jump to the category you care about. Every connector page explains the
              hop-by-hop flow, who holds the credentials, what your school has to bring, and which modules
              the data actually lands in.
            </p>
          </SectionReveal>

          <SectionReveal>
            <IntegrationDirectory categories={categories} />
          </SectionReveal>
        </div>
      </section>

      <section className="section-space border-y border-brand-navy/5 bg-white">
        <div className="page-shell">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Under the hood</p>
            <h2 className="mt-4 text-3xl font-bold text-brand-navy md:text-4xl">
              What actually happens when a connector runs
            </h2>
            <p className="mt-4 text-base leading-8 text-brand-navy/[0.76]">
              The same five rules apply whether it is a fee payment, an absence SMS or a gate punch. This
              is the part a school should ask every vendor about, because it decides who is liable when
              something goes wrong.
            </p>
          </SectionReveal>

          <div className="relative mt-12">
            <span aria-hidden="true" className="wire-rail pointer-events-none absolute left-6 right-6 top-5 hidden lg:block" />
            <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {CONNECTION_STEPS.map((step, index) => (
                <li key={step.title} className="lg:px-1">
                  <SectionReveal delay={Math.min(index, 4) * 0.06}>
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-teal/40 bg-white text-sm font-extrabold text-brand-teal"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-brand-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-brand-navy/[0.76]">{step.detail}</p>
                  </SectionReveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-space-tight bg-brand-beige/30">
        <div className="page-shell">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Said out loud</p>
            <h2 className="mt-4 text-3xl font-bold text-brand-navy">What we are not connected to</h2>
            <p className="mt-4 text-base leading-8 text-brand-navy/[0.76]">
              These come up in almost every demo. Rather than leave you to discover them later, here is
              the list — with what we do instead.
            </p>
          </SectionReveal>

          <ul className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {INTEGRATIONS_NOT_SUPPORTED.map((entry, index) => (
              <li key={entry.name} className="h-full">
                <SectionReveal
                  delay={Math.min(index, 4) * 0.05}
                  className="flex h-full gap-3 rounded-2xl border border-brand-navy/[0.1] bg-white p-5"
                >
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                  <span>
                    <span className="block text-base font-bold text-brand-navy">{entry.name}</span>
                    <span className="mt-1.5 block text-sm leading-7 text-brand-navy/[0.78]">{entry.note}</span>
                  </span>
                </SectionReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="section-space relative overflow-hidden bg-brand-navy text-white"
        style={{ color: "#fcf6d3" }}
      >
        <BackgroundBlobs
          blobs={[
            { color: "#f77f00", size: 400, position: "top-left", opacity: 0.15 },
            { color: "#0c716b", size: 400, position: "bottom-right", opacity: 0.15 },
          ]}
        />
        <div className="page-shell relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">
                For your IT team
              </p>
              <h2 className="mb-6 mt-4 text-3xl font-bold lg:text-4xl">Build your own with the REST API</h2>
              <p className="mb-8 text-lg leading-8" style={{ color: "rgba(252,246,211,0.82)" }}>
                Schools connect attendance devices, their public website, or a reporting warehouse. Your
                developers work against versioned REST endpoints using a scoped API key — never a shared
                staff login — with rate limits and request logging on every call.
              </p>
              <ul className="mb-8 space-y-3.5">
                {[
                  "Versioned REST endpoints under a stable /api/v1 base path",
                  "Managed API keys with scoped permissions you can rotate",
                  "Signature-verified webhooks from payment and messaging providers",
                  "Published endpoint reference and error contract for your team",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Zap className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/integrations/api-docs"
                className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-white/30 bg-transparent px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
              >
                <Code2 className="h-5 w-5" aria-hidden="true" /> View API Docs
              </Link>
            </SectionReveal>

            <SectionReveal delay={0.2} className="relative">
              <div className="absolute inset-0 rounded-full bg-brand-teal/20 blur-3xl" />
              <div className="relative overflow-x-auto rounded-2xl border border-white/10 bg-[#0d1117] p-6 font-mono text-sm shadow-2xl">
                <div className="mb-4 flex gap-2" aria-hidden="true">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="mb-2 text-blue-400">// Students in one class, read-only key</div>
                <div className="text-white">
                  <span className="text-purple-400">const</span> res ={" "}
                  <span className="text-purple-400">await</span> fetch(
                </div>
                <div className="ml-4 text-green-400">
                  &apos;https://api.kiduart.com/api/v1/students?classId=8A&apos;,
                </div>
                <div className="ml-4 text-white">{"{ headers: {"}</div>
                <div className="ml-8 text-white">
                  <span className="text-green-400">&apos;x-api-key&apos;</span>:{" "}
                  <span className="text-green-400">&apos;kd_live_•••&apos;</span>
                </div>
                <div className="ml-4 text-white">{"} });"}</div>
                <div className="mt-3 text-blue-400">// → { "{ success: true, data: [...], meta: {...} }" }</div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-10 text-center">
            <p className="section-kicker">Before you commit</p>
            <h2 className="mt-4 text-3xl font-bold text-brand-navy">Integration questions schools ask</h2>
          </SectionReveal>

          <div className="space-y-4">
            {INTEGRATION_FAQS.map((faq) => (
              <SectionReveal key={faq.q}>
                <details className="group rounded-2xl border border-brand-navy/[0.1] bg-brand-beige/20 p-6 transition-colors open:border-brand-teal/40">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-bold text-brand-navy marker:content-none">
                    {faq.q}
                    <ArrowRight
                      className="h-5 w-5 shrink-0 text-brand-navy/50 transition-transform group-open:rotate-90"
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

          <SectionReveal className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {INTEGRATION_CATEGORIES.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-brand-navy/[0.12] bg-brand-beige/30 px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
              >
                <ProductIcon name={category.icon} className="h-4 w-4" />
                {category.title}
              </a>
            ))}
          </SectionReveal>
        </div>
      </section>

      <CtaSection
        title="Tell us which tools your school cannot give up"
        subtitle="Bring your payment gateway, messaging provider, school accounts and gate devices to the demo. We will show exactly how each one connects — and say plainly if it does not yet."
      />
    </PageTransition>
  );
}

const STATUS_ORDER: Record<IntegrationStatus, number> = { live: 0, guided: 1, planned: 2 };

export const getStaticProps: GetStaticProps<IntegrationsPageProps> = async () => {
  const entries = Object.entries(integrationsData);

  const categories: DirectoryCategory[] = INTEGRATION_CATEGORIES.map((category) => ({
    slug: category.slug,
    title: category.title,
    icon: category.icon,
    blurb: category.blurb,
    connectors: entries
      .filter(([, integration]) => integration.category === category.title)
      .sort(([, a], [, b]) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status])
      .map(([slug, integration]) => ({
        slug,
        name: integration.name,
        description: integration.description,
        icon: integration.icon,
        status: integration.status,
        providers: integration.providers,
        modules: integration.modules.flatMap((ref) => {
          const matrixCategory = getMatrixCategory(ref.area);
          const matrixModule = findMatrixModule(matrixCategory, ref.module);
          if (!matrixCategory || !matrixModule) return [];
          return [
            {
              label: `${AREA_NARRATIVE_BY_SLUG[matrixCategory.slug]?.label ?? matrixCategory.name} · ${matrixModule.name}`,
              href: `/features/${matrixCategory.slug}/${matrixModule.slug}`,
            },
          ];
        }),
      })),
  })).filter((category) => category.connectors.length > 0);

  const counts = {
    live: entries.filter(([, entry]) => entry.status === "live").length,
    guided: entries.filter(([, entry]) => entry.status === "guided").length,
    planned: entries.filter(([, entry]) => entry.status === "planned").length,
    total: entries.length,
  };

  return {
    props: {
      categories,
      counts,
      ledger: [
        { status: "live", count: counts.live },
        { status: "guided", count: counts.guided },
        { status: "planned", count: counts.planned },
      ],
    },
  };
};
