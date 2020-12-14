import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';

const FixedImage = styled.div.attrs((props) => ({
  style: {
    backgroundImage: `url("${props.src}")`,
    height: `${props.scaledHeight}px`,
    backgroundPosition: `${props.horizontalPosition}px ${props.verticalPosition}px`,
    backgroundSize: `${props.imageWidth}% auto`,
  },
}))`
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: sticky;
  top: 16%;
`;

const Placeholder = styled.div.attrs((props) => ({
  style: {
    backgroundImage: `url("${props.src}")`,
    height: `${props.scaledHeight * 2}px`,
    backgroundPosition: `${props.horizontalPosition}px ${props.verticalPosition}px`,
    backgroundSize: `${props.imageWidth}% auto`,
  },
}))`
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: sticky;
  top: 16%;
`;

const NormalImage = styled.div.attrs((props) => ({
  style: {
    backgroundImage: `url("${props.src}")`,
  },
}))`
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
  const marginTop = height * 0.16;

  if (images.length === 1) {
    return <NormalImage src={images[0].src} />;
  }

  return images.map((image) => {
    const scaledHeight = Number(imageAreaWidth / image.aspectRatio).toFixed(2);
    const horizontalPosition = Number(width - imageAreaWidth - padding).toFixed(
      2
    );
    const verticalPosition = Number(height - (height - marginTop)).toFixed(2);
    const imageWidthPercent = Number((imageAreaWidth / width) * 100).toFixed(2);
    return (
      <Fragment key={image.name}>
        <FixedImage
          horizontalPosition={horizontalPosition}
          imageWidth={imageWidthPercent}
          verticalPosition={verticalPosition}
          scaledHeight={scaledHeight}
          id={image.name}
          src={image.src}
        />
        <Placeholder
          horizontalPosition={horizontalPosition}
          imageWidth={imageWidthPercent}
          verticalPosition={verticalPosition}
          scaledHeight={scaledHeight}
          id={image.name}
          src={image.src}
        />
      </Fragment>
    );
  });
};

export { FixedImageSet };
