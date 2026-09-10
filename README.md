# PROSANA Clinic — Website

Multilingual (EN / AR / TR) marketing site for PROSANA, a medical tourism
clinic in Istanbul. Built with Next.js 15 App Router, TypeScript and
Tailwind CSS v4.

---

## Brand

The visual identity comes from `Prosana_Blue_Visual_Identity.pdf` and is the
single source of truth. Tokens live in `src/app/globals.css` under `@theme`.

| Token      | HEX       | Role                 |
| ---------- | --------- | -------------------- |
| Deep Blue  | `#223B84` | foundation / primary |
| Cool White | `#F6FBFD` | page ground          |
| Light Blue | `#66C2EA` | signature / accent   |
| Slate      | `#243746` | type / contrast      |

**Typography** — Noto Serif for editorial display, Noto Sans for UI and body,
Noto Kufi Arabic for Arabic. Loaded through `next/font/google`.

**Logo** — `public/brand/*.svg` was extracted as true vector paths from page 5
of the identity PDF. It is not a redraw. Do not retype or reconstruct the
signature; replace these files only with new vector masters from the brand
owner.

Regenerating brand assets is a one-off task and needs no build step — the SVGs
and images in `public/` are committed.

---

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in the real clinic details
npm run dev                  # http://localhost:3000 → redirects to /en
```

### Scripts

| Command             | Does                                       |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Dev server                                 |
| `npm run build`     | Production build (33 pages, 3 locales)     |
| `npm start`         | Serve the production build                 |
| `npm run lint`      | ESLint (`next/core-web-vitals` + Prettier) |
| `npm run typecheck` | `tsc --noEmit`                             |
| `npm run format`    | Prettier over the repo                     |

### Environment

All variables are optional in development; the site renders with placeholder
contact details and logs form submissions to the console.

| Variable                      | Purpose                                                 |
| ----------------------------- | ------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`        | Canonical origin for metadata, sitemap and JSON-LD      |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only, international format (e.g. `905551234567`) |
| `NEXT_PUBLIC_CONTACT_EMAIL`   | Shown in the footer and contact page                    |
| `NEXT_PUBLIC_CONTACT_PHONE`   | Shown in the footer and contact page                    |
| `RESEND_API_KEY`              | Enables real email delivery of leads                    |
| `LEAD_INBOX`                  | Where consultation requests are sent                    |
| `LEAD_FROM`                   | Verified sender identity                                |

Without `RESEND_API_KEY` the consultation and footer forms still validate and
return success, and the payload is written to the server log. Swap the
transport in `src/lib/mail.ts` if you prefer SMTP or a CRM webhook.

---

## Architecture

```text
src/
  app/
    robots.ts  sitemap.ts
    [locale]/            ← root layout: <html lang dir>, fonts, header/footer
      page.tsx                     Home
      hair-transplant/             ┐
      dental-treatments/           ├ one shared ServicePage template
      plastic-surgery/             ┘
      about/  why-prosana/  before-after/  testimonials/
      treatment-journey/  hotels-vip-services/  contact/
      not-found.tsx
  components/
    layout/     Header MobileNav NavLinks LanguageSwitcher Footer
                WhatsAppButton Logo
    sections/   Hero PageHero TrustBar StatsBand ServiceGrid FeatureGrid
                MediaSplit JourneyTimeline TestimonialsSection
                GalleryPreview BeforeAfterGallery FaqSection FaqAccordion
                ConsultationCTA
    templates/  ServicePage
    forms/      ConsultationForm FooterContactForm
    media/      BeforeAfterCard ProfileMark
    ui/         Button Container Section SectionHeading Eyebrow Rating
                Field ArcDecor Icons
    seo/        JsonLd
  content/    site.ts services.ts journey.ts testimonials.ts gallery.ts
              hotels.ts countries.ts
  i18n/       config.ts get-dictionary.ts dictionaries/{en,ar,tr}.ts
  lib/        routes.ts metadata.ts structured-data.ts mail.ts
              form-state.ts utils.ts
  actions/    consultation.ts
  middleware.ts
```

**Server-first.** Every page and section is a Server Component. The client
bundle only carries what needs interaction: mobile drawer, language switcher,
FAQ accordion, gallery filter and the two forms.

**Content vs. copy.** Non-translatable structure (image paths, ratings, route
keys, ISO country codes) lives in `src/content/`. Only strings live in the
dictionaries, so adding a case study or a testimonial touches one file rather
than three.

---

## Internationalisation

`middleware.ts` negotiates a locale on unprefixed paths — cookie first, then
`Accept-Language`, then `en` — and redirects to `/{locale}/…`.

