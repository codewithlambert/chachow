import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import { useAuth } from '../auth.jsx';
import bgVideo from '../assets/video/signin-bg.mp4';

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  // RequireAuth stashes where the visitor was headed; send them back there,
  // otherwise default into the app at Home.
  const dest = location.state?.from || '/';
  const handleSignIn = (e) => {
    e.preventDefault();
    login({ guest: false });
    navigate(dest, { replace: true });
  };
  const handleGuest = () => {
    login({ guest: true });
    navigate(dest, { replace: true });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--ink)', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        src={bgVideo}
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />
      <div style={{
        position: 'fixed', inset: 0, zIndex: 1,
        background: 'linear-gradient(180deg, rgba(15,17,16,0.55) 0%, rgba(15,17,16,0.6) 40%, rgba(15,17,16,0.94) 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 420, padding: '28px 24px 40px', display: 'flex', flexDirection: 'column', gap: 22 }}>

        <button onClick={() => navigate(-1)} className="card-dark" style={{
          width: 40, height: 40, borderRadius: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--offwhite)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>

        <Logo size={22} line1="var(--lime)" line2="var(--offwhite)" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <h1 style={{ fontSize: 26, color: 'var(--offwhite)' }}>Welcome back</h1>
          <p style={{ fontSize: 14, color: 'var(--off-70)' }}>Sign in to continue your food journey.</p>
        </div>

        <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <input
            className="field"
            type="text"
            placeholder="Email or phone number"
            style={fieldStyle}
          />
          <input
            className="field"
            type="password"
            placeholder="Password"
            style={fieldStyle}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--lime)' }}>Forgot password?</span>
          </div>

          <button type="submit" className="btn btn-lime" style={{ width: '100%', height: 56, marginTop: 6 }}>
            Sign In <span aria-hidden="true">→</span>
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--off-14)' }} />
          <span style={{ fontSize: 12, color: 'var(--off-45)' }}>or continue with</span>
          <div style={{ flex: 1, height: 1, background: 'var(--off-14)' }} />
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn btn-outline-dark" style={{ flex: 1, height: 52 }} onClick={handleSignIn}>Google</button>
          <button className="btn btn-outline-dark" style={{ flex: 1, height: 52 }} onClick={handleSignIn}>Apple</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          <span style={{ fontSize: 14, color: 'var(--off-70)' }}>Don't have an account?</span>
          <Link to="/onboarding" style={{ fontSize: 14, fontWeight: 700, color: 'var(--lime)' }}>Sign up</Link>
        </div>

        {/* temporary testing shortcut — not part of the locked design, drop before ship */}
        <button onClick={handleGuest} style={{ fontSize: 13, color: 'var(--off-45)', textDecoration: 'underline', margin: '0 auto' }}>
          Continue as guest
        </button>
      </div>
    </div>
  );
}

const fieldStyle = {
  height: 56,
  borderRadius: 20,
  background: 'var(--off-08)',
  border: '1px solid var(--off-14)',
  padding: '0 18px',
  fontSize: 15,
  color: 'var(--offwhite)',
};
