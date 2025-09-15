import { lazy, Suspense, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import animation404 from "../assets/animations/404-Error-blue.json";

const Lottie = lazy(() => import("lottie-react"));

export default function NotFound() {
  const navigate = useNavigate();

  // Preferencias de movimiento reducido
  const reduceMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // SEO / accesibilidad: título dinámico
  useEffect(() => {
    document.title = "404 - Software a la Carta";
  }, []);

  // Click en "Contáctanos"
  const handleContactClick = () => {
    navigate("/"); // Navegar al home
    setTimeout(() => {
      const el = document.getElementById("contacto");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Animación */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Suspense
            fallback={
              <div className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] bg-gray-100 rounded-2xl animate-pulse" />
            }
          >
            <Lottie
              animationData={animation404}
              loop={!reduceMotion}
              autoplay={!reduceMotion}
              aria-label="Ilustración de error 404"
              className="w-[320px] h-[320px] md:w-[500px] md:h-[500px] max-w-full mx-auto"
            />
          </Suspense>
        </motion.div>

        {/* Texto + botones */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Página no encontrada
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Lo sentimos, la página que buscas no existe, fue movida o nunca
            estuvo aquí. Pero no te preocupes, te ayudamos a volver.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start flex-wrap">
            {/* Botón principal */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 
                           text-white font-semibold px-6 py-3 rounded-xl shadow-lg 
                           transition-colors duration-200"
              >
                Volver al inicio
              </Link>
            </motion.div>

            {/* Botón secundario */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center justify-center bg-gray-100 border border-gray-200 
                           text-gray-700 hover:bg-gray-200 font-semibold px-6 py-3 rounded-xl shadow 
                           transition-colors duration-200 cursor-pointer"
              >
                Contáctanos
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
