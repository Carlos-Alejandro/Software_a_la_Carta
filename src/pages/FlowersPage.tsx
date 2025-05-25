import React from "react";

const flowers = [
    {
        name: "Rosa",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        description: "Hermosa rosa roja, símbolo de amor y pasión.",
    },
    {
        name: "Girasol",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        description: "Girasol radiante, siempre buscando la luz del sol.",
    },
    {
        name: "Lirio",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        description: "Lirio elegante, perfecto para cualquier ocasión.",
    },
];

const FlowersPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-pink-50 py-10">
            <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">
                Flores Disponibles
            </h1>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {flowers.map((flower) => (
                    <div
                        key={flower.name}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <img
                            src={flower.image}
                            alt={flower.name}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold text-pink-600 mb-2">
                                {flower.name}
                            </h2>
                            <p className="text-gray-600">{flower.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlowersPage;