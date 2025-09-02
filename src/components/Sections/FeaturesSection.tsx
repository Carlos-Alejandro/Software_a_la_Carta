import { motion } from "framer-motion";
import MobileCarousel from "../common/MobileCarousel";

const features = [
  {
    title: "Desarrollo a Medida",
    description:
      "Creamos soluciones de software personalizadas que se adaptan exactamente a tus necesidades empresariales.",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    title: "Integraciones Modernas",
    description:
      "Integramos tus sistemas con las mejores herramientas del mercado para potenciar tu productividad.",
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Soporte y Mantenimiento",
    description:
      "Acompañamos tu crecimiento con soporte técnico y mantenimiento continuo de tus aplicaciones.",
    icon: (
      <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

function FeatureCard({ f, i }: { f: typeof features[number]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.2 }}
      className="bg-white rounded-xl shadow-lg p-8 h-[280px] flex flex-col items-center justify-start text-center transition-transform hover:scale-[1.03] duration-300"
    >
      <div className="mb-4">{f.icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{f.title}</h3>
      <p className="text-gray-600">{f.description}</p>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-16 pb-24 md:pb-16 px-4 md:px-20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">¿Por qué elegirnos?</h2>

      {/* MÓVIL */}
      <MobileCarousel
        items={features}
        slideWidthClass="w-[280px]"
        autoplayDelay={2000}
        renderCard={(f, i) => <FeatureCard f={f} i={i} />}
      />

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <FeatureCard key={f.title} f={f} i={i} />
        ))}
      </div>
    </section>
  );
}
