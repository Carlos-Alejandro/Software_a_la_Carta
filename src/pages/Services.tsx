import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt, FaCloud, FaSearch, FaRocket } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import MobileCarousel from "../components/common/MobileCarousel";
import type { JSX } from "react";

const services = [
  {
    icon: <FaCode size={36} className="text-blue-500" />,
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos, rápidos y seguros adaptados a tus necesidades.",
    tooltip: "Sitios responsivos, SEO, e-commerce y más.",
  },
  {
    icon: <FaPaintBrush size={36} className="text-pink-500" />,
    title: "Diseño UI/UX",
    description: "Diseños atractivos y funcionales para una experiencia de usuario inigualable.",
    tooltip: "Wireframes, prototipos, diseño visual.",
  },
  {
    icon: <FaMobileAlt size={36} className="text-green-500" />,
    title: "Apps Móviles",
    description: "Aplicaciones móviles nativas y multiplataforma para iOS y Android.",
    tooltip: "React Native, Flutter, apps híbridas.",
  },
  {
    icon: <FaCloud size={36} className="text-purple-500" />,
    title: "Soluciones Cloud",
    description: "Infraestructura escalable y segura en la nube para tu negocio.",
    tooltip: "AWS, Azure, Google Cloud.",
  },
  {
    icon: <FaSearch size={36} className="text-yellow-500" />,
    title: "SEO & Marketing",
    description: "Mejoramos tu presencia online y posicionamiento en buscadores.",
    tooltip: "SEO técnico, SEM, campañas digitales.",
  },
  {
    icon: <FaRocket size={36} className="text-red-500" />,
    title: "Consultoría & Soporte",
    description: "Te acompañamos en cada etapa de tu proyecto tecnológico.",
    tooltip: "Auditorías, soporte, capacitación.",
  },
];

function ServiceCard({
  icon, title, description, tooltipId, tooltip,
}: { icon: JSX.Element; title: string; description: string; tooltipId: string; tooltip?: string; }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center h-[280px]"
      data-tooltip-id={tooltipId}
      data-tooltip-content={tooltip}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {tooltip && <Tooltip id={tooltipId} place="top" />}
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16 pb-24 md:pb-16 px-4 md:px-20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-800">
        Servicios que Ofrecemos
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Soluciones digitales a medida para impulsar tu negocio.
      </p>

      {/* MÓVIL: carrusel reutilizable */}
      <MobileCarousel
        items={services}
        slideWidthClass="w-[280px]"
        autoplayDelay={2000}
        renderCard={(s, idx) => (
          <ServiceCard
            icon={s.icon}
            title={s.title}
            description={s.description}
            tooltip={s.tooltip}
            tooltipId={`services-m-${idx}`}
          />
        )}
      />

      {/* DESKTOP: grid clásico */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, idx) => (
          <ServiceCard
            key={s.title}
            icon={s.icon}
            title={s.title}
            description={s.description}
            tooltip={s.tooltip}
            tooltipId={`services-d-${idx}`}
          />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mt-16 text-center"
      >
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 text-lg"
        >
          ¡Solicita tu presupuesto!
        </a>
      </motion.div>
    </section>
  );
}
