import React from "react"
import { graphql } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"

import GlobalStyles, { OGP } from "../components/GlobalStyle"
import { ButtonBack, ButtonNext } from "../components/Buttons"
import PageContent from "../components/PageContent"
import PageHeader from "../components/PageHeader"
import Tags, { Tag } from "../components/Tags"
import { slugToTitle } from "../utils"

const FlexNav = styled.nav`
  display: flex;
  justify-content: space-between;
`

const ProjectsNavbar = ({ next, prev }) => {
  return (
    <FlexNav>
      <ButtonBack href={prev} value={slugToTitle(prev)} />
      <ButtonNext href={next} value={slugToTitle(next)} />
    </FlexNav>
  )
}

const PageWrapper = styled.main`
  padding: 3.5rem 2.25rem;
`

const FullWidthContainer = styled.div`
  grid-column: 1 / -1;
`

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: auto 50%;
  grid-gap: 3rem;
  width: 80%;
  margin: 0 auto;
`

const StyledCarousel = styled(Carousel)`
  box-shadow: 0px 0px 10px #f3f3f3;
`

export default (props) => {
  const post = props.data.markdownRemark
  return (
    <>
      <GlobalStyles />
      <OGP
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.thumbnail.childImageSharp.fluid.src}
      />
      <PageWrapper>
        <ProjectsNavbar
          next={post.frontmatter.next}
          prev={post.frontmatter.previous}
        />
        <PageLayout>
          <FullWidthContainer>
            <PageHeader>{post.frontmatter.title}</PageHeader>
          </FullWidthContainer>
          <PageContent>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </PageContent>
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
                <div style={{ marginLeft: "0px", marginRight: "0px" }} key={i}>
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
                <Tag key={i} marker={post.frontmatter.marker}>
                  {tag}
                </Tag>
              ))}
            </Tags>
          </div>
        </PageLayout>
      </PageWrapper>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        previous
        next
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
  }
`
