import { useLayoutEffect, useRef } from 'react';

export default function useSafeMounted() {
  const mountRef = useRef(false);

  useLayoutEffect(() => {
    mountRef.current = true;
    return () => (mountRef.current = false);
  }, []);

  return mountRef;
}
