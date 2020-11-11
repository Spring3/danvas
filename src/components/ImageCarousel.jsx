import React from "react"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"

const CarouselContainer = styled.div`
  padding-top: 1.5rem;
`

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
`

const ImageCarousel = ({ images }) => {
  return (
    <CarouselContainer>
      <StyledCarousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={true}
      >
        {images.map((image, i) => (
          <div key={i}>
            <img
              alt={image.name}
              src={image.src}
              srcSet={image.srcSet}
              sizes={image.sizes}
            />
          </div>
        ))}
      </StyledCarousel>
    </CarouselContainer>
  )
}

export { ImageCarousel }
