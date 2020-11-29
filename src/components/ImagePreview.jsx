import React, { useEffect, useMemo } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { useWindowResize } from "../hooks/useWindowResize"

const PreviewContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

const ImagePreview = ({ children }) => {
  const container = useMemo(() => document.createElement("div"), [])

  useEffect(() => {
    const root = document.getElementById("image-preview-portal")

    root.appendChild(container)

    return () => root.removeChild(container)
  }, [container])

  return createPortal(children, container)
}

const StyledImagePreviewPortal = styled.div`
  position: absolute;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`

const ImagePreviewPortal = ({ children }) => {
  const { width, height } = useWindowResize()
  console.log("height", height)
  return (
    <StyledImagePreviewPortal
      id="image-preview-portal"
      width={width}
      height={height}
    >
      {children}
    </StyledImagePreviewPortal>
  )
}

export { ImagePreview, PreviewContainer, ImagePreviewPortal }
