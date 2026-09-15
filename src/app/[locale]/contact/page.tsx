import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { countryOptions } from "@/content/countries";
import { mapsQuery, mapsUrl, site, whatsappHref } from "@/content/site";
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
    route: "contact",
    title: dict.nav.contact,
    description: dict.contact.hero.text,
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const page = dict.contact;
  const wa = whatsappHref(dict.common.whatsappMessage);
  const countries = countryOptions(locale);

  const details = [
    {
      icon: <PinIcon />,
      label: page.details.addressLabel,
      value: `${site.address.street}, ${site.address.district}, ${site.address.city}, ${site.address.countryName}`,
      href: mapsUrl,
      external: true,
    },
    {
      icon: <PhoneIcon />,
      label: page.details.phoneLabel,
      value: site.phone,
      href: `tel:${site.phone.replace(/\s/g, "")}`,
      external: false,
    },
    {
      icon: <WhatsAppIcon />,
      label: page.details.whatsappLabel,
      value: site.whatsapp.display,
      href: wa,
      external: true,
    },
    {
      icon: <MailIcon />,
      label: page.details.emailLabel,
      value: site.email,
      href: `mailto:${site.email}`,
      external: false,
    },
    {
      icon: <ClockIcon />,
      label: page.details.hoursLabel,
      value: page.details.hoursValue,
      href: undefined,
      external: false,
    },
  ];

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        text={page.hero.text}
        crumbs={[{ label: dict.common.home, route: "home" }]}
        current={dict.nav.contact}
        breadcrumbLabel={dict.common.breadcrumb}
      />

      <Section tone="canvas" ariaLabelledBy="contact-form-heading">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>{page.details.title}</Eyebrow>

              <ul className="mt-8 space-y-7">
                {details.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <span className="text-light-600 shadow-soft mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-white">
                      <span className="size-4.5">{item.icon}</span>
                    </span>
                    <div className="min-w-0">
                      <p className="eyebrow text-slate-400">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          dir={item.href.startsWith("http") ? undefined : "ltr"}
                          className="hover:text-deep-600 mt-1 inline-block py-1 text-[0.95rem] text-slate-700 underline-offset-4 transition-colors hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1.5 text-[0.95rem] text-slate-700">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="rounded-card border-hairline mt-10 overflow-hidden border">
                <iframe
                  title={page.details.directions}
                  src={`https://www.google.com/maps?q=${mapsQuery}&z=17&hl=${locale}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0"
                />
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-600 mt-3 inline-flex min-h-11 items-center gap-2 py-2 text-sm font-medium underline-offset-4 hover:underline"
              >
                <PinIcon className="size-4" />
                {page.details.directions}
              </a>
            </div>

            <div className="lg:col-span-7">
              <Eyebrow>{page.formSection.eyebrow}</Eyebrow>
              <h2 id="contact-form-heading" className="text-h2 mt-4">
                {page.formSection.title}
              </h2>
              <p className="text-lead text-ink-muted mt-4 max-w-xl">
                {page.formSection.text}
              </p>

              <div className="mt-9">
                <ConsultationForm
                  locale={locale}
                  dict={dict}
                  countries={countries}
                  whatsappHref={wa}
                  source="contact"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: dict.common.home, route: "home" },
          { name: dict.nav.contact, route: "contact" },
        ])}
      />
    </>
  );
}
