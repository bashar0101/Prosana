import Link from "next/link";
import Image from "next/image";

import type { Locale } from "@/i18n/config";
import { href } from "@/lib/routes";
import { cn } from "@/lib/utils";

type LogoProps = {
  locale: Locale;
  /** Reversed lockup for deep-blue and slate surfaces. */
  tone?: "colour" | "white";
  className?: string;
  priority?: boolean;
  label: string;
};

const LOCKUP_RATIO = 219.6 / 93.5;
const HEIGHT = 40;

export function Logo({ locale, tone = "colour", className, priority, label }: LogoProps) {
  return (
    <Link
      href={href(locale, "home")}
      aria-label={label}
      className={cn(
        "inline-flex shrink-0 items-center rounded transition-opacity hover:opacity-85",
        className,
      )}
    >
      <Image
        src={
          tone === "white" ? "/brand/prosana-logo-white.svg" : "/brand/prosana-logo.svg"
        }
        alt={label}
        width={Math.round(HEIGHT * LOCKUP_RATIO)}
        height={HEIGHT}
        priority={priority}
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}

export function LogoSymbol({
  tone = "colour",
  className,
  size = 40,
}: {
  tone?: "colour" | "white";
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src={
        tone === "white" ? "/brand/prosana-symbol-white.svg" : "/brand/prosana-symbol.svg"
      }
      alt=""
      aria-hidden
      width={Math.round(size * (84 / 93.5))}
      height={size}
      className={className}
    />
  );
}
