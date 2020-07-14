import React, { Fragment } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Animated } from "react-animated-css"
import DownloadOutlineIcon from "mdi-react/DownloadOutlineIcon"

import GlobalStyles, { OGP } from "../components/GlobalStyle"
import PageWrapper from "../components/PageWrapper"
import BackButton from "../components/BackButton"
import PageContent from "../components/PageContent"
import PageHeader from "../components/PageHeader"
import Navbar from "../components/Navbar"

const DownloadButton = styled.a`
  margin-left: 2rem;
  vertical-align: top;
  text-decoration: none;
  background: var(--marker-red) !important;
  padding: 10px;

  &:hover {
    box-shadow: 0px 0px 10px var(--marker-red);
  }

  &:pressed {
    box-shadow: inset 0px 0px 10px var(--marker-red);
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Fragment>
      <GlobalStyles />
      <OGP
        title="Daniyil Vasylenko - CV"
        description="Daniyil Vasylenko - CV online. Download as .pdf"
      />
      <PageWrapper>
        <Navbar>
          <BackButton href={post.frontmatter.previous} />
          <DownloadButton href="https://drive.google.com/uc?export=download&id=1Uy-HSmkHS4XuLAE18oPqdKiVj9bELqtX">
            <DownloadOutlineIcon /> Download .pdf
          </DownloadButton>
        </Navbar>
        <Animated animationIn="fadeIn" animationOut="fadeOut">
          <div>
            <PageHeader>{post.frontmatter.title}</PageHeader>
            <PageContent dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`
