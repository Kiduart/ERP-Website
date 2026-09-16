import { unlink, readFile, writeFile } from "node:fs/promises";

const sitemapPath = new URL("../public/sitemap.xml", import.meta.url);
const chunkPath = new URL("../public/sitemap-0.xml", import.meta.url);
const stylesheet = '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>';

const xml = await readFile(sitemapPath, "utf8");
if (!xml.includes("sitemap.xsl")) {
  const styled = xml.replace(
    /<\?xml version="1.0" encoding="UTF-8"\?>/,
    `<?xml version="1.0" encoding="UTF-8"?>\n${stylesheet}`,
  );
  await writeFile(sitemapPath, styled.endsWith("\n") ? styled : `${styled}\n`);
}

await unlink(chunkPath).catch(() => {});
