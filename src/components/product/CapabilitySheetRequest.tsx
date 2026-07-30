import { useState, type FormEvent } from "react";
import { FileSpreadsheet, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/**
 * Lead form for the full capability sheet. The unpublished capability names live only in
 * the sheet we email out, never in the page markup.
 */
export function CapabilitySheetRequest({
  context,
  hiddenCount,
  totalCount,
}: {
  /** Which area or module the visitor was reading when they asked */
  context: string;
  hiddenCount: number;
  totalCount: number;
}) {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !school.trim()) {
      toast({
        title: "A few details first",
        description: "Please add your school name and work email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/capability-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, school, context }),
      });

      const contentType = response.headers.get("content-type") || "";
      const rawBody = await response.text();
      const result = contentType.includes("application/json") && rawBody ? JSON.parse(rawBody) : {};

      if (!response.ok) {
        throw new Error(
          typeof result === "object" && result && "error" in result
            ? String(result.error)
            : "Unable to send the sheet right now.",
        );
      }

      setIsDone(true);
      setEmail("");
      setSchool("");
      toast({
        title: "Request received",
        description: "We will email the capability sheet within one working day.",
      });
    } catch (error) {
      toast({
        title: "Request failed",
        description: error instanceof Error ? error.message : "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-brand-navy p-6 text-white md:p-9">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
            <FileSpreadsheet className="h-3.5 w-3.5" aria-hidden="true" />
            Full capability sheet
          </span>
          <h2 className="mt-5 text-2xl font-bold leading-tight text-white md:text-3xl">
            Want the remaining {hiddenCount} capabilities in writing?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/75">
            We publish the capabilities schools ask about most. The complete sheet — all{" "}
            {totalCount} of them, with how each one behaves — goes out by email so we can answer
            questions about your own setup alongside it.
          </p>
        </div>

        {isDone ? (
          <div className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6">
            <p className="text-lg font-bold text-white">Thanks — it is on the way.</p>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Our team will email the capability sheet within one working day, and can walk through
              it live whenever suits you.
            </p>
          </div>
        ) : (
          <form
            className="rounded-[1.5rem] border border-white/15 bg-white/5 p-5 md:p-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="sheet-school"
                  className="block text-xs font-bold uppercase tracking-[0.16em] text-white/80"
                >
                  School name
                </label>
                <input
                  id="sheet-school"
                  name="school"
                  type="text"
                  required
                  value={school}
                  onChange={(event) => setSchool(event.target.value)}
                  placeholder="Sunrise Public School"
                  className="field-surface-dark mt-2 h-12 w-full rounded-xl px-4 text-base text-white placeholder:text-white/60 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="sheet-email"
                  className="block text-xs font-bold uppercase tracking-[0.16em] text-white/80"
                >
                  Work email
                </label>
                <input
                  id="sheet-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="principal@school.edu.in"
                  className="field-surface-dark mt-2 h-12 w-full rounded-xl px-4 text-base text-white placeholder:text-white/60 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-base font-bold text-brand-navy transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
            >
              {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
              {isSubmitting ? "Sending" : "Send me the sheet"}
            </button>
            <p className="mt-3 text-xs leading-5 text-white/60">
              One email with the sheet. No drip campaign.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
