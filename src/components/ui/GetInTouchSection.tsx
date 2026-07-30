import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { FormEvent, useState } from "react";
import { CONTACT_EMAIL, CONTACT_LOCATION, CONTACT_PHONE_DISPLAY, COUNTRY_CODES, DEFAULT_COUNTRY_CODE } from "@/lib/contact";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useToast } from "@/hooks/use-toast";

type GetInTouchFormState = {
  name: string;
  email: string;
  code: string;
  phone: string;
  message: string;
};

export function GetInTouchSection() {
  const { trackEvent } = useAnalytics();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<GetInTouchFormState>({
    name: "",
    email: "",
    code: DEFAULT_COUNTRY_CODE,
    phone: "",
    message: "",
  });

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
          help: "Get in Touch form",
        }),
      });

      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error || "Unable to send your message right now.");
      }

      setFormData({
        name: "",
        email: "",
        code: DEFAULT_COUNTRY_CODE,
        phone: "",
        message: "",
      });

      toast({
        title: "Message sent",
        description: "Thanks for reaching out. Our team will get back to you shortly.",
      });
    } catch (error) {
      toast({
        title: "Unable to send message",
        description: error instanceof Error ? error.message : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-brand-beige px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-[2rem] border border-brand-navy/10 bg-brand-navy px-6 py-8 text-brand-beige shadow-[0_20px_60px_rgba(0,48,73,0.08)] sm:px-10 sm:py-10 lg:px-14 lg:py-14">
          <div className="flex items-center justify-between border-b border-white/15 pb-5 text-[10px] uppercase tracking-[0.58em] text-brand-beige/90">
            <span>Get Connected</span>
            <span>KIDUART ERP</span>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.1fr] lg:items-end">
            <div className="rounded-[1.75rem]">
              <p className="max-w-xs text-xs font-medium uppercase tracking-[0.34em] text-[#f0e6d4]">
                School operations, admissions, and AI-led growth
              </p>
              <h2 className="mt-6 max-w-xl font-serif text-4xl font-normal uppercase leading-[0.92] tracking-[-0.02em] text-[#f5efe6] sm:text-6xl lg:text-6xl">
                Let&apos;s Get In Touch
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/[0.72]">
                Tell us what your institution needs and our team will help you shape the right ERP
                setup for admissions, academics, finance, communication, and AI-enabled workflows.
              </p>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/[0.78]">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#d6c1a8]" />
                  <span>{CONTACT_PHONE_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#d6c1a8]" />
                  <span>{CONTACT_EMAIL}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#d6c1a8]" />
                  <span>{CONTACT_LOCATION}</span>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-brand-navy/10 bg-brand-navy/70 p-6 text-white shadow-[0_18px_50px_rgba(0,48,73,0.22)] backdrop-blur-xl sm:p-7">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-[0.8fr_1.1fr] ">
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-white/75">Full Name</span>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="field-surface-dark mt-3 w-full border-0 border-b border-white/[0.14] px-0 py-3 text-sm text-white placeholder:text-white/55 focus:border-[#d6c1a8] focus:outline-none focus:ring-0"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-white/75">Phone</span>
                    <div className="mt-3 grid grid-cols-[9rem_minmax(0,1fr)] gap-3">
                      <select
                        value={formData.code}
                        onChange={(e) => handleChange("code", e.target.value)}
                        className="native-dark-select field-surface-dark w-full rounded-md border-0 border-b border-white/20 px-0 py-3 pr-8 text-sm font-semibold text-[#f5efe6] focus:border-[#d6c1a8] focus:outline-none focus:ring-0"
                      >
                        {COUNTRY_CODES.map((code) => (
                          <option key={code.value} value={code.value}>
                            {code.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        required
                        placeholder="10 digit number"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="field-surface-dark w-full border-0 border-b border-white/[0.14] px-0 py-3 text-sm text-white placeholder:text-white/55 focus:border-[#d6c1a8] focus:outline-none focus:ring-0"
                      />
                    </div>
                  </label>
                </div>

                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-white/75">Email</span>
                  <input
                    type="email"
                    placeholder="you@school.edu"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="field-surface-dark mt-3 w-full border-0 border-b border-white/[0.14] px-0 py-3 text-sm text-white placeholder:text-white/55 focus:border-[#d6c1a8] focus:outline-none focus:ring-0"
                  />
                </label>

                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-white/75">Message</span>
                  <textarea
                    rows={4}
                    placeholder="Share your current school workflow challenges or goals."
                    required
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="field-surface-dark mt-3 w-full resize-none border-0 border-b border-white/[0.14] px-0 py-3 text-sm text-white placeholder:text-white/55 focus:border-[#d6c1a8] focus:outline-none focus:ring-0"
                  />
                </label>

                <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-white/75">
                    Want a faster walkthrough?
                    <Link
                      href="/demo"
                      className="ml-2 text-[#f5efe6] underline underline-offset-4 transition-colors hover:text-[#d6c1a8]"
                    >
                      Request a demo
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.14] bg-white text-brand-navy transition-all duration-300 hover:translate-x-1 hover:bg-[#f2e7da] disabled:cursor-not-allowed disabled:opacity-60"
                    aria-label="Submit inquiry"
                  >
                    <ArrowUpRight className="h-6 w-6" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
