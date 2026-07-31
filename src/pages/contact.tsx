import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { pageSeo } from "@/lib/pageSeo";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { BankingContactHero } from "@/components/ui/CustomHeroes";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import {
  PhoneCall,
  Mail,
  LifeBuoy,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  DEFAULT_COUNTRY_CODE,
} from "@/lib/contact";
import { buildBreadcrumbSchema } from "@/lib/seoSchemas";
import { useToast } from "@/hooks/use-toast";
import { useState, type FormEvent } from "react";
import { Link } from "wouter";

type ContactFormState = {
  name: string;
  email: string;
  code: string;
  phone: string;
  help: string;
  message: string;
};

async function parseApiResponse(response: Response) {
  const contentType = response.headers.get("content-type") || "";
  const rawBody = await response.text();

  if (contentType.includes("application/json")) {
    return rawBody ? JSON.parse(rawBody) : {};
  }

  throw new Error(
    response.ok
      ? "Unexpected response from the server."
      : "The form API is not returning JSON yet. Please retry after the server restart.",
  );
}

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    code: DEFAULT_COUNTRY_CODE,
    phone: "",
    help: "I want to book a demo",
    message: "",
  });

  const handleChange = (field: keyof ContactFormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage("");

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
        body: JSON.stringify(formData),
      });

      const result = await parseApiResponse(response);

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
        help: "I want to book a demo",
        message: "",
      });
      setSuccessMessage(
        "Your message is on its way. Our team will respond as quickly as possible.",
      );
      toast({
        title: "Message sent",
        description: "Our team has received your inquiry.",
      });
    } catch (error) {
      toast({
        title: "Message not sent",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition className="pt-20 pb-0">
      <PageSeoHead {...pageSeo.contact} />
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact KIDUART",
            url: "https://www.kiduart.com/contact",
            description: pageSeo.contact.description,
            mainEntity: {
              "@type": "Organization",
              name: "KIDUART",
              url: "https://www.kiduart.com",
              email: CONTACT_EMAIL,
              telephone: `+${CONTACT_PHONE_E164}`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Noida",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: `+${CONTACT_PHONE_E164}`,
                  contactType: "sales",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
                {
                  "@type": "ContactPoint",
                  email: CONTACT_EMAIL,
                  contactType: "customer support",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
              ],
            },
          },
        ]}
      />

      <BankingContactHero
        eyebrow="Noida · Sales & support"
        title="Talk to the people who ship KIDUART."
        subtitle="Book a school ERP demo, ask about pricing, or send a product question. You reach our Noida team directly  admissions, fees, attendance, exams, and parent updates."
        image="/images/banner/help-center-hero-1.jpg"
        assurances={[
          "Direct Noida team",
          "Live product demo",
          "School-specific walkthrough",
          "No card required",
        ]}
        actions={
          <>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full bg-brand-navy px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-teal"
            >
              Email Sales
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full border border-brand-navy/[0.12] bg-white px-7 py-3.5 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
            >
              Contact Support
            </a>
          </>
        }
      />

      <section className="section-space relative overflow-hidden bg-white">
        <BackgroundBlobs
          blobs={[
            {
              color: "#f77f00",
              size: 300,
              position: "center-left",
              opacity: 0.15,
            },
            {
              color: "#0c716b",
              size: 300,
              position: "center-right",
              opacity: 0.15,
            },
          ]}
        />
        <FloatingIcons icons={["PhoneCall", "MapPin"]} count={4} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-12 lg:col-span-1">
              <SectionReveal>
                <h2 className="mb-6 text-2xl font-bold text-brand-navy">
                  Get in touch
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-teal/10">
                      <PhoneCall className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">
                        Sales and demo requests
                      </h4>
                      <p className="mb-1 text-sm text-brand-navy/70">
                        {CONTACT_PHONE_DISPLAY}
                      </p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-sm font-medium text-brand-teal hover:underline"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange/10">
                      <LifeBuoy className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">
                        Technical support
                      </h4>
                      <p className="mb-1 text-sm text-brand-navy/70">
                        Available during business hours. Enterprise plans
                        include priority response.
                      </p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-sm font-medium text-brand-teal hover:underline"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-navy/10">
                      <Mail className="h-5 w-5 text-brand-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">
                        General questions
                      </h4>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-sm font-medium text-brand-teal hover:underline"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <h2 className="mb-6 text-2xl font-bold text-brand-navy">
                  Where we are
                </h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-1 flex items-center gap-2 font-bold text-brand-navy">
                      <MapPin className="h-4 w-4 text-brand-teal" /> KIDUART HQ
                    </h4>
                    <p className="ml-6 text-sm text-brand-navy/70">
                      {CONTACT_LOCATION}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 flex items-center gap-2 font-bold text-brand-navy">
                      <MapPin className="h-4 w-4 text-brand-teal" /> Support
                      contact
                    </h4>
                    <p className="ml-6 text-sm text-brand-navy/70">
                      {CONTACT_PHONE_DISPLAY}
                      <br />
                      {CONTACT_EMAIL}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 flex items-center gap-2 font-bold text-brand-navy">
                      <MapPin className="h-4 w-4 text-brand-teal" /> Registered
                      office
                    </h4>
                    <p className="ml-6 text-sm text-brand-navy/70">
                      {CONTACT_LOCATION}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-2">
              <SectionReveal
                delay={0.3}
                className="rounded-3xl border border-brand-navy/5 bg-white p-8 shadow-2xl shadow-brand-navy/10 md:p-12"
              >
                <h2 className="mb-8 text-3xl font-bold text-brand-navy">
                  Send us a message
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="field-surface w-full rounded-xl border border-brand-navy/10 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-teal"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="field-surface w-full rounded-xl border border-brand-navy/10 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-teal"
                        placeholder="john@school.edu"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      className="text-sm font-bold text-brand-navy"
                      htmlFor="contact-phone"
                    >
                      Phone Number
                    </label>
                    <div className="field-surface flex items-center rounded-xl border border-brand-navy/10 transition-all focus-within:ring-2 focus-within:ring-brand-teal">
                      <span className="border-r border-brand-navy/10 px-4 py-3 text-sm font-bold text-brand-navy">
                        +91
                      </span>
                      <input
                        id="contact-phone"
                        required
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={formData.phone}
                        onChange={(e) =>
                          handleChange(
                            "phone",
                            e.target.value.replace(/\D/g, "").slice(0, 10),
                          )
                        }
                        className="w-full bg-transparent px-4 py-3 focus:outline-none"
                        placeholder="10 digit number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">
                      How can we help?
                    </label>
                    <select
                      required
                      value={formData.help}
                      onChange={(e) => handleChange("help", e.target.value)}
                      className="field-surface w-full appearance-none rounded-xl border border-brand-navy/10 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    >
                      <option>I want to book a demo</option>
                      <option>I have a product question</option>
                      <option>I need technical support</option>
                      <option>I am exploring a partnership</option>
                      <option>Something else</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="field-surface w-full resize-none rounded-xl border border-brand-navy/10 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      placeholder="Tell us what you are working on and what you need. The more specific, the faster we can help."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-navy py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:bg-brand-teal hover:shadow-brand-teal/25 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send message"}{" "}
                    <Send className="h-5 w-5" />
                  </button>
                  {successMessage ? (
                    <p
                      aria-live="polite"
                      className="text-sm font-medium text-brand-teal"
                    >
                      {successMessage}
                    </p>
                  ) : null}
                </form>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contrast strip vs white form section above */}
      <section className="relative overflow-hidden bg-brand-navy py-12 md:py-16">
        <div className="cta-aurora opacity-50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-brand-beige md:text-3xl">
                Prefer a live walkthrough?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-brand-beige/75">
                See KIDUART on your school structure fee heads, classes, and
                staff roles. Book a free demo from Noida, or keep using the form
                above for pricing and support questions.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-sm font-bold text-brand-navy transition-transform hover:-translate-y-0.5"
              >
                Book a free demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-brand-beige transition-colors hover:border-white/45"
              >
                About KIDUART
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
