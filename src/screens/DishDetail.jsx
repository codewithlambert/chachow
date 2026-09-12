import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import TopNav from '../components/TopNav.jsx';
import './DishDetail.css';

import heroBowl from '../assets/images/hero-bowl.jpg';
import burger from '../assets/images/burger.jpg';
import taco from '../assets/images/taco.jpg';
import noodles from '../assets/images/noodles.jpg';
import dessert from '../assets/images/dessert.jpg';

const ADDONS = [
  { name: 'Extra Chicken', price: 1500, checked: false },
  { name: 'Fried Plantain', price: 800, checked: false },
  { name: 'Coleslaw', price: 500, checked: false },
  { name: 'Soft Drink', price: 300, checked: false },
];

const RELATED = [
  { name: 'Beef Suya Rice Bowl', price: '₦4,200', img: taco },
  { name: 'Spicy Chicken Pasta', price: '₦3,800', img: burger },
  { name: 'Grilled Chicken Wrap', price: '₦2,900', img: noodles },
  { name: 'Loaded Fries', price: '₦2,500', img: dessert },
];

// Shown when a visitor lands here directly (no dish was tapped to get here).
const DEFAULT_DISH = {
  name: 'Jollof Rice & Grilled Chicken',
  restaurant: 'The Grill House',
  tags: 'Burgers · Grill · Snacks',
  description: 'Classic Nigerian comfort, done right. Served with spicy jollof rice, grilled chicken and a side of plantain.',
  price: 4800,
  rating: 4.8,
  reviews: '1.2k',
  time: '30–40 mins',
  img: heroBowl,
};

