import { WhatsAppIcon } from "@/components/ui/Icons";

type WhatsAppButtonProps = {
  href: string;
  label: string;
};

/**
 * Floating WhatsApp action, present on every page.
 * Sits above the mobile safe area and never overlaps the footer form.
 *
 * The attention pulse is a box-shadow ring, not a scaled halo: `animate-ping`
 * scales its element to 2x, and a transform on a viewport-anchored button
 * widens the scrollable area, which gave every page a horizontal scroll on
 * phones. box-shadow paints outside the border box without affecting layout.
 */
export function WhatsAppButton({ href, label }: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group ease-brand animate-wa-pulse fixed end-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[60] inline-flex items-center gap-3 rounded-full bg-[#25D366] p-4 text-white transition-transform duration-200 hover:scale-[1.04] focus-visible:scale-[1.04] sm:end-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7 sm:size-6" />
      <span className="ease-brand hidden max-w-0 overflow-hidden text-sm font-medium whitespace-nowrap transition-[max-width] duration-300 group-hover:max-w-40 sm:inline-block">
        {label}
      </span>
    </a>
  );
}
