import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
  FaBars,
  FaTimes,
  FaGlobe,
  FaGlobeAmericas,
} from "react-icons/fa";

const navLinks = [
  { name: "Inicio", href: "#home", icon: <FaHome /> },
  { name: "Sobre Nosotros", href: "#about", icon: <FaInfoCircle /> },
  { name: "Servicios", href: "#services", icon: <FaUser /> },
  { name: "Contacto", href: "#contact", icon: <FaEnvelope /> },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // ScrollSpy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const offsetTop = (section as HTMLElement).offsetTop;
          const offsetHeight = (section as HTMLElement).offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.href.slice(1));
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click fuera del menú
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-bold text-blue-600 tracking-tight"
          whileHover={{ scale: 1.08, rotate: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Software<span className="text-gray-800">AlaCarta</span>
        </motion.a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={link.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors font-medium ${
                  activeSection === link.href.slice(1)
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                <span className="hidden sm:inline">{link.name}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Botón Contacto + Idioma */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="#contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 transition flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            ¡Contáctanos!
          </motion.a>
          <motion.button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            whileHover={{ rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-600 text-xl hover:text-blue-800 transition cursor-pointer flex items-end gap-2"
          >
            <FaGlobeAmericas />
          </motion.button>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú móvil */}
{menuOpen && (
  <>
    {/* Fondo semitransparente */}
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      onClick={() => setMenuOpen(false)}
    />

    {/* Menú lateral derecho */}
    <motion.div
      ref={menuRef}
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      exit={{ x: 300 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed top-0 right-0 w-72 h-full bg-white z-50 shadow-xl flex flex-col justify-between"
    >
      {/* Encabezado */}
      <div className="flex justify-between items-center px-4 py-4 border-b">
        <h2 className="text-lg font-bold text-gray-800">Menú</h2>
        <button onClick={() => setMenuOpen(false)}>
          <FaTimes className="text-gray-700 text-xl" />
        </button>
      </div>

      {/* Navegación central scrollable */}
      <ul className="flex flex-col gap-5 px-6 py-6 text-gray-700 font-medium overflow-y-auto flex-1">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 transition-all ${
                activeSection === link.href.slice(1)
                  ? "text-blue-600 font-bold"
                  : "hover:text-blue-500"
              }`}
            >
              {link.icon}
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Acciones fijas abajo */}
      <div className="px-6 py-6 border-t border-gray-200 bg-white">
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition mb-3"
        >
          ¡Contáctanos!
        </a>
        <button
          onClick={() => {
            setMenuOpen(false);
            alert("Cambiar idioma (pendiente implementar)");
          }}
          className="w-full flex justify-center items-center gap-2 text-blue-600 hover:text-blue-800 text-lg"
        >
          <FaGlobe /> Cambiar idioma
        </button>
      </div>
    </motion.div>
  </>
)}

    </motion.nav>
  );
};

export default Navbar;
