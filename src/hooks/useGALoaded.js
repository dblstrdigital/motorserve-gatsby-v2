import { useEffect, useState } from 'react';

export const useGALoaded = () => {
  const [isGALoaded, setIsGALoaded] = useState(false);

  useEffect(() => {
    const checkIfGaIsLoaded = () => {
      if (typeof window !== 'undefined' && window.ga && window.ga.create) {
        setIsGALoaded(true);
      } else {
        setTimeout(checkIfGaIsLoaded, 1000);
      }
    };
    checkIfGaIsLoaded();
  }, []);

  return isGALoaded;
};
