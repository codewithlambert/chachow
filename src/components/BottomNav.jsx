import { Link, useLocation } from 'react-router-dom';

const TABS = [
  {
    key: 'home', label: 'Home', to: '/',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11.5 12 4l8 7.5" />
        <path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9" />
      </svg>
    ),
  },
  {
    key: 'search', label: 'Search', to: '/browse',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
  {
    key: 'orders', label: 'Orders', to: '/orders',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 9V7a5 5 0 0 1 10 0v2" />
        <rect x="4" y="9" width="16" height="11" rx="3" />
      </svg>
    ),
  },
  {
    key: 'profile', label: 'Profile', to: '/profile',
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 20c1.5-4 5-6 7.5-6s6 2 7.5 6" />
      </svg>
    ),
  },
];

// Persistent black bottom tab bar — mobile only (<1024px).
export default function BottomNav() {
  const { pathname } = useLocation();

  return (
    <div
      className="only-mobile"
      style={{
        position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 30,
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        height: 80, padding: '10px 16px 16px',
        background: 'var(--ink)', borderRadius: '24px 24px 0 0',
      }}
    >
      {TABS.map((tab) => {
        const active = pathname === tab.to;
        const iconColor = active ? 'var(--ink)' : 'var(--off-55)';
        const labelColor = active ? 'var(--offwhite)' : 'var(--off-55)';
        return (
          <Link key={tab.key} to={tab.to} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{
              width: 44, height: 30, borderRadius: 'var(--r-pill)',
              background: active ? 'var(--lime)' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {tab.icon(iconColor)}
            </div>
            <span style={{ fontSize: 11, fontWeight: 500, color: labelColor }}>{tab.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
