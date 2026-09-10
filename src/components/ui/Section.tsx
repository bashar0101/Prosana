import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  /** Vertical rhythm. Generous by default — white space is a brand rule. */
  space?: "sm" | "md" | "lg";
  tone?: "canvas" | "surface" | "deep" | "slate" | "stone";
  className?: string;
  ariaLabelledBy?: string;
};

const spacing = {
  sm: "py-14 sm:py-16",
  md: "py-20 sm:py-24",
  lg: "py-24 sm:py-32 lg:py-40",
} as const;

const tones = {
  canvas: "bg-canvas text-ink",
  surface: "bg-white text-ink",
  deep: "bg-deep-600 text-white",
  slate: "bg-slate-900 text-white",
  stone: "bg-stone-100 text-ink",
} as const;

export function Section({
  children,
  id,
  space = "md",
  tone = "canvas",
  className,
  ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("relative", spacing[space], tones[tone], className)}
    >
      {children}
    </section>
  );
}
