import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Accessibility,
  AlignCenter,
  AlignLeft,
  AlignRight,
  Eye,
  Heading1,
  Link2,
  Minus,
  MoonStar,
  Palette,
  Plus,
  RotateCcw,
  SunMedium,
  Trees,
  Type,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

type TextAlignMode = "left" | "center" | "right";
type ThemeId = "classic" | "mocha" | "eucalyptus" | "midnight";

type AccessibilitySettings = {
  fontScale: number;
  lineHeight: number;
  letterSpacing: number;
  textAlign: TextAlignMode;
  readableFont: boolean;
  highlightLinks: boolean;
  highlightHeadings: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  theme: ThemeId;
};

type AccessibilityContextValue = {
  settings: AccessibilitySettings;
  hasCustomizations: boolean;
  updateSetting: <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K],
  ) => void;
  adjustSetting: (key: "fontScale" | "lineHeight" | "letterSpacing", delta: number) => void;
  resetSettings: () => void;
};

type ThemeOption = {
  id: ThemeId;
  label: string;
  tone: string;
  icon: typeof Palette;
  swatches: string[];
};

const STORAGE_KEY = "kiduart-accessibility-settings";

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontScale: 1,
  lineHeight: 1.6,
  letterSpacing: 0,
  textAlign: "left",
  readableFont: false,
  highlightLinks: false,
  highlightHeadings: false,
  highContrast: false,
  reducedMotion: false,
  theme: "classic",
};

const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "classic",
    label: "Classic Light",
    tone: "Navy, teal, sky, beige",
    icon: SunMedium,
    swatches: ["#2f4156", "#567c8d", "#cbd9e6", "#f5efeb"],
  },
  {
    id: "mocha",
    label: "Mocha Dust",
    tone: "Warm taupe and espresso",
    icon: Palette,
    swatches: ["#736356", "#f2dac4", "#bfae9f", "#592b1b"],
  },
  {
    id: "eucalyptus",
    label: "Eucalyptus Mist",
    tone: "Soft sage and plaster",
    icon: Trees,
    swatches: ["#98aa9d", "#b3c9d6", "#f2efe2", "#697c70"],
  },
  {
    id: "midnight",
    label: "Midnight Contrast",
    tone: "Dark, calm, high contrast",
    icon: MoonStar,
    swatches: ["#1f2d3d", "#335c67", "#f6f1e9", "#f0b24b"],
  },
];

const SETTING_LIMITS = {
  fontScale: { min: 0.9, max: 1.3, step: 0.1 },
  lineHeight: { min: 1.4, max: 2, step: 0.1 },
  letterSpacing: { min: 0, max: 0.12, step: 0.02 },
} as const;

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

function clampValue(key: keyof typeof SETTING_LIMITS, value: number) {
  const { min, max } = SETTING_LIMITS[key];
  return Math.min(max, Math.max(min, Number(value.toFixed(2))));
}

function mergeSettings(value: unknown): AccessibilitySettings {
  if (!value || typeof value !== "object") {
    return DEFAULT_SETTINGS;
  }

  const candidate = value as Partial<AccessibilitySettings>;
  const validTheme = THEME_OPTIONS.some((theme) => theme.id === candidate.theme);

  return {
    fontScale: clampValue("fontScale", candidate.fontScale ?? DEFAULT_SETTINGS.fontScale),
    lineHeight: clampValue("lineHeight", candidate.lineHeight ?? DEFAULT_SETTINGS.lineHeight),
    letterSpacing: clampValue("letterSpacing", candidate.letterSpacing ?? DEFAULT_SETTINGS.letterSpacing),
    textAlign:
      candidate.textAlign === "center" || candidate.textAlign === "right"
        ? candidate.textAlign
        : DEFAULT_SETTINGS.textAlign,
    readableFont: Boolean(candidate.readableFont),
    highlightLinks: Boolean(candidate.highlightLinks),
    highlightHeadings: Boolean(candidate.highlightHeadings),
    highContrast: Boolean(candidate.highContrast),
    reducedMotion: Boolean(candidate.reducedMotion),
    theme: validTheme ? (candidate.theme as ThemeId) : DEFAULT_SETTINGS.theme,
  };
}

