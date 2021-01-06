import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

const OvalMesh = styled.div`
  position: absolute;
  z-index: -1;
  opacity: 0.3;
  ${(props) => css`
    width: ${props.width};
    height: ${props.height};
    top: ${props.top};
    left: ${props.left};
    background: ${props.theme.marker};
  `}
`;

const Oval = ({
  width, height, top, left, background
}) => {
  // from 30 to 50
  const rnd = (from = 30, to = 80) => Math.random() * (to - from) + from;

  const initial = useMemo(
    () => ({
      borderRadius: `${rnd()}% ${rnd()}% ${rnd()}% ${rnd()}% / ${rnd()}% ${rnd()}% ${rnd()}% ${rnd()}%`,
    }),
    []
  );

  return (
    <OvalMesh
      style={initial}
      width={width}
      height={height}
      top={top}
      left={left}
      background={background}
    />
  );
};

export { Oval };
