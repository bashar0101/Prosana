import type { Metadata } from "next";

import { site } from "@/content/site";
import {
  locales,
  localeHrefLang,
  localeOpenGraph,
  defaultLocale,
  type Locale,
} from "@/i18n/config";
import { href, routes, type RouteKey } from "@/lib/routes";

type BuildMetadataArgs = {
  locale: Locale;
  route: RouteKey;
  title: string;
  description: string;
  /** Absolute or root-relative image path. Defaults to the branded OG image. */
  image?: string;
  keywords?: string[];
};

/**
 * Every page gets a canonical URL, a full hreflang cluster (three locales plus
 * x-default) and OpenGraph/Twitter cards built from the same source of truth.
 */
export function buildMetadata({
  locale,
  route,
  title,
  description,
  image = "/images/og/og-default.jpg",
  keywords,
}: BuildMetadataArgs): Metadata {
  const path = href(locale, route);
  const canonical = `${site.url}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${site.url}${image}`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[localeHrefLang[l]] = `${site.url}${href(l, route)}`;
  }
  languages["x-default"] = `${site.url}${href(defaultLocale, route)}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      siteName: site.legalName,
      title,
      description,
      url: canonical,
      locale: localeOpenGraph[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeOpenGraph[l]),
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

/** Absolute URL for a route — used by the sitemap and structured data. */
export function absoluteUrl(locale: Locale, route: RouteKey): string {
  return `${site.url}${href(locale, route)}`;
}

export const allRouteKeys = Object.keys(routes) as RouteKey[];
