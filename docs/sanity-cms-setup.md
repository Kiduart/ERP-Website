# Sanity CMS Setup (Blog, Stories, Careers)

This project supports Sanity as the content source for:

- `Blog` (`/blog`, `/blog/[slug]`)
- `Customer Stories` (`/stories`)
- `Careers` (`/careers`)

If Sanity is not configured, the site automatically falls back to local content files.

## 1) Create project and dataset

1. Create a Sanity project from [https://www.sanity.io](https://www.sanity.io).
2. Create/use dataset `production`.
3. Create a read token with access to published and draft documents.

## 2) Add environment variables

Copy from `.env.example` and set:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_READ_TOKEN`
- `SANITY_PREVIEW_SECRET` (long random string for draft preview links)
- `SANITY_REVALIDATE_SECRET` (long random string for publish webhooks)

## 3) Add schemas in Sanity Studio

Use the schema files in:

- `sanity/schemas/blogPost.ts`
- `sanity/schemas/customerStory.ts`
- `sanity/schemas/careersPage.ts`
- `sanity/schemas/validation.ts`
- `sanity/schemas/index.ts`

Schemas include required fields and character limits to keep marketing copy consistent.

## 4) Import migrated content

The hardcoded content has already been migrated into NDJSON:

- `sanity/seed/seed.ndjson`

Regenerate anytime with:

```bash
npm run cms:export-seed
```

Import into Sanity:

```bash
npx sanity dataset import sanity/seed/seed.ndjson production --replace
```

## 5) Preview draft content

Open a preview URL after setting `SANITY_PREVIEW_SECRET`:

- Blog listing: `/api/preview?secret=YOUR_SECRET&type=blog`
- Blog post: `/api/preview?secret=YOUR_SECRET&type=blogPost&slug=ai-in-education-2026`
- Stories: `/api/preview?secret=YOUR_SECRET&type=stories`
- Careers: `/api/preview?secret=YOUR_SECRET&type=careers`

Preview mode shows a banner with:

- Draft/preview status
- CMS source (Sanity vs local fallback)
- Last CMS update timestamp
- Fetch timestamp

Exit preview: `/api/exit-preview`

## 6) Instant publish revalidation (webhook)

Create a Sanity webhook that POSTs to:

```text
https://www.kiduart.com/api/revalidate
```

Headers:

```text
x-sanity-webhook-secret: YOUR_SANITY_REVALIDATE_SECRET
```

Projection (example):

```groq
{
  "_type": _type,
  "slug": slug.current
}
```

Trigger on create, update, and delete for:

- `blogPost`
- `customerStory`
- `careersPage`

The API revalidates affected paths immediately:

- `blogPost` → `/blog` and `/blog/[slug]`
- `customerStory` → `/stories`
- `careersPage` → `/careers`

## 7) Verify locally

```bash
npm run build
```

When env vars are present and documents are published, pages read from Sanity.
If not, pages continue to use the local fallback content.
