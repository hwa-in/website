import styled from 'styled-components';
import { variables } from 'style';

const ProductWrapper = styled.div`
  height: 100%;
  width: 350px;
  max-width: 400px;
  margin: 0 auto;
  background-color: ${variables.white};
  display: block;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-width: none;
  max-height: none;
  margin: 0 auto;
  vertical-align: middle;
`;

const ProductDetails = styled.div`
  padding: 1rem;
`;

const ProductTitle = styled.h4`
  font-weight: 500;
  line-height: 1.5rem;
  margin-bottom: .5rem;
  font-size: 1.125rem;
`;

const ProductDescription = styled.div`
  margin-bottom: 3rem;

  p {
    font-size: 1rem;
    line-height: 1.375rem;
    margin-bottom: 1.25rem;
    font-weight: 400;
  }
`;

export {
  ProductWrapper,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductDescription,
};