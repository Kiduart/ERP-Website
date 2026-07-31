import { BLOG_POST_IMAGES, getBlogListingPosts, getBlogPost, type BlogListingPost } from "@/data/blogData";
import {
  careersBenefits,
  careersHero,
  careersValues,
  careersWorkText,
  hiringSteps,
  openRoles,
  roleCategories,
  type CareersBenefit,
  type CareersIconName,
  type CareersValueCard,
  type HiringStep,
} from "@/data/careersData";
import { customerStories, type CustomerStory } from "@/data/customerStoriesData";
import { blogListingQuery, blogPostBySlugQuery, careersPageQuery, customerStoriesQuery } from "@/lib/cms/queries";
import { getSanityClient, isSanityConfigured } from "@/lib/cms/sanityClient";
import { buildContentMeta, type ContentMeta, type CmsContentSource } from "@/lib/cms/types";

type CmsFetchOptions = {
  preview?: boolean;
};

type SanityBlogPost = Omit<BlogListingPost, "color" | "badgeColor" | "date"> & {
  date: string | Date;
  imageUrl?: string;
  updatedAt?: string;
};

type CmsResult<T> = {
  data: T;
  meta: ContentMeta;
};

const categoryStyleMap: Record<string, { color: string; badgeColor: string }> = {
  "AI in Education": { color: "from-brand-teal/20 to-brand-navy/20", badgeColor: "bg-brand-teal text-white" },
  "School Management": { color: "from-brand-orange/20 to-brand-yellow/20", badgeColor: "bg-brand-orange text-white" },
  "Education Technology": { color: "from-brand-navy/20 to-brand-teal/20", badgeColor: "bg-brand-navy text-white" },
  "Student Success": { color: "from-brand-teal/20 to-brand-orange/20", badgeColor: "bg-brand-teal text-white" },
};

function normalizeDate(input: string | Date): string {
  if (typeof input === "string") return input;
  return input.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function latestUpdatedAt(values: Array<string | undefined | null>): string | null {
  const timestamps = values.filter((value): value is string => Boolean(value));
  if (!timestamps.length) return null;
  return timestamps.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0] ?? null;
}

function toBlogListingPost(item: SanityBlogPost): BlogListingPost {
  const style = categoryStyleMap[item.category] ?? { color: "from-brand-teal/20 to-brand-orange/20", badgeColor: "bg-brand-teal text-white" };
  return { ...item, date: normalizeDate(item.date), color: style.color, badgeColor: style.badgeColor };
}

function wrapResult<T>(data: T, source: CmsContentSource, preview: boolean, updatedAt?: string | null): CmsResult<T> {
  return {
    data,
    meta: buildContentMeta({ source, preview, updatedAt }),
  };
}

export async function getCmsBlogListingPosts(options: CmsFetchOptions = {}): Promise<CmsResult<BlogListingPost[]>> {
  const preview = options.preview ?? false;
  const fallback = getBlogListingPosts();

  if (!isSanityConfigured) {
    return wrapResult(fallback, "local", preview);
  }

  const client = getSanityClient(preview);
  if (!client) {
    return wrapResult(fallback, "local", preview);
  }

  try {
    const posts = await client.fetch<SanityBlogPost[]>(blogListingQuery);
    if (!posts?.length) {
      return wrapResult(fallback, "local", preview);
    }

    return wrapResult(
      posts.map(toBlogListingPost),
      "sanity",
      preview,
      latestUpdatedAt(posts.map((post) => post.updatedAt)),
    );
  } catch (error) {
    console.warn("Falling back to local blog content.", error);
    return wrapResult(fallback, "local", preview);
  }
}

export async function getCmsBlogPost(slug: string, options: CmsFetchOptions = {}): Promise<CmsResult<BlogListingPost | null>> {
  const preview = options.preview ?? false;
  const fallback = getBlogPost(slug);

  if (!isSanityConfigured) {
    return wrapResult(fallback, "local", preview);
  }

  const client = getSanityClient(preview);
  if (!client) {
    return wrapResult(fallback, "local", preview);
  }

  try {
    const post = await client.fetch<SanityBlogPost | null>(blogPostBySlugQuery, { slug });
    if (!post) {
      return wrapResult(null, "sanity", preview);
    }

    return wrapResult(toBlogListingPost(post), "sanity", preview, post.updatedAt ?? null);
  } catch (error) {
    console.warn(`Falling back to local blog post for slug ${slug}.`, error);
    return wrapResult(fallback, "local", preview);
  }
}

