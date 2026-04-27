import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Search, Settings, Users, BarChart3, ArrowRight, MessageCircle, Ticket, Mail, X, Play } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const heroImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600";

export default function HelpCenter() {
  const [chatOpen, setChatOpen] = useState(false);
  const lensRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const imageMetricsRef = useRef({ width: 1600, height: 1000 });

  const categories = [
    { title: "Getting Started", icon: Play, desc: "Onboarding guides and platform basics.", color: "text-brand-teal", bg: "bg-brand-teal/10" },
    { title: "Account Setup", icon: Settings, desc: "Configure grading scales, terms, and billing.", color: "text-brand-orange", bg: "bg-brand-orange/10" },
    { title: "Student Management", icon: Users, desc: "Attendance, records, and parent comms.", color: "text-brand-yellow", bg: "bg-brand-yellow/20" },
    { title: "Reports & Analytics", icon: BarChart3, desc: "Generating report cards and financial docs.", color: "text-brand-navy", bg: "bg-brand-navy/10" },
  ];

  const popularArticles = [
    { title: "Getting Started with KIDUART", slug: "getting-started" },
    { title: "How to Add Students", slug: "add-student" },
    { title: "Setting Up Attendance Tracking", slug: "attendance-setup" },
    { title: "Generating Reports and Analytics", slug: "generate-reports" },
    { title: "Configuring Fee Management", slug: "fee-setup" },
    { title: "Guide to the Parent Portal", slug: "parent-portal-guide" },
    { title: "How to Reset Your Password", slug: "reset-password" },
    { title: "Setting Up Integrations", slug: "integration-setup" },
  ];

  useEffect(() => {
    const previewImage = new window.Image();
    previewImage.src = heroImage;
    previewImage.onload = () => {
      imageMetricsRef.current = {
        width: previewImage.naturalWidth || 1600,
        height: previewImage.naturalHeight || 1000,
      };
    };
  }, []);

  useEffect(() => {
    const lens = lensRef.current;
    const stage = stageRef.current;

    if (!lens || !stage) return;

    const lensSize = 150;
    const zoomLevel = 2.35;
    const setX = gsap.quickTo(lens, "x", { duration: 0.28, ease: "power3.out" });
    const setY = gsap.quickTo(lens, "y", { duration: 0.28, ease: "power3.out" });
    const setOpacity = gsap.quickTo(lens, "opacity", { duration: 0.2, ease: "power2.out" });
    const setBgX = gsap.quickTo(lens, "backgroundPositionX", { duration: 0.28, ease: "power3.out" });
    const setBgY = gsap.quickTo(lens, "backgroundPositionY", { duration: 0.28, ease: "power3.out" });

    const handleMove = (event: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const clampedX = Math.max(lensSize / 2, Math.min(rect.width - lensSize / 2, x));
      const clampedY = Math.max(lensSize / 2, Math.min(rect.height - lensSize / 2, y));
      const imageRatio = imageMetricsRef.current.width / imageMetricsRef.current.height;
      const stageRatio = rect.width / rect.height;

      let renderWidth = rect.width;
      let renderHeight = rect.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imageRatio > stageRatio) {
        renderHeight = rect.height;
        renderWidth = rect.height * imageRatio;
        offsetX = (renderWidth - rect.width) / 2;
      } else {
        renderWidth = rect.width;
        renderHeight = rect.width / imageRatio;
        offsetY = (renderHeight - rect.height) / 2;
      }

      lens.style.backgroundSize = `${renderWidth * zoomLevel}px ${renderHeight * zoomLevel}px`;

      setOpacity(1);
      setX(clampedX - lensSize / 2);
      setY(clampedY - lensSize / 2);
      setBgX(-((clampedX + offsetX) * zoomLevel - lensSize / 2));
      setBgY(-((clampedY + offsetY) * zoomLevel - lensSize / 2));
    };

    const handleLeave = () => {
      setOpacity(0);
    };

    stage.addEventListener("mousemove", handleMove);
    stage.addEventListener("mouseenter", handleMove);
    stage.addEventListener("mouseleave", handleLeave);

    return () => {
      stage.removeEventListener("mousemove", handleMove);
      stage.removeEventListener("mouseenter", handleMove);
      stage.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <PageTransition className="pt-20 pb-0">
      <section className="hero-viewport relative overflow-hidden bg-[#f5f0e6]">
        <div className="page-shell hero-viewport-inner relative z-10 grid items-center gap-10 py-8 md:py-10 lg:grid-cols-[0.92fr_1.08fr]">
          <SectionReveal className="max-w-xl">
            <div className="mb-5 inline-flex rounded-full bg-brand-orange/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
              Help Center
            </div>
            <h1 className="text-[clamp(2.25rem,1.6rem+2.35vw,4.6rem)] font-bold leading-[0.98] text-brand-navy">
              Explore support
              <br />
              visually before
              <br />
              you even search
            </h1>
            <p className="mt-6 max-w-lg text-[clamp(1rem,0.96rem+0.2vw,1.08rem)] leading-7 text-brand-navy/65">
              Move the zoom box across the image to inspect different parts of the workflow, then jump into the exact guide you need.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.08} className="relative">
            <div
              ref={stageRef}
              className="relative mx-auto aspect-[1.16/1] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-white shadow-[0_28px_70px_rgba(0,48,73,0.18)]"
            >
              <img src={heroImage} alt="Help center support preview" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,48,73,0.04),rgba(0,48,73,0.14))]" />
              <div
                ref={lensRef}
                className="pointer-events-none absolute left-0 top-0 h-[150px] w-[150px] rounded-[1.4rem] border-4 border-white bg-white/20 opacity-0 shadow-[0_20px_40px_rgba(0,48,73,0.28)]"
                style={{
                  backgroundImage: `url(${heroImage})`,
                  backgroundRepeat: "no-repeat",
                  backdropFilter: "blur(1px)",
                }}
              >
                <div className="absolute inset-0 rounded-[1rem] border border-white/60" />
                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/90 bg-brand-orange/80 shadow-md" />
              </div>
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/92 px-4 py-3 text-sm font-medium text-brand-navy shadow-lg">
                Move to explore
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 bg-brand-beige/20 relative overflow-hidden">
        <BackgroundBlobs
          blobs={[
            { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
            { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 },
          ]}
        />
        <FloatingIcons icons={["Star", "Award", "Lightbulb"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1} className="bg-white rounded-2xl p-8 shadow-xl shadow-brand-navy/5 border border-brand-navy/5 hover:-translate-y-1 transition-transform cursor-pointer group">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${cat.bg}`}>
                  <cat.icon className={`w-7 h-7 ${cat.color}`} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">{cat.title}</h3>
                <p className="text-brand-navy/60 text-sm">{cat.desc}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[{ color: "#f77f00", size: 300, position: "bottom-right", opacity: 0.15 }]} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal>
            <div className="mb-5 inline-flex items-center rounded-full bg-brand-beige px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal">
              Popular help articles
            </div>
            <h2 className="text-2xl font-bold text-brand-navy mb-8">Popular Articles</h2>
            <div className="bg-white rounded-2xl border border-brand-navy/10 overflow-hidden shadow-sm">
              {popularArticles.map((article, idx) => (
                <Link key={idx} href={`/help/${article.slug}`} className="flex items-center justify-between p-5 border-b border-brand-navy/5 last:border-0 hover:bg-brand-beige/20 transition-colors group">
                  <span className="font-medium text-brand-navy/80 group-hover:text-brand-navy">{article.title}</span>
                  <ArrowRight className="w-5 h-5 text-brand-navy/30 group-hover:text-brand-teal transition-colors" />
                </Link>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 bg-brand-beige/40 border-t border-brand-navy/5 relative overflow-hidden">
        <BackgroundBlobs blobs={[{ color: "#003049", size: 300, position: "bottom-left", opacity: 0.12 }]} />
        <FloatingIcons icons={["MessageSquare", "Mail"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Still Need Help?</h2>
            <p className="text-lg text-brand-navy/70">Our support team is available 24/7 to assist you.</p>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <SectionReveal className="bg-white p-8 rounded-2xl text-center shadow-md flex flex-col items-center">
              <Mail className="w-10 h-10 text-brand-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Email Support</h3>
              <p className="text-brand-navy/60 text-sm mb-6 flex-grow">Drop us an email and we&apos;ll get back to you within 2 hours.</p>
              <a href="mailto:support@kiduart.com?subject=Support Request from Help Center" className="w-full py-3 rounded-xl border-2 border-brand-navy/10 font-bold text-brand-navy hover:bg-brand-navy hover:text-white transition-colors block text-center">
                support@kiduart.com
              </a>
            </SectionReveal>

            <SectionReveal delay={0.1} className="bg-white p-8 rounded-2xl text-center shadow-md border-2 border-brand-teal flex flex-col items-center">
              <MessageCircle className="w-10 h-10 text-brand-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Live Chat</h3>
              <p className="text-brand-navy/60 text-sm mb-6 flex-grow">Chat with our product experts in real-time right now.</p>
              <button onClick={() => setChatOpen(true)} className="w-full py-3 rounded-xl bg-brand-teal font-bold text-white hover:bg-brand-navy transition-colors">
                Start Chat
              </button>
            </SectionReveal>

            <SectionReveal delay={0.2} className="bg-white p-8 rounded-2xl text-center shadow-md flex flex-col items-center">
              <Ticket className="w-10 h-10 text-brand-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy mb-2">Support Ticket</h3>
              <p className="text-brand-navy/60 text-sm mb-6 flex-grow">Log in to your dashboard to submit and track detailed tickets.</p>
              <a href="https://platform-1-nine.vercel.app/auth/login" target="_blank" rel="noreferrer" className="w-full py-3 rounded-xl border-2 border-brand-navy/10 font-bold text-brand-navy hover:bg-brand-navy hover:text-white transition-colors block text-center">
                Open Portal
              </a>
            </SectionReveal>
          </div>
        </div>
      </section>

      {chatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brand-navy/40 backdrop-blur-sm" />
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative z-10 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-brand-navy p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center font-bold">K</div>
                <div>
                  <h3 className="font-bold">KIDUART Support</h3>
                  <div className="text-xs text-white/70 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span> Online
                  </div>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 bg-brand-beige/10 min-h-[300px] flex flex-col">
              <div className="flex gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-brand-teal flex-shrink-0 flex items-center justify-center text-white text-sm font-bold">K</div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-brand-navy/5 text-brand-navy text-sm">
                  Hi there! How can I help you today?
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                <button className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-brand-navy/10 text-brand-navy hover:border-brand-teal transition-colors">Setup guides</button>
                <button className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-brand-navy/10 text-brand-navy hover:border-brand-teal transition-colors">Billing issue</button>
                <button className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-brand-navy/10 text-brand-navy hover:border-brand-teal transition-colors">Talk to human</button>
              </div>
            </div>

            <div className="p-4 border-t border-brand-navy/10 bg-white">
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="field-surface flex-1 border border-brand-navy/10 rounded-full px-4 py-2 text-sm text-brand-navy focus:outline-none focus:border-brand-teal"
                />
                <button type="submit" className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center hover:bg-brand-navy transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  );
}
