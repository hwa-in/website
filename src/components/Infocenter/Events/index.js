import React from 'react';
import { Event } from 'components/Events'
import { H2 } from 'styledComponents/Header';
import { ViewAll } from 'styledComponents/Button';
import styled from 'styled-components';

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Events = ({ events }) => {
  return (
    <div>
      <HeaderSection>
        <H2>Events</H2>
        <ViewAll to="/infocenter/events" text="All" light/>
      </HeaderSection>
      {
        events.map(({event}) => (
          <Event key={event.id} {...event} />
        ))
      }
    </div>
  )
};

export default Events;