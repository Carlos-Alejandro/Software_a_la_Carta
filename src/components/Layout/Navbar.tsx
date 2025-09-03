import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

/**
 * NAVBAR — SoftwareAlaCarta (drawer derecho sólido con botón X visible)
 */

const navLinks = [
  { name: "Inicio", href: "#home", icon: <FaHome /> },
  { name: "Sobre Nosotros", href: "#about", icon: <FaInfoCircle /> },
  { name: "Servicios", href: "#services", icon: <FaUser /> },
  { name: "Contacto", href: "#contacto", icon: <FaEnvelope /> },
] as const;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (n: number, min = 0, max = 1) => Math.min(Math.max(n, min), max);

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const menuId = useId();

  /** 1) Active section con IntersectionObserver */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = navLinks
      .filter((l) => l.href.startsWith("#"))
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length || !("IntersectionObserver" in window)) return;

    let ticking = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const vis = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (vis?.target?.id) setActiveSection(vis.target.id);
          ticking = false;
        });
      },
      { rootMargin: "-38% 0px -50% 0px", threshold: [0.01, 0.2, 0.4, 0.6, 0.8] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [location.pathname]);

  /** 2) Fondo + progreso scroll */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 8);
      const doc = document.documentElement;
      const h = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(h > 0 ? clamp(y / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** 3) Bloquear scroll de fondo al abrir menú */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /** 3b) Click fuera + ESC */
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

  /** 3c) Foco inicial al abrir menú */
  useEffect(() => {
    if (!menuOpen) return;
    const first = menuRef.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
  }, [menuOpen]);

  /** 4) Scroll a ancla si venimos de otra ruta */
  useEffect(() => {
    const key = "scrollTo";
    const scrollTo = localStorage.getItem(key);
    if (location.pathname === "/" && scrollTo) {
      const el = document.querySelector(scrollTo);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
      localStorage.removeItem(key);
    }
  }, [location.pathname]);

  // Cerrar menú al navegar
  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;
    const drawer = menuRef.current;
    const focusables = drawer.querySelectorAll<HTMLElement>(
      'a,button,[tabindex]:not([tabindex="-1"])'
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusables.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        (last as HTMLElement).focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        (first as HTMLElement).focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    first?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);


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
    setTimeout(() => setActiveSection("home"), 250);
    setMenuOpen(false);
  };

  // Variantes framer
  const itemVariant = useMemo(
    () => ({
      initial: { y: -8, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      hover: { scale: 1.05 },
    }),
    []
  );

  // Fondo dinámico navbar
  const navBg = scrolled ? "bg-white shadow-lg" : "bg-white shadow";

  const underlineLayoutId = "nav-underline";

  return (
    <motion.nav
      aria-label="Navegación principal"
      initial={prefersReducedMotion() ? false : { y: -80, opacity: 0 }}
      animate={prefersReducedMotion() ? undefined : { y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className={`fixed top-0 left-0 w-full z-2000 transition-colors duration-300 ${navBg}`}
    >
      {/* Barra de progreso */}
      <div className="h-0.5 w-full bg-transparent">
        <motion.div
          className="h-0.5 bg-blue-600"
          style={{ width: `${scrollProgress * 100}%` }}
          aria-hidden
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <motion.div whileHover={{ scale: 1.08, rotate: -2 }} transition={{ type: "spring", stiffness: 300 }}>
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold text-blue-600 tracking-tight cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
          >
            Software<span className="text-gray-800">AlaCarta</span>
          </button>
        </motion.div>

        {/* Desktop nav */}
        <ul role="menubar" className="hidden md:flex gap-2 rounded-xl p-1">
          {navLinks.map((link) => {
            const section = link.href.slice(1);
            const isActive = activeSection === section;
            return (
              <motion.li
                key={link.name}
                variants={itemVariant}
                initial="initial"
                animate="animate"
                whileHover="hover"
                role="none"
                className="relative"
              >
                <a
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  role="menuitem"
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                    ${isActive ? "text-blue-700" : "text-gray-700 hover:text-blue-700"}`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId={underlineLayoutId}
                      className="absolute inset-0 -z-10 rounded-md bg-blue-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
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
        </div>

        {/* Mobile toggle */}
        {!menuOpen && (
          <motion.button
            type="button"
            ref={menuBtnRef}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-2xl text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
            onClick={() => setMenuOpen((v) => !v)}
            aria-controls={menuId}
            aria-expanded={menuOpen}
            aria-label="Abrir menú"
          >
            <FaBars />
          </motion.button>
        )}
      </div>

      {/* Overlay */}
      {menuOpen && (
        <button
          className="md:hidden fixed inset-0 bg-black/60 z-[1100]"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        />
      )}

      {/* Drawer derecho */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id={menuId}
            ref={menuRef}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="md:hidden fixed inset-y-0 right-0 h-full w-[80vw] max-w-xs
                      bg-white shadow-2xl z-[1200] border-l border-gray-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Header dentro del drawer */}
            <div className="relative px-6 pt-[calc(var(--nav-h,64px)+8px)] pb-2
                            [padding-top:calc(env(safe-area-inset-top)+8px)] border-b border-gray-100">
              <span className="text-sm font-semibold text-gray-700">Menú</span>

              {/* Botón X fijo arriba-derecha */}
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="absolute right-3 top-3 p-2 rounded-md 
                           text-gray-700 hover:bg-gray-100 
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-label="Cerrar menú"
              >
                <FaTimes size={18} />
              </button>
            </div>

            <div className="px-6 py-4">
              <ul className="flex flex-col gap-2" role="menu">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <li key={link.name} role="none">
                      <a
                        href={link.href}
                        onClick={(e) => handleAnchorClick(e, link.href)}
                        aria-current={isActive ? "page" : undefined}
                        role="menuitem"
                        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                                    ${isActive
                                      ? "bg-blue-100 text-blue-700"
                                      : "text-gray-800 hover:bg-blue-50 hover:text-blue-700"}`}
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </a>
                    </li>
                  );
                })}

                <li role="none" className="mt-2">
                  <Link
                    to="/e-commerce"
                    onClick={() => setMenuOpen(false)}
                    role="menuitem"
                    className="flex justify-center items-center gap-2 bg-blue-600 text-white px-5 py-2
                               rounded-full font-semibold shadow-md hover:bg-blue-700 transition
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    E-commerce
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
