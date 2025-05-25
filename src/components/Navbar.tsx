import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Nosotros" },
  { to: "/flowers", label: "Flowers" },
  { to: "/contact", label: "Contacto" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md border-b border-[#e0dccc]">

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
        
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-widest uppercase text-[#CF4B73] hover:scale-105 transition-all duration-300">
          PAULA'S <span className="text-[#E68FA7]">FLOWERS</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-12 text-lg font-semibold tracking-wide">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative transition-all duration-300 pb-1 px-1 group ${
                  isActive
                    ? "text-[#CF4B73]"
                    : "text-[#7C9962] hover:text-[#CF4B73]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#CF4B73] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full ${
                    isActive ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Cart + Hamburger */}
        <div className="flex items-center gap-6 text-2xl text-[#7C9962]">
          <div className="relative hover:text-[#CF4B73] cursor-pointer transition">
            <FaShoppingCart />
            {/* <span className="absolute -top-2 -right-2 bg-[#CF4B73] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow animate-pulse">
              2
            </span> */}
          </div>
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
{/* Overlay (vidrio esmerilado) */}
<div
  onClick={closeMenu}
  className={`fixed inset-0 bg-white/30 backdrop-blur-sm transition-opacity duration-300 z-40 ${
    menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
  } md:hidden`}
/>


      {/* Side menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#EBE6D4] shadow-lg p-6 space-y-6 text-lg font-semibold tracking-wide transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button onClick={closeMenu} className="text-right text-[#CF4B73] text-2xl">
          <FaTimes />
        </button>
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={`block transition-all ${
                isActive ? "text-[#CF4B73]" : "text-[#7C9962] hover:text-[#CF4B73]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
