import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Landing from './screens/Landing.jsx';
import Home from './screens/Home.jsx';
import DishDetail from './screens/DishDetail.jsx';
import OrderTracking from './screens/OrderTracking.jsx';

// The app screens (Home/DishDetail/OrderTracking) get the sidebar/bottom-nav
// chrome; the public Landing page owns its own nav and renders standalone.
function AppLayout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<AppLayout />}>
        <Route path="/app" element={<Home />} />
        <Route path="/app/dish" element={<DishDetail />} />
        <Route path="/app/tracking" element={<OrderTracking />} />
      </Route>
    </Routes>
  );
}
