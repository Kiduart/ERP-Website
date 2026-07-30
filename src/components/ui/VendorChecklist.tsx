import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Check, ShieldCheck, TriangleAlert } from "lucide-react";
import { VENDOR_QUESTIONS } from "@/data/vendorQuestions";

const MUTED = { color: "rgb(var(--hero-muted-rgb) / 0.78)" };

export function VendorChecklist() {
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (id: string) =>
    setPicked((current) =>
      current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id],
    );

  return (
    <div>
      <ol className="space-y-4">
        {VENDOR_QUESTIONS.map((item, index) => {
          const isPicked = picked.includes(item.id);

          return (
            <li
              key={item.id}
              className={`overflow-hidden rounded-[1.5rem] border transition-colors duration-300 ${
                isPicked
                  ? "border-brand-yellow/60 bg-brand-yellow/[0.08]"
                  : "border-white/12 bg-white/[0.05]"
              }`}
            >
              <label className="flex cursor-pointer items-start gap-4 p-5 md:p-6">
                <input
                  type="checkbox"
                  checked={isPicked}
                  onChange={() => toggle(item.id)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-brand-yellow peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-brand-navy ${
                    isPicked
                      ? "border-brand-yellow bg-brand-yellow text-brand-navy"
                      : "border-white/40 text-transparent"
                  }`}
                >
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="flex-1">
                  <span
                    className="mr-3 font-mono text-sm font-bold text-brand-yellow"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[clamp(1.05rem,0.95rem+0.35vw,1.3rem)] font-bold text-brand-beige">
                    {item.question}
                  </span>
                </span>
              </label>

              <div className="grid gap-px border-t border-white/10 bg-white/10 md:grid-cols-2">
                <div className="bg-brand-navy/80 p-5 md:p-6">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
                    <TriangleAlert className="h-4 w-4" aria-hidden="true" />
                    What usually happens
                  </h4>
                  <p className="mt-3 text-sm leading-7" style={MUTED}>
                    {item.risk}
                  </p>
                </div>

                <div className="bg-brand-navy/80 p-5 md:p-6">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                    How KIDUART answers it
                  </h4>
                  <p className="mt-3 text-sm leading-7" style={MUTED}>
                    {item.answer}
                  </p>
                  <Link
                    href={item.verify.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-beige underline underline-offset-4 transition-colors hover:text-brand-yellow"
                  >
                    {item.verify.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 flex flex-col items-center gap-4 rounded-[1.5rem] border border-white/12 bg-white/[0.05] px-6 py-7 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-lg font-bold text-brand-beige" aria-live="polite">
            {picked.length === 0
              ? "Tick the questions that matter to your school"
              : `${picked.length} of ${VENDOR_QUESTIONS.length} questions picked`}
          </p>
          <p className="mt-1 text-sm leading-6" style={MUTED}>
            Ask them to us on the call — and ask the same list to every other vendor you shortlist.
          </p>
        </div>
        <Link
          href="/demo"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 text-base font-bold text-brand-navy transition-colors hover:bg-brand-beige"
        >
          Put us through it <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
