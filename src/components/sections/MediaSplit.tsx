import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

type MediaSplitProps = {
  eyebrow?: string;
  title: string;
  body: string[];
  image: string;
  imageAlt?: string;
  /** Places the image at the inline end instead of the start. */
  reverse?: boolean;
  tone?: "canvas" | "surface" | "stone";
  children?: React.ReactNode;
  id?: string;
};

export function MediaSplit({
  eyebrow,
  title,
  body,
  image,
  imageAlt = "",
  reverse = false,
  tone = "surface",
  children,
  id,
}: MediaSplitProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <Section tone={tone} id={id} ariaLabelledBy={headingId}>
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className={cn(
              "rounded-card relative aspect-4/3 overflow-hidden",
              reverse && "lg:order-2",
            )}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover"
            />
          </div>

          <div>
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h2 id={headingId} className="text-h2 mt-5">
              {title}
            </h2>
            <div className="mt-6 space-y-4">
              {body.map((paragraph) => (
                <p key={paragraph} className="text-ink-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            {children}
          </div>
        </div>
      </Container>
    </Section>
  );
}
