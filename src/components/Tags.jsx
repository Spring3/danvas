import React from "react"
import styled from "styled-components"

const Tags = styled.ul`
  list-style-type: none;
  margin: 3rem 0px 0px 0px;
  padding: 0px;
`

const TagItem = styled.li`
  display: inline-block;
  margin-right: 0.5rem;
  font-weight: bold;
  border-radius: var(--border-radius);
  border: 2px solid #${(props) => props.marker};
  padding: 3px 5px;
  margin: 0.25rem 0.5rem 0.25rem 0px;
  font-size: 0.8rem;
`

export const Tag = ({ children, marker }) => (
  <TagItem marker={marker}>{children}&nbsp;</TagItem>
)

export default Tags
