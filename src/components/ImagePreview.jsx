import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import ArrowLeftIcon from 'mdi-react/ArrowLeftThickIcon';
import ArrowRightIcon from 'mdi-react/ArrowRightThickIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import { Helmet } from 'react-helmet';
import { useSprings, animated, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import clamp from 'lodash.clamp';
import { useWindowResize } from '../hooks/useWindowResize';

const ImagePreviewPortal = ({ children }) => {
  const container = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    const root = document.getElementById('image-preview-portal');

    root.appendChild(container);

    return () => root.removeChild(container);
  }, [container]);

  return createPortal(children, container);
};

const ImagePreviewContainer = ({ children }) => (
  <div id="image-preview-portal">{children}</div>
);

const PreviewContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

const PreviewImages = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: calc(100% - 100px);
  margin: 0 auto;

  @media (max-width: 700px) {
    max-width: 95%;
  }
`;

const PreviewButton = styled.button`
  z-index: 2;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border: none;
  cursor: pointer;

  svg {
    fill: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
  }

  &:not(:disabled):focus,
  &:not(:disabled):hover {
    background: rgba(255, 255, 255, 0.2);
    svg {
      fill: rgba(255, 255, 255, 1);
    }
  }

  &:disabled {
    cursor: not-allowed;
    background: rgba(255, 255, 255, 0.1);
    svg {
      fill: rgba(255, 255, 255, 0.15);
    }
  }

  @media (max-width: 700px) {
    position: absolute;
  }
`;

const ButtonPrevious = styled(PreviewButton)`
  @media (min-width: 701px) {
    margin-left: 1rem;
  }

  @media (max-width: 700px) {
    left: 1rem;
  }
`;

const ButtonNext = styled(PreviewButton)`
  @media (min-width: 701px) {
    margin-right: 1rem;
  }

  @media (max-width: 700px) {
    right: 1rem;
  }
`;

const SlidingImage = styled(animated.img)`
  position: absolute;
  transition: opacity 0.3s ease-in-out;
  max-width: 100%;
  border-radius: 5px;
`;

const IconClose = styled(CloseIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  z-index: 2;

  padding: 1rem;
  fill: rgba(255, 255, 255, 0.5);

  &:focus,
  &:hover {
    fill: rgba(255, 255, 255, 1);
  }
`;

const ImagePreview = ({ images, startIndex = 0, onClose }) => {
  const { width } = useWindowResize();
  const [index, setIndex] = useState(startIndex);

  const [draggingAnimationSprings, set] = useSprings(images.length, (i) => ({
    x: i * width,
    scale: 1,
    config: config.default,
    display: 'block',
    transform: `translateX(${i * width}px) scale(1)`,
  }));

  useEffect(() => {
    set((i) => {
      if (i < index - 1 || i > index + 1) return { display: 'none' };
      const x = (i - index) * width;
      const scale = 1;
      return {
        x,
        scale,
        display: 'block',
        config: config.default,
        transform: `translateX(${x}px) scale(${scale})`,
      };
    });
  }, [index, width]);

  const bind = useDrag(
    ({
      active, movement: [mx], direction: [xDir], distance, cancel
    }) => {
      if (active && distance > width / 4) {
        const newIndex = clamp(
          index + (xDir > 0 ? -1 : 1),
          0,
          images.length - 1
        );
        setIndex(newIndex);
        cancel(newIndex);
      }
      set((i) => {
        if (i < index - 1 || i > index + 1) return { display: 'none' };
        const x = (i - index) * width + (active ? mx : 0);
        const scale = active ? 1 - distance / width / 2 : 1;
        return {
          x,
          scale,
          display: 'block',
          config: config.default,
          transform: `translateX(${x}px) scale(${scale})`,
        };
      });
    },
    { axis: 'x' }
  );

  const nextSlide = (e) => {
    e.stopPropagation();
    setIndex((i) => clamp(i + 1, 0, images.length - 1));
  };

  const previousSlide = (e) => {
    e.stopPropagation();
    setIndex((i) => clamp(i - 1, 0, images.length - 1));
  };

  if (images.length === 1) {
    return (
      <>
        <Helmet>
          <style type="text/css">
            {`
            body {
              overflow: hidden;
            }
          `}
          </style>
        </Helmet>
        <ImagePreviewPortal>
          <PreviewContainer onClick={onClose}>
            <IconClose color="white" />
            <PreviewImages>
              <img
                src={images[0].src}
                alt={images[0].name}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              />
            </PreviewImages>
          </PreviewContainer>
        </ImagePreviewPortal>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <style type="text/css">
          {`
          body {
            overflow: hidden;
          }
        `}
        </style>
      </Helmet>
      <ImagePreviewPortal>
        <PreviewContainer>
          <IconClose color="white" />
          <ButtonPrevious onClick={previousSlide} disabled={index === 0}>
            <ArrowLeftIcon color="white" />
          </ButtonPrevious>
          <PreviewImages>
            {draggingAnimationSprings.map(({ display, transform }, i) => {
              const image = images[i];
              return (
                <SlidingImage
                  src={image.src}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  onDragStart={(e) => e.preventDefault()}
                  key={image.name}
                  alt={image.name}
                  {...bind()}
                  style={{ transform, display }}
                />
              );
            })}
          </PreviewImages>
          <ButtonNext
            onClick={nextSlide}
            disabled={index === images.length - 1}
          >
            <ArrowRightIcon color="white" />
          </ButtonNext>
        </PreviewContainer>
      </ImagePreviewPortal>
    </>
  );
};

export { ImagePreview, ImagePreviewContainer };
