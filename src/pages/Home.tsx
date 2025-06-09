import React from "react";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Hero from "../components/Hero/Hero";
import FeaturesSection from "../components/Sections/FeaturesSection";
import TestimonialsSection from "../components/Sections/TestimonialsSection";



export default function Home() {
   
    React.useEffect(() => {
    const scrollTo = localStorage.getItem("scrollTo");
    if (scrollTo) {
        const el = document.querySelector(scrollTo);
        if (el) {
            setTimeout(() => {
                el.scrollIntoView({ behavior: "smooth" });
            }, 100); // Espera breve para que el DOM cargue
        }
        localStorage.removeItem("scrollTo");
    }
}, []);


    return (
        <>
        { /* Inicio de la pagina web */}
        <div id="home" className="bg-gradient-to-br from-blue-50 via-white to-purple-100 min-h-screen relative">

            {/* Hero Section */}
            <Hero />

            {/* Features Section */}
            <FeaturesSection />

            {/* Animated Stats */}
            <section className="bg-blue-50 py-12">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-12">
                    <Stat number={120} label="Proyectos Entregados" />
                    <Stat number={98} label="Clientes Satisfechos" />
                    <Stat number={10} label="Años de Experiencia" />
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialsSection />
            {/* Call to Action */}
            <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-16">
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

        {/* About Section */}
            <section id="about" className="scroll-mt-12">
                <About />
            </section>  

        { /* Servicios que ofrecemos */}
            <section id="services" className="scroll-mt-12">
                <Services />
            </section>  
        
        { /* Contacto */}
            <section id="contacto" className="scroll-mt-0">
                <Contact />
            </section>  
            
        { /* Fin de la pagina web */}
        </>
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