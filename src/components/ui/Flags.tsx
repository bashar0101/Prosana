import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/*
 * Inline SVG rather than emoji flags: Windows Chrome has no flag glyphs and
 * renders 🇬🇧 as the letters "GB" in a box, which looks broken on the platform
 * a large share of this audience browses from.
 *
 * Simplified at the size these actually render (about 20px wide) — the shapes
 * that carry recognition, not heraldic accuracy. Corners are rounded by the
 * wrapper's CSS clip so no per-flag clipPath id can collide when two flags
 * appear on the same page.
 */

type FlagProps = { className?: string };

const VIEWBOX = "0 0 24 16";

function UnitedKingdom() {
  return (
    <svg viewBox={VIEWBOX} aria-hidden className="h-full w-full">
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#FFF" strokeWidth="3.2" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.8" />
      <path d="M12 0v16M0 8h24" stroke="#FFF" strokeWidth="5.4" />
      <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="3.2" />
    </svg>
  );
}

function SaudiArabia() {
  return (
    <svg viewBox={VIEWBOX} aria-hidden className="h-full w-full">
      <rect width="24" height="16" fill="#165D31" />
      {/* Stylised shahada script above the sword. */}
      <g fill="#FFF">
        <rect x="5" y="5.4" width="14" height="0.9" rx="0.45" />
        <rect x="6.5" y="3.6" width="2.2" height="0.9" rx="0.45" />
        <rect x="10" y="3.6" width="4" height="0.9" rx="0.45" />
        <rect x="15.3" y="3.6" width="2.2" height="0.9" rx="0.45" />
      </g>
      {/* Sword: blade with a hilt at the left. */}
      <g fill="#FFF">
        <rect x="5" y="9.6" width="13" height="1" rx="0.5" />
        <rect x="17.4" y="8.9" width="1.6" height="2.4" rx="0.8" />
      </g>
    </svg>
  );
}

function Turkey() {
  return (
    <svg viewBox={VIEWBOX} aria-hidden className="h-full w-full">
      <rect width="24" height="16" fill="#E30A17" />
      <circle cx="9.4" cy="8" r="4" fill="#FFF" />
      <circle cx="10.8" cy="8" r="3.2" fill="#E30A17" />
      <path
        d="M15.1 8l-2.2.72 1.36-1.88v2.32l1.36 1.88z"
        fill="#FFF"
        transform="rotate(-8 14.3 8)"
      />
    </svg>
  );
}

function France() {
  return (
    <svg viewBox={VIEWBOX} aria-hidden className="h-full w-full">
      <rect width="8" height="16" fill="#002395" />
      <rect x="8" width="8" height="16" fill="#FFF" />
      <rect x="16" width="8" height="16" fill="#ED2939" />
    </svg>
  );
}

const flags: Record<Locale, () => React.ReactElement> = {
  en: UnitedKingdom,
  ar: SaudiArabia,
  tr: Turkey,
  fr: France,
};

/**
 * Decorative only — every place this is used also shows the language name, so
 * nothing depends on the flag being read. Flags map to the market each language
 * mainly serves, not to the language itself.
 */
export function FlagIcon({ locale, className }: FlagProps & { locale: Locale }) {
  const Flag = flags[locale];

  return (
    <span
      aria-hidden
      className={cn(
        "inline-block shrink-0 overflow-hidden rounded-[3px] ring-1 ring-black/10",
        className ?? "h-3.5 w-5",
      )}
    >
      <Flag />
    </span>
  );
}
