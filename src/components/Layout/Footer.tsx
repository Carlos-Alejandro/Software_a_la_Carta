import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-600 to-blue-700 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8"
      >
        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Software<span className="text-yellow-300">AlaCarta</span></h2>
          <p className="text-sm text-gray-200">
            Soluciones digitales personalizadas para impulsar tu negocio.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Páginas</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-yellow-300 transition-all">Inicio</a></li>
            <li><a href="#about" className="hover:text-yellow-300 transition-all">Sobre Nosotros</a></li>
            <li><a href="#services" className="hover:text-yellow-300 transition-all">Servicios</a></li>
            <li><a href="#contacto" className="hover:text-yellow-300 transition-all">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contacto</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><FaWhatsapp className="inline mr-2" /> +52 998 123 4567</li>
            <li><FaEnvelope className="inline mr-2" /> info@softwarealacarta.com</li>
            <li>📍 Cancún, Quintana Roo</li>
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-yellow-300"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-300"><FaWhatsapp /></a>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="text-center py-4 border-t border-white/20 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © {new Date().getFullYear()} SoftwareAlaCarta. Todos los derechos reservados.
      </motion.div>
    </footer>
  );
};

export default Footer;
