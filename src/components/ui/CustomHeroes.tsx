import { ReactNode } from "react";
import Image from "next/image";
import { SectionReveal } from "@/components/ui/PageTransition";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { heroImageAlt, heroImgProps, heroSrcSet, IMAGE_DIMENSIONS, lazyImgProps } from "@/lib/imageSeo";
import { cn } from "@/lib/utils";

function HeroPicture({
  image,
  alt,
  className,
  priority = false,
  dimensions = IMAGE_DIMENSIONS.heroWide,
}: {
  image: string;
  alt: string;
  className?: string;
  priority?: boolean;
  dimensions?: { width: number; height: number };
}) {
  const sources = heroSrcSet(image);

  if (sources.webp || sources.avif) {
    return (
      <picture className="absolute inset-0 block h-full w-full">
        {sources.avif && <source srcSet={sources.avif} type="image/avif" />}
        {sources.webp && <source srcSet={sources.webp} type="image/webp" />}
        <img
          src={sources.src}
          alt={alt}
          className={className}
          width={dimensions.width}
          height={dimensions.height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      </picture>
    );
  }

  return (
    <img
      src={image}
      alt={alt}
      className={className}
      width={dimensions.width}
      height={dimensions.height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}

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
              <img
                src={image}
                alt={heroImageAlt(title)}
                className="h-full w-full object-cover"
                {...heroImgProps(IMAGE_DIMENSIONS.heroPortrait)}
              />
            </div>
            <div className="absolute bottom-4 right-8 z-20 h-28 w-28 overflow-hidden rounded-full border-[6px] border-white bg-white shadow-xl">
              <img
                src={image}
                alt=""
                role="presentation"
                aria-hidden
                {...lazyImgProps(IMAGE_DIMENSIONS.avatar)}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </SectionReveal>
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
        <img
          src={image}
          alt={heroImageAlt(title)}
          className="h-full w-full object-cover"
          {...heroImgProps(IMAGE_DIMENSIONS.heroWide)}
        />
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
        <Image
          src={image}
          alt={heroImageAlt(title)}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Opaque-enough navy scrim so cream hero text stays AA-compliant over bright photo regions */}
        <div className="absolute inset-0 bg-[#003049]/88" />
      </div>

      <FloatingIcons icons={["LayoutDashboard", "Users", "BarChart2"]} count={6} heroMode={true} />

      <div className="page-shell relative z-20 flex min-h-screen items-center justify-center pb-16 pt-36 md:pt-40">
        <SectionReveal instant className="mx-auto max-w-4xl text-center text-brand-beige">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-brand-yellow backdrop-blur-sm">
            AI school ERP platform
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl text-[clamp(2rem,1.35rem+1.55vw,3.1rem)] font-bold leading-[1.05] text-brand-beige [font-synthesis:none] font-[system-ui]">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[clamp(1rem,0.95rem+0.14vw,1.05rem)] leading-8 text-brand-beige/95">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">{actions}</div>
        </SectionReveal>
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
            <div className="relative mx-auto h-74 w-74 overflow-hidden rounded-full border-[12px] border-white shadow-[0_30px_70px_rgba(0,48,73,0.12)]">
              <img
                src={image}
                alt={heroImageAlt(title)}
                className="h-full w-full object-cover"
                {...heroImgProps(IMAGE_DIMENSIONS.heroPortrait)}
              />
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
