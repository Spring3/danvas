import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Tags, { Tag } from "../Tags"
import { FixedImageSet } from "./FixedImageSet"
import { slugToAnchor } from "../../utils"

const ProjectInfo = styled.div`
  position: sticky;
  top: 16%;
  z-index: ${(props) => props.index + 1};

  a {
    background: ${(props) =>
      `linear-gradient(to bottom,transparent 0%,transparent 60%,#${props.marker} 60%,#${props.marker} 100%);`}

    &:hover,
    &:focus {
      background: #${(props) => props.marker} !important;
    }
  }
`

const ProjectTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 3rem;
  a {
    font-weight: bold;
  }
`
const ProjectContent = styled.div`
  font-size: 1.2rem;
`

const Project = ({ node, index }) => {
  const anchor = slugToAnchor(node.fields.slug)
  const id = anchor.substring(1)
  return (
    <>
      <div>
        <ProjectInfo index={index} marker={node.frontmatter.marker}>
          <ProjectTitle>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </ProjectTitle>
          <ProjectContent dangerouslySetInnerHTML={{ __html: node.html }} />
          <Tags>
            {node.frontmatter.technologies.map((tag, i) => (
              <Tag key={i} marker={node.frontmatter.marker}>
                {tag}
              </Tag>
            ))}
          </Tags>
        </ProjectInfo>
      </div>
      <div id={id}>
        <FixedImageSet images={node.frontmatter.images} />
      </div>
    </>
  )
}

export { Project }
