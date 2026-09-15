"use client";

import Image from "next/image";
import { useId, useState } from "react";

import type { GalleryCase } from "@/content/gallery";
import { interpolate } from "@/lib/utils";

type BeforeAfterSliderProps = {
  item: GalleryCase;
  labels: {
    before: string;
    after: string;
    monthsAfter: string;
    oneMonthAfter: string;
    category: string;
  };
  priority?: boolean;
};

/**
 * Drag-to-reveal comparison. The control is a real <input type="range"> laid
 * over the image: that gives pointer, touch and keyboard support (arrows, Home,
 * End) for free, which a div-with-drag-handlers would each have to reimplement.
 *
 * The figure is pinned to dir="ltr" on purpose — a before/after wipe is spatial,
 * not textual, so it should behave identically in Arabic. The captions below
 * still follow the page direction.
 */
export function BeforeAfterSlider({ item, labels, priority }: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);
  const id = useId();

  const caption =
    item.monthsAfter === 1
      ? labels.oneMonthAfter
      : interpolate(labels.monthsAfter, { months: item.monthsAfter });

  return (
    <figure className="surface-card overflow-hidden">
      <div dir="ltr" className="relative aspect-2/1 touch-pan-y select-none">
        <Image
          src={item.after}
          alt={`${labels.category} — ${labels.after}`}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="(min-width: 1024px) 34rem, 92vw"
          className="object-cover"
        />

        {/* Before is clipped from the right edge as the handle moves. */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`${labels.category} — ${labels.before}`}
            fill
            priority={priority}
            loading={priority ? undefined : "lazy"}
            sizes="(min-width: 1024px) 34rem, 92vw"
            className="object-cover"
          />
        </div>

        <span className="bg-deep-950/70 pointer-events-none absolute top-3 left-3 rounded-full px-2.5 py-1 text-[0.68rem] font-medium tracking-wide text-white backdrop-blur-sm">
          {labels.before}
        </span>
        <span className="bg-deep-950/70 pointer-events-none absolute top-3 right-3 rounded-full px-2.5 py-1 text-[0.68rem] font-medium tracking-wide text-white backdrop-blur-sm">
          {labels.after}
        </span>

        {/* Divider + grip, positioned by the same value as the clip. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white/90 shadow-[0_0_10px_rgb(16_28_61/0.45)]"
          style={{ left: `${value}%` }}
        >
          <span className="text-deep-700 shadow-lift absolute top-1/2 left-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M9 6 4 12l5 6M15 6l5 6-5 6" />
            </svg>
          </span>
        </div>

        <label htmlFor={id} className="sr-only">
          {`${labels.category} — ${labels.before} / ${labels.after}`}
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent focus-visible:outline-none [&::-moz-range-thumb]:h-full [&::-moz-range-thumb]:w-10 [&::-moz-range-thumb]:cursor-ew-resize [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-transparent [&::-webkit-slider-thumb]:h-full [&::-webkit-slider-thumb]:w-10 [&::-webkit-slider-thumb]:cursor-ew-resize [&::-webkit-slider-thumb]:appearance-none"
        />
      </div>

      <figcaption className="flex items-center justify-between gap-3 px-4 py-3.5">
        <span className="text-deep-700 text-sm font-medium">{labels.category}</span>
        <span className="text-ink-muted text-xs">{caption}</span>
      </figcaption>
    </figure>
  );
}
