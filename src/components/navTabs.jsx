// Shared nav config for BottomNav (mobile) and Sidebar (desktop) so the
// two chrome components can't drift out of sync.
export const TABS = [
  {
    key: 'home',
    label: 'Home',
    to: '/app',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11.5 12 4l8 7.5" />
        <path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9" />
      </svg>
    ),
  },
  {
    key: 'browse',
    label: 'Browse',
    to: null,
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="7" height="7" rx="2" />
        <rect x="13" y="4" width="7" height="7" rx="2" />
        <rect x="4" y="13" width="7" height="7" rx="2" />
        <rect x="13" y="13" width="7" height="7" rx="2" />
      </svg>
    ),
  },
  {
    key: 'orders',
    label: 'Orders',
    to: '/app/tracking',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 9V7a5 5 0 0 1 10 0v2" />
        <rect x="4" y="9" width="16" height="11" rx="3" />
      </svg>
    ),
  },
  {
    key: 'profile',
    label: 'Profile',
    to: null,
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 20c1.5-4 5-6 7.5-6s6 2 7.5 6" />
      </svg>
    ),
  },
];
