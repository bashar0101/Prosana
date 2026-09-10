import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  tone?: "light" | "deep" | "onDark";
  className?: string;
};

const tones = {
  light: "text-light-600",
  deep: "text-deep-600",
  onDark: "text-light-300",
} as const;

/** Small letterspaced label — the identity's recurring section marker. */
export function Eyebrow({ children, tone = "light", className }: EyebrowProps) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", tones[tone], className)}>
      <span aria-hidden className="h-px w-6 bg-current opacity-50" />
      {children}
    </p>
  );
}
