import { BeforeAfterCard } from "@/components/media/BeforeAfterCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { casesByCategory, galleryCases, type GalleryCategory } from "@/content/gallery";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { href } from "@/lib/routes";

type GalleryPreviewProps = {
  locale: Locale;
  dict: Dictionary;
  eyebrow: string;
  title: string;
  text?: string;
  /** Restrict to one treatment; omit for a mixed selection. */
  category?: GalleryCategory;
  tone?: "canvas" | "surface" | "stone";
  cta?: string;
  id?: string;
};

export function GalleryPreview({
  locale,
  dict,
  eyebrow,
  title,
  text,
  category,
  tone = "surface",
  cta,
  id = "gallery",
}: GalleryPreviewProps) {
  const items = category
    ? casesByCategory(category)
    : [galleryCases[0], galleryCases[3], galleryCases[6]].filter(
        (item) => item !== undefined,
      );

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
              href={href(locale, "beforeAfter")}
              variant="secondary"
              withArrow
              className="shrink-0"
            >
              {cta}
            </Button>
          ) : null}
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <BeforeAfterCard
                item={item}
                labels={{
                  before: dict.common.before,
                  after: dict.common.after,
                  monthsAfter: dict.common.monthsAfter,
                  oneMonthAfter: dict.common.oneMonthAfter,
                  category: dict.beforeAfter.filters[item.category],
                }}
              />
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-slate-500">
          {dict.common.resultsDisclaimer}
        </p>
      </Container>
    </Section>
  );
}
