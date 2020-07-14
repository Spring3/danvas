import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import { Animated } from "react-animated-css"

import GlobalStyles, { OGP } from "../components/GlobalStyle"
import BackButton from "../components/BackButton"
import PageWrapper from "../components/PageWrapper"
import PageContent from "../components/PageContent"
import PageHeader from "../components/PageHeader"

export default (props) => {
  const post = props.data.markdownRemark
  return (
    <Fragment>
      <GlobalStyles />
      <OGP
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.thumbnail.childImageSharp.fluid.src}
      />
      <PageWrapper>
        <Animated
          animationIn="fadeInDown"
          animationOut="fadeOutUp"
          animationInDelay={1000}
        >
          <BackButton href={post.frontmatter.previous} />
        </Animated>
        <Animated animationIn="fadeIn" animationOut="fadeOut">
          <div>
            <PageHeader>{post.frontmatter.title}</PageHeader>
            <PageContent>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <h2>Screenshots</h2>
              <Carousel
                showStatus={false}
                showIndicators={false}
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
              </Carousel>
            </PageContent>
          </div>
        </Animated>
      </PageWrapper>
    </Fragment>
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
