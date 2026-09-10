"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/ui/Icons";
import type { Locale } from "@/i18n/config";
import { href, primaryNav, secondaryNav, type RouteKey } from "@/lib/routes";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  locale: Locale;
  labels: Record<RouteKey, string>;
  ui: {
    menu: string;
    openMenu: string;
    close: string;
    consultation: string;
    whatsapp: string;
  };
  whatsappHref: string;
};

export function MobileNav({ locale, labels, ui, whatsappHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    // Move focus into the panel so the drawer reads as a dialog.
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const links: RouteKey[] = [...primaryNav, ...secondaryNav];

  const overlay = (
    /*
      Portalled to <body> on purpose. The header carries `backdrop-blur`, and a
      backdrop-filter makes an element a containing block for its fixed-position
      descendants — rendering this drawer inside the header trapped it in the
      header's box, so tapping the burger only revealed a thin strip.

      `overflow-hidden` is also load-bearing: the panel parks itself off-screen
      with translate-x-full while closed, and without clipping that parked panel
      widens the document and gives every page a horizontal scroll on phones.
    */
    <div
      aria-hidden={!open}
      inert={!open}
      className={cn(
        "fixed inset-0 z-[80] overflow-hidden xl:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "bg-deep-950/50 absolute inset-0 backdrop-blur-[2px] transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal={open || undefined}
        aria-label={ui.menu}
        tabIndex={-1}
        className={cn(
          "shadow-deep ease-brand absolute inset-y-0 end-0 flex w-[86%] max-w-sm flex-col bg-white transition-transform duration-300 outline-none",
          open ? "translate-x-0" : "translate-x-full rtl:-translate-x-full",
        )}
      >
        <div className="border-hairline flex items-center justify-between border-b px-5 py-4">
          <span className="eyebrow text-slate-400">{ui.menu}</span>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
            }}
            aria-label={ui.close}
            className="hover:bg-canvas inline-flex size-11 items-center justify-center rounded-full text-slate-600 transition-colors"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        <nav
          aria-label={ui.menu}
          className="flex-1 overflow-y-auto overscroll-contain px-3 py-4"
        >
          <ul className="flex flex-col">
            {links.map((key) => {
              const target = href(locale, key);
              const active =
                key === "home" ? pathname === target : pathname.startsWith(target);

              return (
                <li key={key}>
                  <Link
                    href={target}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-[0.98rem] transition-colors",
                      active
                        ? "bg-deep-50 text-deep-700 font-medium"
                        : "hover:bg-canvas text-slate-700",
                    )}
                  >
                    {labels[key]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-hairline flex flex-col gap-3 border-t p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <Button href={href(locale, "contact")} size="md" className="w-full">
            {ui.consultation}
          </Button>
          <Button
            href={whatsappHref}
            external
            variant="secondary"
            size="md"
            icon={<WhatsAppIcon />}
            className="w-full"
          >
            {ui.whatsapp}
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={ui.openMenu}
        aria-expanded={open}
        className="border-hairline hover:border-deep-200 hover:bg-deep-50 inline-flex size-11 shrink-0 items-center justify-center rounded-full border text-slate-700 transition-colors xl:hidden"
      >
        <MenuIcon className="size-5" />
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
