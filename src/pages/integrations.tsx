import type { GetStaticProps } from "next";
import { Link } from "wouter";
import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildItemListSchema } from "@/lib/seoSchemas";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { CircleShowcaseHero } from "@/components/ui/CustomHeroes";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { ArrowRight, Code2, Zap } from "lucide-react";
import { ProductIcon } from "@/components/product/ProductIcon";
import { StatChip } from "@/components/product/ProductPrimitives";
import integrationsData, { INTEGRATION_CATEGORIES } from "@/data/integrationsData";
import type { IntegrationStatus } from "@/data/integrationsData";

type IntegrationCard = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  status: IntegrationStatus;
};

type CategoryBlock = {
  title: string;
  slug: string;
  icon: string;
  blurb: string;
  integrations: IntegrationCard[];
};

type IntegrationsPageProps = {
  categories: CategoryBlock[];
  liveCount: number;
  plannedCount: number;
};

function StatusBadge({ status }: { status: IntegrationStatus }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-teal/30 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-teal">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" aria-hidden="true" />
        Available now
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/[0.15] bg-brand-beige/50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-navy/[0.78]">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
      On the roadmap
    </span>
  );
}

export default function Integrations({ categories, liveCount, plannedCount }: IntegrationsPageProps) {
  return (
    <PageTransition className="pt-20 pb-0">
      <PageSeoHead
        title="School ERP Integrations — Razorpay, WhatsApp, SMS, Google & Microsoft | KIDUART"
        description={`Connect KIDUART with the tools your school already runs: Razorpay and Stripe fee payments, WhatsApp and SMS parent notifications, Google and Microsoft sign-in, Zoom, Teams and Meet classes, plus a REST API. ${liveCount} integrations available today.`}
        path="/integrations"
        keywords="school ERP integrations, Razorpay school fees, WhatsApp parent notification school, school SMS gateway India, Google Workspace school login, school ERP REST API"
      />
      <SchemaMarkup
        data={buildItemListSchema(
          "KIDUART integrations",
          categories.flatMap((category) =>
            category.integrations.map((integration) => ({
              name: integration.name,
              path: `/integrations/${integration.slug}`,
            })),
          ),
        )}
      />

      <CircleShowcaseHero
        eyebrow="School ERP integrations"
        title="Connect the tools your school already runs"
        subtitle={`Fee payments, parent messaging, school sign-in accounts, online classes and a REST API — ${liveCount} integrations are available today and ${plannedCount} more are openly listed as roadmap items rather than dressed up as features.`}
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="grid gap-4 sm:grid-cols-3">
            <StatChip value={liveCount} label="Live integrations" />
            <StatChip value={categories.length} label="Integration areas" />
            <StatChip value={plannedCount} label="Openly marked roadmap" />
          </SectionReveal>
          <SectionReveal className="mt-8 rounded-[1.75rem] border border-brand-navy/[0.1] bg-brand-beige/25 p-6 md:p-8">
            <h2 className="text-xl font-bold text-brand-navy">
              Why some logos on this page say &ldquo;roadmap&rdquo;
            </h2>
            <p className="mt-3 text-base leading-8 text-brand-navy/[0.76]">
              Most vendor integration pages show a wall of logos and let you assume everything works. We split the
              list: what is implemented in the product today, and what is a genuine roadmap item. If an integration
              decides whether KIDUART fits your school, you should know its status before the demo, not after
              signing.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-brand-beige/20">
        <BackgroundBlobs
          blobs={[
            { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.14 },
            { color: "#0c716b", size: 300, position: "center-right", opacity: 0.14 },
          ]}
        />
        <FloatingIcons icons={["CreditCard", "PieChart", "MessageSquare"]} count={4} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {categories.map((category) => (
              <div key={category.slug} id={category.slug} className="scroll-mt-28">
                <SectionReveal className="mb-8 grid gap-4 border-b border-brand-navy/[0.08] pb-6 md:grid-cols-[auto_1fr] md:items-start md:gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-brand-beige">
                    <ProductIcon name={category.icon} className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">{category.title}</h2>
                    <p className="mt-2 max-w-2xl text-base leading-7 text-brand-navy/[0.74]">{category.blurb}</p>
                  </div>
                </SectionReveal>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.integrations.map((integration, i) => (
                    <SectionReveal key={integration.slug} delay={Math.min(i, 5) * 0.06}>
                      <Link
                        href={`/integrations/${integration.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-brand-navy/5 bg-white p-6 shadow-lg shadow-brand-navy/5 transition-all duration-300 hover:border-brand-teal/30 hover:shadow-xl"
                      >
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/[0.06] transition-transform group-hover:scale-110">
                            <ProductIcon name={integration.icon} className="h-6 w-6 text-brand-navy" />
                          </div>
                          <StatusBadge status={integration.status} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-navy transition-colors group-hover:text-brand-teal">
                          {integration.name}
                        </h3>
                        <p className="mt-2.5 flex-1 text-sm leading-7 text-brand-navy/[0.74]">
                          {integration.description}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-teal">
                          How it works <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </Link>
                    </SectionReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
        <FloatingIcons icons={["Code2", "Zap", "Blocks"]} count={4} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionReveal>
              <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Build your own with the REST API</h2>
              <p className="mb-8 text-lg leading-8" style={{ color: "rgba(252,246,211,0.82)" }}>
                Schools connect biometric attendance devices, their public website, or a reporting warehouse. Your
                developers work against versioned REST endpoints using a scoped API key — never a shared staff login
                — and webhooks push live events such as a confirmed fee payment.
              </p>
              <ul className="mb-8 space-y-3.5">
                {[
                  "Versioned REST endpoints under a stable base path",
                  "Managed API keys with scoped permissions",
                  "Webhooks for payment and record events",
                  "Published endpoint reference for your team",
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
              <div className="relative rounded-2xl border border-white/10 bg-[#0d1117] p-6 font-mono text-sm shadow-2xl">
                <div className="mb-4 flex gap-2" aria-hidden="true">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="mb-2 text-blue-400">// Fetch students for a class</div>
                <div className="text-white">
                  <span className="text-purple-400">const</span> response ={" "}
                  <span className="text-purple-400">await</span> fetch(
                  <span className="text-green-400">&apos;https://api.kiduart.com/v1/students&apos;</span>, {"{"}
                </div>
                <div className="ml-4 text-white">
                  method: <span className="text-green-400">&apos;GET&apos;</span>,
                </div>
                <div className="ml-4 text-white">headers: {"{"}</div>
                <div className="ml-8 text-white">
                  <span className="text-green-400">&apos;Authorization&apos;</span>:{" "}
                  <span className="text-green-400">&apos;Bearer YOUR_API_KEY&apos;</span>
                </div>
                <div className="ml-4 text-white">{"}"}</div>
                <div className="text-white">{"}"});</div>
                <div className="mt-2 text-white">
                  <span className="text-purple-400">const</span> data ={" "}
                  <span className="text-purple-400">await</span> response.json();
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <CtaSection
        title="Tell us which tools your school cannot give up"
        subtitle="Bring your payment gateway, messaging provider and school account setup to the demo. We will show exactly how each one connects — and say plainly if it does not yet."
      />
    </PageTransition>
  );
}

export const getStaticProps: GetStaticProps<IntegrationsPageProps> = async () => {
  const entries = Object.entries(integrationsData);

  const categories: CategoryBlock[] = INTEGRATION_CATEGORIES.map((category) => ({
    title: category.title,
    slug: category.slug,
    icon: category.icon,
    blurb: category.blurb,
    integrations: entries
      .filter(([, integration]) => integration.category === category.title)
      .sort(([, a], [, b]) => (a.status === b.status ? 0 : a.status === "live" ? -1 : 1))
      .map(([slug, integration]) => ({
        slug,
        name: integration.name,
        description: integration.description,
        icon: integration.icon,
        status: integration.status,
      })),
  })).filter((category) => category.integrations.length > 0);

  return {
    props: {
      categories,
      liveCount: entries.filter(([, integration]) => integration.status === "live").length,
      plannedCount: entries.filter(([, integration]) => integration.status === "planned").length,
    },
  };
};
