import React, { useRef } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { useImagePreview } from '../../context/ImagePreviewContext';
import { LazyImage } from './LazyImage';

const CarouselContainer = styled.div`
  padding-top: ${(props) => (props.isPreview ? '0' : '1.5rem')};

  @media (max-width: 750px) {
    padding-top: 0;
  }
`;

const StyledCarousel = styled(Carousel)`
  box-shadow: 0px 0px 10px 0px #f3f3f3;
  div:first-of-type {
    border-radius: 5px;
  }

  .slide {
    background: transparent;
    overflow: hidden;
  }

  .thumbs {
    padding: 0 !important;
  }

  .thumbs-wrapper {
    margin: 20px 0px !important;
  }

  @media (orientation: landscape) and (min-width: 750px) and (max-width: 900px),
    (max-width: 750px) {
    .slider-wrapper {
      max-height: 80vh;
    }
  }
`;

const SingleImage = styled(LazyImage)`
  max-width: 100%;
`;

const ImageCarousel = ({ images }) => {
  const { showImagePreview } = useImagePreview();
  const containerRef = useRef();

  if (!images.length) {
    return null;
  }

  if (images.length === 1) {
    const image = images[0];
    return (
      <SingleImage
        alt={image.name}
        src={image.src}
        placeholder={image.placeholder}
        srcSet={image.srcSet}
        sizes={image.sizes}
        onClick={() => showImagePreview(images)}
      />
    );
  }

  return (
    <>
      <CarouselContainer>
        <StyledCarousel
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop
          interval={5000}
          swipeable
          autoPlay
          dynamicHeight
          onClickItem={(index) => showImagePreview(images, index)}
        >
          {images.map((image) => (
            <LazyImage
              key={image.name}
              intersectionTriggerRef={containerRef}
              alt={image.name}
              src={image.src}
              placeholder={image.placeholder}
              srcSet={image.srcSet}
              sizes={image.sizes}
            />
          ))}
        </StyledCarousel>
      </CarouselContainer>
    </>
  );
};

export { ImageCarousel };
