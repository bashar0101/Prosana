import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { MediaSplit } from "@/components/sections/MediaSplit";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = await getDictionary(locale);

  return buildMetadata({
    locale,
    route: "about",
    title: dict.nav.about,
    description: dict.about.hero.text,
    image: "/images/about/clinic-atmosphere.jpg",
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const about = dict.about;

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        text={about.hero.text}
        crumbs={[{ label: dict.common.home, route: "home" }]}
        current={dict.nav.about}
        breadcrumbLabel={dict.common.breadcrumb}
      />

      <MediaSplit
        id="mission"
        eyebrow={about.mission.eyebrow}
        title={about.mission.title}
        body={about.mission.body}
        image="/images/about/clinic-atmosphere.jpg"
        tone="surface"
      />

      <FeatureGrid
        id="values"
        eyebrow={about.values.eyebrow}
        title={about.values.title}
        items={about.values.items}
        tone="canvas"
        columns={2}
      />

      <StatsBand title={about.stats.title} items={about.stats.items} />

      <MediaSplit
        id="identity"
        eyebrow={about.identity.eyebrow}
        title={about.identity.title}
        body={[about.identity.text]}
        image="/images/brand/reception-signage.jpg"
        imageAlt=""
        reverse
        tone="surface"
      />

      <ConsultationCTA
        locale={locale}
        dict={dict}
        eyebrow={dict.home.cta.eyebrow}
        title={dict.home.cta.title}
        text={dict.home.cta.text}
        points={dict.home.cta.points}
        source="about"
      />

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.common.home, route: "home" },
          { name: dict.nav.about, route: "about" },
        ])}
      />
    </>
  );
}
