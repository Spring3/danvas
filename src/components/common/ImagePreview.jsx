import React, {
  useCallback, useEffect, useMemo, useState
} from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import ArrowLeftIcon from 'mdi-react/ArrowLeftThickIcon';
import ArrowRightIcon from 'mdi-react/ArrowRightThickIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import { Helmet } from 'react-helmet';
import { useSprings, animated, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import clamp from 'lodash.clamp';
import { useWindowResize } from '../../hooks/useWindowResize';
import { PreviewButtonNext, PreviewButtonPrevious } from './Buttons';

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
  z-index: 4;
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

const SlidingImage = styled(animated.img)`
  position: absolute;
  transition: opacity 0.3s ease-in-out;
  max-width: 100%;
  max-height: ${(props) => props.maxHeight ? `calc(${props.maxHeight}px - 1rem)` : 'calc(100vh - 1rem)'};
  border-radius: 5px;
  touch-action: pan-y;
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
  const { width, height } = useWindowResize();
  const [index, setIndex] = useState(startIndex);
  const [mousePressed, setMousePressed] = useState(false);

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
        // marking to skip the next onClick on the preview overlay
        setMousePressed(true);
        cancel(newIndex);
      }
      set((i) => {
        if (i < index - 1 || i > index + 1) {
          return { display: 'none' };
        }

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

  const nextSlide = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();

      const isDisabled = index === images.length - 1;
      if (!isDisabled) {
        setIndex(clamp(index + 1, 0, images.length - 1));
      }
    },
    [index, images.length]
  );

  const previousSlide = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      const isDisabled = index === 0;
      if (!isDisabled) {
        setIndex(clamp(index - 1, 0, images.length - 1));
      }
    },
    [index, images.length]
  );

  const interceptEvent = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

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
            <IconClose color="white" onClick={onClose} />
            <PreviewImages>
              <SlidingImage
                maxHeight={height}
                src={images[0].src}
                alt={images[0].name}
                sizes={images[0].sizes}
                srcSet={images[0].srcSet}
                onDragStart={interceptEvent}
                onClick={interceptEvent}
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
        <PreviewContainer
          onClick={() => {
            // this is done because when drag event is cancelled, releasing the mouse triggered this click event and closed the preview
            // this way we skip this one call
            if (!mousePressed) {
              onClose();
            } else {
              setMousePressed(false);
            }
          }}
        >
          <IconClose color="white" onClick={onClose}/>
          <PreviewButtonPrevious onClick={previousSlide} isDisabled={index === 0}>
            <ArrowLeftIcon color="white" />
          </PreviewButtonPrevious>
          <PreviewImages>
            {draggingAnimationSprings.map(({ display, transform }, i) => {
              const image = images[i];
              return (
                <SlidingImage
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes={image.sizes}
                  maxHeight={height}
                  onClick={interceptEvent}
                  onDragStart={interceptEvent}
                  key={image.name}
                  alt={image.name}
                  {...bind()}
                  style={{ transform, display }}
                />
              );
            })}
          </PreviewImages>
          <PreviewButtonNext
            onClick={nextSlide}
            isDisabled={index === images.length - 1}
          >
            <ArrowRightIcon color="white" />
          </PreviewButtonNext>
        </PreviewContainer>
      </ImagePreviewPortal>
    </>
  );
};

export { ImagePreview, ImagePreviewContainer };
