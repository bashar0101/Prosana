import Link from "next/link";

import { ArrowIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "whatsapp";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-deep-600 text-white shadow-soft hover:bg-deep-700 hover:shadow-lift active:bg-deep-800",
  secondary:
    "border border-deep-200 bg-white text-deep-700 hover:border-deep-400 hover:bg-deep-50",
  ghost: "text-deep-700 hover:bg-deep-50",
  onDark: "border border-white/35 text-white hover:border-white hover:bg-white/10",
  whatsapp: "bg-[#25D366] text-[#0b3d24] shadow-soft hover:bg-[#1fb757] hover:text-white",
};

/*
 * Min-heights rather than fixed heights, and no `whitespace-nowrap`: a long
 * label (and Arabic/Turkish labels run longer than English) used to force the
 * button's min-content width past a narrow container and put a horizontal
 * scroll on the page. Buttons now grow a line instead of pushing the layout.
 */
const sizes: Record<Size, string> = {
  sm: "min-h-10 px-5 py-2 text-sm",
  md: "min-h-12 px-6 py-2.5 text-[0.95rem]",
  lg: "min-h-14 px-6 py-3 text-base sm:px-8",
};

const baseClass =
  "group inline-flex items-center justify-center gap-2.5 rounded-full text-center font-medium " +
  "transition-[background-color,border-color,box-shadow,color] duration-200 ease-brand " +
  "disabled:pointer-events-none disabled:opacity-60";

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Adds a trailing arrow that nudges on hover. Auto-flips in RTL. */
  withArrow?: boolean;
  icon?: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  type?: never;
  disabled?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  external?: never;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export type ButtonProps = ButtonAsLink | ButtonAsButton;

function Content({
  children,
  withArrow,
  icon,
}: Pick<CommonProps, "children" | "withArrow" | "icon">) {
  return (
    <>
      {icon ? <span className="size-[1.15em] shrink-0">{icon}</span> : null}
      <span>{children}</span>
      {withArrow ? (
        <span className="ease-brand size-[1.05em] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5">
          <ArrowIcon />
        </span>
      ) : null}
    </>
  );
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    withArrow,
    icon,
  } = props;

  const classes = cn(baseClass, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          <Content withArrow={withArrow} icon={icon}>
            {children}
          </Content>
        </a>
      );
    }

    return (
      <Link href={props.href} className={classes}>
        <Content withArrow={withArrow} icon={icon}>
          {children}
        </Content>
      </Link>
    );
  }

  const { type = "button", disabled, onClick } = props as ButtonAsButton;

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      <Content withArrow={withArrow} icon={icon}>
        {children}
      </Content>
    </button>
  );
}
