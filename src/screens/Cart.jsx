import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav.jsx';

import heroBowl from '../assets/images/hero-bowl.jpg';
import skewers from '../assets/images/skewers.jpg';
import smoothie from '../assets/images/smoothie.jpg';

const INITIAL_ITEMS = [
  { name: 'Jollof Rice & Grilled Chicken', addon: 'Fried Plantain', price: 5600, qty: 1, img: heroBowl },
  { name: 'Beef Suya Rice Bowl', addon: 'Extra Meat', price: 4200, qty: 1, img: skewers },
  { name: 'Soft Drink (33cl)', addon: null, price: 600, qty: 1, img: smoothie },
];

const fmt = (n) => `₦${n.toLocaleString()}`;

function ItemRow({ item, onQty, onRemove, dark }) {
  return (
    <div className={dark ? 'card-dark' : ''} style={{ display: 'flex', alignItems: 'center', gap: 14, background: dark ? undefined : 'var(--white)', borderRadius: 'var(--r-card-sm)', padding: 12 }}>
      <div style={{ width: 60, height: 60, borderRadius: 14, overflow: 'hidden', flexShrink: 0 }}>
        <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: dark ? 'var(--offwhite)' : 'var(--ink)' }}>{item.name}</div>
        {item.addon && <div style={{ fontSize: 12, color: dark ? 'var(--off-45)' : 'var(--ink-45)' }}>Add-ons: {item.addon}</div>}
        <div style={{ fontSize: 13, fontWeight: 700, marginTop: 2, color: dark ? 'var(--offwhite)' : 'var(--ink)' }}>{fmt(item.price)}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={() => onQty(-1)} style={{ ...stepperBtn, background: dark ? 'var(--off-08)' : 'var(--ink-05)', color: dark ? 'var(--offwhite)' : 'var(--ink)' }}>−</button>
        <span style={{ fontSize: 13, fontWeight: 700, width: 10, textAlign: 'center', color: dark ? 'var(--offwhite)' : 'var(--ink)' }}>{item.qty}</span>
        <button onClick={() => onQty(1)} style={{ ...stepperBtn, background: 'var(--lime)' }}>+</button>
      </div>
      <button onClick={onRemove} aria-label="Remove" style={{ flexShrink: 0 }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={dark ? 'var(--off-30)' : 'var(--ink-30)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M7 7l1 13h8l1-13" /></svg>
      </button>
    </div>
  );
}

function SummaryCard({ subtotal, onCheckout, dark }) {
  const deliveryFee = 1000;
  const total = subtotal + deliveryFee;
  const label = dark ? 'var(--off-45)' : 'var(--ink-55)';
  const strong = dark ? 'var(--offwhite)' : 'var(--ink)';
  return (
    <div className={dark ? 'card-dark' : ''} style={{ background: dark ? undefined : 'var(--white)', borderRadius: 'var(--r-card)', padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <h3 style={{ fontSize: 16, color: strong }}>Order Summary</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: label }}><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: label }}><span>Delivery Fee</span><span>{fmt(deliveryFee)}</span></div>
      <div style={{ height: 1, background: dark ? 'var(--off-08)' : 'var(--ink-08)' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 700, color: strong }}><span>Total</span><span>{fmt(total)}</span></div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input placeholder="Have a promo code?" style={{ flex: 1, height: 44, borderRadius: 'var(--r-pill)', background: dark ? 'var(--off-05)' : 'var(--ink-05)', border: `1px solid ${dark ? 'var(--off-08)' : 'var(--ink-08)'}`, padding: '0 14px', fontSize: 13, color: strong }} />
        <button className="btn" style={{ height: 44, padding: '0 18px', fontSize: 13, background: dark ? 'var(--lime)' : 'var(--ink)', color: dark ? 'var(--ink)' : 'var(--offwhite)' }}>Apply</button>
      </div>

      <button className="btn btn-lime" style={{ width: '100%', height: 54 }} onClick={onCheckout}>
        Proceed to Checkout <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

export default function Cart() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const navigate = useNavigate();

  const changeQty = (i, d) => setItems(items.map((it, idx) => (idx === i ? { ...it, qty: Math.max(1, it.qty + d) } : it)));
  const remove = (i) => setItems(items.filter((_, idx) => idx !== i));
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <>
      {/* ---------------- DESKTOP ---------------- */}
      <div className="only-desktop page-light">
        <TopNav />
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 40px 60px' }}>
          <h1 style={{ fontSize: 24 }}>Your Cart</h1>
          <span style={{ fontSize: 13, color: 'var(--ink-45)' }}>{items.length} items</span>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32, marginTop: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {items.map((it, i) => (
                <ItemRow key={it.name} item={it} onQty={(d) => changeQty(i, d)} onRemove={() => remove(i)} />
              ))}

              <div style={{ display: 'flex', gap: 32, marginTop: 20 }}>
                <TrustItem label="Secure Payment" sub="Your data is safe" />
                <TrustItem label="Fast Delivery" sub="Real-time tracking" />
                <TrustItem label="24/7 Support" sub="We're here to help" />
              </div>
            </div>

            <SummaryCard subtotal={subtotal} onCheckout={() => navigate('/tracking')} />
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE (signed-in, dark) ---------------- */}
      <div className="only-mobile page-dark" style={{ minHeight: '100vh' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '20px 20px 0' }}>
          <Link to="/browse" className="card-dark" style={{ width: 38, height: 38, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
          </Link>
          <h1 style={{ fontSize: 17, color: 'var(--offwhite)' }}>Your Cart</h1>
        </div>

        <div style={{ padding: '18px 20px 140px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.map((it, i) => (
            <ItemRow key={it.name} item={it} onQty={(d) => changeQty(i, d)} onRemove={() => remove(i)} dark />
          ))}
          <SummaryCard subtotal={subtotal} onCheckout={() => navigate('/tracking')} dark />
        </div>
      </div>
    </>
  );
}

function TrustItem({ label, sub }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span style={{ fontSize: 13, fontWeight: 700 }}>{label}</span>
      <span style={{ fontSize: 11, color: 'var(--ink-45)' }}>{sub}</span>
    </div>
  );
}

const stepperBtn = {
  width: 26, height: 26, borderRadius: 'var(--r-pill)', background: 'var(--ink-05)',
  fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
};
