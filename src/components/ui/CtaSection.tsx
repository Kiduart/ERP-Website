import { Link } from "wouter";
import { SectionReveal } from "./PageTransition";
import { ArrowRight } from "lucide-react";

export function CtaSection({ title = "Ready to Transform Your School?", subtitle = "Join over 500+ forward-thinking schools that have upgraded their management experience." }) {
  return (
    <section className="surface-dark section-space relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-navy" />
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-brand-teal/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-3xl" />
      
      <div className="reading-shell relative z-10 text-center">
        <SectionReveal>
          <h2 className="mb-6 text-[clamp(1.8rem,1.2rem+1.45vw,2.85rem)] font-bold leading-[1.08] text-brand-beige">
            {title}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-[clamp(0.98rem,0.94rem+0.14vw,1.03rem)] leading-8 text-brand-beige/85">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/demo" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-yellow text-brand-navy font-bold text-lg hover:bg-white shadow-xl hover:shadow-brand-yellow/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Request a Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
