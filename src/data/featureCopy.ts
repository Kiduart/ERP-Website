/**
 * Turns terse matrix feature labels into short, readable lines for the site.
 * Keeps the original product name as the title; adds a brief clarifying blurb.
 * Heuristic only  never invents capabilities that are not in the matrix name.
 */

const ARTICLE = /^(a|an|the)\s+/i;

function lowerFirst(value: string): string {
  if (!value) return value;
  return value.charAt(0).toLowerCase() + value.slice(1);
}

function tidyObject(value: string): string {
  return value
    .replace(/\s+/g, " ")
    .replace(/\bC G P A\b/gi, "CGPA")
    .replace(/\bG P A\b/gi, "GPA")
    .replace(/\bP T M\b/gi, "PTM")
    .replace(/\bI D\b/gi, "ID")
    .trim();
}

function stripLeadingArticle(value: string): string {
  return value.replace(ARTICLE, "").trim();
}

/**
 * Short line for area shelves  one glance of meaning without a long sentence.
 */
export function featureBrief(name: string, subModule?: string): string {
  const label = tidyObject(name);
  const context = subModule ? tidyObject(subModule) : "";
  const lower = label.toLowerCase();

  if (/^create\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^create\s+/i, ""));
    return context
      ? `Set up a new ${lowerFirst(object)} in ${lowerFirst(context)}`
      : `Set up a new ${lowerFirst(object)}`;
  }
  if (/^add\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^add\s+/i, ""));
    return `Add ${lowerFirst(object)} to the record`;
  }
  if (/^change\s+status$/i.test(label)) {
    return context
      ? `Update status inside ${lowerFirst(context)}`
      : "Update the current status";
  }
  if (/^change\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^change\s+/i, ""));
    return `Change ${lowerFirst(object)} when it needs updating`;
  }
  if (/^update\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^update\s+/i, ""));
    return `Keep ${lowerFirst(object)} current`;
  }
  if (/^edit\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^edit\s+/i, ""));
    return `Edit ${lowerFirst(object)} details`;
  }
  if (/^delete\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^delete\s+/i, ""));
    return `Remove ${lowerFirst(object)} when it is no longer needed`;
  }
  if (/^remove\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^remove\s+/i, ""));
    return `Remove ${lowerFirst(object)} from the workflow`;
  }
  if (/^view\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^view\s+/i, ""));
    return `Open and review ${lowerFirst(object)}`;
  }
  if (/^download\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^download\s+/i, ""));
    return `Download ${lowerFirst(object)} for print or sharing`;
  }
  if (/^export\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^export\s+/i, ""));
    return object.toLowerCase().includes("excel")
      ? "Export the data to Excel"
      : `Export ${lowerFirst(object)}`;
  }
  if (/^import\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^import\s+/i, ""));
    return `Import ${lowerFirst(object)} into the system`;
  }
  if (/^bulk\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^bulk\s+/i, ""));
    return `Run ${lowerFirst(object)} across many records at once`;
  }
  if (/^calculate\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^calculate\s+/i, ""));
    return `Calculate ${lowerFirst(object)} from the data on record`;
  }
  if (/^approve\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^approve\s+/i, ""));
    return `Approve ${lowerFirst(object)} so it becomes final`;
  }
  if (/^assign\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^assign\s+/i, ""));
    return `Assign ${lowerFirst(object)} to the right people`;
  }
  if (/^generate\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^generate\s+/i, ""));
    return `Generate ${lowerFirst(object)} from current records`;
  }
  if (/^send\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^send\s+/i, ""));
    return `Send ${lowerFirst(object)} to the right audience`;
  }
  if (/^print\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^print\s+/i, ""));
    return `Print ${lowerFirst(object)} when you need a paper copy`;
  }
  if (/^search\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^search\s+/i, ""));
    return `Search and find ${lowerFirst(object)} quickly`;
  }
  if (/^filter\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^filter\s+/i, ""));
    return `Filter ${lowerFirst(object)} to the rows that matter`;
  }
  if (/^manage\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^manage\s+/i, ""));
    return `Manage ${lowerFirst(object)} day to day`;
  }
  if (/^configure\s+/i.test(label) || /^config\s+/i.test(label)) {
    const object = stripLeadingArticle(
      label.replace(/^(configure|config)\s+/i, ""),
    );
    return `Configure ${lowerFirst(object)} for your school`;
  }
  if (/^enable\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^enable\s+/i, ""));
    return `Turn on ${lowerFirst(object)} when the school needs it`;
  }
  if (/^disable\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^disable\s+/i, ""));
    return `Turn off ${lowerFirst(object)} when it should not run`;
  }
  if (/^upload\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^upload\s+/i, ""));
    return `Upload ${lowerFirst(object)} into the module`;
  }
  if (/^attach\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^attach\s+/i, ""));
    return `Attach ${lowerFirst(object)} to the record`;
  }
  if (/^track\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^track\s+/i, ""));
    return `Track ${lowerFirst(object)} as work progresses`;
  }
  if (/^report\s+/i.test(label)) {
    const object = stripLeadingArticle(label.replace(/^report\s+/i, ""));
    return `Report on ${lowerFirst(object)}`;
  }

  if (context) {
    return `${label}  available in ${lowerFirst(context)}`;
  }
  return `Use ${lowerFirst(label)} in this workflow`;
}

/**
 * Fuller sentence for dedicated module pages  still grounded in the matrix label.
 */
export function featureDetail(
  name: string,
  context: { subModule: string; moduleName: string },
): string {
  const brief = featureBrief(name, context.subModule);
  const endsWithPeriod = /[.!?]$/.test(brief);
  const base = endsWithPeriod ? brief.slice(0, -1) : brief;
  return `${base} inside the ${context.moduleName} module.`;
}
