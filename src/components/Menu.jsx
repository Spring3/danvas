import React from "react"
import styled from "styled-components"

const MenuContainer = styled.div`
  position: fixed;
  bottom: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;

  small {
    color: var(--text-color-secondary);
  }
`

const MenuItem = styled.a`
  background: transparent;
  color: var(--text-color-secondary);
  border-bottom: 2px solid var(--marker-blue);
  padding: 0px 0.5rem;
  font-size: 0.8rem;

  &:visited {
    color: var(--text-color-secondary);
  }
`

const Menu = ({ nodes }) => {
  const onClick = (e) => {
    e.preventDefault()
    const anchor = e.target.getAttribute("data-anchor")
    const id = anchor.substring(1)
    const element = document.getElementById(id)
    const marginsAndPaddings = 155
    window.scrollTo({
      behavior: "smooth",
      top:
        element.getBoundingClientRect().top +
        window.pageYOffset -
        marginsAndPaddings,
    })
  }

  return (
    <MenuContainer>
      <small>Projects:&nbsp;</small>
      {nodes.map((node) => (
        <MenuItem
          onClick={onClick}
          href={node.anchor}
          data-anchor={node.anchor}
          key={node.anchor}
        >
          {node.name}
        </MenuItem>
      ))}
    </MenuContainer>
  )
}

export { Menu }
