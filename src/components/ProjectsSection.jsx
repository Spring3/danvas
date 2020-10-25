import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Header } from "./common/Headers"
import { Project } from "./Project"

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem 3rem;
  position: relative;

  @media (min-width: 750px) {
    padding-left: 6%;
    padding-right: 6%;
  }
`

const StickyTitle = styled(Header)`
  z-index: 999999;
  position: sticky;
  top: 0;
  padding-top: 5vh;
  margin-top: 3rem;

  @media (max-width: 750px) {
    position: static;
  }
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 25vh;

  @media (max-width: 750px) {
    padding: 1rem;
  }
`

const ProjectsSection = ({ nodes }) => (
  <ProjectsContainer>
    <StickyTitle>Projects</StickyTitle>
    <ProjectsWrapper>
      {nodes.map((node, i) => {
        const theme = { marker: `#${node.frontmatter.marker}` }
        return (
          <ThemeProvider key={node.fields.slug} theme={theme}>
            <Project node={node} key={i} index={i} />
          </ThemeProvider>
        )
      })}
    </ProjectsWrapper>
  </ProjectsContainer>
)

export { ProjectsSection }
