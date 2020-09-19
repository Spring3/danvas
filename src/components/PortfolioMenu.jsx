import React, { useMemo } from "react"
import styled, { css } from "styled-components"

import { useAnchorTracker } from "../hooks/useAnchorTracker"
import { Link, Reference } from "./Reference"
import { slugToTitle } from "../utils"

const MenuContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: sticky;
  bottom: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  small {
    color: var(--text-color-secondary);
  }

  @media (max-width: 750px) {
    gap: 0.5rem;
    position: static;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
`

const SlugMenuContainer = styled(MenuContainer)`
  position: fixed;

  @media (max-width: 750px) {
    gap: 0.5rem;
    position: static;
    flex-direction: column;
    align-items: center;
  }
`

const styles = css`
  background: transparent;
  color: var(--text-color-secondary);
  border-bottom: 2px solid transparent;
  padding: 0px 0.5rem;
  font-size: 0.8rem;
  text-decoration: none;

  ${(props) =>
    props.active &&
    css`
      font-weight: bold;
      color: var(--text-color-primary) !important;
      background: ${props.theme.marker
        ? props.theme.marker
        : "var(--marker-blue)"};
    `}
  &:visited {
    background: transparent;
    color: var(--text-color-secondary);
    border-bottom: 2px solid transparent;
    padding: 0px 0.5rem;
    font-size: 0.8rem;
    text-decoration: none;

    ${(props) =>
      props.active &&
      css`
        font-weight: bold;
        color: var(--text-color-primary) !important;
        background: ${props.theme.marker
          ? props.theme.marker
          : "var(--marker-blue)"};
      `}
  }

  &:hover,
  &:focus {
    ${(props) => css`
      border-bottom: 2px solid
        ${props.theme.marker ? props.theme.marker : "var(--marker-blue)"};
      background: ${props.active
        ? props.theme.marker
          ? props.theme.marker
          : "var(--marker-blue)"
        : "transparent"};
    `}
  }
`

const AnchorMenuItem = styled(Reference)`
  ${styles}
`

const SlugMenuItem = styled(Link)`
  ${styles}
`

const AnchorListMenu = ({ nodes, onClick }) => {
  const anchors = useMemo(() => nodes.map((node) => node.anchor), [nodes])
  const activeAnchor = useAnchorTracker(anchors)

  return (
    <MenuContainer>
      <small>Projects:&nbsp;</small>
      {nodes.map((node) => (
        <AnchorMenuItem
          onClick={onClick}
          active={activeAnchor === node.anchor}
          href={node.anchor}
          data-anchor={node.anchor}
          key={node.anchor}
        >
          {node.name}
        </AnchorMenuItem>
      ))}
    </MenuContainer>
  )
}

const SlugListMenu = ({ slugs, active, onClick }) => {
  return (
    <SlugMenuContainer>
      <small>Projects:&nbsp;</small>
      {slugs.map((slug) => (
        <li key={slug}>
          <SlugMenuItem onClick={onClick} active={active === slug} to={slug}>
            {slugToTitle(slug)}
          </SlugMenuItem>
        </li>
      ))}
      <SlugMenuItem onClick={onClick} active={false} to="/cv" key="cv">
        CV
      </SlugMenuItem>
    </SlugMenuContainer>
  )
}

export { AnchorListMenu, SlugListMenu }
