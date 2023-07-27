import { useEffect, useCallback } from 'react';

const useRerenderedComponent = (callback: () => Promise<void>) => {
  const upload = useCallback(async () => {
    callback();
  }, [callback]);

  useEffect(() => {
    const intervalId = setInterval(upload, 60 * 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, [upload]);

  return;
};

export default useRerenderedComponent;
