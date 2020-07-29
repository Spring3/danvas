import React, { Fragment, useCallback } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import GlobalStyles, { OGP } from "../components/GlobalStyle"
import { AboutSection, ProjectsSection } from "../components/indexPage"
import { AnchorListMenu } from "../components/PortfolioMenu"
import { slugToAnchor } from "../utils"
import { styles } from "../components/Reference"
import { Footer } from "../components/Footer"

const IntroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AboutSectionMarkdown = styled.div`
  a {
    ${styles}
  }
`

export default ({ data }) => {
  const { siteMetadata } = data.site
  const { nodes } = data.allMarkdownRemark
  const aboutNode = nodes[0]

  const projectNodes = nodes.slice(1)
  const menuNodes = projectNodes.map((node) => ({
    name: node.frontmatter.title,
    anchor: slugToAnchor(node.fields.slug),
  }))

  const onMenuClick = useCallback((e) => {
    e.preventDefault()
    const anchor = e.target.getAttribute("data-anchor")
    const id = anchor.substring(1)
    const element = document.getElementById(id)
    const marginsAndPaddings = 155
    window.scrollTo({
      behavior: "smooth",
      top:
        element.getBoundingClientRect().top +
        window.pageYOffset -
        marginsAndPaddings,
    })
    return false
  }, [])

  return (
    <Fragment>
      <GlobalStyles />
      <OGP
        title={siteMetadata.title}
        description={siteMetadata.description}
        image={siteMetadata.image}
      />
      <main>
        <IntroSection>
          <AboutSection>
            <AboutSectionMarkdown
              dangerouslySetInnerHTML={{ __html: aboutNode.html }}
            />
          </AboutSection>
        </IntroSection>
        <ProjectsSection nodes={projectNodes} />
        <AnchorListMenu nodes={menuNodes} onClick={onMenuClick} />
      </main>
      <Footer />
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
          technologies
        }
      }
    }
  }
`