export async function getCmsCustomerStories(options: CmsFetchOptions = {}): Promise<CmsResult<CustomerStory[]>> {
  const preview = options.preview ?? false;

  if (!isSanityConfigured) {
    return wrapResult(customerStories, "local", preview);
  }

  const client = getSanityClient(preview);
  if (!client) {
    return wrapResult(customerStories, "local", preview);
  }

  try {
    const stories = await client.fetch<Array<CustomerStory & { updatedAt?: string }>>(customerStoriesQuery);
    if (!stories?.length) {
      return wrapResult(customerStories, "local", preview);
    }

    return wrapResult(
      stories,
      "sanity",
      preview,
      latestUpdatedAt(stories.map((story) => story.updatedAt)),
    );
  } catch (error) {
    console.warn("Falling back to local customer stories.", error);
    return wrapResult(customerStories, "local", preview);
  }
}

type CareersPageContent = {
  hero: typeof careersHero;
  values: CareersValueCard[];
  workText: typeof careersWorkText;
  benefits: CareersBenefit[];
  openRoles: typeof openRoles;
  roleCategories: string[];
  hiringSteps: HiringStep[];
};

function isAllowedIcon(icon: string): icon is CareersIconName {
  return ["Laptop", "Heart", "BookOpen", "Rocket", "Briefcase", "Smile"].includes(icon);
}

function sanitizeIconCard<T extends { icon: string; title: string; desc: string }>(item: T): { icon: CareersIconName; title: string; desc: string } {
  return { icon: isAllowedIcon(item.icon) ? item.icon : "Briefcase", title: item.title, desc: item.desc };
}

export async function getCmsCareersPage(options: CmsFetchOptions = {}): Promise<CmsResult<CareersPageContent>> {
  const preview = options.preview ?? false;
  const fallback: CareersPageContent = {
    hero: careersHero,
    values: careersValues,
    workText: careersWorkText,
    benefits: careersBenefits,
    openRoles,
    roleCategories,
    hiringSteps,
  };

  if (!isSanityConfigured) {
    return wrapResult(fallback, "local", preview);
  }

  const client = getSanityClient(preview);
  if (!client) {
    return wrapResult(fallback, "local", preview);
  }

  try {
    const page = await client.fetch<{
      hero?: typeof careersHero;
      values?: Array<{ icon: string; title: string; desc: string }>;
      workText?: typeof careersWorkText;
      benefits?: Array<{ icon: string; title: string; desc: string }>;
      openRoles?: typeof openRoles;
      roleCategories?: string[];
      hiringSteps?: HiringStep[];
      updatedAt?: string;
    } | null>(careersPageQuery);

    if (!page) {
      return wrapResult(fallback, "local", preview);
    }

    return wrapResult(
      {
        hero: page.hero ?? fallback.hero,
        values: page.values?.length ? page.values.map(sanitizeIconCard) : fallback.values,
        workText: page.workText ?? fallback.workText,
        benefits: page.benefits?.length ? page.benefits.map(sanitizeIconCard) : fallback.benefits,
        openRoles: page.openRoles ?? fallback.openRoles,
        roleCategories: page.roleCategories?.length ? page.roleCategories : fallback.roleCategories,
        hiringSteps: page.hiringSteps?.length ? page.hiringSteps : fallback.hiringSteps,
      },
      "sanity",
      preview,
      page.updatedAt ?? null,
    );
  } catch (error) {
    console.warn("Falling back to local careers content.", error);
    return wrapResult(fallback, "local", preview);
  }
}

export function getBlogHeroImage(post: BlogListingPost, index: number): string {
  const imageUrl = (post as BlogListingPost & { imageUrl?: string }).imageUrl;
  if (imageUrl) return imageUrl;
  if (post.coverImage) return post.coverImage;
  return BLOG_POST_IMAGES[index % BLOG_POST_IMAGES.length];
}
