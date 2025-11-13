import { useEffect } from "react";

export default function useParallax(ref, speed = 0.3) {
  useEffect(() => {
    if (!ref?.current) return;
    const el = ref.current;
    let raf = null;

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const offset = rect.top * speed;
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, speed]);
}