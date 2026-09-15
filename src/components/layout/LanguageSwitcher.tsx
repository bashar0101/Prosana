"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { FlagIcon } from "@/components/ui/Flags";
import { locales, localeNames, localeShortNames, type Locale } from "@/i18n/config";
import { switchLocalePath } from "@/lib/routes";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Compact language control: the trigger carries only the current language code,
 * and the panel spells each language out in its own script. No globe, no
 * chevron — the header stays quiet and the choice stays unambiguous.
 */
export function LanguageSwitcher({
  locale,
  label,
  tone = "dark",
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`${label} — ${localeNames[locale]}`}
        className={cn(
          "inline-flex h-10 items-center justify-center gap-2 rounded-xl border px-2.5 text-[0.8rem] font-semibold tracking-[0.08em] uppercase transition-colors",
          tone === "light"
            ? open
              ? "border-white/60 bg-white/10 text-white"
              : "border-white/25 text-white/90 hover:border-white/60 hover:text-white"
            : open
              ? "border-deep-300 bg-deep-50 text-deep-700"
              : "border-hairline hover:border-deep-300 hover:text-deep-700 text-slate-600",
        )}
      >
        <FlagIcon locale={locale} />
        {localeShortNames[locale]}
      </button>

      {open ? (
        <div
          role="menu"
          aria-label={label}
          className="border-hairline shadow-lift animate-fade absolute end-0 z-50 mt-2 w-40 divide-y divide-[var(--color-hairline)] overflow-hidden rounded-2xl border bg-white"
        >
          {locales.map((option) => {
            const active = option === locale;

            return (
              <Link
                key={option}
                role="menuitem"
                href={switchLocalePath(pathname, option)}
                hrefLang={option}
                lang={option}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "flex min-h-12 items-center justify-center gap-2.5 text-center text-[0.95rem] transition-colors",
                  active
                    ? "bg-deep-50 text-deep-700 font-semibold"
                    : "hover:bg-canvas text-slate-600",
                )}
              >
                {/* <bdi> isolates each name's own direction so العربية shapes
                    right-to-left without dragging the row's alignment with it. */}
                <FlagIcon locale={option} />
                <bdi>{localeNames[option]}</bdi>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
