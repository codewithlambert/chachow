import { Link } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import heroBowl from '../assets/images/hero-bowl.jpg';

// Tap-anywhere-to-continue, like a real splash screen — first step in the
// mobile Splash → Onboarding → Sign In sequence.
export default function Splash() {
  return (
    <Link
      to="/onboarding"
      style={{ position: 'relative', display: 'block', minHeight: '100vh', background: 'var(--ink)', overflow: 'hidden' }}
    >
      <img
        src={heroBowl}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(15,17,16,0.55) 0%, rgba(15,17,16,0.85) 100%)',
      }} />

      <div style={{
        position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end', padding: '32px 28px 48px', gap: 14,
      }}>
        <Logo size={40} line1="var(--lime)" line2="var(--lime)" />
        <p style={{ fontSize: 16, color: 'var(--off-70)' }}>Great food. Right to your door.</p>
        <div style={{ width: 64, height: 6, borderRadius: 'var(--r-pill)', background: 'var(--lime)', marginTop: 10 }} />
      </div>
    </Link>
  );
}
