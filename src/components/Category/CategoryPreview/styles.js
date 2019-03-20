import styled from 'styled-components';
import { variables } from 'style';
import Img from 'gatsby-image'

const Wrapper = styled.div`
  width: 100%;
  background-color: ${variables.white};
  margin-bottom: 2rem;
  padding: 0 1rem;

  @media (min-width: 990px) {
    display: flex;
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  @media (min-width: 990px) {
    width: 25%;
    width: ${props => props.width ? props.width : undefined};
    display: flex;
    align-items: center;
    padding: 0 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Image = styled(Img)`
  width: 100%;
  height: 100%;

  img {
    object-fit: contain !important;
  }
`;

const DetailsContainer = styled.div`
  padding: 0 15px 2.5rem;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;

  h3 {
    color: ${variables.darkGreen};
    font-size: 1.625rem;
    font-weight: 400;
    line-height: 1.875rem;
    margin: .5rem 0;
  }

  p {
    margin-bottom: 1.25rem;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (min-width: 990px) {
    width: ${props => props.width ? props.width : '75%'};
  }
`;

const MoreInfo = styled.div`
  position: relative;
  small {
    color: ${variables.midGrey};
  }
`;

const ReadMore = styled.button`
  position: absolute;
  left: 1rem;
  bottom: 0;
  display: flex;
  overflow: hidden;
  padding: .28rem .75rem;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 2px;
  align-items: center;
  padding-left: 0;
  svg {
    fill: ${variables.darkGreen};
  }

  span {
    padding-left: .5rem;
  }

  :focus {
    outline: 0;
  }
`;

export {
  Wrapper,
  ImageContainer,
  DetailsContainer,
  MoreInfo,
  ReadMore,
  Image,
}