import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';

import { useWindowSize } from 'react-use';
import Tags, { Tag } from '../common/Tags';
import { FixedImageSet } from '../project/FixedImageSet';
import { slugToAnchor } from '../../utils';
import { Link } from '../common/Reference';
import { MarkdownContent } from '../common/MarkdownContent';
import { ImageCarousel } from '../common/ImageCarousel';
import { Flex } from '../common/Flex';
import { Decorations, Square, Circle } from '../common/Decorations';

const ProjectInfo = styled.div`
  @media (min-width: 1000px) {
    position: sticky;
    top: 16%;
    z-index: ${(props) => props.index + 1};
  }
`;

const InfoWrapper = styled.div`
  width: 100%;

  @media (min-width: 1001px) {
    width: 40%;
    position: sticky;
    top: 16%;
  }
`;

const ImageWrapper = styled.div`
  width: 59%;
  gap: 0px;

  @media (max-width: 1200px) {
    width: 58%;
    gap: 0px 1rem;
  }
`;

const ProjectRow = styled(Flex)`
  width: 100%;
  position: relative;

  @media (min-width: 750px) {
    width: 88%;
    padding-left: 6%;
    padding-right: 6%;
  }
`;

const ProjectTitle = styled.div`
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
`;

const ProjectContent = styled(MarkdownContent)`
  font-size: 1rem;
`;

const Project = ({ node, index }) => {
  const anchor = slugToAnchor(node.fields.slug);
  const { width } = useWindowSize();
  const id = anchor.substring(1);
  const isSmallScreen = width <= 1000;

  const images = node.frontmatter.images.map((image) => ({
    name: image.name,
    ...image.childImageSharp.fluid,
  }));

  const renderLayer = useCallback(
    (key, layerData) => {
      if (!layerData) {
        return null;
      }

      const { props, squares, circles } = layerData;
      const getProps = (string) =>
        string.split(',').reduce((acc, curr) => {
          const [prop, value] = curr.split('=');
          return {
            ...acc,
            [prop]: value,
          };
        }, {});

      return (
        <Decorations key={key} layer={key} {...props}>
          {squares?.map((squareData, i) => {
            const squareProps = getProps(squareData);
            return <Square {...squareProps} key={`square-${i}`} />;
          })}
          {circles?.map((circleData, i) => {
            const cirlceProps = getProps(circleData);
            return <Circle {...cirlceProps} key={`circle-${i}`} />;
          })}
        </Decorations>
      );
    },
    [id]
  );

  const decorationLayers = useMemo(() =>
    Object.entries(node.frontmatter.decorations || {}).map(
      ([layerKey, layerData]) => renderLayer(layerKey, layerData),
      [renderLayer]
    )
  );

  return (
    <ProjectRow id={id} justifyContent="space-between">
      <InfoWrapper>
        <ProjectInfo index={index}>
          <ProjectTitle>
            <Link to={node.fields.slug} marker={node.frontmatter.marker} bold>
              {node.frontmatter.title}
            </Link>
          </ProjectTitle>
          {isSmallScreen ? <ImageCarousel images={images} /> : null}
          <ProjectContent
            marker={node.frontmatter.marker}
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
          <Tags flexWrap="wrap">
            {node.frontmatter.technologies.map((tag) => (
              <Tag key={`${id}-${tag}`} marker={node.frontmatter.marker}>
                {tag}
              </Tag>
            ))}
          </Tags>
        </ProjectInfo>
      </InfoWrapper>
      {!isSmallScreen ? (
        <>
          <ImageWrapper>
            <FixedImageSet images={images} />
          </ImageWrapper>
          {decorationLayers}
        </>
      ) : null}
    </ProjectRow>
  );
};

export { Project };
