import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { type BlogListingPost } from "@/data/blogData";
import { getBlogHeroImage, getCmsBlogListingPosts } from "@/lib/cms/content";
import type { ContentMeta } from "@/lib/cms/types";
import { pageSeo } from "@/lib/pageSeo";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useMemo, useState, type FormEvent } from "react";
import type { GetStaticProps } from "next";

type SubscribeStatus = "idle" | "loading" | "success" | "error";

type BlogPageProps = {
  posts: BlogListingPost[];
  contentMeta: ContentMeta;
};

export default function Blog({ posts }: BlogPageProps) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.map((post) => post.category)))], [posts]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<SubscribeStatus>("idle");
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
        const payload = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(payload.error ?? "Unable to subscribe right now.");
      }

      setSubscribeStatus("success");
      setEmail("");
    } catch (error) {
      setSubscribeStatus("error");
      setSubscribeError(error instanceof Error ? error.message : "Unable to subscribe right now.");
    }
  };

  const filteredPosts = activeCategory === "All" ? posts : posts.filter((post) => post.category === activeCategory);

  return (
    <PageTransition className="pt-20 pb-0">
      <PageSeoHead {...pageSeo.blog} />
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#e7ebee]">
        <img
          src="/images/banner/blog-hero.avif"
          alt="Blog hero background"
          className="absolute right-0 top-0 h-full w-full object-cover object-[72%_center]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(231,235,238,0.96)_0%,rgba(231,235,238,0.92)_38%,rgba(231,235,238,0.56)_60%,rgba(231,235,238,0.1)_100%)]" />
        <div className="absolute right-[9%] top-[18%] hidden h-[56%] w-[36%] max-w-[24rem] rounded-[2rem] border border-white/70 bg-white/20 md:block" />
        <div className="page-shell relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-10">
          <SectionReveal className="max-w-xl">
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">Blog and insights</div>
            <h1 className="text-[clamp(2.3rem,1.7rem+2.5vw,5rem)] font-bold leading-[0.95] text-brand-navy">
              Notes on running
              <br />
              schools better
            </h1>
            <p className="mt-6 max-w-md text-[clamp(1rem,0.96rem+0.22vw,1.08rem)] leading-7 text-brand-navy/65">
              Articles on school operations, parent communication, fees, and sensible use of AI, written for administrators who want plain language, not buzzwords.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-white">
        <BackgroundBlobs blobs={[{ color: "hsl(var(--blob-teal))", size: 300, position: "center-right", opacity: 0.15 }]} />
        <FloatingIcons icons={["BookOpen", "MessageSquare"]} count={4} />
        <div className="page-shell relative z-10">
          <SectionReveal className="mx-auto mb-10 max-w-3xl text-center">
            <div className="section-kicker">Education blog library</div>
            <h2 className="section-title mt-6 text-brand-navy">Browse by topic</h2>
            <p className="section-copy mt-4 text-brand-navy/70">
              School management, AI in education, student success, and technology planning.
            </p>
          </SectionReveal>

          <SectionReveal className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                  activeCategory === cat ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/10" : "bg-brand-beige/50 text-brand-navy hover:bg-brand-beige"
                }`}
              >
                {cat}
              </button>
            ))}
          </SectionReveal>

          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post, idx) => (
                <SectionReveal key={post.slug} delay={idx * 0.1} className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-brand-navy/10 bg-white shadow-lg shadow-brand-navy/5 transition-transform hover:-translate-y-1">
                  <Link href={`/blog/${post.slug}`} className="relative block h-52 overflow-hidden bg-gradient-to-br">
                    <img
                      src={getBlogHeroImage(post, idx)}
                      alt={post.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.color} mix-blend-multiply`} />
                    <div className={`relative left-4 top-4 inline-flex rounded-full px-3 py-1 text-xs font-bold shadow-sm ${post.badgeColor}`}>
                      {post.category}
                    </div>
                  </Link>

                  <div className="flex flex-grow flex-col p-6 sm:p-7">
                    <div className="mb-3 flex items-center gap-2 text-sm font-medium text-brand-navy/50">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="mb-3 text-sm font-medium text-brand-navy/50">
                      {post.author} • {post.readTime}
                    </div>
                    <h3 className="mb-3 text-[clamp(1.2rem,1.08rem+0.5vw,1.5rem)] font-bold text-brand-navy">
                      <Link href={`/blog/${post.slug}`} className="hover:text-brand-teal">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="section-copy mb-6 flex-grow text-brand-navy/70">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 font-bold text-brand-teal">
                      Read article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </SectionReveal>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h3 className="text-2xl font-bold text-brand-navy">No articles found</h3>
              <p className="mt-3 text-brand-navy/70">Check back later for more content in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-[#eef2f3]">
        <div className="page-shell relative z-10">
          <SectionReveal className="mx-auto max-w-2xl rounded-[1.75rem] border border-brand-navy/10 bg-white p-8 shadow-[0_20px_60px_rgba(0,48,73,0.1)]">
            <h3 className="text-center text-2xl font-bold text-brand-navy">Get notified when we publish</h3>

            <form className="mt-6 flex flex-col gap-4 sm:flex-row" onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="field-surface h-12 flex-1 rounded-xl border border-brand-navy/15 px-4 text-brand-navy placeholder:text-brand-navy/45 focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
              />
              <button
                type="submit"
                disabled={subscribeStatus === "loading"}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-navy px-6 font-bold text-white transition-colors hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-60"
              >
                {subscribeStatus === "loading" ? "Submitting..." : "Notify Me"}
              </button>
            </form>

            {subscribeStatus === "success" && (
              <p className="mt-4 text-center text-sm font-semibold text-brand-teal">
                You&apos;re on the list! We&apos;ll email you when new articles go live.
              </p>
            )}
            {subscribeStatus === "error" && (
              <p className="mt-4 text-center text-sm font-semibold text-red-600">{subscribeError}</p>
            )}
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async (context) => {
  const preview = context.preview ?? false;
  const result = await getCmsBlogListingPosts({ preview });
  return {
    props: { posts: result.data, contentMeta: result.meta },
    revalidate: preview ? 1 : 300,
  };
};
