import { useEffect, useState } from 'react';

interface Size {
  width: number | undefined;
  height: number | undefined;
}
function useWindowSize(): Size {
  const isClient = typeof window === 'object';
  const [windowSize, setWindowSize] = useState<Size>({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line
  }, []);

  return windowSize;
}

export default useWindowSize;
