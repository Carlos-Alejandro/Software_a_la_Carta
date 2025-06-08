import { useEffect, useState } from "react";

declare global {
  interface Window {
    Orbit?: {
      init?: () => void;
      [key: string]: any;
    };
  }
}

export default function OrbitCanvas() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    if (isDesktop) {
      setShouldLoad(true);
    }
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const script = document.createElement("script");
    script.src = "/orbit.js";
    script.async = true;

    script.onload = () => {
      // Espera breve para asegurar que #orbit-container esté en el DOM
      setTimeout(() => {
        if (window.Orbit && typeof window.Orbit.init === "function") {
          window.Orbit.init();
          console.log("✅ Orbit init ejecutado desde OrbitCanvas");
        } else {
          console.warn("⚠️ Orbit no está definido o no tiene init");
        }
      }, 100);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [shouldLoad]);

  return null;
}
