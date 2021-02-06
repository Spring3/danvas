import React from 'react';
import styled from 'styled-components';
import GithubIcon from 'mdi-react/GithubIcon';
import CardSearchOutlineIcon from 'mdi-react/CardSearchOutlineIcon';
import ChromeIcon from 'mdi-react/GoogleChromeIcon';
import FirefoxIcon from 'mdi-react/FirefoxIcon';
import { Reference } from '../common/Reference';

const StyledReference = styled(Reference)`
  background: none;
  font-size: 1.2rem;
  svg {
    vertical-align: top;
  }

  &:visited,
  &:focus,
  &:hover {
    border-radius: 3px;
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

const ProjectReferences = ({ frontmatter, size = 30, onlyIcons = false }) => {
  const components = [];

  if (frontmatter.chrome) {
    components.push(
      <ProjectReference key={frontmatter.chrome} href={frontmatter.chrome}>
        <ChromeIcon size={size} />
        {onlyIcons ? '' : ' Chrome Store'}
      </ProjectReference>
    );
  }

  if (frontmatter.firefox) {
    components.push(
      <ProjectReference key={frontmatter.chrome} href={frontmatter.firefox}>
        <FirefoxIcon size={size} />
        {onlyIcons ? '' : ' Firefox Store'}
      </ProjectReference>
    );
  }

  if (frontmatter.demo) {
    components.push(
      <ProjectReference key={frontmatter.chrome} href={frontmatter.demo}>
        <CardSearchOutlineIcon size={size} />
        {onlyIcons ? '' : ' Demo'}
      </ProjectReference>
    );
  }

  if (frontmatter.repository) {
    components.push(
      <ProjectReference key={frontmatter.chrome} href={frontmatter.repository}>
        <GithubIcon size={size} />
        {onlyIcons ? '' : ' Source'}
      </ProjectReference>
    );
  }

  return components;
};

export { ProjectReferences };
