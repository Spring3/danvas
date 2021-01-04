import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  ${(props) => css`
    flex-direction: ${props.direction};
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    flex-grow: ${props.flexGrow};
    flex-wrap: ${props.flexWrap};

    & > *:not(:last-child) {
      ${props.direction === 'column'
        ? css`
          padding-bottom: ${props.gap};
        `
        : css`
          padding-right: ${props.gap};
        `
      };
    }
  `}
`;

const Flex = ({
  children,
  direction,
  gap,
  id,
  justifyContent,
  alignItems,
  flexGrow,
  flexWrap,
  className,
}) => (
  <FlexContainer
    id={id}
    direction={direction}
    gap={gap}
    justifyContent={justifyContent}
    alignItems={alignItems}
    flexGrow={flexGrow}
    flexWrap={flexWrap}
    className={className}
  >
    {children}
  </FlexContainer>
);

Flex.propTypes = {
  id: PropTypes.string,
  flexGrow: PropTypes.string,
  direction: PropTypes.oneOf([
    'row',
    'column',
    'row-reverse',
    'column-reverse',
  ]),
  gap: PropTypes.string,
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  alignItems: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  flexWrap: PropTypes.oneOf(['wrap', 'nowrap']),
};

Flex.defaultProps = {
  flexGrow: '0',
  direction: 'row',
  gap: '0px',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
};

export { Flex };
