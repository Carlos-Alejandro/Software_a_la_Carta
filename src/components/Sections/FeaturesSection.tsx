import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

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

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        ¿Por qué elegirnos?
      </h2>

      <Swiper
        className="!overflow-visible w-full"
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 'auto' },
          768: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
      >
        {features.map((feature, index) => (
          <SwiperSlide
            key={index}
            className="w-[280px] md:w-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 h-[280px] flex flex-col items-center justify-start text-center transition-transform hover:scale-[1.03] duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
