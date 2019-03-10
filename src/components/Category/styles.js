import styled from 'styled-components';
import { Container } from 'styledComponents';
import { media } from 'style';

const CategoryContainer = styled(Container)`
  min-height: 200px;
  margin-bottom: 4rem;

  @media (min-width: 992px) {
    max-width: 960px;
  }

  ${media.desktop`
    max-width: 1180px;
  `}
`;



const CategoryTitle = styled.h2`
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export {
  CategoryContainer,
  CategoryTitle,
};