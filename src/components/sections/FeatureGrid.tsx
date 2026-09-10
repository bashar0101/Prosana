import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Feature = { title: string; text: string };

type FeatureGridProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  items: Feature[];
  tone?: "canvas" | "surface" | "stone";
  columns?: 2 | 3;
  /** Numbered variant reads as a checklist of guarantees. */
  numbered?: boolean;
  id?: string;
};

export function FeatureGrid({
  eyebrow,
  title,
  text,
  items,
  tone = "surface",
  columns = 3,
  numbered = false,
  id,
}: FeatureGridProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <Section tone={tone} id={id} ariaLabelledBy={headingId}>
      <Container size="wide">
        <SectionHeading id={headingId} eyebrow={eyebrow} title={title} text={text} />

        <ul
          className={cn(
            "mt-14 grid gap-x-10 gap-y-12",
            columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
          )}
        >
          {items.map((item, index) => (
            <li key={item.title} className="border-hairline border-t pt-6">
              {numbered ? (
                <span className="eyebrow text-light-500 block">
                  {String(index + 1).padStart(2, "0")}
                </span>
              ) : null}
              <h3 className="text-h3 mt-3">{item.title}</h3>
              <p className="text-ink-muted mt-3 leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
