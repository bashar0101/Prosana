import { NextResponse, type NextRequest } from "next/server";

import { locales, defaultLocale, isLocale, type Locale } from "@/i18n/config";

const LOCALE_COOKIE = "PROSANA_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Parse Accept-Language and pick the best supported locale. */
function negotiate(header: string | null): Locale {
  if (!header) return defaultLocale;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag = "", ...params] = part.trim().split(";");
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith("q="))
        ?.slice(2);
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .filter((entry) => entry.tag.length > 0)
    .sort((a, b) => b.q - a.q);

  for (const entry of ranked) {
    const base = entry.tag.split("-")[0];
    if (isLocale(base)) return base;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) {
    const current = pathname.split("/")[1];
    const response = NextResponse.next();
    if (isLocale(current) && request.cookies.get(LOCALE_COOKIE)?.value !== current) {
      response.cookies.set(LOCALE_COOKIE, current, {
        maxAge: COOKIE_MAX_AGE,
        path: "/",
        sameSite: "lax",
      });
    }
    return response;
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookieLocale)
    ? cookieLocale
    : negotiate(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  url.search = search;

  return NextResponse.redirect(url);
}

export const config = {
  // Everything except Next internals, the API surface and static assets.
  matcher: [
    "/((?!_next/static|_next/image|api/|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|brand/|images/|icons/|video/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|mp4|webm|txt|xml|webmanifest)$).*)",
  ],
};
