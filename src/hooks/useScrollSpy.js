import { useEffect, useState, useRef } from "react";

export default function useScrollSpy(ids = [], opts = {}) {
  const [activeId, setActiveId] = useState(ids[0] || null);
  const rafRef = useRef(null);
  const headerSelector = opts.headerSelector || ".site-header";

  useEffect(() => {
    if (!ids || ids.length === 0) return;

    const getHeaderHeight = () => {
      const el = document.querySelector(headerSelector);
      return el ? el.getBoundingClientRect().height : 0;
    };

    const computeActive = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const headerH = getHeaderHeight();
      let bestId = null;
      let bestVisible = -Infinity;
      let nearest = { id: null, distance: Infinity };

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();

        const visibleTop = Math.max(r.top, headerH);
        const visibleBottom = Math.min(r.bottom, vh);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > bestVisible) {
          bestVisible = visibleHeight;
          bestId = id;
        }

        const distance = Math.abs(r.top - headerH);
        if (distance < nearest.distance) {
          nearest = { id, distance };
        }
      });

      if (bestVisible > 0) {
        setActiveId((prev) => (prev === bestId ? prev : bestId));
      } else if (nearest.id) {
        setActiveId((prev) => (prev === nearest.id ? prev : nearest.id));
      }
    };

    const handle = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(computeActive);
    };

    handle();

    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, [ids.join(","), headerSelector]);

  return activeId;
}