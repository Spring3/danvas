import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';

const FixedImage = styled.div`
  background-image: url("${(props) => props.src}");
  height: ${(props) => props.height}px;
  background-attachment: fixed;
  background-position: ${(props) => `${props.horizontalPosition}px ${props.verticalPosition}px`};
  background-repeat: no-repeat;
  background-size: ${(props) => `${props.imageWidth}px auto`};
  position: sticky;
  background-color: white;
  top: 16%;
`;

const Placeholder = styled.div`
  height: ${(props) => props.height}px;
  background-attachment: fixed;
  background-position: 86% center;
  background-repeat: no-repeat;
  background-size: 50% auto;
  position: sticky;
  top: 16%;
`;

const NormalImage = styled.div`
  background-image: url("${(props) => props.src}");
  height: 66vh;
  background-position: 86% center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const FixedImageSet = ({ images }) => {
  const { height, width } = useWindowSize();

  if (!images || !images.length) {
    return null;
  }

  // 6%
  const padding = 0.06 * width;
  const imageAreaWidth = (width - padding * 2) * 0.59;
  console.log('imageAreaWidth', imageAreaWidth);
  const marginTop = height * 0.16;
  const maxHeight = height - marginTop;

  if (images.length === 1) {
    return <NormalImage src={images[0].src} height={maxHeight} />;
  }

  return images.map((image) => {
    const scaledHeight = imageAreaWidth / image.aspectRatio;
    const horizontalPosition = width - imageAreaWidth - padding;
    const verticalPosition = height - (height - marginTop);
    return (
      <Fragment key={image.name}>
        <FixedImage
          horizontalPosition={horizontalPosition}
          imageWidth={imageAreaWidth}
          verticalPosition={verticalPosition}
          height={scaledHeight}
          id={image.name}
          key={image.name}
          src={image.src}
        />
        <Placeholder verticalPosition={marginTop} height={scaledHeight} />
      </Fragment>
    );
  });
};

export { FixedImageSet };
