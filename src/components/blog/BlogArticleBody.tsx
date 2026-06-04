type BlogArticleBodyProps = {
  content: string;
};

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-brand-navy">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function BlogArticleBody({ content }: BlogArticleBodyProps) {
  const blocks = content.trim().split(/\n\n+/);

  return (
    <div className="prose prose-lg max-w-none text-brand-navy/85 prose-headings:text-brand-navy prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3">
      {blocks.map((block, index) => {
        const trimmed = block.trim();

        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl font-bold text-brand-navy">
              {trimmed.replace(/^##\s+/, "")}
            </h2>
          );
        }

        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={index} className="text-xl font-bold text-brand-navy">
              {trimmed.replace(/^###\s+/, "")}
            </h3>
          );
        }

        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").filter((line) => line.startsWith("- "));
          return (
            <ul key={index} className="my-4 list-disc space-y-2 pl-6">
              {items.map((item) => (
                <li key={item} className="leading-relaxed">
                  {renderInline(item.replace(/^-\s+/, ""))}
                </li>
              ))}
            </ul>
          );
        }

        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed.split("\n").filter((line) => /^\d+\.\s/.test(line));
          return (
            <ol key={index} className="my-4 list-decimal space-y-2 pl-6">
              {items.map((item) => (
                <li key={item} className="leading-relaxed">
                  {renderInline(item.replace(/^\d+\.\s+/, ""))}
                </li>
              ))}
            </ol>
          );
        }

        return (
          <p key={index} className="my-4 leading-relaxed">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
