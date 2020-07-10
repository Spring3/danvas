import React, { Fragment } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import GlobalStyles, { OGP } from "../components/GlobalStyle"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"

const IntroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageWrapper = styled.main`
  padding: 1.25rem;
`

export default ({ data }) => {
  const { siteMetadata } = data.site
  const { nodes } = data.allMarkdownRemark
  const aboutNode = nodes[0]
  return (
    <Fragment>
      <GlobalStyles />
      <OGP
        title={siteMetadata.title}
        description={siteMetadata.description}
        image={siteMetadata.image}
      />
      <PageWrapper>
        <IntroSection>
          <AboutSection>
            <div dangerouslySetInnerHTML={{ __html: aboutNode.html }} />
          </AboutSection>
        </IntroSection>
        <ProjectsSection nodes={nodes.slice(1)} />
      </PageWrapper>
    </Fragment>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        image
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { ne: "/cv/" } } }
      sort: { fields: fields___slug, order: ASC }
    ) {
      nodes {
        html
        fields {
          slug
        }
        frontmatter {
          title
          description
          marker
          images {
            name
            childImageSharp {
              fluid(maxWidth: 1080, quality: 90) {
                src
              }
            }
          }
          thumbnail {
            name
            childImageSharp {
              fluid(maxWidth: 900) {
                src
                sizes
                srcSet
              }
            }
          }
          tags
        }
      }
    }
  }
`
