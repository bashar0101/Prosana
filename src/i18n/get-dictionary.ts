import "server-only";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

/**
 * Dictionaries are loaded lazily so a request only ever ships the copy for the
 * locale it renders. `en` is the type source; `ar` and `tr` are checked against it.
 */
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/i18n/dictionaries/en").then((m) => m.en),
  ar: () => import("@/i18n/dictionaries/ar").then((m) => m.ar),
  tr: () => import("@/i18n/dictionaries/tr").then((m) => m.tr),
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export type { Dictionary };
