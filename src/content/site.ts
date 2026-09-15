/**
 * Non-translatable site configuration.
 * Real clinic details are supplied through environment variables at build time;
 * the fallbacks below keep local development and previews working.
 */

/** The clinic's WhatsApp line, digits only, international format. */
const rawWhatsApp = process.env.NEXT_WHATSAPP_NUMBER?.replace(/\D/g, "") || "";

/** Turkish mobile numbers read as +90 5XX XXX XX XX. Other formats pass through. */
function formatPhone(digits: string): string {
  const tr = /^90(\d{3})(\d{3})(\d{2})(\d{2})$/.exec(digits);
  return tr ? `+90 ${tr[1]} ${tr[2]} ${tr[3]} ${tr[4]}` : `+${digits}`;
}

export const site = {
  name: "PROSANA",
  legalName: "PROSANA Clinic",
  tagline: "Medical + Aesthetic Wellbeing",
  url: (process.env.NEXT_SITE_URL || "https://prosanaclinic.com").replace(/\/$/, ""),
  email: process.env.NEXT_CONTACT_EMAIL || "prosanaclinc@gmail.com",
  phone: process.env.NEXT_CONTACT_PHONE || formatPhone(rawWhatsApp),
  whatsapp: {
    number: rawWhatsApp,
    display: formatPhone(rawWhatsApp),
  },
  address: {
    street: "Kazlıçeşme, Kennedy Cad. 52M",
    district: "Zeytinburnu",
    city: "Istanbul",
    region: "İstanbul",
    postalCode: "34020",
    country: "TR",
    countryName: "Türkiye",
  },
  // Approximate coordinates for Kazlıçeşme, Zeytinburnu. Only the JSON-LD geo
  // point uses these; the map embed and "open in Maps" link both search the
  // address string above. Replace with the exact pin from Google Maps.
  geo: {
    latitude: 40.9830567,
    longitude: 28.9050964,
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

/**
 * The clinic's own Google Maps place listing, not a text search — a search
 * resolves to whatever Google thinks matches and can land on a neighbouring
 * pin. Copied verbatim from the place URL with only the ephemeral `entry` and
 * `g_ep` session parameters stripped; the `!1s0x…:0x…` feature id is what makes
 * this resolve to exactly one place.
 */
export const mapsUrl =
  "https://www.google.com/maps/place/Kazl%C4%B1%C3%A7e%C5%9Fme,+Kennedy+Cad.+52M,+34020+Zeytinburnu%2F%C4%B0stanbul/@40.9830765,28.9025543,17z/data=!3m1!4b1!4m6!3m5!1s0x14cabb78be1108b1:0xcc0514e19f37f91d!8m2!3d40.9830725!4d28.9051292!16s%2Fg%2F11l5l3k4nz";

/** Embed source for the contact-page map, pinned to the exact coordinates. */
export const mapsQuery = `${site.geo.latitude},${site.geo.longitude}`;

/** wa.me deep link with a pre-filled, locale-aware first message. */
export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
