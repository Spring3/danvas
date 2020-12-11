import styled from 'styled-components';

const Header = styled.h1`
  font-weight: 3rem;

  @media (orientation: landscape) and (min-width: 750px) and (max-width: 900px) {
    font-weight: 2rem;
  }

  @media (max-width: 750px) {
    font-weight: 1.5rem;
  }
`;

const Subheader = styled.h2`
  font-weight: 2rem;

  @media (orientation: landscape) and (min-width: 750px) and (max-width: 900px) {
    font-weight: 1.5rem;
  }

  @media (max-width: 750px) {
    font-weight: 1rem;
  }
`;

export { Header, Subheader };
