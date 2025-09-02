import React from "react";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Hero from "../components/Hero/Hero";
import FeaturesSection from "../components/Sections/FeaturesSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import StatsSection from "../components/Sections/StatsSection";
import CTASection from "../components/Sections/CTASection";



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

            {/* Projects Section */}
            <ProjectsSection /> 

            {/* Features Section */}
            <FeaturesSection />

            {/* Animated Stats */}
            <StatsSection />

            {/* Testimonials */}
            {/* <TestimonialsSection /> */}

            {/* Call to Action */}
            <CTASection />

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
            <section id="contacto" className="scroll-mt-12">
                <Contact />
            </section>  
            
        { /* Fin de la pagina web */}
        </>
    );
}
