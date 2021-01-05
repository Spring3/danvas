import React, { useEffect, useMemo, useState, memo } from 'react';
import styled from 'styled-components';
import CookieOutlineIcon from 'mdi-react/CookieIcon';
import CaretDownIcon from 'mdi-react/CaretDownOutlineIcon';
import CaretUpIcon from 'mdi-react/CaretUpOutlineIcon';
import { useSpring, animated } from 'react-spring';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import { useTimeout, useTimeoutFn, useWindowSize } from 'react-use';
import { Button, FlatButton } from './Buttons';
import { Flex } from './Flex';
import { MARKERS } from '../../theme';
import { Reference } from './Reference';

const storageKey = 'danv-ga-cookie-conscent';

const CookieBannerContainer = styled(animated.div)`
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  background: white;
  box-shadow: 0px 0px 5px lightgrey;
  padding: 1.5rem;
  border-radius: 5px;
  z-index: 4;
  width: 300px;
  max-width: 50%;

  h3 {
    margin-top: 0px;
    svg {
      vertical-align: bottom;
    }
  }

  a {
    svg: {
      vertical-align: bottom;
    }
  }

  @media (min-width: 750px) {
    left: 2rem;
    bottom: 2rem;
  }
`;

const Description = styled(animated.div)`
  max-width: 300px;
  overflow: hidden;
  overflow-y: scroll;
  margin: 0;
  transition: height 0.4s;

  a {
    margin-bottom: 1rem;
  }
`;

const CookieBanner = memo(() => {
  const [isExpanded, setExpanded] = useState(false);
  const { width } = useWindowSize();
  const [isReady] = useTimeout(3000);
  const [, cancelExpand] = useTimeoutFn(() => setExpanded(true), 4500);
  const [, cancelShrink] = useTimeoutFn(() => setExpanded(false), 9500);

  const [conscentRequired, setConscentRequired] = useState(
    sessionStorage.getItem(storageKey) === null
  );

  const [introAnimation, setIntoAnimation] = useSpring(() => ({
    left: '-50rem',
  }));

  const descriptionAnimation = useSpring({
    maxHeight: isExpanded ? '200%' : '0px',
    margin: isExpanded ? '0px 0px 20px 0px' : '0px 0px 0px 0px',
  });

  const onAccept = () => {
    sessionStorage.setItem(storageKey, true);
    initializeAndTrack();
    setConscentRequired(false);
    setIntoAnimation({ left: '-50rem' });
  };

  const onReject = () => {
    sessionStorage.setItem(storageKey, false);
    setConscentRequired(false);
    setIntoAnimation({ left: '-50rem' });
  };

  const onCaretClick = (e) => {
    e.preventDefault();
    setExpanded(!isExpanded);
  };

  const theme = useMemo(
    () => ({
      marker: MARKERS.red,
    }),
    []
  );

  const canAnimate = isReady();

  useEffect(() => {
    const decisionMade = sessionStorage.getItem(storageKey);

    if (conscentRequired && canAnimate) {
      const distanceFromTheBorder = width >= 750 ? '2rem' : '1rem';
      setIntoAnimation({ left: distanceFromTheBorder });
    } else if (decisionMade === 'true') {
      initializeAndTrack();
    }
  }, [conscentRequired, width, canAnimate]);

  useEffect(
    () => () => {
      cancelExpand();
      cancelShrink();
    },
    []
  );

  return (
    <CookieBannerContainer style={introAnimation}>
      <Flex alignItems="center" justifyContent="space-between">
        <h3>
          <CookieOutlineIcon size={40} color="#875A34" /> Cookies!
        </h3>
        <FlatButton href="" onClick={onCaretClick}>
          {isExpanded ? <CaretDownIcon /> : <CaretUpIcon />}
        </FlatButton>
      </Flex>
      <Description style={descriptionAnimation}>
        <p>
          I use anonymised google analytics cookies on this website as a way of
          seeing if anyone visits it at all.
        </p>
        <Reference
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener,noreferrer"
        >
          Google Privacy & Terms
        </Reference>
      </Description>
      <Flex>
        <Button onClick={onAccept}>Accept</Button>
        <Button onClick={onReject} theme={theme}>
          Reject
        </Button>
      </Flex>
    </CookieBannerContainer>
  );
});

CookieBanner.displayName = 'CookieBanner';

export { CookieBanner };
