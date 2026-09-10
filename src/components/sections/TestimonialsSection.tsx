import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Rating } from "@/components/ui/Rating";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, type TestimonialId } from "@/content/testimonials";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { href } from "@/lib/routes";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  dict: Dictionary;
  id: TestimonialId;
  tone?: "surface" | "canvas";
};

export function TestimonialCard({ dict, id, tone = "surface" }: TestimonialCardProps) {
  const meta = testimonials.find((item) => item.id === id);
  if (!meta) return null;

  const copy = dict.testimonialItems[id];
  const treatment = dict.form.treatments[meta.service];

  return (
    <figure
      className={cn(
        "rounded-card border-hairline shadow-soft flex h-full flex-col border p-7",
        tone === "surface" ? "bg-white" : "bg-canvas",
      )}
    >
      <Rating value={meta.rating} />

      <blockquote className="mt-5 flex-1">
        <p className="text-[1.02rem] leading-relaxed text-slate-700">
          &ldquo;{copy.quote}&rdquo;
        </p>
      </blockquote>

      <figcaption className="border-hairline mt-7 flex items-center gap-3.5 border-t pt-6">
        <Image
          src={meta.avatar}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          className="size-12 rounded-full object-cover"
        />
        {/*
          These wrap rather than truncate. `truncate` sets white-space: nowrap,
          which makes the card's min-content the full unwrapped string and
          forces the auto-sized grid track wider than a phone viewport.
        */}
        <div className="min-w-0">
          <p className="text-deep-700 font-medium">{copy.name}</p>
          <p className="text-ink-muted text-sm">
            {copy.country} · {treatment}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

type TestimonialsSectionProps = {
  locale: Locale;
  dict: Dictionary;
  ids: TestimonialId[];
  eyebrow: string;
  title: string;
  text?: string;
  tone?: "canvas" | "surface" | "stone";
  cta?: string;
  id?: string;
};

export function TestimonialsSection({
  locale,
  dict,
  ids,
  eyebrow,
  title,
  text,
  tone = "stone",
  cta,
  id = "testimonials",
}: TestimonialsSectionProps) {
  return (
    <Section tone={tone} id={id} ariaLabelledBy={`${id}-heading`}>
      <Container size="wide">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id={`${id}-heading`}
            eyebrow={eyebrow}
            title={title}
            text={text}
          />
          {cta ? (
            <Button
              href={href(locale, "testimonials")}
              variant="secondary"
              withArrow
              className="shrink-0"
            >
              {cta}
            </Button>
          ) : null}
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {ids.map((testimonialId) => (
            <li key={testimonialId}>
              <TestimonialCard dict={dict} id={testimonialId} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
