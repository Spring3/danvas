import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

import { useAnchorTracker } from '../../hooks/useAnchorTracker';
import { Link, Reference } from './Reference';
import { slugToTitle } from '../../utils';

const MenuContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: sticky;
  bottom: 3rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  small {
    color: var(--text-color-secondary);
  }

  @media (max-width: 750px) {
    gap: 0.5rem;
    position: static;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }
`;

const SlugMenuContainer = styled(MenuContainer)`
  position: fixed;

  @media (max-width: 750px) {
    gap: 0.5rem;
    position: static;
    flex-direction: column;
    align-items: center;
  }
`;

const styles = css`
  background: transparent;
  color: var(--text-color-secondary);
  border-bottom: 2px solid transparent;
  padding: 0px 0.5rem;
  font-size: 0.8rem;
  text-decoration: none;

  &:visited {
    background: transparent;
    color: var(--text-color-secondary);
    border-bottom: 2px solid transparent;
    padding: 0px 0.5rem;
    font-size: 0.8rem;
    text-decoration: none;
  }

  &:hover,
  &:focus {
    ${(props) => css`
      border-bottom: 2px solid ${props.theme.marker || 'var(--marker-blue)'};
      background: transparent;
    `}
  }
`;

const activeStyles = css`
  transition: all ease 0.2s;
  background: transparent;
  color: var(--text-color-secondary);
  border-bottom: 2px solid transparent;
  padding: 0px 0.5rem;
  font-size: 0.8rem;
  text-decoration: none;

  font-weight: bold;
  color: var(--text-color-primary) !important;
  background: ${(props) => props.theme.marker || 'var(--marker-blue)'};

  &:visited {
    background: transparent;
    color: var(--text-color-secondary);
    border-bottom: 2px solid transparent;
    padding: 0px 0.5rem;
    font-size: 0.8rem;
    text-decoration: none;

    font-weight: bold;
    color: var(--text-color-primary) !important;

    background: ${(props) => props.theme.marker || 'var(--marker-blue)'};
  }

  &:hover,
  &:focus {
    border-bottom: 2px solid
      ${(props) => props.theme.marker || 'var(--marker-blue)'};
    background: ${(props) =>
      props.active
        ? props.theme.marker || 'var(--marker-blue)'
        : 'transparent'};
  }
`;

const AnchorMenuItem = styled(Reference)`
  ${styles}
  display: inline-flex;
`;

const ActiveAnchorMenuItem = styled(Reference)`
  ${activeStyles};
  display: inline-flex;
`;

const SlugMenuItem = styled(Link)`
  ${styles}

  &:visited,
  &:focus,
  &:hover {
    border-radius: 0px;
  }
`;

const ActiveSlugMenuItem = styled(Link)`
  ${activeStyles}

  border-radius: 3px;

  &:visited,
  &:focus,
  &:hover {
    border-radius: 0px;
  }
`;

const AnchorListMenu = ({ nodes, onClick }) => {
  const anchors = useMemo(() => nodes.map((node) => node.anchor), []);
  const activeAnchor = useAnchorTracker(anchors);
  const menuItems = useMemo(
    () =>
      nodes.map((node) => {
        const MenuItem =
          activeAnchor === node.anchor ? ActiveAnchorMenuItem : AnchorMenuItem;
        return (
          <MenuItem
            onClick={onClick}
            href={node.anchor}
            data-anchor={node.anchor}
            key={node.anchor}
          >
            {node.name}
          </MenuItem>
        );
      }),
    [activeAnchor]
  );

  return (
    <MenuContainer>
      <small>Projects:&nbsp;</small>
      {menuItems}
      <AnchorMenuItem href="/cv" key="cv">
        CV
      </AnchorMenuItem>
    </MenuContainer>
  );
};

const SlugListMenu = ({ slugs, active, onClick }) => (
  <SlugMenuContainer>
    <small>Projects:&nbsp;</small>
    {slugs.map((slug) => {
      const MenuItem = active === slug ? ActiveSlugMenuItem : SlugMenuItem;
      return (
        <li key={slug}>
          <MenuItem onClick={onClick} to={slug}>
            {slugToTitle(slug)}
          </MenuItem>
        </li>
      );
    })}
    <li>
      <SlugMenuItem onClick={onClick} to="/cv" key="cv">
        CV
      </SlugMenuItem>
    </li>
  </SlugMenuContainer>
);

export { AnchorListMenu, SlugListMenu };
