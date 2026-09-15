import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ClinicVideo } from "@/components/sections/ClinicVideo";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { Hero } from "@/components/sections/Hero";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeJourneySteps } from "@/content/journey";
import { site, whatsappHref } from "@/content/site";
import { featuredTestimonials } from "@/content/testimonials";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/metadata";
import { howToSchema } from "@/lib/structured-data";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = await getDictionary(locale);

  return buildMetadata({
    locale,
    route: "home",
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw;
  const dict = await getDictionary(locale);
  const home = dict.home;

  return (
    <>
      <Hero
        locale={locale}
        dict={dict}
        whatsappHref={whatsappHref(dict.common.whatsappMessage)}
      />

      <TrustBar title={home.trust.title} items={home.trust.items} />

      <ServiceGrid locale={locale} dict={dict} />

      <FeatureGrid
        id="why"
        eyebrow={home.why.eyebrow}
        title={home.why.title}
        text={home.why.text}
        items={home.why.items}
        tone="surface"
      />

      <ClinicVideo locale={locale} dict={dict} />

      <JourneyTimeline
        dict={dict}
        eyebrow={home.journey.eyebrow}
        title={home.journey.title}
        text={home.journey.text}
        steps={homeJourneySteps}
        tone="stone"
        cta={{ label: home.journey.cta, locale }}
      />

      <GalleryPreview
        locale={locale}
        dict={dict}
        eyebrow={home.gallery.eyebrow}
        title={home.gallery.title}
        text={home.gallery.text}
        cta={home.gallery.cta}
        tone="surface"
      />

      <TestimonialsSection
        locale={locale}
        dict={dict}
        ids={featuredTestimonials}
        eyebrow={home.testimonials.eyebrow}
        title={home.testimonials.title}
        text={home.testimonials.text}
        cta={home.testimonials.cta}
        tone="canvas"
      />

      <ConsultationCTA
        locale={locale}
        dict={dict}
        eyebrow={home.cta.eyebrow}
        title={home.cta.title}
        text={home.cta.text}
        points={home.cta.points}
        source="home"
      />

      <JsonLd
        data={howToSchema({
          name: `${site.name} — ${dict.journeyPage.hero.title}`,
          description: dict.journeyPage.hero.text,
          steps: homeJourneySteps.map((step) => dict.journeySteps[step]),
        })}
      />
    </>
  );
}
