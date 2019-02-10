import styled from 'styled-components';

const NewProductWrapper = styled.article`
  width: 50%;
  margin: 0 auto;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  width: 100%;
  height: 300px;
`;


const ImgWrapper = styled.div`
  width: 50%;
`;

const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export {
  NewProductWrapper,
  ProductContainer,
  ImgWrapper,
  ProductImg,
  ProductInfo,
};
