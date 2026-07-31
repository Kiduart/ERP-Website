import { ReactNode } from "react";
import { SectionReveal } from "@/components/ui/PageTransition";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { heroImageAlt, heroSrcSet, IMAGE_DIMENSIONS } from "@/lib/imageSeo";
import { cn } from "@/lib/utils";

function HeroPicture({
  image,
  alt,
  className,
  priority = false,
  dimensions = IMAGE_DIMENSIONS.heroWide,
  sizes = "100vw",
  wrapperClassName,
  decorative = false,
}: {
  image: string;
  alt: string;
  className?: string;
  priority?: boolean;
  dimensions?: { width: number; height: number };
  sizes?: string;
  wrapperClassName?: string;
  decorative?: boolean;
}) {
  const sources = heroSrcSet(image);
  const altText = decorative ? "" : alt;
  const imgProps = {
    ...(decorative
      ? { role: "presentation" as const, "aria-hidden": true }
      : {}),
    className,
    width: dimensions.width,
    height: dimensions.height,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    decoding: "async" as const,
    fetchPriority: priority ? ("high" as const) : ("auto" as const),
    sizes,
  };

  if (sources.webp || sources.avif) {
    return (
      <picture className={wrapperClassName}>
        {sources.avif && (
          <source srcSet={sources.avif} sizes={sizes} type="image/avif" />
        )}
        {sources.webp && (
          <source srcSet={sources.webp} sizes={sizes} type="image/webp" />
        )}
        <img src={sources.src} alt={altText} {...imgProps} />
      </picture>
    );
  }

  return <img src={image} alt={altText} {...imgProps} />;
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
    <section
      className={cn(
        "relative overflow-hidden bg-[linear-gradient(180deg,#ffffff,#faf8f0)] py-24",
        className,
      )}
    >
      <BackgroundBlobs
        blobs={[
          {
            color: "hsl(var(--blob-yellow))",
            size: 360,
            position: "top-left",
            opacity: 0.12,
          },
          {
            color: "hsl(var(--blob-teal))",
            size: 360,
            position: "bottom-right",
            opacity: 0.1,
          },
        ]}
      />
      <div className="page-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionReveal instant>
          {eyebrow && (
            <div className="inline-flex rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-teal">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-6 max-w-xl text-[clamp(2rem,1.25rem+1.75vw,3.3rem)] font-bold leading-[1.05] text-brand-navy">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-[clamp(1rem,0.95rem+0.16vw,1.06rem)] leading-8 text-brand-navy/[0.74]">
            {subtitle}
          </p>
          {actions && (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {actions}
            </div>
          )}
        </SectionReveal>

        <SectionReveal instant className="relative hidden lg:block">
          <div className="absolute right-4 top-6 h-24 w-24 rounded-full border border-brand-navy/[0.12]" />
          <div className="absolute -right-4 top-24 h-8 w-8 rounded-full bg-brand-orange/70" />
          <div className="absolute -left-2 bottom-8 h-10 w-10 rounded-full bg-brand-yellow/70 shadow-lg" />
          <div className="absolute left-6 top-12 h-56 w-56 rounded-full border border-brand-teal/[0.12]" />

          <div className="relative mx-auto w-[31rem]">
            <div className="absolute -right-2 top-10 h-[24rem] w-[24rem] rounded-full border-[10px] border-brand-navy/10 bg-white" />
            <div className="absolute bottom-8 left-0 z-20 rounded-[1.5rem] border border-brand-navy/10 bg-white px-6 py-5 shadow-xl">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">
                School-ready
              </div>
              <div className="mt-2 text-base font-semibold text-brand-navy">
                Designed for daily admin and classroom work
              </div>
            </div>
            <div className="relative z-10 ml-auto h-[27rem] w-[27rem] overflow-hidden rounded-full border-[10px] border-white bg-white shadow-[0_30px_80px_rgba(0,48,73,0.14)]">
              <HeroPicture
                image={image}
                alt={heroImageAlt(title)}
                priority
                dimensions={IMAGE_DIMENSIONS.heroWide}
                sizes="(max-width: 1024px) 0px, 432px"
                className="h-full w-full object-cover"
                wrapperClassName="block h-full w-full"
              />
            </div>
            <div className="absolute bottom-4 right-8 z-20 h-28 w-28 overflow-hidden rounded-full border-[6px] border-white bg-white shadow-xl">
              <HeroPicture
                image={image}
                alt=""
                decorative
                dimensions={IMAGE_DIMENSIONS.heroWide}
                sizes="112px"
                className="h-full w-full object-cover"
                wrapperClassName="block h-full w-full"
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
    <section
      className={cn(
        "relative overflow-hidden py-14 md:py-18",
        fullHeight && "hero-viewport flex items-center",
        className,
      )}
    >
      <div className="absolute inset-0">
        <HeroPicture
          image={image}
          alt={heroImageAlt(title)}
          priority
          className="h-full w-full object-cover"
          wrapperClassName="block h-full w-full"
          sizes="100vw"
        />
        <div className={cn("absolute inset-0", overlayClassName)} />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIcons icons={floatingIcons} count={5} heroMode={true} />
      </div>
      <div
        className={cn(
          "page-shell relative z-10 w-full",
          fullHeight && "hero-viewport-inner flex items-center",
        )}
      >
        <SectionReveal
          instant
          className={center ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}
        >
          {eyebrow && (
            <div className="inline-flex rounded-full border border-brand-navy/[0.12] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange-ink">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-6 text-[clamp(2rem,1.25rem+1.8vw,2.95rem)] font-bold leading-[1.04] text-brand-navy">
            {title}
          </h1>
          <p
            className={cn(
              "mt-5 text-[clamp(1rem,0.95rem+0.14vw,1.05rem)] leading-8 text-brand-navy/[0.72]",
              center && "mx-auto max-w-2xl",
            )}
          >
            {subtitle}
          </p>
          {actions && (
            <div
              className={cn(
                "mt-8 flex flex-col gap-4 sm:flex-row",
                center && "justify-center",
              )}
            >
              {actions}
            </div>
          )}
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
        <HeroPicture
          image={image}
          alt={heroImageAlt(title)}
          priority
          dimensions={IMAGE_DIMENSIONS.heroWide}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1600px"
          className="h-full w-full object-cover"
          wrapperClassName="absolute inset-0 block h-full w-full [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
        />
        {/* Light haze only  keeps the photo, logo and navbar readable instead of darkening the page */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(252,249,240,0.18)_45%,rgba(255,255,255,0.38)_100%)]" />
        {/* Feathered wash behind the copy  no card edge, so the classroom stays visible around it */}
        <div className="absolute inset-0 bg-[radial-gradient(58%_46%_at_50%_54%,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.4)_58%,rgba(255,255,255,0)_100%)]" />
      </div>

      <div className="page-shell relative z-20 flex min-h-screen items-center justify-center pb-16 pt-36 md:pt-40">
        <SectionReveal instant className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-brand-teal/40 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-brand-navy backdrop-blur-sm">
            AI school ERP platform
          </div>
          {/* White halo instead of a panel: dark brand text stays legible over the photo's busy areas */}
          <h1 className="mx-auto mt-6 max-w-3xl text-[clamp(2.05rem,1.4rem+1.7vw,3.35rem)] font-bold leading-[1.06] text-brand-navy [text-shadow:0_1px_0_rgba(255,255,255,0.9),0_2px_16px_rgba(255,255,255,0.95)]">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[clamp(1rem,0.95rem+0.14vw,1.08rem)] font-medium leading-8 text-brand-navy/[0.88] [text-shadow:0_1px_0_rgba(255,255,255,0.9),0_1px_12px_rgba(255,255,255,0.95)]">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {actions}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

type BankingContactHeroProps = BaseProps & {
  /** Floating labels around the portrait  school-ops chips for contact */
  chips?: { label: string; className: string }[];
  assurances?: string[];
};

const DEFAULT_CONTACT_CHIPS = [
  { label: "Demo ready", className: "left-0 top-[34%]" },
  { label: "Noida team", className: "right-2 top-[22%]" },
  { label: "Same-day reply", className: "left-4 top-[10%]" },
  { label: "No lock-in", className: "right-8 bottom-[12%]" },
];

const DEFAULT_ASSURANCES = [
  "Fast response",
  "Live demo support",
  "Guided setup",
  "Role-based access",
];

export function BankingContactHero({
  eyebrow,
  title,
  subtitle,
  image,
  actions,
  className,
  chips = DEFAULT_CONTACT_CHIPS,
  assurances = DEFAULT_ASSURANCES,
}: BankingContactHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[linear-gradient(165deg,#fbfaf6_0%,#f3f7f8_48%,#eef5f4_100%)] py-16 md:py-24",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-teal/[0.08] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-brand-yellow/20 blur-3xl"
      />

      <div className="page-shell relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-12">
        <SectionReveal instant className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-[30rem]">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/[0.12]" />
            <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-navy/[0.06]" />
            <div className="relative mx-auto h-74 w-74 overflow-hidden rounded-full border-[12px] border-white shadow-[0_30px_70px_rgba(0,48,73,0.14)] ring-1 ring-brand-navy/[0.04]">
              <HeroPicture
                image={image}
                alt={heroImageAlt(title)}
                priority
                dimensions={IMAGE_DIMENSIONS.heroWide}
                sizes="(max-width: 640px) 90vw, 480px"
                className="h-full w-full object-cover"
                wrapperClassName="block h-full w-full"
              />
            </div>
            {chips.map((chip) => (
              <div
                key={chip.label}
                className={cn(
                  "absolute rounded-full border border-brand-navy/[0.06] bg-white/95 px-4 py-2 text-xs font-semibold text-brand-navy shadow-lg backdrop-blur-sm",
                  chip.className,
                )}
              >
                {chip.label}
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal instant className="order-1 lg:order-2">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal shadow-sm">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand-teal"
                aria-hidden="true"
              />
              {eyebrow}
            </div>
          )}
          <h1 className="mt-6 max-w-lg text-[clamp(2rem,1.45rem+1.45vw,3.4rem)] font-bold leading-[1.02] tracking-tight text-brand-navy">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-brand-navy/[0.68]">
            {subtitle}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {assurances.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-brand-navy/[0.08] bg-white/90 px-5 py-4 text-sm font-semibold text-brand-navy shadow-sm backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
          {actions && (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {actions}
            </div>
          )}
        </SectionReveal>
      </div>
    </section>
  );
}
