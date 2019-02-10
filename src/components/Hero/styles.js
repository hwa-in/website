import styled from 'styled-components';
import {
  variables,
  media
} from '../../style';

const Container = styled.div`
  height: 450px;
  position: relative;
  .gatsby-image-wrapper {
    height: 100%;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  text-align: center;
  ${media.tablet`
    width: 600px;
    left: 50%;
    margin-left: -300px;
  `}
  height: 100%;
  top: 0;

  color: ${variables.white};

  h1 {
    font-weight: 100;
    margin-top: 0;
    font-size: 2rem;
    line-height: 1.18;
    width: 75%;
    ${media.tablet`
      width: 100%;
      font-size: 2.625rem;
      margin-bottom: 2.5rem;
    `}

    ${media.desktop`
      line-height: 1.25rem;
    `}
  }

  p {
    color: ${variables.white};
    width: 80%;
    ${media.tablet`
      width: 500px;
    `}
  }
`;


export { Container, HeroContent };
