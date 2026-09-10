import { cn } from "@/lib/utils";

type ArcDecorProps = {
  className?: string;
  /** Stroke opacity 0–1. */
  opacity?: number;
};

/**
 * The identity's "open outer arc" used as a framing device.
 * Purely decorative — hidden from assistive technology.
 */
export function ArcDecor({ className, opacity = 0.18 }: ArcDecorProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 600"
      fill="none"
      className={cn("pointer-events-none absolute", className)}
    >
      <g stroke="currentColor" strokeOpacity={opacity} strokeWidth="1.25">
        <circle cx="300" cy="300" r="299" />
        <circle cx="300" cy="300" r="228" />
        <circle cx="300" cy="300" r="157" />
      </g>
    </svg>
  );
}
