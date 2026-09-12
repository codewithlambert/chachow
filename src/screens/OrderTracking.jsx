import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import './OrderTracking.css';
import heroBowl from '../assets/images/hero-bowl.jpg';

const STEPS = [
  { label: 'Confirmed', time: '10:24 AM', done: true },
  { label: 'Preparing', time: '10:36 AM', done: true },
  { label: 'Out for Delivery', time: '10:52 AM', done: true, current: true },
  { label: 'Delivered', time: '—', done: false },
];

const LIVE_UPDATES = [
  { label: 'Out for delivery', sub: 'Your order is on its way.', time: '10:52 AM' },
  { label: 'Preparing your order', sub: 'Restaurant is cooking.', time: '10:36 AM' },
  { label: 'Order confirmed', sub: 'We received your order.', time: '10:24 AM' },
];

function MapCard({ height }) {
  return (
    <div className="track-map" style={{ height }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
        <path d="M7 86 C 26 77, 18 50, 44 46 S 79 23, 91 12" stroke="rgba(248,249,245,0.1)" strokeWidth="4" strokeLinecap="round" fill="none" vectorEffect="non-scaling-stroke" />
        <path d="M7 86 C 26 77, 18 50, 44 46 S 79 23, 91 12" stroke="var(--lime)" strokeWidth="1" strokeDasharray="0.3 3.4" strokeLinecap="round" fill="none" vectorEffect="non-scaling-stroke" />
      </svg>
      <div style={{ position: 'absolute', left: '7%', top: '86%', width: 10, height: 10, borderRadius: 999, background: 'var(--off-55)', transform: 'translate(-50%,-50%)' }} />
      <div style={{ position: 'absolute', left: '91%', top: '12%', transform: 'translate(-50%,-50%)' }}>
        <svg width="24" height="30" viewBox="0 0 24 30" fill="none"><path d="M12 1C6 1 2 5.4 2 11c0 7 10 18 10 18s10-11 10-18c0-5.6-4-10-10-10z" fill="var(--offwhite)" /><circle cx="12" cy="11" r="4" fill="var(--ink)" /></svg>
      </div>
      <div style={{ position: 'absolute', left: '44%', top: '46%', transform: 'translate(-50%,-50%)' }}>
        <div style={{ position: 'absolute', inset: -16, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,245,58,0.45), rgba(201,245,58,0) 70%)' }} />
        <div style={{ position: 'relative', width: 34, height: 34, borderRadius: 999, background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 14px rgba(0,0,0,0.35)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><path d="M9 17l3-8 4 0 3 5M9 9h4" /></svg>
        </div>
      </div>
    </div>
  );
}

function RiderRow({ compact, dark }) {
  return (
    <div className={`rider-row${dark ? ' card-dark' : ' light'}`}>
      <div style={{ width: 44, height: 44, borderRadius: 999, background: dark ? 'var(--lime)' : 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, color: dark ? 'var(--ink)' : 'var(--offwhite)' }}>T</span>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: dark ? 'var(--offwhite)' : 'var(--ink)' }}>Tunde</div>
        <div style={{ fontSize: 12, color: dark ? 'var(--off-45)' : 'var(--ink-45)' }}>{compact ? '★ 4.9 (320 deliveries)' : 'Your delivery partner · ★ 4.9 (320 deliveries)'}</div>
      </div>
      {dark ? (
        <button className="btn btn-outline-dark" style={{ height: 34, padding: '0 16px', fontSize: 12 }}>Call</button>
      ) : (
        <>
          <button style={circleBtn}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.3-1.4a2 2 0 0 1 2.1-.4c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2.1z" /></svg></button>
          <button style={{ ...circleBtn, background: 'var(--lime)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></button>
        </>
      )}
    </div>
  );
}

export default function OrderTracking() {
  return (
    <>
      {/* ---------------- DESKTOP ---------------- */}
      <div className="only-desktop page-dark">
        <Sidebar />
        <div className="with-sidebar" style={{ maxWidth: 1200, padding: '32px 40px 60px' }}>
          <h1 style={{ fontSize: 24, color: 'var(--offwhite)' }}>Your order is on the way!</h1>
          <span style={{ fontSize: 13, color: 'var(--off-45)' }}>Arriving in 12 mins · #CC3487</span>

          <div className="track-hstep-row" style={{ margin: '28px 0 6px' }}>
            <div className="track-hstep-line" style={{ background: 'var(--off-08)' }} />
            <div className="track-hstep-line-done" style={{ width: '62%' }} />
            {STEPS.map((s) => (
              <div key={s.label} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 1 }}>
                <div style={{ width: 26, height: 26, borderRadius: 999, background: s.done ? 'var(--lime)' : 'transparent', border: s.done ? 'none' : '2px solid var(--off-14)' }} />
                <span style={{ fontSize: 12, fontWeight: s.current ? 700 : 500, color: s.done ? 'var(--offwhite)' : 'var(--off-30)' }}>{s.label}</span>
                <span style={{ fontSize: 11, color: 'var(--off-30)' }}>{s.time}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32, marginTop: 28 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <MapCard height={340} />
              <RiderRow dark />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="card-dark" style={{ display: 'flex', alignItems: 'center', gap: 12, borderRadius: 'var(--r-card-sm)', padding: 12 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}><img src={heroBowl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--offwhite)' }}>Jollof Rice &amp; Grilled Chicken</div>
                  <div style={{ fontSize: 12, color: 'var(--off-45)' }}>+2 items · ₦10,600</div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: 14, marginBottom: 10, color: 'var(--offwhite)' }}>Live updates</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {LIVE_UPDATES.map((u) => (
                    <div key={u.label} style={{ display: 'flex', gap: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--lime)', marginTop: 6, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--offwhite)' }}>{u.label}</div>
                        <div style={{ fontSize: 12, color: 'var(--off-45)' }}>{u.sub}</div>
                        <div style={{ fontSize: 11, color: 'var(--off-30)' }}>{u.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ position: 'relative', borderRadius: 'var(--r-card-sm)', overflow: 'hidden', height: 100 }}>
                <img src={heroBowl} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,17,16,0.6)' }} />
                <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', padding: '0 16px' }}>
                  <span style={{ color: 'var(--offwhite)', fontWeight: 700, fontSize: 14 }}>Good food brings people together.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE (signed-in, dark) ---------------- */}
      <div className="only-mobile page-dark" style={{ minHeight: '100vh' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 20px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link to="/" className="card-dark" style={{ width: 38, height: 38, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
            </Link>
            <h1 style={{ fontSize: 17, color: 'var(--offwhite)' }}>Track Order</h1>
          </div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--off-55)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1h-.2a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9V10a1.7 1.7 0 0 0 1.6 1h.2a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1z" /></svg>
        </div>

        <div style={{ padding: '16px 20px 100px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span className="badge-lime" style={{ width: 'fit-content', padding: '8px 16px', fontSize: 13 }}>Arriving in 12 mins</span>

          <MapCard height={220} />
          <RiderRow compact dark />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 4 }}>
            {STEPS.map((s) => (
              <div key={s.label} className="track-vstep-row">
                <div style={{ width: 14, height: 14, borderRadius: 999, background: s.done ? 'var(--lime)' : 'transparent', border: s.done ? 'none' : '2px solid var(--off-14)', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: s.done ? 700 : 500, color: s.current ? 'var(--lime)' : s.done ? 'var(--offwhite)' : 'var(--off-30)' }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--off-30)' }}>{s.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const circleBtn = {
  width: 34, height: 34, borderRadius: 999, background: 'var(--ink-05)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
};
