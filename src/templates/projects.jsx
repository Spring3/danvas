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
import { ProjectReferences } from "../components/project/ProjectReferences"

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

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: auto 50%;
  grid-gap: 1.5rem 3rem;
  width: 80%;
  margin: 0 auto;
`

const StyledCarousel = styled(Carousel)`
  box-shadow: 0px 0px 10px 0px #f3f3f3;
  div:first-of-type {
    border-radius: 5px;
  }
`

const ProjectReferenceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: flex-end;
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
          <div>
            <PageHeader colorHex={post.frontmatter.marker}>
              {post.frontmatter.title}
            </PageHeader>
          </div>
          <ProjectReferenceContainer>
            <ProjectReferences frontmatter={post.frontmatter} />
          </ProjectReferenceContainer>
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
        demo
        repository
        chrome
        firefox
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
