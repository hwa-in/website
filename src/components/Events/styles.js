import styled from 'styled-components';
import { variables } from 'style';

const EventSection = styled.article`
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  position: relative;
  min-height: 1px;
  padding: 0 15px;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.div`
  flex: 0 0 66.66667%;
  max-width: 66.66667%; 

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
  flex: 0 0 33.33333%;
  max-width: 33.33333%;

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

const EventCard = styled.div`
  margin: .5em 0;
  padding: .75em .25em;
  background-color: ${variables.offWhite};
  display: flex;
  flex-wrap: wrap;

  .event-card {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 100%;
    max-width: 100%;
    text-align: left;

    .title-link {
      cursor: pointer;
      color: ${variables.darkGreen};
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1.5rem;
      margin-bottom: .5rem;
      transition: font-size .3s ease;

      &:hover {
        font-size: 1.25rem;
      }
    }
    .description {
      font-size: .875rem;
      line-height: 1.25rem;
      font-weight: 400;
    }

    .event-details {
      margin: .5rem 0;
      font-size: .875rem;
      line-height: 1.25rem;
      font-weight: 400;

      span {
        padding-left: 0;
        padding-right: 1rem;

        svg {
          margin-right: .2rem;
          padding-right: .25em;
        }
      }
      .event-date {
      }
    }
  }
`;

export {
  EventSection,
  HeaderSection,
  Title,
  ViewAll,
  EventCard,
};


