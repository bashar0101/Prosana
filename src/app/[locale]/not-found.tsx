import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProfileMark } from "@/components/media/ProfileMark";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { href } from "@/lib/routes";

/**
 * Rendered for unknown paths. The locale segment is not available to
 * not-found boundaries, so this falls back to the default locale.
 */
export default async function NotFound() {
  const dict = await getDictionary(defaultLocale);

  return (
    <Section tone="canvas" space="lg" className="overflow-hidden">
      <ProfileMark className="text-deep-600/[0.05] absolute -end-16 top-1/2 h-96 -translate-y-1/2" />
      <Container>
        <div className="relative max-w-xl">
          <p className="text-light-400 font-serif text-6xl">404</p>
          <h1 className="text-h1 mt-6">{dict.notFound.title}</h1>
          <p className="text-lead text-ink-muted mt-5">{dict.notFound.text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={href(defaultLocale, "home")} withArrow>
              {dict.notFound.cta}
            </Button>
            <Button href={href(defaultLocale, "contact")} variant="secondary">
              {dict.notFound.secondary}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
