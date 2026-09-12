import { Fragment } from 'react';
import { Link, Navigate } from 'react-router-dom';
import TopNav from '../components/TopNav.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Logo from '../components/Logo.jsx';
import BottomNav from '../components/BottomNav.jsx';
import { useAuth } from '../auth.jsx';
import { useIsMobile } from '../useIsMobile.js';
import './Home.css';

import heroBowl from '../assets/images/hero-bowl.jpg';
import burger from '../assets/images/burger.jpg';
import pizza from '../assets/images/pizza.jpg';
import taco from '../assets/images/taco.jpg';
import dessert from '../assets/images/dessert.jpg';
import smoothie from '../assets/images/smoothie.jpg';
import chicken from '../assets/images/chicken.jpg';
import pasta from '../assets/images/pasta.jpg';
import skewers from '../assets/images/skewers.jpg';
import noodles from '../assets/images/noodles.jpg';
import flat from '../assets/images/onboarding-flat.jpg';

const CATEGORY_ICONS = [
  { label: 'Rice', img: heroBowl },
  { label: 'Burgers', img: burger },
  { label: 'Chicken', img: chicken },
  { label: 'Pasta', img: pasta },
  { label: 'Snacks', img: dessert },
];

const DESKTOP_CATEGORIES = [
  { label: 'Rice', img: heroBowl },
  { label: 'Burgers', img: burger },
  { label: 'Chicken', img: chicken },
  { label: 'Pasta', img: pasta },
  { label: 'Snacks', img: dessert },
  { label: 'Drinks', img: smoothie },
];

const STEPS = [
  {
    num: 1, title: 'Browse', body: 'Find your favourite meals and restaurants.',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>,
  },
  {
    num: 2, title: 'Order', body: 'Add to cart and make payment.',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 9V7a5 5 0 0 1 10 0v2" /><rect x="4" y="9" width="16" height="11" rx="3" /></svg>,
  },
  {
    num: 3, title: 'Relax', body: "We'll deliver it to your door, fresh & hot.",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><path d="M9 17l3-8 4 0 3 5M9 9h4" /></svg>,
  },
];

const DASH_DISHES = [
  { name: 'Jollof Rice & Grilled Chicken', restaurant: 'The Grill House', price: 4800, rating: 4.8, time: '30–40 min', img: heroBowl },
  { name: 'Beef Suya Rice Bowl', restaurant: 'Suya Spot', price: 4200, rating: 4.6, time: '25–35 min', img: skewers },
  { name: 'Spicy Chicken Pasta', restaurant: 'Pasta Palace', price: 3900, rating: 4.5, time: '30–45 min', img: pizza },
];

const POPULAR_DESKTOP = [
  { name: 'Jollof Rice & Grilled Chicken', restaurant: 'The Grill House', price: 4800, rating: 4.8, reviews: '2.4k', time: '30–40 mins', tag: 'African', img: heroBowl },
  { name: 'Beef Suya Rice Bowl', restaurant: 'Suya Spot', price: 5200, rating: 4.6, reviews: '1.2k', time: '25–35 mins', tag: 'African', img: skewers },
  { name: 'Spicy Chicken Pasta', restaurant: 'Pasta Palace', price: 3900, rating: 4.5, reviews: '980', time: '30–45 mins', tag: 'Italian', img: pasta },
  { name: 'Chicken Shawarma Wrap', restaurant: 'Chop & Roll', price: 3100, rating: 4.7, reviews: '1.8k', time: '20–30 mins', tag: 'Middle Eastern', img: chicken },
  { name: 'Pepper Soup', restaurant: "Mama's Kitchen", price: 3600, rating: 4.4, reviews: '765', time: '25–40 mins', tag: 'African', img: noodles },
];

