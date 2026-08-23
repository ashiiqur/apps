# Reusing this Privacy Policy page for another app

This page was built to match the visual design system of the "QR Generator" app landing page (fonts, colors, header, footer). To reuse it for a **different app**, everything below needs to change. Nothing here is optional — skipping any of these will leave the old app's name, links, or claims on the new app's page.

---

## 1. Where the file lives (decide this first)

The current file assumes it's hosted **one folder below** the app's main landing page, e.g.:

```
/apps/new-app/               ← index.html (landing page) + logo.png + favicon.png + preview-image.png
/apps/new-app/privacy-policy/  ← this file, as index.html
```

That's why the favicon link and the logo-loading script use `../favicon.png` and `../logo.png`.

- **If you keep the same folder structure** for the new app → just update the domain/app-slug in the paths below.
- **If you instead put this file in the *same* folder as the new app's `index.html`** (e.g. `privacy-policy.html` next to `index.html`) → remove the `../` prefix from both the favicon `<link>` and the `probe.src` / `img.src` lines in the script, so they read `favicon.png` and `logo.png` instead.

---

## 2. `<head>` — SEO meta tags

| Tag | Current value | Change to |
|---|---|---|
| `<title>` | `Privacy Policy - QR Generator \| ashiqur` | `Privacy Policy - [New App Name] \| [your site/brand name]` |
| `meta name="description"` | Describes QR Generator's data practices | A 1–2 sentence summary of **this app's actual** data practices |
| `meta name="author"` | `Ashiqur Rahman` | Your name / company name |
| `link rel="canonical"` | `https://apps.ashiqur.in/apps/qr-generator/privacy-policy/` | The real, final hosted URL of this page |
| `link rel="icon"` | `../favicon.png` | Same path pattern, pointing at the new app's favicon file |

---

## 3. `<head>` — Open Graph (Facebook, Slack, iMessage, Discord, etc.)

| Tag | Change to |
|---|---|
| `og:url` | Same URL as the canonical link above |
| `og:site_name` | Your site/brand name |
| `og:title` | `Privacy Policy - [New App Name]` |
| `og:description` | Same short summary used in the meta description |
| `og:image` **and** `og:image:secure_url` | Absolute URL to the new app's own preview/share image (1200×630 recommended) |
| `og:image:width` / `og:image:height` | Only change if your new image isn't 1200×630 |
| `og:image:alt` | `[New App Name] app preview` |

## 4. `<head>` — Twitter/X card

Same pattern as Open Graph — update `twitter:title`, `twitter:description`, `twitter:image`, and `twitter:image:alt` to match.

> ⚠️ **Important:** the current file reuses the *QR Generator's* preview image (`preview-image.png`) by design, since you asked for "same image as zip file" earlier in this project. For a genuinely different app, this image should be swapped for that app's own screenshot/artwork — otherwise shared links will show the wrong app's picture.

---

## 5. Design tokens (`:root` CSS variables)

```css
--paper: #F4F5F0;        /* page background (light mode) */
--paper-raised: #FFFFFF; /* card/surface background */
--ink: #14161A;          /* primary text */
--ink-soft: #55585F;     /* secondary/muted text */
--accent: #2F6FED;       /* links, highlights — this is the app's brand color */
--accent-2: #00C896;
--line: #DBDDD6;         /* dividers/borders */
```

- Leave the structure as-is (it drives dark-mode automatically) unless the new app has its own brand palette.
- At minimum, change `--accent` to the new app's accent color if it differs from `#2F6FED`.
- The Google Fonts import (Space Grotesk + Space Mono) can stay if you want the same typographic identity across apps, or be swapped if the new app uses different type.

---

## 6. Header

| Element | What to change |
|---|---|
| `<a class="brand" href="...">` | The new app's homepage URL |
| Header logo (`#brandMark`) | The inline pixel-avatar SVG can stay as a generic placeholder, **or** be replaced with the new author/app's own default mark. Its `aria-label="Pixel portrait of Ashiqur Rahman"` should be updated or removed if you swap it out. |
| `.brand-text` | The new app's name, e.g. `QR Generator` → `[New App Name]` |
| `.header-nav` link | URL/label for the "Home" link back to the app |

---

## 7. Main content — the actual policy text

This is the part that **cannot** be copy-pasted as-is. Every section needs to reflect what the *new* app actually does:

| Section | Rewrite to describe |
|---|---|
| Eyebrow "Effective Date" | The real effective date for the new policy |
| `<h1>` | Can stay "Privacy Policy," or become "[App Name] Privacy Policy" |
| Introduction | The new app's name and whether it's free/paid |
| Information Collection and Use | What the new app *actually* collects — accounts, permissions (camera, mic, location, contacts, etc.), whether it's local-only or sends data to a server |
| Log Data and Third-Party Services | Whether the new app uses analytics, crash reporting, ads, or any third-party SDKs — name them if so |
| Children's Privacy | Only claim COPPA/Families Policy compliance if it's actually true for the new app |
| Changes to This Privacy Policy | Usually reusable as-is |
| Contact Us | The correct contact method and any "Web Version" or related link |

---

## 8. Footer

| Element | Change to |
|---|---|
| Copyright text | `© [year] [your name/brand] - [New App Name].` |
| "Home" link | New app's homepage URL |
| "Last updated" text | The real last-updated date |

---

## 9. Script at the bottom

```js
probe.src = '../logo.png';   // and
img.src = '../logo.png';
```

- Update the relative path if your folder structure differs (see section 1).
- This logic already handles the case where `logo.png` doesn't exist yet — it just keeps showing the built-in pixel-avatar placeholder, so it's safe to leave pointed at a file you haven't uploaded.

---

## Quick checklist

- [ ] Decide folder structure, fix `../` paths if needed
- [ ] Title, description, author, canonical, favicon
- [ ] Open Graph tags + preview image
- [ ] Twitter card tags + preview image
- [ ] `--accent` (and other tokens if rebranding)
- [ ] Header brand link, logo, brand text, nav link
- [ ] Rewrite every policy section for the new app's real data practices
- [ ] Footer copyright, home link, last-updated date
- [ ] Logo script path
