import React, { useMemo } from "react"
import { graphql } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import styled, { ThemeProvider } from "styled-components"

import GlobalStyles, { OGP } from "../components/GlobalStyle"
import { ButtonBack } from "../components/Buttons"
import { MarkdownContent } from "../components/MarkdownContent"
import { Header } from "../components/project/Header"
import Tags, { Tag } from "../components/project/Tags"
import { ProjectReferences } from "../components/project/ProjectReferences"
import { SlugListMenu } from "../components/PortfolioMenu"
import { PageWrapper } from "../components/PageWrapper"
import Navbar from "../components/Navbar"
import { useAnchorTracker } from "../hooks/useAnchorTracker"

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: auto 50%;
  grid-gap: 0rem 3rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  padding: 0rem 1rem;

  @media (max-width: 750px) {
    grid-template-columns: 100%;
  }
`

const StyledCarousel = styled(Carousel)`
  box-shadow: 0px 0px 10px 0px #f3f3f3;
  div:first-of-type {
    border-radius: 5px;
  }

  .thumbs {
    padding: 0 !important;
  }

  .thumbs-wrapper {
    margin: 20px 0px !important;
  }
`

const ProjectReferenceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: flex-end;

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
  padding: 1.5rem 0rem;
`

export default (props) => {
  const post = props.data.markdownRemark
  const allPosts = props.data.allMarkdownRemark.nodes
  const activeAnchor = useAnchorTracker(["#markdown"])

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
            <ButtonBack href="/" value="Main Page" />
            {activeAnchor === "#markdown" ? (
              <TinyProjectReferenceContainer>
                <ProjectReferences size={25} frontmatter={post.frontmatter} />
              </TinyProjectReferenceContainer>
            ) : null}
          </Navbar>
          <PageLayout>
            <div>
              <Header>{post.frontmatter.title}</Header>
            </div>
            <ProjectReferenceContainer>
              <ProjectReferences frontmatter={post.frontmatter} />
            </ProjectReferenceContainer>
            <PaddedMarkdownContent
              id="markdown"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div>
              <StyledCarousel
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                dynamicHeight={true}
              >
                {post.frontmatter.images.map((image, i) => (
                  <div
                    style={{ marginLeft: "0px", marginRight: "0px" }}
                    key={i}
                  >
                    <img
                      key={i}
                      alt={image.name}
                      src={image.childImageSharp.fluid.src}
                      srcSet={image.childImageSharp.fluid.srcSet}
                      sizes={image.childImageSharp.fluid.sizes}
                    />
                  </div>
                ))}
              </StyledCarousel>
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
