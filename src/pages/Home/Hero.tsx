import Lottie from "lottie-react";
import { motion } from "framer-motion";
import heroAnimation from "../../assets/animations/hero-animation.json";
import OrbitCanvas from "./OrbitCanvas";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {      /* Componente de animación de órbita */}
        <OrbitCanvas />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="animate-pulse absolute top-0 left-1/2 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="animate-spin-slow absolute bottom-0 right-0 w-72 h-72 bg-purple-300 opacity-10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Columna izquierda */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            🚀 Desarrollo personalizado
          </motion.span>

          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Software a la Carta
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Soluciones digitales personalizadas para tu negocio. <br />
            <span className="text-blue-700 font-medium">
              ¡Transforma tu empresa con tecnología a medida!
            </span>
          </motion.p>

          <motion.a
            href="#contacto"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 animate-bounce inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Solicita tu demo
          </motion.a>
        </motion.div>

        {/* Animación Lottie con motion */}
        <motion.div
          className="md:w-1/2 mt-16 md:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Lottie
            animationData={heroAnimation}
            loop={true}
            className="w-full max-w-md mx-auto drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