function hasChanges(settings: AccessibilitySettings) {
  return JSON.stringify(settings) !== JSON.stringify(DEFAULT_SETTINGS);
}

function getProgress(value: number, min: number, max: number) {
  return ((value - min) / (max - min)) * 100;
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    try {
      const savedSettings = window.localStorage.getItem(STORAGE_KEY);
      if (!savedSettings) {
        return;
      }

      setSettings(mergeSettings(JSON.parse(savedSettings)));
    } catch {
      setSettings(DEFAULT_SETTINGS);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--a11y-font-scale", settings.fontScale.toString());
    root.style.setProperty("--a11y-line-height", settings.lineHeight.toString());
    root.style.setProperty("--a11y-letter-spacing", `${settings.letterSpacing}em`);
    root.style.setProperty("--a11y-text-align", settings.textAlign);
    root.dataset.theme = settings.theme;

    root.classList.toggle("a11y-readable-font", settings.readableFont);
    root.classList.toggle("a11y-highlight-links", settings.highlightLinks);
    root.classList.toggle("a11y-highlight-headings", settings.highlightHeadings);
    root.classList.toggle("a11y-high-contrast", settings.highContrast);
    root.classList.toggle("a11y-reduced-motion", settings.reducedMotion);

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const value = useMemo<AccessibilityContextValue>(
    () => ({
      settings,
      hasCustomizations: hasChanges(settings),
      updateSetting: (key, value) => {
        setSettings((current) => ({ ...current, [key]: value }));
      },
      adjustSetting: (key, delta) => {
        setSettings((current) => ({
          ...current,
          [key]: clampValue(key, current[key] + delta),
        }));
      },
      resetSettings: () => {
        setSettings(DEFAULT_SETTINGS);
      },
    }),
    [settings],
  );

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
}

function useAccessibility() {
  const context = useContext(AccessibilityContext);

  if (!context) {
    throw new Error("AccessibilityWidget must be used within AccessibilityProvider.");
  }

  return context;
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-teal/90">{children}</p>;
}

function ToggleCard({
  icon,
  title,
  description,
  checked,
  onToggle,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "flex min-h-36 flex-col rounded-3xl border p-4 text-left transition-all",
        checked
          ? "border-brand-teal bg-brand-teal/10 shadow-[0_12px_30px_rgba(10,154,170,0.12)]"
          : "border-brand-navy/10 bg-white hover:border-brand-teal/30 hover:bg-white",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-beige text-brand-navy shadow-sm">
          {icon}
        </div>
        <span
          className={cn(
            "inline-flex min-w-14 items-center justify-center rounded-full px-3 py-1.5 text-[11px] font-bold",
            checked ? "bg-brand-teal text-white" : "bg-brand-navy/8 text-brand-navy/60",
          )}
        >
          {checked ? "ON" : "OFF"}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold leading-5 text-brand-navy">{title}</p>
        <p className="mt-2 text-xs leading-6 text-brand-navy/60">{description}</p>
      </div>
    </button>
  );
}

function StepCard({
  title,
  helper,
  value,
  progress,
  onDecrease,
  onIncrease,
}: {
  title: string;
  helper: string;
  value: string;
  progress: number;
  onDecrease: () => void;
  onIncrease: () => void;
}) {
  return (
    <div className="rounded-3xl border border-brand-navy/10 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-brand-navy">{title}</p>
          <p className="mt-1 text-xs leading-6 text-brand-navy/55">{helper}</p>
        </div>
        <span className="rounded-full bg-brand-beige px-3 py-1.5 text-xs font-semibold text-brand-navy/70">
          {value}
        </span>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrease}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-navy/10 text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
          aria-label={`Decrease ${title}`}
        >
          <Minus className="h-4 w-4" />
        </button>
        <div className="h-2 flex-1 rounded-full bg-brand-beige">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-teal to-brand-orange transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <button
          type="button"
          onClick={onIncrease}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-navy/10 text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
          aria-label={`Increase ${title}`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function AlignButton({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  icon: typeof AlignLeft;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-2xl border p-4 transition-all",
        active
          ? "border-brand-teal bg-brand-teal/10 text-brand-teal"
          : "border-brand-navy/10 bg-white text-brand-navy hover:border-brand-teal/30",
      )}
    >
      <Icon className="mx-auto h-5 w-5" />
      <span className="mt-3 block text-xs font-semibold">{label}</span>
    </button>
  );
}

function ThemeCard({
  theme,
  selected,
  onSelect,
}: {
  theme: ThemeOption;
  selected: boolean;
  onSelect: () => void;
}) {
  const Icon = theme.icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "rounded-3xl border p-4 text-left transition-all",
        selected
          ? "border-brand-teal bg-brand-teal/10 shadow-[0_12px_30px_rgba(10,154,170,0.12)]"
          : "border-brand-navy/10 bg-white hover:border-brand-teal/30",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-beige text-brand-navy">
          <Icon className="h-5 w-5" />
        </div>
        {selected && (
          <span className="rounded-full bg-brand-teal px-3 py-1 text-[11px] font-bold text-white">
            ACTIVE
          </span>
        )}
      </div>
      <p className="mt-4 text-sm font-semibold text-brand-navy">{theme.label}</p>
      <p className="mt-1 text-xs leading-6 text-brand-navy/60">{theme.tone}</p>
      <div className="mt-4 flex gap-2">
        {theme.swatches.map((swatch) => (
          <span
            key={swatch}
            className="h-6 flex-1 rounded-full border border-black/5"
            style={{ backgroundColor: swatch }}
          />
        ))}
      </div>
    </button>
  );
}

