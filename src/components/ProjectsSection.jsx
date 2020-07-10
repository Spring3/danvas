import React from "react"
import styled from "styled-components"
import { Project } from "./Project"

// const ProjectsGrid = styled.div`
//   margin-top: 3rem;
//   display: grid;
//   grid-template-columns: repeat(12, minmax(20px, 1fr));
//   grid-template-rows: repeat(auto-fill, minmax(50px,1fr));
//   grid-gap: 4rem 2rem;

//   @media (max-width: 750px) {
//     grid-gap: 4rem 0rem;
//   }
// `;

const ProjectFlexColumn = styled.div`
  display: grid;
  grid-template-columns: auto 900px;
  grid-gap: 10rem 0rem;
  position: relative;
`

const SectionTitle = styled.h1`
  z-index: 999999;
  position: sticky;
  top: 5vh;
`

const ProjectsContainer = styled.div`
  @media (min-width: 750px) {
    max-width: 90%;
    margin: 0 auto;
  }

  h1 {
    @media (min-width: 750px) {
      font-size: 3rem;
    }
    @media (orientation: landscape) and (min-width: 750px) and (max-width: 900px),
      (max-width: 750px) {
      font-size: 2rem;
    }
    margin-top: 3rem;
  }
`

export default ({ nodes }) => (
  <ProjectsContainer>
    <SectionTitle>Projects</SectionTitle>
    <ProjectFlexColumn>
      {nodes.map((node, i) => (
        <Project node={node} key={i} index={i} />
      ))}
    </ProjectFlexColumn>
  </ProjectsContainer>
)
