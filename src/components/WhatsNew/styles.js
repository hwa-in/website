import styled from 'styled-components';
import { variables } from 'style';

const NewsSection = styled.article`
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
  position: relative;
  min-height: 1px;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-right: 15px;
  padding-left: 15px;
`;

const Title = styled.div`
  flex: 0 0 58.33333%;
  max-width: 58.33333%;

  
  h2 {
    font-weight: 300;
    font-size: 1.625rem;
    margin-bottom: .5rem;
  } 
`;

const ViewAll = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  flex: 0 0 41.66667%;
  max-width: 41.66667%;

  a {
    float: right;
    padding: .25rem .75rem;
    font-size: 14px;
    line-height: .9rem;
    border-radius: 2px;
    color: ${variables.darkGreen};
    background-color: ${variables.offWhite};
    border: 0; 
    transform: translateY(25%);

    svg { 
      font-size: 14px;
      margin-right: 6px;
    }
  }
`;

const NewsContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const NewsCard = styled.div`
  flex; 0 0 50%;
  max-width: 50%;
  padding: 0 15px;
  display: block;
`;

const ImageContainer = styled.div`
  height: 195px;
` 

const NewsImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

const NewsContent = styled.div`
  margin-top: 1rem;

  .title-link {
    pointer: cursor;
    h4 {
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.5rem;
      margin-bottom: .5rem;
      color: ${variables.darkGreen};
    }
  }

  .description {
    font-size: .875rem;
    line-height: 1.25rem;
    margin-bottom: 1.125rem;
    font-weight: 400;
  }
`;

export {
  NewsSection,
  HeaderSection,
  Title,
  ViewAll,
  NewsContainer,
  NewsCard,
  ImageContainer,
  NewsImage,
  NewsContent,
};

