import { ReactNode } from "react";
import { SectionReveal } from "@/components/ui/PageTransition";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { cn } from "@/lib/utils";

type BaseProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
  actions?: ReactNode;
  className?: string;
};

export function CircleShowcaseHero({
  eyebrow,
  title,
  subtitle,
  image,
  actions,
  className,
}: BaseProps) {
  return (
    <section className={cn("relative overflow-hidden bg-[linear-gradient(180deg,#ffffff,#faf8f0)] py-24", className)}>
      <BackgroundBlobs
        blobs={[
          { color: "hsl(var(--blob-yellow))", size: 360, position: "top-left", opacity: 0.12 },
          { color: "hsl(var(--blob-teal))", size: 360, position: "bottom-right", opacity: 0.1 },
        ]}
      />
      <div className="page-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionReveal>
          {eyebrow && (
            <div className="inline-flex rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-teal">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-6 max-w-xl text-[clamp(2rem,1.25rem+1.75vw,3.3rem)] font-bold leading-[1.05] text-brand-navy">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-[clamp(1rem,0.95rem+0.16vw,1.06rem)] leading-8 text-brand-navy/74">
            {subtitle}
          </p>
          {actions && <div className="mt-8 flex flex-col gap-4 sm:flex-row">{actions}</div>}
        </SectionReveal>

        <SectionReveal delay={0.08} className="relative hidden lg:block">
          <div className="absolute right-4 top-6 h-24 w-24 rounded-full border border-brand-navy/12" />
          <div className="absolute -right-4 top-24 h-8 w-8 rounded-full bg-brand-orange/70" />
          <div className="absolute -left-2 bottom-8 h-10 w-10 rounded-full bg-brand-yellow/70 shadow-lg" />
          <div className="absolute left-6 top-12 h-56 w-56 rounded-full border border-brand-teal/12" />

          <div className="relative mx-auto w-[31rem]">
            <div className="absolute -right-2 top-10 h-[24rem] w-[24rem] rounded-full border-[10px] border-brand-navy/10 bg-white" />
            <div className="absolute bottom-8 left-0 z-20 rounded-[1.5rem] border border-brand-navy/10 bg-white px-6 py-5 shadow-xl">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">School-ready</div>
              <div className="mt-2 text-base font-semibold text-brand-navy">Designed for daily admin and classroom work</div>
            </div>
            <div className="relative z-10 ml-auto h-[27rem] w-[27rem] overflow-hidden rounded-full border-[10px] border-white bg-white shadow-[0_30px_80px_rgba(0,48,73,0.14)]">
              <img src={image} alt={title} className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-4 right-8 z-20 h-28 w-28 overflow-hidden rounded-full border-[6px] border-white bg-white shadow-xl">
              <img src={image} alt={title} className="h-full w-full object-cover" />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export function SoftImageHero({
  eyebrow,
  title,
  subtitle,
  image,
  actions,
  className,
}: BaseProps) {
  return (
    <section className={cn("relative overflow-hidden bg-[#f4f3ef] py-24", className)}>
      <div className="page-shell relative z-10">
        <div className="grid items-center gap-12 overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_24px_70px_rgba(0,48,73,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <SectionReveal>
            {eyebrow && (
              <div className="inline-flex rounded-full border border-brand-navy/10 bg-brand-beige px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-teal">
                {eyebrow}
              </div>
            )}
            <h1 className="mt-6 max-w-lg text-[clamp(2rem,1.3rem+1.8vw,3.35rem)] font-bold leading-[1.02] text-brand-navy">
              {title}
            </h1>
            <p className="mt-5 max-w-lg text-[clamp(1rem,0.95rem+0.14vw,1.05rem)] leading-8 text-brand-navy/72">
              {subtitle}
            </p>
            {actions && <div className="mt-8 flex flex-col gap-4 sm:flex-row">{actions}</div>}
          </SectionReveal>

          <SectionReveal delay={0.08} className="relative">
            <div className="absolute right-14 top-14 h-32 w-44 rounded-[999px] border border-brand-navy/18" />
            <div className="absolute right-6 top-20 h-1 w-56 rounded-full bg-brand-navy/20" />
            <div className="absolute right-0 top-32 h-1 w-60 rounded-full bg-brand-navy/12" />
            <div className="absolute right-8 top-44 h-1 w-52 rounded-full bg-brand-navy/10" />
            <div className="absolute right-24 top-8 h-14 w-14 rounded-full border-[5px] border-white bg-brand-orange/20 shadow-md" />
            <div className="absolute left-12 top-24 h-16 w-16 rounded-full border-[5px] border-white bg-brand-teal/20 shadow-md" />
            <div className="absolute right-10 bottom-16 h-20 w-20 rounded-full border-[5px] border-white bg-brand-navy/15 shadow-md" />
            <div className="relative ml-auto max-w-[38rem]">
              <img src={image} alt={title} className="w-full rounded-[2rem] object-cover" />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

type ImageBackdropHeroProps = BaseProps & {
  center?: boolean;
  overlayClassName?: string;
  floatingIcons?: string[];
  fullHeight?: boolean;
};

export function ImageBackdropHero({
  eyebrow,
  title,
  subtitle,
  image,
  actions,
  className,
  center = true,
  overlayClassName = "bg-[linear-gradient(135deg,rgba(250,248,240,0.84),rgba(250,248,240,0.62))]",
  floatingIcons = ["LayoutDashboard", "Users", "BarChart2"],
  fullHeight = false,
}: ImageBackdropHeroProps) {
  return (
    <section className={cn("relative overflow-hidden py-14 md:py-18", fullHeight && "hero-viewport flex items-center", className)}>
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className={cn("absolute inset-0", overlayClassName)} />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIcons icons={floatingIcons} count={5} heroMode={true} />
      </div>
      <div className={cn("page-shell relative z-10 w-full", fullHeight && "hero-viewport-inner flex items-center")}>
        <SectionReveal className={center ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
          {eyebrow && (
            <div className="inline-flex rounded-full border border-brand-navy/12 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-6 text-[clamp(2rem,1.25rem+1.8vw,2.95rem)] font-bold leading-[1.04] text-brand-navy">
            {title}
          </h1>
          <p className={cn("mt-5 text-[clamp(1rem,0.95rem+0.14vw,1.05rem)] leading-8 text-brand-navy/72", center && "mx-auto max-w-2xl")}>
            {subtitle}
          </p>
          {actions && <div className={cn("mt-8 flex flex-col gap-4 sm:flex-row", center && "justify-center")}>{actions}</div>}
        </SectionReveal>
      </div>
    </section>
  );
}

export function HomeCurveHero({
  title,
  subtitle,
  image,
  actions,
}: {
  title: string;
  subtitle: string;
  image: string;
  actions: ReactNode;
}) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#002e477d]" />
      </div>

      <FloatingIcons icons={["LayoutDashboard", "Users", "BarChart2"]} count={6} heroMode={true} />

      <div className="page-shell relative z-20 flex min-h-screen items-center justify-center pb-16 pt-36 md:pt-40">
        <SectionReveal className="mx-auto max-w-4xl text-center text-brand-beige">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-brand-yellow backdrop-blur-sm">
            AI school ERP platform
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(2rem,1.35rem+1.55vw,3.1rem)] font-bold leading-[1.05] text-brand-beige">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[clamp(1rem,0.95rem+0.14vw,1.05rem)] leading-8 text-brand-beige/88">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">{actions}</div>
          <div className="mt-10 flex items-center justify-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export function EditorialMusicHero({
  eyebrow,
  title,
  subtitle,
  image,
  actions,
  className,
}: BaseProps) {
  return (
    <section className={cn("relative overflow-hidden bg-[#eef0eb] py-20 lg:py-24", className)}>
      <div className="page-shell relative z-10">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] bg-[#f7f8f4] p-8 shadow-[0_24px_80px_rgba(0,48,73,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <SectionReveal>
            {eyebrow && (
              <div className="inline-flex rounded-full bg-[#f6e7cf] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal">
                {eyebrow}
              </div>
            )}
            <h1 className="mt-6 max-w-md text-[clamp(2.2rem,1.6rem+1.7vw,4rem)] font-bold leading-[0.98] text-brand-navy">
              {title}
            </h1>
            <p className="mt-5 max-w-md text-base leading-8 text-brand-navy/68">{subtitle}</p>
            <div className="mt-8 max-w-md overflow-hidden rounded-full bg-white p-2 shadow-lg shadow-brand-navy/10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="field-surface min-w-0 flex-1 rounded-full px-4 py-2 text-sm text-brand-navy placeholder:text-brand-navy/35 focus:outline-none"
                />
                <button className="rounded-full bg-brand-teal px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-navy">
                  Get Started
                </button>
              </div>
            </div>
            {actions && <div className="mt-6 flex flex-col gap-4 sm:flex-row">{actions}</div>}
          </SectionReveal>

          <SectionReveal delay={0.08} className="relative min-h-[20rem] lg:min-h-[28rem]">
            <div className="absolute left-0 top-10 h-[2px] w-full bg-brand-navy/12" />
            <div className="absolute left-0 top-20 h-[2px] w-full bg-brand-navy/10" />
            <div className="absolute left-0 top-32 h-[2px] w-full bg-brand-navy/8" />
            {[
              "left-[12%] top-[8%]",
              "left-[22%] top-[22%]",
              "right-[12%] top-[10%]",
              "right-[3%] top-[34%]",
              "right-[18%] top-[52%]",
            ].map((position, idx) => (
              <div key={idx} className={cn("absolute h-14 w-14 overflow-hidden rounded-full border-[4px] border-white shadow-lg", position)}>
                <img src={image} alt={title} className="h-full w-full object-cover" />
              </div>
            ))}
            <div className="absolute bottom-0 right-0 w-full max-w-[32rem]">
              <div className="overflow-hidden rounded-[2rem]">
                <img src={image} alt={title} className="h-full w-full object-cover" />
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

export function BankingContactHero({
  eyebrow,
  title,
  subtitle,
  image,
  actions,
  className,
}: BaseProps) {
  return (
    <section className={cn("relative overflow-hidden bg-[#fbfaf6] py-20", className)}>
      <div className="page-shell relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <SectionReveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-[30rem]">
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/10" />
            <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-full border-[12px] border-white shadow-[0_30px_70px_rgba(0,48,73,0.12)]">
              <img src={image} alt={title} className="h-full w-full object-cover" />
            </div>
            {[
              { label: "USD 43.49", className: "left-0 top-[34%]" },
              { label: "EUR 64.49", className: "right-2 top-[24%]" },
              { label: "GBP 42.49", className: "left-6 top-[12%]" },
              { label: "INR 36.49", className: "right-10 bottom-[14%]" },
            ].map((chip) => (
              <div key={chip.label} className={cn("absolute rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-navy shadow-lg", chip.className)}>
                {chip.label}
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="order-1 lg:order-2">
          {eyebrow && (
            <div className="inline-flex rounded-full bg-brand-beige px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-6 max-w-lg text-[clamp(2rem,1.45rem+1.45vw,3.4rem)] font-bold leading-[1.02] text-brand-navy">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-brand-navy/68">{subtitle}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Fast response", "Live demo support", "Priority setup", "High security"].map((item) => (
              <div key={item} className="rounded-2xl border border-brand-navy/8 bg-white px-5 py-4 text-sm font-semibold text-brand-navy shadow-sm">
                {item}
              </div>
            ))}
          </div>
          {actions && <div className="mt-8 flex flex-col gap-4 sm:flex-row">{actions}</div>}
        </SectionReveal>
      </div>
    </section>
  );
}

export function TeamPanelsHero({
  eyebrow,
  title,
  subtitle,
  image,
  actions,
  className,
}: BaseProps) {
  const panelImages = new Array(5).fill(image);

  return (
    <section className={cn("relative overflow-hidden bg-[#fbf5e8] py-20", className)}>
      <div className="page-shell relative z-10 text-center">
        {eyebrow && (
          <div className="inline-flex rounded-full bg-brand-beige px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-teal">
            {eyebrow}
          </div>
        )}
        <SectionReveal>
          <h1 className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,1.5rem+1.5vw,3.5rem)] font-bold leading-[1.02] text-brand-navy">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-navy/65">{subtitle}</p>
        </SectionReveal>

        {actions && <div className="mt-8 flex justify-center">{actions}</div>}

        <SectionReveal delay={0.08} className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-5">
          {panelImages.map((panelImage, idx) => (
            <div
              key={idx}
              className={cn(
                "overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_55px_rgba(0,48,73,0.08)]",
                idx === 0 && "md:translate-y-6",
                idx === 1 && "md:translate-y-2",
                idx === 3 && "md:translate-y-2",
                idx === 4 && "md:translate-y-6",
              )}
            >
              <img src={panelImage} alt={title} className="h-72 w-full object-cover" />
              <div className="px-4 py-5 text-left">
                <div className="text-sm font-bold text-brand-navy">
                  {["Real-Time Collaboration", "Task & Project Tracking", "Performance Insights", "School Coordination", "Leadership Visibility"][idx]}
                </div>
                <p className="mt-2 text-xs leading-5 text-brand-navy/55">Built to show outcomes, workflows, and daily impact for every team member.</p>
              </div>
            </div>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}

export function PlayfulSplitHero({
  eyebrow,
  title,
  subtitle,
  image,
  actions,
  className,
}: BaseProps) {
  return (
    <section className={cn("relative overflow-hidden bg-[#fbfaf3] py-20", className)}>
      <div className="absolute inset-0 opacity-50">
        <div className="absolute left-[8%] top-[18%] h-6 w-6 rounded-full bg-brand-navy/8" />
        <div className="absolute left-[18%] top-[44%] h-4 w-4 rounded-full bg-brand-orange/20" />
        <div className="absolute right-[12%] top-[20%] h-8 w-8 rounded-full bg-brand-teal/10" />
        <div className="absolute right-[16%] bottom-[22%] h-5 w-5 rounded-full bg-brand-navy/10" />
      </div>
      <div className="page-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionReveal>
          {eyebrow && (
            <div className="inline-flex rounded-full bg-[#f8ead0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-6 max-w-xl text-[clamp(2.1rem,1.5rem+1.7vw,3.7rem)] font-bold leading-[1.02] text-brand-navy">
            {title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-8 text-brand-navy/66">{subtitle}</p>
          {actions && <div className="mt-8 flex flex-col gap-4 sm:flex-row">{actions}</div>}
        </SectionReveal>

        <SectionReveal delay={0.08} className="relative">
          <div className="relative mx-auto max-w-[32rem]">
            <div className="absolute right-4 top-10 h-48 w-44 rounded-[2rem] bg-brand-orange/18" />
            <div className="absolute bottom-0 right-0 h-44 w-40 rounded-[2rem] bg-brand-teal/85" />
            <div className="absolute bottom-4 left-10 h-44 w-36 rounded-[2rem] border-[12px] border-white" />
            <div className="overflow-hidden rounded-[2.5rem]">
              <img src={image} alt={title} className="w-full object-cover" />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export function PricingShowcaseHero({
  eyebrow,
  title,
  subtitle,
  className,
}: Pick<BaseProps, "eyebrow" | "title" | "subtitle" | "className">) {
  return (
    <section className={cn("relative overflow-hidden bg-[#dfe8c9] py-20", className)}>
      <div className="page-shell relative z-10 text-center">
        {eyebrow && (
          <div className="inline-flex rounded-full bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal">
            {eyebrow}
          </div>
        )}
        <SectionReveal>
          <h1 className="mt-6 text-[clamp(2rem,1.5rem+1.3vw,3.1rem)] font-bold leading-[1.04] text-brand-navy">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-navy/65">{subtitle}</p>
        </SectionReveal>

        <SectionReveal delay={0.08} className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            { name: "Starter Plan", price: "$14", tone: "bg-white text-brand-navy" },
            { name: "Basic Plan", price: "$29", tone: "bg-[#123b1d] text-white scale-[1.03]" },
            { name: "Premium Plan", price: "$139", tone: "bg-white text-brand-navy" },
          ].map((plan) => (
            <div key={plan.name} className={cn("rounded-[1.75rem] p-8 shadow-[0_20px_50px_rgba(0,48,73,0.08)]", plan.tone)}>
              <div className="text-lg font-semibold">{plan.name}</div>
              <div className="mt-5 text-5xl font-bold">{plan.price}</div>
              <div className={cn("mt-2 text-sm", plan.name === "Basic Plan" ? "text-white/72" : "text-brand-navy/55")}>per user per month</div>
              <button className={cn("mt-8 rounded-full px-6 py-3 text-sm font-bold", plan.name === "Basic Plan" ? "bg-white text-[#123b1d]" : "bg-brand-beige text-brand-navy")}>
                Join Membership
              </button>
              <div className={cn("mt-8 space-y-3 text-sm", plan.name === "Basic Plan" ? "text-white/72" : "text-brand-navy/60")}>
                <div>Unlimited operations</div>
                <div>Attendance and communication</div>
                <div>Weekly reports included</div>
              </div>
            </div>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}

export function AgencySplitHero({
  eyebrow,
  title,
  subtitle,
  image,
  actions,
  className,
}: BaseProps) {
  return (
    <section className={cn("relative overflow-hidden bg-[#f8f8f6] py-20", className)}>
      <div className="page-shell relative z-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionReveal>
          {eyebrow && (
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-teal/75">{eyebrow}</div>
          )}
          <h1 className="mt-6 max-w-lg text-[clamp(2.1rem,1.5rem+1.7vw,3.7rem)] font-bold leading-[1.02] text-brand-navy">
            {title}
          </h1>
          <div className="mt-5 h-1 w-16 rounded-full bg-brand-teal" />
          <p className="mt-6 max-w-lg text-base leading-8 text-brand-navy/65">{subtitle}</p>
          {actions && <div className="mt-8 flex flex-col gap-4 sm:flex-row">{actions}</div>}
        </SectionReveal>

        <SectionReveal delay={0.08} className="relative">
          <div className="absolute -left-10 top-1/2 hidden h-[120%] w-36 -translate-y-1/2 rounded-r-[999px] bg-[#e3e3df] lg:block" />
          <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(0,48,73,0.12)]">
            <img src={image} alt={title} className="w-full object-cover" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export function TechBackdropHero({
  eyebrow,
  title,
  subtitle,
  image,
  actions,
  className,
}: BaseProps) {
  return (
    <section className={cn("relative overflow-hidden py-28", className)}>
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,20,59,0.52),rgba(4,20,59,0.84))]" />
      </div>
      <div className="page-shell relative z-10">
        <SectionReveal className="mx-auto max-w-3xl text-center text-white">
          {eyebrow && (
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-beige">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-6 text-[clamp(2.1rem,1.5rem+1.6vw,3.5rem)] font-bold leading-[1.02]">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/78">{subtitle}</p>
          {actions && <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">{actions}</div>}
        </SectionReveal>
      </div>
    </section>
  );
}
