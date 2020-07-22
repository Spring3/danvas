import React from "react"
import styled from "styled-components"
import { Project } from "../project/Project"

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: auto 60%;
  grid-gap: 10rem 3rem;
  position: relative;

  @media (min-width: 750px) {
    padding-left: 6%;
    padding-right: 6%;
  }
`

const SectionTitle = styled.h1`
  z-index: 999999;
  position: sticky;
  top: 0;
  padding-top: 5vh;

  @media (min-width: 750px) {
    font-size: 3rem;
    padding-left: 6%;
    padding-right: 6%;
  }

  @media (orientation: landscape) and (min-width: 750px) and (max-width: 900px),
    (max-width: 750px) {
    font-size: 2rem;
  }
  margin-top: 3rem;
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 25vh;
`

const ProjectsSection = ({ nodes }) => (
  <ProjectsContainer>
    <SectionTitle>Projects</SectionTitle>
    <ProjectGrid>
      {nodes.map((node, i) => (
        <Project node={node} key={i} index={i} />
      ))}
    </ProjectGrid>
  </ProjectsContainer>
)

export { ProjectsSection }
