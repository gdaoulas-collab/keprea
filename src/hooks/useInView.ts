import { useEffect, useRef, useState } from 'react';

export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Safety net: if IntersectionObserver never fires (unsupported browser,
    // blocked API, or the element already sits in the viewport at mount in a
    // way the observer misses), reveal the content anyway after a short delay
    // instead of leaving it permanently hidden by the .reveal CSS.
    const fallback = window.setTimeout(() => setInView(true), 1200);

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return () => window.clearTimeout(fallback);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
          window.clearTimeout(fallback);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold]);

  return { ref, inView };
}
