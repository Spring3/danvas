import React, { useRef } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { useImagePreview } from '../../context/ImagePreviewContext';
import { LazyImage } from './LazyImage';

const CarouselContainer = styled.div`
  padding-top: ${(props) => (props.isPreview ? '0' : '1.5rem')};
`;

const StyledCarousel = styled(Carousel)`
  box-shadow: 0px 0px 10px 0px #f3f3f3;
  div:first-of-type {
    border-radius: 5px;
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
const ImageCarousel = ({ images }) => {
  const { showImagePreview } = useImagePreview();
  const containerRef = useRef();

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
            <div key={image.name}>
              <LazyImage
                intersectionTriggerRef={containerRef}
                alt={image.name}
                src={image.src}
                placeholder={image.placeholder}
                srcSet={image.srcSet}
                sizes={image.sizes}
              />
            </div>
          ))}
        </StyledCarousel>
      </CarouselContainer>
    </>
  );
};

export { ImageCarousel };
