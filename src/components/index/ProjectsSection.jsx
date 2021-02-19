import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Header } from '../common/Headers';
import { Project } from './Project';
import { Flex } from '../common/Flex';

const ProjectsWrapper = styled(Flex)`
  position: relative;

  @media (min-width: 1000px) {
    & > *:not(:first-child) {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }
`;

const StickyTitle = styled(Header)`
  @media (min-width: 1000px) {
    z-index: 3;
    position: sticky;
    top: 5%;
  }

  @media (min-width: 750px) {
    padding-left: 6%;
    padding-right: 6%;
  }
`;

const ProjectsContainer = styled.div`
  padding-bottom: 25vh;
  position: relative;

  @media (max-width: 750px) {
    padding: 1rem;
  }
`;

const ProjectsSection = ({ nodes }) => (
  <ProjectsContainer direction="column">
    <div>
      <StickyTitle>Projects</StickyTitle>
      <ProjectsWrapper direction="column" gap="5rem">
        {nodes.map((node, i) => {
          const theme = { marker: node.frontmatter.marker };
          return (
            <ThemeProvider key={node.fields.slug} theme={theme}>
              <Project node={node} index={i} />
            </ThemeProvider>
          );
        })}
      </ProjectsWrapper>
    </div>
  </ProjectsContainer>
);

export { ProjectsSection };
