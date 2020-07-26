import React from "react"
import styled from "styled-components"

const Tags = styled.ul`
  list-style-type: none;
  margin: 3rem 0px 0px 0px;
  padding: 0px;
`

const TagItem = styled.li`
  display: inline-block;
  font-weight: bold;
  border-radius: var(--border-radius);
  border: 2px solid ${(props) => props.theme.marker};
  padding: 3px 5px;
  margin: 0.25rem;
  font-size: 0.8rem;
`

export const Tag = ({ children }) => <TagItem>{children}&nbsp;</TagItem>

export default Tags
