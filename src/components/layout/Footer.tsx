import { Link } from "wouter";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
} from "@/lib/contact";
import { useState, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

type FooterLink = { label: string; href: string; soon?: boolean };

const NAV_COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Platform", href: "/platform" },
      { label: "Solutions", href: "/solutions" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Customer Stories", href: "/stories", soon: true },
      { label: "KIDUORBIT AI", href: "/kiduorbit", soon: true },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "FAQ", href: "/faq" },
      { label: "ERP Vendor Checklist", href: "/vendor-checklist" },
      { label: "Blog & Insights", href: "/blog" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Refund / Cancellation", href: "/refund-cancellation-policy" },
    ],
  },
];

const DESTINATIONS = [
  {
    href: "/features",
    kicker: "Functional areas",
    title: "Features",
    detail: "The full capability map, area by area.",
  },
  {
    href: "/platform",
    kicker: "Dedicated user panels",
    title: "Platform",
    detail: "What each role opens on their own dashboard.",
  },
  {
    href: "/solutions",
    kicker: "Role journeys",
    title: "Solutions",
    detail: "How a principal, teacher or accountant works day to day.",
  },
] as const;

const CLOSING_LINE = [
  "Built in India",
  "For Indian schools",
  "Your data stays yours",
] as const;

const navLinkClass =
  "hover-underline-group inline-flex min-h-6 items-center gap-2 py-0.5 text-sm leading-6 text-brand-navy/[0.72] transition-colors hover:text-brand-teal";

function SoonBadge() {
  return (
    <span className="rounded-full bg-brand-yellow px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider !text-brand-navy">
      Soon
    </span>
  );
}

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email to subscribe.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const contentType = response.headers.get("content-type") || "";
      const rawBody = await response.text();
      const result =
        contentType.includes("application/json") && rawBody
          ? JSON.parse(rawBody)
          : {};

      if (!response.ok) {
        throw new Error(
          typeof result === "object" && result && "error" in result
            ? String(result.error)
            : "Unable to subscribe right now.",
        );
      }

      setEmail("");
      toast({
        title: "Subscribed",
        description:
          "You are subscribed. We will only send things worth reading.",
      });
    } catch (error) {
      toast({
        title: "Subscription failed",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong while subscribing.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer-cream relative overflow-hidden border-t border-brand-navy/[0.08] bg-brand-beige text-brand-navy">
      <div className="page-shell relative z-10 pt-14 sm:pt-16">
        <div className="grid gap-10 border-b border-brand-navy/[0.1] pb-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
          <div>
            <Link href="/" className="inline-block">
              <img
                src="/logo.webp"
                alt="KIDUART school ERP"
                className="h-10 w-auto sm:h-11"
                width={512}
                height={160}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="mt-7 max-w-lg text-[clamp(1.35rem,1.1rem+0.9vw,1.85rem)] font-bold leading-snug text-brand-navy">
              School operations, closed for the day
              <span className="text-brand-teal">
                {" "}
                open again when you are ready.
              </span>
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-brand-navy/[0.72]">
              Admissions, fees, attendance, exams, transport, hostel, library,
              HR and parent communication one system for Indian schools.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
              <a
                href="tel:+919217534128"
                className="inline-flex items-center gap-2 font-semibold text-brand-navy transition-colors hover:text-brand-teal"
              >
                <Phone className="h-4 w-4 text-brand-teal" aria-hidden />
                {CONTACT_PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 font-semibold text-brand-navy transition-colors hover:text-brand-teal"
              >
                <Mail className="h-4 w-4 text-brand-teal" aria-hidden />
                {CONTACT_EMAIL}
              </a>
              <span className="inline-flex items-center gap-2 font-semibold text-brand-navy/[0.72]">
                <MapPin className="h-4 w-4 text-brand-teal" aria-hidden />
                {CONTACT_LOCATION}
              </span>
            </div>

            <div className="mt-6 flex gap-2.5">
              <a
                href="https://www.instagram.com/kiduart/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-navy/15 bg-white text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                aria-label="KIDUART on Instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="https://www.linkedin.com/company/kiduart"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-navy/15 bg-white text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                aria-label="KIDUART on LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[1.5rem] border border-brand-navy/[0.1] bg-white p-5 shadow-sm sm:p-6"
          >
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-brand-teal">
              The monthly note
            </p>
            <p className="mt-2 text-sm leading-6 text-brand-navy/[0.74]">
              What actually changes in school operations once a month, no drip.
            </p>
            <label htmlFor="footer-newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="mt-4 flex gap-2">
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="you@school.edu"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-12 w-full flex-1 rounded-full border border-brand-navy/[0.14] bg-brand-beige/40 px-5 text-sm text-brand-navy placeholder:text-brand-navy/50 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-brand-navy px-5 text-sm font-bold text-brand-beige transition-colors hover:bg-brand-teal disabled:opacity-60"
              >
                {isSubmitting ? "…" : "Subscribe"}
              </button>
            </div>
            <p className="mt-3 text-xs leading-5 text-brand-navy/[0.65]">
              Unsubscribe in one click.{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold underline underline-offset-2 hover:text-brand-teal"
              >
                Privacy
              </Link>
            </p>
          </form>
        </div>

        <nav
          aria-label="Where to go next"
          className="border-b border-brand-navy/[0.1] py-10"
        >
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-brand-navy/[0.72]">
            Where to go next
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {DESTINATIONS.map((door, index) => (
              <li key={door.href}>
                <Link
                  href={door.href}
                  className="group flex h-full flex-col rounded-[1.35rem] border border-brand-navy/[0.1] bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-teal/40 hover:shadow-md hover:shadow-brand-navy/[0.06]"
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-teal">
                      {door.kicker}
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-beige text-[0.65rem] font-extrabold text-brand-navy/[0.7] transition-colors group-hover:bg-brand-teal group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="mt-3 flex items-baseline gap-2 text-[clamp(1.35rem,1.15rem+0.6vw,1.75rem)] font-bold text-brand-navy transition-colors group-hover:text-brand-teal">
                    {door.title}
                    <ArrowUpRight
                      className="h-4 w-4 translate-y-0.5 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      aria-hidden
                    />
                  </span>
                  <span className="mt-2 text-sm leading-6 text-brand-navy/[0.68]">
                    {door.detail}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid grid-cols-2 gap-x-6 gap-y-9 py-10 sm:grid-cols-4">
          {NAV_COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-navy/[0.72]">
                {column.heading}
              </h2>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={navLinkClass}>
                      <span className="center-gradient-underline">
                        {link.label}
                      </span>
                      {link.soon && <SoonBadge />}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="relative">
        <p className="footer-wordmark footer-wordmark-cream" aria-hidden="true">
          KIDUART
        </p>
        <div className="page-shell relative z-10">
          <div className="flex flex-col gap-4 border-t border-brand-navy/[0.1] py-6 text-sm text-brand-navy/[0.65] sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} KIDUART Inc. All rights
              reserved.
            </p>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-wide text-brand-navy/[0.7]">
              {CLOSING_LINE.map((part, index) => (
                <span key={part} className="inline-flex items-center gap-3">
                  {index > 0 && (
                    <span className="text-brand-navy/25" aria-hidden="true">
                      ·
                    </span>
                  )}
                  {part}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
