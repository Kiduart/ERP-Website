import HERO_VARIANTS from "@/data/heroImageVariants.json";

/** Hero / primary image alt: heading plus brand context */
export function heroImageAlt(title: string): string {
  return `${title} - KIDUART School ERP`;
}

export const IMAGE_DIMENSIONS = {
  heroWide: { width: 1920, height: 1080 },
  heroPortrait: { width: 480, height: 522 },
  cardLandscape: { width: 800, height: 520 },
  storyCard: { width: 256, height: 368 },
  carouselCard: { width: 288, height: 368 },
  teamPanel: { width: 400, height: 288 },
  avatar: { width: 48, height: 48 },
  dashboard: { width: 1200, height: 750 },
  logo: { width: 512, height: 160 },
} as const;

/**
 * Prefer modern formats when available for static hero assets.
 * Variants come from `npm run build:heroes`.
 */
export function heroSrcSet(src: string): {
  src: string;
  webp?: string;
  avif?: string;
} {
  const variants = (
    HERO_VARIANTS as Record<string, { avif?: string; webp?: string }>
  )[src];
  if (variants) {
    return { src, avif: variants.avif, webp: variants.webp };
  }
  return { src };
}

type ImageDimensions = { width: number; height: number };

/** Above-the-fold images: explicit dimensions, no lazy load */
export function heroImgProps(
  dimensions: ImageDimensions = IMAGE_DIMENSIONS.heroWide,
) {
  return {
    width: dimensions.width,
    height: dimensions.height,
    loading: "eager" as const,
    decoding: "async" as const,
    fetchPriority: "high" as const,
  };
}

/** Below-the-fold images: lazy load + dimensions for CLS */
export function lazyImgProps(dimensions: ImageDimensions) {
  return {
    width: dimensions.width,
    height: dimensions.height,
    loading: "lazy" as const,
    decoding: "async" as const,
  };
}

/** Decorative images (duplicates, ornaments)  empty alt is valid */
export const decorativeImgProps = {
  alt: "",
  role: "presentation" as const,
  "aria-hidden": true,
} as const;

const BANNER_ALT_BY_FILE: Record<string, string> = {
  "solution-hero-1.jpg":
    "School principal reviewing analytics on the KIDUART ERP dashboard",
  "solution-hero-2.jpg":
    "Teacher marking student attendance with KIDUART on a tablet in class",
  "solution-hero-3.jpg":
    "School administrators coordinating admissions and daily operations in KIDUART",
  "blog-hero.avif":
    "Educators reading KIDUART blog insights on school management and EdTech",
  "blog-post-1.jpg":
    "School leadership team planning digital operations with education technology",
  "blog-post-2.jpg":
    "Teachers collaborating on classroom workflows supported by school ERP software",
  "blog-post-3.jpg":
    "Parents and school staff using communication tools for student updates",
  "blog-post-4.jpg":
    "Finance staff tracking school fee collection on an administrative dashboard",
  "blog-post-5.jpg":
    "Students and teachers in a modern Indian school campus environment",
  "blog-post-6.jpg":
    "School administrator reviewing reports on a laptop in the office",
  "platform-hero.jpg":
    "Role-based KIDUART school ERP dashboards shown on desktop screens",
  "features-hero.jpg":
    "Overview of KIDUART school management modules on one dashboard",
  "security-hero.jpg":
    "Secure school data protection and encrypted cloud infrastructure visualization",
  "contact-post-1.jpg":
    "KIDUART support team helping a school with ERP onboarding in India",
  "career-post-1.jpg":
    "KIDUART product and engineering team building school ERP software in India",
  "home-hero.jpeg":
    "Indian school campus using KIDUART ERP for daily administration",
  "stories-post-1.jpg":
    "School principal reviewing administrative dashboard on KIDUART ERP",
  "stories-post-2.jpg":
    "School staff improving operational workflows with KIDUART",
  "stories-post-3.jpg":
    "Multi-campus school team using KIDUART ERP for daily management",
  "stories-post-4.jpg":
    "School finance team streamlining fee and records with KIDUART",
  "stories-post-5.jpg":
    "School district administrators managing multiple campuses on KIDUART",
};

export function bannerAltFromSrc(src: string, fallback: string): string {
  const filename = src.split("/").pop() ?? "";
  return BANNER_ALT_BY_FILE[filename] ?? fallback;
}

export function solutionCarouselAlt(src: string): string {
  return bannerAltFromSrc(
    src,
    "KIDUART school ERP solution preview screenshot",
  );
}

export function customerStoryImageAlt(
  schoolName: string,
  headline: string,
): string {
  return `${schoolName}: ${headline}`;
}

export function testimonialAvatarAlt(name: string, role: string): string {
  return `Portrait of ${name}, ${role}`;
}

export function featureDashboardAlt(featureTitle: string): string {
  return `KIDUART ${featureTitle} module dashboard preview`;
}
