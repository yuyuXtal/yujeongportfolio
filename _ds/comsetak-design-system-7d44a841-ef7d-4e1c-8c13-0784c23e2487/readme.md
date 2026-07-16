# Comsetak Design System

A warm, print-forward, **Korean-editorial** design system built around two supplied typefaces: the chunky, rounded signage face **210 Computersetak R** (foundry Design210) for display, and a classic Korean reading serif for body. The mood is a modern reinterpretation of retro Korean shopfront signage — cream paper, warm near-black ink, a single confident vermilion — carried with editorial restraint.

> **No brand, logo, product, codebase, or Figma was supplied** — only the fonts. This system is therefore authored *from scratch* around the type. The name "Comsetak" is derived from the display font ("콤퓨타세탁" → *Computersetak*); it is a working house name, **not** a real company. Wherever a logo would go, the name is set in the display face (see `guidelines/brand-wordmark.card.html`). Do not treat "Comsetak" as an existing brand.

## Sources given
- `uploads/210 콤퓨타세탁R.ttf` — **210 Computersetak R** (Design210, 2014). Single weight. Copied to `assets/fonts/Computersetak-R.ttf` and wired as `@font-face` family `"Computersetak"`.
- `uploads/SourceHanSerifK-Regular.otf`, `uploads/SourceHanSerifK-SemiBold.otf` — **listed in the brief but did NOT arrive** in the project. See "Font substitution" below.

## Font substitution ⚠️
The two **Source Han Serif K** OTFs were referenced but not uploaded. Source Han Serif K is the same typeface as Google's **Noto Serif KR** (a joint Adobe/Google superfamily), so the system loads **Noto Serif KR** from Google Fonts as the body serif in the meantime. It is metrically and visually equivalent for layout purposes. **Please re-upload `SourceHanSerifK-Regular.otf` and `-SemiBold.otf`** if you want the exact binaries self-hosted; I'll swap the `@font-face` `src` in `tokens/fonts.css`.

---

## CONTENT FUNDAMENTALS
How copy is written across this system (see the UI kit and specimen cards for live examples):

- **Language.** Primary language is **Korean**, with Latin used for labels, wordmarks, and loanwords. Copy is written to read naturally when Hangul and Latin sit in the same line.
- **Person & tone.** Warm, plain, slightly literary — closer to a good magazine than a SaaS dashboard. Addresses the reader gently with the polite `-요`/`-습니다` register (e.g. "회사 메일을 입력하세요", "매주 목요일 새 글을 보냅니다"). Not chirpy, not corporate.
- **Casing.** Latin UI micro-labels and eyebrows are **UPPERCASE with wide tracking** (`EDITORIAL`, `VOL. 03`). Headlines and body are sentence case. Korean has no case, so emphasis comes from weight and the display/serif contrast instead.
- **Length.** Buttons and labels are terse (`저장하기`, `구독하기`, `이어 읽기`). Deks and body run long and unhurried.
- **Numerals.** Korean counters where natural (`8분`, `Vol. 03`, `여름호`).
- **Emoji.** **Not used.** Iconography is line-drawn (see below). Emphasis is typographic, not pictographic.
- **Vibe.** "일상의 사물을 다시 보는" — looking again at ordinary things. Unhurried, tactile, print-literate.

