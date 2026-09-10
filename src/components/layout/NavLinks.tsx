"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/i18n/config";
import { href, type RouteKey } from "@/lib/routes";
import { cn } from "@/lib/utils";

type NavLinksProps = {
  locale: Locale;
  items: RouteKey[];
  labels: Record<RouteKey, string>;
  ariaLabel: string;
};

export function NavLinks({ locale, items, labels, ariaLabel }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={ariaLabel} className="hidden xl:block">
      <ul className="flex items-center gap-0.5">
        {items.map((key) => {
          const target = href(locale, key);
          const active =
            key === "home" ? pathname === target : pathname.startsWith(target);

          return (
            <li key={key}>
              <Link
                href={target}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative inline-flex h-10 items-center rounded-full px-3 text-[0.875rem] whitespace-nowrap transition-colors",
                  active
                    ? "text-deep-700"
                    : "hover:bg-deep-50 hover:text-deep-700 text-slate-600",
                )}
              >
                {labels[key]}
                {active ? (
                  <span
                    aria-hidden
                    className="bg-light-400 absolute inset-x-3 -bottom-px h-px"
                  />
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
