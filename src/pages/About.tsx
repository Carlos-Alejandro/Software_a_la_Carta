import { motion } from "framer-motion";
import { UserIcon, CodeBracketIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const teamMembers = [
  {
    name: "Carlos Martínez",
    role: "Desarrollador Front-End",
    icon: <UserIcon className="w-5 h-5 text-blue-700" />,
    bio: "Transformando ideas en interfaces atractivas y funcionales.",
  },
  {
    name: "Diego Sanchez",
    role: "Desarrollador Full Stack",
    icon: <CodeBracketIcon className="w-5 h-5 text-blue-700" />,
    bio: "Especialista en soluciones web modernas y experiencias de usuario excepcionales.",
  },
  {
    name: "Brando Antonio",
    role: "Desarrollador Full Stack",
    icon: <PencilSquareIcon className="w-5 h-5 text-blue-700" />,
    bio: "Apasionado por la tecnología y la innovación, liderando Software a la Carta hacia el futuro.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};


export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 md:px-16"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 text-center"
        >
          Sobre Nosotros
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-700 mb-10 text-center"
        >
          En{" "}
          <span className="font-semibold text-blue-600">Software a la Carta</span> creamos
          soluciones digitales a medida, combinando creatividad, tecnología y pasión por el
          detalle. Nuestro equipo está comprometido con la excelencia y la satisfacción de
          nuestros clientes.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex md:grid md:grid-cols-3 gap-8 mb-16 overflow-x-auto md:overflow-visible px-1 pb-4 pl-4 pr-4"
>
          {teamMembers.map((member) => (
        <motion.div
        key={member.name}
        variants={itemVariants}
        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
        className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-all min-w-[280px] md:min-w-0"
        >
        <motion.div
            animate={{
            y: [0, -6, 0],
            }}
            transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            ease: "easeInOut",
            }}
            className="w-24 h-24 rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg"
            style={{
            background: "linear-gradient(to bottom right, #60a5fa, #3b82f6)",
            }}
        >
            {member.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </motion.div>

        {/* Rest of the card */}
        <h3 className="text-xl font-bold text-blue-700 flex items-center gap-1">
            {member.icon} {member.name}
        </h3>
        <p className="text-blue-500 font-medium mb-2">{member.role}</p>
        <p className="text-gray-600 text-center">{member.bio}</p>
        </motion.div>

          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-blue-100 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Nuestra Misión</h2>
            <p className="text-gray-700">
              Brindar soluciones tecnológicas personalizadas que impulsen el crecimiento y la
              transformación digital de nuestros clientes.
            </p>
          </div>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.07 }}
            className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            Contáctanos
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
