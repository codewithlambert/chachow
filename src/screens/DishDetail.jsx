import { Link } from 'react-router-dom';
import burger from '../assets/images/burger.jpg';
import './DishDetail.css';

const ADDONS = [
  { name: 'Extra Cheddar', price: '+$1.50', checked: true },
  { name: 'Applewood Bacon', price: '+$2.00', checked: true },
  { name: 'Avocado', price: '+$1.75', checked: false },
  { name: 'Spicy Aioli', price: '+$0.50', checked: false },
];

function Checkbox({ checked }) {
  if (checked) {
    return (
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 7,
          background: 'var(--lime)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  return (
    <div
      style={{
        width: 22,
        height: 22,
        borderRadius: 7,
        border: '1.5px solid var(--ink-12)',
        flexShrink: 0,
      }}
    />
  );
}

export default function DishDetail() {
  return (
    <div className="page">
      <div className="dish-layout">

        {/* photo column — sticky on desktop, full-bleed on mobile */}
        <div className="dish-photo-col">
          <div className="dish-hero">
            <img src={burger} alt="Smoky Bacon Burger" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

            <Link
              to="/app"
              style={{
                position: 'absolute',
                top: 20,
                left: 20,
                width: 40,
                height: 40,
                borderRadius: 'var(--r-pill)',
                background: 'rgba(248,249,245,0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </Link>

            <button
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                width: 40,
                height: 40,
                borderRadius: 'var(--r-pill)',
                background: 'rgba(248,249,245,0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20s-7.5-4.6-9.8-9.1C.6 7.6 2.3 4 5.8 4c2 0 3.4 1 4.2 2.4C10.8 5 12.2 4 14.2 4c3.5 0 5.2 3.6 3.6 6.9C15.5 15.4 12 20 12 20z" />
              </svg>
            </button>
          </div>
        </div>

        {/* info column */}
        <div className="dish-info-col">
          <div className="dish-sheet">

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h1 style={{ fontSize: 26, lineHeight: 1.15 }}>Smoky Bacon Burger</h1>
                <span style={{ fontSize: 13, color: 'var(--ink-45)' }}>
                  &#9733; 4.8 (320 ratings) &middot; 18 min
                </span>
              </div>
              <div
                style={{
                  flexShrink: 0,
                  padding: '8px 16px',
                  borderRadius: 'var(--r-pill)',
                  background: 'var(--lime)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: 'var(--ink)' }}>
                  $14.50
                </span>
              </div>
            </div>

            <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-55)', maxWidth: 520 }}>
              A double smashed beef patty with aged cheddar, applewood bacon, caramelized onions
              and smoky aioli, stacked on a toasted brioche bun.
            </p>

            <div style={{ height: 1, background: 'var(--ink-08)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: 17 }}>Add-ons</h3>
                <span style={{ fontSize: 12, color: 'var(--ink-45)' }}>Choose up to 4</span>
              </div>

              {ADDONS.map((addon) => (
                <div
                  key={addon.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    border: '1.5px solid var(--ink-08)',
                    borderRadius: 18,
                    padding: '13px 16px',
                    maxWidth: 460,
                  }}
                >
                  <Checkbox checked={addon.checked} />
                  <span style={{ fontSize: 14, fontWeight: 600, flex: 1 }}>{addon.name}</span>
                  <span style={{ fontSize: 13, color: 'var(--ink-45)' }}>{addon.price}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4, maxWidth: 460 }}>
              <span style={{ fontSize: 14, fontWeight: 700 }}>Quantity</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <button
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 'var(--r-pill)',
                    background: 'var(--ink-05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <span style={{ fontSize: 16, fontWeight: 700, width: 16, textAlign: 'center' }}>1</span>
                <button
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 'var(--r-pill)',
                    background: 'var(--lime)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
            </div>

            {/* sticky on mobile, in-flow on desktop — see .sticky-cta */}
            <div className="sticky-cta">
              <button
                style={{
                  width: '100%',
                  maxWidth: 460,
                  height: 58,
                  borderRadius: 'var(--r-pill)',
                  background: 'var(--ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                }}
              >
                <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--lime)' }}>Add to Cart</span>
                <span style={{ width: 4, height: 4, borderRadius: 'var(--r-pill)', background: 'rgba(201,245,58,0.4)' }} />
                <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--lime)' }}>$14.50</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
