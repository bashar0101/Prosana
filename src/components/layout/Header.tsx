import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavLinks } from "@/components/layout/NavLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowIcon } from "@/components/ui/Icons";
import { site, whatsappHref } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { desktopNav, href, routeKeys, type RouteKey } from "@/lib/routes";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Header({ locale, dict }: HeaderProps) {
  const labels = Object.fromEntries(
    routeKeys.map((key) => [key, dict.nav[key]]),
  ) as Record<RouteKey, string>;

  const wa = whatsappHref(dict.common.whatsappMessage);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-deep-600 text-white">
        <Container size="wide">
          <div className="flex min-h-11 flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-[0.8rem]">
            <p className="text-white/80">{dict.announcement.text}</p>
            <Link
              href={href(locale, "contact")}
              className="group text-light-300 inline-flex min-h-8 items-center gap-1.5 py-1 font-medium underline-offset-4 hover:underline"
            >
              {dict.announcement.cta}
              <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </div>

      <header className="border-hairline sticky top-0 z-50 border-b bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
        <Container size="wide">
          <div className="flex h-18 items-center justify-between gap-4 py-3">
            <Logo locale={locale} priority label={site.legalName} />

            <NavLinks
              locale={locale}
              items={desktopNav}
              labels={labels}
              ariaLabel={dict.common.mainNav}
            />

            <div className="flex items-center gap-2 sm:gap-3">
              {/*
                Visible at every width. It used to be `hidden sm:block`, which
                left phone users with no way to change language at all — the
                header is the only place it appears. Logo + this + the menu
                trigger still fit comfortably at 375px.
              */}
              <LanguageSwitcher locale={locale} label={dict.common.chooseLanguage} />
              {/*
                Wrapped rather than given `hidden md:inline-flex` directly:
                Button's base class already sets `inline-flex`, and two display
                utilities of equal specificity are resolved by stylesheet order,
                not class order — so `hidden` lost and the CTA showed on phones,
                crowding the logo and the menu trigger. The drawer carries this
                CTA below md.
              */}
              <div className="hidden md:block">
                <Button href={href(locale, "contact")} size="sm">
                  {dict.common.consultation}
                </Button>
              </div>
              <MobileNav
                locale={locale}
                labels={labels}
                whatsappHref={wa}
                ui={{
                  menu: dict.common.menu,
                  openMenu: dict.common.openMenu,
                  close: dict.common.close,
                  consultation: dict.common.consultation,
                  whatsapp: dict.common.whatsappLong,
                }}
              />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
