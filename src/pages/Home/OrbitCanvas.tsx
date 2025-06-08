import { useEffect, useState } from "react";

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
    script.src = "/orbit.js"; // ✅ Apunta al archivo correctamente en public
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [shouldLoad]);

  return null;
}
