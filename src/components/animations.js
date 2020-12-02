import { keyframes } from "styled-components"

const slideInNormalAnimation = keyframes`
  from {
    opacity: 1;
    transform: translate3d(100%,0,0);
  }
  to {
    opacity: 1;
    transform: translate3d(0%,0,0);
  }
`

const slideInReversedAnimation = keyframes`
  from {
    opacity: 1;
    transform: translate3d(-100%,0,0);
  }
  to {
    opacity: 1;
    transform: translate3d(0%,0,0);
  }
`

const slideOutNormalAnimation = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0%,0,0);
  }
  to {
    opacity: 0;
    transform: translate3d(-100%,0,0);
  }
`

const slideOutReversedAnimation = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0%,0,0);
  }
  to {
    opacity: 0;
    transform: translate3d(100%,0,0);
  }
`

export {
  slideInNormalAnimation,
  slideInReversedAnimation,
  slideOutNormalAnimation,
  slideOutReversedAnimation,
}
