import { CONTACT_EMAIL, CONTACT_LOCATION, CONTACT_PHONE_DISPLAY } from "@/lib/contact";
import { SectionReveal } from "@/components/ui/PageTransition";
import { CheckCircle2, Mail, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";

type TableRow = {
  cells: string[];
};

export type LegalSection = {
  title: string;
  intro?: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: TableRow[];
  };
  highlight?: string;
};

type LegalPolicyPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  effectiveLabel: string;
  summary: string[];
  sections: LegalSection[];
};

export function LegalPolicyPage({
  eyebrow,
  title,
  subtitle,
  effectiveLabel,
  summary,
  sections,
}: LegalPolicyPageProps) {
  return (
    <>
      <section className="relative pt-24 overflow-hidden bg-brand-beige sm:pt-28">
        <div className="absolute inset-x-0 top-0 h-44 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(250,248,240,0))]" />
        <div className="relative z-10 pt-10 page-shell pb-14 sm:pb-18">
          <div className="max-w-4xl">
            <div className="section-kicker">{eyebrow}</div>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl mt-6 text-lg leading-8 text-brand-navy/72 sm:text-xl">
              {subtitle}
            </p>
            <div className="inline-flex px-5 py-2 mt-8 text-sm font-semibold bg-white border rounded-full shadow-sm border-brand-teal/18 text-brand-teal">
              {effectiveLabel}
            </div>
          </div>

          <div className="mt-10 grid gap-4 rounded-[1.5rem] border border-brand-navy/8 bg-white p-5 shadow-lg shadow-brand-navy/5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
            {summary.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                <p className="text-sm leading-6 text-brand-navy/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[18rem_1fr]">
          <div className="lg:hidden">
            <div className="rounded-[1.25rem] border border-brand-navy/8 bg-brand-beige/35 p-4">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-brand-teal">On this page</div>
              <nav
                className="mt-3 flex max-h-44 flex-col gap-2 overflow-y-auto pr-1 sm:max-h-36"
                aria-label={`${title} sections`}
              >
                {sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#section-${index + 1}`}
                    className="rounded-lg bg-white px-3 py-2 text-sm font-medium leading-5 text-brand-navy/72 transition-colors hover:text-brand-navy"
                  >
                    {index + 1}. {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 flex max-h-[calc(100vh-8rem)] min-h-[20rem] flex-col rounded-[1.25rem] border border-brand-navy/8 bg-brand-beige/35 p-5">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-brand-teal">On this page</div>
              <nav
                className="mt-4 min-h-0 space-y-2 overflow-y-auto pr-1"
                aria-label={`${title} sections`}
              >
                {sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#section-${index + 1}`}
                    className="block px-3 py-2 text-sm font-medium transition-colors rounded-lg text-brand-navy/68 hover:bg-white hover:text-brand-navy"
                  >
                    {index + 1}. {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <SectionReveal key={section.title} delay={Math.min(index * 0.03, 0.18)}>
                <article
                  id={`section-${index + 1}`}
                  className="scroll-mt-28 rounded-[1.5rem] border border-brand-navy/8 bg-white p-6 shadow-lg shadow-brand-navy/5 sm:p-8"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="flex items-center justify-center w-10 h-10 text-sm font-bold shrink-0 rounded-xl bg-brand-teal/10 text-brand-teal">
                      {index + 1}
                    </div>
                    <h2 className="text-2xl font-bold leading-tight text-brand-navy">{section.title}</h2>
                  </div>

                  {section.intro?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-base leading-8 text-brand-navy/72">
                      {paragraph}
                    </p>
                  ))}

                  {section.highlight && (
                    <div className="mt-6 rounded-[1.25rem] border border-brand-teal/16 bg-brand-teal/8 p-5">
                      <div className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-teal">
                        <ShieldCheck className="w-4 h-4" />
                        Important
                      </div>
                      <p className="text-base leading-8 text-brand-navy/74">{section.highlight}</p>
                    </div>
                  )}

                  {section.bullets && (
                    <ul className="grid gap-3 mt-6">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex gap-3 text-base leading-7 text-brand-navy/72">
                          <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-brand-orange" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.table && (
                    <div className="mt-6 overflow-hidden rounded-[1rem] border border-brand-navy/10">
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-left divide-y divide-brand-navy/10">
                          <thead className="bg-brand-beige/60">
                            <tr>
                              {section.table.headers.map((header) => (
                                <th key={header} className="px-4 py-3 text-sm font-bold text-brand-navy">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-brand-navy/8">
                            {section.table.rows.map((row, rowIndex) => (
                              <tr key={`${section.title}-${rowIndex}`}>
                                {row.cells.map((cell, cellIndex) => (
                                  <td key={`${cell}-${cellIndex}`} className="min-w-[12rem] px-4 py-4 text-sm leading-6 text-brand-navy/70">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
