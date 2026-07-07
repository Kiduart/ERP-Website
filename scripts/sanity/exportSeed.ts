import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { blogData, getBlogListingPosts } from "../../src/data/blogData";
import { customerStories } from "../../src/data/customerStoriesData";
import { careersBenefits, careersHero, careersValues, careersWorkText, hiringSteps, openRoles, roleCategories } from "../../src/data/careersData";

function toIsoDate(displayDate: string): string {
  const parsed = new Date(displayDate);
  if (Number.isNaN(parsed.getTime())) return new Date().toISOString();
  return parsed.toISOString();
}

const blogDocs = getBlogListingPosts().map((post, index) => ({
  _id: `blogPost.${post.slug}`,
  _type: "blogPost",
  title: post.title,
  slug: { _type: "slug", current: post.slug },
  author: post.author,
  publishedAt: toIsoDate(post.date),
  displayDate: post.date,
  category: post.category,
  readTime: post.readTime,
  excerpt: post.excerpt,
  content: post.content,
  relatedSlugs: post.relatedSlugs,
  legacyImage: `/images/banner/blog-post-${(index % 6) + 1}.jpg`,
}));

const storyDocs = customerStories.map((story, index) => ({
  _id: `customerStory.${story.slug}`,
  _type: "customerStory",
  name: story.name,
  slug: { _type: "slug", current: story.slug },
  initial: story.initial,
  location: story.location,
  type: story.type,
  title: story.title,
  summary: story.summary,
  stat: story.stat,
  color: story.color,
  imageUrl: story.image,
  orderRank: index,
}));

const careersDoc = {
  _id: "careersPage.main",
  _type: "careersPage",
  hero: careersHero,
  values: careersValues,
  workText: careersWorkText,
  benefits: careersBenefits,
  openRoles,
  roleCategories,
  hiringSteps,
};

const docs = [...blogDocs, ...storyDocs, careersDoc];
const ndjson = docs.map((doc) => JSON.stringify(doc)).join("\n");

const outputDir = resolve(process.cwd(), "sanity/seed");
mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, "seed.ndjson"), ndjson, "utf-8");

console.log(`Exported ${docs.length} documents to sanity/seed/seed.ndjson`);
console.log(`Migrated blog posts: ${Object.keys(blogData).length}, customer stories: ${customerStories.length}, careers page: 1`);
