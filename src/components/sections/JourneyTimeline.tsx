import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { journeySteps, type JourneyStepId } from "@/content/journey";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { href } from "@/lib/routes";
import { interpolate } from "@/lib/utils";

type JourneyTimelineProps = {
  dict: Dictionary;
  eyebrow: string;
  title: string;
  text?: string;
  /** Subset of steps to show. Defaults to all eight. */
  steps?: JourneyStepId[];
  tone?: "canvas" | "surface" | "stone";
  /** Detailed layout alternates image panels beside each step. */
  variant?: "compact" | "detailed";
  cta?: { label: string; locale: Locale };
  id?: string;
};

export function JourneyTimeline({
  dict,
  eyebrow,
  title,
  text,
  steps,
  tone = "surface",
  variant = "compact",
  cta,
  id = "journey",
}: JourneyTimelineProps) {
  const visible = steps
    ? journeySteps.filter((step) => steps.includes(step.id))
    : journeySteps;

  return (
    <Section tone={tone} id={id} ariaLabelledBy={`${id}-heading`}>
      <Container size="wide">
        <SectionHeading
          id={`${id}-heading`}
          eyebrow={eyebrow}
          title={title}
          text={text}
        />

        <ol className="mt-14 space-y-0">
          {visible.map((step, index) => {
            const copy = dict.journeySteps[step.id];
            const isLast = index === visible.length - 1;
            const showImage = variant === "detailed" && step.image;

            return (
              <li key={step.id} className="relative flex gap-6 sm:gap-8">
                {/* Rail */}
                <div className="flex flex-col items-center">
                  <span className="border-light-200 text-deep-600 shadow-soft grid size-11 shrink-0 place-items-center rounded-full border bg-white font-serif text-base">
                    {index + 1}
                  </span>
                  {!isLast ? (
                    <span aria-hidden className="hairline-y w-px flex-1" />
                  ) : null}
                </div>

                <div className={isLast ? "pb-0" : "pb-12 sm:pb-14"}>
                  <p className="eyebrow text-slate-400">
                    {interpolate(dict.common.stepOf, { n: index + 1 })}
                  </p>
                  <h3 className="text-h3 mt-2">{copy.title}</h3>
                  <p className="text-ink-muted mt-3 max-w-2xl leading-relaxed">
                    {copy.text}
                  </p>

                  {showImage ? (
                    <div className="rounded-card relative mt-6 aspect-[16/7] max-w-2xl overflow-hidden">
                      <Image
                        src={step.image as string}
                        alt=""
                        fill
                        loading="lazy"
                        sizes="(min-width: 1024px) 42rem, 92vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>

        {cta ? (
          <div className="mt-12">
            <Button
              href={href(cta.locale, "treatmentJourney")}
              variant="secondary"
              withArrow
            >
              {cta.label}
            </Button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
