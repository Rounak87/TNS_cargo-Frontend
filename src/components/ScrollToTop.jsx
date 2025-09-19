import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component will automatically scroll the window to top when the route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
