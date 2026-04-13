import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, left: 0 });
      }
    }, 0);

  }, [pathname, hash]);

  return null;
};

export default ScrollHandler;
