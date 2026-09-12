import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo.jsx';
import { useAuth } from '../auth.jsx';

const MAIN_NAV = [
  {
    key: 'home', label: 'Home', to: '/',
    icon: (c) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9" /></svg>,
  },
  {
    key: 'search', label: 'Search', to: '/browse',
    icon: (c) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>,
  },
  {
    key: 'orders', label: 'Orders', to: '/orders',
    icon: (c) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 9V7a5 5 0 0 1 10 0v2" /><rect x="4" y="9" width="16" height="11" rx="3" /></svg>,
  },
  {
    key: 'profile', label: 'Profile', to: '/profile',
    icon: (c) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5" /><path d="M4.5 20c1.5-4 5-6 7.5-6s6 2 7.5 6" /></svg>,
  },
];

const QUICK_LINKS = [
  { label: 'Favorites', to: null, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--off-70)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7.5-4.6-9.8-9.1C.6 7.6 2.3 4 5.8 4c2 0 3.4 1 4.2 2.4C10.8 5 12.2 4 14.2 4c3.5 0 5.2 3.6 3.6 6.9C15.5 15.4 12 20 12 20z" /></svg> },
  { label: 'Past Orders', to: '/orders', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--off-70)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg> },
  { label: 'Addresses', to: '/addresses', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--off-70)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-7.1-7-12a7 7 0 0 1 14 0c0 4.9-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></svg> },
  { label: 'Payment Methods', to: '/payment-methods', icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--off-70)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="15" rx="3" /><path d="M2 10h20" /></svg> },
  { label: 'Help & Support', to: null, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--off-70)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9.5 9.2a2.5 2.5 0 1 1 3.6 2.2c-.8.5-1.1.9-1.1 1.8" /><path d="M12 17h.01" /></svg> },
  { label: 'Settings', to: null, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--off-70)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1h-.2a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9V10a1.7 1.7 0 0 0 1.6 1h.2a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z" /></svg> },
];

// Desktop-only left nav rail for the authenticated app — replaces TopNav once
// a visitor is signed in (TopNav stays for the logged-out marketing pages).
export default function Sidebar() {
  const { pathname } = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <aside className="only-desktop app-sidebar">
      <div style={{ padding: '20px 16px 24px' }}>
        <Logo size={17} line1="var(--lime)" line2="var(--offwhite)" />
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '0 12px' }}>
        {MAIN_NAV.map((item) => {
          const active = pathname === item.to;
          return (
            <Link key={item.key} to={item.to} className={`sidebar-link${active ? ' active' : ''}`}>
              {item.icon(active ? 'var(--ink)' : 'var(--off-70)')}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div style={{ marginTop: 28, padding: '0 24px 10px' }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--off-30)' }}>Quick Links</span>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '0 12px' }}>
        {QUICK_LINKS.map((item) =>
          item.to ? (
            <Link key={item.label} to={item.to} className="sidebar-link">
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ) : (
            <div key={item.label} className="sidebar-link" style={{ cursor: 'default' }}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          )
        )}
      </nav>

      <button onClick={() => { logout(); navigate('/'); }} className="sidebar-link" style={{ margin: 'auto 12px 0', textAlign: 'left' }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--off-70)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="M16 17l5-5-5-5" /><path d="M21 12H9" /></svg>
        <span>Log Out</span>
      </button>

      <div className="sidebar-promo">
        <div style={{ width: 34, height: 34, borderRadius: 999, background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a5 5 0 0 0-10 0c-1.7 0-3 1.3-3 3s1.3 3 3 3h10a3 3 0 0 0 0-6z" /><path d="M5 21h14M8 21v-7M16 21v-7" /></svg>
        </div>
        <h4 style={{ fontSize: 15, color: 'var(--offwhite)', marginTop: 12 }}>Good food.<br />Great mood.</h4>
        <p style={{ fontSize: 12, color: 'var(--off-55)', marginTop: 6, lineHeight: 1.4 }}>Fresh meals, local flavours, right to your door.</p>
        <div style={{ width: 28, height: 3, borderRadius: 999, background: 'var(--lime)', marginTop: 12 }} />
      </div>
    </aside>
  );
}
