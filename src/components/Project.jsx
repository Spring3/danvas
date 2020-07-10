import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Animated } from "react-animated-css"

import Tags, { Tag } from "./Tags"

const ProjectGrid = styled.div`
  display: flex;
`

const ParallaxImage = styled.div`
  background-image: url("${(props) => props.src}");
  height: 60vh;
  background-attachment: fixed;
  background-position: 90% center;
  background-repeat: no-repeat;
  background-size: 900px auto;
  padding: 0rem 5rem;
`

const ProjectInfo = styled.div`
  position: sticky;
  top: 20vh;
  background: white;
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
  console.log(node)
  return (
    <>
      {/* <ProjectGrid> */}
      {/* <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDelay={500 * index}
        animationInDuration={500}
        animationOutDuration={500}
      > */}
      <div>
        <ProjectInfo>
          <ProjectTitle>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </ProjectTitle>
          <p>{node.frontmatter.description}</p>
          <Tags>
            {node.frontmatter.tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </Tags>
        </ProjectInfo>
      </div>
      <ProjectShowcase>
        {node.frontmatter.images.map((image) => (
          <ParallaxImage
            key={image.name}
            alt={image.name}
            src={image.childImageSharp.fluid.src}
          />
        ))}
      </ProjectShowcase>
      {/* </Animated> */}
      {/* </ProjectGrid> */}
    </>
  )
}

export { Project }
