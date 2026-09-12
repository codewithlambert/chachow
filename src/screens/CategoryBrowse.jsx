import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import BottomNav from '../components/BottomNav.jsx';
import './CategoryBrowse.css';

import heroBowl from '../assets/images/hero-bowl.jpg';
import burger from '../assets/images/burger.jpg';
import noodles from '../assets/images/noodles.jpg';
import smoothie from '../assets/images/smoothie.jpg';
import dessert from '../assets/images/dessert.jpg';
import flat from '../assets/images/onboarding-flat.jpg';
import chicken from '../assets/images/chicken.jpg';
import pasta from '../assets/images/pasta.jpg';
import skewers from '../assets/images/skewers.jpg';

const SIDEBAR_CATS = [
  { label: 'All', count: 128, active: true },
  { label: 'Rice & Spices', count: 28 },
  { label: 'Burgers', count: 18 },
  { label: 'Chicken', count: 22 },
  { label: 'Pasta', count: 16 },
  { label: 'Snacks', count: 14 },
  { label: 'Healthy', count: 10 },
  { label: 'Seafood', count: 8 },
  { label: 'Drinks', count: 12 },
];

const MOBILE_CATS = [
  { label: 'Rice', count: 12, img: heroBowl },
  { label: 'Burgers', count: 10, img: burger },
  { label: 'Chicken', count: 15, img: chicken },
  { label: 'Pasta', count: 8, img: pasta },
  { label: 'Snacks', count: 9, img: dessert },
  { label: 'Drinks', count: 6, img: smoothie },
];

const RESTAURANTS = [
  { name: 'The Grill House', dish: 'Jollof Rice & Grilled Chicken', rating: 4.8, reviews: '1.2k', tags: 'Burgers · Grill · Snacks', price: 4800, time: '30–45 mins', img: heroBowl },
  { name: "Mama's Kitchen", dish: 'Efo Riro & Pounded Yam', rating: 4.7, reviews: '980', tags: 'Nigerian · Local', price: 3600, time: '25–40 mins', img: burger },
  { name: 'Pasta Palace', dish: 'Creamy Beef Pasta', rating: 4.6, reviews: '742', tags: 'Italian · Pasta · Pizza', price: 3800, time: '35–50 mins', img: pasta },
  { name: 'Suya Spot', dish: 'Beef Suya Skewers', rating: 4.5, reviews: '613', tags: 'African · Grills · Soups', price: 4200, time: '30–45 mins', img: skewers },
  { name: 'Ocean Basket', dish: 'Grilled Fish & Coleslaw', rating: 4.5, reviews: '521', tags: 'Seafood · Mediterranean', price: 5200, time: '40–55 mins', img: flat },
  { name: 'Chop & Roll', dish: 'Loaded Fries & Chicken Wrap', rating: 4.4, reviews: '428', tags: 'Wraps · Burgers · Salads', price: 3100, time: '25–40 mins', img: dessert },
  { name: 'The Noodle Bar', dish: 'Spicy Miso Ramen', rating: 4.3, reviews: '376', tags: 'Asian · Noodles · Rice', price: 3400, time: '30–50 mins', img: noodles },
  { name: 'Sweet Cravings', dish: 'Salted Caramel Tart', rating: 4.7, reviews: '982', tags: 'Desserts · Drinks · Snacks', price: 2200, time: '20–35 mins', img: smoothie },
];

const CATEGORY_DISH = {
  Rice: { name: 'Jollof Rice & Grilled Chicken', price: 4800 },
  Burgers: { name: 'Classic Smash Burger', price: 3200 },
  Chicken: { name: 'Grilled Chicken & Veggies', price: 4200 },
  Pasta: { name: 'Creamy Beef Pasta', price: 3800 },
  Snacks: { name: 'Salted Caramel Tart', price: 2200 },
  Drinks: { name: 'Mixed Fruit Smoothie', price: 1800 },
};

