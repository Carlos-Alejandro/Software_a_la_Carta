import { useState } from "react";
import {FaFilter, FaStar, FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Procesador Ryzen 7 5800X",
    description: "8 núcleos, 16 hilos, 4.7 GHz Turbo, AM4",
    category: "CPU",
    price: 399.99,
    rating: 4.8,
    image: "https://arteus.pe/cdn/shop/files/amd-100-100000063wof-procesador-amd-ryzen-7-5800x-3-80ghz-32mb-l3-8-core-am4-7nm-105w-arteus_800x.jpg?v=1708735677"
  },
  {
    id: 2,
    name: "Memoria RAM Corsair 16GB DDR4",
    description: "2x8GB, 3200MHz, CL16",
    category: "RAM",
    price: 89.99,
    rating: 4.5,
    image: "https://via.placeholder.com/300x200?text=Corsair+RAM"
  },
  {
    id: 3,
    name: "Disco SSD NVMe 1TB",
    description: "Lectura hasta 3500 MB/s",
    category: "Almacenamiento",
    price: 129.99,
    rating: 4.7,
    image: "https://via.placeholder.com/300x200?text=SSD+NVMe+1TB"
  }
];

const categories = ["CPU", "RAM", "Almacenamiento"];

const EcommercePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center mb-10 pt-28">
        <h1 className="text-4xl font-bold text-blue-700">Tienda de Componentes de Computadora</h1>
        <p className="text-gray-600 mt-2">Encuentra lo mejor en hardware para tu PC</p>
      </header>

      <section className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-1/4 bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4 text-gray-800">
            <FaFilter /> Filtros
          </h2>
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition hover:bg-blue-100 ${
                  selectedCategory === cat ? "bg-blue-200 text-blue-900" : "bg-gray-100 text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-4 text-blue-600 hover:underline text-sm"
            >
              Quitar filtros
            </button>
          </div>
        </aside>

        <main className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
  <div
    key={product.id}
    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col overflow-hidden"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x200?text=No+Image";
        }}
      />
      <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full shadow">
        {product.category}
      </span>
    </div>

    <div className="p-4 flex flex-col h-full">
      <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{product.description}</p>

      <div className="flex items-center gap-1 text-yellow-500 mb-2">
        <FaStar />
        <span className="text-sm text-gray-700">{product.rating}</span>
      </div>

      <div className="mt-auto flex items-center justify-between">
        <span className="text-lg font-semibold text-green-600">${product.price.toFixed(2)}</span>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-md transition">
          <FaShoppingCart /> Añadir
        </button>
      </div>
    </div>
  </div>
))}

        </main>
      </section>
    </div>
  );
};

export default EcommercePage;
