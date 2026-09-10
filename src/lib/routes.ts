import type { Locale } from "@/i18n/config";

/**
 * Route keys are stable identifiers used across navigation, metadata,
 * breadcrumbs and the sitemap. Path segments are shared across locales and
 * always prefixed with the locale (/en/..., /ar/..., /tr/...).
 */
export const routes = {
  home: "",
  hairTransplant: "hair-transplant",
  dentalTreatments: "dental-treatments",
  plasticSurgery: "plastic-surgery",
  about: "about",
  whyProsana: "why-prosana",
  beforeAfter: "before-after",
  testimonials: "testimonials",
  treatmentJourney: "treatment-journey",
  hotelsVip: "hotels-vip-services",
  contact: "contact",
} as const;

export type RouteKey = keyof typeof routes;

export const routeKeys = Object.keys(routes) as RouteKey[];

/** Build a locale-prefixed href for a route key. */
export function href(locale: Locale, key: RouteKey, hash?: string): string {
  const segment = routes[key];
  const path = segment ? `/${locale}/${segment}` : `/${locale}`;
  return hash ? `${path}#${hash}` : path;
}

/** Same path under a different locale — used by the language switcher. */
export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  parts[0] = nextLocale;
  return `/${parts.join("/")}`;
}

/** Primary header navigation, in order. */
export const primaryNav: RouteKey[] = [
  "home",
  "hairTransplant",
  "dentalTreatments",
  "plasticSurgery",
  "about",
  "beforeAfter",
  "testimonials",
  "contact",
];

/** Secondary links surfaced in the footer and the mobile drawer. */
/**
 * Desktop header links. "home" is omitted — the logo already links there, and
 * dropping it keeps all seven labels on one line down to the xl breakpoint.
 */
export const desktopNav: RouteKey[] = [
  "hairTransplant",
  "dentalTreatments",
  "plasticSurgery",
  "beforeAfter",
  "testimonials",
  "about",
  "contact",
];

export const secondaryNav: RouteKey[] = ["whyProsana", "treatmentJourney", "hotelsVip"];

export const treatmentNav: RouteKey[] = [
  "hairTransplant",
  "dentalTreatments",
  "plasticSurgery",
];
