import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bowlImg from '../assets/images/hero-bowl.jpg';
import burgerImg from '../assets/images/burger.jpg';
import noodlesImg from '../assets/images/noodles.jpg';

const STEPS = [
  { img: bowlImg, heading: 'Good food makes better days.', body: 'Fresh meals, local favourites and your go-to comfort food, all in one place.' },
  { img: burgerImg, heading: 'Fast delivery. Real flavours.', body: 'Browse, order and get your food delivered in minutes.' },
  { img: noodlesImg, heading: 'Your cravings. Our priority.', body: 'From solo meals to family feasts, Cha Chow has something for everyone.' },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const s = STEPS[step];
  const isLast = step === STEPS.length - 1;

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--ink)', overflow: 'hidden' }}>
      <img
        key={step}
        src={s.img}
        alt=""
        className="animate-fade"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(15,17,16,0.1) 0%, rgba(15,17,16,0.55) 55%, rgba(15,17,16,0.94) 100%)',
      }} />

      <button
        onClick={() => navigate('/sign-in')}
        style={{ position: 'absolute', top: 24, right: 24, fontSize: 13, fontWeight: 600, color: 'var(--offwhite)' }}
      >
        Skip
      </button>

      <div style={{
        position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end', alignItems: 'center', padding: '32px 28px 40px',
      }}>
        <div style={{ width: '100%', maxWidth: 440, display: 'flex', flexDirection: 'column', gap: 26 }}>
          <div key={step} className="animate-fade-slide" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h1 style={{ fontSize: 30, color: 'var(--offwhite)', lineHeight: 1.15 }}>{s.heading}</h1>
            <p style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--off-70)' }}>{s.body}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              {STEPS.map((_, i) => (
                <div key={i} style={{
                  width: i === step ? 22 : 6, height: 6, borderRadius: 'var(--r-pill)',
                  background: i === step ? 'var(--lime)' : 'var(--off-30)', transition: 'width 0.2s',
                }} />
              ))}
            </div>
            <button
              className="btn btn-lime"
              style={{ width: '100%', height: 56 }}
              onClick={() => (isLast ? navigate('/sign-in') : setStep(step + 1))}
            >
              {isLast ? 'Get Started' : 'Next'} <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