`src/i18n/dictionaries/en.ts` exports the `Dictionary` type. `ar.ts` and
`tr.ts` are annotated `: Dictionary`, so a missing or renamed key is a compile
error rather than a silent English fallback.

### Adding a locale

1. Add the code to `locales` in `src/i18n/config.ts`, plus its entry in
   `localeDirection`, `localeNames`, `localeShortNames`, `localeHrefLang` and
   `localeOpenGraph`.
2. Create `src/i18n/dictionaries/<code>.ts` typed as `Dictionary`.
3. Register it in `src/i18n/get-dictionary.ts`.

Routing, hreflang, the sitemap and the language switcher pick it up
automatically.

### RTL

Layout uses logical properties throughout (`ps-`, `pe-`, `ms-`, `me-`,
`start-`, `end-`, `text-start`) — there is no `left`/`right` in the component
layer, so Arabic mirrors without per-locale overrides. Latin-script values
(phone numbers, email addresses) carry `dir="ltr"`. Arabic leading and letter
spacing are corrected in the unlayered RTL block at the end of
`src/app/globals.css`, which has to sit outside `@layer` to beat the Tailwind
`text-*` utilities.

---

## SEO

- `generateMetadata` per page via `buildMetadata()` — canonical URL, full
  hreflang cluster (three locales + `x-default`), OpenGraph and Twitter cards.
- Structured data in `src/lib/structured-data.ts`: `MedicalBusiness` with
  Istanbul `PostalAddress` and `GeoCoordinates`, `MedicalProcedure` per
  treatment, `FAQPage`, `HowTo` for the treatment journey, `Review` /
  `AggregateRating`, and `BreadcrumbList`.
- `sitemap.ts` emits all 33 URLs with per-entry language alternates.
- Local-SEO meta (`geo.region`, `geo.position`, `ICBM`) is set in the locale
  layout.

---

## Mobile navigation — two constraints worth knowing

The drawer in `src/components/layout/MobileNav.tsx` is portalled to
`document.body` rather than rendered in place, and its overlay carries
`overflow-hidden`. Both are load-bearing:

- **The portal.** The header has `backdrop-blur`, and a `backdrop-filter`
  makes an element a containing block for its `position: fixed` descendants.
  Rendered inside the header, the drawer was trapped in the header's box —
  tapping the burger revealed only a thin strip.
- **The clip.** The panel parks itself off-screen with `translate-x-full`
  while closed. Without clipping, that parked panel widens the document by its
  own width, which put a horizontal scroll on every page at every phone width
  and dragged the sticky header sideways.

If you restyle the header or the drawer, re-check `document.documentElement`'s
`scrollWidth` against `clientWidth` at 375px before shipping.

Related: give a responsive display utility to a _wrapper_, not to `Button`.
`Button`'s base class sets `inline-flex`, and two display utilities of equal
specificity are resolved by stylesheet order rather than class order, so
`hidden md:inline-flex` on a `Button` does not hide it.

## Forms

Both forms post to Server Actions in `src/actions/consultation.ts`, validated
with zod. A hidden honeypot field is accepted silently so bots get no signal.

React 19 resets an uncontrolled form once its action resolves, so the actions
echo the submitted values back in state and the fields are keyed on an attempt
counter — a validation error never wipes what the patient typed.

---

## Adding content

| Task                    | File                                                                  |
| ----------------------- | --------------------------------------------------------------------- |
| New before/after case   | `src/content/gallery.ts` + images in `public/images/gallery`          |
| New testimonial         | `src/content/testimonials.ts` + `testimonialItems` in each dictionary |
| Clinic details, socials | `src/content/site.ts` (or the `NEXT_PUBLIC_*` env vars)               |
| A new page              | `src/lib/routes.ts`, then `src/app/[locale]/<slug>/page.tsx`          |

---

## Deployment

Targets Vercel with no configuration. The build is fully static: all 33 pages
are prerendered at build time and only the middleware and the two Server
Actions run per request. Set the environment variables in the Vercel project
before the first production deploy so canonical URLs and lead delivery are
correct.

---

## Notes on the sample content

Photography in `public/images/` is generated placeholder artwork in the brand
palette, built from the identity's own profile outline and arc motifs. It is
there to hold the layout and is meant to be replaced with real clinic
photography. `public/images/brand/` holds the genuine mockups lifted from the
identity PDF (business cards, stationery, reception signage, social posts).

Patient names, quotes, statistics and clinic address are illustrative sample
content. Replace them — along with the accreditation claims in the trust bar —
with verified facts before launch.
