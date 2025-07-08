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
  const menuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let matchedSection = "home";

      for (const link of navLinks) {
        if (!link.href.startsWith("#")) continue;
        const section = document.querySelector(link.href);
        if (section) {
          const offsetTop = (section as HTMLElement).offsetTop;
          const offsetHeight = (section as HTMLElement).offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            matchedSection = link.href.slice(1);
          }
        }
      }

      if (window.scrollY < 300 && location.pathname === "/") {
        matchedSection = "home";
      }

      setActiveSection(matchedSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const scrollTo = localStorage.getItem("scrollTo");
    if (location.pathname === "/" && scrollTo) {
      const el = document.querySelector(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
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
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(href.slice(1));
      }
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    const el = document.querySelector("#home");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setActiveSection("home");
    }, 300);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.08, rotate: -2 }} transition={{ type: "spring", stiffness: 300 }}>
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold text-blue-600 tracking-tight cursor-pointer"
          >
            Software<span className="text-gray-800">AlaCarta</span>
          </button>
        </motion.div>

        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`flex items-center gap-2 py-2 rounded-md transition-colors font-medium cursor-pointer ${
                  activeSection === link.href.slice(1)
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/e-commerce">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 transition flex items-center gap-2 cursor-pointer"
            >
              E-commerce
            </motion.button>
          </Link>
          <motion.button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            whileHover={{ rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-600 text-xl hover:text-blue-800 transition cursor-pointer flex items-end gap-2"
          >
            <FaGlobeAmericas />
          </motion.button>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {menuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-white/90 backdrop-blur-md shadow-lg"
        >
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <motion.li key={link.name} whileHover={{ scale: 1.02 }}>
                <a
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`flex items-center gap-2 py-2 rounded-md text-gray-700 transition-colors cursor-pointer ${
                    activeSection === link.href.slice(1)
                      ? "bg-blue-100 text-blue-700"
                      : "hover:bg-blue-100 hover:text-blue-700"
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              </motion.li>
            ))}

            <motion.li whileHover={{ scale: 1.02 }}>
              <Link
                to="/ecommerce"
                onClick={() => setMenuOpen(false)}
                className="flex justify-center items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
              >
                E-commerce
              </Link>
            </motion.li>

            <motion.li whileHover={{ scale: 1.02 }}>
              <button
                className="flex justify-center items-center gap-2 text-blue-600 text-xl hover:text-blue-800 transition w-full"
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
