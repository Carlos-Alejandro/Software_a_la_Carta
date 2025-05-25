import React from 'react';
import { FaStar, FaChevronUp, FaChevronDown, FaHeart, FaShareAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <main className="bg-[#f9f9f9] font-cursive">

      {/* Sección principal tipo Hero */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 h-[100dvh] items-center overflow-hidden md:-translate-y-8 sm:pt-6 pt-4"
      >

        {/* Menú vertical */}
        <div className="hidden md:flex flex-col items-center justify-center col-span-1 text-sm text-gray-500 gap-4">
          <FaChevronUp className="text-gray-300" />
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className={`w-6 h-6 flex items-center justify-center text-xs font-semibold rounded-full ${
                num === 2 ? 'bg-[#F9D9E1] text-[#E68FA7]' : ''
              }`}
            >
              0{num}
            </div>
          ))}
          <FaChevronDown className="text-gray-300" />
        </div>

        {/* Texto principal */}
        <div className="font-cursive col-span-12 md:col-span-6 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl text-[#E68FA7] leading-tight"
          >
            Ramo especial<br />de tulipanes rosas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-500 text-base md:text-lg mt-6 leading-relaxed max-w-md"
          >
            Sorprende a esa persona especial con un arreglo único, elegante y delicado. Ideal para ocasiones inolvidables.
          </motion.p>

          {/* Reseñas + ubicación */}
          <div className="flex items-center gap-4 mt-6 text-sm flex-wrap justify-center md:justify-start">
            <div className="flex items-center text-yellow-400">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              <span className="ml-2 text-gray-700">275 reseñas</span>
            </div>
            <select className="border border-gray-300 rounded px-3 py-1 text-gray-700">
              <option value="1">tu ubicación</option>
            </select>
          </div>

          {/* Precio + botón */}
          <div className="mt-8 bg-white shadow-md rounded-xl flex flex-col md:flex-row items-center px-6 py-4 gap-4 w-fit">
            <div className="text-3xl font-semibold text-gray-900">
              $52.<sup className="text-sm align-top">99</sup>
            </div>
            <select className="border border-gray-300 text-sm rounded px-3 py-1 text-gray-700">
              <option>12 unidades de tulipán</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#E68FA7] hover:bg-[#CF4B73] text-white px-6 py-2 rounded-md font-semibold shadow transition-all duration-300"
            >
              agregar al carrito
            </motion.button>
          </div>
        </div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 md:col-span-5 flex justify-center md:justify-end relative"
        >
          <img
            src="/src/assets/Ramo-removebg-preview.png"
            alt="ramo de tulipanes rosas"
            className="max-h-[60vh] md:max-h-[80vh] w-auto object-contain"
          />
          <div className="hidden md:flex flex-col gap-4 absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
            <FaShareAlt className="cursor-pointer hover:text-[#CF4B73]" />
            <FaHeart className="cursor-pointer hover:text-[#CF4B73]" />
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default HomePage;
