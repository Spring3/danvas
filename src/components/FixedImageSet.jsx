import React, { useMemo } from "react"
import styled, { css } from "styled-components"

import { useImageScrollTracker } from "../hooks/useImageScrollTracker"

const FixedImage = styled.div`
  background-image: url("${(props) => props.src}");
  height: 60vh;
  background-attachment: fixed;
  background-position: 85% 41%;
  background-repeat: no-repeat;
  background-size: 50% auto;
  position: sticky;
  top: 16%;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

  ${(props) =>
    props.forceVisibility &&
    css`
      &:first-child {
        visibility: visible !important;
      }
    `}
`

const Placeholder = styled(FixedImage)`
  background: transparent;
`

const NormalImage = styled.div`
  background-image: url("${(props) => props.src}");
  height: 60vh;
  background-position: 85% center;
  background-repeat: no-repeat;
  background-size: contain;
`

const FixedImageSet = ({ images }) => {
  const anchors = useMemo(() => images.map((image) => `#${image.name}`), [
    images,
  ])
  const [visibleAnchors, scrollingDown] = useImageScrollTracker(anchors)

  if (!images || !images.length) {
    return null
  }

  if (images.length === 1) {
    return <NormalImage src={images[0].childImageSharp.fluid.src} />
  }

  return images.map((image) => (
    <>
      <FixedImage
        visible={visibleAnchors.includes(`#${image.name}`)}
        // isFirstImageSlideWhenScrollingUp
        forceVisibility={
          !scrollingDown &&
          visibleAnchors[0] === `#${image.name}` &&
          visibleAnchors[1] === undefined
        }
        id={image.name}
        key={image.name}
        src={image.childImageSharp.fluid.src}
      />
      <Placeholder />
    </>
  ))
}

export { FixedImageSet }
