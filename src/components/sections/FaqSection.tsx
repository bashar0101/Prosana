import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FaqSectionProps = {
  eyebrow: string;
  title: string;
  text?: string;
  items: { q: string; a: string }[];
  tone?: "canvas" | "surface" | "stone";
  id?: string;
};

export function FaqSection({
  eyebrow,
  title,
  text,
  items,
  tone = "canvas",
  id = "faq",
}: FaqSectionProps) {
  return (
    <Section tone={tone} id={id} ariaLabelledBy={`${id}-heading`}>
      <Container>
        <SectionHeading
          id={`${id}-heading`}
          eyebrow={eyebrow}
          title={title}
          text={text}
        />
        <div className="mt-12">
          <FaqAccordion items={items} />
        </div>
      </Container>
    </Section>
  );
}
