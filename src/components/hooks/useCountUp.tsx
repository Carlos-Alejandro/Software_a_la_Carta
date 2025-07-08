// src/hooks/useCountUp.ts
import { useEffect, useState } from "react";

export function useCountUp(to: number, duration = 2, start = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // solo inicia si está en viewport

    let startVal = 0;
    const end = to;
    const increment = end / (duration * 60);

    const frame = () => {
      startVal += increment;
      if (startVal < end) {
        setCount(Math.ceil(startVal));
        requestAnimationFrame(frame);
      } else {
        setCount(end);
      }
    };

    frame();
  }, [to, duration, start]);

  return count;
}
