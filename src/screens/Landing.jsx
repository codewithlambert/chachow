import { Link } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import './Landing.css';

import heroBowl from '../assets/images/hero-bowl.jpg';
import burger from '../assets/images/burger.jpg';

export default function Landing() {
  return (
    <div className="landing">

      <nav className="landing-nav">
        <Logo variant="wordmark" tone="light" size={26} />

        <div className="landing-nav-links">
          <Link className="landing-nav-link" to="/app">Menu</Link>
          <Link className="landing-nav-link" to="/app/tracking">Track order</Link>
        </div>

        <div className="landing-cart">
          <span>Cart</span>
          <span className="landing-cart-count">0</span>
        </div>
      </nav>

      <section className="landing-hero">
        <div className="landing-hero-bg" aria-hidden="true">
          <img src={heroBowl} alt="" />
        </div>

        <div className="landing-hero-inner">
          <div className="landing-hero-text">
            <span className="landing-badge">Now live in Lagos</span>

            <h1 className="landing-headline">
              <span>Eat fast.</span>
              <span className="accent">Eat good.</span>
            </h1>

            <p className="landing-subtext">
              Cha Chow brings the city's best kitchens to your door in about 25
              minutes — tracked live, start to bite.
            </p>

            <form
              className="landing-find-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="landing-address-input"
                type="text"
                placeholder="Enter your delivery address"
                aria-label="Delivery address"
              />
              <button className="landing-find-btn" type="submit">Find food</button>
            </form>

            <div className="landing-stats">
              <div className="landing-stat">
                <span className="landing-stat-num">25 min</span>
                <span className="landing-stat-label">average delivery</span>
              </div>
              <div className="landing-stat">
                <span className="landing-stat-num">900+</span>
                <span className="landing-stat-label">kitchens</span>
              </div>
              <div className="landing-stat">
                <span className="landing-stat-num">4.8★</span>
                <span className="landing-stat-label">rider rating</span>
              </div>
            </div>
          </div>

          <div className="landing-widget-col">
            {/* a real mini-preview of the actual app, not a fake screenshot */}
            <Link to="/app" className="landing-widget" aria-label="Open the Cha Chow app">
              <div className="landing-widget-eyebrow">Deliver to</div>
              <div className="landing-widget-location">
                Lekki Phase 1
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--ink-55)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>

              <div className="landing-widget-search">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--ink-45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
                <span style={{ fontSize: 13, color: 'var(--ink-45)' }}>Search jollof, sushi, burgers…</span>
              </div>

              <div className="landing-widget-chips">
                <span className="landing-widget-chip active">All</span>
                <span className="landing-widget-chip">Local</span>
                <span className="landing-widget-chip">Burgers</span>
                <span className="landing-widget-chip">Sushi</span>
              </div>

              <div className="landing-widget-section-head">
                <span style={{ fontWeight: 700, fontSize: 15 }}>Top of the week</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--lime-dim)' }}>See all</span>
              </div>

              <div className="landing-widget-dishes">
                <div>
                  <div className="landing-widget-dish-photo">
                    <img src={heroBowl} alt="Chicken Rice Bowl" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ marginTop: 8, fontSize: 12, fontWeight: 700 }}>Chicken Rice Bowl</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--lime-dim)' }}>₦6,500</div>
                </div>
                <div>
                  <div className="landing-widget-dish-photo">
                    <img src={burger} alt="Double Smash" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ marginTop: 8, fontSize: 12, fontWeight: 700 }}>Double Smash</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--lime-dim)' }}>₦8,200</div>
                </div>
              </div>

              <div className="landing-widget-mininav">
                <span className="landing-widget-mininav-item active">Home</span>
                <span className="landing-widget-mininav-item">Menu</span>
                <span className="landing-widget-mininav-item">Cart</span>
                <span className="landing-widget-mininav-item">Me</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
