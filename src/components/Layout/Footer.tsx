import { useEffect, useMemo, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const BRAND = "SoftwareAlaCarta";
const EMAIL = "alejanmartinez411@gmail.com";
const PHONE_E164 = "5219982210316"; // MX: 52 + 1 + 10 dígitos
const PHONE_PRETTY = "99-82-21-03-16";
const CITY = "Cancún, Quintana Roo";

const waLink = (t: string) =>
  `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(t)}`;

function scrollCenter(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  history.replaceState(null, "", `#${id}`);
}

// Mensajes del carrusel (edítalos libremente)
const TICKER = [
  "Webs y E-commerce a medida",
  "Integraciones API y automatización",
  "Respuesta en < 24 h",
  "Soporte y mantenimiento continuo",
  "Enfoque en resultados",
  "Equipo en Cancún, México",
];

export default function Footer() {
  const year = new Date().getFullYear();

  // -------- Ticker controls (pausa/animación y reduce motion) ----------
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const startAnim = () =>
    controls.start({
      x: ["-50%", "0%"], // → hacia la DERECHA
      transition: { duration: 18, ease: "linear", repeat: Infinity },
    });

  useEffect(() => {
    if (!prefersReducedMotion) startAnim();
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);

  const onEnter = () => {
    setPaused(true);
    controls.stop();
  };
  const onLeave = () => {
    setPaused(false);
    if (!prefersReducedMotion) startAnim();
  };

  const doubled = useMemo(() => [...TICKER, ...TICKER], []);

  return (
    <footer className="relative text-white">
      {/* --------- separador Wave --------- */}
      <div className="relative h-12 overflow-hidden">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M0,60 C180,100 340,10 540,30 C760,52 940,120 1440,20 L1440,100 L0,100 Z"
            fill="#0f1d2e"
          />
        </svg>
      </div>

      {/* --------- fondo sólido --------- */}
      <div className="absolute inset-0 bg-[#0f1d2e]" />

      {/* --------- contenido --------- */}
      <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-8">
        {/* ------ Barra superior SOLO con ticker ------ */}
        <div className="rounded-2xl bg-white/5 border border-white/10 px-3 md:px-4 py-2.5 md:py-3">
          <div className="flex items-center gap-4">
            {/* Label izquierda */}
            <div className="shrink-0 flex items-center gap-2 pl-1 pr-1 text-white/80">
              {/* pequeño ícono chispa */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="opacity-80"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2l1.7 4.3L18 8l-4.3 1.7L12 14l-1.7-4.3L6 8l4.3-1.7L12 2zm6 10l1 2.5L22 16l-3 1-1 3-1-3-3-1 3-1.5 1-2.5zM4 12l.8 2 2 .8-2 .8L4 18l-.8-2-.8-.8.8-.8.8-2z" />
              </svg>
              <span className="text-[13px] md:text-sm tracking-wide">
                Lo que nos define
              </span>
            </div>

            {/* Ticker */}
            <div
              className="relative flex-1 overflow-hidden"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 48px, black calc(100% - 48px), transparent)",
                maskImage:
                  "linear-gradient(to right, transparent, black 48px, black calc(100% - 48px), transparent)",
              }}
              aria-label="Mensajes destacados"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <motion.div
                className="flex items-center gap-6 whitespace-nowrap pr-6"
                animate={controls}
              >
                {doubled.map((txt, i) => (
                  <span
                    key={i}
                    className={`text-white/85 ${
                      paused ? "opacity-100" : "opacity-95"
                    } text-[13px] md:text-sm`}
                  >
                    • {txt}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* ------------ grid principal (sin cambios de funcionalidad) ------------ */}
        <div className="mt-8 grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold">
              {BRAND.slice(0, 8)}
              <span className="text-yellow-300">{BRAND.slice(8)}</span>
            </h3>
            <p className="mt-3 text-sm text-white/75 leading-6 max-w-sm">
              Creamos soluciones digitales a medida para impulsar tu negocio:
              sitios web, e-commerce e integraciones a la medida.
            </p>

            <div className="mt-5 flex gap-4 text-xl text-white/85">
              <a href="#" aria-label="Facebook" className="hover:text-yellow-300">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-yellow-300">
                <FaInstagram />
              </a>
              <a
                href={waLink("Hola, me gustaría más información")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-yellow-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <nav aria-label="Páginas" className="text-sm">
            <h4 className="font-semibold mb-3">Páginas</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => { e.preventDefault(); scrollCenter("home"); }}
                  className="text-white/90 hover:text-yellow-300 transition"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); scrollCenter("about"); }}
                  className="text-white/90 hover:text-yellow-300 transition"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); scrollCenter("services"); }}
                  className="text-white/90 hover:text-yellow-300 transition"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); scrollCenter("contacto"); }}
                  className="text-white/90 hover:text-yellow-300 transition"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          {/* Servicios */}
          <div className="text-sm">
            <h4 className="font-semibold mb-3">Servicios</h4>
            <ul className="space-y-2 text-white/90">
              <li>• Sitios web corporativos</li>
              <li>• Tiendas en línea (E-commerce)</li>
              <li>• Sistemas a medida</li>
              <li>• Integraciones API</li>
              <li>• Soporte y mantenimiento</li>
            </ul>
            <button
              onClick={() => scrollCenter("services")}
              className="mt-4 rounded-lg bg-white text-blue-700 font-semibold px-4 py-2 hover:bg-gray-100 transition"
            >
              Ver servicios
            </button>
          </div>

          {/* Contacto */}
          <div className="text-sm">
            <h4 className="font-semibold mb-3">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/90">
                <FaPhoneAlt className="text-blue-300" />
                <a href={`tel:+${PHONE_E164}`} className="hover:underline">
                  {PHONE_PRETTY}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <FaEnvelope className="text-blue-300" />
                <a href={`mailto:${EMAIL}`} className="hover:underline">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <FaMapMarkerAlt className="text-blue-300" />
                <span>{CITY}</span>
              </li>
            </ul>

            <div className="mt-5 flex gap-3">
              <button
                onClick={() => scrollCenter("contacto")}
                className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 transition"
              >
                Ir a Contacto
              </button>
              <a
                href={waLink("Hola, me interesa una cotización")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-white/65">
          <p>© {year} {BRAND}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-yellow-300">Aviso de privacidad</a>
            <a href="#" className="hover:text-yellow-300">Términos</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-yellow-300"
            >
              Volver arriba ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Hook simple para respetar prefers-reduced-motion */
function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefers(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefers(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);
  return prefers;
}
