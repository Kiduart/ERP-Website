import groq from "groq";

export const blogListingQuery = groq`
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc){
    "slug": slug.current,
    title,
    author,
    "date": coalesce(displayDate, publishedAt),
    category,
    readTime,
    excerpt,
    content,
    relatedSlugs,
    "imageUrl": heroImage.asset->url,
    "updatedAt": _updatedAt
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0]{
    "slug": slug.current,
    title,
    author,
    "date": coalesce(displayDate, publishedAt),
    category,
    readTime,
    excerpt,
    content,
    relatedSlugs,
    "imageUrl": heroImage.asset->url,
    "updatedAt": _updatedAt
  }
`;

export const customerStoriesQuery = groq`
  *[_type == "customerStory" && defined(slug.current)] | order(orderRank asc){
    "slug": slug.current,
    initial,
    name,
    location,
    type,
    title,
    summary,
    stat,
    color,
    "image": coalesce(heroImage.asset->url, imageUrl),
    "updatedAt": _updatedAt
  }
`;

export const careersPageQuery = groq`
  *[_type == "careersPage"][0]{
    hero,
    values[] {
      icon,
      title,
      desc
    },
    workText,
    benefits[] {
      icon,
      title,
      desc
    },
    openRoles,
    roleCategories,
    hiringSteps[] {
      step,
      title,
      desc
    },
    "updatedAt": _updatedAt
  }
`;
