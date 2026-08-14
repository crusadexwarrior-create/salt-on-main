# Salt on Main Wellness — Mock Site Plan

A single-page, mobile-first React + Tailwind mockup for CXW Agency's sales demo. Calm, premium, spa-like aesthetic with booking friction removed.

## Design Direction

- **Palette**: Warm neutrals — soft ivory `#faf7f2`, warm sand `#efe7d9`, deep sage/teal accent `#3d5a53`, muted terracotta highlight `#c47c5a`, charcoal text `#2a2724`. Tokens go in `src/styles.css` as oklch.
- **Type**: Display serif "Fraunces" for headlines, "Inter" for body — loaded via `<link>` in `__root.tsx` head, referenced through `--font-*` in `@theme`.
- **Feel**: Generous whitespace, rounded-2xl cards, soft shadows, subtle salt-texture background washes, gentle fade/slide-in animations via Motion.
- **Imagery**: Generated hero + service + founder placeholders (calm spa/salt-room/red-light/sauna/foot-bath scenes) saved to `src/assets/`.

## Sections (single page, smooth scroll)

1. **Header** — text logo, nav (Home, Services, Book, About, Reviews, Contact), persistent "Book Now" button → Booker link. Mobile hamburger sheet + sticky bottom "Book Now" bar.
2. **Hero** — headline "Relax, Restore, and Breathe Better at Salt on Main", subhead, primary "Book a Session" + secondary "Explore Services", warm hero image.
3. **Trust / Intro** — short paragraph on Historic Laurel location, serving community since 2019, multiple halotherapy rooms; three small trust chips (Locally owned, Peaceful atmosphere, Easy online booking).
4. **Services** — 4 cards (Halotherapy, Red Light, Infrared Sauna, IonCleanse Foot Detox). Each: image, name, short description, 3 benefit bullets, "Learn More" (opens dialog with longer copy) + "Book Now" (Booker link). No prices — "View Pricing and Availability" link.
5. **Booking** — large highlighted band, headline "Book Your Wellness Session Online", big Book Now button, embedded booking placeholder card (`<iframe>` attempt with fallback external link card), "Powered by Booker" text, phone-support helper line.
6. **About / Founder** — warm story copy, founder photo placeholder, CTA "Meet the Story Behind Salt on Main".
7. **Reviews** — 3–4 testimonial cards, generic attributions ("Salt on Main Guest"), themes per spec.
8. **Lead Capture** — form (First/Last/Email/Phone/Service Interest select/Preferred Time/Message) with Zod validation, submit shows success state; no network call, structured as CRM-ready (clear field names for GHL mapping).
9. **Location / Hours** — address, phone, email, hours table, embedded Google Maps `<iframe>` for 575 Main St, Laurel MD.
10. **FAQ** — shadcn Accordion with all 8 questions + wellness disclaimer.
11. **Footer** — brand block, contact, quick links, Book Now, disclaimer, © 2026.

## File Structure

```text
src/
  routes/
    index.tsx                  # composes all sections
    __root.tsx                 # updated head: title, meta, fonts
  components/salt/
    Header.tsx
    Hero.tsx
    TrustIntro.tsx
    Services.tsx
    ServiceCard.tsx
    BookingSection.tsx
    About.tsx
    Reviews.tsx
    LeadForm.tsx
    LocationHours.tsx
    FAQ.tsx
    Footer.tsx
    StickyMobileCTA.tsx
    BookNowButton.tsx          # shared Booker link button
  assets/                      # generated images (hero, 4 services, founder, texture)
  styles.css                   # add wellness tokens + font families
```

## Technical Notes

- All "Book Now" CTAs use one shared `BookNowButton` pointing to `https://go.booker.com/location/saltonmain/service-menu` (target `_blank`, `rel="noopener"`).
- Semantic section IDs (`#services`, `#book`, `#about`, `#reviews`, `#contact`, `#faq`) for in-page nav.
- Smooth scroll via `html { scroll-behavior: smooth }` + `scroll-mt-24` on sections for sticky header offset.
- Lead form: `react-hook-form` + `zod` (already in stack via shadcn form). Submit handler sets local success state; no backend.
- SEO: `head()` in `index.tsx` sets real title ("Salt on Main Wellness Center — Halotherapy & Wellness in Laurel, MD"), description, og/twitter tags. og:image on the leaf route pointing to the generated hero image.
- Accessibility: labeled inputs, focus rings, aria on accordion/menu, alt text on all images.
- No medical claims anywhere — wellness-support language only, disclaimer in FAQ and footer.
- No prices, durations, or staff names invented.

## Out of Scope

- No backend, auth, DB, or Lovable Cloud (pure front-end mock).
- No real form submission — placeholder success state only.
