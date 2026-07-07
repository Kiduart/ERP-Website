import {
  limits,
  requiredArray,
  requiredIcon,
  requiredNumber,
  requiredString,
  requiredText,
  requiredUrl,
} from "./validation";

const iconNames = ["Laptop", "Heart", "BookOpen", "Rocket", "Briefcase", "Smile"];

const iconCardFields = [
  {
    name: "icon",
    title: "Icon",
    type: "string",
    options: { list: iconNames },
    validation: (Rule: { required: () => unknown }) => requiredIcon(Rule as never),
  },
  {
    name: "title",
    title: "Title",
    type: "string",
    validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
      requiredString(Rule as never, limits.cardTitle),
  },
  {
    name: "desc",
    title: "Description",
    type: "text",
    rows: 3,
    validation: (Rule: { required: () => { min: (n: number) => { max: (n: number) => unknown } } }) =>
      requiredText(Rule as never, 20, limits.cardDesc),
  },
];

export default {
  name: "careersPage",
  title: "Careers Page",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
      fields: [
        {
          name: "kicker",
          title: "Kicker",
          type: "string",
          validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
            requiredString(Rule as never, limits.kicker),
        },
        {
          name: "heading",
          title: "Heading (use line breaks)",
          type: "text",
          rows: 3,
          validation: (Rule: { required: () => { min: (n: number) => { max: (n: number) => unknown } } }) =>
            requiredText(Rule as never, 10, limits.heroHeading),
        },
        {
          name: "body",
          title: "Body",
          type: "text",
          rows: 4,
          validation: (Rule: { required: () => { min: (n: number) => { max: (n: number) => unknown } } }) =>
            requiredText(Rule as never, 40, limits.heroBody),
        },
        {
          name: "image",
          title: "Hero Image URL",
          type: "url",
          validation: (Rule: { required: () => { uri: (o: { scheme: string[] }) => unknown } }) =>
            requiredUrl(Rule as never),
        },
        {
          name: "imageAlt",
          title: "Hero Image Alt",
          type: "string",
          validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
            requiredString(Rule as never, limits.imageAlt),
        },
      ],
    },
    {
      name: "values",
      title: "Value Cards",
      type: "array",
      of: [{ type: "object", fields: iconCardFields }],
      validation: (Rule: { required: () => { min: (n: number) => { max: (n: number) => unknown } } }) =>
        requiredArray(Rule as never, 1, 6),
    },
    {
      name: "workText",
      title: "How We Work",
      type: "object",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
          validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
            requiredString(Rule as never, limits.sectionHeading),
        },
        {
          name: "body",
          title: "Body",
          type: "text",
          rows: 5,
          validation: (Rule: { required: () => { min: (n: number) => { max: (n: number) => unknown } } }) =>
            requiredText(Rule as never, 40, limits.sectionBody),
        },
      ],
    },
    {
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "object", fields: iconCardFields }],
      validation: (Rule: { required: () => { min: (n: number) => { max: (n: number) => unknown } } }) =>
        requiredArray(Rule as never, 1, 12),
    },
    {
      name: "openRoles",
      title: "Open Roles Section",
      type: "object",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
      fields: [
        {
          name: "heading",
          title: "Heading",
          type: "string",
          validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
            requiredString(Rule as never, limits.sectionHeading),
        },
        {
          name: "stateTitle",
          title: "State Title",
          type: "string",
          validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
            requiredString(Rule as never, limits.cardTitle),
        },
        {
          name: "stateBody",
          title: "State Body",
          type: "text",
          rows: 4,
          validation: (Rule: { required: () => { min: (n: number) => { max: (n: number) => unknown } } }) =>
            requiredText(Rule as never, 40, limits.sectionBody),
        },
        {
          name: "ctaLabel",
          title: "CTA Label",
          type: "string",
          validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
            requiredString(Rule as never, limits.ctaLabel),
        },
        {
          name: "ctaHref",
          title: "CTA Link",
          type: "string",
          validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
            requiredString(Rule as never, limits.ctaHref),
        },
        {
          name: "categoriesHeading",
          title: "Role Categories Heading",
          type: "string",
          validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
            requiredString(Rule as never, limits.sectionHeading),
        },
      ],
    },
    {
      name: "roleCategories",
      title: "Role Categories",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: { required: () => { min: (n: number) => { max: (n: number) => unknown } } }) =>
        requiredArray(Rule as never, 1, 12),
    },
    {
      name: "hiringSteps",
      title: "Hiring Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "step",
              title: "Step Number",
              type: "string",
              validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
                requiredString(Rule as never, 4),
            },
            {
              name: "title",
              title: "Step Title",
              type: "string",
              validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
                requiredString(Rule as never, limits.stepTitle),
            },
            {
              name: "desc",
              title: "Step Description",
              type: "string",
              validation: (Rule: { required: () => { max: (n: number) => unknown } }) =>
                requiredString(Rule as never, limits.stepDesc),
            },
          ],
        },
      ],
      validation: (Rule: { required: () => { min: (n: number) => { max: (n: number) => unknown } } }) =>
        requiredArray(Rule as never, 1, 6),
    },
  ],
  preview: {
    prepare: () => ({ title: "Careers Page" }),
  },
};
