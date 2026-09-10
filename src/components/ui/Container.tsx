import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  size?: "narrow" | "default" | "wide";
  className?: string;
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

export function Container({ children, size = "default", className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}
