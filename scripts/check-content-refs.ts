/**
 * Guards the content layer against drift: every narrative/panel reference must
 * point at a real category or module in the generated feature matrix.
 *
 * Usage: npm run check:content
 */
import { MATRIX_CATEGORIES, MATRIX_TOTALS } from "../src/data/featureMatrix";
import { AREA_NARRATIVES } from "../src/data/productNarrative";
import { PANEL_SLUGS, PRODUCT_PANELS } from "../src/data/productPanels";
import { PRODUCT_PERSONAS } from "../src/data/productPersonas";
import { SCHOOL_OPERATIONS_JOURNEY } from "../src/lib/siteData";
import { pricingPlans } from "../src/data/pricing";
import { SECURITY_LAYERS, SECURITY_SCENARIOS } from "../src/data/securityPosture";
import integrationsData, { INTEGRATION_CATEGORIES } from "../src/data/integrationsData";
import { CONTACT_INTENTS } from "../src/data/contactIntents";

const errors: string[] = [];
const categorySlugs = new Set(MATRIX_CATEGORIES.map((category) => category.slug));
const moduleKeys = new Set(
  MATRIX_CATEGORIES.flatMap((category) =>
    category.modules.flatMap((module) => [
      `${category.slug}::${module.name}`,
      `${category.slug}::${module.sheetName}`,
    ]),
  ),
);

for (const area of AREA_NARRATIVES) {
  if (!categorySlugs.has(area.slug)) errors.push(`narrative area "${area.slug}" is not in the matrix`);
  for (const panel of area.panels) {
    if (!PANEL_SLUGS.includes(panel)) errors.push(`narrative "${area.slug}" references unknown panel "${panel}"`);
  }
}

for (const slug of categorySlugs) {
  if (!AREA_NARRATIVES.some((area) => area.slug === slug)) {
    errors.push(`matrix category "${slug}" has no narrative entry`);
  }
}

for (const panel of PRODUCT_PANELS) {
  for (const area of panel.areas) {
    if (!categorySlugs.has(area)) errors.push(`panel "${panel.slug}" references unknown area "${area}"`);
  }
  for (const ref of panel.keyModules) {
    if (!moduleKeys.has(`${ref.area}::${ref.module}`)) {
      errors.push(`panel "${panel.slug}" references unknown module "${ref.area} / ${ref.module}"`);
    }
  }
}

for (const persona of PRODUCT_PERSONAS) {
  for (const area of persona.areas) {
    if (!categorySlugs.has(area)) errors.push(`persona "${persona.slug}" references unknown area "${area}"`);
  }
  for (const panel of persona.panels) {
    if (!PANEL_SLUGS.includes(panel)) errors.push(`persona "${persona.slug}" references unknown panel "${panel}"`);
  }
  for (const challenge of persona.challenges) {
    for (const ref of challenge.modules) {
      if (!moduleKeys.has(`${ref.area}::${ref.module}`)) {
        errors.push(`persona "${persona.slug}" references unknown module "${ref.area} / ${ref.module}"`);
      }
    }
  }
}

for (const step of SCHOOL_OPERATIONS_JOURNEY) {
  const category = MATRIX_CATEGORIES.find((entry) => entry.slug === step.source.area);
  if (!category) {
    errors.push(`journey step "${step.id}" references unknown area "${step.source.area}"`);
    continue;
  }

  if (step.source.module) {
    const matrixModule = category.modules.find(
      (entry) => entry.name === step.source.module || entry.sheetName === step.source.module,
    );
    if (!matrixModule) {
      errors.push(`journey step "${step.id}" references unknown module "${step.source.module}"`);
    } else if (matrixModule.featureCount !== step.featureCount) {
      errors.push(
        `journey step "${step.id}" says ${step.featureCount} features but the matrix has ${matrixModule.featureCount}`,
      );
    }
  } else if (category.featureCount !== step.featureCount) {
    errors.push(
      `journey step "${step.id}" says ${step.featureCount} features but the matrix has ${category.featureCount}`,
    );
  }
}

for (const [slug, integration] of Object.entries(integrationsData)) {
  for (const ref of integration.modules) {
    if (!moduleKeys.has(`${ref.area}::${ref.module}`)) {
      errors.push(`integration "${slug}" references unknown module "${ref.area} / ${ref.module}"`);
    }
  }
  if (!INTEGRATION_CATEGORIES.some((category) => category.title === integration.category)) {
    errors.push(`integration "${slug}" uses unknown category "${integration.category}"`);
  }
}

for (const layer of SECURITY_LAYERS) {
  if (!moduleKeys.has(`security-and-authentication::${layer.module}`)) {
    errors.push(`security layer "${layer.id}" references unknown module "${layer.module}"`);
  }
}

const areaHrefs = new Set(MATRIX_CATEGORIES.map((category) => `/features/${category.slug}`));
for (const intent of CONTACT_INTENTS) {
  for (const area of intent.areas) {
    if (!areaHrefs.has(area.href)) {
      errors.push(`contact intent "${intent.id}" links to unknown area "${area.href}"`);
    }
  }
}

const layerIds = new Set(SECURITY_LAYERS.map((layer) => layer.id));
const layerControls = new Set(SECURITY_LAYERS.flatMap((layer) => layer.controls));
for (const scenario of SECURITY_SCENARIOS) {
  const layer = SECURITY_LAYERS.find((entry) => entry.id === scenario.stoppedBy);
  if (!layerIds.has(scenario.stoppedBy)) {
    errors.push(`security scenario "${scenario.id}" references unknown layer "${scenario.stoppedBy}"`);
  }
  for (const control of scenario.controls) {
    if (!layerControls.has(control)) {
      errors.push(`security scenario "${scenario.id}" claims a control no layer lists: "${control}"`);
    }
  }
  if (layer && !scenario.controls.some((control) => layer.controls.includes(control))) {
    errors.push(`security scenario "${scenario.id}" lists no control from layer "${layer.id}"`);
  }
}

for (const plan of pricingPlans) {
  for (const area of plan.areas) {
    if (!categorySlugs.has(area)) errors.push(`pricing plan "${plan.name}" references unknown area "${area}"`);
  }
}

const orders = PRODUCT_PANELS.map((panel) => panel.order);
if (new Set(orders).size !== orders.length) errors.push("panel order values are not unique");

const personaOrders = PRODUCT_PERSONAS.map((persona) => persona.order);
if (new Set(personaOrders).size !== personaOrders.length) errors.push("persona order values are not unique");

if (errors.length) {
  console.error(`✗ ${errors.length} content reference problem(s):`);
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exit(1);
}

console.log(
  `✓ content refs ok — ${MATRIX_TOTALS.categories} areas, ${MATRIX_TOTALS.modules} modules, ${MATRIX_TOTALS.features} features, ${PRODUCT_PANELS.length} panels, ${PRODUCT_PERSONAS.length} personas`,
);
