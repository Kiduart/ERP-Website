/**
 * Generates responsive AVIF/WebP variants for above-the-fold banner images and
 * writes a manifest the hero components read at build time.
 *
 * Run: npm run build:heroes
 */
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const BANNER_DIR = path.join(ROOT, "public/images/banner");
const OUT_DIR = path.join(BANNER_DIR, "responsive");
const MANIFEST = path.join(ROOT, "src/data/heroImageVariants.json");
const WIDTHS = [640, 1024, 1600];

/** Banners that render above the fold and therefore need srcset variants */
const HERO_FILES = [
  "features-hero.jpg",
  "platform-hero.jpg",
  "integration-hero.jpg",
  "security-hero.jpg",
  "solution-hero-1.jpg",
  "solution-hero-2.jpg",
  "solution-hero-3.jpg",
  "contact-post-1.jpg",
  "career-post-1.jpg",
  "help-center-hero-1.jpg",
  "home-hero.jpeg",
];

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const available = new Set(await readdir(BANNER_DIR));
  const manifest = {};

  for (const file of HERO_FILES) {
    if (!available.has(file)) {
      console.warn(`skip (missing): ${file}`);
      continue;
    }

    const base = file.replace(/\.(jpe?g|png|webp|avif)$/i, "");
    const input = path.join(BANNER_DIR, file);
    const meta = await sharp(input).metadata();
    const widths = WIDTHS.filter((w) => w <= (meta.width ?? Infinity));
    if (widths.length === 0) widths.push(meta.width ?? 1024);

    const avif = [];
    const webp = [];

    for (const width of widths) {
      const resized = sharp(input).resize({ width, withoutEnlargement: true });

      const avifName = `${base}-${width}.avif`;
      await resized.clone().avif({ quality: 52, effort: 5 }).toFile(path.join(OUT_DIR, avifName));
      avif.push(`/images/banner/responsive/${avifName} ${width}w`);

      const webpName = `${base}-${width}.webp`;
      await resized.clone().webp({ quality: 72 }).toFile(path.join(OUT_DIR, webpName));
      webp.push(`/images/banner/responsive/${webpName} ${width}w`);
    }

    manifest[`/images/banner/${file}`] = {
      avif: avif.join(", "),
      webp: webp.join(", "),
    };
    console.log(`✓ ${file} → ${widths.join(", ")}`);
  }

  await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`\nmanifest: ${path.relative(ROOT, MANIFEST)} (${Object.keys(manifest).length} images)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
