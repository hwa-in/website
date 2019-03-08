import styled from 'styled-components';
import { variables, media } from 'style';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  ${media.desktop`
    flex-direction: row;
  `}
`;

const LeftSection = styled.div`
  width: 100%;
  display: block;
  padding: 0 15px;

  ${media.desktop`
    width: 35%;
  `}
`;

const NewsSection = styled.div`
  background-color: ${variables.white};
  width: 100%;
  padding: 0 15px;

  ${media.desktop`
    width: 65%;
  `}
`;

export {
  Body,
  NewsSection,
  LeftSection,
}