import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { BlogArticleBody } from "@/components/blog/BlogArticleBody";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { type BlogListingPost } from "@/data/blogData";
import { getBlogHeroImage, getCmsBlogListingPosts, getCmsBlogPost } from "@/lib/cms/content";
import type { ContentMeta } from "@/lib/cms/types";
import { blogPostPageSeo } from "@/lib/pageSeo";
import { buildArticleSchema } from "@/lib/seoSchemas";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "wouter";
import type { GetStaticPaths, GetStaticProps } from "next";

type BlogPostPageProps = {
  post: BlogListingPost | null;
  listingPosts: BlogListingPost[];
  contentMeta: ContentMeta;
};

export default function BlogPostPage({ post, listingPosts }: BlogPostPageProps) {

  if (!post) {
    return (
      <PageTransition className="flex min-h-[60vh] flex-col items-center justify-center pb-24 pt-32 text-center">
        <h1 className="mb-6 text-4xl font-bold text-brand-navy">Article not found</h1>
        <p className="mb-8 text-xl text-brand-navy/70">This blog post does not exist or has been moved.</p>
        <Link href="/blog" className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-8 py-4 font-bold text-white">
          <ArrowLeft className="h-5 w-5" /> Back to Blog
        </Link>
      </PageTransition>
    );
  }

  const imageIndex = listingPosts.findIndex((p) => p.slug === post.slug);
  const heroImage = getBlogHeroImage(post, Math.max(0, imageIndex));
  const postMap = new Map(listingPosts.map((item) => [item.slug, item]));
  const related = post.relatedSlugs
    .map((relatedSlug) => postMap.get(relatedSlug) ?? null)
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .slice(0, 3);

  return (
    <>
      <PageSeoHead {...blogPostPageSeo(post.slug, post.title, post.excerpt)} />
      <SchemaMarkup
        data={buildArticleSchema({
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          author: post.author,
          date: post.date,
        })}
      />

      <PageTransition className="pt-20 pb-0">
        <section className="section-space-tight border-b border-brand-navy/10 bg-brand-beige/30">
          <div className="page-shell">
            <Link href="/blog" className="mb-8 inline-flex items-center text-sm font-bold uppercase tracking-wide text-brand-teal hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
            <SectionReveal>
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${post.badgeColor}`}>{post.category}</span>
              <h1 className="mt-6 max-w-4xl text-[clamp(2rem,1.5rem+2vw,3.25rem)] font-extrabold leading-tight text-brand-navy">
                {post.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium text-brand-navy/60">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span>{post.author}</span>
                <span>{post.readTime}</span>
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="section-space bg-white">
          <div className="page-shell">
            <div className="mx-auto max-w-3xl">
              <SectionReveal>
                <div className="mb-10 overflow-hidden rounded-[1.75rem] border border-brand-navy/10">
                  <img src={heroImage} alt="" className="h-56 w-full object-cover md:h-72" />
                </div>
                <BlogArticleBody content={post.content} />
              </SectionReveal>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section-space border-t border-brand-navy/10 bg-[#eef2f3]">
            <div className="page-shell">
              <SectionReveal>
                <h2 className="text-2xl font-bold text-brand-navy">Related articles</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5"
                    >
                      <span className="text-xs font-bold uppercase tracking-wide text-brand-teal">{item.category}</span>
                      <h3 className="mt-3 text-lg font-bold text-brand-navy">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">{item.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </section>
        )}

        <CtaSection />
      </PageTransition>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await getCmsBlogListingPosts();
  return {
    paths: result.data.map((post) => ({ params: { slug: post.slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async (context) => {
  const preview = context.preview ?? false;
  const slug = typeof context.params?.slug === "string" ? context.params.slug : "";
  if (!slug) return { notFound: true };

  const [postResult, listingResult] = await Promise.all([
    getCmsBlogPost(slug, { preview }),
    getCmsBlogListingPosts({ preview }),
  ]);

  if (!postResult.data) return { notFound: true, revalidate: preview ? 1 : 120 };

  return {
    props: {
      post: postResult.data,
      listingPosts: listingResult.data,
      contentMeta: postResult.meta,
    },
    revalidate: preview ? 1 : 300,
  };
};
