import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const routePath = useLocation();
  const onTop = () => {
    const scrollStep = window.scrollY / 25;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, -scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return null;
}

export default ScrollToTop;