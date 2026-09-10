# PROSANA Website Project Specification

## Project Overview

PROSANA is a premium medical tourism company based in Istanbul, Turkey.

The website's primary purpose is to help international patients understand that PROSANA organizes and manages their complete treatment journey in Istanbul, from the initial consultation to their return home.

The website should create a strong first impression of trust, professionalism, comfort, and luxury while remaining simple and easy to navigate.

---

# Business Goals

1. Generate consultation requests.
2. Encourage WhatsApp conversations.
3. Build trust through social proof and transparency.
4. Clearly explain the treatment journey.
5. Present PROSANA as a premium medical tourism provider.

---

# Target Audience

International patients seeking medical treatment in Turkey, especially:

- Hair transplantation
- Dental treatments
- Cosmetic procedures
- Plastic surgery

Primary markets:

- Arabic-speaking countries
- Europe
- English-speaking countries

---

# Website Style

## Visual Identity & Brand Guidelines

The official PROSANA visual identity is defined in:

`Prosana_Blue_Visual_Identity.pdf`

This document is the **single source of truth for the visual design of the website**.

### Brand Assets

Before implementing the UI, inspect the visual identity PDF carefully and identify:

- Official PROSANA logo
- Primary and secondary colors
- Color codes (HEX/RGB if provided)
- Typography / font family
- Font weights
- Heading styles
- Body text styles
- Button styles
- Spacing and layout principles
- Image style and photography direction
- Any other brand-specific visual rules

### Rules

- Use the exact brand colors from the visual identity document.
- Use the exact font specified in the visual identity document.
- Use the specified font weights and typography hierarchy.
- Use the official PROSANA logo and brand assets.
- Use the provided PROSANA images whenever suitable.
- Do not replace the brand colors with generic Tailwind colors.
- Do not introduce unrelated fonts.
- Do not create a new visual identity.
- Do not redesign or reinterpret the logo.
- Do not use random stock imagery when an appropriate provided image exists.
- Maintain consistent typography, spacing, buttons, cards, and visual elements throughout the website.

### Asset Location

All provided brand assets should be located in:

`/public`

Organize them when necessary:

/public
/brand
/images
/fonts
/icons

## Design Principles

The website should feel:

- Premium
- Modern
- Elegant
- Trustworthy
- Professional
- Comfortable
- Clean

Avoid:

- Visual clutter
- Long paragraphs
- Excessive animations
- Overwhelming information

Use:

- Large white space
- High-quality professional images
- Clear typography
- Simple navigation
- Strong call-to-action buttons

---

# Branding

Use the colors, typography, and visual identity defined in the official PROSANA brand guidelines (Prosana_Blue_Visual_Identity.pdf).

If brand assets are unavailable, create a luxury healthcare aesthetic using:

- Clean backgrounds
- Soft neutral tones
- Premium accent colors
- Consistent spacing system

---

# Website Structure

## 1. Home Page

### Hero Section

Requirements:

- Strong medical tourism image
- Clear headline
- Short supporting text
- Primary CTA:
  - Free Consultation
- Secondary CTA:
  - WhatsApp

Example Message:

"Your Medical Journey in Istanbul, Managed by Experts."

---

### Quick Services Overview

Display:

- Hair Transplantation
- Dental Treatments
- Plastic Surgery

Each service should include:

- Icon
- Short description
- Learn More button

---

### Why PROSANA

Short trust-building section highlighting:

- Experienced partner clinics
- Multilingual support
- VIP services
- Airport transfers
- Accommodation assistance
- Personalized treatment plans

---

### Patient Journey

Visual timeline:

1. Free Consultation
2. Treatment Planning
3. Travel Organization
4. Arrival in Istanbul
5. Treatment
6. Recovery
7. Return Home

---

### Testimonials Preview

Patient reviews and success stories.

---

### Before & After Preview

Selected transformations with CTA to view full gallery.

---

### Consultation CTA

Large conversion section with:

- Form
- WhatsApp button

---

# 2. Hair Transplant Page

Sections:

- Introduction
- Benefits
- Techniques
- Before & After
- FAQs
- Consultation Form

---

# 3. Dental Treatments Page

Sections:

- Introduction
- Services Offered
- Smile Gallery
- Treatment Process
- FAQs
- Consultation Form

---

# 4. Aesthetic & Plastic Surgery Page

Sections:

- Introduction
- Procedures
- Before & After
- Recovery Information
- FAQs
- Consultation Form

---

# 5. About PROSANA

Explain:

- Company mission
- Patient-focused approach
- Medical tourism expertise
- Commitment to quality

---

# 6. Why Choose PROSANA

Highlight:

- Trusted clinics
- Experienced doctors
- Transparent communication
- Personalized support
- VIP experience
- Multilingual assistance

---

# 7. Before & After Gallery

Features:

- Organized by treatment type
- High-quality images
- Responsive gallery layout

---

# 8. Patient Testimonials

Display:

- Reviews
- Patient stories
- Ratings
- Optional video testimonials

---

# 9. Treatment Journey

Step-by-step explanation:

## Step 1

Free Consultation

## Step 2

Medical Evaluation

## Step 3

Treatment Plan

## Step 4

Travel Organization

## Step 5

Arrival & Transfer

## Step 6

Treatment

## Step 7

Recovery & Follow-Up

## Step 8

Return Home

---

# 10. Hotels & VIP Services

Present:

- Airport pickup
- Hotel arrangements
- VIP transportation
- Translation assistance
- Patient coordination

---

# 11. Contact / Consultation

Fields:

- Full Name
- Country
- Phone Number
- WhatsApp
- Email
- Interested Treatment
- Message

Buttons:

- Request Consultation
- Contact via WhatsApp

---

# Navigation

Main Menu:

- Home
- Hair Transplant
- Dental Treatments
- Plastic Surgery
- About
- Before & After
- Testimonials
- Contact

---

# WhatsApp

Requirements:

- Floating WhatsApp button
- Visible on every page
- Mobile optimized

---

# Languages

The website must support:

- Arabic
- English
- Turkish

Requirements:

- Language switcher in header
- SEO-friendly localized routes

Example:

/en
/ar
/tr

---

# email

make the user able to send email for communtication
make in the end of the page

---

# Technical Requirements

## Framework

- Next.js 15
- TypeScript
- Tailwind CSS

## Performance

- Fast loading
- Optimized images
- Responsive design

## SEO

Include:

- Metadata
- Open Graph tags
- Structured data
- Local SEO optimization

---

# Conversion Goals

Every page should encourage users to:

1. Contact via WhatsApp.
2. Request a consultation.
3. Submit the inquiry form.

Users should understand within a few seconds:

"PROSANA organizes my treatment journey in Istanbul and can help me get a personalized treatment plan."

---

# Success Criteria

The final website should feel:

- Premium
- Trustworthy
- Medical-grade professional
- Easy to use
- Conversion-focused

The design should communicate confidence and quality immediately.
