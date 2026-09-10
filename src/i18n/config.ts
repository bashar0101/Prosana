export const locales = ["en", "ar", "tr", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
  tr: "ltr",
  fr: "ltr",
};

/** Native names, shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  tr: "Türkçe",
  fr: "Français",
};

export const localeShortNames: Record<Locale, string> = {
  en: "EN",
  ar: "AR",
  tr: "TR",
  fr: "FR",
};

/** BCP-47 tags used for hreflang and OpenGraph locale metadata. */
export const localeHrefLang: Record<Locale, string> = {
  en: "en",
  ar: "ar",
  tr: "tr",
  fr: "fr",
};

export const localeOpenGraph: Record<Locale, string> = {
  en: "en_US",
  ar: "ar_AE",
  tr: "tr_TR",
  fr: "fr_FR",
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return localeDirection[locale];
}
