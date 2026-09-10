"use client";

import { useState } from "react";

import { BeforeAfterCard } from "@/components/media/BeforeAfterCard";
import { galleryCases, type GalleryCategory } from "@/content/gallery";
import { cn } from "@/lib/utils";

type Filter = GalleryCategory | "all";

type BeforeAfterGalleryProps = {
  labels: {
    before: string;
    after: string;
    monthsAfter: string;
    oneMonthAfter: string;
    disclaimer: string;
  };
  filters: {
    label: string;
    all: string;
    hair: string;
    dental: string;
    aesthetic: string;
  };
  empty: string;
};

const order: Filter[] = ["all", "hair", "dental", "aesthetic"];

export function BeforeAfterGallery({ labels, filters, empty }: BeforeAfterGalleryProps) {
  const [active, setActive] = useState<Filter>("all");

  const visible =
    active === "all"
      ? galleryCases
      : galleryCases.filter((item) => item.category === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label={filters.label}
        className="border-hairline flex flex-wrap gap-2 border-b pb-6"
      >
        {order.map((key) => {
          const selected = key === active;

          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(key)}
              className={cn(
                "h-10 rounded-full px-5 text-sm font-medium transition-colors duration-200",
                selected
                  ? "bg-deep-600 text-white"
                  : "border-hairline hover:border-deep-200 hover:text-deep-700 border bg-white text-slate-600",
              )}
            >
              {filters[key]}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="text-ink-muted mt-12">{empty}</p>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, index) => (
            <li key={item.id}>
              <BeforeAfterCard
                item={item}
                priority={index < 3}
                labels={{
                  before: labels.before,
                  after: labels.after,
                  monthsAfter: labels.monthsAfter,
                  oneMonthAfter: labels.oneMonthAfter,
                  category: filters[item.category],
                }}
              />
            </li>
          ))}
        </ul>
      )}

      <p className="mt-10 max-w-2xl text-xs leading-relaxed text-slate-500">
        {labels.disclaimer}
      </p>
    </div>
  );
}
