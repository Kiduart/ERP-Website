import { limits, requiredNumber, requiredSlug, requiredString, requiredText } from "./validation";

const schoolTypes = [
  "K-12",
  "Higher Secondary",
  "School District",
  "Private School",
  "Religious Institution",
  "International School",
];

export default {
  name: "customerStory",
  title: "Customer Story",
  type: "document",
  fields: [
    {
      name: "name",
      title: "School Name",
      type: "string",
      validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
        requiredString(Rule as never, limits.schoolName),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: limits.slug },
      validation: (Rule: { required: () => unknown }) => requiredSlug(Rule as never),
    },
    {
      name: "initial",
      title: "Initial",
      type: "string",
      description: "Single letter shown on the story card.",
      validation: (Rule: { required: () => { length: (n: number) => unknown } }) =>
        Rule.required().length(limits.initial),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
        requiredString(Rule as never, limits.location),
    },
    {
      name: "type",
      title: "School Type",
      type: "string",
      options: { list: schoolTypes },
      validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
        requiredString(Rule as never, limits.schoolType),
    },
    {
      name: "title",
      title: "Headline",
      type: "string",
      validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
        requiredString(Rule as never, limits.headline),
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4,
      validation: (Rule: { required: () => { min: (n: number) => { max: (n: number) => unknown } } }) =>
        requiredText(Rule as never, 40, limits.summary),
    },
    {
      name: "stat",
      title: "Impact Text",
      type: "string",
      validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
        requiredString(Rule as never, limits.impact),
    },
    {
      name: "color",
      title: "Gradient Classes",
      type: "string",
      description: 'Tailwind gradient classes, e.g. "from-brand-teal to-brand-navy".',
      validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
        requiredString(Rule as never, limits.gradient),
    },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "imageUrl",
      title: "Fallback Image URL",
      type: "url",
      description: "Used when no uploaded image is set.",
    },
    {
      name: "orderRank",
      title: "Order",
      type: "number",
      validation: (Rule: { required: () => { min: (n: number) => { max: (n: number) => unknown } } }) =>
        requiredNumber(Rule as never),
    },
  ],
  preview: {
    select: { title: "name", subtitle: "type", media: "heroImage" },
  },
};
