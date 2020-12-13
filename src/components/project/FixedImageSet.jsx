import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';

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
`;

const Placeholder = styled.div`
  height: ${(props) => props.height}px;
  background-attachment: fixed;
  background-position: 86% ${(props) => props.verticalPosition}px;
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
  const { height } = useWindowSize();

  if (!images || !images.length) {
    return null;
  }

  const marginTop = height * 0.16;
  const maxHeight = height - marginTop;

  if (images.length === 1) {
    return <NormalImage src={images[0].src} height={maxHeight} />;
  }

  return images.map((image) => {
    const scaledWidth = image.presentationWidth / 2; // because background-size: 50%
    const scaledHeight = scaledWidth / image.aspectRatio;
    return (
      <Fragment key={image.name}>
        <FixedImage
          verticalPosition={marginTop}
          height={scaledHeight}
          id={image.name}
          key={image.name}
          src={image.src}
        />
        <Placeholder verticalPosition={marginTop} height={scaledHeight} />
      </Fragment>
    )
  });
};

export { FixedImageSet };
