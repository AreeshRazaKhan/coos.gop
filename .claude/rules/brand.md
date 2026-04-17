# Cleveland for Congress — Brand Rules

**Authoritative source:** `cleveland-brand-guide-v2.html` (in project root or `C:\Users\Dev\Documents\`). This file is the machine-readable summary. When the two conflict, the HTML guide wins — update this file to match.

**When to apply:** every piece of code, copy, or asset generated for this project. Website, emails, landing pages, social graphics, merch, slides — all use these rules.

---

## 1. Voice & essence

| | |
|---|---|
| Name | Russ Cleveland for Congress '26 |
| Tagline | *Independent Spirit, Democratic Values* |
| Rally cry | **The Montana Way** |
| Three words | Grounded · Principled · Neighborly |
| Frame | "Not left versus right — top versus bottom" |
| Voice | Plainspoken, steady, rural-literate, morally serious, never performative |
| Avoid | Corporate jargon, manufactured outrage, stock patriotism, partisan talking points |

Three platform pillars drive all copy priority: **(1) Healthcare** (personal — Madison) · **(2) Affordability** · **(3) End corruption** (no corporate PAC).

---

## 2. Color tokens

```css
--ink-900:   #0E1B2C;  /* Midnight Ink — hero/nav/footer backgrounds, primary text on light */
--ink-800:   #132338;  /* section alternates, card interiors on dark */
--ink-700:   #1A2E49;  /* gradient stops, hover surfaces on dark */
--ink-600:   #24405F;  /* rarely used; deep-tint only */

--ochre-500: #C8732B;  /* Sunset Ochre — primary CTA, italic accents, stickers, logo rule */
--ochre-600: #A65E1F;  /* Ochre Dark — hover, pressed, small-text ochre */
--ochre-400: #D88A4A;  /* hover highlight only */
--brass:     #8B4A12;  /* eyebrow labels on paper, icon strokes */

--paper:     #F3EDE1;  /* Montana Paper — primary page background */
--paper-2:   #ECE4D3;  /* alt section, bento surface */
--bone-100:  #E8DFCE;  /* card backgrounds on paper, slider surface */
--bone-200:  #D9CFB8;  /* borders, hairline dividers */
--stone-400: #A39B8A;  /* captions, meta, placeholders */
--stone-600: #6B6760;  /* body copy on paper, secondary text */
--ash:       #4A4A48;  /* emphasis body on paper */

--sage:      #6B7A5A;  /* Rocky Sage — Veterans / Public-Lands tiles, badges */
--sage-dark: #4E5C3F;  /* "Do" list accents, deep-sage gradient stops */

--rust:      #8B2E1F;  /* Western Rust — URGENCY ONLY (donate, election-day, errors) */
--moonlight: #EDE7D8;  /* body on ink, reversed text */
--white:     #FFFFFF;  /* card bases, print, form fills */
```

**Usage ratio (target on every page):** 60% paper · 25% ink · 8% ochre · 4% sage · 3% rust.

**Hard rules:**
- Ochre is a *moment*, not a mood. Never use as long-form text background.
- Rust appears only on donation/urgency CTAs. Never as divider, background, or decorative accent.
- No gradients except: navy→midnight (hero), ochre→brass (logo/sticker), sage→sage-dark (photo cards).
- No drop shadows on type. Shadows on stickers only, at `0 10px 30px rgba(200,115,43,.35)`.

**Contrast (WCAG):**
| Pair | Ratio | Class |
|---|---|---|
| Paper on Ink | 15.2:1 | AAA body & headings |
| Ink on Paper | 15.2:1 | AAA body on light |
| Ink on Ochre | 6.8:1 | AA+ CTAs & stickers |
| Paper on Ash | 8.1:1 | AAA alternate body |
| Ochre on Ink | **Do not use** — fails for text under 18px |

---

## 3. Typography

```css
--ff-display: 'Fraunces', serif;          /* Variable — weights 400..900 */
--ff-italic:  'Instrument Serif', serif;  /* Italic accent word only */
--ff-body:    'Inter', sans-serif;        /* Weights 300/400/500/600/700 */
--ff-mono:    'JetBrains Mono', monospace;/* Labels, FEC data, eyebrows */
```

**Google Fonts URL (locked):**
```
https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800;9..144,900&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap
```

### Type scale (never drop body below 16px)

| Role | Size | Line | Tracking | Family / Weight |
|---|---|---|---|---|
| Display XL · Hero | `clamp(3rem, 12.5vw, 11.5rem)` | .88 | −.03em | Fraunces 900 |
| H1 · Section | `clamp(2.2rem, 6vw, 5rem)` | .96 | −.025em | Fraunces 900 |
| H2 · Subsection | 52px | 1.02 | −.02em | Fraunces 800 |
| H3 · Card | 32px | 1.08 | −.02em | Fraunces 800 |
| H4 · Feature | 24px | 1.2 | −.015em | Fraunces 700 |
| Lead / Pull-Quote | 28px | 1.3 | −.015em | Fraunces 400 |
| Eyebrow · Label | 12px | 1 | .22em UPPER | JetBrains Mono 600 |
| Body Large | 18px | 1.7 | 0 | Inter 400 |
| Body | 16px | 1.65 | 0 | Inter 400 |
| Caption · Meta | 12px | 1.5 | .14em UPPER | JetBrains Mono 500 |
| Stat Numeral | 96px | .9 | −.04em | Fraunces 900, ochre |

### Pairing rules
- Serif and sans **never touch within the same line**. Use rules/spacing between them.
- **Instrument Serif italic** appears ONLY as an accent word inside Fraunces headlines, or as pull-quote body. Never as running text or UI.
- Mono eyebrow → Fraunces headline is the canonical stacking pattern (same structure as the logo).
- Eyebrow always includes a leading `—` or preceding hairline rule.

---

## 4. Logo

- Lockup: Fraunces 900 "Cleveland" wordmark, 2px ochre rule, Mono "FOR CONGRESS · MT-01" tagline, optional ✦ star glyph above.
- 4 sanctioned variants: **Ink** (primary), **Paper**, **Ochre Accent**, **Mono/Print**. Nothing else.
- Clear space = cap-height of "CLEVELAND" on every edge.
- Minimum size: **140px** wide (digital), **1.25″** wide (print). Below that, use the wordmark-only lockup.
- The **✦** (five-point star) is the only sanctioned ornament. Never swap for eagle, gavel, state outline, or generic star icons.
- FEC disclosure line is NOT part of the logo — always typeset separately in Mono.

**Never:** recolor outside sanctioned variants, rotate, stretch, outline, add drop shadows, place over busy photography without a paper/ink scrim.

---

## 5. Layout & spacing

**Base unit:** 8px. **Grid:** 12 columns, 24px gutter, 1440px max-width. **Bento sub-grid:** 6 columns, 180px row min.

```
XXS  4px   · inline icon gaps, star offsets
XS   8px   · tight stacks, chip padding
SM   16px  · element gaps inside cards
MD   24px  · grid gutter, card gaps, bento gap
LG   40px  · card interior padding
XL   56px  · section-head bottom margin
2XL  96px  · section top/bottom (mobile)
3XL  140px · section top/bottom (desktop)
```

**Asymmetry rules:**
- Default hero splits are **7/5** and **8/4**. Never 6/6.
- No adjacent bento tiles share the same span.
- Portraits and stats may bleed past section boundaries by 40–80px — **deliberately, never accidentally**.
- Section-head structure is fixed: mono eyebrow → Fraunces title (with italic accent) → 1-sentence desc (≤64ch).

**Radius:** `4px` (small) · `20–28px` (tile/card) · `999px` (pill/button/sticker). Arched image masks use `240px 240px 28px 28px`.

---

## 6. Components

### Button
```html
<a class="btn btn-{variant}">Label →</a>
```
- Radius `999px`, padding `16px 30px`, border `1.5px`, font Inter 600 12px, tracking `.14em`, UPPERCASE.
- Variants: `primary` (ink bg, paper text) · `ochre` (ochre bg, ink text) · `ghost` (transparent, ink border) · `rust` (rust bg, paper text — **urgency only**).
- Hover on `primary`: bg → ochre, border → ochre, text → ink. `transition: all .2s`.
- Minimum hit target 44×44px.

### Navigation
- Dark variant over hero: `--ink-900` bg, `--moonlight` text.
- Light variant when scrolled: `--paper` bg with `rgba(.82)` backdrop-blur(14px), `--bone-200` border-bottom.
- Brand mark at left; links center/right; single `btn-ochre` or `btn-primary` donate button at far right.
- Brand `small` tagline set in Mono 9px, tracking `.22em`, UPPERCASE.

### Bento tile (platform pillar)
```html
<article class="tile t-{slug}">
  <div class="tile-num">Pillar 0N / Name</div>
  <h3>Headline with <em>italic accent</em>.</h3>
  <p>≤38ch body...</p>
  <div class="arrow-lg"></div>
</article>
```
- 7 tiles max in a bento section, 6-column sub-grid, 3 rows.
- Color rotation: ink (dominant) · paper-2 · ochre · sage · rust · bone · paper-2.
- Decorative shape (circle border, dollar sign glyph) placed in overflowed corner at 14–18% opacity.

### Feature card
- White bg, `--bone-200` border, radius 4px, padding 34px.
- 3px ochre top rule, 48px wide, anchored top-left via `::before`.
- 44px circular icon outline using Fraunces 900 letter.

### Form / input
- Label: Mono 600 10px, tracking `.18em`, UPPERCASE, `--brass` color.
- Input: `--paper` background, `--bone-200` border, radius 4px, padding 14/16, Inter 15px.
- Focus ring: 2px ochre outline, 2px offset.

### Slider
- Circular prev/next, 48–54px, ink border. Active/next filled ink.
- Slide: bone-100 bg, radius 28px, Fraunces 400 body 1.28rem, min-height 320px.

---

## 7. Accessibility

**Standard:** WCAG 2.2 AA minimum. AAA on primary pairs and hero headlines. Failed audits block release.

**Hard checklist (every page must pass):**
- Body ≥ 16px.
- Line-height: 1.65 body, .95 display.
- Touch targets ≥ 44×44px.
- Visible focus ring: 2px `--ochre-500`, 2px offset.
- Color never the sole signal — always paired with text, icon, or pattern.
- Meaningful images get alt; decorative grain overlays get `alt=""`.
- Semantic landmarks: `<header> <nav> <main> <section> <footer>`.
- Skip-to-content link as first focusable element.
- Forms: labels associated, errors announced, required marked.
- Motion respects `prefers-reduced-motion` — pause marquees, disable cursor dot, replace parallax with fades.
- Cursor dot hides on touch and reduced-motion.
- Video needs captions + transcript.
- Test with axe-core in CI, NVDA (Win), VoiceOver (Mac/iOS), TalkBack (Android), keyboard-only.

---

## 8. Photography

**Whitelist (only these categories ship):**
1. Portrait — full-color hero of Russ, available light
2. Community — diners, fairs, union halls (may be duotone)
3. Family — 7 kids, farmhouse context
4. Landscape — Bitterroot range, wheat fields
5. Archival — Navy service, young Russ, Madison (duotone required)
6. B-Roll — real voters, unscripted moments

**Duotone recipe (archival only):** `linear-gradient(135deg, rgba(14,27,44,.8), rgba(200,115,43,.3))` with `mix-blend-mode: multiply` over the image. Never mix duotone and full-color in the same grid.

**Do:**
- Natural light, golden hour, Montana locations, written consent, leave left-side negative space for typographic overlays, keep analog grain.

**Don't:**
- Stock handshakes · waving flags · bald eagles · prayer circles · HDR · Instagram filters (Clarendon, Lo-Fi, etc.) · tight face crops · drop shadows · vignettes · text baked into photos · competing campaign imagery · corporate logos.

---

## 9. Signature design patterns

Every pattern below must be reproducible from these parameters alone.

### Pattern 01 · Rotated ochre sticker
`pill` shape, `--ochre-500` bg, `--paper` text, Mono 600 11px, tracking `.2em`, UPPERCASE, padding `14px 22px`, radius `999px`, `transform: rotate(-8deg)`, `box-shadow: 0 10px 30px rgba(200,115,43,.35)`. Used for campaign promises ("No Corporate PAC").

### Pattern 02 · Arched image mask
`border-radius: 240px 240px 28px 28px`. Ratio 3/4 or 4/5. Never flipped horizontally. Used on portraits and community photography, never on landscape.

### Pattern 03 · Marquee watermark
Fraunces 900, 200px, `opacity .05–.08`, italic accent word in Instrument Serif at `opacity .18`. Static on section transitions; `animation: scroll 40s linear infinite` on live marquee strips.

### Pattern 04 · Paper stamp badge
Circular or pill, `--paper` bg, `2px solid --ink-900` border, `transform: rotate(+5deg)`, Mono 600. Max 2 per page. Used as credentials ("Navy Veteran", "Veteran-Owned Campaign", "Est. '25").

### Pattern 05 · Grain overlay
Global fixed overlay. Inline SVG: `feTurbulence baseFrequency=0.9 numOctaves=2`, `opacity: .06`, `mix-blend-mode: multiply`. Inside pattern tiles bump to `.14`. Disable when `prefers-reduced-transparency` is set.

---

## 10. Copy rules

- Active voice, contractions OK. Sentence-case headlines (not title-case).
- Italic accent in headlines is always emotionally loaded ("*democratic* values", "*top versus bottom*", "*that's the job*") — never a neutral noun.
- Numbers: digits for statistics (`07 children`, `$0 corporate PAC`), words for rhetoric ("twenty-three counties").
- Place names always specific (Stevensville, Bitterroot, Ravalli County). Never "rural America."
- FEC disclosure always reads: *"Paid for by Cleveland for Congress · FEC ID C00902395 · P.O. Box 691, Saint Regis, MT 59866"*.
- Contact email: `connect@russellcleveland.org`.

---

## 11. Never-do list (merged)

- Serif + sans on the same line
- Body under 16px
- Ochre as long-form background
- Rust anywhere except donate/urgency
- Perfect 6/6 grid splits
- Adjacent bento tiles of equal span
- Drop shadows on type
- Eagles, gavels, flags, prayer circles, stock handshakes
- Instagram filters on photography
- Mixing duotone with full-color in the same section
- Swapping the ✦ star for another glyph
- Putting the FEC line inside the logo
- Decorative use of red/rust
- Animation that ignores `prefers-reduced-motion`
- Focus states without visible ring
- Empty `alt` on meaningful images

---

## 12. Default snippets

### CSS preamble (copy into every new HTML scaffold)
```css
:root{
  --ink-900:#0E1B2C; --ink-800:#132338; --ink-700:#1A2E49;
  --ochre-500:#C8732B; --ochre-600:#A65E1F; --brass:#8B4A12;
  --paper:#F3EDE1; --paper-2:#ECE4D3; --bone-100:#E8DFCE; --bone-200:#D9CFB8;
  --stone-400:#A39B8A; --stone-600:#6B6760; --ash:#4A4A48;
  --sage:#6B7A5A; --sage-dark:#4E5C3F; --rust:#8B2E1F; --moonlight:#EDE7D8;
  --ff-display:'Fraunces',serif;
  --ff-italic:'Instrument Serif',serif;
  --ff-body:'Inter',sans-serif;
  --ff-mono:'JetBrains Mono',monospace;
}
html,body{background:var(--paper);color:var(--ink-900);font-family:var(--ff-body);font-size:16px;line-height:1.65}
```

### Section head
```html
<div class="section-head">
  <span class="mono tag">0N · Section Name</span>
  <h2 class="display">Headline with <em>italic accent</em>.</h2>
  <p class="aside italic">One-sentence aside.</p>
</div>
```

### Marquee strip (ink)
```html
<div class="marquee"><div class="marquee-track">
  <span>The Montana Way <span class="marquee-star">✦</span> <em>people-first</em> politics <span class="marquee-star">✦</span> no corporate PAC money <span class="marquee-star">✦</span> </span>
  <span>The Montana Way <span class="marquee-star">✦</span> <em>people-first</em> politics <span class="marquee-star">✦</span> no corporate PAC money <span class="marquee-star">✦</span> </span>
</div></div>
```

### Grain overlay (fixed)
```html
<div aria-hidden="true" style="position:fixed;inset:0;pointer-events:none;z-index:200;opacity:.06;mix-blend-mode:multiply;background-image:url(&quot;data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.4 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>&quot;)"></div>
```

---

## 13. When unsure

1. Check `cleveland-brand-guide-v2.html` page-by-page.
2. If still unclear, default to: **more paper, more whitespace, less ochre**.
3. Asymmetry over symmetry. Editorial restraint over campaign bombast.
4. Escalate ambiguity to the campaign creative lead before shipping — do not invent new variants.

_Version 1.0 · Issued 2026-04-18 · Paid for by Cleveland for Congress · FEC ID C00902395_
