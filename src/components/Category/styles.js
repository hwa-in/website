import styled from 'styled-components';
import { Container } from 'styledComponents';

const CategoryContainer = styled(Container)`
  min-height: 200px;
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