import { useLayoutEffect, useState } from 'react';

const useResponsiveWindow = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResive = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleResive();
    window.addEventListener('resize', handleResive);

    return () => {
      window.removeEventListener('resize', handleResive);
    };
  }, []);

  return windowSize;
};

export default useResponsiveWindow;
