import styled from 'styled-components';

const FaqsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  max-width: 1080px;
  padding-top: 50px;
`;

const FaqTitle = styled.h1`
  margin: 0 auto;
`;

export {
  FaqsContainer,
  FaqTitle,
};
