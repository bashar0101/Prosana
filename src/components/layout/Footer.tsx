import Link from "next/link";

import { FooterContactForm } from "@/components/forms/FooterContactForm";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";
import { ProfileMark } from "@/components/media/ProfileMark";
import { mapsUrl, site, whatsappHref } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { href, secondaryNav, treatmentNav } from "@/lib/routes";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: FooterProps) {
  const wa = whatsappHref(dict.common.whatsappMessage);
  const companyLinks = ["about", ...secondaryNav, "beforeAfter", "testimonials"] as const;

  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white">
      <ProfileMark className="pointer-events-none absolute -end-10 top-10 h-80 text-white/[0.04] sm:h-[26rem]" />

      <Container size="wide">
        <div className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
          {/* Brand + intro */}
          <div className="lg:col-span-4">
            <Logo locale={locale} tone="white" label={site.legalName} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              {dict.footer.intro}
            </p>
            <div className="mt-7">
              <LanguageSwitcher
                locale={locale}
                label={dict.common.chooseLanguage}
                tone="light"
                className="inline-block"
              />
            </div>
          </div>

          {/* Treatments */}
          <nav aria-label={dict.footer.treatmentsTitle} className="lg:col-span-2">
            <h2 className="eyebrow text-light-300">{dict.footer.treatmentsTitle}</h2>
            <ul className="mt-5 space-y-3">
              {treatmentNav.map((key) => (
                <li key={key}>
                  <Link
                    href={href(locale, key)}
                    className="inline-block py-1 text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label={dict.footer.companyTitle} className="lg:col-span-2">
            <h2 className="eyebrow text-light-300">{dict.footer.companyTitle}</h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((key) => (
                <li key={key}>
                  <Link
                    href={href(locale, key)}
                    className="inline-block py-1 text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h2 className="eyebrow text-light-300">{dict.footer.contactTitle}</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <PinIcon className="text-light-400 mt-0.5 size-4 shrink-0" />
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {site.address.street}, {site.address.district}, {site.address.city},{" "}
                  {site.address.countryName}
                </a>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="text-light-400 mt-0.5 size-4 shrink-0" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  dir="ltr"
                  className="inline-block py-1 text-white/70 transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon className="text-light-400 mt-0.5 size-4 shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  dir="ltr"
                  className="inline-block py-1 text-white/70 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon className="text-light-400 mt-0.5 size-4 shrink-0" />
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                  className="inline-block py-1 text-white/70 transition-colors hover:text-white"
                >
                  {site.whatsapp.display}
                </a>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="text-light-400 mt-0.5 size-4 shrink-0" />
                <span className="text-white/70">{dict.contact.details.hoursValue}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Email form — closes every page, per the brief */}
        <div className="relative border-t border-white/10 py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <Eyebrow tone="onDark">{dict.footer.contactTitle}</Eyebrow>
              <h2 className="text-h2 mt-4 text-white">{dict.footer.emailTitle}</h2>
              <p className="mt-4 max-w-md text-white/65">{dict.footer.emailText}</p>
              <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
                {Object.entries(site.social).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-1 capitalize underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {name}
                  </a>
                ))}
              </p>
            </div>
            <FooterContactForm locale={locale} dict={dict} />
          </div>
        </div>

        <div className="relative flex flex-col gap-6 border-t border-white/10 py-8">
          <p className="max-w-4xl text-xs leading-relaxed text-white/40">
            {dict.footer.disclaimer}
          </p>
          <div className="flex flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.legalName}. {dict.footer.rights}
            </p>
            <p className="wordmark text-[0.65rem] text-white/30">{site.tagline}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
