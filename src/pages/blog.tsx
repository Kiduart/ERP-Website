import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { InView } from "@/components/ui/InView";
import { Stagger } from "@/components/ui/Stagger";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { type BlogListingPost } from "@/data/blogData";
import { getBlogHeroImage, getCmsBlogListingPosts } from "@/lib/cms/content";
import type { ContentMeta } from "@/lib/cms/types";
import { pageSeo } from "@/lib/pageSeo";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/seoSchemas";
import { onSmoothHashClick } from "@/lib/smoothScroll";
import { Calendar, ArrowRight, Clock3, Sparkles, Tag } from "lucide-react";
import { Link } from "wouter";
import { useMemo, useState, type FormEvent } from "react";
import type { GetStaticProps } from "next";
import { cn } from "@/lib/utils";

type SubscribeStatus = "idle" | "loading" | "success" | "error";

type BlogPageProps = {
  posts: BlogListingPost[];
  contentMeta: ContentMeta;
};

export default function Blog({ posts }: BlogPageProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts],
  );
  const allTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((post) => (post.tags ?? []).forEach((tag) => set.add(tag)));
    return Array.from(set).slice(0, 16);
  }, [posts]);

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] =
    useState<SubscribeStatus>("idle");
  const [subscribeError, setSubscribeError] = useState("");

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribeStatus("loading");
    setSubscribeError("");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!response.ok) {
        const payload = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(payload.error ?? "Unable to subscribe right now.");
      }
      setSubscribeStatus("success");
      setEmail("");
    } catch (error) {
      setSubscribeStatus("error");
      setSubscribeError(
        error instanceof Error
          ? error.message
          : "Unable to subscribe right now.",
      );
    }
  };

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const catOk =
        activeCategory === "All" || post.category === activeCategory;
      const tagOk = !activeTag || (post.tags ?? []).includes(activeTag);
      return catOk && tagOk;
    });
  }, [posts, activeCategory, activeTag]);

  const featured = filteredPosts[0];
  const recentRail = posts.slice(0, 5);
  const rest = filteredPosts.slice(1);

  return (
    <PageTransition className="pt-20 pb-0">
      <PageSeoHead {...pageSeo.blog} />
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          buildItemListSchema(
            "KIDUART school ERP blog",
            posts
              .slice(0, 12)
              .map((post) => ({
                name: post.title,
                path: `/blog/${post.slug}`,
              })),
          ),
        ]}
      />

      {/* Futuristic editorial hero */}
      <section className="blog-signal-hero relative overflow-hidden">
        <div className="blog-signal-grid" aria-hidden="true" />
        <div className="blog-signal-orb blog-signal-orb-a" aria-hidden="true" />
        <div className="blog-signal-orb blog-signal-orb-b" aria-hidden="true" />
        <img
          src="/images/banner/blog-hero.avif"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(0,48,73,0.97)_0%,rgba(0,48,73,0.88)_48%,rgba(12,113,107,0.55)_100%)]" />

        <div className="page-shell relative z-10 flex min-h-[min(88vh,48rem)] flex-col justify-center py-16 md:py-20">
          <SectionReveal instant className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/35 bg-brand-yellow/10 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-brand-yellow">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              KIDUART Signal Desk
            </p>
            <h1 className="mt-6 text-[clamp(2.75rem,1.6rem+3.6vw,5rem)] font-bold leading-[0.92] tracking-tight text-brand-beige">
              Operations, decoded
              <span className="block text-brand-yellow">
                for Indian schools
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-brand-beige/80">
              Comparisons, rollout playbooks, fee and attendance notes written
              so an admin can act the same afternoon.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#library"
                onClick={(event) => onSmoothHashClick(event)}
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3.5 text-sm font-bold text-brand-navy transition-transform hover:-translate-y-0.5"
              >
                Enter the library
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#recent"
                onClick={(event) => onSmoothHashClick(event)}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-brand-beige backdrop-blur-sm transition-colors hover:border-white/45"
              >
                Recent posts
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Library: category + tags + recent rail + magazine grid */}
      <section
        id="library"
        className="relative scroll-mt-24 overflow-hidden bg-[#f4f7f8] py-16 md:py-24"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-teal/40 to-transparent" />
        <div className="page-shell relative z-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18.5rem] lg:gap-12">
            <div className="min-w-0">
              <InView once className="motion-rise">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-teal">
                  Library
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
                  Browse the desk
                </h2>
              </InView>

              <div className="mt-8 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-bold transition-all duration-300",
                      activeCategory === cat
                        ? "border-brand-navy bg-brand-navy text-white shadow-lg shadow-brand-navy/15"
                        : "border-brand-navy/10 bg-white text-brand-navy hover:border-brand-teal/40",
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="mr-1 inline-flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-navy/50">
                  <Tag className="h-3.5 w-3.5" /> Tags
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTag(null)}
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-xs font-bold transition-colors",
                    !activeTag
                      ? "bg-brand-teal/15 text-brand-teal"
                      : "text-brand-navy/55 hover:text-brand-navy",
                  )}
                >
                  All tags
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() =>
                      setActiveTag((prev) => (prev === tag ? null : tag))
                    }
                    className={cn(
                      "rounded-lg border px-2.5 py-1 text-xs font-bold transition-all duration-300",
                      activeTag === tag
                        ? "border-brand-teal bg-brand-teal text-white"
                        : "border-brand-navy/10 bg-white/80 text-brand-navy/70 hover:border-brand-teal/35",
                    )}
                  >
                    #{tag}
                  </button>
                ))}
              </div>

              {filteredPosts.length === 0 ? (
                <div className="mt-16 rounded-[1.75rem] border border-dashed border-brand-navy/20 bg-white/60 py-16 text-center">
                  <h3 className="text-2xl font-bold text-brand-navy">
                    No articles match
                  </h3>
                  <p className="mt-3 text-brand-navy/70">
                    Try another category or clear the tag filter.
                  </p>
                </div>
              ) : (
                <>
                  {featured && (
                    <InView once className="motion-rise mt-10">
                      <Link
                        href={`/blog/${featured.slug}`}
                        className="blog-feature-slab group relative block overflow-hidden"
                      >
                        <div className="absolute inset-0">
                          <img
                            src={getBlogHeroImage(featured, 0)}
                            alt=""
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(0,48,73,0.92)_0%,rgba(0,48,73,0.55)_48%,rgba(12,113,107,0.35)_100%)]" />
                        </div>
                        <div className="relative flex min-h-[22rem] flex-col justify-end p-7 md:min-h-[26rem] md:p-10">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-brand-yellow px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-navy">
                              Featured
                            </span>
                            <span
                              className={`rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] ${featured.badgeColor}`}
                            >
                              {featured.category}
                            </span>
                            {featured.upcoming && (
                              <span className="rounded-full border border-brand-yellow/50 bg-brand-yellow/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-brand-yellow">
                                Soon
                              </span>
                            )}
                          </div>
                          <h3 className="mt-4 max-w-2xl text-[clamp(1.6rem,1.2rem+1.4vw,2.45rem)] font-bold leading-tight text-brand-beige">
                            {featured.title}
                          </h3>
                          <p className="mt-3 max-w-xl text-sm leading-7 text-brand-beige/80 md:text-base">
                            {featured.excerpt}
                          </p>
                          <div className="mt-6 flex flex-wrap items-center gap-3">
                            <span className="blog-meta-chip">
                              <Calendar className="h-3.5 w-3.5" />
                              {featured.date}
                            </span>
                            <span className="blog-meta-chip">
                              <Clock3 className="h-3.5 w-3.5" />
                              {featured.readTime}
                            </span>
                          </div>
                          {(featured.tags ?? []).length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {featured.tags!.slice(0, 4).map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-md bg-white/10 px-2 py-0.5 text-[0.7rem] font-semibold text-brand-beige/85"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                          <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-yellow">
                            Read the guide
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </InView>
                  )}

                  {rest.length > 0 && (
                    <Stagger
                      className="mt-8 grid gap-5 sm:grid-cols-2"
                      itemClassName="motion-brick motion-brick-dense"
                    >
                      {rest.map((post, idx) => (
                        <article
                          key={post.slug}
                          className="blog-signal-card group"
                        >
                          <Link
                            href={`/blog/${post.slug}`}
                            className="relative block aspect-[16/10] overflow-hidden"
                          >
                            <img
                              src={getBlogHeroImage(post, idx + 1)}
                              alt=""
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                            <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                              <span
                                className={`rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] ${post.badgeColor}`}
                              >
                                {post.category}
                              </span>
                              {post.upcoming && (
                                <span className="rounded-full bg-brand-yellow px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-brand-navy">
                                  Soon
                                </span>
                              )}
                            </div>
                            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                              <span className="blog-meta-chip blog-meta-chip-dense">
                                <Calendar className="h-3 w-3" />
                                {post.date}
                              </span>
                              <span className="blog-meta-chip blog-meta-chip-dense">
                                <Clock3 className="h-3 w-3" />
                                {post.readTime}
                              </span>
                            </div>
                          </Link>
                          <div className="flex flex-1 flex-col p-5">
                            <h3 className="text-lg font-bold leading-snug text-brand-navy transition-colors group-hover:text-brand-teal">
                              <Link href={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h3>
                            <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-brand-navy/[0.72]">
                              {post.excerpt}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {(post.tags ?? []).slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-md bg-brand-navy/[0.05] px-2 py-0.5 text-[0.68rem] font-semibold text-brand-navy/70"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-teal"
                            >
                              Continue reading{" "}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </article>
                      ))}
                    </Stagger>
                  )}
                </>
              )}
            </div>

            {/* Recent rail */}
            <aside id="recent" className="scroll-mt-28 lg:pt-1">
              <InView
                once
                className="motion-rise blog-recent-rail lg:sticky lg:top-28"
              >
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-yellow">
                  Recently filed
                </p>
                <h3 className="mt-2 text-xl font-bold text-brand-beige">
                  Fresh on the desk
                </h3>
                <ol className="mt-6 space-y-4">
                  {recentRail.map((post, index) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex gap-3"
                      >
                        <span className="font-mono text-xs font-bold text-brand-yellow/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-bold leading-5 text-brand-beige transition-colors group-hover:text-brand-yellow">
                            {post.title}
                          </span>
                          <span className="mt-1.5 flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold text-brand-beige/60">
                            <span>{post.date}</span>
                            <span aria-hidden="true">·</span>
                            <span>{post.readTime}</span>
                            {post.upcoming && (
                              <span className="rounded bg-brand-yellow/20 px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-brand-yellow">
                                Soon
                              </span>
                            )}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
                <a
                  href="#library"
                  onClick={(event) => onSmoothHashClick(event)}
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-brand-yellow"
                >
                  Jump to full library <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </InView>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-16 md:py-20">
        <div className="blog-signal-grid opacity-40" aria-hidden="true" />
        <div className="page-shell relative z-10">
          <InView once className="motion-rise mx-auto max-w-xl text-center">
            <h3 className="text-2xl font-bold text-brand-beige md:text-3xl">
              Get the next dispatch
            </h3>
            <p className="mt-3 text-sm leading-6 text-brand-beige/70">
              New guides when we publish no spam, unsubscribe anytime.
            </p>
            <form
              className="mt-7 flex flex-col gap-3 sm:flex-row"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                className="h-12 flex-1 rounded-xl border border-white/15 bg-white/5 px-4 text-brand-beige placeholder:text-brand-beige/40 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
              />
              <button
                type="submit"
                disabled={subscribeStatus === "loading"}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-yellow px-6 font-bold text-brand-navy transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {subscribeStatus === "loading" ? "Submitting..." : "Notify me"}
              </button>
            </form>
            {subscribeStatus === "success" && (
              <p className="mt-4 text-sm font-semibold text-brand-yellow">
                You&apos;re on the list.
              </p>
            )}
            {subscribeStatus === "error" && (
              <p className="mt-4 text-sm font-semibold text-red-300">
                {subscribeError}
              </p>
            )}
          </InView>
        </div>
      </section>
    </PageTransition>
  );
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async (
  context,
) => {
  const preview = context.preview ?? false;
  const result = await getCmsBlogListingPosts({ preview });
  return {
    props: { posts: result.data, contentMeta: result.meta },
    revalidate: preview ? 1 : 300,
  };
};