// Every category row / restaurant card carries its own dish through route
// state so Dish Detail shows what was actually tapped, not a fixed dish.
function categoryToDish(c) {
  const meta = CATEGORY_DISH[c.label] || { name: c.label, price: 3000 };
  return {
    name: meta.name,
    restaurant: `${c.label} Corner`,
    tags: `${c.label} · Local favourite`,
    description: `A popular pick from our ${c.label.toLowerCase()} menu.`,
    price: meta.price,
    rating: 4.6,
    reviews: `${c.count * 8}`,
    time: '25–40 mins',
    img: c.img,
  };
}

function restaurantToDish(r) {
  return {
    name: r.dish,
    restaurant: r.name,
    tags: r.tags,
    description: `A signature dish from ${r.name}.`,
    price: r.price,
    rating: r.rating,
    reviews: r.reviews,
    time: r.time,
    img: r.img,
  };
}

export default function CategoryBrowse() {
  return (
    <>
      {/* ---------------- DESKTOP ---------------- */}
      <div className="only-desktop page-dark">
        <Sidebar />
        <div className="with-sidebar browse-body">
          <div className="browse-sidebar">
            <h3 style={{ fontSize: 15, marginBottom: 4, color: 'var(--offwhite)' }}>Categories</h3>
            {SIDEBAR_CATS.map((c) => (
              <div key={c.label} className={`browse-sidebar-link${c.active ? ' active' : ''}`}>
                <span>{c.label}</span>
                <span>{c.count}</span>
              </div>
            ))}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 22 }}>
              <div>
                <h2 style={{ fontSize: 22, color: 'var(--offwhite)' }}>All Restaurants</h2>
                <span style={{ fontSize: 13, color: 'var(--off-45)' }}>128 restaurants</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--off-55)' }}>Sort by: Popular ▾</span>
            </div>

            <div className="browse-grid">
              {RESTAURANTS.map((r) => (
                <Link to="/dish" key={r.name} className="rest-card card-dark" state={{ dish: restaurantToDish(r) }}>
                  <div className="rest-card-photo">
                    <img src={r.img} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: 10, right: 10, width: 30, height: 30, borderRadius: 'var(--r-pill)', background: 'rgba(15,17,16,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7.5-4.6-9.8-9.1C.6 7.6 2.3 4 5.8 4c2 0 3.4 1 4.2 2.4C10.8 5 12.2 4 14.2 4c3.5 0 5.2 3.6 3.6 6.9C15.5 15.4 12 20 12 20z" /></svg>
                    </span>
                  </div>
                  <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--lime-dim)' }}>★ {r.rating} ({r.reviews} reviews)</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--offwhite)' }}>{r.name}</span>
                    <span style={{ fontSize: 12, color: 'var(--off-45)' }}>{r.tags}</span>
                    <span style={{ fontSize: 12, color: 'var(--off-45)' }}>₦{r.price.toLocaleString()} · {r.time}</span>
                    <span className="badge-lime" style={{ width: 'fit-content' }}>Open</span>
                  </div>
                </Link>
              ))}
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
            <h1 style={{ fontSize: 17, color: 'var(--offwhite)' }}>All Categories</h1>
          </div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--off-55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
        </div>

        <div className="hide-scrollbar" style={{ display: 'flex', gap: 10, overflowX: 'auto', padding: '18px 20px' }}>
          <span className="chip active">All</span>
          <span className="chip chip-dark">Rice</span>
          <span className="chip chip-dark">Burgers</span>
          <span className="chip chip-dark">Chicken</span>
          <span className="chip chip-dark">Pasta</span>
        </div>

        <div className="browse-mobile-list">
          {MOBILE_CATS.map((c) => (
            <Link to="/dish" key={c.label} className="card-dark browse-cat-row" state={{ dish: categoryToDish(c) }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, overflow: 'hidden', flexShrink: 0 }}>
                <img src={c.img} alt={c.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--offwhite)' }}>{c.label}</div>
                <div style={{ fontSize: 12, color: 'var(--off-45)' }}>{c.count} restaurants</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--off-30)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </Link>
          ))}
        </div>
        <BottomNav />
      </div>
    </>
  );
}
