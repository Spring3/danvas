import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Tags, { Tag } from "./Tags"

const ParallaxImage = styled.div`
  background-image: url("${(props) => props.src}");
  height: 60vh;
  background-attachment: fixed;
  background-position: 85% center;
  background-repeat: no-repeat;
  background-size: 50% auto;
`

const ProjectInfo = styled.div`
  position: sticky;
  top: 20vh;
  background: white;
  z-index: ${(props) => props.index + 1};
`

const ProjectShowcase = styled.div`
  position: relative;
`

const ProjectTitle = styled.div`
  font-size: 2rem;
  a {
    font-weight: bold;
  }
`

const Project = ({ node, index }) => {
  return (
    <>
      <ProjectInfo index={index}>
        <ProjectTitle>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </ProjectTitle>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
        <Tags>
          {node.frontmatter.technologies.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </Tags>
      </ProjectInfo>
      <ProjectShowcase>
        {node.frontmatter.images.map((image) => (
          <ParallaxImage
            key={image.name}
            alt={image.name}
            src={image.childImageSharp.fluid.src}
          />
        ))}
      </ProjectShowcase>
    </>
  )
}

export { Project }
