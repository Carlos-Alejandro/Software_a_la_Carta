// src/components/stat/Stat.tsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "../../components/hooks/useCountUp";

interface StatProps {
  number: number;
  label: string;
}

export default function Stat({ number, label }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animatedNumber = useCountUp(number, 2, isInView); // solo si está en viewport

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="text-5xl font-bold text-blue-600 drop-shadow">
        {animatedNumber}+
      </div>
      <p className="mt-2 text-gray-700 text-lg">{label}</p>
    </motion.div>
  );
}
