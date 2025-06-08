import { motion } from "framer-motion";

const teamMembers = [
    {
        name: "Carlos Martínez",
        role: "Fundador & CEO",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Apasionado por la tecnología y la innovación, liderando Software a la Carta hacia el futuro.",
    },
    {
        name: "Ana López",
        role: "Desarrolladora Full Stack",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        bio: "Especialista en soluciones web modernas y experiencias de usuario excepcionales.",
    },
    {
        name: "Luis Gómez",
        role: "Diseñador UI/UX",
        img: "https://randomuser.me/api/portraits/men/65.jpg",
        bio: "Transformando ideas en interfaces atractivas y funcionales.",
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
        <div id="about" className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 md:px-16">
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
                    En <span className="font-semibold text-blue-600">Software a la Carta</span> creamos soluciones digitales a medida, combinando creatividad, tecnología y pasión por el detalle. Nuestro equipo está comprometido con la excelencia y la satisfacción de nuestros clientes.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
                            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-all"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-24 h-24 rounded-full mb-4 border-4 border-blue-100 object-cover"
                            />
                            <h3 className="text-xl font-bold text-blue-700">{member.name}</h3>
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
                            Brindar soluciones tecnológicas personalizadas que impulsen el crecimiento y la transformación digital de nuestros clientes.
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