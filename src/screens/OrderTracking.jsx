import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav.jsx';
import './OrderTracking.css';

const STEPS = [
  { label: 'Placed', time: '1:02 PM', done: true },
  { label: 'Preparing', time: '1:08 PM', done: true },
  { label: 'On the way', time: '1:21 PM', done: true },
  { label: 'Delivered', time: '--:--', done: false },
];

const ROW_GAP = 62; // vertical distance between dot centers
const DONE_COUNT = STEPS.filter((s) => s.done).length;
const LINE_TOTAL = ROW_GAP * (STEPS.length - 1);
const LINE_DONE = ROW_GAP * Math.max(DONE_COUNT - 1, 0);

export default function OrderTracking() {
  return (
    <div className="page">

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Link
          to="/app"
          style={{
            width: 40,
            height: 40,
            borderRadius: 14,
            background: 'var(--ink-05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontSize: 18 }}>Track Order</h1>
          <span style={{ fontSize: 12, color: 'var(--ink-45)' }}>Order #CH-2847</span>
        </div>
      </div>

      <div className="tracking-layout">

        <div className="tracking-map-col">

          {/* rounded dark map card */}
          <div className="tracking-map">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
              <path
                d="M7 86 C 26 77, 18 50, 44 46 S 79 23, 91 12"
                stroke="rgba(248,249,245,0.1)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M7 86 C 26 77, 18 50, 44 46 S 79 23, 91 12"
                stroke="var(--lime)"
                strokeWidth="1"
                strokeDasharray="0.3 3.4"
                strokeLinecap="round"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* origin dot */}
            <div
              style={{
                position: 'absolute',
                left: '7%',
                top: '86%',
                width: 10,
                height: 10,
                borderRadius: 'var(--r-pill)',
                background: 'var(--off-55)',
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* destination pin */}
            <div style={{ position: 'absolute', left: '91%', top: '12%', transform: 'translate(-50%, -50%)' }}>
              <svg width="26" height="32" viewBox="0 0 24 30" fill="none">
                <path d="M12 1C6 1 2 5.4 2 11c0 7 10 18 10 18s10-11 10-18c0-5.6-4-10-10-10z" fill="var(--offwhite)" />
                <circle cx="12" cy="11" r="4" fill="var(--ink)" />
              </svg>
            </div>

            {/* courier marker with soft glow */}
            <div style={{ position: 'absolute', left: '44%', top: '46%', transform: 'translate(-50%, -50%)' }}>
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: -18,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(201,245,58,0.45), rgba(201,245,58,0) 70%)',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  width: 38,
                  height: 38,
                  borderRadius: 'var(--r-pill)',
                  background: 'var(--lime)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.35)',
                }}
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="17" r="3" />
                  <circle cx="18" cy="17" r="3" />
                  <path d="M9 17l3-8 4 0 3 5M9 9h4" />
                </svg>
              </div>
            </div>
          </div>

          {/* courier name + ETA, underneath the map */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 'var(--r-pill)',
                  background: 'var(--ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, color: 'var(--offwhite)' }}>MD</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 14, fontWeight: 700 }}>Marcus D.</span>
                <span style={{ fontSize: 12, color: 'var(--ink-45)' }}>Bike &middot; KA 45 9921</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
              <span style={{ fontSize: 12, color: 'var(--ink-45)' }}>Arriving in</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22 }}>12 min</span>
            </div>
          </div>
        </div>

        <div className="tracking-steps-col">
          {/* vertical progress list */}
          <div style={{ position: 'relative', marginTop: 30, paddingLeft: 2 }}>
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 7,
                top: 7,
                width: 2,
                height: LINE_TOTAL,
                background: 'var(--ink-08)',
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 7,
                top: 7,
                width: 2,
                height: LINE_DONE,
                background: 'var(--lime)',
              }}
            />

            {STEPS.map((step, i) => (
              <div
                key={step.label}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  marginBottom: i === STEPS.length - 1 ? 0 : ROW_GAP - 34,
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 'var(--r-pill)',
                    background: step.done ? 'var(--lime)' : 'var(--white)',
                    border: step.done ? 'none' : '2px solid var(--ink-12)',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: -2 }}>
                  <span style={{ fontSize: 14, fontWeight: step.done ? 700 : 500, color: step.done ? 'var(--ink)' : 'var(--ink-30)' }}>
                    {step.label}
                  </span>
                  <span style={{ fontSize: 12, color: step.done ? 'var(--ink-45)' : 'var(--ink-30)' }}>{step.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <BottomNav />
    </div>
  );
}
