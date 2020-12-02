import React, { useEffect, useMemo, useState, useCallback } from "react"
import { createPortal } from "react-dom"
import styled, { css } from "styled-components"
import ArrowLeftIcon from "mdi-react/ArrowLeftThickIcon"
import ArrowRightIcon from "mdi-react/ArrowRightThickIcon"
import CloseIcon from "mdi-react/CloseIcon"
import {
  slideInNormalAnimation,
  slideInReversedAnimation,
  slideOutNormalAnimation,
  slideOutReversedAnimation,
} from "./animations"

const ImagePreviewPortal = ({ children }) => {
  const container = useMemo(() => document.createElement("div"), [])

  useEffect(() => {
    const root = document.getElementById("image-preview-portal")

    root.appendChild(container)

    return () => root.removeChild(container)
  }, [container])

  return createPortal(children, container)
}

const ImagePreviewContainer = ({ children }) => {
  return <div id="image-preview-portal">{children}</div>
}

const PreviewContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`

const PreviewImages = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: calc(100% - 200px);
  margin: 0 auto;

  @media (max-width: 700px) {
    max-width: 95%;
  }
`

const PreviewButton = styled.button`
  z-index: 2;
  width: 100px;
  height: 100px;
  background: transparent;
  border: none;

  &:focus {
    outline: none;
  }

  cursor: pointer;

  @media (max-width: 700px) {
    display: none;
  }
`

const SlidingImage = styled.img`
  position: absolute;
  transition: opacity 0.3s ease-in-out;
  animation-fill-mode: forwards;
  animation-duration: 0.3s;
  animation-timing-function: ease;
  max-width: 100%;
  ${({ direction, active }) =>
    active
      ? css`
          animation-name: ${direction === "normal"
            ? slideInNormalAnimation
            : slideInReversedAnimation};
        `
      : css`
          animation-name: ${direction === "normal"
            ? slideOutNormalAnimation
            : slideOutReversedAnimation};
        `}
`

const IconClose = styled(CloseIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`

const ImagePreview = ({ images, startIndex = 0, onClose }) => {
  const [position, setPosition] = useState({
    index: startIndex,
    order: "normal",
  })

  const nextSlide = useCallback(
    (e) => {
      e.stopPropagation()
      setPosition((position) => ({
        index: (position.index + 1) % images.length,
        order: "normal",
      }))
    },
    [images, setPosition]
  )

  const previousSlide = useCallback(
    (e) => {
      e.stopPropagation()
      setPosition((position) => ({
        index: (position.index - 1 + images.length) % images.length,
        order: "reversed",
      }))
    },
    [images, setPosition]
  )

  if (images.length === 1) {
    return (
      <ImagePreviewPortal>
        <PreviewContainer onClick={onClose}>
          <IconClose color="white" />
          <PreviewImages>
            <img src={images[0].src} />
          </PreviewImages>
        </PreviewContainer>
      </ImagePreviewPortal>
    )
  }

  return (
    <ImagePreviewPortal>
      <PreviewContainer onClick={onClose}>
        <IconClose color="white" />
        <PreviewButton onClick={previousSlide}>
          <ArrowLeftIcon color="white" />
        </PreviewButton>
        <PreviewImages>
          {images.map((image, i) => (
            <SlidingImage
              src={image.src}
              key={i}
              active={position.index === i}
              direction={position.order}
            />
          ))}
        </PreviewImages>
        <PreviewButton onClick={nextSlide}>
          <ArrowRightIcon color="white" />
        </PreviewButton>
      </PreviewContainer>
    </ImagePreviewPortal>
  )
}

export { ImagePreview, ImagePreviewContainer }
