import React, { useMemo, useState, useRef, useEffect } from 'react';
import { useIntersection } from 'react-use';

const LazyImage = ({
  Component = 'img',
  src,
  intersectionTriggerRef,
  placeholder = '#',
  ...restProps
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(false);
  const imageRef = useRef();

  const placeholderStyles = useMemo(
    () => ({
      backgroundColor: 'var(--background-color-dark)',
      minWidth: '350px',
      minHeight: '350px',
    }),
    []
  );
  const intersection = useIntersection(intersectionTriggerRef || imageRef, {
    threshold: 0.001,
  });

  useEffect(() => {
    if (
      intersection?.isIntersecting &&
      !isLoading &&
      imageSrc === placeholder
    ) {
      setIsLoading(true);
    }
  }, [intersection, isLoading, src, imageSrc]);

  useEffect(() => {
    let wasCancelled = false;
    if (isLoading) {
      const updateSrc = () => {
        if (!wasCancelled) {
          setImageSrc(src);
        }
      };

      const img = new Image();
      img.onload = updateSrc;
      img.src = src;
    }

    return () => {
      wasCancelled = true;
    };
  }, [isLoading]);

  if (!src) {
    return null;
  }

  return (
    <Component
      src={imageSrc}
      ref={imageRef}
      loading="lazy"
      {...restProps}
      style={
        imageSrc === placeholder && !placeholder ? placeholderStyles : restProps.style
      }
    />
  );
};

export { LazyImage };
