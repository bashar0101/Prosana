import { mapsUrl, site } from "@/content/site";
import { locales, localeHrefLang, type Locale } from "@/i18n/config";
import { href, type RouteKey } from "@/lib/routes";

type Json = Record<string, unknown>;

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

/**
 * Derived from the locale config rather than hand-listed, so adding a language
 * to the site cannot leave the structured data silently under-reporting it.
 */
function availableLanguages(): Json[] {
  const display = new Intl.DisplayNames(["en"], { type: "language" });
  return locales.map((locale) => ({
    "@type": "Language",
    name: display.of(localeHrefLang[locale]) ?? locale,
    alternateName: localeHrefLang[locale],
  }));
}

/**
 * MedicalBusiness with a full postal address, geo point and opening hours —
 * the local-SEO backbone for "medical tourism Istanbul" queries.
 */
export function medicalBusinessSchema(locale: Locale, description: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalClinic", "TouristAttraction"],
    "@id": ORG_ID,
    name: site.legalName,
    alternateName: site.name,
    slogan: site.tagline,
    url: `${site.url}${href(locale, "home")}`,
    logo: `${site.url}/brand/prosana-logo.svg`,
    image: `${site.url}/images/og/og-default.jpg`,
    description,
    email: site.email,
    telephone: site.phone,
    priceRange: "$$$",
    currenciesAccepted: "EUR, USD, TRY",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.district,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Türkiye" },
    ],
    availableLanguage: availableLanguages(),
    medicalSpecialty: ["PlasticSurgery", "Dentistry", "Dermatology"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...site.hours.days],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: Object.values(site.social),
    hasMap: mapsUrl,
  };
}

export function webSiteSchema(locale: Locale): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${site.url}${href(locale, "home")}`,
    name: site.legalName,
    inLanguage: locale,
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(
  locale: Locale,
  trail: { name: string; route: RouteKey }[],
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${href(locale, item.route)}`,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function medicalProcedureSchema(args: {
  locale: Locale;
  route: RouteKey;
  name: string;
  description: string;
  procedureType: string;
  image: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: args.name,
    description: args.description,
    procedureType: `https://schema.org/${args.procedureType}`,
    bodyLocation: "Head and body",
    howPerformed: args.description,
    url: `${site.url}${href(args.locale, args.route)}`,
    image: `${site.url}${args.image}`,
    provider: { "@id": ORG_ID },
  };
}

export function reviewsSchema(
  reviews: {
    name: string;
    country: string;
    quote: string;
    rating: number;
    date: string;
  }[],
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": ORG_ID,
    name: site.legalName,
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name, homeLocation: review.country },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      datePublished: review.date,
      reviewBody: review.quote,
    })),
  };
}

export function howToSchema(args: {
  name: string;
  description: string;
  steps: { title: string; text: string }[];
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: args.name,
    description: args.description,
    step: args.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text,
    })),
  };
}
