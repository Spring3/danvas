import React from "react"
import styled from "styled-components"

import Tags, { Tag } from "./project/Tags"
import { FixedImageSet } from "./project/FixedImageSet"
import { slugToAnchor } from "../utils"
import { Link } from "./Reference"
import { MarkdownContent } from "./MarkdownContent"
import { useWindowResize } from "../hooks/useWindowResize"
import { ImageCarousel } from "./ImageCarousel"
import { Flex } from "./Flex"

const ProjectInfo = styled.div`
  position: sticky;
  top: 16%;
  z-index: ${(props) => props.index + 1};
`

const InfoWrapper = styled.div`
  width: 40%;

  @media (max-width: 750px) {
    width: 100%;
  }
`

const ImageWrapper = styled.div`
  width: 60%;
`

const ProjectTitle = styled.div`
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
`
const ProjectContent = styled(MarkdownContent)`
  font-size: 1rem;
`

const Project = ({ node, index }) => {
  const anchor = slugToAnchor(node.fields.slug)
  const width = useWindowResize()
  const id = anchor.substring(1)
  return (
    <Flex>
      <InfoWrapper>
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
          {width <= 750 ? (
            <ImageCarousel images={node.frontmatter.images} />
          ) : null}
          <ProjectContent
            marker={node.frontmatter.marker}
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
          <Tags flexWrap="wrap">
            {node.frontmatter.technologies.map((tag, i) => (
              <Tag key={i} marker={node.frontmatter.marker}>
                {tag}
              </Tag>
            ))}
          </Tags>
        </ProjectInfo>
      </InfoWrapper>
      {width > 750 ? (
        <ImageWrapper id={id}>
          <FixedImageSet images={node.frontmatter.images} />
        </ImageWrapper>
      ) : null}
    </Flex>
  )
}

export { Project }
