import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import BottomNav from '../components/BottomNav.jsx';
import { useAuth } from '../auth.jsx';

import heroBowl from '../assets/images/hero-bowl.jpg';
import skewers from '../assets/images/skewers.jpg';
import pizza from '../assets/images/pizza.jpg';
import dessert from '../assets/images/dessert.jpg';

// Mobile menu rows — a subset link somewhere (My Orders/Addresses/Payment
// Methods have dedicated screens), the rest are inert like "About" on TopNav.
const MOBILE_MENU = [
  { label: 'My Orders', to: '/orders' },
  { label: 'My Addresses', to: '/addresses' },
  { label: 'Payment Methods', to: '/payment-methods' },
  { label: 'Notifications', to: null },
  { label: 'Help & Support', to: null },
  { label: 'Settings', to: null },
];

const ORDERS = [
  { name: 'Jollof Rice & Grilled Chicken', restaurant: 'The Grill House', price: '₦4,800', date: '12 Sep 2025, 10:52 PM', img: heroBowl },
  { name: 'Beef Suya Rice Bowl', restaurant: 'Suya Spot', price: '₦4,200', date: '10 Sep 2025, 8:17 PM', img: skewers },
  { name: 'Chicken Pasta', restaurant: 'Pasta Palace', price: '₦3,800', date: '6 Sep 2025, 1:32 PM', img: pizza },
  { name: 'Loaded Fries', restaurant: 'Chop & Roll', price: '₦2,500', date: '5 Sep 2025, 6:45 PM', img: dessert },
];

const MENU_ICON = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18" /></svg>
);

export default function Profile() {
  const [tab, setTab] = useState('All');
  const { logout, isGuest, name } = useAuth();
  const navigate = useNavigate();
  const displayName = isGuest ? 'Guest' : name;
  const displayPhone = isGuest ? 'Sign in to add a phone number' : '+234 812 345 6789';

  return (
    <>
      {/* ---------------- DESKTOP ---------------- */}
      <div className="only-desktop page-dark">
        <Sidebar />
        <div className="with-sidebar" style={{ maxWidth: 900, padding: 40 }}>
          <div className="card-dark" style={{ display: 'flex', alignItems: 'center', gap: 14, borderRadius: 'var(--r-card)', padding: 18, marginBottom: 28 }}>
            <div style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, color: 'var(--ink)' }}>{displayName[0]}</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--offwhite)' }}>{displayName}</div>
              <div style={{ fontSize: 13, color: 'var(--off-45)' }}>{displayPhone}</div>
            </div>
            <button className="btn btn-outline-dark" style={{ height: 38, padding: '0 18px', fontSize: 13 }}>Edit Profile</button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
            <h2 style={{ fontSize: 22, color: 'var(--offwhite)' }}>My Orders</h2>
            <div style={{ display: 'flex', gap: 8 }}>
              {['All', 'Ongoing', 'Completed', 'Cancelled'].map((t) => (
                <button key={t} className={`chip${tab === t ? ' active' : ' chip-dark'}`} onClick={() => setTab(t)}>{t}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {ORDERS.map((o) => (
              <div key={o.name} className="card-dark" style={{ display: 'flex', alignItems: 'center', gap: 14, borderRadius: 'var(--r-card-sm)', padding: 12 }}>
                <div style={{ width: 54, height: 54, borderRadius: 14, overflow: 'hidden', flexShrink: 0 }}>
                  <img src={o.img} alt={o.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--offwhite)' }}>{o.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--off-45)' }}>{o.restaurant} · {o.date}</div>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--offwhite)' }}>{o.price}</span>
                <span className="badge-lime">Delivered</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--lime-dim)' }}>View Details</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE (signed-in, dark) — the account menu; order
          history itself lives at /orders (reached via bottom nav or the
          menu row below), matching the reference's split. ---------------- */}
      <div className="only-mobile page-dark" style={{ minHeight: '100vh' }}>
        <div style={{ padding: '20px 20px 100px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 52, height: 52, borderRadius: 999, background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: 'var(--ink)' }}>{displayName[0]}</span>
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--offwhite)' }}>{displayName}</div>
                <div style={{ fontSize: 12, color: 'var(--off-45)' }}>{displayPhone}</div>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--lime-dim)' }}>Edit Profile ›</span>
              </div>
            </div>
            <div className="card-dark" style={{ width: 38, height: 38, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1h-.2a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9V10a1.7 1.7 0 0 0 1.6 1h.2a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z" /></svg>
            </div>
          </div>

          <div className="card-dark" style={{ borderRadius: 'var(--r-card)', overflow: 'hidden' }}>
            {MOBILE_MENU.map((m, i) => {
              const row = (
                <>
                  {MENU_ICON}
                  <span style={{ fontSize: 14, fontWeight: 600, flex: 1, color: 'var(--offwhite)' }}>{m.label}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--off-30)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                </>
              );
              const rowStyle = { display: 'flex', alignItems: 'center', gap: 12, padding: '15px 16px', borderBottom: i < MOBILE_MENU.length - 1 ? '1px solid var(--off-08)' : 'none' };
              return m.to ? (
                <Link key={m.label} to={m.to} style={rowStyle}>{row}</Link>
              ) : (
                <div key={m.label} style={rowStyle}>{row}</div>
              );
            })}
          </div>

          <button onClick={() => { logout(); navigate('/'); }} className="btn btn-outline-dark" style={{ width: '100%', height: 50 }}>
            Log Out
          </button>
        </div>
        <BottomNav />
      </div>
    </>
  );
}
