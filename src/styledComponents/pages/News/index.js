import styled from 'styled-components';
import { media, variables } from 'style';

const NewsSection = styled.section`
  width: 90%;
  padding: 60px 0;
  margin: 0 auto;

  h1 {
    color: ${variables.darkGreen};
  }

  ${media.tablet`
  
  `}

  ${media.desktop`
  
  `}
`;

const Articles = styled.div`
  display: block
  width: 90%;
  margin: 0 auto;
  max-width: 690px;

  @media (min-width: 990px) {
    max-width: 930px;
  }

  ${media.desktop`
    max-width: 1140px;
  `}
`;

export {
  NewsSection,
  Articles,
};


