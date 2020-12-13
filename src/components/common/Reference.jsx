import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const styles = css`
  transition: background ease 0.2s;
  text-decoration: none;
  color: black;
  font-weight: ${(props) => (props.bold ? 'bold' : 500)};
  padding: 2px;
  ${(props) =>
    props.theme.marker
      ? `background: linear-gradient(to bottom, transparent 0%, transparent 60%, ${props.theme.marker} 60%, ${props.theme.marker} 100%);`
      : 'background: linear-gradient(to bottom, transparent 0%, transparent 60%, var(--marker-blue) 60%,  var(--marker-blue) 100%);'}

  &:visited {
    color: black;
    font-weight: ${(props) => (props.bold ? 'bold' : 500)};
    padding: 2px;
    ${(props) =>
      props.theme.marker
        ? `background: linear-gradient(to bottom, transparent 0%, transparent 60%, ${props.theme.marker} 60%, ${props.theme.marker} 100%);`
        : 'background: linear-gradient(to bottom, transparent 0%, transparent 60%, var(--marker-blue) 60%,  var(--marker-blue) 100%);'}
  }

  &:hover,
  &:focus {
    background: ${(props) =>
      props.theme.marker ? `${props.theme.marker}` : 'var(--marker-blue)'};
  }
`;

const StyledReference = styled.a`
  ${styles}
`;

const StyledLink = styled(Link)`
  ${styles}
`;

const Reference = ({
  className,
  href,
  onClick,
  newTab,
  bold,
  children,
  ...rest
}) => {
  const additionalProps = newTab
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
  return (
    <StyledReference
      className={className}
      bold={bold}
      onClick={onClick}
      href={href}
      {...rest}
      {...additionalProps}
    >
      {children}
    </StyledReference>
  );
};

Reference.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  bold: PropTypes.bool,
};

export { Reference, StyledLink as Link, styles };
