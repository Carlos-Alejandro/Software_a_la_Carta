import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

// Lazy loading de las páginas
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const FlowersPage = lazy(() => import('../pages/FlowersPage'));
const CartPage = lazy(() => import('../pages/CartPage'));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/flowers" element={<FlowersPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="*" element={<h1 className="text-center mt-10 text-2xl">404 - Página no encontrada</h1>} />
  </Routes>
);

export default AppRoutes;
