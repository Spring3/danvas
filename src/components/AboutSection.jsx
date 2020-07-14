import React from "react"
import styled, { keyframes } from "styled-components"
import { Animated } from "react-animated-css"
import ArrowDownIcon from "mdi-react/ArrowDownIcon"

import SocialButtons from "./SocialButtons"

const ContentPanel = styled.div`
  @media (min-width: 750px) {
    font-size: 1.8rem;
    max-width: 35em;
    padding: 2rem;
  }

  @media (orientation: landscape) and (min-width: 750px) and (max-width: 900px),
    (max-width: 750px) {
    max-width: 100%;
    font-size: 1rem;

    h1 {
      font-size: 1.6rem;
    }
  }

  box-sizing: border-box;
  text-align: justify;
  color: var(--text-color-primary);
  border-radius: var(--border-radius);

  div {
    em {
      font-style: normal;
      font-weight: bold;
      background: var(--marker-green);
    }

    strong {
      background: var(--marker-yellow);
    }
  }

  span,
  p:last-child {
    color: var(--text-color-secondary);
    font-size: smaller;
  }
`

const InlinedSocialButtons = styled(SocialButtons)`
  display: inline-block;
  margin: 0px;
`

const verticalSlideAnimation = keyframes`
  0% {
    transform: translateY(0rem);
  }

  10% {
    transform: translateY(1rem);
  }

  20% {
    transform: translateY(0rem);
  }
`

const ScrollDownSign = styled.div`
  text-align: center;
  position: absolute;
  bottom: 1rem;
  left: 48%;
  div {
    svg {
      vertical-align: middle;
      animation: ${verticalSlideAnimation} ease-in 3s infinite;
      animation-delay: 4s;
      width: 3rem;
      height: 3rem;

      @media (orientation: landscape) and (min-width: 750px) and (max-width: 900px),
        (max-width: 750px) {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`

export default ({ children }) => (
  <Animated animationIn="fadeIn" animationOut="fadeOut">
    <ContentPanel>
      <h1>Hello and Welcome!</h1>
      {children}
      <InlinedSocialButtons />
    </ContentPanel>

    <ScrollDownSign>
      <Animated
        animationIn="fadeInDown"
        animationOut="fadeOutUp"
        animationInDelay={1500}
        animationInDuration={500}
      >
        <small>Scroll</small>
      </Animated>
      <Animated
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        animationInDelay={1000}
        animationInDuration={500}
      >
        <ArrowDownIcon />
      </Animated>
    </ScrollDownSign>
  </Animated>
)
