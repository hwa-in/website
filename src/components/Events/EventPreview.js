import React from 'react';
import { Link } from 'gatsby';
import { FaList, FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { LearnMoreLink as LearnMore } from 'styledComponents/LearnMore';
import {
  EventSection,
  HeaderSection,
  Title,
  ViewAll,
  EventCard,
} from './styles.EventPreview';

const Event = ({
  id,
  title,
  slug,
  startDate,
  endDate,
  link,
  location,
  description: {
    description,
  },
}) => {
  return (
    <EventCard>
      <div className="event-card">
        <a className="title-link" href={link}><h4>{title}</h4></a>
        <p className="description">{description}</p>
        <div className="event-details">
          <span className="event-date"><FaRegCalendarAlt /> {startDate} - {endDate}</span>
          <span className="event-location"><FaMapMarkerAlt /> {location}</span>
        </div>
        <LearnMore href={link}>Website</LearnMore>
      </div>
    </EventCard>
  )
}

const EventPreview = ({events}) => {
  return (
    <EventSection>
      <HeaderSection>
        <Title>
          <h2>Events</h2>
        </Title>
        <ViewAll>
          <Link className="events-btn" to="/events"><FaList /> All</Link>
        </ViewAll>
      </HeaderSection>
        { events.map(({event}) => (
            <Event {...event} key={event.id} />
          ))
        } 
    </EventSection>
  )
};

export default EventPreview;
