import { Link } from "wouter";
import { ArrowRight, ShieldCheck } from "lucide-react";

const CHARTER_CLAUSES: { title: string; body: string }[] = [
  {
    title: "We publish only what exists",
    body: "Every capability described on this site maps to a screen that is already built. Anything still being made is labelled in development, is not switched on, and is not billed.",
  },
  {
    title: "No borrowed credibility",
    body: "No stock photos posing as schools, no quotes nobody said, no ratings we wrote about ourselves. This space stays honest until a real school fills it.",
  },
  {
    title: "Your data leaves with you",
    body: "Student records, fee ledgers, attendance and academic data export in CSV, Excel or PDF whenever you ask. We do not sell school data and we do not train models on student records.",
  },
  {
    title: "Nothing goes live on a guess",
    body: "We run your attendance and one fee cycle in parallel with your current method first. If the two sets of numbers do not agree, the switch waits until they do.",
  },
  {
    title: "The first stories will be attributable",
    body: "When this section fills, each story will carry the school's name and city, the person who said it, and the number they measured — published with their written consent.",
  },
];

const STORY_FIELDS = ["School and city", "Who said it, and their role", "Which modules they run", "The number they measured", "Consent on record"];

export function FoundingCharter() {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <article className="relative overflow-hidden rounded-[1.75rem] border border-brand-navy/10 bg-white p-6 shadow-lg shadow-brand-navy/[0.05] md:p-9 lg:col-span-7">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-7 hidden w-px bg-brand-orange/30 md:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-8 hidden w-px bg-brand-orange/15 md:block"
        />

        <div className="md:pl-8">
          <h3 className="text-[clamp(1.3rem,1.1rem+0.6vw,1.75rem)] font-bold text-brand-navy">
            The founding-school charter
          </h3>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
            Five commitments we hold ourselves to
          </p>

          <ol className="mt-7 space-y-6">
            {CHARTER_CLAUSES.map((clause, index) => (
              <li
                key={clause.title}
                className="border-t border-brand-navy/[0.08] pt-5 first:border-t-0 first:pt-0"
              >
                <div className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 font-serif text-lg font-bold text-brand-orange-ink"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-brand-navy">{clause.title}</h4>
                    <p className="mt-1.5 text-sm leading-7 text-brand-navy/80">{clause.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-brand-navy/[0.08] pt-6">
            <span
              aria-hidden="true"
              className="flex h-20 w-20 -rotate-6 flex-col items-center justify-center rounded-full border-2 border-dashed border-brand-teal/40 text-center text-[0.6rem] font-bold uppercase leading-3 tracking-[0.1em] text-brand-teal"
            >
              KIDUART
              <span className="mt-1 block">Founding</span>
              <span className="block">schools</span>
            </span>
            <p className="max-w-sm text-sm leading-6 text-brand-navy/80">
              Clause three is not a slogan — it is already written into our{" "}
              <Link
                href="/privacy-policy"
                className="font-bold text-brand-teal underline underline-offset-4"
              >
                privacy policy
              </Link>
              , and the controls behind it are listed on the{" "}
              <Link
                href="/security"
                className="font-bold text-brand-teal underline underline-offset-4"
              >
                security page
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      <div className="lg:col-span-5">
        <div className="rounded-[1.75rem] border border-brand-navy/10 bg-brand-beige/30 p-6 md:p-8">
          <h3 className="text-lg font-bold text-brand-navy">What will sit here instead</h3>
          <p className="mt-2 text-sm leading-7 text-brand-navy/80">
            This is the format every story on this page will follow. Nothing gets published until a
            school signs off on the numbers in it.
          </p>

          <dl className="mt-6 space-y-4">
            {STORY_FIELDS.map((field) => (
              <div key={field}>
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy/70">
                  {field}
                </dt>
                <dd
                  aria-hidden="true"
                  className="mt-2 h-px w-full border-b border-dashed border-brand-navy/25"
                />
              </div>
            ))}
          </dl>

          <p className="mt-6 flex gap-2.5 rounded-2xl border border-brand-teal/20 bg-white px-4 py-3.5 text-sm leading-6 text-brand-navy/80">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" aria-hidden="true" />
            <span>
              Under India&apos;s Consumer Protection Act, a review that is not based on a genuine
              experience is a misleading advertisement. We would rather show you an empty template
              than a made-up quote.
            </span>
          </p>
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-brand-navy/10 bg-white p-6 md:p-8">
          <h3 className="text-lg font-bold text-brand-navy">Be one of the first schools</h3>
          <p className="mt-2 text-sm leading-7 text-brand-navy/80">
            Founding schools get a named contact through setup and a direct line into what we build
            next. In return, we ask for honest feedback — and your story only if you want to give it.
          </p>
          <Link
            href="/demo"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-6 py-3.5 text-base font-bold text-brand-beige transition-colors hover:bg-brand-teal"
          >
            Talk to us about a rollout <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
