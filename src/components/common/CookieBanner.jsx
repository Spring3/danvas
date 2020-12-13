import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import CookieOutlineIcon from 'mdi-react/CookieIcon';
import CaretDownIcon from 'mdi-react/CaretDownOutlineIcon';
import CaretUpIcon from 'mdi-react/CaretUpOutlineIcon';
import { useSpring, animated } from 'react-spring';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import { Button } from './Buttons';
import { Flex } from './Flex';
import { MARKERS } from '../../theme';

const storageKey = 'ga-cookie-conscent';

const CookieBannerContainer = styled.div`
  position: fixed;
  left: 2rem;
  bottom: 2rem;
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

  a: {
    svg: {
      vertical-align: bottom;
    }
  }
`;

const Description = styled(animated.p)`
  max-width: 300px;
  overflow: hidden;
  margin: 0;
  transition: height .4s;
`;

const CookieBanner = () => {
  const [isFullHeight, setFullHeight] = useState(false);
  const decidedAlready = localStorage.getItem(storageKey);

  const descriptionAnimation = useSpring({ maxHeight: isFullHeight ? '100%' : '0px', margin: isFullHeight ? '0px 0px 20px 0px' : '0px 0px 0px 0px' });

  const onAccept = () => {
    localStorage.setItem(storageKey, true);
  };

  const onReject = () => {
    localStorage.setItem(storageKey, false);
  };

  const onCaretClick = (e) => {
    e.preventDefault();
    setFullHeight(!isFullHeight);
  };

  const theme = useMemo(() => ({
    marker: MARKERS.red
  }), []);

  if (decidedAlready === true) {
    initializeAndTrack();
    return null;
  }

  if (decidedAlready === false) {
    return null;
  };

  return (
    <CookieBannerContainer>
      <Flex alignItems='center' justifyContent='space-between'>
        <h3>
          <CookieOutlineIcon size={40} />
          {' '}
          Cookies!
        </h3>
        <a href="" onClick={onCaretClick}>
          { isFullHeight ? <CaretDownIcon /> : <CaretUpIcon /> }
        </a>
      </Flex>
      <Description style={descriptionAnimation}>I use google analytics cookies on this website as a way of seeing if anyone visits it at all.</Description>
      <Flex>
        <Button onClick={onAccept}>Accept</Button>
        <Button onClick={onReject} theme={theme}>Reject</Button>
      </Flex>
    </CookieBannerContainer>
  );
};

export {
  CookieBanner
};
