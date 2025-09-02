// src/router/AppRouter.tsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Ecommerce from '../pages/E-commerce'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/e-commerce" element={<Ecommerce />} />
      <Route path="*" element={<div className="text-white p-10">404 | Página no encontrada</div>} />
    </Routes>
  );
};

export default AppRouter;

