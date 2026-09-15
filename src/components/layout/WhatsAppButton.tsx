import { WhatsAppIcon } from "@/components/ui/Icons";

type WhatsAppButtonProps = {
  href: string;
  label: string;
};

/**
 * Floating WhatsApp action, present on every page.
 * Sits above the mobile safe area and never overlaps the footer form.
 *
 * The word "WhatsApp" is always visible rather than revealed on hover: a bare
 * green circle reads as a generic call button, and hover does not exist on the
 * phones most of this audience uses.
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
      className="group ease-brand animate-wa-pulse fixed end-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[60] inline-flex items-center gap-2.5 rounded-full bg-[#25D366] py-3.5 ps-4 pe-5 font-medium text-white transition-transform duration-200 hover:scale-[1.04] focus-visible:scale-[1.04] sm:end-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-6 shrink-0" />
      <span className="text-[0.95rem] whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
