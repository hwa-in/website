import React from 'react';
import { Event } from 'components/Events'
import { H2 } from 'styledComponents/Header';

const Events = ({ events }) => {

  return (
    <div>
      <H2>Events</H2>
      {
        events.map(({event}) => (
          <Event key={event.id} {...event} />
        ))
      }
    </div>
  )
};

export default Events;