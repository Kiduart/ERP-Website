import type { ReactNode } from "react";

type BlogArticleBodyProps = {
  content: string;
};

function renderInline(text: string): ReactNode[] {
  const withLinks: ReactNode[] = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      withLinks.push(...renderBold(text.slice(lastIndex, match.index), key));
      key += 10;
    }
    const href = match[2];
    const label = match[1];
    const external = href.startsWith("http");
    withLinks.push(
      <a
        key={`a-${key++}`}
        href={href}
        className="font-semibold text-brand-teal underline decoration-brand-teal/30 underline-offset-2 hover:decoration-brand-teal"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    withLinks.push(...renderBold(text.slice(lastIndex), key));
  }

  return withLinks.length ? withLinks : renderBold(text, 0);
}

function renderBold(text: string, keyBase: number) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${keyBase}-b-${index}`} className="font-semibold text-brand-navy">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={`${keyBase}-t-${index}`}>{part}</span>;
  });
}

function slugify(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 64);
}

export function extractToc(content: string): { id: string; label: string }[] {
  return content
    .trim()
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter((block) => block.startsWith("## "))
    .map((block) => {
      const label = block.replace(/^##\s+/, "").replace(/\*\*/g, "");
      return { id: slugify(label), label };
    })
    .slice(0, 14);
}

export function BlogArticleBody({ content }: BlogArticleBodyProps) {
  const blocks = content.trim().split(/\n\n+/);

  return (
    <div className="blog-article-body space-y-1 text-brand-navy/[0.86]">
      {blocks.map((block, index) => {
        const trimmed = block.trim();

        if (trimmed === "---") {
          return <hr key={index} className="my-10 border-brand-navy/10" />;
        }

        if (trimmed.startsWith("> ")) {
          const quote = trimmed
            .split("\n")
            .map((line) => line.replace(/^>\s?/, ""))
            .join(" ");
          return (
            <blockquote
              key={index}
              className="my-8 rounded-2xl border-l-4 border-brand-teal bg-brand-beige/40 px-5 py-4 text-lg font-medium leading-8 text-brand-navy"
            >
              {renderInline(quote)}
            </blockquote>
          );
        }

        if (trimmed.startsWith("## ")) {
          const label = trimmed.replace(/^##\s+/, "");
          const id = slugify(label.replace(/\*\*/g, ""));
          return (
            <h2
              id={id}
              key={index}
              className="blog-section-heading mb-5 mt-14 scroll-mt-28 border-b border-brand-navy/[0.08] pb-3.5 text-[clamp(1.45rem,1.25rem+0.7vw,1.85rem)] font-bold tracking-tight text-brand-navy first:mt-0"
            >
              {renderInline(label)}
            </h2>
          );
        }

        if (trimmed.startsWith("### ")) {
          const label = trimmed.replace(/^###\s+/, "");
          return (
            <h3 key={index} className="mb-3 mt-8 text-xl font-bold text-brand-navy">
              {renderInline(label)}
            </h3>
          );
        }

        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").filter((line) => line.startsWith("- "));
          return (
            <ul key={index} className="my-5 list-disc space-y-2.5 pl-6 marker:text-brand-teal">
              {items.map((item) => (
                <li key={item} className="leading-7">
                  {renderInline(item.replace(/^-\s+/, ""))}
                </li>
              ))}
            </ul>
          );
        }

        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed.split("\n").filter((line) => /^\d+\.\s/.test(line));
          return (
            <ol key={index} className="my-5 list-decimal space-y-2.5 pl-6 marker:font-bold marker:text-brand-teal">
              {items.map((item) => (
                <li key={item} className="leading-7 pl-1">
                  {renderInline(item.replace(/^\d+\.\s+/, ""))}
                </li>
              ))}
            </ol>
          );
        }

        return (
          <p key={index} className="my-5 text-[1.05rem] leading-8">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
