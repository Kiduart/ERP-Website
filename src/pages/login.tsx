import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Link } from "wouter";
import { ShieldCheck, Building2, Heart, GraduationCap, ArrowRight } from "lucide-react";

export default function Login() {
  const roles = [
    {
      title: "System Admin",
      icon: ShieldCheck,
      description: "Full system control and configuration",
      url: "https://platform-1-nine.vercel.app/auth/login",
      color: "text-brand-navy",
      bg: "bg-brand-navy/10"
    },
    {
      title: "School Admin",
      icon: Building2,
      description: "Manage school operations and staff",
      url: "https://platform-1-nine.vercel.app/school/auth/login",
      color: "text-brand-teal",
      bg: "bg-brand-teal/10"
    },
    {
      title: "Parent",
      icon: Heart,
      description: "View child's progress and communicate",
      url: "https://platform-1-nine.vercel.app/parent/auth/login",
      color: "text-brand-orange",
      bg: "bg-brand-orange/10"
    },
    {
      title: "Student",
      icon: GraduationCap,
      description: "Access assignments, grades and schedule",
      url: "https://platform-1-nine.vercel.app/student/auth/login",
      color: "text-brand-yellow",
      bg: "bg-brand-yellow/20"
    }
  ];

  return (
    <PageTransition className="pt-20 pb-0 tooo">
      <section className="bg-brand-beige/30 py-20 lg:py-32 border-b border-brand-navy/5 relative overflow-hidden min-h-screen flex flex-col justify-center">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 400, position: "top-left", opacity: 0.35 },
          { color: "#0c716b", size: 400, position: "bottom-right", opacity: 0.35 }
        ]} />
        <FloatingIcons icons={["Lock", "ShieldCheck", "Users"]} count={6} heroMode={true} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full mb-16">
          <SectionReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-6">
              Access Your KIDUART Platform
            </h1>
            <p className="text-xl text-brand-navy/70 max-w-2xl mx-auto">
              Select your role to continue to your dashboard
            </p>
          </SectionReveal>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {roles.map((role, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-brand-navy/5 border border-brand-navy/5 hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300 flex flex-col h-full items-start text-left">
                  <div className={`w-16 h-16 rounded-2xl ${role.bg} flex items-center justify-center mb-6`}>
                    <role.icon className={`w-8 h-8 ${role.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-navy mb-3">{role.title}</h2>
                  <p className="text-brand-navy/70 mb-8 flex-grow">{role.description}</p>
                  
                  <button 
                    onClick={() => window.open(role.url, '_blank')}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-navy text-white font-bold text-lg hover:bg-brand-teal shadow-lg hover:shadow-brand-teal/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Login as {role.title} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.4} className="text-center bg-brand-beige/20 p-8 rounded-2xl border border-brand-navy/5">
            <p className="text-brand-navy/70 text-lg mb-4">
              Not sure which login to use? Contact us at support@kiduart.com
            </p>
            <Link href="/help" className="text-brand-teal font-bold hover:text-brand-navy transition-colors inline-flex items-center gap-2">
              Visit Help Center <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
}
