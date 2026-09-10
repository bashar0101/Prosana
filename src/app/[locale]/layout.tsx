import type { Metadata, Viewport } from "next";
import { Noto_Kufi_Arabic, Noto_Sans, Noto_Serif } from "next/font/google";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { site, whatsappHref } from "@/content/site";
import { getDirection, isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { medicalBusinessSchema, webSiteSchema } from "@/lib/structured-data";

import "@/app/globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  variable: "--font-noto-serif",
  display: "swap",
});

// Arabic face is only fetched when Arabic glyphs are actually rendered.
const notoArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-arabic",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#223B84",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};

  const dict = await getDictionary(raw);

  return {
    metadataBase: new URL(site.url),
    applicationName: site.legalName,
    title: {
      default: dict.meta.title,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    authors: [{ name: site.legalName, url: site.url }],
    creator: site.legalName,
    publisher: site.legalName,
    category: "health",
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    icons: {
      icon: [
        { url: "/icons/favicon.svg", type: "image/svg+xml" },
        { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: "/icons/apple-touch-icon.png",
      shortcut: "/favicon.ico",
    },
    manifest: "/manifest.webmanifest",
    formatDetection: { telephone: true, address: true, email: true },
    other: {
      "geo.region": "TR-34",
      "geo.placename": site.address.city,
      "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
      ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const dir = getDirection(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${notoSans.variable} ${notoSerif.variable} ${notoArabic.variable}`}
      suppressHydrationWarning
    >
      {/*
        Extensions such as Grammarly and password managers inject attributes
        (data-gr-ext-installed, data-new-gr-c-s-check-loaded, …) onto <body>
        before React hydrates, which React reports as a hydration mismatch.
        suppressHydrationWarning only applies one level deep, so <html> alone
        does not cover this — and it silences attribute noise on this element
        only, not on anything the app actually renders inside it.
      */}
      <body className="flex min-h-dvh flex-col antialiased" suppressHydrationWarning>
        <a
          href="#main"
          className="focus:bg-deep-600 sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[100] focus:rounded-full focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          {dict.common.skipToContent}
        </a>

        <Header locale={locale} dict={dict} />

        <main id="main" className="flex-1">
          {children}
        </main>

        <Footer locale={locale} dict={dict} />

        <WhatsAppButton
          href={whatsappHref(dict.common.whatsappMessage)}
          label={dict.common.whatsappLong}
        />

        <JsonLd
          data={[
            medicalBusinessSchema(locale, dict.meta.description),
            webSiteSchema(locale),
          ]}
        />
      </body>
    </html>
  );
}
