import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Fondo identico al del formulario */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#0d1b2a_0%,#0d1b2a_55%,#162d46_55%,#162d46_100%)]" />

      {/* Halos sutiles */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-purple-400/20 blur-3xl" />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        <motion.h2
          id="cta-title"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          ¿Listo para digitalizar tu negocio?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
        >
          Contáctanos y recibe una asesoría gratuita para tu proyecto.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          href="#contacto"
          className="mt-8 inline-flex items-center justify-center rounded-full
                     bg-white text-blue-700 font-semibold px-8 py-3 shadow-md
                     hover:bg-gray-100 transition"
        >
          Escríbenos
        </motion.a>
      </div>
    </section>
  );
}
