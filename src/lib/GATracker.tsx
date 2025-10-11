// src/lib/GATracker.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageView } from './gtag';

export default function GATracker() {
  const location = useLocation();

  useEffect(() => {
    pageView(location.pathname + location.search);
  }, [location]);

  return null;
}
