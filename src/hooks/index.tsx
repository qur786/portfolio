import { useState, useEffect, RefObject } from "react";

export function useMobile(targetElement: RefObject<HTMLElement>): boolean {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    let resizeObserver: ResizeObserver | undefined;
    if (targetElement.current !== null) {
      resizeObserver = new ResizeObserver(() => {
        const { matches } = window.matchMedia("(max-width: 640px)");
        setIsMobile(matches);
      });

      resizeObserver.observe(targetElement.current);
    }

    return () => {
      resizeObserver?.disconnect();
    };
  }, [targetElement]);

  return isMobile;
}
