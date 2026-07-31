import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { BlogArticleBody, extractToc } from "@/components/blog/BlogArticleBody";
import { BlogToc } from "@/components/blog/BlogToc";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { InView } from "@/components/ui/InView";
import { Stagger } from "@/components/ui/Stagger";
import { CtaSection } from "@/components/ui/CtaSection";
import { type BlogListingPost } from "@/data/blogData";
import {
  getBlogHeroImage,
  getCmsBlogListingPosts,
  getCmsBlogPost,
} from "@/lib/cms/content";
import type { ContentMeta } from "@/lib/cms/types";
import { blogPostPageSeo } from "@/lib/pageSeo";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/seoSchemas";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock3,
  Tag,
  UserRound,
} from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";

type BlogPostPageProps = {
  post: BlogListingPost | null;
  listingPosts: BlogListingPost[];
  contentMeta: ContentMeta;
};

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const article = document.getElementById("blog-article");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = article.offsetHeight - window.innerHeight;
      if (total <= 0) {
        setProgress(100);
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(Math.round((scrolled / total) * 100));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="blog-read-progress" aria-hidden="true">
      <div
        className="blog-read-progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function BlogPostPage({
  post,
  listingPosts,
}: BlogPostPageProps) {
  if (!post) {
    return (
      <PageTransition className="flex min-h-[60vh] flex-col items-center justify-center pb-24 pt-32 text-center">
        <h1 className="mb-6 text-4xl font-bold text-brand-navy">
          Article not found
        </h1>
        <p className="mb-8 text-xl text-brand-navy/70">
          This blog post does not exist or has been moved.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-8 py-4 font-bold text-white"
        >
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
  const recent = listingPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 5);
  const toc = extractToc(post.content);
  const tags = post.tags ?? [post.category];

  return (
    <>
      <PageSeoHead {...blogPostPageSeo(post.slug, post.title, post.excerpt)} />
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          buildArticleSchema({
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            author: post.author,
            date: post.date,
          }),
        ]}
      />

      <PageTransition className="pt-20 pb-0">
        <ReadingProgress />

        {/* Article hero  full bleed, brand-forward */}
        <section className="blog-article-hero relative overflow-hidden">
          <div className="blog-signal-grid opacity-50" aria-hidden="true" />
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(0,48,73,0.96)_0%,rgba(0,48,73,0.88)_52%,rgba(12,113,107,0.62)_100%)]" />
          <div className="page-shell relative z-10 py-14 md:py-20">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-brand-yellow transition-opacity hover:opacity-90"
            >
              <ArrowLeft className="h-4 w-4" /> Signal Desk
            </Link>
            <SectionReveal instant className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${post.badgeColor}`}
                >
                  {post.category}
                </span>
                {post.upcoming && (
                  <span className="rounded-full border border-brand-yellow/50 bg-brand-yellow/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-brand-yellow">
                    Soon
                  </span>
                )}
              </div>
              <h1 className="mt-5 text-[clamp(2.1rem,1.5rem+2.4vw,3.55rem)] font-bold leading-[1.05] tracking-tight text-brand-beige">
                {post.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-brand-beige/80 md:text-lg">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                <span className="blog-meta-chip">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </span>
                <span className="blog-meta-chip">
                  <Clock3 className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
                <span className="blog-meta-chip">
                  <UserRound className="h-3.5 w-3.5" />
                  {post.author}
                </span>
              </div>

              {tags.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-beige/50">
                    <Tag className="h-3.5 w-3.5" /> Tags
                  </span>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-bold text-brand-beige/90"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </SectionReveal>
          </div>
        </section>

        {/* Body + rails  breathing room, no stuck slabs */}
        <section className="relative overflow-hidden bg-[#f4f7f8] py-12 md:py-16">
          <div className="page-shell">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start lg:gap-14 xl:gap-16">
              <article id="blog-article" className="blog-article-sheet min-w-0">
                {/* Paint immediately  scroll-gated fade made body feel late. */}
                <div className="mb-10 overflow-hidden rounded-[1.25rem]">
                  <img
                    src={heroImage}
                    alt=""
                    className="aspect-[21/9] w-full object-cover md:aspect-[2.4/1]"
                  />
                </div>

                <BlogArticleBody content={post.content} />

                <div className="mt-14 border-t border-brand-navy/10 pt-8">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-navy/45">
                    Filed under
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-brand-navy px-3.5 py-1.5 text-xs font-bold text-brand-beige">
                      {post.category}
                    </span>
                    {tags.map((tag) => (
                      <span
                        key={`foot-${tag}`}
                        className="rounded-full border border-brand-navy/12 bg-white px-3.5 py-1.5 text-xs font-bold text-brand-navy/75"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative mt-12 overflow-hidden rounded-[1.5rem] bg-brand-navy p-7 md:p-9">
                  <div
                    className="blog-signal-grid opacity-30"
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-yellow">
                      Next step
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-brand-beige md:text-3xl">
                      See KIDUART with your school data
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-brand-beige/70">
                      Book a walkthrough of the panels your team will actually
                      use fees, attendance, academics, or parent communication.
                    </p>
                    <Link
                      href="/demo"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-sm font-bold text-brand-navy transition-transform hover:-translate-y-0.5"
                    >
                      Book a free demo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <BlogToc items={toc} />

                <div className="blog-recent-rail">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-yellow">
                    Recently filed
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-brand-beige">
                    Keep reading
                  </h3>
                  <ol className="mt-5 space-y-4">
                    {recent.map((item, index) => (
                      <li key={item.slug}>
                        <Link
                          href={`/blog/${item.slug}`}
                          className="group flex gap-3"
                        >
                          <span className="font-mono text-xs font-bold text-brand-yellow/70">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-bold leading-5 text-brand-beige transition-colors group-hover:text-brand-yellow">
                              {item.title}
                            </span>
                            <span className="mt-1.5 flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold text-brand-beige/55">
                              <span>{item.date}</span>
                              <span aria-hidden="true">·</span>
                              <span>{item.readTime}</span>
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                  <Link
                    href="/blog"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-yellow"
                  >
                    Full library <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="rounded-[1.25rem] border border-brand-navy/10 bg-white/80 p-5 backdrop-blur-sm">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-navy/55">
                    Compare vendors
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-navy/[0.74]">
                    Use our checklist when you evaluate any school ERP including
                    ours.
                  </p>
                  <Link
                    href="/vendor-checklist"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-teal"
                  >
                    Open checklist <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="border-t border-brand-navy/8 bg-white py-16 md:py-20">
            <div className="page-shell">
              <InView once className="motion-rise">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-teal">
                  Related
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy">
                  Continue on this trail
                </h2>
              </InView>
              <Stagger
                className="mt-10 grid gap-5 md:grid-cols-3"
                itemClassName="motion-brick motion-brick-dense"
              >
                {related.map((item, idx) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="blog-signal-card group"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={getBlogHeroImage(item, idx)}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                        <span className="blog-meta-chip blog-meta-chip-dense">
                          <Calendar className="h-3 w-3" />
                          {item.date}
                        </span>
                        <span className="blog-meta-chip blog-meta-chip-dense">
                          <Clock3 className="h-3 w-3" />
                          {item.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-teal">
                        {item.category}
                      </span>
                      <h3 className="mt-2 text-lg font-bold leading-snug text-brand-navy transition-colors group-hover:text-brand-teal">
                        {item.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-brand-navy/[0.7]">
                        {item.excerpt}
                      </p>
                      {(item.tags ?? []).length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {item.tags!.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-brand-navy/[0.05] px-2 py-0.5 text-[0.68rem] font-semibold text-brand-navy/65"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-teal">
                        Read <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </Stagger>
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

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async (
  context,
) => {
  const preview = context.preview ?? false;
  const slug =
    typeof context.params?.slug === "string" ? context.params.slug : "";
  if (!slug) return { notFound: true };

  const [postResult, listingResult] = await Promise.all([
    getCmsBlogPost(slug, { preview }),
    getCmsBlogListingPosts({ preview }),
  ]);

  if (!postResult.data)
    return { notFound: true, revalidate: preview ? 1 : 120 };

  return {
    props: {
      post: postResult.data,
      listingPosts: listingResult.data,
      contentMeta: postResult.meta,
    },
    revalidate: preview ? 1 : 300,
  };
};
