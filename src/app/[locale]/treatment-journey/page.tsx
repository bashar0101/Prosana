import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { journeySteps } from "@/content/journey";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, howToSchema } from "@/lib/structured-data";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = await getDictionary(locale);

  return buildMetadata({
    locale,
    route: "treatmentJourney",
    title: dict.nav.treatmentJourney,
    description: dict.journeyPage.hero.text,
    image: "/images/journey/travel.jpg",
  });
}

export default async function TreatmentJourneyPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const page = dict.journeyPage;

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        text={page.hero.text}
        crumbs={[{ label: dict.common.home, route: "home" }]}
        current={dict.nav.treatmentJourney}
        breadcrumbLabel={dict.common.breadcrumb}
      />

      <JourneyTimeline
        dict={dict}
        eyebrow={page.intro.title}
        title={page.intro.text}
        tone="surface"
        variant="detailed"
        id="steps"
      />

      <ConsultationCTA
        locale={locale}
        dict={dict}
        eyebrow={page.cta.eyebrow}
        title={page.cta.title}
        text={page.cta.text}
        points={dict.home.cta.points}
        source="treatment-journey"
      />

      <JsonLd
        data={[
          howToSchema({
            name: page.hero.title,
            description: page.hero.text,
            steps: journeySteps.map((step) => dict.journeySteps[step.id]),
          }),
          breadcrumbSchema(locale, [
            { name: dict.common.home, route: "home" },
            { name: dict.nav.treatmentJourney, route: "treatmentJourney" },
          ]),
        ]}
      />
    </>
  );
}
