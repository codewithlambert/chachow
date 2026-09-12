import { createContext, useContext, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthContext = createContext(null);

const STORAGE_KEY = 'chachow-authed';
const GUEST_KEY = 'chachow-guest';
const DEMO_NAME = 'Samuel'; // stand-in until real accounts exist — see login()

export function AuthProvider({ children }) {
  // Persisted so a page refresh mid-session doesn't bounce a signed-in
  // visitor back to Sign In — there's no real backend/token here, just a
  // demo flag. isGuest just distinguishes "Continue as guest" from the
  // sign-in form/Google/Apple, so the UI can say "Hi there" vs "Hi Samuel" —
  // none of those paths actually check a real credential yet.
  const [authed, setAuthed] = useState(() => localStorage.getItem(STORAGE_KEY) === '1');
  const [isGuest, setIsGuest] = useState(() => localStorage.getItem(GUEST_KEY) === '1');

  const login = ({ guest = false } = {}) => {
    localStorage.setItem(STORAGE_KEY, '1');
    localStorage.setItem(GUEST_KEY, guest ? '1' : '0');
    setAuthed(true);
    setIsGuest(guest);
  };
  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(GUEST_KEY);
    setAuthed(false);
    setIsGuest(false);
  };

  const name = isGuest ? null : DEMO_NAME;

  return (
    <AuthContext.Provider value={{ authed, isGuest, name, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// Wrap protected routes: <Route element={<RequireAuth />}> <Route path="/browse" .../> </Route>
// Unauthenticated visitors are bounced to Sign In; the intended page is
// remembered so Sign In can send them back after logging in.
export function RequireAuth() {
  const { authed } = useAuth();
  const location = useLocation();
  if (!authed) return <Navigate to="/sign-in" replace state={{ from: location.pathname }} />;
  return <Outlet />;
}
