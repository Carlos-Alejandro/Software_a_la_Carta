import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-blue-100"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white/70 backdrop-blur-xl shadow-2xl rounded-2xl p-10 border border-blue-100">

        {/* Información de contacto */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-4xl font-extrabold text-blue-700">Contáctanos</h2>
          <p className="text-md text-gray-600">
            ¿Tienes alguna pregunta, propuesta o simplemente quieres decir hola?
            <br /> ¡Nos encantaría leerte!
          </p>

          <ul className="space-y-5 text-md">
            <li className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-blue-600" />
              <span>info@softwarealacarta.com</span>
            </li>
            <li className="flex items-center gap-4">
              <FaPhone className="text-2xl text-blue-600" />
              <span>+34 123 456 789</span>
            </li>
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-blue-600" />
              <span>Madrid, España</span>
            </li>
          </ul>
        </div>

        {/* Formulario de contacto */}
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Formulario enviado (próximamente funcional)");
          }}
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              required
              placeholder="Tu nombre completo"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              required
              placeholder="ejemplo@correo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              rows={5}
              required
              placeholder="Cuéntanos sobre tu proyecto o consulta"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm resize-none transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 hover:shadow-lg transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
