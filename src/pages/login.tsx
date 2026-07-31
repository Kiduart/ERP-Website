import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { pageSeo } from "@/lib/pageSeo";
import { ProductIcon } from "@/components/product/ProductIcon";
import { InView } from "@/components/ui/InView";
import { Stagger } from "@/components/ui/Stagger";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { PRODUCT_PANELS } from "@/data/productPanels";
import { CONTACT_EMAIL } from "@/lib/contact";
import { buildBreadcrumbSchema } from "@/lib/seoSchemas";
import { Link } from "wouter";
import { ArrowRight, KeyRound, LifeBuoy } from "lucide-react";

/** Portal login paths by panel slug  system-admin excluded from this gate. */
const LOGIN_URL_BY_SLUG: Record<string, string> = {
  organization: "https://portal.kiduart.com/organization/auth/login",
  director: "https://portal.kiduart.com/director/auth/login",
  "school-admin": "https://portal.kiduart.com/school/auth/login",
  academic: "https://portal.kiduart.com/academic/auth/login",
  teacher: "https://portal.kiduart.com/teacher/auth/login",
  finance: "https://portal.kiduart.com/finance/auth/login",
  hr: "https://portal.kiduart.com/hr/auth/login",
  parent: "https://portal.kiduart.com/parent/auth/login",
  student: "https://portal.kiduart.com/student/auth/login",
};

const LOGIN_ROLES = PRODUCT_PANELS.filter(
  (panel) => panel.slug !== "system-admin" && LOGIN_URL_BY_SLUG[panel.slug],
).map((panel) => ({
  slug: panel.slug,
  title: panel.shortLabel,
  description: panel.summary,
  url: LOGIN_URL_BY_SLUG[panel.slug]!,
  icon: panel.icon,
  stage: panel.stage,
}));

export default function Login() {
  return (
    <PageTransition className="pt-20 pb-0">
      <PageSeoHead {...pageSeo.login} />
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Login", path: "/login" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "KIDUART Login",
            url: "https://www.kiduart.com/login",
            description: pageSeo.login.description,
            about: {
              "@type": "SoftwareApplication",
              name: "KIDUART School ERP",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
            },
          },
        ]}
      />

      {/* Ops-room hero */}
      <section className="relative overflow-hidden bg-brand-navy">
        <div className="cta-aurora opacity-60" aria-hidden="true" />
        <div className="cta-grid" aria-hidden="true" />
        <div className="blog-signal-grid opacity-40" aria-hidden="true" />

        <div className="page-shell relative z-10 py-14 md:py-16">
          <SectionReveal instant className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-brand-yellow">
              <span className="console-live-dot h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              Secure portal · Role gate
            </p>
            <h1 className="mt-6 text-[clamp(2.2rem,1.35rem+2.8vw,3.8rem)] font-bold leading-[0.96] tracking-tight text-brand-beige">
              Login as your role
              <span className="mt-1 block text-brand-yellow">
                enter your KIDUART desk
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-brand-beige/75 md:text-lg">
              Pick the panel you use every day school admin, teacher, finance,
              parent, student, and more. Each login opens the workspace built
              for that role.
            </p>
            <p className="console-trace mx-auto mt-6 max-w-lg overflow-x-auto rounded-xl border border-white/12 bg-brand-navy/50 px-4 py-3 font-mono text-xs text-brand-beige/65">
              <span className="text-brand-yellow">▸ </span>
              role.select → portal.auth → your.dashboard
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Role console */}
      <section className="relative overflow-hidden bg-[#f4f7f8] py-14 md:py-20">
        <div className="page-shell relative z-10">
          <InView
            once
            className="motion-rise mb-10 flex flex-wrap items-end justify-between gap-4"
          >
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-teal">
                Login as
              </p>
              <h2 className="mt-2 text-2xl font-bold text-brand-navy md:text-3xl">
                {LOGIN_ROLES.length} role portals
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-brand-navy/65">
              Same product, different desks. Choose the gate that matches how
              you work inside KIDUART.
            </p>
          </InView>

          <Stagger
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            itemClassName="motion-brick motion-brick-dense"
          >
            {LOGIN_ROLES.map((role, index) => (
              <article
                key={role.slug}
                className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-brand-navy/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-teal/35 hover:shadow-lg hover:shadow-brand-navy/10"
              >
                <div className="flex items-start justify-between gap-3 border-b border-brand-navy/[0.06] bg-brand-navy px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow/[0.16] text-brand-yellow">
                      <ProductIcon name={role.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-yellow/70">
                        {String(index + 1).padStart(2, "0")} ·{" "}
                        {role.stage.split("  ")[0]}
                      </p>
                      <h3 className="text-lg font-bold text-brand-beige">
                        {role.title}
                      </h3>
                    </div>
                  </div>
                  <KeyRound
                    className="mt-1 h-4 w-4 text-brand-beige/35"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="flex-1 text-sm leading-6 text-brand-navy/[0.72]">
                    {role.description}
                  </p>
                  <a
                    href={role.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-bold text-brand-beige transition-colors group-hover:bg-brand-teal"
                  >
                    Login as {role.title}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </Stagger>

          <InView
            once
            className="motion-rise mt-12 grid gap-4 rounded-[1.5rem] border border-brand-navy/8 bg-white p-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-8"
          >
            <div>
              <p className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-teal">
                <LifeBuoy className="h-3.5 w-3.5" /> Need a hand?
              </p>
              <h3 className="mt-2 text-xl font-bold text-brand-navy">
                Not sure which login to use?
              </h3>
              <p className="mt-2 text-sm leading-7 text-brand-navy/[0.7]">
                School staff usually start at School Admin or Teacher. Families
                use Parent. Learners use Student. Multi-campus HQ uses
                Organisation. Email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-brand-teal hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                if your school has not shared credentials yet.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/help"
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-bold text-brand-beige"
              >
                Help Center <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-brand-navy/12 bg-[#f4f7f8] px-5 py-3 text-sm font-bold text-brand-navy"
              >
                Contact support
              </Link>
            </div>
          </InView>
        </div>
      </section>

      {/* SEO / trust footer strip */}
      <section className="border-t border-brand-navy/5 bg-white py-10">
        <div className="page-shell">
          <p className="mx-auto max-w-3xl text-center text-sm leading-7 text-brand-navy/[0.7]">
            KIDUART role portals cover school administration, academics,
            finance, HR, parent communication, and the student desk one Indian
            school ERP with separate logins so each person only sees what their
            role needs.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
