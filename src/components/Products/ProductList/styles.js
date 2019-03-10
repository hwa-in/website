import styled from 'styled-components';
import { LearnMore as Link } from 'styledComponents';
import { variables, media } from 'style';

const ProductContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px;
  height: 100%;
  position: relative;
  ${media.tablet`
    width: 350px;
  `}
`;


const ImgWrapper = styled.div`
  height: 200px;
  width: 100%;
`;

const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  height: 50%;
  width: 100%;
  display: block;
  padding: 1rem;
  margin-bottom: 3rem !important;

  h3 {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: .5rem;
    color: ${variables.darkGreen};
    text-transform: capitalize;
  }

  p {
    font-size: 1rem;
    line-height: 1.375rem;
    color: ${variables.darkGrey};
    margin-bottom: 1.25rem;
  }
`;

const LearnMore = styled(Link)`
  position: absolute;
  bottom: 16px;
  width: 100px;
  padding: 2px 0;
`;

export {
  ProductContainer,
  ImgWrapper,
  ProductImg,
  ProductInfo,
  LearnMore,
};
