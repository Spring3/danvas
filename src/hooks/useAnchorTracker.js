import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

const useAnchorTracker = (anchors) => {
  const [activeAnchor, setActiveAnchor] = useState();

  useEffect(() => {
    const validAnchors = Array.isArray(anchors) && anchors.length;
    const elements = validAnchors
      ? Array.from(document.querySelectorAll(anchors))
      : [];

    const onScroll = () => {
      const marginsAndPaddings = 57;
      const scrolledPast = elements.filter(
        (element) => element.getBoundingClientRect().y <= marginsAndPaddings,
      );
      setActiveAnchor(anchors[scrolledPast.length - 1]);
    };

    const throttledFunction = throttle(onScroll, 300);

    if (validAnchors) {
      window.addEventListener('scroll', throttledFunction);
    }

    return () => {
      if (validAnchors) {
        window.removeEventListener('scroll', throttledFunction);
      }
    };
  }, [anchors]);

  return activeAnchor;
};

export { useAnchorTracker };
