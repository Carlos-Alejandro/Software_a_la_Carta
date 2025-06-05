// src/router/AppRouter.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Ruta por defecto si no encuentra ninguna */}
        <Route path="*" element={<div className="text-white p-10">404 | Página no encontrada</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
