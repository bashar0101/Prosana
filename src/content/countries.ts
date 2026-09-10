/**
 * ISO 3166-1 alpha-2 codes offered in the consultation form.
 * Display names are resolved per locale with Intl.DisplayNames, so no country
 * name ever needs translating by hand.
 */
export const priorityCountries = [
  "SA",
  "AE",
  "KW",
  "QA",
  "BH",
  "OM",
  "IQ",
  "JO",
  "LB",
  "EG",
  "DZ",
  "MA",
  "TN",
  "LY",
  "TR",
] as const;

export const otherCountries = [
  "GB",
  "DE",
  "FR",
  "NL",
  "BE",
  "IT",
  "ES",
  "PT",
  "SE",
  "NO",
  "DK",
  "FI",
  "IE",
  "CH",
  "AT",
  "PL",
  "RO",
  "BG",
  "GR",
  "RU",
  "UA",
  "AZ",
  "KZ",
  "US",
  "CA",
  "AU",
  "NZ",
  "IN",
  "PK",
  "BD",
  "ID",
  "MY",
  "SG",
  "NG",
  "KE",
  "ZA",
  "SN",
  "CI",
  "SD",
  "SO",
] as const;

export const countryCodes = [...priorityCountries, ...otherCountries];

export type CountryCode = (typeof countryCodes)[number];

/** Sorted, locale-aware country options for a <select>. */
export function countryOptions(locale: string): { code: string; label: string }[] {
  const display = new Intl.DisplayNames([locale], { type: "region" });
  const label = (code: string) => display.of(code) ?? code;

  const priority = priorityCountries.map((code) => ({ code, label: label(code) }));
  const rest = otherCountries
    .map((code) => ({ code, label: label(code) }))
    .sort((a, b) => a.label.localeCompare(b.label, locale));

  return [...priority, ...rest];
}

export function countryName(code: string, locale: string): string {
  try {
    return new Intl.DisplayNames([locale], { type: "region" }).of(code) ?? code;
  } catch {
    return code;
  }
}
