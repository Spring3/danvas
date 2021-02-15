import { useEffect } from 'react';

const useImagePreload = (src) => {
  useEffect(() => {
    if (!src) {
      return;
    }

    const arrayOfSources = Array.isArray(src) ? src : [src];

    for (const source of arrayOfSources) {
      const image = new Image();
      image.src = source;
    }
  }, [src]);
};

export {
  useImagePreload
};
