import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import { useWindowSize } from 'react-use';
import { GlobalStyles, OGP } from '../components/GlobalStyle';
import { ButtonBack } from '../components/common/Buttons';
import { MarkdownContent } from '../components/common/MarkdownContent';
import { Subheading } from '../components/project/Header';
import { Tags } from '../components/common/Tags';
import { ProjectReferences } from '../components/project/ProjectReferences';
import { SlugListMenu } from '../components/common/Menus';
import { PageWrapper } from '../components/common/PageWrapper';
import Navbar from '../components/common/Navbar';
import { ImageCarousel } from '../components/common/ImageCarousel';
import { useAnchorTracker } from '../hooks/useAnchorTracker';
import { Flex } from '../components/common/Flex';
import { slugToAnchor } from '../utils';
import { ImagePreviewContextProvider } from '../context/ImagePreviewContext';

const PageLayout = styled.div`
  display: grid;
  grid-gap: 0rem 3rem;
  margin: 0 auto;
  margin-bottom: 3rem;

  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-template-areas:
    'nav nav nav nav'
    'info info content content'
    'info info content content';

  @media (max-width: 850px) {
    grid-template-columns: repeat(4, 25%);
    padding: 1rem;
    grid-gap: 0rem;

    grid-template-areas:
      'nav nav nav nav'
      'info info info info'
      'content content content content';
  }

  @media (max-width: 700px) {
    padding: 1rem;
    grid-gap: 0rem;

    grid-template-areas:
      'nav nav nav nav'
      'info info info info'
      'content content content content';
  }
`;

const ProjectReferenceContainer = styled(Flex)`
  @media (max-width: 750px) {
    justify-content: flex-start;
  }
`;

const TinyProjectReferenceContainer = styled(ProjectReferenceContainer)`
  @media (max-width: 750px) {
    gap: 1.5rem;
    a {
      font-size: 1rem;
    }
  }
`;

const ProjectInfoWrapper = styled.div`
  grid-area: info;
`;

const ProjectContentNav = styled(Flex)`
  grid-area: nav;
`;

const ProjectInfo = styled.div`
  grid-area: content;
`;

export default (props) => {
  const post = props.data.markdownRemark;
  const allPosts = props.data.allMarkdownRemark.nodes;
  const activeAnchor = useAnchorTracker(['#markdown']);
  const anchor = slugToAnchor(post.fields.slug);
  const { width } = useWindowSize();

  const slugs = allPosts.map((node) => node.fields.slug);

  const theme = useMemo(() => ({ marker: post.frontmatter.marker }), [
    post.frontmatter.marker,
  ]);

  const images = post.frontmatter.images.map((image) => ({
    name: image.name,
    ...image.childImageSharp.original,
    placeholder: image.childImageSharp.placeholder.src
  }));

  const isSmallScreen = width < 850;

  return (
    <>
      <GlobalStyles />
      <OGP
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.thumbnail.childImageSharp.fluid.src}
      />
      <ThemeProvider theme={theme}>
        <ImagePreviewContextProvider>
          <PageWrapper>
            <Navbar>
              <ButtonBack href={`/${anchor}`} value="Main page" />
              {activeAnchor === '#markdown' ? (
                <TinyProjectReferenceContainer
                  alignItems="center"
                  flexWrap="wrap"
                  gap=".5rem"
                  margined
                  justifyContent="flex-end"
                >
                  <ProjectReferences
                    size={25}
                    frontmatter={post.frontmatter}
                    onlyIcons={isSmallScreen}
                  />
                </TinyProjectReferenceContainer>
              ) : null}
            </Navbar>
            <PageLayout>
              <ProjectContentNav
                alignItems="center"
                justifyContent="space-between"
              >
                <div>
                  <Subheading>{post.frontmatter.title}</Subheading>
                </div>
                <ProjectReferenceContainer
                  alignItems="center"
                  flexWrap="wrap"
                  gap="1.5rem"
                  margined
                  justifyContent="flex-end"
                >
                  <ProjectReferences size={25} frontmatter={post.frontmatter} />
                </ProjectReferenceContainer>
              </ProjectContentNav>
              <ProjectInfoWrapper>
                <MarkdownContent
                  id="markdown"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
                {post.frontmatter.description.map((description) => {
                  if (description.href) {
                    return (
                      <MarkdownContent>
                        <p>
                          <a href={description.href}>{description.text}</a>
                        </p>
                      </MarkdownContent>
                    );
                  }

                  if (description.text) {
                    return (
                      <MarkdownContent>
                        <p>{description.text}</p>
                      </MarkdownContent>
                    );
                  }

                  return null;
                })}
              </ProjectInfoWrapper>
              <ProjectInfo>
                <ImageCarousel images={images} />
                <Tags tags={post.frontmatter.technologies} />
              </ProjectInfo>
            </PageLayout>
            <SlugListMenu active={post.fields.slug} slugs={slugs} />
          </PageWrapper>
        </ImagePreviewContextProvider>
      </ThemeProvider>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description {
          text
          href
        }
        demo
        repository
        chrome
        firefox
        marker
        technologies
        images {
          name
          childImageSharp {
            original: fluid(maxHeight: 1080) {
              src
              sizes
              srcSet
            }
            placeholder: fluid(quality: 1, maxWidth: 10) {
              base64
              src
            }
          }
        }
        thumbnail {
          name
          childImageSharp {
            fluid(maxHeight: 1080) {
              src
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
`;
