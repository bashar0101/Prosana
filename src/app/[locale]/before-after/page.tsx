import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BeforeAfterGallery } from "@/components/sections/BeforeAfterGallery";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
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
    route: "beforeAfter",
    title: dict.nav.beforeAfter,
    description: dict.beforeAfter.hero.text,
    image: "/images/gallery/hair-1-after.jpg",
  });
}

export default async function BeforeAfterPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const page = dict.beforeAfter;

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        text={page.hero.text}
        crumbs={[{ label: dict.common.home, route: "home" }]}
        current={dict.nav.beforeAfter}
        breadcrumbLabel={dict.common.breadcrumb}
      />

      <Section tone="canvas">
        <Container size="wide">
          <BeforeAfterGallery
            filters={page.filters}
            empty={page.empty}
            labels={{
              before: dict.common.before,
              after: dict.common.after,
              monthsAfter: dict.common.monthsAfter,
              oneMonthAfter: dict.common.oneMonthAfter,
              disclaimer: dict.common.resultsDisclaimer,
            }}
          />
        </Container>
      </Section>

      <ConsultationCTA
        locale={locale}
        dict={dict}
        eyebrow={page.cta.eyebrow}
        title={page.cta.title}
        text={page.cta.text}
        points={dict.home.cta.points}
        source="before-after"
      />

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.common.home, route: "home" },
          { name: dict.nav.beforeAfter, route: "beforeAfter" },
        ])}
      />
    </>
  );
}
