import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt, FaCloud, FaSearch, FaRocket } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

import type { Variants } from "framer-motion";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } },
};

export default function Services() {
    return (
        <div id="services"  className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="max-w-3xl mx-auto text-center mb-12"
            >
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Servicios que Ofrecemos</h1>
                <p className="text-lg text-gray-600">
                    Soluciones digitales a medida para impulsar tu negocio.
                </p>
            </motion.div>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {services.map((service, idx) => (
                    <motion.div
                        key={service.title}
                        variants={cardVariants}
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
                        className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-all duration-300 group relative"
                        data-tooltip-id={`tooltip-${idx}`}
                        data-tooltip-content={service.tooltip}
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h2>
                        <p className="text-gray-500 text-center">{service.description}</p>
                        <Tooltip id={`tooltip-${idx}`} place="top" />
                    </motion.div>
                ))}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="mt-16 text-center"
            >
                <a
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 text-lg"
                >
                    ¡Solicita tu presupuesto!
                </a>
            </motion.div>
        </div>
    );
}