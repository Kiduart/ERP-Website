import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  MousePointerClick,
  Phone,
  X,
} from "lucide-react";
import { Link } from "wouter";
import { FormEvent, useMemo, useState } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  DEFAULT_COUNTRY_CODE,
} from "@/lib/contact";
import { CONTACT_INTENTS } from "@/data/contactIntents";
import { ProductIcon } from "@/components/product/ProductIcon";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useToast } from "@/hooks/use-toast";

type GetInTouchFormState = {
  name: string;
  email: string;
  code: string;
  phone: string;
  message: string;
};

/**
 * Conversation desk  pick problems as tickets, watch the brief assemble,
 * then leave details. Deliberately not a three-column console (that reads like
 * the footer); this is a light, interactive desk.
 */
export function GetInTouchSection() {
  const { trackEvent } = useAnalytics();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);
  const [formData, setFormData] = useState<GetInTouchFormState>({
    name: "",
    email: "",
    code: DEFAULT_COUNTRY_CODE,
    phone: "",
    message: "",
  });

  const selected = useMemo(
    () => CONTACT_INTENTS.filter((intent) => picked.includes(intent.id)),
    [picked],
  );

  const walkthrough = useMemo(() => {
    const seen = new Map<string, string>();
    selected.forEach((intent) =>
      intent.areas.forEach((area) => seen.set(area.href, area.label)),
    );
    return [...seen.entries()].map(([href, label]) => ({ href, label }));
  }, [selected]);

  const togglePicked = (id: string) => {
    setPicked((current) => {
      const next = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];
      const intent = CONTACT_INTENTS.find((entry) => entry.id === id);
      if (intent && !current.includes(id)) {
        setFormData((form) =>
          form.message.trim() ? form : { ...form, message: intent.prompt },
        );
      }
      return next;
    });
  };

  const handleChange = (field: keyof GetInTouchFormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trackEvent("Form", "form_submit", "get_in_touch_form");

    if (!/^\d{10}$/.test(formData.phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10 digit phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          help: selected.length
            ? `Get in Touch  ${selected.map((intent) => intent.label).join(", ")}`
            : "Get in Touch form",
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(
          result?.error || "Unable to send your message right now.",
        );
      }

      setFormData({
        name: "",
        email: "",
        code: DEFAULT_COUNTRY_CODE,
        phone: "",
        message: "",
      });
      setPicked([]);

      toast({
        title: "Message sent",
        description:
          "Thanks for reaching out. Our team will get back to you shortly.",
      });
    } catch (error) {
      toast({
        title: "Unable to send message",
        description:
          error instanceof Error
            ? error.message
            : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-desk border-t border-brand-navy/[0.07] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-teal">
            Start a conversation
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,1.3rem+1.5vw,2.85rem)] font-bold leading-[1.08] text-brand-navy">
            What is the school stuck on?
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-navy/[0.76]">
            Three short steps: pick what hurts, watch your brief fill itself in,
            then leave a number. We reply on those exact screens not a brochure.
          </p>
        </div>

        {/* Ticket picker  mosaic, not a tall checklist */}
        <div className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-teal">
                Step 1 · Pick what hurts
              </p>
              <p className="mt-1 text-sm text-brand-navy/[0.72]">
                Tap any chip below. Each one lands as a ticket in your brief
                optional.
              </p>
            </div>
            {picked.length > 0 && (
              <button
                type="button"
                onClick={() => setPicked([])}
                className="text-xs font-bold text-brand-navy/[0.65] underline-offset-4 hover:text-brand-teal hover:underline"
              >
                Clear all
              </button>
            )}
          </div>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {CONTACT_INTENTS.map((intent) => {
              const isOn = picked.includes(intent.id);
              return (
                <li key={intent.id}>
                  <button
                    type="button"
                    aria-pressed={isOn}
                    onClick={() => togglePicked(intent.id)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isOn
                        ? "border-brand-navy bg-brand-navy text-brand-beige shadow-md shadow-brand-navy/20"
                        : "border-brand-navy/[0.14] bg-white text-brand-navy hover:border-brand-teal hover:text-brand-teal"
                    }`}
                  >
                    {isOn ? (
                      <Check
                        className="h-3.5 w-3.5 text-brand-yellow"
                        aria-hidden="true"
                      />
                    ) : (
                      <ProductIcon name={intent.icon} className="h-3.5 w-3.5" />
                    )}
                    {intent.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* Live thread of tickets */}
          <div
            className="contact-thread min-h-[22rem] rounded-[1.75rem] border-2 border-brand-navy/[0.12] bg-white p-5 shadow-lg shadow-brand-navy/[0.06] sm:p-6"
            aria-live="polite"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-teal">
                  Step 2 · Your brief builds here
                </p>
                <h3 className="mt-1.5 text-xl font-bold text-brand-navy">
                  {selected.length
                    ? `${selected.length} topic${selected.length === 1 ? "" : "s"} ready to send`
                    : "Waiting for your first pick"}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/[0.1] bg-brand-beige/50 px-3 py-1.5 text-xs font-semibold text-brand-navy/[0.72]">
                <Clock3
                  className="h-3.5 w-3.5 text-brand-teal"
                  aria-hidden="true"
                />
                Reply in one working day
              </span>
            </div>

            {selected.length === 0 ? (
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-dashed border-brand-teal/40 bg-brand-teal/[0.05] p-5">
                  <p className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy">
                    <MousePointerClick
                      className="h-4 w-4 text-brand-teal"
                      aria-hidden="true"
                    />
                    How this works
                  </p>
                  <ol className="mt-4 space-y-3">
                    {[
                      "Tap a problem chip above  it becomes a ticket here.",
                      "Tap again (or the ×) to remove anything you do not need.",
                      "Fill the form on the right. We reply on those exact screens.",
                    ].map((step, index) => (
                      <li
                        key={step}
                        className="flex items-start gap-3 text-sm leading-6 text-brand-navy/[0.78]"
                      >
                        <span
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-navy text-[0.7rem] font-bold text-brand-beige"
                          aria-hidden="true"
                        >
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <p className="text-sm leading-6 text-brand-navy/[0.7]">
                  Prefer to skip? Fill the form on the right in your own words
                  tickets are optional.
                </p>
              </div>
            ) : (
              <>
                <p className="mt-4 text-sm leading-6 text-brand-navy/[0.74]">
                  These tickets go with your message. Remove any with ×, then
                  send from the form on the right.
                </p>
                <ol className="mt-4 space-y-3">
                  {selected.map((intent, index) => (
                    <li
                      key={intent.id}
                      className="contact-ticket relative rounded-2xl border border-brand-navy/[0.12] bg-brand-beige/50 p-4 pl-5"
                      style={{ animationDelay: `${index * 40}ms` }}
                    >
                      <span
                        className="absolute left-0 top-3 bottom-3 w-1 rounded-full bg-brand-teal"
                        aria-hidden="true"
                      />
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-navy/[0.55]">
                            Ticket {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-1 text-base font-bold text-brand-navy">
                            {intent.label}
                          </p>
                          <p className="mt-1.5 text-sm leading-6 text-brand-navy/[0.74]">
                            {intent.shows}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => togglePicked(intent.id)}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-navy/[0.12] bg-white text-brand-navy/[0.55] transition-colors hover:border-brand-navy hover:text-brand-navy"
                          aria-label={`Remove ${intent.label}`}
                        >
                          <X className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ol>
              </>
            )}

            {walkthrough.length > 0 && (
              <div className="mt-5 border-t border-brand-navy/[0.08] pt-4">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-navy/[0.55]">
                  Screens we would open with you
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-2">
                  {walkthrough.map((area) => (
                    <li key={area.href}>
                      <Link
                        href={area.href}
                        className="inline-flex items-center gap-1 rounded-full border border-brand-navy/[0.12] bg-white px-3 py-1.5 text-xs font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                      >
                        {area.label}
                        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selected.length > 0 && (
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-navy px-4 py-2 text-xs font-bold text-brand-beige">
                Next → fill Step 3 on the right
                <ArrowDownRight
                  className="h-3.5 w-3.5 text-brand-yellow lg:hidden"
                  aria-hidden="true"
                />
                <ArrowRight
                  className="hidden h-3.5 w-3.5 text-brand-yellow lg:inline"
                  aria-hidden="true"
                />
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-brand-navy/[0.08] pt-4 text-xs font-semibold text-brand-navy/[0.72]">
              <a
                href={`tel:+${CONTACT_PHONE_E164}`}
                className="inline-flex items-center gap-1.5 hover:text-brand-teal"
              >
                <Phone
                  className="h-3.5 w-3.5 text-brand-teal"
                  aria-hidden="true"
                />
                {CONTACT_PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-1.5 hover:text-brand-teal"
              >
                <Mail
                  className="h-3.5 w-3.5 text-brand-teal"
                  aria-hidden="true"
                />
                {CONTACT_EMAIL}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin
                  className="h-3.5 w-3.5 text-brand-teal"
                  aria-hidden="true"
                />
                {CONTACT_LOCATION}
              </span>
            </div>
          </div>

          {/* Leave-your-details slip */}
          <div className="rounded-[1.75rem] border border-brand-navy/[0.1] bg-brand-navy p-6 text-brand-beige shadow-xl shadow-brand-navy/15 sm:p-7">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-yellow">
              Step 3 · Leave your details
            </p>
            <p className="mt-2 text-sm leading-6 text-brand-beige/[0.75]">
              {selected.length
                ? `${selected.length} ticket${selected.length === 1 ? "" : "s"} attached. We will open those first.`
                : "No tickets yet  that is fine. Tell us what you need in the message."}
            </p>

            <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-beige/[0.7]">
                  Full name
                </span>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="field-surface-dark mt-2 w-full rounded-xl border border-white/15 px-4 py-3 text-sm text-brand-beige placeholder:text-brand-beige/50 focus:border-brand-yellow focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-beige/[0.7]">
                  Phone
                </span>
                <div className="mt-2 flex items-center rounded-xl border border-white/15 focus-within:border-brand-yellow">
                  <span className="border-r border-white/15 px-3 py-3 text-sm font-bold text-brand-yellow">
                    {DEFAULT_COUNTRY_CODE}
                  </span>
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                    placeholder="10 digit number"
                    value={formData.phone}
                    onChange={(e) =>
                      handleChange(
                        "phone",
                        e.target.value.replace(/\D/g, "").slice(0, 10),
                      )
                    }
                    className="w-full bg-transparent px-3 py-3 text-sm text-brand-beige placeholder:text-brand-beige/50 focus:outline-none"
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-beige/[0.7]">
                  Work email
                </span>
                <input
                  type="email"
                  placeholder="you@school.edu"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="field-surface-dark mt-2 w-full rounded-xl border border-white/15 px-4 py-3 text-sm text-brand-beige placeholder:text-brand-beige/50 focus:border-brand-yellow focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-beige/[0.7]">
                  Anything specific?
                </span>
                <textarea
                  rows={4}
                  placeholder="Student count, current tools, and the deadline you are working against."
                  required
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="field-surface-dark mt-2 w-full resize-none rounded-xl border border-white/15 px-4 py-3 text-sm text-brand-beige placeholder:text-brand-beige/50 focus:border-brand-yellow focus:outline-none"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-3.5 text-sm font-bold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? "Sending..."
                  : selected.length
                    ? `Send brief · ${selected.length} ticket${selected.length === 1 ? "" : "s"}`
                    : "Send message"}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <p className="text-center text-xs text-brand-beige/[0.65]">
                Prefer a live walkthrough?{" "}
                <Link
                  href="/demo"
                  className="font-bold text-brand-yellow underline underline-offset-4 hover:text-brand-beige"
                >
                  Book a demo
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
