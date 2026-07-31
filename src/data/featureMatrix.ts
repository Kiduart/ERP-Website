import matrix from "./feature-matrix.json";
import { moduleDisplayName } from "./moduleLabels";

/** Internal packaging label from the source sheet  never rendered or sent to the browser. */
export type FeatureTier = "Base" | "Standard";

export type MatrixFeature = {
  name: string;
  tier: FeatureTier;
};

export type MatrixSubModule = {
  name: string;
  slug: string;
  features: MatrixFeature[];
};

export type MatrixModule = {
  /** Buyer-facing label shown on the site */
  name: string;
  /** Name as it appears in the source sheet  used by content references */
  sheetName: string;
  slug: string;
  featureCount: number;
  subModules: MatrixSubModule[];
};

export type MatrixCategory = {
  name: string;
  slug: string;
  featureCount: number;
  baseCount: number;
  standardCount: number;
  moduleCount: number;
  modules: MatrixModule[];
};

export type MatrixTotals = {
  categories: number;
  modules: number;
  subModules: number;
  features: number;
  baseFeatures: number;
  standardFeatures: number;
};

const data = matrix as { totals: MatrixTotals; categories: MatrixCategory[] };

/** Generated from School_ERP_Feature_Matrix_v3.xlsx  run `npm run build:matrix` after sheet changes. */
export const MATRIX_CATEGORIES: MatrixCategory[] = data.categories.map(
  (category) => ({
    ...category,
    modules: category.modules.map((module) => ({
      ...module,
      sheetName: module.name,
      name: moduleDisplayName(category.slug, module.name),
    })),
  }),
);

/** Content references may use either the sheet name or the buyer-facing label. */
export function findMatrixModule(
  category: MatrixCategory | undefined,
  name: string,
): MatrixModule | undefined {
  return category?.modules.find(
    (entry) => entry.sheetName === name || entry.name === name,
  );
}
export const MATRIX_TOTALS: MatrixTotals = data.totals;

export const MATRIX_CATEGORY_SLUGS = MATRIX_CATEGORIES.map(
  (category) => category.slug,
);

export function getMatrixCategory(slug: string): MatrixCategory | undefined {
  return MATRIX_CATEGORIES.find((category) => category.slug === slug);
}

export function countSubModules(category: MatrixCategory): number {
  return category.modules.reduce(
    (sum, module) => sum + module.subModules.length,
    0,
  );
}

export function categoryFeatures(category: MatrixCategory): MatrixFeature[] {
  return category.modules.flatMap((module) =>
    module.subModules.flatMap((subModule) => subModule.features),
  );
}

/**
 * Published capability sample. Public pages carry a representative slice of each
 * sub-module plus the honest total; the remaining detail is only shared through the
 * capability sheet request, so it never ships in the HTML or the page props.
 */
export const PUBLIC_FEATURE_SAMPLE = 5;
/** Dedicated module pages show a deeper sample than area shelves. */
export const MODULE_PAGE_FEATURE_SAMPLE = 8;

export type PublicSubModule = {
  name: string;
  slug: string;
  featureCount: number;
  features: { name: string }[];
  hiddenFeatureCount: number;
};

export type PublicModule = {
  name: string;
  slug: string;
  featureCount: number;
  subModules: PublicSubModule[];
  hiddenFeatureCount: number;
};

export function toPublicSubModule(
  subModule: MatrixSubModule,
  sampleSize: number = PUBLIC_FEATURE_SAMPLE,
): PublicSubModule {
  const size =
    typeof sampleSize === "number" &&
    Number.isFinite(sampleSize) &&
    sampleSize > 0
      ? sampleSize
      : PUBLIC_FEATURE_SAMPLE;
  const total = subModule.features.length;
  // A single hidden row is not worth a "more" line, so show it instead.
  const shown =
    total <= size + 1 ? subModule.features : subModule.features.slice(0, size);

  return {
    name: subModule.name,
    slug: subModule.slug,
    featureCount: total,
    features: shown.map((feature) => ({ name: feature.name })),
    hiddenFeatureCount: total - shown.length,
  };
}

export function toPublicModule(
  module: MatrixModule,
  sampleSize: number = PUBLIC_FEATURE_SAMPLE,
): PublicModule {
  const size =
    typeof sampleSize === "number" &&
    Number.isFinite(sampleSize) &&
    sampleSize > 0
      ? sampleSize
      : PUBLIC_FEATURE_SAMPLE;
  const subModules = module.subModules.map((entry) =>
    toPublicSubModule(entry, size),
  );

  return {
    name: module.name,
    slug: module.slug,
    featureCount: module.featureCount,
    subModules,
    hiddenFeatureCount: subModules.reduce(
      (sum, entry) => sum + entry.hiddenFeatureCount,
      0,
    ),
  };
}

/** Largest modules first  used to lead with the deepest capability areas. */
export function topModules(
  category: MatrixCategory,
  limit = 6,
): MatrixModule[] {
  return [...category.modules]
    .sort((a, b) => b.featureCount - a.featureCount)
    .slice(0, limit);
}
