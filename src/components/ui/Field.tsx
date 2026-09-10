import { cn } from "@/lib/utils";

const controlClass =
  "w-full rounded-xl border border-hairline bg-white px-4 py-3 text-[0.95rem] text-ink " +
  "shadow-[0_1px_2px_rgb(16_28_61/0.03)] transition-colors duration-150 " +
  "placeholder:text-slate-400 hover:border-deep-200 " +
  "focus:border-light-400 focus:outline-none focus:ring-4 focus:ring-light-100 " +
  "aria-[invalid=true]:border-red-400 aria-[invalid=true]:ring-red-100";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  optionalLabel?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Field({
  id,
  label,
  error,
  optional,
  optionalLabel,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
        {optional && optionalLabel ? (
          <span className="ms-1.5 font-normal text-slate-400">({optionalLabel})</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean };

export function Input({ className, error, ...props }: InputProps) {
  return (
    <input
      {...props}
      aria-invalid={error || undefined}
      aria-describedby={error ? `${props.id}-error` : undefined}
      className={cn(controlClass, className)}
    />
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
};

export function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      aria-invalid={error || undefined}
      aria-describedby={error ? `${props.id}-error` : undefined}
      className={cn(controlClass, "min-h-32 resize-y", className)}
    />
  );
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & { error?: boolean };

export function Select({ className, error, children, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        {...props}
        aria-invalid={error || undefined}
        aria-describedby={error ? `${props.id}-error` : undefined}
        className={cn(controlClass, "appearance-none pe-11", className)}
      >
        {children}
      </select>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pointer-events-none absolute end-4 top-1/2 size-4 -translate-y-1/2 text-slate-400"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}
