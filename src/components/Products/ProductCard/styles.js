import styled from 'styled-components';
import Img from 'gatsby-image';

const ImgWrapper = styled.div`
  height: 200px;
  width: 100%;
`;

const ProductImg = styled(Img)`
  height: 100%;
  width: 100%;
  object-fit: contain;

  img {
    object-fit: contain !important;
  }
`;

export {
  ImgWrapper,
  ProductImg,
};
