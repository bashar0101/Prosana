import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ArrowIcon } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { href } from "@/lib/routes";

type ServiceGridProps = {
  locale: Locale;
  dict: Dictionary;
};

export function ServiceGrid({ locale, dict }: ServiceGridProps) {
  const block = dict.home.services;

  return (
    <Section tone="canvas" ariaLabelledBy="services-heading">
      <Container size="wide">
        <SectionHeading
          id="services-heading"
          eyebrow={block.eyebrow}
          title={block.title}
          text={block.text}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const copy = block.items[service.id];

            return (
              <article
                key={service.id}
                className="group surface-card ease-brand hover:shadow-lift flex flex-col overflow-hidden transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 92vw"
                    className="ease-brand object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-h3">{copy.title}</h3>
                  <p className="text-ink-muted mt-3 text-[0.95rem] leading-relaxed">
                    {copy.text}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {copy.points.map((point) => (
                      <li
                        key={point}
                        className="bg-light-50 text-light-800 rounded-full px-3 py-1.5 text-xs font-medium"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={href(locale, service.route)}
                    className="text-deep-600 hover:text-deep-700 mt-6 inline-flex min-h-11 items-center gap-2 self-start py-2 text-sm font-medium underline-offset-4 transition-colors hover:underline"
                  >
                    {dict.common.learnMore}
                    <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
                    <span className="sr-only">— {copy.title}</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
