import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';

const LazyImagePlaceholder = styled.div`
  background: var(--background-color-dark);
`;

const LazyImage = ({ src, alt, className, placeholder, ...restProps }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [isError, setError] = useState(false);

  const onSuccess = useCallback(() => {
    setLoaded(true);
    setError(false);
  }, []);

  const onFailure = useCallback(() => {
    setLoaded(false);
    setError(true);
  }, []);

  useEffect(() => {
    if (!placeholder && src) {
      const img = new Image();
      img.onload = onSuccess;
      img.onerror = onFailure;
      img.src = src;
    }
  }, [src, placeholder]);

  if (!src) {
    return null;
  }

  if (isError) {
    return (
      <LazyImagePlaceholder className={className}>Failed to laod the image</LazyImagePlaceholder>
    );
  }

  if (isLoaded) {
    return (
      <img src={src} className={className} alt={alt} {...restProps} />
    );
  }

  if (!placeholder) {
    return (
      <LazyImagePlaceholder className={className} />
    );
  }

  return (
    <img
      className={className}
      src={placeholder}
      loading="lazy"
      alt={`Loading ${alt}`}
      {...restProps}
      onLoad={onSuccess}
      onError={onFailure}
    />
  );
};

export {
  LazyImage
};