const TRENDING_DESKTOP = [
  { name: 'Fried Rice & Chicken', restaurant: 'The Grill House', price: 4200, rating: 4.8, reviews: '2.1k', time: '30–40 mins', tag: 'Nigerian', img: burger },
  { name: 'Jollof Rice & Fish', restaurant: "Mama's Kitchen", price: 4600, rating: 4.6, reviews: '1.5k', time: '30–45 mins', tag: 'Nigerian', img: flat },
  { name: 'Pasta Alfredo', restaurant: 'Pasta Palace', price: 3400, rating: 4.5, reviews: '1.2k', time: '25–35 mins', tag: 'Italian', img: taco },
  { name: 'Grilled Chicken Salad', restaurant: 'Ocean Basket', price: 3800, rating: 4.4, reviews: '890', time: '20–30 mins', tag: 'Healthy', img: dessert },
  { name: 'Beef Burger Combo', restaurant: 'The Grill House', price: 4500, rating: 4.7, reviews: '1.9k', time: '25–40 mins', tag: 'Fast Food', img: smoothie },
];

const RAIL_CART = [
  { name: 'Jollof Rice & Grilled Chicken', price: 4800, qty: 1, img: heroBowl },
  { name: 'Beef Suya Rice Bowl', price: 5200, qty: 1, img: skewers },
];

function DishRow({ title, dishes }) {
  return (
    <div>
      <div className="home-section-head" style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 18, color: 'var(--offwhite)' }}>{title}</h2>
        <Link to="/browse" style={{ fontSize: 13, fontWeight: 700, color: 'var(--lime-dim)' }}>See all →</Link>
      </div>
      <div className="dash3-dish-row hide-scrollbar">
        {dishes.map((d) => (
          <Link
            to="/dish"
            key={d.name}
            className="dash3-dish-card card-dark"
            state={{ dish: { name: d.name, restaurant: d.restaurant, tags: d.tag, description: `A signature dish from ${d.restaurant}.`, price: d.price, rating: d.rating, reviews: d.reviews, time: d.time, img: d.img } }}
          >
            <div className="dash3-dish-photo">
              <img src={d.img} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="dash3-tag">{d.tag}</span>
              <span className="dash3-heart">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7.5-4.6-9.8-9.1C.6 7.6 2.3 4 5.8 4c2 0 3.4 1 4.2 2.4C10.8 5 12.2 4 14.2 4c3.5 0 5.2 3.6 3.6 6.9C15.5 15.4 12 20 12 20z" /></svg>
              </span>
            </div>
            <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--lime-dim)' }}>★ {d.rating} ({d.reviews})</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--offwhite)', lineHeight: 1.3 }}>{d.name}</span>
              <span style={{ fontSize: 11, color: 'var(--off-45)' }}>{d.time}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function TrackRow({ label, time, done, current }) {
  const color = current ? 'var(--lime)' : done ? 'var(--offwhite)' : 'var(--off-30)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 8, height: 8, borderRadius: 999, flexShrink: 0,
        background: done || current ? 'var(--lime)' : 'transparent',
        border: done || current ? 'none' : '1.5px solid var(--off-30)',
      }} />
      <span style={{ fontSize: 12, fontWeight: current ? 700 : 500, color, flex: 1 }}>{label}</span>
      <span style={{ fontSize: 11, color: 'var(--off-30)' }}>{time}</span>
    </div>
  );
}

