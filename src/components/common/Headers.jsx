import styled from 'styled-components';

const Header = styled.h1`
  font-size: 3rem;

  @media (orientation: landscape) and (min-width: 750px) and (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 750px) {
    font-size: 1.8rem;
  }
`;

const Subheader = styled.h2`
  font-size: 2rem;

  @media (orientation: landscape) and (min-width: 750px) and (max-width: 900px) {
    font-size: 1.5rem;
  }

  @media (max-width: 750px) {
    font-size: 1.2rem;
  }
`;

export { Header, Subheader };