function Checkbox({ checked, dark }) {
  return checked ? (
    <div style={{ width: 20, height: 20, borderRadius: 6, background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
    </div>
  ) : (
    <div style={{ width: 20, height: 20, borderRadius: 6, border: `1.5px solid ${dark ? 'var(--off-14)' : 'var(--ink-12)'}`, flexShrink: 0 }} />
  );
}

function AddonsList({ addons, toggle, dark }) {
  return addons.map((a, i) => (
    <div
      key={a.name}
      className={dark ? 'addon-row card-dark' : 'addon-row'}
      onClick={() => toggle(i)}
      style={{ cursor: 'pointer' }}
    >
      <Checkbox checked={a.checked} dark={dark} />
      <span style={{ fontSize: 14, fontWeight: 600, flex: 1, color: dark ? 'var(--offwhite)' : 'var(--ink)' }}>{a.name}</span>
      <span style={{ fontSize: 13, color: dark ? 'var(--off-45)' : 'var(--ink-45)' }}>+₦{a.price.toLocaleString()}</span>
    </div>
  ));
}

export default function DishDetail() {
  const [addons, setAddons] = useState(ADDONS);
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  // The dish tapped on Home/Browse rides along as route state; fall back to
  // a default so a direct link to /dish still renders something sensible.
  const dish = { ...DEFAULT_DISH, ...location.state?.dish };

  const toggle = (i) => setAddons(addons.map((a, idx) => (idx === i ? { ...a, checked: !a.checked } : a)));
  const total = (dish.price + addons.filter((a) => a.checked).reduce((s, a) => s + a.price, 0)) * qty;
  const fmt = (n) => `₦${n.toLocaleString()}`;

  return (
    <>
      {/* ---------------- DESKTOP ---------------- */}
      <div className="only-desktop page-light">
        <TopNav />
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '28px 40px 0' }}>
          <Link to="/browse" style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-55)' }}>← Back to restaurants</Link>
        </div>

        <div className="dish-desktop-body">
          <div>
            <div style={{ borderRadius: 'var(--r-card)', overflow: 'hidden', aspectRatio: '1/1' }}>
              <img src={dish.img} alt={dish.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="dish-thumbs">
              {[heroBowl, burger, noodles].map((img, i) => (
                <div key={i} className="dish-thumb"><img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{dish.restaurant}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-45)' }}>★ {dish.rating} ({dish.reviews} reviews) · {dish.tags}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="badge-lime">Open</span>
                <button aria-label="Save"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ink-45)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7.5-4.6-9.8-9.1C.6 7.6 2.3 4 5.8 4c2 0 3.4 1 4.2 2.4C10.8 5 12.2 4 14.2 4c3.5 0 5.2 3.6 3.6 6.9C15.5 15.4 12 20 12 20z" /></svg></button>
              </div>
            </div>

            <h1 style={{ fontSize: 26 }}>{dish.name}</h1>
            <p style={{ fontSize: 14, color: 'var(--ink-55)', lineHeight: 1.55, maxWidth: 480 }}>
              {dish.description}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24 }}>{fmt(dish.price)}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <button onClick={() => setQty(Math.max(1, qty - 1))} style={stepperBtn}>−</button>
                <span style={{ fontSize: 15, fontWeight: 700, width: 14, textAlign: 'center' }}>{qty}</span>
                <button onClick={() => setQty(qty + 1)} style={{ ...stepperBtn, background: 'var(--lime)' }}>+</button>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 4 }}>
                <h3 style={{ fontSize: 15 }}>Add-ons</h3>
                <span style={{ fontSize: 12, color: 'var(--ink-45)' }}>Make it yours</span>
              </div>
              <AddonsList addons={addons} toggle={toggle} />
            </div>

            <button className="btn btn-lime" style={{ width: '100%', height: 56, marginTop: 4 }} onClick={() => navigate('/cart')}>
              Add to Cart — {fmt(total)}
            </button>
          </div>

          <div>
            <h3 style={{ fontSize: 15, marginBottom: 6 }}>You might also like</h3>
            {RELATED.map((r) => (
              <div key={r.name} className="related-card">
                <div style={{ width: 52, height: 52, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
                  <img src={r.img} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-45)' }}>{r.price}</div>
                </div>
                <button style={{ width: 26, height: 26, borderRadius: 'var(--r-pill)', background: 'var(--lime)', flexShrink: 0 }}>+</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE (signed-in, dark) ---------------- */}
      <div className="only-mobile page-dark" style={{ minHeight: '100vh' }}>
        <div className="dish-mobile-hero">
          <img src={dish.img} alt={dish.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <Link to="/browse" style={overlayBtn('left')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
          </Link>
          <div style={{ position: 'absolute', top: 18, right: 18, display: 'flex', gap: 10 }}>
            <button style={overlayBtnStatic} aria-label="Save">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7.5-4.6-9.8-9.1C.6 7.6 2.3 4 5.8 4c2 0 3.4 1 4.2 2.4C10.8 5 12.2 4 14.2 4c3.5 0 5.2 3.6 3.6 6.9C15.5 15.4 12 20 12 20z" /></svg>
            </button>
            <button style={overlayBtnStatic} aria-label="Share">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" /></svg>
            </button>
          </div>
        </div>

        <div className="dish-mobile-sheet">
          <div>
            <h1 style={{ fontSize: 22, color: 'var(--offwhite)' }}>{dish.name}</h1>
            <span style={{ fontSize: 12, color: 'var(--off-45)' }}>{dish.description}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 12, color: 'var(--off-45)' }}>
            <span>★ {dish.rating} ({dish.reviews} reviews)</span>
            <span>⏱ {dish.time}</span>
          </div>

          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, color: 'var(--offwhite)' }}>{fmt(dish.price)}</span>

          <div>
            <h3 style={{ fontSize: 15, color: 'var(--offwhite)', marginBottom: 10 }}>Add-ons</h3>
            <AddonsList addons={addons} toggle={toggle} dark />
          </div>
        </div>

        <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 20, background: 'var(--ink)', padding: '14px 20px 26px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ ...stepperBtn, width: 40, height: 40, background: 'var(--off-08)', color: 'var(--offwhite)', flexShrink: 0 }}>−</button>
          <span style={{ fontSize: 15, fontWeight: 700, width: 20, textAlign: 'center', color: 'var(--offwhite)', flexShrink: 0 }}>{qty}</span>
          <button onClick={() => setQty(qty + 1)} style={{ ...stepperBtn, width: 40, height: 40, background: 'var(--lime)', flexShrink: 0 }}>+</button>
          <button className="btn btn-lime" style={{ flex: 1, height: 44 }} onClick={() => navigate('/cart')}>
            Add to Cart {fmt(total)}
          </button>
        </div>
      </div>
    </>
  );
}

const stepperBtn = {
  width: 32, height: 32, borderRadius: 'var(--r-pill)', background: 'var(--ink-05)',
  fontSize: 16, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center',
};

function overlayBtn(side) {
  return {
    position: 'absolute', top: 18, [side]: 18, width: 38, height: 38, borderRadius: 'var(--r-pill)',
    background: 'rgba(248,249,245,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center',
  };
}

const overlayBtnStatic = {
  width: 38, height: 38, borderRadius: 'var(--r-pill)',
  background: 'rgba(248,249,245,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center',
};
