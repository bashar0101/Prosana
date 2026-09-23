"use client";

import { useRef } from "react";

import { ArrowIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

type CardRailProps = {
  children: React.ReactNode;
  /** Id of the heading that names this list. */
  labelledBy?: string;
  /** Used when no heading id is available. */
  label?: string;
  controls: { previous: string; next: string };
  columns?: 2 | 3;
  className?: string;
};

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
} as const;

/**
 * Card list that swipes sideways on phones and falls back to the usual grid
 * from `sm` up. Stacking a dozen media cards vertically makes a phone scroll
 * for a very long time; one snapping row keeps the section a screen tall and
 * the images large enough to read.
 *
 * The paging buttons are not decoration: a dental card is covered by the
 * before/after slider, which claims horizontal drags for itself, so a swipe
 * started on the image moves the wipe rather than the rail.
 *
 * Children must be `<li>` elements — their width is set from here.
 */
export function CardRail({
  children,
  labelledBy,
  label,
  controls,
  columns = 3,
  className,
}: CardRailProps) {
  const rail = useRef<HTMLUListElement>(null);

  const page = (direction: 1 | -1) => {
    const el = rail.current;
    if (!el) return;

    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.82;
    // In RTL the "next" card sits to the left, and scroll offsets run negative.
    const sign = getComputedStyle(el).direction === "rtl" ? -1 : 1;

    el.scrollBy({ left: direction * sign * step, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <ul
        ref={rail}
        // A scroll container has to be reachable for keyboard-only users.
        tabIndex={0}
        aria-labelledby={labelledBy}
        aria-label={labelledBy ? undefined : label}
        className={cn(
          // scroll-px matches the padding: without it mandatory snapping pulls
          // the first card flush against the screen edge.
          "-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4",
          "[&>li]:w-[82%] [&>li]:shrink-0 [&>li]:snap-start",
          "focus-visible:outline-deep-600 focus-visible:outline-2 focus-visible:outline-offset-4",
          "sm:mx-0 sm:grid sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 sm:[&>li]:w-auto",
          columnClasses[columns],
        )}
      >
        {children}
      </ul>

      <div className="mt-3 flex justify-end gap-2 sm:hidden">
        {(
          [
            { dir: -1, label: controls.previous },
            { dir: 1, label: controls.next },
          ] as const
        ).map((button) => (
          <button
            key={button.label}
            type="button"
            onClick={() => page(button.dir)}
            aria-label={button.label}
            className="border-hairline text-deep-600 hover:border-deep-200 hover:text-deep-700 grid size-11 place-items-center rounded-full border bg-white transition-colors"
          >
            {/* The arrow mirrors with the page, then points back for "previous". */}
            <span className="grid rtl:-scale-x-100">
              <ArrowIcon className={cn("size-4", button.dir === -1 && "rotate-180")} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
