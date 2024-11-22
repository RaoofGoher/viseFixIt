import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // This will detect route changes

const ScrollToTop = () => {
  const location = useLocation(); // Track route changes

  useEffect(() => {
    // Scroll to the top whenever the route changes
    window.scrollTo(0, 0);
  }, [location]); // Dependency on location to trigger scroll on route change

  return null; // This component doesn't render anything
};

export default ScrollToTop;