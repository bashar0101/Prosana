/**
 * Non-translatable site configuration.
 * Real clinic details are supplied through environment variables at build time;
 * the fallbacks below keep local development and previews working.
 */

/** The clinic's WhatsApp line, digits only, international format. */
const rawWhatsApp =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "905421214822";

/** Turkish mobile numbers read as +90 5XX XXX XX XX. Other formats pass through. */
function formatPhone(digits: string): string {
  const tr = /^90(\d{3})(\d{3})(\d{2})(\d{2})$/.exec(digits);
  return tr ? `+90 ${tr[1]} ${tr[2]} ${tr[3]} ${tr[4]}` : `+${digits}`;
}

export const site = {
  name: "PROSANA",
  legalName: "PROSANA Clinic",
  tagline: "Medical + Aesthetic Wellbeing",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://prosanaclinic.com").replace(
    /\/$/,
    "",
  ),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@prosanaclinic.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || formatPhone(rawWhatsApp),
  whatsapp: {
    number: rawWhatsApp,
    display: formatPhone(rawWhatsApp),
  },
  address: {
    street: "Nispetiye Cd. No. 1",
    district: "Beşiktaş",
    city: "Istanbul",
    region: "İstanbul",
    postalCode: "34340",
    country: "TR",
    countryName: "Türkiye",
  },
  geo: {
    latitude: 41.0766,
    longitude: 29.0234,
  },
  hours: {
    opens: "09:00",
    closes: "19:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const,
  },
  social: {
    instagram: "https://instagram.com/prosanaclinic",
    facebook: "https://facebook.com/prosanaclinic",
    youtube: "https://youtube.com/@prosanaclinic",
    tiktok: "https://tiktok.com/@prosanaclinic",
  },
  rating: {
    value: 4.9,
    count: 1284,
  },
} as const;

export const mapsQuery = encodeURIComponent(
  `${site.legalName}, ${site.address.street}, ${site.address.district}, ${site.address.city}`,
);

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

/** wa.me deep link with a pre-filled, locale-aware first message. */
export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
