import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import { useAuth } from '../auth.jsx';

// Persistent black top nav — desktop only (>=1024px), shown on every
// screen in the reference. Reads real auth state: logged-out shows a
// bell + Login + Sign Up, logged-in shows bell + avatar.
export default function TopNav() {
  const { authed } = useAuth();
  const { pathname } = useLocation();
  const isActive = (to) => pathname === to;

  const navLink = (to, label) => (
    <Link
      to={to}
      style={{
        fontSize: 14,
        fontWeight: 600,
        color: isActive(to) ? 'var(--lime)' : 'var(--off-70)',
        borderBottom: isActive(to) ? '2px solid var(--lime)' : '2px solid transparent',
        paddingBottom: 4,
      }}
    >
      {label}
    </Link>
  );

  return (
    <div className="only-desktop">
      <div
        style={{
          height: 'var(--nav-h)',
          background: 'var(--ink)',
          display: 'flex',
          alignItems: 'center',
          gap: 28,
          padding: '0 40px',
        }}
      >
        <Link to="/" style={{ flexShrink: 0 }}>
          <Logo size={17} line1="var(--lime)" line2="var(--offwhite)" />
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 26, flexShrink: 0 }}>
          {navLink('/', 'Home')}
          {navLink('/browse', 'Browse Food')}
          {navLink('/tracking', 'Track Order')}
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--off-70)' }}>About Us</span>
        </nav>

        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            height: 44,
            borderRadius: 'var(--r-pill)',
            background: 'var(--off-08)',
            padding: '0 18px',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--off-55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <span style={{ fontSize: 13, color: 'var(--off-55)' }}>Search for food, restaurants, cuisines…</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
          <button
            style={{
              position: 'relative', width: 40, height: 40, borderRadius: 'var(--r-pill)',
              background: 'var(--off-08)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            aria-label="Notifications"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.7 21a2 2 0 0 1-3.4 0" />
            </svg>
            {!authed && <span style={{ position: 'absolute', top: 8, right: 9, width: 7, height: 7, borderRadius: 999, background: 'var(--lime)' }} />}
          </button>

          {authed ? (
            <Link to="/profile" style={{
              width: 40, height: 40, borderRadius: 'var(--r-pill)', background: 'var(--lime)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, color: 'var(--ink)' }}>S</span>
            </Link>
          ) : (
            <>
              <Link to="/sign-in" className="btn btn-outline-dark" style={{ height: 40, padding: '0 20px', fontSize: 13 }}>
                Login
              </Link>
              <Link to="/onboarding" className="btn btn-lime" style={{ height: 40, padding: '0 20px', fontSize: 13 }}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
