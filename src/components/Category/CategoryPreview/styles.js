import styled from 'styled-components';
import { variables } from 'style';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${variables.white};
  margin-bottom: 2rem;

  @media (min-width: 990px) {
    display: flex;
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  @media (min-width: 990px) {
    width: 50%; 
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
    margin-bottom: 1.25rem;
    font-weight: 400;
  }

  @media (min-width: 990px) {
    width: ${props => props.width ? props.width : undefined};
  }
`;

const MoreInfo = styled.div`
  position: relative;
  small {
    color: ${variables.midGrey};
  }
`;

const ReadMore = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  svg {
    fill: ${variables.darkGreen};
  }
`;

export {
  Wrapper,
  ImageContainer,
  DetailsContainer,
  MoreInfo,
  ReadMore,
}