import React, { Fragment, useCallback } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import GlobalStyles, { OGP } from "../components/GlobalStyle"
import { AboutSection } from "../components/AboutSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { AnchorListMenu } from "../components/PortfolioMenu"
import { slugToAnchor } from "../utils"
import { styles } from "../components/Reference"
import { Footer } from "../components/Footer"

const AboutSectionMarkdown = styled.div`
  a {
    ${styles}
  }

  em {
    font-style: normal;
    font-weight: bold;
    background: var(--marker-green);
  }

  strong {
    background: var(--marker-yellow);
  }

  span,
  p:last-child {
    color: var(--text-color-secondary);
    font-size: smaller;
  }

  @media (min-width: 1000px) {
    font-size: 1.2rem;
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
        <AboutSection>
          <AboutSectionMarkdown
            dangerouslySetInnerHTML={{ __html: aboutNode.html }}
          />
        </AboutSection>
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
                presentationWidth
                presentationHeight
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
