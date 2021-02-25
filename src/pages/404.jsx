import React from 'react';
import styled from 'styled-components';
import { GlobalStyles, OGP } from '../components/GlobalStyle';
import { Square, Decorations } from '../components/common/Decorations';
import { Flex } from '../components/common/Flex';

const RelativeDecorations = styled(Decorations)`
  position: relative !important;
  height: 300px !important;
  width: ${(props) => props.width} !important;
`;

const NotFoundPage = () => {
  const onClick = () => {};

  const radius = 5;
  const size = 35;

  const width = (size + radius) * 4;

  const radiusPx = `${radius}px`;
  const sizePx = `${size}px`;

  return (
    <>
      <GlobalStyles />
      <OGP
        title="404 - Page Not Found"
        description="It looks like you have discovered the edge"
      />
      <Flex>
        <RelativeDecorations width={`${width}px`}>
          <Square
            left="50%"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="calc(50% - 40px)"
            top="40px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="calc(50% - 80px)"
            top="80px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="calc(50% - 120px)"
            top="120px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="calc(50% - 80px)"
            top="120px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="calc(50% - 40px)"
            top="120px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="50%"
            top="40px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="50%"
            top="80px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="50%"
            top="120px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="50%"
            top="160px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="50%"
            top="200px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="50%"
            top="240px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
        </RelativeDecorations>
        <RelativeDecorations width={`${width}px`}>
          <Square size={sizePx} radius={radiusPx} background="#9DB09C" />
          <Square
            left="40px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="80px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="120px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="120px"
            top="40px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="120px"
            top="80px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="120px"
            top="120px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="120px"
            top="160px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="120px"
            top="200px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="120px"
            top="240px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="80px"
            top="240px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="40px"
            top="240px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            top="40px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            top="80px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            top="120px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            top="160px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            top="200px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            top="240px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
        </RelativeDecorations>
        <RelativeDecorations width={`${width}px`}>
          <Square
            left="50%"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="calc(50% - 40px)"
            top="40px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="calc(50% - 80px)"
            top="80px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="calc(50% - 120px)"
            top="120px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="calc(50% - 80px)"
            top="120px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="calc(50% - 40px)"
            top="120px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="50%"
            top="40px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="50%"
            top="80px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="50%"
            top="120px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="50%"
            top="160px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="50%"
            top="200px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
          <Square
            left="50%"
            top="240px"
            size={sizePx}
            radius={radiusPx}
            background="#9DB09C"
          />
        </RelativeDecorations>
      </Flex>
    </>
  );
};

export default NotFoundPage;
