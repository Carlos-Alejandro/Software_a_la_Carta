import { useEffect, useState } from "react";

const Whatsapp = () => {
  const [bumped, setBumped] = useState(false);

  useEffect(() => {
    const target = document.getElementById("fab-sentinel");
    if (!target || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      ([entry]) => setBumped(entry.isIntersecting),
      { threshold: 0.01 } // con que “asome” el footer
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  const href =
    "https://wa.me/5219982210316?text=Hola%20Carlos%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20cotizar%20un%20proyecto%20";

  // Ajusta estos valores si tu franja legal es más alta
  const bottomPxBase = 16;   // cuando NO hay footer en vista
  const bottomPxBump = 112;  // extra cuando el footer aparece
  const bottom = `calc(env(safe-area-inset-bottom) + ${bumped ? bottomPxBump : bottomPxBase}px)`;
  const right  = `calc(env(safe-area-inset-right) + 16px)`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed z-50 transition-all duration-300"
      style={{ bottom, right }}
    >
      <button
        type="button"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-transform hover:scale-110 cursor-pointer"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.79 11.79 0 0012 0 11.81 11.81 0 000 12a11.65 11.65 0 001.65 5.92L0 24l6.26-1.63A11.81 11.81 0 0012 24h.05A11.78 11.78 0 0024 12a11.73 11.73 0 00-3.48-8.52zM12.05 21a9.09 9.09 0 01-4.64-1.25l-.33-.19-3.71.97 1-3.61-.21-.37a9.18 9.18 0 01-1.41-4.91 9.26 9.26 0 0115.8-6.5 9.23 9.23 0 012.71 6.52 9.26 9.26 0 01-9.21 9.34zm5.12-6.76c-.28-.14-1.67-.82-1.92-.91s-.44-.14-.63.14-.72.91-.88 1.1-.33.21-.61.07a7.41 7.41 0 01-2.18-1.34 8.2 8.2 0 01-1.52-1.91c-.16-.27 0-.42.12-.56.12-.12.28-.33.42-.49a1.85 1.85 0 00.28-.47.52.52 0 000-.49c-.07-.14-.63-1.53-.87-2.09s-.46-.48-.63-.49h-.54a1.06 1.06 0 00-.76.35 3.16 3.16 0 00-1 2.34 5.5 5.5 0 001.14 2.89 12.91 12.91 0 005.12 4.54 17.4 17.4 0 001.74.64 4.18 4.18 0 001.92.12 3.16 3.16 0 002.08-1.48 2.64 2.64 0 00.18-1.48c-.06-.14-.25-.21-.53-.35z"/>
        </svg>
      </button>
    </a>
  );
};

export default Whatsapp;
