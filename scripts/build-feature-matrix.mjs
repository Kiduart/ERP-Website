/**
 * Converts School_ERP_Feature_Matrix_v3.xlsx into src/data/feature-matrix.json.
 *
 * The sheet is the source of truth for what the product actually ships, so the
 * website renders from this generated file instead of hand-written feature lists.
 *
 * Usage: npm run build:matrix
 */
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const XLSX = require("xlsx");

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..");
const SOURCE = resolve(repoRoot, "School_ERP_Feature_Matrix_v3.xlsx");
const TARGET = resolve(repoRoot, "src/data/feature-matrix.json");

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const workbook = XLSX.readFile(SOURCE);
const rows = XLSX.utils.sheet_to_json(workbook.Sheets["Feature Matrix"], { defval: "" });

const categories = new Map();

for (const row of rows) {
  const categoryName = String(row["Category"]).trim();
  const moduleName = String(row["Module"]).trim();
  const subModuleName = String(row["Sub-Module"]).trim();
  const featureName = String(row["Feature"]).trim();
  const tier = String(row["Subscription Tier"]).trim();

  if (!categoryName || !moduleName || !featureName) continue;

  if (!categories.has(categoryName)) {
    categories.set(categoryName, {
      name: categoryName,
      slug: slugify(categoryName),
      featureCount: 0,
      baseCount: 0,
      standardCount: 0,
      modules: new Map(),
    });
  }
  const category = categories.get(categoryName);
  category.featureCount += 1;
  if (tier === "Base") category.baseCount += 1;
  if (tier === "Standard") category.standardCount += 1;

  if (!category.modules.has(moduleName)) {
    category.modules.set(moduleName, {
      name: moduleName,
      slug: slugify(moduleName),
      featureCount: 0,
      subModules: new Map(),
    });
  }
  const module = category.modules.get(moduleName);
  module.featureCount += 1;

  if (!module.subModules.has(subModuleName)) {
    module.subModules.set(subModuleName, {
      name: subModuleName,
      slug: slugify(subModuleName),
      features: [],
    });
  }
  module.subModules.get(subModuleName).features.push({ name: featureName, tier });
}

const serialised = [...categories.values()].map((category) => ({
  name: category.name,
  slug: category.slug,
  featureCount: category.featureCount,
  baseCount: category.baseCount,
  standardCount: category.standardCount,
  moduleCount: category.modules.size,
  modules: [...category.modules.values()].map((module) => ({
    name: module.name,
    slug: module.slug,
    featureCount: module.featureCount,
    subModules: [...module.subModules.values()].map((subModule) => ({
      name: subModule.name,
      slug: subModule.slug,
      features: subModule.features.sort((a, b) => a.name.localeCompare(b.name)),
    })),
  })),
}));

const totals = serialised.reduce(
  (acc, category) => {
    acc.categories += 1;
    acc.modules += category.moduleCount;
    acc.features += category.featureCount;
    acc.baseFeatures += category.baseCount;
    acc.standardFeatures += category.standardCount;
    acc.subModules += category.modules.reduce((sum, module) => sum + module.subModules.length, 0);
    return acc;
  },
  { categories: 0, modules: 0, subModules: 0, features: 0, baseFeatures: 0, standardFeatures: 0 },
);

mkdirSync(dirname(TARGET), { recursive: true });
writeFileSync(TARGET, `${JSON.stringify({ totals, categories: serialised }, null, 1)}\n`);

console.log("feature-matrix.json written");
console.table(totals);
