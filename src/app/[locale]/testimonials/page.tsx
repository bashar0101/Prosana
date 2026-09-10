import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { PageHero } from "@/components/sections/PageHero";
import { TestimonialCard } from "@/components/sections/TestimonialsSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Rating } from "@/components/ui/Rating";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, reviewsSchema } from "@/lib/structured-data";
import { formatNumber, interpolate } from "@/lib/utils";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = await getDictionary(locale);

  return buildMetadata({
    locale,
    route: "testimonials",
    title: dict.nav.testimonials,
    description: dict.testimonialsPage.hero.text,
  });
}

export default async function TestimonialsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const page = dict.testimonialsPage;

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        text={page.hero.text}
        crumbs={[{ label: dict.common.home, route: "home" }]}
        current={dict.nav.testimonials}
        breadcrumbLabel={dict.common.breadcrumb}
      />

      <Section tone="canvas" ariaLabelledBy="reviews-heading">
        <Container size="wide">
          <div className="surface-card flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <Eyebrow>{page.ratingSummary.title}</Eyebrow>
              <p className="text-deep-600 mt-3 font-serif text-5xl">
                {site.rating.value.toLocaleString(locale, {
                  minimumFractionDigits: 1,
                })}
                <span className="text-2xl text-slate-300"> / 5</span>
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 sm:items-end">
              <Rating value={site.rating.value} />
              <p className="text-ink-muted text-sm">
                {interpolate(page.ratingSummary.basedOn, {
                  count: formatNumber(site.rating.count, locale),
                })}
              </p>
            </div>
          </div>

          <h2 id="reviews-heading" className="sr-only">
            {page.hero.title}
          </h2>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <li key={item.id}>
                <TestimonialCard dict={dict} id={item.id} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="surface" ariaLabelledBy="video-heading">
        <Container size="wide">
          <SectionHeading
            id="video-heading"
            eyebrow={page.video.eyebrow}
            title={page.video.title}
            text={page.video.text}
          />

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["social-introduction", "social-meaning", "social-invitation"].map(
              (name) => (
                <li
                  key={name}
                  className="surface-card bg-deep-700 relative flex aspect-video items-end overflow-hidden"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[linear-gradient(135deg,#1b2f6a,#3a55a4)]"
                  />
                  <div className="relative flex w-full items-center gap-3 p-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                      </svg>
                    </span>
                    <span className="text-sm text-white/70">
                      {page.video.placeholder}
                    </span>
                  </div>
                </li>
              ),
            )}
          </ul>
        </Container>
      </Section>

      <ConsultationCTA
        locale={locale}
        dict={dict}
        eyebrow={dict.home.cta.eyebrow}
        title={dict.home.cta.title}
        text={dict.home.cta.text}
        points={dict.home.cta.points}
        source="testimonials"
      />

      <JsonLd
        data={[
          reviewsSchema(
            testimonials.map((item) => ({
              name: dict.testimonialItems[item.id].name,
              country: dict.testimonialItems[item.id].country,
              quote: dict.testimonialItems[item.id].quote,
              rating: item.rating,
              date: item.date,
            })),
          ),
          breadcrumbSchema(locale, [
            { name: dict.common.home, route: "home" },
            { name: dict.nav.testimonials, route: "testimonials" },
          ]),
        ]}
      />
    </>
  );
}
