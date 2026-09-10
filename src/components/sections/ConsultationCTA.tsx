import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { ArcDecor } from "@/components/ui/ArcDecor";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CheckIcon, ClockIcon, ShieldIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { countryOptions } from "@/content/countries";
import { site, whatsappHref } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { TreatmentKey } from "@/lib/form-state";

type ConsultationCTAProps = {
  locale: Locale;
  dict: Dictionary;
  eyebrow: string;
  title: string;
  text: string;
  points?: string[];
  source: string;
  defaultTreatment?: TreatmentKey;
  id?: string;
};

export function ConsultationCTA({
  locale,
  dict,
  eyebrow,
  title,
  text,
  points,
  source,
  defaultTreatment,
  id = "consultation",
}: ConsultationCTAProps) {
  const countries = countryOptions(locale);
  const wa = whatsappHref(dict.common.whatsappMessage);

  return (
    <Section
      tone="deep"
      id={id}
      space="lg"
      ariaLabelledBy={`${id}-heading`}
      className="overflow-hidden"
    >
      <ArcDecor
        className="text-light-300 -start-52 top-1/2 h-[44rem] w-[44rem] -translate-y-1/2"
        opacity={0.15}
      />

      <Container size="wide">
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow tone="onDark">{eyebrow}</Eyebrow>
            <h2 id={`${id}-heading`} className="text-h2 mt-5 text-white">
              {title}
            </h2>
            <p className="text-lead mt-5 text-white/75">{text}</p>

            {points?.length ? (
              <ul className="mt-9 space-y-3.5">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/85">
                    <CheckIcon className="text-light-400 mt-1 size-4 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}

            <dl className="mt-10 grid gap-5 border-t border-white/15 pt-8 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <ClockIcon className="text-light-400 mt-0.5 size-5 shrink-0" />
                <div>
                  <dt className="text-sm font-medium text-white">
                    {dict.contact.details.responseLabel}
                  </dt>
                  <dd className="mt-1 text-sm text-white/60">
                    {dict.contact.details.responseValue}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldIcon className="text-light-400 mt-0.5 size-5 shrink-0" />
                <div>
                  <dt className="text-sm font-medium text-white">
                    {dict.common.consultation}
                  </dt>
                  <dd className="mt-1 text-sm text-white/60">{dict.home.hero.note}</dd>
                </div>
              </div>
            </dl>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="mt-7 inline-flex min-h-11 items-center gap-2.5 py-2 text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              <WhatsAppIcon className="text-light-400 size-4" />
              {site.whatsapp.display}
            </a>
          </div>

          <div className="lg:col-span-7">
            <ConsultationForm
              locale={locale}
              dict={dict}
              countries={countries}
              whatsappHref={wa}
              source={source}
              defaultTreatment={defaultTreatment}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
