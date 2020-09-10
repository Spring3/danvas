import React from "react"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"

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
`

const ImageCarousel = ({ images }) => {
  return (
    <div>
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
              src={image.childImageSharp.fluid.src}
              srcSet={image.childImageSharp.fluid.srcSet}
              sizes={image.childImageSharp.fluid.sizes}
            />
          </div>
        ))}
      </StyledCarousel>
    </div>
  )
}

export { ImageCarousel }
