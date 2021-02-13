import React from 'react';
import styled from 'styled-components';
import { animated, config, useSpring } from 'react-spring';

import { Header } from '../common/Headers';
import { SocialButtons } from '../common/SocialButtons';
import { Flex } from '../common/Flex';
import { Square, Decorations } from '../common/Decorations';

const HugeHeader = styled(Header)`
  font-size: 2.5rem;
  margin-bottom: .25rem;
`;

const ContentPanel = styled(Flex)`
  box-sizing: border-box;
  text-align: justify;
  color: var(--text-color-primary);
  border-radius: var(--border-radius);
  min-height: 100vh;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 750px) {
    width: 800px;
  }

  div {
    line-height: 1.7;
  }
`;

const animationRules = {
  immediate: false,
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  },
  config: config.slow
};

const AboutSection = ({ children }) => {
  const springAnimation = useSpring({
    ...animationRules,
    delay: 1000
  });

  const headerAnimation = useSpring({
    ...animationRules,
    delay: 500
  });
  return (
    <ContentPanel direction="column" justifyContent="center">
      <Decorations layer="back">
        <Square top="1.7rem" left="6.5rem" background="#FBD3C4" size="53px" />
        <Square top="1rem" left="1rem" background="#BED5AE" size="75px" />
        <Square top="6.5rem" left="1.25rem" background="#FBBC58" size="65px" />
      </Decorations>
      <Decorations layer="front">
        <Square bottom="1rem" right="1rem" background="#F57B51" size="65px" />
        <Square
          bottom="calc(65px + 2rem)"
          right="1.4rem"
          background="#BED5AE"
          size="55px"
        />
        <Square
          bottom="1rem"
          right="calc(65px + 2rem)"
          background="#FBD3C4"
          size="60px"
        />
        <Square
          bottom="1rem"
          right="calc(65px + 60px + 3rem)"
          background="#FBBC58"
          size="50px"
        />
      </Decorations>
      <animated.div style={headerAnimation}>
        <HugeHeader>Hello and Welcome!</HugeHeader>
      </animated.div>
      <animated.div style={springAnimation}>
        {children}
        <SocialButtons />
      </animated.div>
    </ContentPanel>
  );
};

export { AboutSection };
