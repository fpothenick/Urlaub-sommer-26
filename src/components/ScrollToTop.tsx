import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sofort scrollen ohne Verzögerung
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Zusätzlich als Backup
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    });
  }, [pathname]);

  return null;
}
