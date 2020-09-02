import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import GlobalStyles, { OGP } from "../components/GlobalStyle"
import { ButtonBack, DownloadButton } from "../components/Buttons"
import { Subheading } from "../components/project/Header"
import Navbar from "../components/Navbar"
import { PageWrapper } from "../components/PageWrapper"
import SocialButtons from "../components/indexPage/SocialButtons"
import { useAnchorTracker } from "../hooks/useAnchorTracker"
import { DownloadFooter } from "../components/cv/DownloadFooter"

const CVWrapper = styled.div`
  padding: 0px 6%;
`

const CVShortSummary = styled.p`
  font-size: 1.2rem;
`

const CVList = styled.ul`
  li {
    margin-top: 0.8rem;
    font-size: 1.2rem;
  }

  li:first-child {
    margin-top: 0;
  }
`

const CVSectionBlock = styled.div`
  margin-top: 3rem;

  &:first-child {
    margin-top: 0rem;
  }

  p {
    font-size: 1.2rem;
  }
`

const StickySubheading = styled(Subheading)`
  position: sticky;
  top: 100px;

  @media (max-width: 750px) {
    position: static;
  }
`

const DoubleColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  grid-gap: 3rem 4rem;
  padding-bottom: 6rem;

  section {
    margin-top: 4rem;
  }

  @media (max-width: 750px) {
    grid-template-columns: auto;
    grid-gap: 1.5rem 0rem;

    section {
      margin: 0;
    }
  }
`

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`

const InlinedNavbarPart = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0rem;
  h2 {
    margin: 0;
    font-size: 1rem;
  }

  ul {
    margin: 0;
  }

  @media (max-width: 750px) {
    justify-content: space-between;
    width: 100%;
  }
`

const StyledHeaders = styled.h3`
  display: inline-block;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 60%,
    lightgrey 60%,
    lightgrey 100%
  );
