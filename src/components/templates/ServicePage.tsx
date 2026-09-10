import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { MediaSplit } from "@/components/sections/MediaSplit";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceById, type ServiceId } from "@/content/services";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import {
  breadcrumbSchema,
  faqSchema,
  medicalProcedureSchema,
} from "@/lib/structured-data";

type ServicePageProps = {
  locale: Locale;
  dict: Dictionary;
  serviceId: ServiceId;
};

/** Shared layout for the three treatment pages — one structure, three datasets. */
export function ServicePage({ locale, dict, serviceId }: ServicePageProps) {
  const service = serviceById[serviceId];
  const copy = dict.services[serviceId];

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        text={copy.hero.text}
        crumbs={[{ label: dict.common.home, route: "home" }]}
        current={dict.nav[service.route]}
        breadcrumbLabel={dict.common.breadcrumb}
      />

      <MediaSplit
        id="introduction"
        eyebrow={copy.intro.eyebrow}
        title={copy.intro.title}
        body={copy.intro.body}
        image={service.image}
        tone="surface"
      >
        <dl className="border-hairline mt-9 grid grid-cols-3 gap-6 border-t pt-7">
          {copy.intro.highlights.map((highlight) => (
            <div key={highlight.title}>
              <dt className="text-deep-600 font-serif text-xl sm:text-2xl">
                {highlight.title}
              </dt>
              <dd className="text-ink-muted mt-1.5 text-sm">{highlight.text}</dd>
            </div>
          ))}
        </dl>
      </MediaSplit>

      <FeatureGrid
        id="benefits"
        eyebrow={copy.primary.eyebrow}
        title={copy.primary.title}
        text={copy.primary.text}
        items={copy.primary.items}
        tone="canvas"
        columns={copy.primary.items.length > 4 ? 3 : 2}
      />

      <FeatureGrid
        id="process"
        eyebrow={copy.secondary.eyebrow}
        title={copy.secondary.title}
        text={copy.secondary.text}
        items={copy.secondary.items}
        tone="surface"
        columns={2}
        numbered
      />

      <GalleryPreview
        locale={locale}
        dict={dict}
        eyebrow={copy.gallery.eyebrow}
        title={copy.gallery.title}
        text={copy.gallery.text}
        category={service.gallery}
        cta={dict.common.viewGallery}
        tone="stone"
      />

      <FaqSection
        eyebrow={copy.faq.eyebrow}
        title={copy.faq.title}
        text={copy.faq.text}
        items={copy.faq.items}
        tone="canvas"
      />

      <ConsultationCTA
        locale={locale}
        dict={dict}
        eyebrow={copy.form.eyebrow}
        title={copy.form.title}
        text={copy.form.text}
        source={service.route}
        defaultTreatment={serviceId}
      />

      <JsonLd
        data={[
          medicalProcedureSchema({
            locale,
            route: service.route,
            name: copy.hero.eyebrow,
            description: copy.hero.text,
            procedureType: service.procedureType,
            image: service.image,
          }),
          faqSchema(copy.faq.items),
          breadcrumbSchema(locale, [
            { name: dict.common.home, route: "home" },
            { name: dict.nav[service.route], route: service.route },
          ]),
        ]}
      />
    </>
  );
}