export function AccessibilityWidget() {
  const { settings, hasCustomizations, updateSetting, adjustSetting, resetSettings } = useAccessibility();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <>
          {hasCustomizations && (
            <div className="pointer-events-none fixed bottom-[5.6rem] left-5 z-50 sm:bottom-[6.1rem] sm:left-6">
              <div className="a11y-tooltip-sway relative max-w-[16rem] rounded-2xl border border-brand-navy/10 bg-card/95 px-4 py-3 text-sm text-brand-navy shadow-xl backdrop-blur">
                <p className="font-semibold">You can reset your default settings from here</p>
                <div className="absolute -bottom-2 left-5 h-4 w-4 rotate-45 rounded-[4px] border-b border-r border-brand-navy/10 bg-card/95" />
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-brand-navy/15 bg-card text-brand-navy shadow-xl transition-transform hover:scale-105 sm:bottom-6 sm:left-6"
            aria-label="Open accessibility controls"
          >
            <Accessibility className="h-7 w-7" />
          </button>
        </>
      )}

      {isOpen && (
        <>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-brand-navy/20 backdrop-blur-[2px] md:bg-transparent md:backdrop-blur-0"
            aria-label="Close accessibility controls overlay"
          />

          <div className="fixed inset-x-2 bottom-2 top-auto z-50 flex max-h-[78vh] flex-col overflow-hidden rounded-[30px] bg-background shadow-[0_30px_70px_rgba(0,48,73,0.22)] sm:inset-x-4 sm:bottom-4 md:bottom-6 md:left-6 md:right-auto md:w-[48rem] md:max-h-[calc(100vh-7rem)]"> {/* //border border-brand-navy/10  */}
            <div className="bg-brand-navy px-5 py-5 text-white">
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-sm">
                  <p className="text-xl font-bold text-white">Accessibility Tools</p>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    Adjust the complete website experience and keep your preferences saved until you reset them.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Close accessibility controls"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className={cn("mt-5 grid gap-3", hasCustomizations ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1")}>
                {hasCustomizations && (
                  <button
                    type="button"
                    onClick={resetSettings}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-brand-navy transition-transform hover:-translate-y-0.5"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset to Default
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => updateSetting("reducedMotion", !settings.reducedMotion)}
                  className={cn(
                    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition-colors",
                    settings.reducedMotion
                      ? "border-white bg-white/15 text-white"
                      : "border-white/25 text-white/85 hover:bg-white/10",
                  )}
                >
                  <Eye className="h-4 w-4" />
                  {settings.reducedMotion ? "Motion Reduced" : "Reduce Motion"}
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-7 overflow-y-auto px-5 py-5 sm:px-6">
              {/* <section>
                <SectionTitle>Theme Settings</SectionTitle>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {THEME_OPTIONS.map((theme) => (
                    <ThemeCard
                      key={theme.id}
                      theme={theme}
                      selected={settings.theme === theme.id}
                      onSelect={() => updateSetting("theme", theme.id)}
                    />
                  ))}
                </div>
              </section> */}

              <section>
                <SectionTitle>Content Adjustments</SectionTitle>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <StepCard
                    title="Content Scaling"
                    helper="Increase or reduce overall text size."
                    value={`${Math.round(settings.fontScale * 100)}%`}
                    progress={getProgress(settings.fontScale, SETTING_LIMITS.fontScale.min, SETTING_LIMITS.fontScale.max)}
                    onDecrease={() => adjustSetting("fontScale", -SETTING_LIMITS.fontScale.step)}
                    onIncrease={() => adjustSetting("fontScale", SETTING_LIMITS.fontScale.step)}
                  />
                  <ToggleCard
                    icon={<Type className="h-5 w-5" />}
                    title="Readable Font"
                    description="Switch to a cleaner reading-focused font family."
                    checked={settings.readableFont}
                    onToggle={() => updateSetting("readableFont", !settings.readableFont)}
                  />
                  <StepCard
                    title="Line Height"
                    helper="Open up paragraph spacing for easier reading."
                    value={settings.lineHeight.toFixed(1)}
                    progress={getProgress(settings.lineHeight, SETTING_LIMITS.lineHeight.min, SETTING_LIMITS.lineHeight.max)}
                    onDecrease={() => adjustSetting("lineHeight", -SETTING_LIMITS.lineHeight.step)}
                    onIncrease={() => adjustSetting("lineHeight", SETTING_LIMITS.lineHeight.step)}
                  />
                  <StepCard
                    title="Letter Spacing"
                    helper="Improve scanability by adjusting character spacing."
                    value={`${settings.letterSpacing.toFixed(2)}em`}
                    progress={getProgress(settings.letterSpacing, SETTING_LIMITS.letterSpacing.min, SETTING_LIMITS.letterSpacing.max)}
                    onDecrease={() => adjustSetting("letterSpacing", -SETTING_LIMITS.letterSpacing.step)}
                    onIncrease={() => adjustSetting("letterSpacing", SETTING_LIMITS.letterSpacing.step)}
                  />
                </div>
              </section>

              <section>
                <SectionTitle>Focus & Visibility</SectionTitle>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <ToggleCard
                    icon={<Link2 className="h-5 w-5" />}
                    title="Highlight Links"
                    description="Underline and emphasize clickable links throughout the site."
                    checked={settings.highlightLinks}
                    onToggle={() => updateSetting("highlightLinks", !settings.highlightLinks)}
                  />
                  <ToggleCard
                    icon={<Heading1 className="h-5 w-5" />}
                    title="Highlight Titles"
                    description="Make headings easier to identify while scanning sections."
                    checked={settings.highlightHeadings}
                    onToggle={() => updateSetting("highlightHeadings", !settings.highlightHeadings)}
                  />
                  <ToggleCard
                    icon={<Eye className="h-5 w-5" />}
                    title="High Contrast"
                    description="Strengthen contrast and focus states for better visibility."
                    checked={settings.highContrast}
                    onToggle={() => updateSetting("highContrast", !settings.highContrast)}
                  />
                </div>
              </section>

              <section>
                <SectionTitle>Text Alignment</SectionTitle>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <AlignButton
                    label="Left"
                    icon={AlignLeft}
                    active={settings.textAlign === "left"}
                    onClick={() => updateSetting("textAlign", "left")}
                  />
                  <AlignButton
                    label="Center"
                    icon={AlignCenter}
                    active={settings.textAlign === "center"}
                    onClick={() => updateSetting("textAlign", "center")}
                  />
                  <AlignButton
                    label="Right"
                    icon={AlignRight}
                    active={settings.textAlign === "right"}
                    onClick={() => updateSetting("textAlign", "right")}
                  />
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
}
