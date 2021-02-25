import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';

import { animated, useSpring } from 'react-spring';
import { useWindowSize, useIntersection } from 'react-use';
import { Tags } from '../common/Tags';
import { FixedImageSet } from '../project/FixedImageSet';
import { slugToAnchor } from '../../utils';
import { Link } from '../common/Reference';
import { MarkdownContent } from '../common/MarkdownContent';
import { ImageCarousel } from '../common/ImageCarousel';
import { Flex } from '../common/Flex';
import { Decorations, Square, Circle } from '../common/Decorations';
import { Subheader } from '../common/Headers';

const ProjectInfo = styled.div`
  @media (min-width: 1000px) {
    position: sticky;
    top: 16%;
    z-index: ${(props) => props.index + 1};
  }
`;

const InfoWrapper = styled(animated.div)`
  width: 100%;

  @media (min-width: 1001px) {
    width: 40%;
    position: sticky;
    top: 16%;
  }
`;

const ImageWrapper = styled(animated.div)`
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

const ProjectTitle = styled(Subheader)`
  margin-bottom: 1.5rem;
  margin-top: 0px;
`;

const ProjectContent = styled(MarkdownContent)`
  font-size: 1rem;
  -webkit-line-clamp: 1;

  @media (max-width: 1000px) {
    margin-top: 2.5rem;
  }
`;

const Project = ({ node, index }) => {
  const [wasRevealed, setRevealed] = useState(false);
  const anchor = slugToAnchor(node.fields.slug);

  const fixedImageContainerRef = useRef();
  const infoRef = useRef();
  const { width } = useWindowSize();
  const id = anchor.substring(1);
  const isSmallScreen = width <= 1000;

  const images = node.frontmatter.images.map((image) => ({
    name: image.name,
    ...image.childImageSharp.original,
    placeholder: image.childImageSharp.placeholder.base64,
  }));

  const intersection = useIntersection(infoRef, {
    threshold: width > 1000 ? 0.8 : 0.001,
  });

  const isIntersecting = intersection?.isIntersecting;

  const revealAnimation = useSpring({
    opacity: wasRevealed || isIntersecting ? 1 : 0,
    transform:
      wasRevealed || isIntersecting ? 'translateY(0%)' : 'translateY(100px)',
    immediate: false,
    delay: 100,
    config: {
      reset: false,
    },
  });

  useEffect(() => {
    if (!wasRevealed && isIntersecting) {
      setRevealed(true);
    }
  }, [wasRevealed, isIntersecting]);

  const renderLayer = useCallback(
    (key, layerData) => {
      if (!layerData) {
        return null;
      }

      const { props, squares, circles } = layerData;

      return (
        <Decorations key={key} layer={key} {...props} style={revealAnimation}>
          {squares?.map((squareProps, i) => (
            <Square {...squareProps} key={`square-${i}`} />
          ))}
          {circles?.map((cirlceProps, i) => (
            <Circle {...cirlceProps} key={`circle-${i}`} />
          ))}
        </Decorations>
      );
    },
    [id]
  );

  const decorationLayers = useMemo(
    () =>
      Object.entries(
        node.frontmatter.decorations || {}
      ).map(([layerKey, layerData]) => renderLayer(layerKey, layerData)),
    [renderLayer]
  );

  return (
    <ProjectRow id={id} justifyContent="space-between">
      <InfoWrapper ref={infoRef} style={revealAnimation}>
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
          <Tags tags={node.frontmatter.technologies} />
        </ProjectInfo>
      </InfoWrapper>
      {!isSmallScreen ? (
        <>
          <ImageWrapper ref={fixedImageContainerRef} style={revealAnimation}>
            <FixedImageSet
              containerRef={fixedImageContainerRef}
              images={images}
            />
          </ImageWrapper>
          {decorationLayers}
        </>
      ) : null}
    </ProjectRow>
  );
};

export { Project };
