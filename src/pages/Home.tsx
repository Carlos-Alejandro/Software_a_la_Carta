import React from "react";

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

const testimonials = [
    {
        name: "Ana López",
        company: "Restaurante Delicias",
        quote:
            "Software a la Carta transformó nuestra gestión. Ahora todo es más ágil y eficiente.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Carlos Pérez",
        company: "Tienda Tech",
        quote:
            "El equipo entendió exactamente lo que necesitábamos. ¡100% recomendados!",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
];

export default function Home() {
    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="animate-pulse absolute top-0 left-1/2 w-96 h-96 bg-blue-200 opacity-30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="animate-spin-slow absolute bottom-0 right-0 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-2xl" />
                </div>
                <div className="container mx-auto px-6 py-24 relative z-10 flex flex-col items-center text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 animate-fade-in-down">
                        Software a la Carta
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-up">
                        Soluciones digitales personalizadas para tu negocio. <br />
                        ¡Transforma tu empresa con tecnología a medida!
                    </p>
                    <a
                        href="#contacto"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 animate-bounce"
                    >
                        Solicita tu demo
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                    ¿Por qué elegirnos?
                </h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {features.map((feature, idx) => (
                        <div
                            key={feature.title}
                            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 animate-fade-in"
                            style={{ animationDelay: `${idx * 0.2}s` } as React.CSSProperties}
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Animated Stats */}
            <section className="bg-blue-50 py-12">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-12">
                    <Stat number={120} label="Proyectos Entregados" />
                    <Stat number={98} label="Clientes Satisfechos" />
                    <Stat number={10} label="Años de Experiencia" />
                </div>
            </section>

            {/* Testimonials */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    Lo que dicen nuestros clientes
                </h2>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    {testimonials.map((t, idx) => (
                        <div
                            key={t.name}
                            className="bg-white rounded-lg shadow-md p-8 max-w-sm animate-fade-in"
                            style={{ animationDelay: `${idx * 0.3 + 0.2}s` } as React.CSSProperties}
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full mr-4 border-2 border-blue-400"
                                />
                                <div>
                                    <div className="font-semibold text-gray-900">{t.name}</div>
                                    <div className="text-sm text-gray-500">{t.company}</div>
                                </div>
                            </div>
                            <p className="italic text-gray-700">"{t.quote}"</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section id="contacto" className="bg-gradient-to-r from-blue-500 to-purple-500 py-16">
                <div className="container mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para digitalizar tu negocio?</h2>
                    <p className="mb-8 text-lg">
                        Contáctanos y recibe una asesoría gratuita para tu proyecto.
                    </p>
                    <a
                        href="mailto:contacto@softwarealacarta.com"
                        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300"
                    >
                        Escríbenos
                    </a>
                </div>
            </section>

            {/* Animations */}
            <style>
                {`
                    @keyframes fade-in-down {
                        0% { opacity: 0; transform: translateY(-30px);}
                        100% { opacity: 1; transform: translateY(0);}
                    }
                    @keyframes fade-in-up {
                        0% { opacity: 0; transform: translateY(30px);}
                        100% { opacity: 1; transform: translateY(0);}
                    }
                    @keyframes fade-in {
                        0% { opacity: 0;}
                        100% { opacity: 1;}
                    }
                    @keyframes spin-slow {
                        0% { transform: rotate(0deg);}
                        100% { transform: rotate(360deg);}
                    }
                    .animate-fade-in-down { animation: fade-in-down 1s ease both;}
                    .animate-fade-in-up { animation: fade-in-up 1s 0.2s ease both;}
                    .animate-fade-in { animation: fade-in 1s ease both;}
                    .animate-spin-slow { animation: spin-slow 10s linear infinite;}
                `}
            </style>
        </div>
    );
}

// Animated Stat component
function Stat({ number, label }: { number: number; label: string }) {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        let start = 0;
        const end = number;
        if (start === end) return;
        let incrementTime = 20;
        let timer = setInterval(() => {
            start += Math.ceil(end / 50);
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(start);
        }, incrementTime);
        return () => clearInterval(timer);
    }, [number]);
    return (
        <div className="flex flex-col items-center">
            <div className="text-5xl font-extrabold text-blue-600 mb-2">{count}+</div>
            <div className="text-lg text-gray-700">{label}</div>
        </div>
    );
}