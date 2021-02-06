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
          padding-bottom: ${props.margined ? '' : props.gap};
          margin-bottom: ${props.margined ? props.gap : ''};
        `
        : css`
          padding-right: ${props.margined ? '' : props.gap};
          margin-right: ${props.margined ? props.gap : ''};
        `};
    }
  `}
`;

const Flex = ({
  children,
  direction,
  gap,
  margined,
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
    margined={margined}
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
  children: PropTypes.node,
  className: PropTypes.string,
  flexGrow: PropTypes.string,
  margined: PropTypes.bool,
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
  children: null,
  flexGrow: '0',
  className: undefined,
  margined: false,
  id: undefined,
  direction: 'row',
  gap: '0px',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
};

export { Flex };
