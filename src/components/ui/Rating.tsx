import { StarIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

type RatingProps = {
  value: number;
  label?: string;
  className?: string;
  tone?: "dark" | "light";
};

export function Rating({ value, label, className, tone = "dark" }: RatingProps) {
  const rounded = Math.round(value);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex gap-0.5" role="img" aria-label={label ?? `${value} / 5`}>
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            aria-hidden
            className={cn(
              "size-4",
              index < rounded
                ? "text-light-400"
                : tone === "light"
                  ? "text-white/25"
                  : "text-slate-200",
            )}
          >
            <StarIcon />
          </span>
        ))}
      </div>
      {label ? (
        <span
          className={cn("text-sm", tone === "light" ? "text-white/70" : "text-ink-muted")}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
