import { useEffect, useState } from 'react';

// Mirrors the --bp-desktop breakpoint used by the only-mobile/only-desktop
// CSS classes, for the one case (routing) that CSS alone can't decide.
const QUERY = '(min-width: 1024px)';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => !window.matchMedia(QUERY).matches);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const onChange = () => setIsMobile(!mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return isMobile;
}
