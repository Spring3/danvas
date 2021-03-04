import React from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';
import { GlobalStyles, OGP } from '../components/GlobalStyle';
import { Square, Circle, Decorations } from '../components/common/Decorations';
import { Flex } from '../components/common/Flex';
import { Link } from '../components/common/Reference';
import { Subheading } from '../components/project/Header';

const RelativeDecorations = styled(Decorations)`
  position: relative !important;
  height: ${(props) => props.height} !important;
  width: ${(props) => props.width} !important;
`;

const FullHeightFlex = styled(Flex)`
  height: 100vh;
`;

const colorTheme = ['#9DB09C', '#EEF0F0', '#D6D9D0', '#B7BDB0'];
const getRandomColor = () => {
  const index = Math.floor(Math.random() * colorTheme.length);
  return colorTheme[index];
};

const NotFoundPage = () => {
  const onClick = () => {};
  const { width: windowWidth } = useWindowSize();

  let radius = 3;
  let size = 15;
  const gap = 5;

  if (windowWidth <= 750) {
    radius = 3;
    size = 15;
  } else if (windowWidth <= 1024) {
    radius = 5;
    size = 20;
  } else {
    radius = 5;
    size = 25;
  }

  const width = (size + gap) * 4;
  const height = (size + gap) * 7;

  const radiusPx = `${radius}px`;
  const sizePx = `${size}px`;

  return (
    <>
      <GlobalStyles />
      <OGP
        title="404 - Page Not Found"
        description="It looks like you have discovered the edge"
      />
      <FullHeightFlex direction="column" justifyContent="center" alignItems="center" gap="2rem" margined>
        <Decorations margined={false} layer="back">
          <Circle left="5%" top="5%" size="300px" radius="80% 75% 85% 90% / 80% 90% 85% 90%" background="#FBC7C3" flat sticky />
          <Circle left="95%" top="95%" size="300px" radius="80% 70% 85% 90% / 80% 90% 80% 90%" background="#D4A6D1" flat sticky />
        </Decorations>
        <Flex justifyContent="center" alignItems="center" gap="2rem" margined>
          <RelativeDecorations height={`${height}px`} width={`${width}px`}>
            <Square
              right="0px"
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right={`${size + gap}px`}
              top={`${size + gap}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right={`${(size + gap) * 2}px`}
              top={`${(size + gap) * 2}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right={`${(size + gap) * 3}px`}
              top={`${(size + gap) * 3}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right={`${(size + gap) * 2}px`}
              top={`${(size + gap) * 3}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right={`${size + gap}px`}
              top={`${(size + gap) * 3}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right="0px"
              top={`${size + gap}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right="0px"
              top={`${(size + gap) * 2}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right="0px"
              top={`${(size + gap) * 3}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right="0px"
              top={`${(size + gap) * 4}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right="0px"
              top={`${(size + gap) * 5}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right="0px"
              top={`${(size + gap) * 6}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
          </RelativeDecorations>
          <RelativeDecorations width={`${width}px`}>
            <Square left={gap * 2} size={sizePx} radius={radiusPx} background={getRandomColor()} />
            <Square
              left={`${(size + gap) + gap * 2}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={`${(size + gap) * 2 + gap * 2}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={`${(size + gap) * 3 + gap * 2}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={`${(size + gap) * 3 + gap * 2}px`}
              top={`${size + gap}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={`${(size + gap) * 3 + gap * 2}px`}
              top={`${(size + gap) * 2}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={`${(size + gap) * 3 + gap * 2}px`}
              top={`${(size + gap) * 3}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={`${(size + gap) * 3 + gap * 2}px`}
              top={`${(size + gap) * 4}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={`${(size + gap) * 3 + gap * 2}px`}
              top={`${(size + gap) * 5}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={`${(size + gap) * 3 + gap * 2}px`}
              top={`${(size + gap) * 6}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={`${(size + gap) * 2 + gap * 2}px`}
              top={`${(size + gap) * 6}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={`${(size + gap) + gap * 2}px`}
              top={`${(size + gap) * 6}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={gap * 2}
              top={`${size + gap}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={gap * 2}
              top={`${(size + gap) * 2}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={gap * 2}
              top={`${(size + gap) * 3}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={gap * 2}
              top={`${(size + gap) * 4}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={gap * 2}
              top={`${(size + gap) * 5}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              left={gap * 2}
              top={`${(size + gap) * 6}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
          </RelativeDecorations>
          <RelativeDecorations width={`${width}px`}>
            <Square
              right="0px"
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right={`${size + gap}px`}
              top={`${size + gap}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right={`${(size + gap) * 2}px`}
              top={`${(size + gap) * 2}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right={`${(size + gap) * 3}px`}
              top={`${(size + gap) * 3}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right={`${(size + gap) * 2}px`}
              top={`${(size + gap) * 3}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right={`${size + gap}px`}
              top={`${(size + gap) * 3}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right="0px"
              top={`${size + gap}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right="0px"
              top={`${(size + gap) * 2}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right="0px"
              top={`${(size + gap) * 3}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right="0px"
              top={`${(size + gap) * 4}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right="0px"
              top={`${(size + gap) * 5}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
            <Square
              right="0px"
              top={`${(size + gap) * 6}px`}
              size={sizePx}
              radius={radiusPx}
              background={getRandomColor()}
              flat
            />
          </RelativeDecorations>
        </Flex>
        <Flex style={{ zIndex: 3 }} direction="column" alignItems="center">
          <Subheading>This page does not exist</Subheading>
          <Link to="/">Back To Main Page</Link>
        </Flex>
      </FullHeightFlex>
    </>
  );
};

export default NotFoundPage;
