import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArcDecor } from "@/components/ui/ArcDecor";
import { CheckIcon, WhatsAppIcon } from "@/components/ui/Icons";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { href } from "@/lib/routes";

type HeroProps = {
  locale: Locale;
  dict: Dictionary;
  whatsappHref: string;
};

export function Hero({ locale, dict, whatsappHref }: HeroProps) {
  const hero = dict.home.hero;

  return (
    <section className="bg-deep-700 relative isolate overflow-hidden text-white">
      <Image
        src="/images/hero/hero-prosana.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-95"
      />
      <div
        aria-hidden
        className="from-deep-900/85 via-deep-800/70 to-deep-900/90 sm:from-deep-900/95 sm:via-deep-800/75 sm:to-deep-900/35 absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r sm:rtl:bg-gradient-to-l"
      />
      <ArcDecor className="text-light-300 -end-40 top-1/2 h-[46rem] w-[46rem] -translate-y-1/2" />

      <Container size="wide">
        <div className="relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <Eyebrow tone="onDark">{hero.eyebrow}</Eyebrow>

            <h1 className="text-display mt-6 text-white">
              {hero.title}{" "}
              <span className="text-light-300 block">{hero.titleAccent}</span>
            </h1>

            <p className="text-lead mt-7 max-w-2xl text-white/80">{hero.text}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button
                href={href(locale, "contact")}
                size="lg"
                withArrow
                className="w-full sm:w-auto"
              >
                {dict.common.consultation}
              </Button>
              <Button
                href={whatsappHref}
                external
                variant="onDark"
                size="lg"
                icon={<WhatsAppIcon />}
                className="w-full sm:w-auto"
              >
                {dict.common.whatsapp}
              </Button>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-white/55">
              <CheckIcon className="text-light-400 size-4" />
              {hero.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
