import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

type MobileCarouselProps<T> = {
  items: T[];
  renderCard: (item: T, index: number) => ReactNode;
  slideWidthClass?: string;   // default: 'w-[280px]'
  spaceBetween?: number;      // default: 30
  className?: string;         // extra clases para el wrapper
  autoplayDelay?: number;     // default: 3500 ms
  autoplay?: boolean;         // default: true
};

/**
 * Carrusel con paginación SOLO en móvil (md:hidden).
 * Autoplay empieza cuando la sección entra en viewport.
 */
export function MobileCarousel<T>({
  items,
  renderCard,
  slideWidthClass = "w-[280px]",
  spaceBetween = 30,
  className = "",
  autoplayDelay = 3500,
  autoplay = true,
}: MobileCarouselProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (!autoplay) return;
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        const s = swiperRef.current;
        if (!s || !s.autoplay) return;
        if (entry.isIntersecting) {
          // arranca sólo cuando se ve
          s.autoplay.start();
        } else {
          // pausa cuando sale de vista (ahorra batería)
          s.autoplay.stop();
        }
      },
      { threshold: 0.35 } // ~35% visible
    );

    io.observe(el);
    return () => io.disconnect();
  }, [autoplay]);

  return (
    <div ref={containerRef} className={`block md:hidden ${className}`}>
      <Swiper
        className="!overflow-visible w-full"
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        // Autoplay configurado pero deshabilitado; lo activamos con .autoplay.start()
        autoplay={
          autoplay
            ? { delay: autoplayDelay, disableOnInteraction: false }
            : false
        }
        spaceBetween={spaceBetween}
        breakpoints={{ 0: { slidesPerView: "auto" as any } }}
        onSwiper={(s) => (swiperRef.current = s)}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx} className={slideWidthClass}>
            {renderCard(item, idx)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MobileCarousel;
