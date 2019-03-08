import React from 'react';
import { graphql } from 'gatsby';
import Events from 'components/Events';

const EventPage = ({data}) => {
  const { events } = data.allContentfulEvent;
  return <Events events={events} />
};

export default EventPage;

export const eventQuery = graphql`
  query AllEvents {	
    allContentfulEvent {
      events: edges {
        event: node {
          id
          title
          startDate
          endDate
          location
          link
          description {
            description
          }
        }
      }
    }
  }
`
