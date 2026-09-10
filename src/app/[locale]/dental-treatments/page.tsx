import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePage } from "@/components/templates/ServicePage";
import { serviceById } from "@/content/services";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/metadata";

const SERVICE_ID = "dentalTreatments" as const;

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = await getDictionary(locale);
  const copy = dict.services[SERVICE_ID];

  return buildMetadata({
    locale,
    route: serviceById[SERVICE_ID].route,
    title: copy.hero.eyebrow,
    description: copy.hero.text,
    image: serviceById[SERVICE_ID].image,
    keywords: dict.meta.keywords,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return <ServicePage locale={locale} dict={dict} serviceId={SERVICE_ID} />;
}
