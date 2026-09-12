import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';

const METHODS = [
  {
    key: 'card', label: 'Card', sub: '•••• 5678',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="15" rx="3" /><path d="M2 10h20" /></svg>,
  },
  {
    key: 'bank', label: 'Bank Transfer', sub: 'Pay directly from your bank',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10l9-6 9 6" /><path d="M5 10v9M10 10v9M14 10v9M19 10v9" /><path d="M3 21h18" /></svg>,
  },
  {
    key: 'cod', label: 'Cash on Delivery', sub: 'Pay when you receive your order',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="3" /></svg>,
  },
];

export default function PaymentMethods() {
  const [selected, setSelected] = useState('card');

  return (
    <div className="page-dark" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <div className="with-sidebar" style={{ maxWidth: 700, padding: '20px 20px 100px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/profile" className="card-dark" style={{ width: 38, height: 38, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
          </Link>
          <h1 style={{ fontSize: 20, color: 'var(--offwhite)' }}>Payment Methods</h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {METHODS.map((m) => (
            <button
              key={m.key}
              onClick={() => setSelected(m.key)}
              className="card-dark"
              style={{
                display: 'flex', alignItems: 'center', gap: 14, borderRadius: 'var(--r-card-sm)', padding: 16, textAlign: 'left',
                border: selected === m.key ? '1px solid var(--lime)' : '1px solid var(--card-dark-border)',
              }}
            >
              {m.icon}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--offwhite)' }}>{m.label} {m.key === 'card' && <span style={{ color: 'var(--off-45)', fontWeight: 500 }}>{m.sub}</span>}</div>
                {m.key !== 'card' && <div style={{ fontSize: 12, color: 'var(--off-45)', marginTop: 2 }}>{m.sub}</div>}
              </div>
              <span style={{
                width: 20, height: 20, borderRadius: 999, flexShrink: 0,
                background: selected === m.key ? 'var(--lime)' : 'transparent',
                border: selected === m.key ? 'none' : '1.5px solid var(--off-30)',
              }} />
            </button>
          ))}
        </div>

        <button className="btn btn-lime" style={{ width: '100%', height: 52 }}>Add New Card</button>
      </div>
    </div>
  );
}
