# New App Checklist — App Landing Page Template

Use this every time you duplicate the `index.html` / `app.details.js` /
`platforms.config.js` folder for a new app. Work top to bottom.

---

## 0. Duplicate the folder

Copy the **generic (un-baked)** template — not this QR Generator copy,
since its `index.html` now has QR-Generator-specific static tags baked
in (see Section 3). Rename the folder for the new app.

---

## 1. `app.details.js` — edit every field below

### Identity
- [ ] `name` — app's display name
- [ ] `siteName` — your brand/site name (shown as `og:site_name`)
- [ ] `url` — full canonical URL of this app's page
- [ ] `privacyUrl` — full URL to the privacy policy page

### Theme
- [ ] `themeColor` — light-mode browser chrome color
- [ ] `themeColorDark` — dark-mode browser chrome color (blank = reuse `themeColor`)
- [ ] `accentColor` — single accent color used for links/buttons/highlights

### Author
- [ ] `author.name`
- [ ] `author.alternateName`

### Assets (upload the files, then point these at them)
- [ ] `assets.favicon` — browser tab icon
- [ ] `assets.logo` — header brand mark
- [ ] `assets.heroImage` — hero visual (only used if `hero.visual: 'image'`)
- [ ] `assets.bigImage` — 1200×630 link-preview image

### Optional
- [ ] `appStoreId` — numeric App Store id, once the app is actually on iOS

### SEO
- [ ] `seo.title`
- [ ] `seo.description`
- [ ] `seo.robots` — optional, defaults to `index, follow`

### Social (Open Graph / Twitter)
- [ ] `social.title`
- [ ] `social.description`
- [ ] `social.imageAlt`
- [ ] `social.imageWidth` / `social.imageHeight` — optional, default 1200×630

### Structured data (JSON-LD)
- [ ] `schema.applicationCategory`
- [ ] `schema.operatingSystem` — optional; blank = auto-derived from `platforms.config.js`
- [ ] `schema.price`
- [ ] `schema.currency`

### Header
- [ ] `header.brandText`
- [ ] `header.nav` — array of `{ label, url }` (e.g. Privacy Policy link)

### Hero
- [ ] `hero.eyebrow`
- [ ] `hero.releaseNote` — blank to hide; update by hand on every re-release
- [ ] `hero.heading` — may include `<br>`
- [ ] `hero.lede`
- [ ] `hero.ctaLabel`
- [ ] `hero.ctaMeta`
- [ ] `hero.allOptionsText`
- [ ] `hero.visual` — `'qrgrid'` | `'image'` | `'none'`

### Features
- [ ] `featuresLabel`
- [ ] `features[]` — each: `icon` (inline SVG string), `title`, `description`

### Footer
- [ ] `footer.copyrightText`
- [ ] `footer.updatedText` — blank to hide; update by hand whenever the page changes

### AI / crawler note
- [ ] `aiNote` — usually leave blank (auto-composed from `platforms.config.js`)

---

## 2. `platforms.config.js` — edit every platform entry

For each platform in `APP_PLATFORMS`:
- [ ] `id`
- [ ] `label`
- [ ] `store`
- [ ] `url`
- [ ] `available` — `true`/`false`
- [ ] `note` — shown to screen readers/crawlers when `available: false`
- [ ] `detect(ua, nav)` — device-sniffing function (copy from a template block if it's a common platform)

Also:
- [ ] `APP_PLATFORM_ICONS` — add an entry only if you introduce a platform `id` with no built-in icon (android/ios/windows/macos/linux are already covered)

---

## 3. `index.html` — static fallback `<head>` block

**Skip this section entirely if you're starting from the generic
template** (it has no static block — the JS alone is enough for
Google). Only relevant if you're baking values in for pixel-perfect
link previews on non-JS bots (Facebook, X/Twitter, WhatsApp, Discord,
Slack, iMessage, LinkedIn).

If you do bake one in, every value below must be hand-typed to match
the `app.details.js` field on the right — this HTML has no connection
to the JS values, so it goes stale the moment you edit `app.details.js`
without also editing this block.

| Static HTML tag | Matches this `app.details.js` field |
|---|---|
| `<title>` | `seo.title` |
| `<meta name="description">` | `seo.description` |
| `<meta name="robots">` | `seo.robots` |
| `<meta name="author">` | `author.name` |
| `<link rel="canonical">` | `url` |
| `<link rel="icon">` | `assets.favicon` |
| `og:url` | `url` |
| `og:site_name` | `siteName` |
| `og:locale` | `locale` (usually leave as `en_US`) |
| `og:title` / `twitter:title` | `social.title` |
| `og:description` / `twitter:description` | `social.description` |
| `og:image`, `og:image:secure_url`, `twitter:image` | `url` + `assets.bigImage`, combined into **one absolute URL** |
| `og:image:width` / `og:image:height` | `social.imageWidth` / `social.imageHeight` |
| `og:image:alt` / `twitter:image:alt` | `social.imageAlt` |
| `theme-color` (light) | `themeColor` |
| `theme-color` (dark) | `themeColorDark` |
| JSON-LD `name` | `name` |
| JSON-LD `url` | `url` |
| JSON-LD `image` | same absolute image URL as `og:image` |
| JSON-LD `description` | `seo.description` |
| JSON-LD `applicationCategory` | `schema.applicationCategory` |
| JSON-LD `operatingSystem` | `schema.operatingSystem`, or auto-derived from every `available: true` platform |
| JSON-LD `author.name` / `alternateName` | `author.name` / `author.alternateName` |
| JSON-LD `offers.price` / `priceCurrency` | `schema.price` / `schema.currency` |

Not baked in (and don't need to be — pure JS/DOM): header brand
text/nav, hero copy, feature grid, footer text, platform cards, and
the download-picker modal.

---

## 4. Assets to upload

Upload these next to the new app's `index.html`, named to match
whatever you set in `assets` above:
- [ ] Favicon
- [ ] Logo
- [ ] Hero image (if `hero.visual: 'image'`)
- [ ] 1200×630 link-preview image

---

## 5. You should NOT need to touch

`index.html`'s JavaScript itself — header, hero, features, footer,
platform cards, and the download modal are all rendered purely from
`app.details.js` / `platforms.config.js`. The only reason to edit
`index.html` directly is Section 3 above (static link-preview tags).

---

## Reminder

Sections 1, 2, and 4 are the real source of truth. Section 3 (if used)
is a hand-maintained duplicate that only non-JS crawlers benefit from —
keep it in sync manually, or consider a small build script that
generates it automatically from `app.details.js` before each deploy.
