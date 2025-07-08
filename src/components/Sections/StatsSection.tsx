// src/components/Sections/StatsSection.tsx
import Stat from "../stat/Stat";

export default function StatsSection() {
  return (
    <section className="relative bg-blue-50 py-20 overflow-hidden">
      {/* Fondo decorativo animado */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 opacity-30 rounded-full blur-2xl animate-spin-slow -z-10" />

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-16">
        <Stat number={120} label="Proyectos Entregados" />
        <Stat number={98} label="Clientes Satisfechos" />
        <Stat number={10} label="Años de Experiencia" />
      </div>
    </section>
  );
}
