import React, { useCallback } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { GlobalStyles, OGP } from '../components/GlobalStyle';
import { AboutSection } from '../components/index/AboutSection';
import { ProjectsSection } from '../components/index/ProjectsSection';
import { AnchorListMenu } from '../components/common/Menus';
import { slugToAnchor } from '../utils';
import { styles } from '../components/common/Reference';
import { Footer } from '../components/index/Footer';
import { ImagePreviewContextProvider } from '../context/ImagePreviewContext';

const AboutSectionMarkdown = styled.div`
  a {
    ${styles}
  }

  em {
    font-style: normal;
    font-weight: bold;
    background: var(--marker-green);
  }

  strong {
    background: var(--marker-yellow);
  }

  span,
  p:last-child {
    color: var(--text-color-secondary);
    font-size: smaller;
  }

  @media (min-width: 1000px) {
    font-size: 1.2rem;
  }
`;

export default ({ data }) => {
  const { siteMetadata } = data.site;
  const { nodes } = data.allMarkdownRemark;
  const aboutNode = nodes[0];

  const projectNodes = nodes.slice(1);
  const menuNodes = projectNodes.map((node) => ({
    name: node.frontmatter.title,
    anchor: slugToAnchor(node.fields.slug),
  }));

  const onMenuClick = useCallback((e) => {
    e.preventDefault();
    const anchor = e.target.getAttribute('data-anchor');
    const id = anchor.substring(1);
    const element = document.getElementById(id);
    const marginsAndPaddings = 55;
    window.scrollTo({
      behavior: 'smooth',
      top:
        element.getBoundingClientRect().top +
        window.pageYOffset -
        marginsAndPaddings,
    });
    return false;
  }, []);

  return (
    <>
      <GlobalStyles />
      <OGP
        title={siteMetadata.title}
        description={siteMetadata.description}
        image={siteMetadata.image}
      />
      <ImagePreviewContextProvider>
        <main>
          <div style={{ position: 'relative' }}>
            <AboutSection>
              <AboutSectionMarkdown
                dangerouslySetInnerHTML={{ __html: aboutNode.html }}
              />
            </AboutSection>
          </div>
          <ProjectsSection nodes={projectNodes} />
          <AnchorListMenu nodes={menuNodes} onClick={onMenuClick} />
        </main>
        <Footer />
      </ImagePreviewContextProvider>
    </>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        image
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { ne: "/cv/" } } }
      sort: { fields: fields___slug, order: ASC }
    ) {
      nodes {
        html
        fields {
          slug
        }
        frontmatter {
          title
          marker
          decorations {
            back {
              props {
                height
                top
              }
              squares {
                radius
                top
                left
                size
                background
                sticky
              }
              circles {
                top
                left
                size
                background
                sticky
              }
            }
            base {
              props {
                height
                top
              }
              squares {
                radius
                top
                left
                size
                background
                sticky
              }
              circles {
                top
                left
                size
                background
                sticky
              }
            }
          }
          images {
            name
            childImageSharp {
              fluid(maxHeight: 1080, quality: 90, toFormatBase64: WEBP) {
                base64
                src
                sizes
                srcSet
                aspectRatio
                presentationWidth
                presentationHeight
              }
            }
          }
          thumbnail {
            name
            childImageSharp {
              fluid(maxHeight: 1080) {
                src
                sizes
                srcSet
              }
            }
          }
          technologies
        }
      }
    }
  }
`;
