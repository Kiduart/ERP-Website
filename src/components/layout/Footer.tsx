import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_LOCATION, CONTACT_PHONE_DISPLAY } from "@/lib/contact";
import { useState, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

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
    <footer className="border-t border-brand-navy/10 bg-brand-beige pt-10 pb-8 sm:pt-14">
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
            <input
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="field-surface-dark h-14 flex-1 rounded-full px-4 text-base text-white placeholder:text-white/55 focus:outline-none"
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

        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.2fr_0.7fr_0.7fr_0.8fr_0.95fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center">
              <img
                src="/logo.png"
                alt="KIDUART school ERP"
                className="h-20 w-auto"
                width={160}
                height={80}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="mt-6 text-sm leading-7 text-brand-navy/70">
              KIDUART builds school ERP software for Indian educational institutions , helping admin teams, teachers, and finance staff do their jobs without the friction.
            </p>

            <div className="mt-6 space-y-3 text-sm text-brand-navy/75">
              <a href="tel:+919217534128" className="flex items-center gap-3 transition-colors hover:text-brand-teal">
                <Phone className="h-4 w-4 text-brand-teal" />
                <span>{CONTACT_PHONE_DISPLAY}</span>
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 transition-colors hover:text-brand-teal">
                <Mail className="h-4 w-4 text-brand-teal" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-teal" />
                <span>{CONTACT_LOCATION}</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="https://www.instagram.com/kiduart/" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm transition-colors hover:bg-brand-navy hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm transition-colors hover:bg-brand-navy hover:text-white">
                <Facebook className="h-5 w-5" />
              </a> */}
              <a href="https://www.linkedin.com/company/kiduart" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm transition-colors hover:bg-brand-navy hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-brand-teal">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover-underline-group inline-flex text-sm text-brand-navy/75 transition-colors hover:text-brand-navy"><span className="center-gradient-underline">About Us</span></Link></li>
              <li>
                <Link href="/careers" className="hover-underline-group inline-flex items-center gap-2 text-sm text-brand-navy/75 transition-colors hover:text-brand-navy">
                  <span className="center-gradient-underline">Careers</span>
                  <span className="rounded-full bg-brand-yellow px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-navy">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover-underline-group inline-flex items-center gap-2 text-sm text-brand-navy/75 transition-colors hover:text-brand-navy">
                  <span className="center-gradient-underline">Customer Stories</span>
                  <span className="rounded-full bg-brand-yellow px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-navy">Soon</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-brand-teal">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/features" className="hover-underline-group inline-flex text-sm text-brand-navy/75 transition-colors hover:text-brand-navy"><span className="center-gradient-underline">Features</span></Link></li>
              <li><Link href="/integrations" className="hover-underline-group inline-flex text-sm text-brand-navy/75 transition-colors hover:text-brand-navy"><span className="center-gradient-underline">Integrations</span></Link></li>
              <li><Link href="/pricing" className="hover-underline-group inline-flex text-sm text-brand-navy/75 transition-colors hover:text-brand-navy"><span className="center-gradient-underline">Pricing</span></Link></li>
              <li><Link href="/security" className="hover-underline-group inline-flex text-sm text-brand-navy/75 transition-colors hover:text-brand-navy"><span className="center-gradient-underline">Security</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-brand-teal">Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/blog" className="hover-underline-group inline-flex items-center gap-2 text-sm text-brand-navy/75 transition-colors hover:text-brand-navy">
                  <span className="center-gradient-underline">Blog & Insights</span>
                  <span className="rounded-full bg-brand-yellow px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-navy">Soon</span>
                </Link>
              </li>
              <li><Link href="/help" className="hover-underline-group inline-flex text-sm text-brand-navy/75 transition-colors hover:text-brand-navy"><span className="center-gradient-underline">Help Center</span></Link></li>
              <li><Link href="/contact" className="hover-underline-group inline-flex text-sm text-brand-navy/75 transition-colors hover:text-brand-navy"><span className="center-gradient-underline">Contact Us</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-brand-teal">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="hover-underline-group inline-flex text-sm text-brand-navy/75 transition-colors hover:text-brand-navy"><span className="center-gradient-underline">Privacy Policy</span></Link></li>
              <li><Link href="/terms-conditions" className="hover-underline-group inline-flex text-sm text-brand-navy/75 transition-colors hover:text-brand-navy"><span className="center-gradient-underline">Terms & Conditions</span></Link></li>
              <li><Link href="/refund-cancellation-policy" className="hover-underline-group inline-flex text-sm text-brand-navy/75 transition-colors hover:text-brand-navy"><span className="center-gradient-underline">Refund / Cancellation Policy</span></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-navy/10 pt-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-brand-navy/60">
            <span>&copy; {new Date().getFullYear()} KIDUART Inc. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
