# Visual / Mobile Rendering Audit — keprea.vercel.app

Date: 2026-07-02
Tool: Playwright (Chromium), viewports 1440x900 (desktop) and 375x812 (mobile)
Pages tested: `/`, `/solutions/bioprotection`, `/contact`

Screenshots: `keprea.vercel.app-audit/screenshots/`
(`{page}-{viewport}-fold.png` = visible viewport on load, `{page}-{viewport}-full.png` = full page)

Raw structured data: `keprea.vercel.app-audit/capture_results.json`

## Summary of severity

- 1 High: contact form not visible above the fold on mobile
- 2 Medium: cookie banner obscures key content on load (mobile); touch targets below 48px
- Low/positive notes on the rest — overall the site is solid, sober, on-brand

## Homepage (/)

**Desktop (1440px) — above the fold:** Excellent. H1 "La nature au service de vos cultures", subheading, two clearly contrasted CTAs ("Voir nos solutions" solid green, "Demander un essai" outline white-on-photo), full nav, and the start of the stats bar (100% / 10 / Jura) all visible without scrolling. No emoji in UI copy. Single H1 confirmed.

**Mobile (375px) — above the fold:** H1, subheading and both CTAs are visible without scrolling — good. Hamburger menu present (nav links correctly collapse). However, the cookie consent banner appears immediately on load and covers the stats bar ("100%", "10", "Jura") entirely, and its bottom edge sits very close to the CTA area. This is expected RGPD behavior but reduces the amount of the actual mobile hero visible immediately.

**Hero video (desktop):** 1 `<video>` element with `poster="/lovable-uploads/hero-poster-frame.jpg"` — poster attribute present, consistent with project rule and consistent with the fix noted in git history (poster no longer shows an unrelated photo). Not present on mobile in the DOM at capture time (no `<video>` counted on mobile homepage query — worth spot-checking if a static image is intentionally swapped in for mobile, which would be a reasonable performance optimization, or if this is unintentional; recommend a quick manual confirmation in the component source).

**Layout:** No horizontal scroll on any viewport (`scrollWidth === clientWidth` at 375 and 1440). No console errors captured. No emoji detected in visible body text.

## Product page (/solutions/bioprotection)

**Desktop:** Above the fold shows breadcrumb ("Retour aux biosolutions"), H1 "Bioprotection", subheading, and the ladybug hero image. Clean, sober, no emoji. Single H1.

**Mobile:** H1 and subheading visible above the fold along with the hero image; the "Ravageurs ciblés" section starts to peek in but its cards get visually truncated by the cookie banner on first load (cosmetic only — resolves once banner is dismissed). No horizontal scroll, no console errors.

**Note:** No `<video>` on this page (0 detected both viewports) — image-only hero, so the mandatory `poster` rule doesn't apply here; not an issue.

## Contact page (/contact) — main finding

**Desktop:** Above the fold shows H1 "Parlons de votre projet", intro text, and the start of the contact form (Prénom/Nom/Entreprise/Email fields already visible) plus a "Coordonnées" side panel. Acceptable — user immediately understands this is a form and starts seeing input fields.

**Mobile — High severity:** At 375px, above the fold only shows the H1, intro paragraph, and the form card's header ("PARLEZ-NOUS DE VOTRE PROJET"). Not a single input field, nor the submit CTA ("Envoyer ma demande"), is visible without scrolling. Combined with the cookie banner covering roughly the bottom 20% of the viewport on load, a mobile visitor sees no actionable element at all on first paint of this page — they must scroll and/or dismiss the cookie banner before doing anything. This is the most actionable finding: consider tightening vertical spacing above the form on mobile (hero title/subtitle margins) so at least the first field or a "commencer" anchor is visible, or reduce the hero block's height on mobile specifically for this page since it is a low-content, high-intent page where the form is effectively the CTA.

Screenshot for reference: `contact-mobile-fold.png`.

RGPD checkbox on the contact form is unchecked by default in the full-page mobile capture, consistent with the "no pre-ticked box" rule.

## Cross-page observations

- **Cookie banner (RGPD):** "Refuser" / "Accepter" buttons are correctly present and unticked/neutral (no dark pattern favoring "Accepter" beyond a slightly bolder fill, which is normal). Both buttons measure 36px tall, under the 48x48px touch-target guideline — worth a minor bump in mobile button height/padding site-wide (cookie banner, language switcher, hamburger — all sit around 36-46px).
- **Language switcher:** Uses the French flag emoji (🇫🇷) as a visual flag icon inside a button, not as decorative text-emoji in copy — this is a standard UI pattern (flag = language icon) and distinct from the "no emojis in UI" rule aimed at decorative copy; flagging only for awareness, no action needed unless the team wants a custom SVG flag instead of the Unicode emoji glyph for strict brand consistency.
- **No horizontal scroll** on any of the 6 page/viewport combinations tested.
- **No console errors** on any of the 6 page/viewport combinations tested.
- **Single H1 per page** confirmed on all three pages ("La nature au service de vos cultures", "Bioprotection", "Parlons de votre projet").
- **CTA contrast:** All primary CTAs use solid dark green (`rgb(24,129,68)`) on white text — strong contrast, consistent branding, no low-contrast ghost buttons used as primary actions.
- **No decorative emoji** found in visible body copy on any tested page (only the flag icon noted above).
- Full-page screenshots show large apparent "gaps" in `home-mobile-full.png` — this was verified to be a screenshot-scale artifact (device pixel ratio 2x on the capture, not an actual DOM layout gap); a `getBoundingClientRect` sweep of the homepage confirmed all 10 sections + footer are contiguous with no blank spacer sections (total height 13070 CSS px across 11 stacked sections, all consistent with a normal long-form landing page).

## Recommendations (priority order)

1. **High:** On `/contact` mobile, shrink hero vertical spacing or shorten intro copy so the form's first field (or submit button) enters the viewport without scrolling — currently the highest-intent page shows zero actionable element above the fold on mobile.
2. **Medium:** Increase touch target height to ~44-48px for the cookie banner buttons and hamburger/language-switcher controls on mobile.
3. **Low:** Confirm intentionally whether the homepage hero `<video>` is swapped for a static image on mobile (0 video elements detected in the mobile DOM) — if intentional for performance, no action needed; if accidental, verify the poster/video conditional logic.
