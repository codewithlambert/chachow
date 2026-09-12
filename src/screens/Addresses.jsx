import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';

const ADDRESSES = [
  { key: 'home', label: 'Home', address: '12 Adebayo Street, GRA, Uyo, Akwa Ibom State', isDefault: true },
  { key: 'work', label: 'Work', address: 'No. 5, Unity Plaza, Uyo, Akwa Ibom State', isDefault: false },
];

const ICON = {
  home: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9" /></svg>
  ),
  work: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
  ),
};

export default function Addresses() {
  const [selected, setSelected] = useState('home');

  return (
    <div className="page-dark" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <div className="with-sidebar" style={{ maxWidth: 700, padding: '20px 20px 100px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/profile" className="card-dark" style={{ width: 38, height: 38, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
          </Link>
          <h1 style={{ fontSize: 20, color: 'var(--offwhite)' }}>My Addresses</h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {ADDRESSES.map((a) => (
            <div
              key={a.key}
              className="card-dark"
              style={{
                borderRadius: 'var(--r-card-sm)', padding: 16,
                border: selected === a.key ? '1px solid var(--lime)' : '1px solid var(--card-dark-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                {a.isDefault && <span className="badge-lime">Default</span>}
                <button
                  onClick={() => setSelected(a.key)}
                  aria-label={`Use ${a.label} address`}
                  style={{
                    marginLeft: 'auto', width: 20, height: 20, borderRadius: 999,
                    background: selected === a.key ? 'var(--lime)' : 'transparent',
                    border: selected === a.key ? 'none' : '1.5px solid var(--off-30)',
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: a.isDefault ? 10 : 0 }}>
                {ICON[a.key]}
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--offwhite)' }}>{a.label}</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--off-45)', marginTop: 6, lineHeight: 1.4 }}>{a.address}</p>

              <button className="btn btn-outline-dark" style={{ height: 36, padding: '0 18px', fontSize: 12, marginTop: 12 }}>Edit</button>
            </div>
          ))}
        </div>

        <button className="btn btn-lime" style={{ width: '100%', height: 52 }}>Add New Address</button>
      </div>
    </div>
  );
}
