import styled from 'styled-components';
import { variables, media } from 'style';

const HeaderSection = styled.div`
  display: block;
  width: 100%;
  margin: 3rem auto 0;
  padding: 0 15px 4rem;
  ${media.tablet`
    max-width: 720px;
  `}

  ${media.desktop`
    max-width: 1140px;
  `}
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 2.125rem;
  margin-bottom: 1.5rem;
  color: ${variables.darkGreen};
  text-align: center;

  ${media.tablet`
    font-size: 3rem;
    line-height: 3.375rem;
    margin-bottom: 2rem;
  `}

  ${media.desktop`
    font-size: 3rem;
    line-height: 3.375rem;
  `}
`;

const Description = styled.p`
  text-align: center;
  margin: 0 auto 1.25rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  width: 95%;
  max-width: 540px;

  ${media.tablet`
    line-height: 1.375rem;
    max-width: 960px;
  `}

  ${media.desktop`
    max-width: 1140px;
  `}
`;

const HeaderPhotos = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;

  .header-photo__container {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 15px;

    ${media.tablet`
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    `}

    ${media.desktop`
    `}

    .header-photo__image {
      vertical-align: middle;
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`;

const EventSection = styled.div`
  padding: 4rem 15px;
  width: 100%;
  background-color: ${variables.offWhite};

  .event-list {
    width: 95%;
    margin: 0 auto;
    max-width: 540px;
  
    ${media.tablet`
      max-width: 960px;
    `}
  
    ${media.desktop`
      max-width: 1140px;
    `}
  }
`;

const EventCard = styled.div`
  margin: 1rem 0 0;
  background-color: ${variables.white};
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `}
  .event-card {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding: 1.5rem;

    ${media.tablet`
      width: 70%
    `}

    .title-link {
      border: 0;
      cursor: pointer;
      color: ${variables.darkGreen};
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.375rem;
      padding-bottom: 10px;
      transition: font-size .3s ease;

      :hover {
        font-size: 1.75rem;
      }
    }

    .description {
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.375rem;
      margin-bottom: .5rem;
    }
    .event-details {
      span {
        padding: .25rem 1rem .25rem 0;
        display: inline-block;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: 1px;
        font-size: .875rem;
        line-height: 1.125rem;

        svg {
          margin-right: .2rem;
          padding-right: .25em;
        }
      }
      .event-date {
      }
    }
  }


  .learn-more {
    width: 100%;
    text-align: left;
    padding-left: 1.5rem;
    padding-bottom: 2rem;

    ${media.tablet`
      width: 30%;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  }
`;

export {
  EventSection,
  HeaderSection,
  Title,
  Description,
  HeaderPhotos,
  EventCard,
};


