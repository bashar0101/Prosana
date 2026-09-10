import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { MediaSplit } from "@/components/sections/MediaSplit";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { vipServiceImages } from "@/content/hotels";
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
    route: "hotelsVip",
    title: dict.nav.hotelsVip,
    description: dict.hotels.hero.text,
    image: "/images/hotels/suite.jpg",
  });
}

export default async function HotelsVipPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const page = dict.hotels;

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        text={page.hero.text}
        crumbs={[{ label: dict.common.home, route: "home" }]}
        current={dict.nav.hotelsVip}
        breadcrumbLabel={dict.common.breadcrumb}
      />

      <Section tone="surface" space="sm" ariaLabelledBy="vip-intro-heading">
        <Container size="wide">
          <SectionHeading
            id="vip-intro-heading"
            eyebrow={page.intro.eyebrow}
            title={page.intro.title}
            text={page.intro.text}
          />
        </Container>
      </Section>

      {page.services.map((service, index) => (
        <MediaSplit
          key={service.title}
          title={service.title}
          body={[service.text]}
          image={vipServiceImages[index] ?? vipServiceImages[0]}
          reverse={index % 2 === 1}
          tone={index % 2 === 0 ? "canvas" : "surface"}
        />
      ))}

      <Section tone="stone" space="sm" ariaLabelledBy="companion-heading">
        <Container size="wide">
          <SectionHeading
            id="companion-heading"
            eyebrow={page.companion.eyebrow}
            title={page.companion.title}
            text={page.companion.text}
            align="center"
          />
        </Container>
      </Section>

      <ConsultationCTA
        locale={locale}
        dict={dict}
        eyebrow={dict.home.cta.eyebrow}
        title={dict.home.cta.title}
        text={dict.home.cta.text}
        points={dict.home.cta.points}
        source="hotels-vip-services"
      />

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.common.home, route: "home" },
          { name: dict.nav.hotelsVip, route: "hotelsVip" },
        ])}
      />
    </>
  );
}
