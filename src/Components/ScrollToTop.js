import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, navigate to that section
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove the '#' character
      if (element) {
        element.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }
  }, [location]);

  return null;
}

export default ScrollToTop;
