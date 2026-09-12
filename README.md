# Cha Chow

Food delivery web app for the Nigerian market (Lagos), built with React +
Vite. One responsive codebase — desktop gets a marketing landing page +
top nav, mobile gets the native-app-style flow (Splash → Onboarding →
Sign In → dashboard with a bottom tab bar).

## Design system

| Token | Value | Use |
|---|---|---|
| `--lime` | `#C9F53A` | the only accent — active states, prices, CTAs |
| `--lime-dim` | `#7fae1c` | lime, darkened for legible text on light backgrounds |
| `--ink` | `#0F1110` | near-black — the authenticated app's surface, nav, primary buttons |
| `--offwhite` | `#F8F9F5` | light surface (desktop app pages, Sign In) |
| `--card-dark` | `rgba(248,249,245,0.045)` | card surface on dark (mobile app) screens |

All defined in `src/index.css`. Headings use **Space Grotesk** (bold, tight
tracking); body text uses **DM Sans**. Cards are 20–32px radius; buttons
and chips are pill-shaped.

## Routing & auth

```
/                 public marketing home (desktop) — redirects mobile
                  first-time visitors into /splash
/splash /onboarding /sign-in     public, pre-auth flow

--- everything below requires a signed-in session (see src/auth.jsx) ---
/browse           category / restaurant browse
/dish             dish detail (reads the tapped dish from router state,
                  falls back to a default if opened directly)
/cart
/tracking         live order tracking
/profile          account menu (mobile) / orders list (desktop)
/orders           order history — Current / Past tabs
/addresses
/payment-methods
```

`src/auth.jsx` is a small demo-only auth context (no backend) — `login()`
flips a flag persisted to `localStorage` so a refresh mid-session doesn't
bounce you back to Sign In. **Sign In → "Continue as guest"** logs in
without needing real credentials, for testing.

Desktop vs. mobile is decided per-screen by two things working together:
CSS (`--bp-desktop: 1024px` in `src/index.css`, via the `.only-desktop` /
`.only-mobile` utility classes) picks which block renders, and
`src/useIsMobile.js` is used the one place routing itself needs to know
(`Home.jsx`, to redirect first-time mobile visitors to `/splash`).

**Known gap:** `/orders`, `/addresses`, `/payment-methods` were built
mobile-first per the reference and don't have a distinct desktop layout
yet — they render fine on desktop, just centered/narrow rather than using
the extra width.

## Screens

- `Splash` / `Onboarding` (3 steps, animated) / `SignIn` — pre-auth flow.
- `Home` — desktop: full-bleed photo hero, Popular Categories, How It
  Works. Mobile: signed-in dashboard (greeting, search, deals, categories,
  popular dishes).
- `CategoryBrowse` — desktop: sidebar filter + restaurant grid. Mobile:
  category list.
- `DishDetail` — hero photo, add-ons, quantity, Add to Cart.
- `Cart`, `OrderTracking`, `Profile`, `OrderHistory`, `Addresses`,
  `PaymentMethods`.
- `src/components/Logo.jsx` — the `Cha Chow` wordmark.
- `src/components/TopNav.jsx` (desktop) / `BottomNav.jsx` (mobile) — chrome
  for the authenticated app; both read live auth state.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
```

## Screenshot scripts

```bash
npm run dev &
node scripts/screenshot.mjs   # every route, mobile + desktop, to .screenshots/
node scripts/full-sweep.mjs   # same, but signs in first so it also covers
                               # every gated route
```

## Deploying (Vercel)

`vercel.json` rewrites every path to `index.html` so client-side routing
(React Router) survives a hard refresh or a direct link to e.g. `/cart`.
Push to GitHub and import the repo in Vercel — no other config needed
(Vite is auto-detected).

## Food photography

Stock photography in `src/assets/images/`, used as realistic placeholders,
matched to what they're labeled as (grilled chicken for "Chicken", pasta
for "Pasta", grilled skewers for "Beef Suya", etc.). Swap files for real
shoots later — same filenames, nothing else needs to change.
