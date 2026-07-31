import { Link } from "wouter";
import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { pageSeo } from "@/lib/pageSeo";
import { buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seoSchemas";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { InView } from "@/components/ui/InView";
import { Stagger } from "@/components/ui/Stagger";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { ApiExplorer, type ApiGroup } from "@/components/product/ApiExplorer";
import { Breadcrumbs } from "@/components/product/ProductPrimitives";
import {
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  KeyRound,
  Radio,
  ShieldCheck,
  Terminal,
} from "lucide-react";

const MUTED = { color: "rgb(var(--hero-muted-rgb) / 0.8)" };

const API_GROUPS: ApiGroup[] = [
  {
    id: "students",
    label: "Students",
    blurb:
      "Read and maintain the student record your website, admission funnel or reporting warehouse needs to stay in step with the office.",
    endpoints: [
      {
        method: "GET",
        path: "/api/v1/students",
        purpose: "List students with class, section and status filters.",
        scope: "students:read",
      },
      {
        method: "GET",
        path: "/api/v1/students/{id}",
        purpose:
          "Fetch one student with the fields your key is allowed to see.",
        scope: "students:read",
      },
      {
        method: "POST",
        path: "/api/v1/students",
        purpose: "Create a student record from an external admission form.",
        scope: "students:write",
      },
      {
        method: "PATCH",
        path: "/api/v1/students/{id}",
        purpose:
          "Update contact or guardian details without touching academic history.",
        scope: "students:write",
      },
    ],
  },
  {
    id: "attendance",
    label: "Attendance",
    blurb:
      "Push punches from gate hardware and pull the register for dashboards. This is the group most schools connect first, because the device is already on the wall.",
    endpoints: [
      {
        method: "POST",
        path: "/api/v1/attendance/biometric",
        purpose:
          "Submit device punches using a device key rather than a staff login.",
        scope: "attendance:write",
      },
      {
        method: "GET",
        path: "/api/v1/attendance",
        purpose: "Read the register for a class, section or date range.",
        scope: "attendance:read",
      },
      {
        method: "POST",
        path: "/api/v1/attendance",
        purpose: "Mark or correct attendance from an approved external system.",
        scope: "attendance:write",
      },
    ],
  },
  {
    id: "fees",
    label: "Fees and finance",
    blurb:
      "Pull dues and collection data for your accountant's system. Writes are deliberately narrow here, because the fee ledger is the record you least want a script to guess at.",
    endpoints: [
      {
        method: "GET",
        path: "/api/v1/fees/dues",
        purpose: "Outstanding dues by student, class or fee head.",
        scope: "fees:read",
      },
      {
        method: "GET",
        path: "/api/v1/fees/transactions",
        purpose: "Collection history for reconciliation and reporting.",
        scope: "fees:read",
      },
      {
        method: "POST",
        path: "/api/v1/fees/collect",
        purpose: "Record a payment collected in an approved external channel.",
        scope: "fees:write",
      },
    ],
  },
  {
    id: "academics",
    label: "Academics",
    blurb:
      "Class structure, subjects and assessment data for LMS bridges and analytics, so the class list your other tools use is the one the school actually maintains.",
    endpoints: [
      {
        method: "GET",
        path: "/api/v1/classes",
        purpose: "Classes and sections for the current academic session.",
        scope: "academics:read",
      },
      {
        method: "GET",
        path: "/api/v1/subjects",
        purpose: "Subject master with class mapping.",
        scope: "academics:read",
      },
      {
        method: "GET",
        path: "/api/v1/exams/results",
        purpose: "Published assessment results for reporting use.",
        scope: "academics:read",
      },
    ],
  },
  {
    id: "staff",
    label: "Staff and HR",
    blurb:
      "Directory and staff attendance data for payroll bridges and access-control systems.",
    endpoints: [
      {
        method: "GET",
        path: "/api/v1/staff",
        purpose: "Staff directory with department and designation.",
        scope: "staff:read",
      },
      {
        method: "GET",
        path: "/api/v1/staff/attendance",
        purpose: "Staff attendance for a period, for payroll input.",
        scope: "staff:read",
      },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    blurb:
      "Generate and pull the same reports the dashboard shows, so a board pack is not rebuilt by hand every quarter.",
    endpoints: [
      {
        method: "GET",
        path: "/api/v1/reports/{type}",
        purpose: "Fetch a generated report with the filters you pass.",
        scope: "reports:read",
      },
      {
        method: "POST",
        path: "/api/v1/reports/export",
        purpose: "Queue a large export and collect it when it is ready.",
        scope: "reports:read",
      },
    ],
  },
];

const WEBHOOKS_IN = [
  {
    provider: "Razorpay",
    events:
      "payment.captured, payment.failed, refund.processed, order.paid, dispute.created",
  },
  {
    provider: "Stripe",
    events: "payment_intent.succeeded, charge.failed, charge.refunded",
  },
  {
    provider: "Twilio and MSG91",
    events: "SMS delivery and failure callbacks",
  },
  { provider: "SendGrid and Mailgun", events: "delivered, bounced, complaint" },
  {
    provider: "WhatsApp Business",
    events: "message status callbacks and inbound message events",
  },
];

const ERRORS = [
  {
    code: "400",
    meaning:
      "The request body or query failed validation. The response names the field.",
  },
  { code: "401", meaning: "Missing, expired or revoked credentials." },
  {
    code: "403",
    meaning: "Authenticated, but the key's scope does not cover this action.",
  },
  {
    code: "404",
    meaning: "The record does not exist, or does not belong to your school.",
  },
  {
    code: "409",
    meaning:
      "The action conflicts with the current state, such as a duplicate receipt.",
  },
  {
    code: "429",
    meaning: "Rate limit hit. Back off and retry using the returned headers.",
  },
  {
    code: "500",
    meaning:
      "Something failed on our side. It is logged with a reference you can quote to support.",
  },
];

const API_FAQS = [
  {
    q: "How do we get an API key?",
    a: "Ask your onboarding contact or write to support with the use case and what the integration needs to read or write. Keys are issued per integration with only the scopes that use case requires, so a reporting job never gets write access.",
  },
  {
    q: "Can one key reach another school's data?",
    a: "No. A key is issued against your school and every query is resolved inside that boundary. Multi-campus groups get keys scoped to the campuses they are meant to cover.",
  },
  {
    q: "Is there a public sandbox?",
    a: "There is no open sandbox you can self-register for. During onboarding you test against your own instance with non-production data before go-live, which is closer to your real configuration than a shared demo environment would be.",
  },
  {
    q: "Can our systems subscribe to KIDUART events?",
    a: "Not yet. We handle incoming webhooks from payment and messaging providers today; outbound webhooks your systems can subscribe to are on the roadmap. Until then, poll the relevant endpoint on a schedule.",
  },
  {
    q: "What happens if a key leaks?",
    a: "Revoke it and issue a new one. Because keys are managed objects with their own scopes and can be limited by IP, a leaked key is a contained incident rather than a shared staff password loose in the wild.",
  },
];

export default function ApiDocs() {
  return (
    <>
      <PageSeoHead
        {...pageSeo.apiDocs}
        keywords="school ERP API, school management REST API, student data API, attendance API integration, school API key scopes"
      />
      <SchemaMarkup
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Integrations", path: "/integrations" },
          { name: "API documentation", path: "/integrations/api-docs" },
        ])}
      />
      <SchemaMarkup data={buildFaqPageSchema({ api: API_FAQS })} />

      <PageTransition className="pt-20 pb-0">
        <section
          className="relative overflow-hidden bg-brand-navy"
          style={{ color: "#fcf6d3" }}
        >
          <BackgroundBlobs
            blobs={[
              {
                color: "#0c716b",
                size: 400,
                position: "top-left",
                opacity: 0.18,
              },
              {
                color: "#fcbf49",
                size: 360,
                position: "bottom-right",
                opacity: 0.14,
              },
            ]}
          />
          <div className="page-shell relative z-10 py-16 md:py-20">
            <div className="[&_a]:text-brand-beige [&_a:hover]:text-brand-yellow [&_span]:text-brand-beige">
              <Breadcrumbs
                trail={[
                  { name: "Home", path: "/" },
                  { name: "Integrations", path: "/integrations" },
                  { name: "API documentation", path: "/integrations/api-docs" },
                ]}
              />
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
              <SectionReveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/[0.14] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brand-yellow">
                  <Terminal className="h-3.5 w-3.5" aria-hidden="true" />{" "}
                  Developer reference
                </span>
                <h1 className="mt-6 text-[clamp(2rem,1.5rem+1.8vw,3.4rem)] font-bold leading-[1.05] text-brand-beige">
                  The KIDUART REST API, without the guesswork
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8" style={MUTED}>
                  Versioned endpoints under a stable base path, scoped API keys
                  instead of a shared staff login, signature-verified provider
                  webhooks and a predictable error contract. This page is the
                  overview your IT team needs before asking for access; the full
                  endpoint reference is issued with your key.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 text-sm font-bold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-beige"
                  >
                    Request API access{" "}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/integrations"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-brand-beige transition-colors hover:border-brand-yellow hover:text-brand-yellow"
                  >
                    Browse integrations
                  </Link>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.15}>
                <div className="console-panel overflow-x-auto rounded-[1.5rem] border border-white/12 bg-[#0d1117] p-6 font-mono text-sm shadow-2xl">
                  <div className="mb-4 flex gap-2" aria-hidden="true">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <pre className="whitespace-pre text-[0.8rem] leading-6 text-gray-300">
                    {`curl -X GET \\
  'https://api.kiduart.com/api/v1/students?classId=8A' \\
  -H 'x-api-key: kd_live_•••••••••' \\
  -H 'Content-Type: application/json'

{
  "success": true,
  "data": [ { "id": "stu_...", "class": "8", "section": "A" } ],
  "meta": { "page": 1, "limit": 50, "total": 42 }
}`}
                  </pre>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="section-space-tight border-b border-brand-navy/5 bg-white">
          <div className="page-shell">
            <Stagger
              className="grid gap-6 md:grid-cols-3"
              itemClassName="motion-spine-node relative"
            >
              {[
                {
                  icon: KeyRound,
                  title: "Scoped API keys",
                  body: "Keys are issued per integration with named scopes, can be limited by IP, and can be rotated or revoked without touching a single staff account.",
                },
                {
                  icon: ShieldCheck,
                  title: "Tenant boundary first",
                  body: "Every request is resolved inside your school before any query runs, so a key cannot reach another school's records even by accident.",
                },
                {
                  icon: Radio,
                  title: "Rate limited and logged",
                  body: "Calls are rate limited under fair use and recorded, so unusual traffic is visible and a stuck job is diagnosable rather than mysterious.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-brand-navy/[0.1] bg-brand-beige/25 p-6 pl-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-teal">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-lg font-bold text-brand-navy">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-brand-navy/[0.78]">
                    {item.body}
                  </p>
                </div>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="section-space bg-brand-beige/25">
          <div className="page-shell">
            <SectionReveal className="max-w-3xl">
              <p className="section-kicker">Authentication</p>
              <h2 className="mt-4 text-3xl font-bold text-brand-navy md:text-4xl">
                Two ways in, and they are not interchangeable
              </h2>
              <p className="mt-4 text-base leading-8 text-brand-navy/[0.78]">
                Machine-to-machine integrations use an API key issued to your
                school. Anything acting on behalf of a signed-in person uses
                that person&apos;s session token, so their role decides what
                they can see. Do not build a server integration on a staff login
                it breaks the moment that person leaves.
              </p>
            </SectionReveal>

            <InView once className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="motion-from-left rounded-[1.5rem] border border-brand-navy/[0.1] bg-white p-6">
                <h3 className="text-lg font-bold text-brand-navy">
                  API key server to server
                </h3>
                <p className="mt-2 text-sm leading-7 text-brand-navy/[0.78]">
                  Issued per integration with named scopes. Send it as a header
                  on every request, keep it on your server, and rotate it when
                  the person who owns the integration changes.
                </p>
                <pre className="mt-4 overflow-x-auto rounded-xl border border-brand-navy/10 bg-[#0d1117] p-4 font-mono text-xs leading-6 text-gray-300">
                  {`x-api-key: kd_live_•••••••••
Content-Type: application/json`}
                </pre>
              </div>

              <div className="motion-from-right rounded-[1.5rem] border border-brand-navy/[0.1] bg-white p-6">
                <h3 className="text-lg font-bold text-brand-navy">
                  Bearer token on behalf of a user
                </h3>
                <p className="mt-2 text-sm leading-7 text-brand-navy/[0.78]">
                  Used by the web and mobile apps after sign-in. Access tokens
                  are short-lived and refreshed, and every call is still
                  filtered by that user&apos;s role and school.
                </p>
                <pre className="mt-4 overflow-x-auto rounded-xl border border-brand-navy/10 bg-[#0d1117] p-4 font-mono text-xs leading-6 text-gray-300">
                  {`Authorization: Bearer <access_token>
Content-Type: application/json`}
                </pre>
              </div>
            </InView>

            <SectionReveal className="mt-6 flex items-start gap-3 rounded-2xl border border-brand-orange/25 bg-brand-orange/[0.07] p-5">
              <AlertTriangle
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange"
                aria-hidden="true"
              />
              <p className="text-sm leading-7 text-brand-navy/[0.82]">
                All traffic is HTTPS only. Keys are shown once when issued and
                stored hashed on our side, so if it is lost we reissue rather
                than retrieve which is exactly what you want from anything that
                can read student data.
              </p>
            </SectionReveal>
          </div>
        </section>

        <section
          className="section-space relative overflow-hidden bg-brand-navy"
          style={{ color: "#fcf6d3" }}
        >
          <BackgroundBlobs
            blobs={[
              {
                color: "#fcbf49",
                size: 380,
                position: "top-left",
                opacity: 0.14,
              },
              {
                color: "#0c716b",
                size: 380,
                position: "bottom-right",
                opacity: 0.14,
              },
            ]}
          />
          <div className="page-shell relative z-10">
            <SectionReveal className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">
                Endpoint groups
              </p>
              <h2 className="mt-4 text-3xl font-bold text-brand-beige md:text-4xl">
                What your developer can reach, by scope
              </h2>
              <p className="mt-4 text-base leading-8" style={MUTED}>
                Representative endpoints for the integrations schools ask for
                most. Paths, payloads and the full field list arrive with your
                key as a reference document, so your developer builds against
                the current contract rather than a marketing page that drifted.
              </p>
            </SectionReveal>

            <SectionReveal className="mt-10">
              <ApiExplorer groups={API_GROUPS} />
            </SectionReveal>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <SectionReveal className="rounded-[1.5rem] border border-white/12 bg-white/[0.05] p-6">
                <h3 className="text-lg font-bold text-brand-beige">
                  Pagination and filtering
                </h3>
                <p className="mt-2 text-sm leading-7" style={MUTED}>
                  List endpoints are paged. Pass{" "}
                  <code className="font-mono text-brand-yellow">page</code> and{" "}
                  <code className="font-mono text-brand-yellow">limit</code>,
                  read the totals from{" "}
                  <code className="font-mono text-brand-yellow">meta</code>, and
                  filter with the query parameters documented for that resource.
                  Large exports are queued rather than streamed, so a full-year
                  report never times out mid-request.
                </p>
              </SectionReveal>

              <SectionReveal
                delay={0.1}
                className="rounded-[1.5rem] border border-white/12 bg-white/[0.05] p-6"
              >
                <h3 className="text-lg font-bold text-brand-beige">
                  Rate limits
                </h3>
                <p className="mt-2 text-sm leading-7" style={MUTED}>
                  Requests are rate limited per key under a fair-use policy,
                  with stricter limits on authentication routes. A limited
                  response returns 429 with headers telling you when to retry.
                  If a genuine workload needs more headroom, tell us the pattern
                  and we will size it with you rather than making you discover
                  the ceiling in production.
                </p>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="section-space border-y border-brand-navy/5 bg-white">
          <div className="page-shell">
            <div className="grid gap-12 lg:grid-cols-2">
              <SectionReveal>
                <p className="section-kicker">Webhooks</p>
                <h2 className="mt-4 text-3xl font-bold text-brand-navy">
                  Provider callbacks we verify and act on
                </h2>
                <p className="mt-4 text-base leading-8 text-brand-navy/[0.78]">
                  Incoming webhooks are how a payment gets confirmed and a
                  message gets marked delivered. Each one is signature-verified
                  against the provider&apos;s secret before anything is written,
                  and a repeated callback updates the existing record instead of
                  duplicating it.
                </p>
                <ul className="mt-6 space-y-3">
                  {WEBHOOKS_IN.map((hook) => (
                    <li
                      key={hook.provider}
                      className="rounded-2xl border border-brand-navy/[0.1] bg-brand-beige/25 p-4"
                    >
                      <p className="text-sm font-bold text-brand-navy">
                        {hook.provider}
                      </p>
                      <p className="mt-1 font-mono text-xs leading-6 text-brand-navy/[0.76]">
                        {hook.events}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-2xl border border-brand-orange/25 bg-brand-orange/[0.07] p-5 text-sm leading-7 text-brand-navy/[0.82]">
                  <strong className="font-bold text-brand-navy">
                    Not available yet:
                  </strong>{" "}
                  subscribing your own endpoint to KIDUART events. Outbound
                  webhooks are on the roadmap. Until they ship, poll the
                  relevant endpoint on a schedule that suits your workload.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.12}>
                <p className="section-kicker">Errors</p>
                <h2 className="mt-4 text-3xl font-bold text-brand-navy">
                  One error shape, every endpoint
                </h2>
                <p className="mt-4 text-base leading-8 text-brand-navy/[0.78]">
                  Failures come back in the same envelope as successes, so your
                  client handles one shape rather than guessing per route.
                </p>
                <pre className="mt-6 overflow-x-auto rounded-2xl border border-brand-navy/10 bg-[#0d1117] p-5 font-mono text-xs leading-6 text-gray-300">
                  {`{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "admissionNumber is already in use",
    "field": "admissionNumber"
  }
}`}
                </pre>
                <dl className="mt-6 divide-y divide-brand-navy/[0.08] rounded-2xl border border-brand-navy/[0.1]">
                  {ERRORS.map((error) => (
                    <div key={error.code} className="flex gap-4 p-4">
                      <dt className="w-12 shrink-0 font-mono text-sm font-bold text-brand-teal">
                        {error.code}
                      </dt>
                      <dd className="text-sm leading-6 text-brand-navy/[0.8]">
                        {error.meaning}
                      </dd>
                    </div>
                  ))}
                </dl>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="section-space bg-brand-beige/25">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionReveal className="text-center">
              <p className="section-kicker">Getting access</p>
              <h2 className="mt-4 text-3xl font-bold text-brand-navy">
                Developer questions, answered
              </h2>
            </SectionReveal>

            <div className="mt-10 space-y-4">
              {API_FAQS.map((faq) => (
                <SectionReveal key={faq.q}>
                  <details className="group rounded-2xl border border-brand-navy/[0.1] bg-white p-6 transition-colors open:border-brand-teal/40">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-bold text-brand-navy marker:content-none">
                      {faq.q}
                      <ChevronDown
                        className="h-5 w-5 shrink-0 text-brand-navy/50 transition-transform group-open:rotate-180"
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

            <SectionReveal className="mt-8 text-center text-sm text-brand-navy/[0.76]">
              Building something specific?{" "}
              <a
                href="mailto:support@kiduart.com"
                className="font-bold text-brand-teal underline-offset-4 hover:underline"
              >
                support@kiduart.com
              </a>{" "}
              tell us the use case and the scopes you think you need.
            </SectionReveal>
          </div>
        </section>

        <CtaSection
          title="Bring your developer to the demo"
          subtitle="Walk through the scopes your integration needs, what your key will be allowed to touch, and how it gets rotated when your team changes."
        />
      </PageTransition>
    </>
  );
}
