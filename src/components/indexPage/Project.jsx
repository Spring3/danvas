import React from "react"
import styled from "styled-components"

import Tags, { Tag } from "../project/Tags"
import { FixedImageSet } from "../project/FixedImageSet"
import { slugToAnchor } from "../../utils"
import { Link } from "../Reference"
import { MarkdownContent } from "../MarkdownContent"

const ProjectInfo = styled.div`
  position: sticky;
  top: 16%;
  z-index: ${(props) => props.index + 1};
`

const ProjectTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 3rem;
`
const ProjectContent = styled(MarkdownContent)`
  font-size: 1.2rem;
`

const Project = ({ node, index }) => {
  const anchor = slugToAnchor(node.fields.slug)
  const id = anchor.substring(1)
  return (
    <>
      <div>
        <ProjectInfo index={index}>
          <ProjectTitle>
            <Link
              to={node.fields.slug}
              marker={node.frontmatter.marker}
              bold={true}
            >
              {node.frontmatter.title}
            </Link>
          </ProjectTitle>
          <ProjectContent
            marker={node.frontmatter.marker}
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
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
