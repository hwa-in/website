import styled from 'styled-components';
import { Container } from 'styledComponents';
import { variables, media } from 'style';

const HeaderSection = styled.div`
  display: block;
  width: 100%;
  margin: 3rem auto 0;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 2.125rem;
  margin-bottom: 1.5rem;
  color: ${variables.darkGreen};
  text-align: left;

  ${media.tablet`
    font-size: 3rem;
    line-height: 3.375rem;
    margin-bottom: 2rem;
  `}

  ${media.desktop`
    font-size: 3rem;
    line-height: 3.375rem;
  `}
`;

const Description = styled.p`
  text-align: left;
  margin-bottom: 3rem;
  font-weight: 400;
  width: 95%;
  max-width: 540px;
  font-size: 1.5rem;
  line-height: 1.875rem;
  font-weight: 300;

  ${media.tablet`
    max-width: 960px;
  `}

  ${media.desktop`
    max-width: 1180px;
  `}
`;

const CategorySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CategoryContainer = styled(Container)`
  min-height: 200px;
`;

const CategoryTitle = styled.h2`
  text-align: center;
`

const SkuWrapper = styled.div`
  height: 0;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: 0;

  &.skus-enter {
    opacity: 0.01;
    max-height: 0;
  }

  &.skus-enter-active {
    opacity: 1;
    max-height: 600px;
    height: auto;
    transition: all 300ms ease-in-out;
  }
  &.skus-enter-done {
    opacity: 1;
    max-height:600px;
    height: auto;
  }

  &.skus-exit {
    opacity: 1;
    max-height:600px;
    height: auto;
  }

  &.skus-exit-active {
    opacity: 0;
    max-height: 0;
    transition: all 300ms ease-in-out;
  }

  h2 {
    padding: 5px 30px 25px;
  }
`;

export {
  HeaderSection,
  Title,
  Description,
  CategorySection,
  CategoryContainer,
  CategoryTitle,
  SkuWrapper,
};
