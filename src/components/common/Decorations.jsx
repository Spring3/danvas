import styled, { css } from 'styled-components';

const Decorations = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  ${(props) => css`
    top: ${props.top || '0'};
    height: ${props.height || '100%'};
    z-index: ${props.layer === 'back' ? '-1' : '1'};
  `}
`;

const GeometricObject = styled.div`
  opacity: .9;

  ${(props) => css`
    position: ${props.sticky ? 'sticky' : 'absolute'};
    width: ${props.size};
    height: ${props.size};
    top: ${props.top};
    left: ${props.left};
    right: ${props.right};
    bottom: ${props.bottom};
    background: ${props.background};
  `}
`;

const Square = styled(GeometricObject)`
  ${(props) => css`
    border-radius: ${props.radius || '15px'};
  `}
`;

const Circle = styled(GeometricObject)`
  border-radius: ${(props) => props.radius || '50%'};
`;

export {
  Decorations,
  Square,
  Circle
};

export default Decorations;
