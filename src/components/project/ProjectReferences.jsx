import React from 'react';
import styled from 'styled-components';
import GithubIcon from 'mdi-react/GithubIcon';
import CardSearchOutlineIcon from 'mdi-react/CardSearchOutlineIcon';
import ChromeIcon from 'mdi-react/GoogleChromeIcon';
import FirefoxIcon from 'mdi-react/FirefoxIcon';
import { Reference } from '../Reference';

const StyledReference = styled(Reference)`
  background: none;
  font-size: 1.2rem;
  border-radius: 5px;
  svg {
    vertical-align: top;
  }

  @media (max-width: 750px) {
    font-size: 1rem;
  }
`;

const ProjectReference = ({ href, children }) => (
  <StyledReference href={href} newTab>
    {children}
  </StyledReference>
);

const ProjectReferences = ({ frontmatter, size = 30 }) => {
  const components = [];

  if (frontmatter.chrome) {
    components.push(
      <ProjectReference href={frontmatter.chrome}>
        <ChromeIcon size={size} />
        {' '}
&nbsp;Chrome Store
      </ProjectReference>
    );
  }

  if (frontmatter.firefox) {
    components.push(
      <ProjectReference href={frontmatter.firefox}>
        <FirefoxIcon size={size} />
        {' '}
&nbsp;Firefox Store
      </ProjectReference>
    );
  }

  if (frontmatter.demo) {
    components.push(
      <ProjectReference href={frontmatter.demo}>
        <CardSearchOutlineIcon size={size} />
        {' '}
&nbsp;Demo
      </ProjectReference>
    );
  }

  if (frontmatter.repository) {
    components.push(
      <ProjectReference href={frontmatter.repository}>
        <GithubIcon size={size} />
        {' '}
&nbsp;Source
      </ProjectReference>
    );
  }

  return components;
};

export { ProjectReferences };
