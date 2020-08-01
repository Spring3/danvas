import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import GlobalStyles, { OGP } from "../components/GlobalStyle"
import { ButtonBack, DownloadButton } from "../components/Buttons"
import { Subheading } from "../components/project/Header"
import Navbar from "../components/Navbar"
import SocialButtons from "../components/indexPage/SocialButtons"

const PageWrapper = styled.main`
  padding: 3.5rem 2.25rem;
`

const CVWrapper = styled.div``

const StickySubheading = styled(Subheading)`
  position: sticky;
  top: 100px;
`

const DroubleColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  grid-gap: 3rem 4rem;

  section {
    margin-top: 4rem;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
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
          <DownloadButton
            href="https://drive.google.com/uc?export=download&id=1Uy-HSmkHS4XuLAE18oPqdKiVj9bELqtX"
            value="Download .pdf"
          />
        </Navbar>
        <CVWrapper>
          <Subheading>{post.frontmatter.title}</Subheading>
          <SocialButtons size={40} />
          <p>
            Curious and creative. I always try to come up with something special
            and original. Primarily I focus on Node.js, React, Graphql and
            modern Javascript ecosystem.
          </p>
          <DroubleColumnGrid>
            <div>
              <StickySubheading>Skills</StickySubheading>
            </div>
            <section id="skills">
              <ul>
                <li>
                  <strong>Back-end</strong>: Node.js, Express, RabbitMQ
                </li>
                <li>
                  <strong>Front-end</strong>: Javascript, HTML, CSS, React,
                  Redux
                </li>
                <li>
                  <strong>Databases</strong>: Mongodb, Redis, MySQL
                </li>
                <li>
                  <strong>Build tools</strong>: Webpack
                </li>
                <li>
                  <strong>Testing</strong>: Jest, Chai, Sinon, Nyc, Karma.js,
                  Enzyme
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
                  <strong>Misc</strong>: Electron, Lerna, Gatsby, Functional
                  programming with Elm, Basics of UX Design
                </li>
              </ul>
            </section>
            <div>
              <StickySubheading>Experience</StickySubheading>
            </div>
            <section id="experience">
              <div>
                <h3>Full Stack Software Engineer - Contentful</h3>
                <p>
                  <label>Duration: </label>Dec 2018 - now
                </p>
                <p>
                  Full stack development and support of the Headless CMS by
                  Contentful
                </p>
                <ul>
                  <li>Maintenance and improvements of the UI kit</li>
                  <li>Bugfixing, UI, UX improvements of the CMS web app</li>
                  <li>
                    Support for the public APIs for CMS content management
                  </li>
                </ul>
              </div>
              <div>
                <h3>Full Stack Developer - Dial-Once</h3>
                <p>
                  <label>Duration:</label>Dec 2016 - Dec 2019
                </p>
                <p>
                  Full stack development and support of the omnichannel
                  communication platform, consisting of multiple front-end
                  products with a micro-service architecture behind it.
                  Dial-Once is a leader on the market of Visual IVR services
                  with clients from all the continents of the world.
                </p>
                <ul>
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
                </ul>
              </div>
              <div>
                <h3>Node.js Developer - FASTEE Technologies</h3>
                <p>
                  <label>Duration</label>Aug - Dec 2016
                </p>
                <p>Implemented bots for the generic chat bot platform.</p>
                <ul>
                  <li>
                    Created chat bots on multiple chat bot APIs - Slack, Asana,
                    Skype, Messenger
                  </li>
                  <li>
                    Created a routing system of message exchange between
                    different communication platforms
                  </li>
                </ul>
              </div>
            </section>
            <div>
              <StickySubheading>Education</StickySubheading>
            </div>
            <section id="education">
              <div>
                <h3>Specialist Degree (2016 - 2018)</h3>
                <p>
                  <strong>Faculty</strong>: Informatics and Computer Systems
                  <strong>University</strong>: The National Technical University
                  of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute" (NTUU
                  "KPI")
                </p>
                <ul>
                  <li>Theory of Automation and Control of Computer Systems</li>
                </ul>
              </div>
              <div>
                <h3>Bachelor Degree (2012 - 2016)</h3>
                <p>
                  <strong>Faculty</strong>: Informatics and Computer Systems
                  <strong>University</strong>: The National Technical University
                  of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute" (NTUU
                  "KPI")
                </p>
                <ul>
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
                </ul>
              </div>
            </section>
            <div>
              <StickySubheading>Courses</StickySubheading>
            </div>
            <section id="courses">
              <h3>
                Java Enterprise Edition - Bionic University (Aug - Nov 2014 )
              </h3>
              <ul>
                <li>EJB - Stateful, Stateless beans</li>
                <li>Introduction to Spring Framework</li>
                <li>Jersey, Jackson</li>
                <li>JPA</li>
              </ul>
            </section>
            <div>
              <StickySubheading>Language Skills</StickySubheading>
            </div>
            <section id="language skills">
              <ul>
                <li>English - C1 (7.5 - IELTS, May 2015, Aug 2019)</li>
                <li>German - B1</li>
              </ul>
            </section>
          </DroubleColumnGrid>
        </CVWrapper>
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
