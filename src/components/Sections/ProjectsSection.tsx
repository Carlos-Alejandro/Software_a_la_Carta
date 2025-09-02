import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import MobileCarousel from "../common/MobileCarousel";

const projects = [
  {
    title: "Renta Vacacional Orquídeas",
    description:
      "Sitio web para una empresa de alquiler vacacional en Cancún Q.Roo. Se implementó galería de propiedades, formulario de contacto, integración con WhatsApp y diseño responsivo.",
    tags: ["Google Maps", "Web responsive", "Optimización SEO", ],
    image: "https://staging-jubilee.flickr.com/65535/54533206557_82bcf75427_z.jpg",
    url: "https://rentavacacionalorquideas.com.mx/",
  },
  {
    title: "Mayan Amazing Tours",
    description:
      "Desarrollamos un sitio web para una agencia de tours con catálogo de paquetes, sistema de reservas vía WhatsApp, testimonios y diseño atractivo para dispositivos móviles.",
    tags: ["Sitio turístico", "Calendario", "Reservas online"],
    image: "/Proyectos/MayaAmazing.png",
    url: "https://mayanamazingtours.com/",
  },
  {
    title: "Inplelec",
    description:
      "Sitio corporativo para empresa de instalaciones eléctricas. Se presentan servicios industriales, clientes destacados y contacto profesional.",
    tags: ["Sitio corporativo", "Galería", "Reservas por WhatsApp"],
    image: "/Proyectos/Inplelec.png",
    url: "https://inplelec.com/",
  },
];

function ProjectCard({ p, i }: { p: typeof projects[number]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: i * 0.06 }}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden
                 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40
                 transition-all duration-300 flex flex-col h-[420px]"
    >
      {/* Imagen con lazy + tamaño consistente */}
      <div className="relative w-full h-44">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 300px, (max-width: 1024px) 45vw, 33vw"
          className="absolute inset-0 w-full h-full object-cover border-b border-gray-200 "
        />
      </div>

      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold mb-2 clamp-2">{p.title}</h3>
          <p className="text-gray-600 text-sm mb-4 clamp-3">{p.description}</p>
          <div className="flex flex-wrap justify-center gap-1.5 text-xs mb-4 w-full">

            {p.tags.slice(0, 3).map((tag, t) => (
              <span key={t} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full ring-1 ring-blue-200 text-xs ">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Botón a la IZQUIERDA */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="self-end inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700
                    text-white font-semibold px-4 py-2 rounded-lg shadow-sm
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          Abrir sitio <FaExternalLinkAlt />
        </motion.a>

      </div>
    </motion.div>
  );
}

export const ProjectsSection = () => {
  return (
    <section className="relative py-16 pb-32 px-4 md:px-20 bg-blue-50 text-[#0d1b2a] w-full overflow-hidden">
      {/* FONDOS DECORATIVOS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 opacity-30 rounded-full blur-2xl animate-spin-slow -z-10" />

      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-2"
        >
          Proyectos Realizados
        </motion.h2>
        <p className="text-center text-gray-500 text-sm mb-12">
          Algunos de los sitios web que hemos desarrollado
        </p>

        {/* MÓVIL */}
        <MobileCarousel
          items={projects}
          slideWidthClass="w-[300px]"
          autoplayDelay={2000}
          renderCard={(p, i) => <ProjectCard p={p} i={i} />}
        />

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
