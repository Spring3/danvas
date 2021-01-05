import React, { useMemo } from 'react';
import styled from 'styled-components';

const Circular = styled.div`
  width: 260px;
  height: 320px;
  background: rgba(125, 196, 23, 0.2);
  position: absolute;
`;

const Circle = () => {
  // from 30 to 50
  const rnd = () => Math.random() * (50 - 35) + 35;

  const initial = useMemo(() => ({
    borderRadius: `${rnd()}% ${rnd()}% ${rnd()}% ${rnd()}% / ${rnd()}% ${rnd()}% ${rnd()}% ${rnd()}%`,
  }), []);

  return <Circular style={initial} />;
};

export { Circle };
