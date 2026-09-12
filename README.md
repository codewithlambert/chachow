# Cha Chow

Food delivery web app, built with React + Vite. Responsive: one real
codebase serving both mobile and desktop, not a phone mockup.

## Design system

| Token | Value | Use |
|---|---|---|
| `--lime` | `#C9F53A` | the only accent — active states, prices, CTAs |
| `--lime-dim` | `#7fae1c` | lime, darkened for legible text on light backgrounds |
| `--ink` | `#0F1110` | near-black — headers, nav, primary buttons |
| `--offwhite` | `#F8F9F5` | screen surface |
| `--white` | `#FFFFFF` | cards, sheets |

All defined in `src/index.css`. Headings use **Space Grotesk** (bold, tight
tracking); body text uses **DM Sans**. Cards are 24–32px radius; buttons and
chips are pill-shaped. No colors outside this system appear anywhere except
inside the food photography itself.

## Responsive architecture

`App.jsx` renders one shell for every route:

```
.app-shell
├── Sidebar          desktop-only nav rail (≥768px), fixed left, 240px
└── .main-content    routed screen, margin-left: 240px on desktop
    └── BottomNav    mobile-only tab bar (<768px), fixed bottom
```

`Sidebar` and `BottomNav` read from the same `src/components/navTabs.jsx` so
the two never drift out of sync — one is shown, the other hidden, by CSS
media query (`--bp-desktop: 768px` in `src/index.css`), not by JS viewport
detection. Each screen is a normal in-flow page inside `.page`
(`max-width: 1160px`, centered) that reflows at its own breakpoints:

- **Home** — header row stacks on mobile, goes side-by-side (info left,
  search right) on desktop; dish grid goes 2 → 3 → 4 columns.
- **Dish Detail** — stacked photo-over-sheet on mobile (with the fixed
  bottom "Add to Cart") becomes a sticky-photo-left / scrolling-info-right
  two-column layout on desktop, where the CTA is just a normal in-flow
  button.
- **Order Tracking** — map-then-steps stack on mobile; side-by-side columns
  on desktop.

Resize the browser — nothing here is device-specific markup, it's the same
DOM reflowing.

## Screens

- `src/screens/Home.jsx` — black rounded header block with a lime radial
  glow, address dropdown, white pill search, category chips, responsive dish
  grid. Cards link to Dish Detail.
- `src/screens/DishDetail.jsx` — hero photo, lime price pill, outlined
  add-on checkboxes, "Add to Cart".
- `src/screens/OrderTracking.jsx` — dark rounded map card with a lime route
  and courier marker, vertical progress list.
- `src/components/Logo.jsx` — the `cha chow` wordmark + bowl/chopsticks mark.
- `src/components/Sidebar.jsx` / `src/components/BottomNav.jsx` — the two
  responsive nav chrome components described above.

More screens (Splash, Onboarding, Sign In, Category Browse, Cart, Profile)
aren't wired up as routes yet — say the word and they're a fast follow using
the same tokens, shell, and breakpoints.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
```

Real in-app navigation: the sidebar (desktop) / bottom tabs (mobile) link
Home ↔ Order Tracking, and dish cards on Home link to Dish Detail.

## Screenshot script

`scripts/screenshot.mjs` drives the dev server with Playwright and saves a
mobile (390px) and desktop (1440px) PNG of each route to `.screenshots/` —
useful for checking a responsive change without opening a browser:

```bash
npm run dev &
node scripts/screenshot.mjs
```

## Food photography

The current images (`src/assets/images/`) are stock photography, used as
realistic placeholders. The target look for real shoots: dish on matte black
ceramic, light warm-grey seamless backdrop, soft directional daylight, a
slight top-down angle, crisp texture, no competing props, with room around
the subject for a square crop. Swap files in `src/assets/images/` (same
filenames) once real photography is ready — nothing else needs to change.
