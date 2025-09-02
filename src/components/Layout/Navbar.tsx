import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
  FaBars,
  FaTimes,
  FaGlobeAmericas,
} from "react-icons/fa";

const navLinks = [
  { name: "Inicio", href: "#home", icon: <FaHome /> },
  { name: "Sobre Nosotros", href: "#about", icon: <FaInfoCircle /> },
  { name: "Servicios", href: "#services", icon: <FaUser /> },
  { name: "Contacto", href: "#contacto", icon: <FaEnvelope /> },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  /* 1) Active section con IntersectionObserver */
  useEffect(() => {
    // Solo observar en la home; en otras rutas el Navbar sirve para navegar
    if (location.pathname !== "/") return;

    const sections = navLinks
      .filter(l => l.href.startsWith("#"))
      .map(l => document.querySelector<HTMLElement>(l.href))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      entries => {
        // Tomamos la sección con mayor intersección
        const vis = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (vis?.target?.id) setActiveSection(vis.target.id);
      },
      {
        // Estas márgenes hacen el "highlight" cuando la sección está cerca del centro
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0.01, 0.2, 0.4, 0.6],
      }
    );

    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [location.pathname]);

  /* 2) Elevar barra al hacer scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 3) Bloquear scroll de fondo al abrir menú */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* 3b) Click fuera y ESC para cerrar */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (menuOpen && e.key === "Escape") {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  /* 3c) Foco inicial al abrir menú */
  useEffect(() => {
    if (!menuOpen) return;
    const first = menuRef.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
  }, [menuOpen]);

  /* 4) Scroll a ancla desde otras rutas */
  useEffect(() => {
    const scrollTo = localStorage.getItem("scrollTo");
    if (location.pathname === "/" && scrollTo) {
      const el = document.querySelector(scrollTo);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      localStorage.removeItem("scrollTo");
    }
  }, [location.pathname]);

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (window.location.pathname !== "/") {
      e.preventDefault();
      localStorage.setItem("scrollTo", href);
      navigate("/");
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    const el = document.querySelector("#home");
    el?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setActiveSection("home"), 300);
    setMenuOpen(false);
  };

  const navBg = scrolled ? "bg-white/80 shadow-lg" : "bg-white/60 shadow";

  return (
    <motion.nav
      aria-label="Navegación principal"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md ${navBg} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.08, rotate: -2 }} transition={{ type: "spring", stiffness: 300 }}>
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold text-blue-600 tracking-tight cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
          >
            Software<span className="text-gray-800">AlaCarta</span>
          </button>
        </motion.div>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                    ${isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"}`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              </motion.li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/e-commerce">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              E-commerce
            </motion.button>
          </Link>

          <motion.button
            ref={menuBtnRef}
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            whileHover={{ rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-600 text-xl hover:text-blue-800 transition cursor-pointer flex items-end gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
            aria-haspopup="true"
            aria-expanded={showLanguageMenu}
            aria-label="Cambiar idioma"
          >
            <FaGlobeAmericas />
          </motion.button>
        </div>

        {/* Mobile button */}
        <motion.button
          ref={menuBtnRef}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-2xl text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Overlay clicable detrás del menú móvil */}
      {menuOpen && <div className="md:hidden fixed inset-0 bg-black/20" onClick={() => setMenuOpen(false)} />}

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          id="mobile-menu"
          ref={menuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-white/90 backdrop-blur-md shadow-lg relative z-10"
        >
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.li key={link.name} whileHover={{ scale: 1.02 }}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                      ${isActive ? "bg-blue-100 text-blue-700" : "hover:bg-blue-100 hover:text-blue-700"}`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              );
            })}

            <motion.li whileHover={{ scale: 1.02 }}>
              <Link
                to="/e-commerce"
                onClick={() => setMenuOpen(false)}
                className="flex justify-center items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                E-commerce
              </Link>
            </motion.li>

            <motion.li whileHover={{ scale: 1.02 }}>
              <button
                className="flex justify-center items-center gap-2 text-blue-600 text-xl hover:text-blue-800 transition w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                onClick={() => {
                  setMenuOpen(false);
                  alert("Cambiar idioma (pendiente implementar)");
                }}
              >
                <FaGlobeAmericas /> Cambiar idioma
              </button>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
