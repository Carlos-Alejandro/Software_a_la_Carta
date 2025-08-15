import { Swiper, SwiperSlide } from 'swiper/react';
//@ts-ignore
import 'swiper/css';
//@ts-ignore
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Renta Vacacional Orquídeas',
    description:
      'Sitio web para una empresa de alquiler vacacional en la Riviera Maya. Se implementó galería de propiedades, formulario de contacto, integración con WhatsApp y diseño responsivo.',
    tags: ['Reservas', 'Web responsive', 'Integración con WhatsApp'],
    image: 'https://staging-jubilee.flickr.com/65535/54533206557_82bcf75427_z.jpg',
    url: 'https://rentavacacionalorquideas.com.mx/',
  },
  {
    title: 'Mayan Amazing Tours',
    description:
      'Desarrollamos un sitio web para una agencia de tours con catálogo de paquetes, sistema de reservas vía WhatsApp, testimonios y diseño atractivo para dispositivos móviles.',
    tags: ['Sitio turístico', 'Galería', 'Reservas por WhatsApp'],
    image: '/Proyectos/MayaAmazing.png',
    url: 'https://mayanamazingtours.com/',
  },
  {
    title: 'Inplelec',
    description:
      'Sitio corporativo para empresa de instalaciones eléctricas. Se presentan servicios industriales, clientes destacados y contacto profesional.',
    tags: ['Sitio corporativo', 'Diseño limpio', 'Optimización SEO'],
    image: '/Proyectos/Inplelec.png',
    url: 'https://inplelec.com/',
  },
];

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

        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            300: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-300 flex flex-col h-[420px]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover border-b border-gray-200"
                />
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 text-xs mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium"
                  >
                    Ver proyecto <FaExternalLinkAlt className="ml-2" />
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSection;
