import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const Decorations = styled(animated.div).attrs((props) => ({
  style: {
    top: props.top || '0',
    height: props.height || '100%',
    zIndex: props.layer === 'back' ? '-1' : '1',
    pointerEvents: props.layer === 'back' ? 'all' : 'none',
    position: props.position || 'absolute',
  },
}))`
  left: 0;
  width: 100%;
`;

const GeometricObject = styled.div.attrs((props) => ({
  style: {
    position: props.sticky ? 'sticky' : props.position || 'absolute',
    width: props.size,
    height: props.size,
    top: props.top,
    left: props.left,
    right: props.right,
    bottom: props.bottom,
    background: props.background,
    boxShadow: `0px 0px 20px 0px ${props.background}`,
  },
}))`
  opacity: 0.9;
`;

const Square = styled(GeometricObject)`
  ${(props) => css`
    border-radius: ${props.radius || '15px'};
  `}
`;

const Circle = styled(GeometricObject)`
  border-radius: ${(props) => props.radius || '50%'};
`;

export { Decorations, Square, Circle };

export default Decorations;
