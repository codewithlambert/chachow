import { Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth } from './auth.jsx';
import Splash from './screens/Splash.jsx';
import Onboarding from './screens/Onboarding.jsx';
import SignIn from './screens/SignIn.jsx';
import Home from './screens/Home.jsx';
import CategoryBrowse from './screens/CategoryBrowse.jsx';
import DishDetail from './screens/DishDetail.jsx';
import Cart from './screens/Cart.jsx';
import OrderTracking from './screens/OrderTracking.jsx';
import Profile from './screens/Profile.jsx';
import OrderHistory from './screens/OrderHistory.jsx';
import Addresses from './screens/Addresses.jsx';
import PaymentMethods from './screens/PaymentMethods.jsx';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* public: marketing home + the pre-auth flow */}
        <Route path="/" element={<Home />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/sign-in" element={<SignIn />} />

        {/* everything past this gate requires a signed-in session */}
        <Route element={<RequireAuth />}>
          <Route path="/browse" element={<CategoryBrowse />} />
          <Route path="/dish" element={<DishDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/tracking" element={<OrderTracking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
