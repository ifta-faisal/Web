import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface ScrollLazyProps {
  children: ReactNode;
  minHeight?: string;
  rootMargin?: string;
}

const ScrollLazy: React.FC<ScrollLazyProps> = ({ 
  children, 
  minHeight = '500px',
  rootMargin = '400px 0px' // Load when 400px away from viewport
}) => {
  const [hasRendered, setHasRendered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRendered(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: hasRendered ? 'auto' : minHeight }}>
      {hasRendered && children}
    </div>
  );
};

export default ScrollLazy;
