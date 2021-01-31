import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';
import { useImagePreview } from '../../context/ImagePreviewContext';

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
    height: `${props.scaledHeight}px`,
  },
}))`
  background-repeat: no-repeat;
  background-size: contain;
`;

const FixedImageSet = ({ images }) => {
  const { height, width } = useWindowSize();
  const { showImagePreview } = useImagePreview();

  if (!images || !images.length) {
    return null;
  }

  // 6%
  const padding = 0.06 * width;
  const imageAreaWidth = (width - padding * 2) * 0.59;
  const marginTop = height * 0.16;

  if (images.length === 1) {
    const image = images[0];
    const scaledHeight = Number(imageAreaWidth / image.aspectRatio).toFixed(2);
    return <NormalImage src={image.src} scaledHeight={scaledHeight} />;
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
          onClick={() => showImagePreview(images)}
        />
        <Placeholder
          horizontalPosition={horizontalPosition}
          imageWidth={imageWidthPercent}
          verticalPosition={verticalPosition}
          scaledHeight={scaledHeight}
          onClick={() => showImagePreview(images)}
          id={image.name}
        />
      </Fragment>
    );
  });
};

export { FixedImageSet };
