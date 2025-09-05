import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Variants, Easing } from "framer-motion";
import { FaMicrochip, FaKeyboard } from "react-icons/fa";
import { MdStorage } from "react-icons/md";
import { SiNvidia } from "react-icons/si";

const NAV_H = 72;

const easeOutExpo: Easing = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.6, ease: easeOutExpo },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

function useCountdown(target: Date) {
  const [now, setNow] = useState<Date>(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function Countdown({ targetDate }: { targetDate: Date }) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);
  const pad = (n: number) => n.toString().padStart(2, "0");
  const timeBox = (
    label: string,
    value: string | number,
    key: string,
  ) => (
    <div
      key={key}
      className="relative flex w-20 sm:w-24 flex-col items-center rounded-xl border border-white/10 bg-white/5 px-2 py-3 backdrop-blur-sm"
    >
      <span className="text-2xl sm:text-3xl font-bold tabular-nums tracking-tight">
        {value}
      </span>
      <span className="mt-1 text-[11px] sm:text-xs text-white/60">{label}</span>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5" />
    </div>
  );

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {timeBox("Días", days, "d")}
      {timeBox("Horas", pad(hours), "h")}
      {timeBox("Min", pad(minutes), "m")}
      {timeBox("Seg", pad(seconds), "s")}
    </div>
  );
}

function CategoryCard({
  title,
  Icon,
  desc,
}: {
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  desc: string;
}) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative flex h-[150px] md:h-[160px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4"
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-500/20 via-indigo-500/10 to-fuchsia-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold leading-tight">{title}</h3>
          <p className="mt-1 text-xs text-white/70">{desc}</p>
        </div>
      </div>

      <div className="relative mt-auto h-16 rounded-xl border border-dashed border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01]" />
    </motion.div>
  );
}

export default function ComingSoonLanding() {
  const launchDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 21);
    return d;
  }, []);

  const gridPatternStyle: React.CSSProperties = {
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)," +
      "linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
    backgroundSize: "36px 36px",
    maskImage:
      "radial-gradient(ellipse at center, black, transparent 70%)",
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-[#0d1b2a] text-white flex items-center"
      style={{ ["--nav-h" as any]: `${NAV_H}px` }}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={gridPatternStyle}
      />

      {/* Centramos verticalmente todo el contenido en la pantalla */}
      <div className="pt-[var(--nav-h)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 w-full"
        >
          <motion.div variants={item} className="flex flex-col justify-center">
            <span className="mb-3 inline-flex max-w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Tienda en construcción
            </span>

            <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
                ¡Próximamente!
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Estamos preparando la mejor experiencia para armar tu PC: GPUs, SSD, RAM,
              periféricos y más. Sé de los primeros en enterarte del lanzamiento y obtén
              <span className="font-semibold text-white"> ofertas de apertura</span>.
            </p>

            <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Countdown targetDate={launchDate} />
              <div className="text-xs text-white/60">Lanzamiento estimado</div>
            </div>
          </motion.div>

          <section id="categorias" className="scroll-mt-[var(--nav-h)] flex flex-col justify-center">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-white/80">Lo que encontrarás</h2>
              <span className="text-[11px] text-white/50">Selección curada para entusiastas</span>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <CategoryCard
                title="Tarjetas Gráficas"
                Icon={SiNvidia}
                desc="Series RTX y Radeon para gaming, IA y render."
              />
              <CategoryCard
                title="Procesadores"
                Icon={FaMicrochip}
                desc="Intel® Core™ y AMD Ryzen™ de última generación."
              />
              <CategoryCard
                title="Almacenamiento"
                Icon={MdStorage}
                desc="SSD NVMe Gen 4/5, SATA y externos de alto rendimiento."
              />
              <CategoryCard
                title="Periféricos"
                Icon={FaKeyboard}
                desc="Teclados, mouse, headsets y más para tu setup."
              />
            </motion.div>
          </section>
        </motion.section>
      </div>
    </div>
  );
}
