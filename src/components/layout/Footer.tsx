import { Link } from "wouter";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_LOCATION, CONTACT_PHONE_DISPLAY } from "@/lib/contact";
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
      { label: "Careers", href: "/careers", soon: true },
      { label: "Customer Stories", href: "/stories", soon: true },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog & Insights", href: "/blog", soon: true },
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

const EXPLORE_COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Module areas",
    links: [
      { label: "Academics", href: "/features/academic" },
      { label: "Fees & Finance", href: "/features/finance-and-fee-management" },
      { label: "Student Records", href: "/features/student-management" },
      { label: "HR & Staff", href: "/features/hr-and-staff-management" },
      { label: "Admissions", href: "/features/admission" },
      { label: "Communication", href: "/features/communication" },
      { label: "Library", href: "/features/library-management" },
      { label: "Transport", href: "/features/transport-management" },
      { label: "Hostel", href: "/features/hostel-management" },
      { label: "Reports & Analytics", href: "/features/reports-and-analytics" },
      { label: "Security & Access", href: "/features/security-and-authentication" },
      { label: "Multi-Campus HQ", href: "/features/organization-management" },
    ],
  },
  {
    heading: "Role panels",
    links: [
      { label: "System admin", href: "/platform/system-admin" },
      { label: "Organisation", href: "/platform/organization" },
      { label: "Director", href: "/platform/director" },
      { label: "School admin", href: "/platform/school-admin" },
      { label: "Academic", href: "/platform/academic" },
      { label: "Teacher", href: "/platform/teacher" },
      { label: "Finance", href: "/platform/finance" },
      { label: "HR & staff", href: "/platform/hr" },
      { label: "Parent", href: "/platform/parent" },
      { label: "Student", href: "/platform/student" },
    ],
  },
  {
    heading: "Solutions by role",
    links: [
      { label: "School groups", href: "/solutions/organizations" },
      { label: "Principals", href: "/solutions/school-administration" },
      { label: "Admin staff", href: "/solutions/administrators" },
      { label: "Academic coordinators", href: "/solutions/academic-coordinators" },
      { label: "Teachers", href: "/solutions/teachers" },
      { label: "Accountants", href: "/solutions/accountants" },
      { label: "Parents", href: "/solutions/parents" },
      { label: "Students", href: "/solutions/students" },
    ],
  },
];

const linkClass =
  "hover-underline-group inline-flex min-h-6 items-center gap-2 py-0.5 text-sm leading-6 text-brand-navy/75 transition-colors hover:text-brand-navy";

function SoonBadge() {
  return (
    <span className="rounded-full bg-brand-yellow px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-navy">
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const contentType = response.headers.get("content-type") || "";
      const rawBody = await response.text();
      const result = contentType.includes("application/json") && rawBody ? JSON.parse(rawBody) : {};

      if (!response.ok) {
        throw new Error(
          typeof result === "object" && result && "error" in result
            ? String(result.error)
            : "Unable to subscribe right now."
        );
      }

      setEmail("");
      toast({
        title: "Subscribed",
        description: "You are subscribed. We will only send things worth reading.",
      });
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Something went wrong while subscribing.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="border-t border-brand-navy/10 bg-brand-beige pb-8 pt-10 sm:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-brand-navy px-6 py-8 text-white shadow-[0_24px_60px_rgba(0,48,73,0.18)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Stay ahead of what is happening in school management.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Product updates, practical school operations content, and insights from our team , delivered to your inbox. No noise.
            </p>
          </div>

          <form
            className="field-surface-dark mt-8 flex flex-col gap-3 rounded-[1.75rem] border border-white/10 p-2 sm:flex-row sm:items-center sm:rounded-full sm:pl-3"
            onSubmit={handleSubmit}
          >
            <label htmlFor="footer-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-newsletter-email"
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="field-surface-dark h-14 flex-1 rounded-full px-4 text-base text-white placeholder:text-white/70 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-brand-navy transition-transform hover:-translate-y-0.5"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4 lg:pr-8">
            <Link href="/" className="inline-flex items-center">
              <img
                src="/logo.png"
                alt="KIDUART school ERP"
                className="h-12 w-auto sm:h-14"
                width={512}
                height={160}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-brand-navy/75">
              KIDUART builds school ERP software for Indian educational institutions, helping admin
              teams, teachers, and finance staff do their jobs without the friction.
            </p>

            <div className="mt-6 space-y-3 text-sm text-brand-navy/75">
              <a
                href="tel:+919217534128"
                className="flex items-center gap-3 transition-colors hover:text-brand-teal"
              >
                <Phone className="h-4 w-4 shrink-0 text-brand-teal" aria-hidden />
                <span>{CONTACT_PHONE_DISPLAY}</span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 transition-colors hover:text-brand-teal"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-teal" aria-hidden />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-teal" aria-hidden />
                <span>{CONTACT_LOCATION}</span>
              </p>
            </div>

            <div className="mt-7 flex gap-3">
              <a
                href="https://www.instagram.com/kiduart/"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm transition-colors hover:bg-brand-navy hover:text-white"
                aria-label="KIDUART on Instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="https://www.linkedin.com/company/kiduart"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm transition-colors hover:bg-brand-navy hover:text-white"
                aria-label="KIDUART on LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8">
            {NAV_COLUMNS.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-brand-teal">
                  {column.heading}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={linkClass}>
                        <span className="center-gradient-underline">{link.label}</span>
                        {link.soon && <SoonBadge />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-10 border-t border-brand-navy/10 pt-10 md:grid-cols-3 md:gap-8">
          {EXPLORE_COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-brand-teal">
                {column.heading}
              </h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-6 items-center py-0.5 text-sm leading-6 text-brand-navy/75 underline-offset-4 transition-colors hover:text-brand-navy hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand-navy/10 pt-6 text-sm text-brand-navy/75 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} KIDUART Inc. All rights reserved.</p>
          <p>School ERP built in India, for Indian schools.</p>
        </div>
      </div>
    </footer>
  );
}
