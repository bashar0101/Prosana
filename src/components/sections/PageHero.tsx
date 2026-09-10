import Link from "next/link";

import { ArcDecor } from "@/components/ui/ArcDecor";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProfileMark } from "@/components/media/ProfileMark";
import type { Locale } from "@/i18n/config";
import { href, type RouteKey } from "@/lib/routes";

type Crumb = { label: string; route: RouteKey };

type PageHeroProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  text: string;
  crumbs: Crumb[];
  breadcrumbLabel: string;
  /** Current page label — rendered as the final, non-linked crumb. */
  current: string;
};

export function PageHero({
  locale,
  eyebrow,
  title,
  text,
  crumbs,
  breadcrumbLabel,
  current,
}: PageHeroProps) {
  return (
    <section className="bg-deep-700 relative isolate overflow-hidden text-white">
      <ArcDecor
        className="text-light-300 -end-56 -top-40 h-[42rem] w-[42rem]"
        opacity={0.16}
      />
      <ProfileMark className="absolute end-8 -bottom-10 hidden h-72 text-white/[0.06] lg:block" />

      <Container size="wide">
        <div className="relative py-16 sm:py-20 lg:py-24">
          <nav aria-label={breadcrumbLabel}>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/50">
              {crumbs.map((crumb) => (
                <li key={crumb.route} className="flex items-center gap-2">
                  <Link
                    href={href(locale, crumb.route)}
                    className="inline-block py-1 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {crumb.label}
                  </Link>
                  <span aria-hidden className="text-white/25">
                    /
                  </span>
                </li>
              ))}
              <li aria-current="page" className="text-white/80">
                {current}
              </li>
            </ol>
          </nav>

          <div className="mt-8 max-w-3xl">
            <Eyebrow tone="onDark">{eyebrow}</Eyebrow>
            <h1 className="text-h1 mt-5 text-white">{title}</h1>
            <p className="text-lead mt-6 max-w-2xl text-white/75">{text}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
