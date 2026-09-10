import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  id?: string;
  align?: "start" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
  size?: "md" | "lg";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  id,
  align = "start",
  tone = "dark",
  as: Heading = "h2",
  className,
  size = "md",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone === "light" ? "onDark" : "light"}>{eyebrow}</Eyebrow>
      ) : null}
      <Heading
        id={id}
        className={cn(
          size === "lg" ? "text-h1" : "text-h2",
          tone === "light" && "text-white",
        )}
      >
        {title}
      </Heading>
      {text ? (
        <p
          className={cn(
            "text-lead",
            tone === "light" ? "text-white/75" : "text-ink-muted",
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
