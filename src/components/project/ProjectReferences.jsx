import React from "react"
import styled from "styled-components"
import GithubIcon from "mdi-react/GithubIcon"
import CardSearchOutlineIcon from "mdi-react/CardSearchOutlineIcon"
import ChromeIcon from "mdi-react/GoogleChromeIcon"
import FirefoxIcon from "mdi-react/FirefoxIcon"

const StyledReference = styled.a`
  background: none;
  font-size: 1.2rem;
  svg {
    vertical-align: top;
  }
`

const Reference = ({ href, children }) => {
  return (
    <StyledReference href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledReference>
  )
}

const ProjectReferences = ({ frontmatter }) => {
  const components = []

  if (frontmatter.chrome) {
    components.push(
      <Reference href={frontmatter.chrome}>
        <ChromeIcon size={30} /> &nbsp;Chrome Store
      </Reference>
    )
  }

  if (frontmatter.firefox) {
    components.push(
      <Reference href={frontmatter.firefox}>
        <FirefoxIcon size={30} /> &nbsp;Firefox Store
      </Reference>
    )
  }

  if (frontmatter.demo) {
    components.push(
      <Reference href={frontmatter.demo}>
        <CardSearchOutlineIcon size={30} /> &nbsp;Demo
      </Reference>
    )
  }

  if (frontmatter.repository) {
    components.push(
      <Reference href={frontmatter.repository}>
        <GithubIcon size={30} /> &nbsp;Source
      </Reference>
    )
  }

  return <>{components}</>
}

export { ProjectReferences }
