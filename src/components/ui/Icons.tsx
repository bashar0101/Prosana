type IconProps = {
  className?: string;
};

const base = "h-full w-full";

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className ?? base}
    >
      {/* Official WhatsApp mark: solid bubble with the handset knocked out,
          so the surface behind shows through — the app-icon lockup. */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m 20.463,3.488 A 11.815,11.815 0 0,0 12.05,0 C 5.495,0 0.16,5.335 0.157,11.892 c 0,2.096 0.547,4.142 1.588,5.945 L 0.057,24 l 6.305,-1.654 a 11.882,11.882 0 0,0 5.683,1.448 l 0.005,0 c 6.554,0 11.89,-5.335 11.893,-11.893 a 11.821,11.821 0 0,0 -3.48,-8.413 Z M 17.472,14.382 c -0.297,-0.149 -1.758,-0.867 -2.03,-0.967 c -0.273,-0.099 -0.471,-0.148 -0.67,0.15 c -0.197,0.297 -0.767,0.966 -0.94,1.164 c -0.173,0.199 -0.347,0.223 -0.644,0.075 c -0.297,-0.15 -1.255,-0.463 -2.39,-1.475 c -0.883,-0.788 -1.48,-1.761 -1.653,-2.059 c -0.173,-0.297 -0.018,-0.458 0.13,-0.606 c 0.134,-0.133 0.298,-0.347 0.446,-0.52 c 0.149,-0.174 0.198,-0.298 0.298,-0.497 c 0.099,-0.198 0.05,-0.371 -0.025,-0.52 c -0.075,-0.149 -0.669,-1.612 -0.916,-2.207 c -0.242,-0.579 -0.487,-0.5 -0.669,-0.51 c -0.173,-0.008 -0.371,-0.01 -0.57,-0.01 c -0.198,0 -0.52,0.074 -0.792,0.372 c -0.272,0.297 -1.04,1.016 -1.04,2.479 c 0,1.462 1.065,2.875 1.213,3.074 c 0.149,0.198 2.096,3.2 5.077,4.487 c 0.709,0.306 1.262,0.489 1.694,0.625 c 0.712,0.227 1.36,0.195 1.871,0.118 c 0.571,-0.085 1.758,-0.719 2.006,-1.413 c 0.248,-0.694 0.248,-1.289 0.173,-1.413 c -0.074,-0.124 -0.272,-0.198 -0.57,-0.347"
      />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className ?? base}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className ?? base}
    >
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className ?? base}
    >
      <path d="m12 2.6 2.9 5.88 6.5.95-4.7 4.58 1.11 6.47L12 17.43l-5.81 3.05 1.11-6.47-4.7-4.58 6.5-.95L12 2.6Z" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className ?? base}
    >
      <path d="M6.2 3h3l1.5 4-2 1.4a12.5 12.5 0 0 0 6.9 6.9l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.2 5.2 2 2 0 0 1 6.2 3Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className ?? base}
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.8 7 7.2 5.3a2 2 0 0 0 2 0L20.2 7" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className ?? base}
    >
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className ?? base}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </svg>
  );
}

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className ?? base}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden
      className={className ?? base}
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden
      className={className ?? base}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className ?? base}
    >
      <path d="M12 3 5 6v6c0 4.2 2.9 7.8 7 9 4.1-1.2 7-4.8 7-9V6l-7-3Z" />
      <path d="M12 9v5M9.5 11.5h5" />
    </svg>
  );
}