`

export default ({ data }) => {
  const post = data.markdownRemark
  const activeAnchor = useAnchorTracker(["#intro-section"])

  return (
    <>
      <GlobalStyles />
      <OGP
        title="Daniyil Vasylenko - CV"
        description="Daniyil Vasylenko - CV"
      />
      <PageWrapper>
        <Navbar>
          <ButtonBack href="/" value="Main page" />
          {activeAnchor === "#intro-section" ? (
            <FlexRow>
              <InlinedNavbarPart id="navbar-contents">
                <Subheading>{post.frontmatter.title}</Subheading>
                <SocialButtons size={25} onlyImportant={true} />
              </InlinedNavbarPart>
              <small>&nbsp;(upd: {post.frontmatter.updatedAt})</small>
            </FlexRow>
          ) : null}
          <DownloadButton
            href="https://drive.google.com/uc?export=download&id=1Uy-HSmkHS4XuLAE18oPqdKiVj9bELqtX"
            value="Download"
          />
        </Navbar>
        <CVWrapper>
          <FlexRow>
            <Subheading marker="#A9E5BB">{post.frontmatter.title}</Subheading>
            <small>&nbsp;(upd: {post.frontmatter.updatedAt})</small>
          </FlexRow>
          <SocialButtons size={30} onlyImportant={true} />
          <CVShortSummary>
            Curious and creative. I always try to come up with something special
            and original. Primarily I focus on Node.js, React, Graphql and
            modern Javascript ecosystem.
          </CVShortSummary>
          <DoubleColumnGrid id="intro-section">
            <div>
              <StickySubheading marker="#F78888">Skills</StickySubheading>
            </div>
            <section id="skills">
              <CVList>
                <li>
                  <strong>Back-end</strong>: Node.js, Express, RabbitMQ
                </li>
                <li>
                  <strong>Front-end</strong>: Javascript, HTML, CSS, React,
                  Redux, Overmind
                </li>
                <li>
                  <strong>Databases</strong>: Mongodb, Redis, MySQL
                </li>
                <li>
                  <strong>Build tools</strong>: Webpack
                </li>
                <li>
                  <strong>Testing</strong>: testing-library, Jest, Chai, Sinon,
                  Nyc, Karma.js, Enzyme
                </li>
                <li>
                  <strong>Devops</strong>: Docker
                </li>
                <li>
                  <strong>CI/CD</strong>: CircleCI, Travis, SonarQube, Netlify,
                  Heroku
                </li>
                <li>
                  <strong>VCS</strong>: Git
                </li>
                <li>
                  <strong>Misc</strong>: Electron, Lerna, Gatsby, Basics of Elm,
                  Basics of UX Design
                </li>
              </CVList>
            </section>
            <div>
              <StickySubheading marker="#BCE5FF">Experience</StickySubheading>
            </div>
            <section id="experience">
              <CVSectionBlock>
                <StyledHeaders>
                  Full Stack Software Engineer - Contentful
                </StyledHeaders>
                <br />
                <i>
                  <label>Duration:</label> Dec 2018 - now
                </i>
                <p>
                  Full stack development and support of the Headless CMS by
                  Contentful
                </p>
                <CVList>
                  <li>Maintenance and improvements of the UI kit</li>
                  <li>
                    Full stack contribution to the web app and related services
                  </li>
                  <li>
                    Support for the public APIs for CMS content management
                  </li>
                  <li>Part of the customer tech support</li>
                </CVList>
              </CVSectionBlock>
              <CVSectionBlock>
                <StyledHeaders>Full Stack Developer - Dial-Once</StyledHeaders>
                <br />
                <i>
                  <label>Duration:</label> Dec 2016 - Dec 2019
                </i>
                <p>
                  Full stack development and support of the omnichannel
                  communication platform, consisting of multiple front-end
                  products with a micro-service architecture behind it.
                  Dial-Once is a leader on the market of Visual IVR services
                  with clients from all the continents of the world.
                </p>
                <CVList>
                  <li>
                    Designed and developed the company's most on-demand product
                  </li>
                  <li>
                    Implemented the tools, that allowed designers concentrate on
                    styling without interacting with the code base.
                  </li>
                  <li>
                    Reduced code base complexity by creating simple abstractions
                    and inroducing new standards and best practices into the
                    workflow.
                  </li>
                  <li>Mentored company's interns</li>
                  <li>
                    Held workshops and pair programming sessions to ease
                    integration in cross-functional projects
                  </li>
                </CVList>
              </CVSectionBlock>
              <CVSectionBlock>
                <StyledHeaders>
                  Node.js Developer - FASTEE Technologies
                </StyledHeaders>
                <br />
                <i>
                  <label>Duration</label> Aug - Dec 2016
                </i>
                <p>Implemented bots for the generic chat bot platform.</p>
                <CVList>
                  <li>
                    Created chat bots on multiple chat bot APIs - Slack, Asana,
                    Skype, Messenger
                  </li>
                  <li>
                    Created a routing system of message exchange between
                    different communication platforms
                  </li>
                </CVList>
              </CVSectionBlock>
            </section>
            <div>
              <StickySubheading marker="#FCF6B1">Education</StickySubheading>
            </div>
            <section id="education">
              <CVSectionBlock>
                <StyledHeaders>Specialist Degree (2016 - 2018)</StyledHeaders>
                <p>Faculty of Informatics and Computer Systems</p>
                <p>
                  The National Technical University of Ukraine "Igor Sikorsky
                  Kyiv Polytechnic Institute" (NTUU "KPI")
                </p>
                <CVList>
                  <li>Theory of Automation and Control of Computer Systems</li>
                </CVList>
              </CVSectionBlock>
              <CVSectionBlock>
                <StyledHeaders>Bachelor Degree (2012 - 2016)</StyledHeaders>
                <p>Faculty of Informatics and Computer Systems</p>
                <p>
                  The National Technical University of Ukraine "Igor Sikorsky
                  Kyiv Polytechnic Institute" (NTUU "KPI")
                </p>
                <CVList>
                  <li>Principles of Information Technology</li>
                  <li>Principles of Computer Graphics</li>
                  <li>
                    Object Oriented Programming in C# language and Patterns of
                    Design
                  </li>
                  <li>
                    Principles of Communication and Data Transfer and
                    Persistence
                  </li>
                </CVList>
              </CVSectionBlock>
            </section>
            <div>
              <StickySubheading marker="#A9E5BB">Courses</StickySubheading>
            </div>
            <section id="courses">
              <StyledHeaders>
                Java Enterprise Edition - Bionic University (Aug - Nov 2014 )
              </StyledHeaders>
              <CVList>
                <li>EJB - Stateful, Stateless beans</li>
                <li>Introduction to Spring Framework</li>
                <li>Jersey, Jackson</li>
                <li>JPA</li>
              </CVList>
            </section>
            <div>
              <StickySubheading marker="#C3A9FF">
                Language Skills
              </StickySubheading>
            </div>
            <section id="language skills">
              <CVList>
                <li>English - C1 (7.5 - IELTS, May 2015, Aug 2019)</li>
                <li>German - B1</li>
              </CVList>
            </section>
          </DoubleColumnGrid>
        </CVWrapper>
        <DownloadFooter>
          {activeAnchor === "#intro-section" ? (
            <InlinedNavbarPart>
              <DownloadButton
                href="https://drive.google.com/uc?export=download&id=1Uy-HSmkHS4XuLAE18oPqdKiVj9bELqtX"
                value="Download CV"
              />
              <SocialButtons size={30} onlyImportant={true} />
            </InlinedNavbarPart>
          ) : null}
        </DownloadFooter>
      </PageWrapper>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        email
        updatedAt
      }
    }
  }
`
