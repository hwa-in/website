import styled from 'styled-components';
import { variables } from 'style';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${variables.white};
  margin-bottom: 2rem;
  position: relative;

  @media (min-width: 990px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageContainer = styled.div`
  @media (min-width: 990px) {
    width: 66%;
    display: flex;
    align-items: center;

    img {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  }
`;

const DetailsContainer = styled.div`
  padding: 1rem;

  h3 {
    color: ${variables.darkGreen};
    margin-bottom: .5rem;
    font-weight: 500;
  }

  p {
    font-size: .875rem;
    line-height: 1.25rem;
    margin-bottom: 1.125rem;
    font-weight: 400;
  }

  small {
    color: ${variables.midGrey};
  }

  @media (min-width: 990px) {
    padding: 1rem 2rem 3rem;
    width: 33%;
    small {
      margin-bottom: 1.5rem;
    }
  }
`;

const ReadMore = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  padding: 1rem;
  
  svg {
    fill: ${variables.darkGreen};
  }
`;

export {
  Wrapper,
  ImageContainer,
  DetailsContainer,
  ReadMore,
}