import styled from 'styled-components';
import { variables, media } from 'style';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  ${media.desktop`
    flex-direction: row;
    align-items: start;
  `}
`;

const LeftSection = styled.div`
  width: 100%;
  display: block;

  ${media.desktop`
    width: 33%;
    padding-right: 15px;
  `}
`;

const NewsSection = styled.div`
  width: 100%;

  ${media.desktop`
    width: 65%;
    padding-right: 15px;
  `}
`;

export {
  Body,
  NewsSection,
  LeftSection,
}