## VISUAL FOUNDATIONS
- **Palette.** Warm **cream paper** (`#F4F1EA`), never pure white; a recessed sink (`#EAE5D8`) for alternating sections; near-white **card** (`#FBFAF5`). Text is a **warm near-black** (`#17140F`), not `#000`. One primary accent — **vermilion** (`#E1401C`) — with **cobalt** (`#23439B`, also the link color) and **ochre** (`#E0A32E`) as supports. Semantic success/danger/warning each ship as a solid + tint pair. Full list in `tokens/colors.css`.
- **Type.** Display = **210 Computersetak** (headlines, signage, UI chrome, buttons — yes, the display face carries the UI too); body = **Noto Serif KR** (long-form reading, deks, captions). The tension between a chunky rounded sans and a refined serif is the core visual idea. Scale is a 1.25 major-third (`tokens/typography.css`). Long-form Korean body uses generous `line-height: 1.72`.
- **Backgrounds.** Flat cream fields. **No photographic hero washes, no decorative gradients.** Imagery, when present, sits in bordered rounded frames as discrete "plates" (see article cards). Placeholder image areas use soft token tints, never rainbow gradients.
- **Corner radii.** Modest and consistent — `md: 10px` for controls, `lg: 16px` for cards/plates, `pill` for tags/switches. The display face's soft terminals do the "friendly" work, so radii stay restrained.
- **Cards.** Four elevations (`Card` component): `flat` (hairline border), `raised` (border + soft shadow), `outline` (2px ink), and the signature **`signage`** — 2px ink border + a **hard 4px ink offset shadow** (`--shadow-offset`) for a printed-poster look.
- **Shadows.** Warm, ink-tinted, low (`--shadow-xs…xl`). The hard offset shadow is the one expressive exception.
- **Borders.** Hairlines are warm taupe (`--line #DCD5C4`); structural/ink borders are 2px. A **vermilion 6px rule** (`--rule`) divides signage compositions.
- **Motion.** Quick and unfussy. `--dur-fast 120ms` for presses, `--dur-base 200ms` for hovers/color, `--dur-slow 320ms` for entrances. Easing: `--ease-standard` for most, `--ease-out` for entering elements. **No bounces, no infinite loops.** Respect reduced-motion.
- **Hover states.** Fills **darken** (primary → `--vermilion-ink`); ghost gets a faint `rgba(23,20,15,0.06)` wash; secondary **inverts** to ink fill; cards **lift 3px** with a deeper shadow.
- **Press states.** Buttons nudge **down 1px and scale to 0.99**; icon buttons scale to **0.92**. Tactile, small.
- **Focus.** 2px inset **cobalt** ring on inputs; the system reserves `--focus-width 3px` for keyboard focus rings.
- **Transparency & blur.** Used sparingly — the sticky header is `rgba(paper,0.86)` + `blur(10px)`; the dialog scrim is `rgba(ink,0.42)` + a light blur. Not a glassmorphism system.
- **Layout.** Editorial measure caps body at ~`68ch`; content containers ~1120–1200px; 4px spacing grid.

## ICONOGRAPHY
- **No icon set was supplied.** ⚠️ **Substitution:** the UI kit uses a small hand-picked set of **Lucide-geometry** line icons (24×24 viewBox, **2px** rounded stroke, `currentColor`) defined inline in `ui_kits/journal/Icons.jsx` (search, menu, close, bookmark, share, arrow L/R, clock, mail). Lucide's rounded caps/joins pair well with Computersetak's soft terminals. If you prefer a specific set (Lucide full, Phosphor, a bespoke Korean set), tell me and I'll swap it.
- **Style rules.** Line, not filled; 2px stroke; rounded caps and joins; inherit text color; size 16–20px inline, 22–24px standalone. Icons ride *with* the display face in chrome.
- **Emoji / unicode as icons.** Not used. A few unicode glyphs (`✓ ! △ ×`) appear only inside components (checkbox check, toast/badge glyphs, close) where a full SVG would be overkill.
- **Logo/marks.** None supplied and **none invented**. The wordmark is the name in the display face with a vermilion dot accent (`Com.setak`). Do not synthesize a logo.

---

## Components
Reusable React primitives (import from `window.ComsetakDesignSystem_7d44a8`). Grouped by concern:

- **core/** — `Button`, `IconButton`, `Badge`, `Tag`, `Card`
- **forms/** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- **feedback/** — `Dialog`, `Toast`, `Tooltip`
- **navigation/** — `Tabs`

Each directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one `@dsCard` HTML showing states/variants. Styling references CSS custom properties only — no CSS-in-JS libs, no npm packages.

### Intentional additions
None. With no source inventory supplied, this is the standard from-scratch primitive set (per the brief), sized to an editorial product. No product-specific components were invented.

## UI kits
- **`ui_kits/journal/`** — *Comsetak Journal*, an editorial magazine web surface (Home + Article reading flow) that composes the primitives. Illustrative product; see its `README.md`.

## Foundations / Design System tab
Specimen cards live in `guidelines/` (Colors, Type, Spacing, Brand) and each component directory (Components). They are small `@dsCard`-tagged HTML files rendered in the Design System tab.

## File index
- `styles.css` — global entry point (only `@import`s).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `assets/fonts/Computersetak-R.ttf` — supplied display face.
- `guidelines/*.card.html` — foundation specimen cards.
- `components/{core,forms,feedback,navigation}/` — primitives + cards.
- `ui_kits/journal/` — editorial web UI kit.
- `SKILL.md` — Agent-Skill wrapper for downloading/using this system in Claude Code.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — **generated**, do not edit.
