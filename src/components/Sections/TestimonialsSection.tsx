import React from "react";

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

export default function TestimonialsSection() {
  return (
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
  );
}
