import { useCallback, useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

type SpotlightBindings<T extends HTMLElement> = {
  onPointerEnter: (event: ReactPointerEvent<T>) => void;
  onPointerLeave: () => void;
  onPointerMove: (event: ReactPointerEvent<T>) => void;
  ref: React.RefObject<T | null>;
};

export function useSpotlight<T extends HTMLElement>(): SpotlightBindings<T> {
  const ref = useRef<T>(null);
  const frameRef = useRef<number | null>(null);

  const updateSpotlight = useCallback((x: number, y: number, opacity: string) => {
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
    (event: ReactPointerEvent<T>) => {
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
