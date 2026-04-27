import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { BankingContactHero } from "@/components/ui/CustomHeroes";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { PhoneCall, Mail, LifeBuoy, MapPin, Send } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_LOCATION, CONTACT_PHONE_DISPLAY, COUNTRY_CODES, DEFAULT_COUNTRY_CODE } from "@/lib/contact";

export default function Contact() {
  return (
    <PageTransition className="pt-20 pb-0 tooo">
      <BankingContactHero
        eyebrow="Talk to our team"
        title="We're Here to Help"
        subtitle="Whether you're looking for a demo, need technical support, or have a general inquiry, our team is ready to assist."
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200"
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

      <section className="py-20 bg-white relative overflow-hidden">
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
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Sales</h4>
                      <p className="text-brand-navy/70 text-sm mb-1">{CONTACT_PHONE_DISPLAY}</p>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-teal font-medium text-sm hover:underline">{CONTACT_EMAIL}</a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                      <LifeBuoy className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Support</h4>
                      <p className="text-brand-navy/70 text-sm mb-1">Available 24/7 for Enterprise</p>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-teal font-medium text-sm hover:underline">{CONTACT_EMAIL}</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-navy/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">General Inquiries</h4>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-teal font-medium text-sm hover:underline">{CONTACT_EMAIL}</a>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Global Offices</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-brand-navy flex items-center gap-2 mb-1"><MapPin className="w-4 h-4 text-brand-teal" /> New York (HQ)</h4>
                    <p className="text-brand-navy/70 text-sm ml-6">{CONTACT_LOCATION}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy flex items-center gap-2 mb-1"><MapPin className="w-4 h-4 text-brand-teal" /> Support Desk</h4>
                    <p className="text-brand-navy/70 text-sm ml-6">{CONTACT_PHONE_DISPLAY}<br/>{CONTACT_EMAIL}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy flex items-center gap-2 mb-1"><MapPin className="w-4 h-4 text-brand-teal" /> KIDUART Base</h4>
                    <p className="text-brand-navy/70 text-sm ml-6">{CONTACT_LOCATION}</p>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SectionReveal delay={0.3} className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-brand-navy/10 border border-brand-navy/5">
                <h2 className="text-3xl font-bold text-brand-navy mb-8">Send us a message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy">Full Name</label>
                      <input required type="text" className="field-surface w-full border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy">Email Address</label>
                      <input required type="email" className="field-surface w-full border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="john@school.edu" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-[14rem_minmax(0,1fr)] gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy">Country Code</label>
                      <select defaultValue={DEFAULT_COUNTRY_CODE} className="field-surface w-full border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all">
                        {COUNTRY_CODES.map((code) => (
                          <option key={code.value} value={code.value}>{code.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy">Phone Number</label>
                      <input required type="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} className="field-surface w-full border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="10 digit number" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">How can we help?</label>
                    <select required className="field-surface w-full border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all appearance-none">
                      <option>I want to schedule a demo</option>
                      <option>I need technical support</option>
                      <option>Partnership inquiry</option>
                      <option>Billing question</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy">Message</label>
                    <textarea required rows={5} className="field-surface w-full border border-brand-navy/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all resize-none" placeholder="Tell us more about what you need..."></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 rounded-xl bg-brand-navy text-white font-bold text-lg hover:bg-brand-teal shadow-xl hover:shadow-brand-teal/25 transition-all duration-300 flex items-center justify-center gap-2">
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              </SectionReveal>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
