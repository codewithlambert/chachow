import { Fragment } from 'react';
import { Link, Navigate } from 'react-router-dom';
import TopNav from '../components/TopNav.jsx';
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

export default function Home() {
  const { authed } = useAuth();
  const isMobile = useIsMobile();

  // On mobile, the app opens into the reference's Splash → Onboarding →
  // Sign In sequence, not this marketing hero — that's a desktop-web
  // pattern. A first-time (unauthenticated) mobile visitor is sent there;
  // a returning signed-in mobile visitor who lands on "/" just sees the hero.
  if (isMobile && !authed) return <Navigate to="/splash" replace />;

  return (
    <>
      {/* ---------------- DESKTOP: marketing landing ---------------- */}
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
            <h1 style={{ fontSize: 22, color: 'var(--offwhite)' }}>Good morning, Samuel</h1>
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
