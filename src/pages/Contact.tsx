import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaUser } from "react-icons/fa";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const CONTACT = {
    name: "Carlos Manuel Alejandro Martínez",
    email: "alejanmartinez411@gmail.com",
    phonePretty: "99-82-21-03-16",
    phoneE164: "5219982210316",
    city: "Cancún, Quintana Roo",
  };

  const waLink = (raw: string, text: string) => {
  const digits = raw.replace(/\D/g, "");
  // Si ya viene en E.164 MX correcto (13 dígitos: 521 + 10)
  const e164 = digits.startsWith("521") && digits.length === 13
    ? digits
    // Si viene como 10 dígitos MX, lo convertimos a 521 + 10
    : digits.length === 10
      ? `521${digits}`
      : digits; // última opción: lo dejamos tal cual
  return `https://wa.me/${e164}?text=${encodeURIComponent(text)}`;
};


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const message = String(fd.get("message") || "");
    if (!name || !email || !message) return;

    setSending(true);
    const subject = encodeURIComponent("Contacto – Software a la Carta");
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}\n\n— Enviado desde softwarealacarta.com`
    );
    const href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = href;
      setSending(false);
      setSent(true);
      (e.currentTarget as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 3000);
    }, 500);
  }

  const inputBase =
    "w-full bg-white/70 border border-white/30 text-gray-900 placeholder-gray-500 " +
    "rounded-lg px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition";

  return (
    <section
      id="contacto"
        className="relative min-h-[calc(100svh-var(--nav-h))] h-auto max-h-none
             px-5 pt-[max(env(safe-area-inset-top),1rem)]
             pb-[max(env(safe-area-inset-bottom),1.25rem)] md:py-12
             flex items-center justify-center overflow-hidden"
    >
      {/* fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#0d1b2a_0%,#0d1b2a_55%,#162d46_55%,#162d46_100%)]" />
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[22rem] h-[22rem] rounded-full bg-purple-400/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-5xl"
      >
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,.45)] border border-white/10">
          {/* IZQ: info — compacta */}
          <div className="bg-white/5 backdrop-blur-xl p-7 md:p-8">
            <div className="mb-5">
              <h2 className="text-3xl md:text-[32px] leading-tight font-extrabold text-white">
                Contáctanos
              </h2>
              <p className="text-white/70 mt-2 text-sm md:text-[15px]">
                ¿Tienes un proyecto? Respondemos normalmente en{" "}
                <span className="text-white">menos de 24 h</span>.
              </p>
            </div>

            <ul className="space-y-3 text-[15px]">
              <li className="flex items-center gap-3 text-white/90">
                <FaEnvelope className="text-blue-300 shrink-0" />
                <a className="hover:underline" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <FaPhoneAlt className="text-blue-300 shrink-0" />
                <a className="hover:underline" href={`tel:+${CONTACT.phoneE164}`}>
                  {CONTACT.phonePretty}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-blue-300 fill-current shrink-0">
                  <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7 11 9 11s9-5.75 9-11c0-4.97-4.03-9-9-9zm0 13.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 6.5 12 6.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/>
                </svg>
                <span>{CONTACT.city}</span>
              </li>
            </ul>

            <a
              href={waLink(CONTACT.phoneE164, "Hola, me interesa una cotización 🙂")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2.5 transition"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>


            <p className="text-[11px] text-white/50 mt-4">
              Usamos tu información solo para responder a tu mensaje.
            </p>
          </div>

          {/* DER: formulario — cabe en viewport y, si hace falta, scroll interno */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-7 md:p-8 overflow-y-auto"
            style={{ scrollbarGutter: "stable" }}
            aria-describedby="contact-hint"
          >
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-3 rounded-md bg-emerald-500/10 text-emerald-700 border border-emerald-400/40 px-3 py-2 text-sm"
              >
                ¡Listo! Mensaje enviado correctamente.
              </motion.div>
            )}

            <label className="block mb-3">
              <span className="mb-1 block text-gray-700 font-medium text-[14px]">Nombre</span>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500/80" />
                <input
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  className={`${inputBase} pl-9 text-[15px]`}
                  required
                />
              </div>
            </label>

            <label className="block mb-3">
              <span className="mb-1 block text-gray-700 font-medium text-[14px]">Correo electrónico</span>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500/80" />
                <input
                  name="email"
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  className={`${inputBase} pl-9 text-[15px]`}
                  required
                />
              </div>
            </label>

            <label className="block mb-4">
              <span className="mb-1 block text-gray-700 font-medium text-[14px]">Mensaje</span>
              <textarea
                name="message"
                rows={4} // más compacto
                placeholder="Cuéntanos brevemente tu idea o necesidad…"
                className="w-full bg-white/70 border border-white/30 text-gray-900 placeholder-gray-500 rounded-lg px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none text-[15px]"
                required
              />
            </label>

            <div className="flex gap-3">
              <motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  type="submit"
  disabled={sending}
  className="flex-1 inline-flex items-center justify-center gap-2 
             rounded-lg bg-blue-600 hover:bg-blue-700 
             text-white font-semibold px-4 py-2.5 shadow-sm 
             transition disabled:opacity-60 cursor-pointer"
  aria-busy={sending}
>
  {sending ? "Preparando…" : "Enviar mensaje"}
</motion.button>

            </div>

            <p id="contact-hint" className="text-[11px] text-gray-500 mt-3">
              * Campos obligatorios. Tiempo de respuesta: &lt; 24 h.
            </p>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
