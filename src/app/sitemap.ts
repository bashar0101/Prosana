import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import { defaultLocale, localeHrefLang, locales } from "@/i18n/config";
import { href, routeKeys } from "@/lib/routes";

/** Every route in every locale, with a full hreflang alternates cluster. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    routeKeys.map((route) => {
      const languages: Record<string, string> = {};
      for (const alt of locales) {
        languages[localeHrefLang[alt]] = `${site.url}${href(alt, route)}`;
      }
      languages["x-default"] = `${site.url}${href(defaultLocale, route)}`;

      return {
        url: `${site.url}${href(locale, route)}`,
        lastModified,
        changeFrequency: route === "home" ? ("weekly" as const) : ("monthly" as const),
        priority: route === "home" ? 1 : route === "contact" ? 0.9 : 0.8,
        alternates: { languages },
      };
    }),
  );
}