export default function Home() {
  const { authed, isGuest, name } = useAuth();
  const displayName = isGuest ? 'Guest' : name;
  const greeting = isGuest ? 'Hi there' : `Good morning, ${name}`;
  const isMobile = useIsMobile();

  // On mobile, the app opens into the reference's Splash → Onboarding →
  // Sign In sequence, not this marketing hero — that's a desktop-web
  // pattern. A first-time (unauthenticated) mobile visitor is sent there;
  // a returning signed-in mobile visitor who lands on "/" just sees the hero.
  if (isMobile && !authed) return <Navigate to="/splash" replace />;

  return (
    <>
      {/* ---------------- DESKTOP: marketing landing (logged out) ---------------- */}
      {!authed && (
      <div className="only-desktop page-dark">
        <TopNav />

        <section className="home-hero">
          <div className="home-hero-bg" aria-hidden="true">
            <img src={heroBowl} alt="" />
          </div>
          <div className="home-hero-annot">
            <svg width="26" height="14" viewBox="0 0 26 14" fill="none" style={{ marginLeft: 'auto' }}>
              <path d="M0 3h18M4 7h22M8 11h18" stroke="var(--lime)" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <span style={{ display: 'block', marginTop: 6 }}>Fresh<br />Tasty<br />Local</span>
            <svg width="16" height="15" viewBox="0 0 24 22" fill="var(--lime)" style={{ marginLeft: 'auto', marginTop: 6 }}>
              <path d="M12 21S2 14.4 2 7.8C2 4 5 1.5 8.3 1.5c1.9 0 3.4.9 3.7 2.2.3-1.3 1.8-2.2 3.7-2.2C19 1.5 22 4 22 7.8 22 14.4 12 21 12 21z" />
            </svg>
          </div>

          <div className="home-hero-inner">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 520 }}>
            <span className="home-eyebrow">Good food. Right to your door.</span>
            <h1 className="home-headline" style={{ fontSize: 54, color: 'var(--offwhite)', lineHeight: 1.02 }}>
              Cravings?<br />
              <span style={{ color: 'var(--offwhite)' }}>We&rsquo;ve </span>
              <span style={{ color: 'var(--lime)' }}>got you.</span>
            </h1>
            <p style={{ fontSize: 16, color: 'var(--off-70)', maxWidth: 440, lineHeight: 1.6 }}>
              From local favourites to global flavours, ChaChow brings your next great meal straight to your door — fast, fresh and always satisfying.
            </p>
            <Link to="/browse" className="btn btn-lime" style={{ width: 'fit-content', marginTop: 6 }}>
              Order Now <span aria-hidden="true">→</span>
            </Link>

            <div className="home-feature-row">
              <div className="home-feature">
                <div className="home-feature-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="7" width="14" height="10" rx="2" /><path d="M15 10h4l3 3v4h-7" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="19" r="2" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--offwhite)' }}>Fast Delivery</div>
                  <div style={{ fontSize: 11, color: 'var(--off-55)' }}>Hot meals, on time</div>
                </div>
              </div>
              <div className="home-feature">
                <div className="home-feature-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--offwhite)' }}>Safe &amp; Secure</div>
                  <div style={{ fontSize: 11, color: 'var(--off-55)' }}>Your data is protected</div>
                </div>
              </div>
              <div className="home-feature">
                <div className="home-feature-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.8 1.4 6.9L12 17.3 5.9 20.8l1.4-6.9-5.1-4.8 6.9-.8z" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--offwhite)' }}>Top Rated</div>
                  <div style={{ fontSize: 11, color: 'var(--off-55)' }}>Loved by thousands</div>
                </div>
              </div>
              <div className="home-feature">
                <div className="home-feature-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1v-7h3" /><path d="M3 16v-5h3v7H5a2 2 0 0 1-2-2z" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--offwhite)' }}>24/7 Support</div>
                  <div style={{ fontSize: 11, color: 'var(--off-55)' }}>We&rsquo;re here for you</div>
                </div>
              </div>
            </div>
          </div>

          </div>
        </section>

        <section className="home-section">
          <div className="home-section-head">
            <div>
              <h2 style={{ fontSize: 26, color: 'var(--offwhite)' }}>Popular Categories</h2>
              <p style={{ fontSize: 14, color: 'var(--off-55)', marginTop: 6 }}>Explore a wide variety of meals, from classic favourites to new tastes.</p>
            </div>
            <Link to="/browse" style={{ fontSize: 14, fontWeight: 700, color: 'var(--lime)', flexShrink: 0 }}>View all →</Link>
          </div>

          <div className="home-cat-grid">
            {DESKTOP_CATEGORIES.map((c) => (
              <Link to="/browse" key={c.label} className="home-cat-card">
                <div className="home-cat-card-photo">
                  <img src={c.img} alt={c.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--offwhite)' }}>{c.label}</span>
                  <span style={{ width: 28, height: 28, borderRadius: 999, background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="home-howitworks-grid">
            <div>
              <span className="home-eyebrow">How It Works</span>
              <h2 style={{ fontSize: 32, color: 'var(--offwhite)', lineHeight: 1.15, marginTop: 10 }}>
                Good food is just<br /><span style={{ color: 'var(--lime)' }}>3 simple steps away.</span>
              </h2>

              <div className="home-steps-row">
                {STEPS.map((s, i) => (
                  <Fragment key={s.title}>
                    <div className="home-step">
                      <div className="home-step-num">{s.num}</div>
                      {s.icon}
                      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--offwhite)' }}>{s.title}</div>
                      <div style={{ fontSize: 13, color: 'var(--off-55)', lineHeight: 1.4 }}>{s.body}</div>
                    </div>
                    {i < STEPS.length - 1 && (
                      <span className="home-step-arrow">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                      </span>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="home-howitworks-art">
              <div className="home-howitworks-brush" aria-hidden="true" />
              <div className="home-howitworks-photo">
                <img src={heroBowl} alt="Freshly prepared bowl" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="home-howitworks-annot">Great food, anytime,<br />anywhere.</span>
            </div>
          </div>
        </section>
      </div>
      )}

      {/* ---------------- DESKTOP: signed-in dashboard — sidebar + 3-column ---------------- */}
      {authed && (
      <div className="only-desktop page-dark">
        <Sidebar />
        <div className="with-sidebar">

          <div className="dash3-topbar">
            <div className="dash3-search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--off-55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
              <span style={{ fontSize: 13, color: 'var(--off-55)' }}>Search for food, restaurants, cuisines…</span>
            </div>
            <button className="card-dark" style={{ position: 'relative', width: 42, height: 42, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} aria-label="Notifications">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></svg>
              <span style={{ position: 'absolute', top: 9, right: 10, width: 7, height: 7, borderRadius: 999, background: 'var(--lime)' }} />
            </button>
            <Link to="/profile" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              <div style={{ width: 38, height: 38, borderRadius: 999, background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{displayName[0]}</span>
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--offwhite)' }}>{displayName}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--off-55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
            </Link>
          </div>

          <div className="dash3-body">
            <div className="dash3-center">

              <div className="dash3-hero">
                <div className="dash3-hero-bg" aria-hidden="true"><img src={heroBowl} alt="" /></div>
                <div className="dash3-hero-content">
                  <h1 style={{ fontSize: 34, color: 'var(--offwhite)', lineHeight: 1.08 }}>
                    Good food<br />makes <span style={{ color: 'var(--lime)' }}>better</span> days.
                  </h1>
                  <p style={{ fontSize: 14, color: 'var(--off-70)', marginTop: 12, lineHeight: 1.5 }}>
                    Fresh meals, local favourites and your go-to comfort food, all in one place.
                  </p>
                  <Link to="/browse" className="btn btn-lime" style={{ marginTop: 18, width: 'fit-content' }}>Order now <span aria-hidden="true">→</span></Link>
                </div>
              </div>

              <div>
                <div className="home-section-head" style={{ marginBottom: 16 }}>
                  <h2 style={{ fontSize: 18, color: 'var(--offwhite)' }}>Popular Categories</h2>
                  <Link to="/browse" style={{ fontSize: 13, fontWeight: 700, color: 'var(--lime-dim)' }}>View all →</Link>
                </div>
                <div className="dash3-cat-row hide-scrollbar">
                  {DESKTOP_CATEGORIES.map((c) => (
                    <Link to="/browse" key={c.label} className="dash3-cat-circle">
                      <div className="dash3-cat-circle-photo"><img src={c.img} alt={c.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                      <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--offwhite)' }}>{c.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <DishRow title="Popular Near You" dishes={POPULAR_DESKTOP} />
              <DishRow title="Trending This Week" dishes={TRENDING_DESKTOP} />

            </div>

            <aside className="dash3-right">
              <div className="dash3-right-card card-dark" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 999, background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a5 5 0 0 0-10 0c-1.7 0-3 1.3-3 3s1.3 3 3 3h10a3 3 0 0 0 0-6z" /><path d="M5 21h14M8 21v-7M16 21v-7" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--offwhite)' }}>{isGuest ? 'Welcome!' : `Welcome back, ${name}!`}</div>
                  <div style={{ fontSize: 12, color: 'var(--off-55)' }}>Great food. Right to your door.</div>
                </div>
              </div>

              <div className="dash3-right-card card-dark">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--offwhite)' }}>Order Tracking</span>
                  <span style={{ fontSize: 11, color: 'var(--off-45)' }}>#CHQ2487</span>
                </div>
                <div className="dash3-map">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
                    <path d="M8 85 C 30 70, 20 40, 50 42 S 82 20, 92 10" stroke="rgba(248,249,245,0.12)" strokeWidth="4" strokeLinecap="round" fill="none" vectorEffect="non-scaling-stroke" />
                    <path d="M8 85 C 30 70, 20 40, 50 42 S 82 20, 92 10" stroke="var(--lime)" strokeWidth="1.2" strokeDasharray="0.3 3.4" strokeLinecap="round" fill="none" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <div style={{ position: 'absolute', left: '50%', top: '42%', transform: 'translate(-50%,-50%)', width: 22, height: 22, borderRadius: 999, background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.4)' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><path d="M9 17l3-8 4 0 3 5M9 9h4" /></svg>
                  </div>
                  <span style={{ position: 'absolute', top: 8, left: 8, fontSize: 10, fontWeight: 700, color: 'var(--offwhite)', background: 'rgba(15,17,16,0.6)', padding: '3px 8px', borderRadius: 999 }}>Arriving in 12 mins</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
                  <TrackRow label="Order Confirmed" time="10:42 AM" done />
                  <TrackRow label="Preparing Your Food" time="11:05 AM" done />
                  <TrackRow label="Out for Delivery" time="11:25 AM" current />
                  <TrackRow label="Arriving Soon" time="11:45 AM" />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--off-08)' }}>
                  <div style={{ width: 34, height: 34, borderRadius: 999, background: 'var(--ink)', border: '1px solid var(--off-14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, color: 'var(--offwhite)' }}>T</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--offwhite)' }}>Tunde</div>
                    <div style={{ fontSize: 11, color: 'var(--off-45)' }}>Bike · KJA 372F</div>
                  </div>
                  <Link to="/tracking" className="btn btn-outline-dark" style={{ height: 30, padding: '0 14px', fontSize: 11, flexShrink: 0 }}>Call</Link>
                </div>
              </div>

              <div className="dash3-right-card card-dark">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--offwhite)' }}>Your Cart</span>
                  <Link to="/cart" style={{ fontSize: 12, fontWeight: 700, color: 'var(--lime-dim)' }}>View cart →</Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {RAIL_CART.map((it) => (
                    <div key={it.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}><img src={it.img} alt={it.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--offwhite)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.name}</div>
                        <div style={{ fontSize: 11, color: 'var(--off-45)' }}>₦{it.price.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ height: 1, background: 'var(--off-08)', margin: '14px 0' }} />
                {(() => {
                  const subtotal = RAIL_CART.reduce((s, it) => s + it.price * it.qty, 0);
                  const delivery = 1000;
                  return (
                    <>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--off-55)', marginBottom: 6 }}><span>Subtotal</span><span>₦{subtotal.toLocaleString()}</span></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--off-55)', marginBottom: 10 }}><span>Delivery Fee</span><span>₦{delivery.toLocaleString()}</span></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, fontWeight: 700, color: 'var(--offwhite)', marginBottom: 14 }}><span>Total</span><span>₦{(subtotal + delivery).toLocaleString()}</span></div>
                    </>
                  );
                })()}
                <Link to="/cart" className="btn btn-lime" style={{ width: '100%', height: 46 }}>Proceed to Checkout →</Link>
              </div>

              <Link to="/browse" className="dash3-right-card card-dark" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 34, height: 34, borderRadius: 999, background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 12.6L12 21l-8.6-8.4a5.5 5.5 0 1 1 8-7.5l.6.6.6-.6a5.5 5.5 0 1 1 8 7.5z" /></svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--offwhite)' }}>Get exclusive deals!</div>
                  <div style={{ fontSize: 11, color: 'var(--off-45)' }}>Save more with our special offers.</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--off-30)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </Link>
            </aside>
          </div>
        </div>
      </div>
      )}

      {/* ---------------- MOBILE: signed-in dashboard (dark) ---------------- */}
      <div className="only-mobile page-dark" style={{ minHeight: '100vh' }}>
        <div className="home-dash-scroll">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Logo size={17} line1="var(--lime)" line2="var(--offwhite)" />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button className="card-dark" style={{ width: 38, height: 38, borderRadius: 'var(--r-pill)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Notifications">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></svg>
              </button>
              <Link to="/profile" style={{ position: 'relative', width: 38, height: 38, borderRadius: 'var(--r-pill)', background: 'var(--lime)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>S</span>
                <span style={{ position: 'absolute', right: -1, bottom: -1, width: 10, height: 10, borderRadius: 999, background: 'var(--lime)', border: '2px solid var(--ink)' }} />
              </Link>
            </div>
          </div>

          <div>
            <h1 style={{ fontSize: 22, color: 'var(--offwhite)' }}>{greeting}</h1>
            <p style={{ fontSize: 13, color: 'var(--off-55)', marginTop: 4 }}>Great food. Right to your door.</p>
          </div>

          <div className="card-dark" style={{ display: 'flex', alignItems: 'center', gap: 10, height: 50, borderRadius: 'var(--r-pill)', padding: '0 18px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--off-45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
            <span style={{ fontSize: 14, color: 'var(--off-45)' }}>Search for food, restaurants…</span>
          </div>

          <div className="card-dark home-deals-card">
            <div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: 'var(--offwhite)', lineHeight: 1.15 }}>Hot deals<br />just for you</span>
              <p style={{ fontSize: 12, color: 'var(--off-55)', margin: '8px 0 14px' }}>Tasty meals. Lower prices. Only on ChaChow.</p>
              <Link to="/browse" className="btn btn-lime" style={{ height: 38, padding: '0 18px', width: 'fit-content', fontSize: 12 }}>Order now</Link>
            </div>
            <div className="home-deals-card-photo">
              <img src={taco} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          <div className="home-cat-icons hide-scrollbar">
            {CATEGORY_ICONS.map((c) => (
              <div key={c.label} className="home-cat-icon-tile">
                <div style={{ width: 56, height: 56, borderRadius: 18, overflow: 'hidden' }}>
                  <img src={c.img} alt={c.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--off-70)' }}>{c.label}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: 16, color: 'var(--offwhite)' }}>Popular near you</h3>
            <Link to="/browse" style={{ fontSize: 12, fontWeight: 700, color: 'var(--lime-dim)' }}>See all</Link>
          </div>

          <div className="hide-scrollbar" style={{ display: 'flex', gap: 12, overflowX: 'auto' }}>
            {DASH_DISHES.map((d) => (
              <Link
                to="/dish"
                key={d.name}
                className="card-dark home-dash-dish"
                state={{
                  dish: {
                    name: d.name,
                    restaurant: d.restaurant,
                    tags: 'Popular · Near you',
                    description: `A signature dish from ${d.restaurant}.`,
                    price: d.price,
                    rating: d.rating,
                    reviews: '340',
                    time: d.time,
                    img: d.img,
                  },
                }}
              >
                <div style={{ height: 90, borderRadius: 14, overflow: 'hidden' }}>
                  <img src={d.img} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--offwhite)', marginTop: 8 }}>{d.name}</div>
                <div style={{ fontSize: 11, color: 'var(--off-45)', marginTop: 2 }}>★ {d.rating} · {d.time}</div>
              </Link>
            ))}
          </div>
        </div>
        <BottomNav />
      </div>
    </>
  );
}
