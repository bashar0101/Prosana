"use client";

import { useState } from "react";

import { ChevronIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items: { q: string; a: string }[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-hairline border-hairline divide-y border-y">
      {items.map((item, index) => {
        const expanded = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <li key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : index)}
                className="hover:text-deep-600 flex w-full items-start justify-between gap-6 py-6 text-start transition-colors"
              >
                <span className="text-deep-700 font-serif text-[1.08rem] leading-snug sm:text-lg">
                  {item.q}
                </span>
                <span
                  className={cn(
                    "border-hairline ease-brand mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border text-slate-500 transition-transform duration-200",
                    expanded && "border-light-300 bg-light-50 text-light-700 rotate-180",
                  )}
                >
                  <ChevronIcon className="size-4" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!expanded}
              className="pe-14 pb-7"
            >
              <p className="text-ink-muted max-w-2xl leading-relaxed">{item.a}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
