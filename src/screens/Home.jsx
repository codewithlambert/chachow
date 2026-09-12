import { Link } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import BottomNav from '../components/BottomNav.jsx';
import './Home.css';

import burger from '../assets/images/burger.jpg';
import pizza from '../assets/images/pizza.jpg';
import noodles from '../assets/images/noodles.jpg';
import taco from '../assets/images/taco.jpg';
import dessert from '../assets/images/dessert.jpg';
import smoothie from '../assets/images/smoothie.jpg';

const CATEGORIES = ['All', 'Burgers', 'Pizza', 'Noodles', 'Tacos', 'Dessert'];

const DISHES = [
  { name: 'Smoky Bacon Burger', price: '$8.90', img: burger },
  { name: 'Margherita Pizza', price: '$12.00', img: pizza },
  { name: 'Spicy Miso Ramen', price: '$10.50', img: noodles },
  { name: 'Carne Asada Tacos', price: '$9.25', img: taco },
  { name: 'Salted Caramel Tart', price: '$6.50', img: dessert },
  { name: 'Mango Smoothie Bowl', price: '$5.75', img: smoothie },
];

export default function Home() {
  return (
    <div className="page">

      {/* black rounded header block */}
      <div className="home-header">
        <div className="home-header-glow" aria-hidden="true" />

        <div className="home-header-inner">
          <div className="home-header-left">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Logo variant="mark" size={30} />
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--r-pill)',
                  background: 'var(--lime)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, color: 'var(--ink)' }}>A</span>
              </div>
            </div>

            <h1 style={{ fontSize: 22, color: 'var(--offwhite)', lineHeight: 1.15 }}>
              What are you craving?
            </h1>

            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(248,249,245,0.08)',
                borderRadius: 'var(--r-pill)',
                padding: '9px 14px',
                width: 'fit-content',
                maxWidth: '100%',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-7.1-7-12a7 7 0 0 1 14 0c0 4.9-7 12-7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span style={{ fontSize: 13, color: 'var(--off-70)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Deliver to <strong style={{ color: 'var(--offwhite)', fontWeight: 700 }}>Home – 221B Baker St</strong>
              </span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--off-55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>

          <div className="home-search">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--ink-45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <span style={{ fontSize: 14, color: 'var(--ink-45)' }}>Search dishes, restaurants</span>
          </div>
        </div>
      </div>

      {/* category chips */}
      <div className="category-row hide-scrollbar">
        {CATEGORIES.map((cat, i) => {
          const active = i === 0;
          return (
            <button
              key={cat}
              style={{
                flexShrink: 0,
                padding: '9px 18px',
                borderRadius: 'var(--r-pill)',
                background: active ? 'var(--ink)' : 'var(--ink-05)',
                color: active ? 'var(--lime)' : 'var(--ink-70)',
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* dish grid */}
      <div className="dish-grid">
        {DISHES.map((dish) => (
          <Link
            to="/app/dish"
            key={dish.name}
            style={{
              background: 'var(--white)',
              borderRadius: 'var(--r-card)',
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(15,17,16,0.06)',
              display: 'block',
            }}
          >
            <div className="dish-card-photo">
              <img src={dish.img} alt={dish.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '12px 12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.25 }}>{dish.name}</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, color: 'var(--lime-dim)' }}>
                {dish.price}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
