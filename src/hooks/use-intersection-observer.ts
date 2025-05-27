import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const tartetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (tartetRef.current) {
      observer.observe(tartetRef.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { tartetRef, isIntersecting };
};
