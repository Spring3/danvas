import React, { Fragment } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import DownloadOutlineIcon from "mdi-react/DownloadOutlineIcon"

import GlobalStyles, { OGP } from "../components/GlobalStyle"
import { ButtonBack } from "../components/Buttons"
import { MarkdownContent } from "../components/MarkdownContent"
import { Header } from "../components/project/Header"
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

const PageWrapper = styled.main`
  padding: 3.5rem 2.25rem;
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
          <ButtonBack href={post.frontmatter.previous} />
          <DownloadButton href="https://drive.google.com/uc?export=download&id=1Uy-HSmkHS4XuLAE18oPqdKiVj9bELqtX">
            <DownloadOutlineIcon /> Download .pdf
          </DownloadButton>
        </Navbar>
        <div>
          <Header>{post.frontmatter.title}</Header>
          <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
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
