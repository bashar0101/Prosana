import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

type PosterFeatureProps = {
  src: string;
  alt: string;
  /** Intrinsic size of the artwork, so it is never cropped. */
  width: number;
  height: number;
  eyebrow: string;
  title: string;
  text: string;
  cta: { label: string; href: string };
  tone?: "canvas" | "surface" | "stone";
  id?: string;
};

/**
 * Finished artwork shown whole, with copy beside it. Unlike MediaSplit, the
 * image column is sized to the artwork's own ratio instead of being cropped to
 * a fixed aspect — the layout and wording are baked into the file, so cropping
 * would cut the message.
 */
export function PosterFeature({
  src,
  alt,
  width,
  height,
  eyebrow,
  title,
  text,
  cta,
  tone = "stone",
  id,
}: PosterFeatureProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <Section tone={tone} id={id} ariaLabelledBy={headingId}>
      <Container size="wide">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-16">
          <figure className="mx-auto w-full max-w-sm lg:mx-0">
            <div className="surface-card overflow-hidden">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="(min-width: 1024px) 24rem, (min-width: 640px) 22rem, 88vw"
                className="h-auto w-full"
              />
            </div>
          </figure>

          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 id={headingId} className="text-h2 mt-5">
              {title}
            </h2>
            <p className="text-ink-muted mt-6 max-w-xl leading-relaxed">{text}</p>
            <Button href={cta.href} variant="secondary" withArrow className="mt-8">
              {cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
