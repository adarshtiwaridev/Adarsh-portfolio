import { useCallback, useEffect, useRef } from "react";









export function useSpotlight() {
  const ref = useRef(null);
  const frameRef = useRef(null);

  const updateSpotlight = useCallback((x, y, opacity) => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = window.requestAnimationFrame(() => {
      node.style.setProperty("--spotlight-x", `${x}px`);
      node.style.setProperty("--spotlight-y", `${y}px`);
      node.style.setProperty("--spotlight-opacity", opacity);
    });
  }, []);

  const handlePointerMove = useCallback(
    (event) => {
      const node = ref.current;

      if (!node) {
        return;
      }

      const bounds = node.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;

      updateSpotlight(x, y, "1");
    },
    [updateSpotlight]
  );

  const handlePointerLeave = useCallback(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const fallbackX = node.clientWidth / 2;
    const fallbackY = node.clientHeight / 2;
    updateSpotlight(fallbackX, fallbackY, "0");
  }, [updateSpotlight]);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return {
    ref,
    onPointerEnter: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    onPointerMove: handlePointerMove,
  };
}
