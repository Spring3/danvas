import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Tags, { Tag } from "./Tags"
import { slugToAnchor } from "../utils"

const ParallaxImage = styled.div`
  background-image: url("${(props) => props.src}");
  height: 60vh;
  background-attachment: fixed;
  background-position: 85% center;
  background-repeat: no-repeat;
  background-size: 50% auto;
`

const NormalImage = styled.div`
  background-image: url("${(props) => props.src}");
  height: 60vh;
  background-position: 85% center;
  background-repeat: no-repeat;
  background-size: contain;
`

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

const ProjectShowcase = styled.div``

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
      <ProjectShowcase id={id}>
        {node.frontmatter.images.length > 1 ? (
          node.frontmatter.images.map((image) => (
            <ParallaxImage
              key={image.name}
              src={image.childImageSharp.fluid.src}
            />
          ))
        ) : (
          <NormalImage
            src={node.frontmatter.images[0].childImageSharp.fluid.src}
          />
        )}
      </ProjectShowcase>
    </>
  )
}

export { Project }
