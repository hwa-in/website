import styled from 'styled-components';
import { variables, media } from 'style';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${variables.white};
  margin: 50px 0 4rem;
  padding: 0 1rem;

  @media (min-width: 990px) {
    display: flex;
    flex-direction: row;
    min-height: 500px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  @media (min-width: 990px) {
    width: 50%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const DetailsContainer = styled.div`
  padding: 0 15px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  justify-content: space-around;

  h1 {
    color: ${variables.darkGreen};
    font-size: 3rem;
    font-weight: 400;
    line-height: 3.375rem;
    margin-bottom: .5rem 0 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    color: ${variables.midGrey};
  }

  p {
    margin-bottom: 1.25rem;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (min-width: 990px) {
    width: 50%;
  }
`;

const MoreInfo = styled.div`
  
`;

const BenefitsWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 990px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 400px;
  }
`;

const Benefits = styled.div`
  padding: 0 15px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.625rem;
  }

  .benefit-content {
    ul {
      padding: 0 1rem;

      p {
        font-size: 1rem;
        line-height: 1.375rem;
        margin-bottom: 1.25rem;
      }

      li {
        font-size: 1rem;
        line-height: 1.375rem;
        margin-bottom: 1.25rem;
      }
    }

    p {
      font-size: 1rem;
      line-height: 1.375rem;
      margin-bottom: 1.25rem;
    }
  }

  @media (min-width: 990px) {
    width: 50%;
  }
`;

const BenefitImage = styled(ImageContainer)`
  flex-direction: column;
  align-items: start;

  img {
    height: auto;
  }
  p {
    font-size: .875rem;
    line-height: 1.25rem;
    margin: .5rem 0 1.25rem;
  }

  @media (min-width: 990px) {
    align-items: start;
  }
`;

const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  >:last-child {

    ${media.tablet`
      width: 50%;
      flex: none;
    `}
  }
`;

const Feature = styled.div`
  flex: 1 1 50%;
  padding: 0 15px;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.625rem;
    margin-bottom: .75rem;
    hyphens: auto;
  }

  p {
    font-size: 1rem;
    line-height: 1.375rem;
    margin-bottom: 1.25rem;
    font-weight: 400;
  }
`;

export {
  Wrapper,
  ImageContainer,
  DetailsContainer,
  MoreInfo,
  BenefitsWrapper,
  Benefits,
  BenefitImage,
  FeaturesWrapper,
  Feature,
}