import React, { Fragment } from "react"
import styled from "styled-components"
import { useWindowResize } from "../../hooks/useWindowResize"

// background-size: ${props => props.size}% auto;

const FixedImage = styled.div`
  background-image: url("${(props) => props.src}");
  height: ${(props) => props.height}px;
  background-attachment: fixed;
  background-position: 86% ${(props) => props.verticalPosition}px;
  background-repeat: no-repeat;
  background-size: 50% auto;
  position: sticky;
  background-color: white;
  top: 16%;
`

const Placeholder = styled.div`
  height: ${(props) => props.height}px;
  background-attachment: fixed;
  background-position: 86% ${(props) => props.verticalPosition}px;
  background-repeat: no-repeat;
  background-size: 50% auto;
  position: sticky;
  top: 16%;
`

const NormalImage = styled.div`
  background-image: url("${(props) => props.src}");
  height: 66vh;
  background-position: 85% center;
  background-repeat: no-repeat;
  background-size: contain;
`

const FixedImageSet = ({ images }) => {
  const { height } = useWindowResize()

  if (!images || !images.length) {
    return null
  }

  if (images.length === 1) {
    return <NormalImage src={images[0].src} height={maxHeight} />
  }

  const marginTop = height * 0.16
  const maxHeight = height - marginTop

  return images.map((image) => {
    return (
      <Fragment key={image.name}>
        <FixedImage
          verticalPosition={marginTop}
          height={maxHeight}
          id={image.name}
          key={image.name}
          src={image.src}
        />
        <Placeholder verticalPosition={marginTop} height={maxHeight} />
      </Fragment>
    )
  })
}

export { FixedImageSet }
