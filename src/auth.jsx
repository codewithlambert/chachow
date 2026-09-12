import { createContext, useContext, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthContext = createContext(null);

const STORAGE_KEY = 'chachow-authed';

export function AuthProvider({ children }) {
  // Persisted so a page refresh mid-session doesn't bounce a signed-in
  // visitor back to Sign In — there's no real backend/token here, just a
  // demo flag.
  const [authed, setAuthed] = useState(() => localStorage.getItem(STORAGE_KEY) === '1');

  const login = () => { localStorage.setItem(STORAGE_KEY, '1'); setAuthed(true); };
  const logout = () => { localStorage.removeItem(STORAGE_KEY); setAuthed(false); };

  return (
    <AuthContext.Provider value={{ authed, login, logout }}>
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
