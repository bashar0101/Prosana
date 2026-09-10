import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { CheckIcon, CloseIcon } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    route: "whyProsana",
    title: dict.nav.whyProsana,
    description: dict.whyProsana.hero.text,
  });
}

export default async function WhyProsanaPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const why = dict.whyProsana;

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={why.hero.eyebrow}
        title={why.hero.title}
        text={why.hero.text}
        crumbs={[{ label: dict.common.home, route: "home" }]}
        current={dict.nav.whyProsana}
        breadcrumbLabel={dict.common.breadcrumb}
      />

      <FeatureGrid
        id="reasons"
        eyebrow={why.reasons.eyebrow}
        title={why.reasons.title}
        text={why.reasons.text}
        items={why.reasons.items}
        tone="surface"
        numbered
      />

      <Section tone="canvas" ariaLabelledBy="comparison-heading">
        <Container size="wide">
          <SectionHeading
            id="comparison-heading"
            eyebrow={why.comparison.eyebrow}
            title={why.comparison.title}
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[38rem] border-collapse text-start">
              <thead>
                <tr className="border-hairline border-b">
                  <th
                    scope="col"
                    className="eyebrow px-4 py-4 text-start font-semibold text-slate-400"
                  >
                    {why.comparison.columns.feature}
                  </th>
                  <th
                    scope="col"
                    className="eyebrow bg-deep-600 rounded-t-2xl px-4 py-4 text-start font-semibold text-white"
                  >
                    {why.comparison.columns.prosana}
                  </th>
                  <th
                    scope="col"
                    className="eyebrow px-4 py-4 text-start font-semibold text-slate-400"
                  >
                    {why.comparison.columns.alone}
                  </th>
                </tr>
              </thead>
              <tbody>
                {why.comparison.rows.map((row, index) => (
                  <tr key={row.feature} className="border-hairline border-b">
                    <th
                      scope="row"
                      className="px-4 py-5 text-start text-sm font-medium text-slate-700"
                    >
                      {row.feature}
                    </th>
                    <td
                      className={`bg-deep-600/[0.04] px-4 py-5 ${
                        index === why.comparison.rows.length - 1 ? "rounded-b-2xl" : ""
                      }`}
                    >
                      <span className="text-deep-700 flex items-start gap-2.5 text-sm">
                        <CheckIcon className="text-light-600 mt-0.5 size-4 shrink-0" />
                        {row.prosana}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span className="text-ink-muted flex items-start gap-2.5 text-sm">
                        <CloseIcon className="mt-0.5 size-4 shrink-0 text-slate-300" />
                        {row.alone}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <ConsultationCTA
        locale={locale}
        dict={dict}
        eyebrow={dict.home.cta.eyebrow}
        title={dict.home.cta.title}
        text={dict.home.cta.text}
        points={dict.home.cta.points}
        source="why-prosana"
      />

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.common.home, route: "home" },
          { name: dict.nav.whyProsana, route: "whyProsana" },
        ])}
      />
    </>
  );
}
