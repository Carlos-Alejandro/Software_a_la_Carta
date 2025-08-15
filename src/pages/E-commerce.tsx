import React from "react";

const ECommerce: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Animated floating shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="animate-bounce-slow absolute left-10 top-20 w-24 h-24 bg-white bg-opacity-20 rounded-full blur-xl" />
        <div className="animate-spin-slow absolute right-20 bottom-32 w-32 h-32 bg-pink-300 bg-opacity-30 rounded-full blur-xl" />
        <div className="animate-pulse absolute left-1/2 top-1/3 w-16 h-16 bg-indigo-400 bg-opacity-40 rounded-full blur-xl" />
      </div>

      {/* Main content */}
      <div className="z-10 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-6">
          <svg
            className="w-16 h-16 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M9 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg animate-fade-in">
            ¡Próximamente!
          </h1>
        </div>
        <p className="text-xl text-white/80 mb-8 animate-fade-in-delay text-center max-w-lg">
          Estamos trabajando en una experiencia de e-commerce increíble para ti.<br />
          ¡Prepárate para descubrir productos únicos, ofertas exclusivas y mucho más!
        </p>
        <button
          className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 animate-fade-in-delay2"
          disabled
        >
          Mantente atento 🚀
        </button>
      </div>

      {/* Custom animations */}
      <style>
        {`
          .animate-bounce-slow {
            animation: bounce 3s infinite;
          }
          .animate-spin-slow {
            animation: spin 8s linear infinite;
          }
          .animate-fade-in {
            animation: fadeIn 1.2s ease-out;
          }
          .animate-fade-in-delay {
            animation: fadeIn 2s ease-out;
          }
          .animate-fade-in-delay2 {
            animation: fadeIn 2.8s ease-out;
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-30px);}
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
};

export default ECommerce;