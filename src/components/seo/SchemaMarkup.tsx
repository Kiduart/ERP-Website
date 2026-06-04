import Head from "next/head";

export type JsonLd = Record<string, unknown>;

export type SchemaMarkupProps = {
  /** Schema.org @type when an entry omits @type */
  type?: string;
  /** One or more JSON-LD objects */
  data: JsonLd | JsonLd[];
};

function normalizeSchema(entry: JsonLd, type?: string): JsonLd {
  if (entry["@context"] && entry["@type"]) {
    return entry;
  }

  return {
    "@context": "https://schema.org",
    ...(type && !entry["@type"] ? { "@type": type } : {}),
    ...entry,
  };
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const schemas = (Array.isArray(data) ? data : [data]).map((entry) => normalizeSchema(entry, type));

  return (
    <Head>
      {schemas.map((schema, index) => (
        <script
          key={`json-ld-${String(schema["@type"] ?? index)}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
