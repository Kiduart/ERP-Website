import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { pageSeo } from "@/lib/pageSeo";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { BankingContactHero } from "@/components/ui/CustomHeroes";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { PhoneCall, Mail, LifeBuoy, MapPin, Send } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_LOCATION, CONTACT_PHONE_DISPLAY, COUNTRY_CODES, DEFAULT_COUNTRY_CODE } from "@/lib/contact";
import { useToast } from "@/hooks/use-toast";
import { useState, type FormEvent } from "react";

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
      : "The form API is not returning JSON yet. Please retry after the server restart."
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
    help: "I want to schedule a demo",
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await parseApiResponse(response);

      if (!response.ok) {
        throw new Error(result?.error || "Unable to send your message right now.");
      }

      setFormData({
        name: "",
        email: "",
        code: DEFAULT_COUNTRY_CODE,
        phone: "",
        help: "I want to schedule a demo",
        message: "",
      });
      setSuccessMessage("Your message is on its way. We will respond within one business day.");
      toast({
        title: "Message sent",
        description: "Our team has received your inquiry.",
      });
    } catch (error) {
      toast({
        title: "Message not sent",
        description: error instanceof Error ? error.message : "Something went wrong while sending your message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition className="pt-20 pb-0 tooo">
      <PageSeoHead {...pageSeo.contact} />
      <BankingContactHero
        eyebrow="Talk to the team"
        title="We are easier to reach than you might expect."
        subtitle="Book a demo, ask about pricing, or send a product question. You will reach our Noida team directly, and we aim to reply within one business day."
        image="/images/banner/contact-post-1.jpg"
        actions={(
          <>
            <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-full bg-brand-navy px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-teal">
              Email Sales
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-full border border-brand-navy/12 bg-white px-7 py-3.5 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal">
              Contact Support
            </a>
          </>
        )}
      />

      <section className="section-space bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#f77f00", size: 300, position: "center-left", opacity: 0.15 },
          { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["PhoneCall", "MapPin"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info & Locations */}
            <div className="lg:col-span-1 space-y-12">
              <SectionReveal>
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Get in touch</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Sales and demo requests</h4>
                      <p className="text-brand-navy/70 text-sm mb-1">{CONTACT_PHONE_DISPLAY}</p>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-teal font-medium text-sm hover:underline">{CONTACT_EMAIL}</a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <LifeBuoy className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Technical support</h4>
                      <p className="text-brand-navy/70 text-sm mb-1">Available during business hours. Enterprise plans include priority response.</p>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-teal font-medium text-sm hover:underline">{CONTACT_EMAIL}</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-navy/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">General questions</h4>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-teal font-medium text-sm hover:underline">{CONTACT_EMAIL}</a>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Where we are</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-brand-navy flex items-center gap-2 mb-1"><MapPin className="w-4 h-4 text-brand-teal" /> KIDUART HQ</h4>
                    <p className="text-brand-navy/70 text-sm ml-6">{CONTACT_LOCATION}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy flex items-center gap-2 mb-1"><MapPin className="w-4 h-4 text-brand-teal" /> Support contact</h4>
                    <p className="text-brand-navy/70 text-sm ml-6">{CONTACT_PHONE_DISPLAY}<br/>{CONTACT_EMAIL}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy flex items-center gap-2 mb-1"><MapPin className="w-4 h-4 text-brand-teal" /> Registered office</h4>
                    <p className="text-brand-navy/70 text-sm ml-6">{CONTACT_LOCATION}</p>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SectionReveal delay={0.3} className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-brand-navy/10 border border-brand-navy/5">
                <h2 className="text-3xl font-bold text-brand-navy mb-8">Send us a message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy">Full Name</label>
                      <input required type="text" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} className="field-surface w-full border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy">Email Address</label>
                      <input required type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className="field-surface w-full border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="john@school.edu" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-[14rem_minmax(0,1fr)] gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy">Country Code</label>
                      <select value={formData.code} onChange={(e) => handleChange("code", e.target.value)} className="field-surface w-full border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all">
                        {COUNTRY_CODES.map((code) => (
                          <option key={code.value} value={code.value}>{code.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy">Phone Number</label>
                      <input required type="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} value={formData.phone} onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))} className="field-surface w-full border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="10 digit number" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">How can we help?</label>
                    <select required value={formData.help} onChange={(e) => handleChange("help", e.target.value)} className="field-surface w-full border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all appearance-none">
                      <option>I want to book a demo</option>
                      <option>I have a product question</option>
                      <option>I need technical support</option>
                      <option>I am exploring a partnership</option>
                      <option>Something else</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Message</label>
                    <textarea required rows={5} value={formData.message} onChange={(e) => handleChange("message", e.target.value)} className="field-surface w-full border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all resize-none" placeholder="Tell us what you are working on and what you need. The more specific, the faster we can help."></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl bg-brand-navy text-white font-bold text-lg hover:bg-brand-teal shadow-xl hover:shadow-brand-teal/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70">
                    {isSubmitting ? "Sending..." : "Send message"} <Send className="w-5 h-5" />
                  </button>
                  {successMessage ? (
                    <p aria-live="polite" className="text-sm font-medium text-brand-teal">{successMessage}</p>
                  ) : null}
                </form>
              </SectionReveal>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
