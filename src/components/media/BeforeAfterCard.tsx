import Image from "next/image";

import type { GalleryCase } from "@/content/gallery";
import { interpolate } from "@/lib/utils";

type BeforeAfterCardProps = {
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

export function BeforeAfterCard({ item, labels, priority }: BeforeAfterCardProps) {
  const caption =
    item.monthsAfter === 1
      ? labels.oneMonthAfter
      : interpolate(labels.monthsAfter, { months: item.monthsAfter });

  return (
    <figure className="surface-card overflow-hidden">
      <div className="bg-hairline grid grid-cols-2 gap-px">
        {(
          [
            { src: item.before, label: labels.before },
            { src: item.after, label: labels.after },
          ] as const
        ).map((side) => (
          <div key={side.label} className="relative aspect-4/5 bg-white">
            <Image
              src={side.src}
              alt={`${labels.category} — ${side.label}`}
              fill
              priority={priority}
              loading={priority ? undefined : "lazy"}
              sizes="(min-width: 1024px) 18rem, (min-width: 640px) 24vw, 45vw"
              className="object-cover"
            />
            <span className="bg-deep-900/70 absolute start-2.5 bottom-2.5 rounded-full px-2.5 py-1 text-[0.68rem] font-medium tracking-wide text-white backdrop-blur-sm">
              {side.label}
            </span>
          </div>
        ))}
      </div>

      <figcaption className="flex items-center justify-between gap-3 px-4 py-3.5">
        <span className="text-deep-700 text-sm font-medium">{labels.category}</span>
        <span className="text-ink-muted text-xs">{caption}</span>
      </figcaption>
    </figure>
  );
}
