import React, { useMemo } from "react"
import { graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import GlobalStyles, { OGP } from "../components/GlobalStyle"
import { ButtonBack } from "../components/Buttons"
import { MarkdownContent } from "../components/MarkdownContent"
import { Subheading } from "../components/project/Header"
import Tags, { Tag } from "../components/project/Tags"
import { ProjectReferences } from "../components/project/ProjectReferences"
import { SlugListMenu } from "../components/PortfolioMenu"
import { PageWrapper } from "../components/PageWrapper"
import Navbar from "../components/Navbar"
import { ImageCarousel } from "../components/ImageCarousel"
import { useAnchorTracker } from "../hooks/useAnchorTracker"
import { Flex } from "../components/Flex"
import { slugToAnchor } from "../utils"

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: auto 50%;
  grid-gap: 0rem 3rem;
  margin: 0 auto;
  margin-bottom: 3rem;

  @media (max-width: 750px) {
    grid-template-columns: 100%;
    padding: 1rem;
  }
`

const ProjectReferenceContainer = styled(Flex)`
  @media (max-width: 750px) {
    justify-content: flex-start;
  }
`

const TinyProjectReferenceContainer = styled(ProjectReferenceContainer)`
  @media (max-width: 750px) {
    gap: 10px;
    a {
      font-size: 1rem;
    }
  }
`

const PaddedMarkdownContent = styled(MarkdownContent)`
  @media (max-width: 750px) {
    padding: 1.5rem 0rem;
  }
`

export default (props) => {
  const post = props.data.markdownRemark
  const allPosts = props.data.allMarkdownRemark.nodes
  const activeAnchor = useAnchorTracker(["#markdown"])
  const anchor = slugToAnchor(post.fields.slug)

  const slugs = allPosts.map((node) => node.fields.slug)

  const theme = useMemo(() => ({ marker: `#${post.frontmatter.marker}` }), [
    post.frontmatter.marker,
  ])

  return (
    <>
      <GlobalStyles />
      <OGP
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.thumbnail.childImageSharp.fluid.src}
      />
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Navbar>
            <ButtonBack href={`/${anchor}`} value="Main Page" />
            {activeAnchor === "#markdown" ? (
              <TinyProjectReferenceContainer
                alignItems="center"
                flexWrap="wrap"
                gap="1.5rem"
                justifyContent="flex-end"
              >
                <ProjectReferences size={25} frontmatter={post.frontmatter} />
              </TinyProjectReferenceContainer>
            ) : null}
          </Navbar>
          <PageLayout>
            <div>
              <Subheading>{post.frontmatter.title}</Subheading>
            </div>
            <ProjectReferenceContainer
              alignItems="center"
              flexWrap="wrap"
              gap="1.5rem"
              justifyContent="flex-end"
            >
              <ProjectReferences frontmatter={post.frontmatter} />
            </ProjectReferenceContainer>
            <PaddedMarkdownContent
              id="markdown"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div>
              <ImageCarousel images={post.frontmatter.images} />
              <Tags>
                {post.frontmatter.technologies.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </Tags>
            </div>
          </PageLayout>
          <SlugListMenu active={post.fields.slug} slugs={slugs} />
        </PageWrapper>
      </ThemeProvider>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        demo
        repository
        chrome
        firefox
        marker
        technologies
        images {
          name
          childImageSharp {
            fluid(maxWidth: 900) {
              src
              sizes
              srcSet
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
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { nin: ["/cv/", "/"] } } }
      sort: { fields: fields___slug, order: ASC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`
