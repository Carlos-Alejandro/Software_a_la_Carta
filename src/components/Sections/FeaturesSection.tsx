// src/components/FeaturesSection.tsx
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

export default function FeaturesSection() {
  return (
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
  );
}
