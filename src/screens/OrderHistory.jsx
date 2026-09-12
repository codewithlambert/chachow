import { useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav.jsx';

import heroBowl from '../assets/images/hero-bowl.jpg';
import skewers from '../assets/images/skewers.jpg';

const PROGRESS_STEPS = ['Confirmed', 'Preparing', 'Out for delivery', 'Delivered'];

const CURRENT_ORDERS = [
  {
    name: 'Jollof Rice & Grilled Chicken', price: '₦9,000', img: heroBowl,
    status: 'Preparing your food…', stepIndex: 1,
    orderId: 'CHQ2847', time: '10:42 AM', to: '/tracking',
  },
];

const PAST_ORDERS = [
  { name: 'Beef Suya Rice Bowl', price: '₦3,200', img: skewers, orderId: 'CHQ2180', time: '18 Oct 2025' },
];

function MiniProgress({ stepIndex }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
      {PROGRESS_STEPS.map((label, i) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', flex: i < PROGRESS_STEPS.length - 1 ? 1 : 'none' }}>
          <div style={{
            width: 9, height: 9, borderRadius: 999, flexShrink: 0,
            background: i <= stepIndex ? 'var(--lime)' : 'transparent',
            border: i <= stepIndex ? 'none' : '1.5px solid var(--off-14)',
          }} />
          {i < PROGRESS_STEPS.length - 1 && (
            <div style={{ flex: 1, height: 2, background: i < stepIndex ? 'var(--lime)' : 'var(--off-14)' }} />
          )}
        </div>
      ))}
    </div>
  );
}

export default function OrderHistory() {
  const [tab, setTab] = useState('Current');
  const orders = tab === 'Current' ? CURRENT_ORDERS : PAST_ORDERS;

  return (
    <div className="page-dark" style={{ minHeight: '100vh' }}>
      <div style={{ padding: '20px 20px 100px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/profile" className="card-dark" style={{ width: 38, height: 38, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
          </Link>
          <h1 style={{ fontSize: 20, color: 'var(--offwhite)' }}>My Orders</h1>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          {['Current', 'Past'].map((t) => (
            <button key={t} className={`chip${tab === t ? ' active' : ' chip-dark'}`} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {orders.map((o) => (
            <div key={o.name} className="card-dark" style={{ borderRadius: 'var(--r-card-sm)', padding: 14 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, overflow: 'hidden', flexShrink: 0 }}>
                  <img src={o.img} alt={o.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--offwhite)' }}>{o.name}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--offwhite)' }}>{o.price}</span>
                  </div>
                  {o.status ? (
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--lime)' }}>{o.status}</span>
                  ) : (
                    <span className="badge-lime" style={{ marginTop: 4 }}>Delivered</span>
                  )}
                </div>
              </div>

              {o.stepIndex !== undefined && <MiniProgress stepIndex={o.stepIndex} />}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
                <span style={{ fontSize: 11, color: 'var(--off-30)' }}>Order #{o.orderId} · {o.time}</span>
                <Link to={o.to || '/dish'} style={{ fontSize: 12, fontWeight: 700, color: 'var(--lime-dim)' }}>View details ›</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
