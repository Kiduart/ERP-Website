import { limits, optionalArray, requiredArray, requiredSlug, requiredString, requiredText } from "./validation";

export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
        requiredString(Rule as never, limits.title),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: limits.slug },
      validation: (Rule: { required: () => unknown }) => requiredSlug(Rule as never),
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
        requiredString(Rule as never, limits.author),
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "displayDate",
      title: "Display Date",
      type: "string",
      description: "Optional human-readable date shown on the site (e.g. March 5, 2026).",
      validation: (Rule: { max: (n: number) => unknown }) => Rule.max(limits.displayDate),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Education Technology", "School Management", "AI in Education", "Student Success"],
      },
      validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
        requiredString(Rule as never, limits.category),
    },
    {
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: 'Example: "8 min read"',
      validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
        requiredString(Rule as never, limits.readTime),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule: { required: () => { min: (n: number) => { max: (n: number) => unknown } } }) =>
        requiredText(Rule as never, 40, limits.excerpt),
    },
    {
      name: "content",
      title: "Content (Markdown)",
      type: "text",
      rows: 20,
      validation: (Rule: { required: () => { min: (n: number) => unknown } }) =>
        requiredText(Rule as never, limits.markdownMin, 50000),
    },
    {
      name: "relatedSlugs",
      title: "Related Slugs",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: { max: (n: number) => unknown }) => optionalArray(Rule as never, 6),
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "heroImage" },
  },
};
