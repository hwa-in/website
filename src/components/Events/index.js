import React from 'react';
import { Link } from 'gatsby';
import { FaList, FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { LearnMoreLink as LearnMore } from 'styledComponents/LearnMore';
import { Section } from 'styledComponents';
import { 
  EventSection,
  HeaderSection,
  Title,
  Description,
  HeaderPhotos,
  EventCard,
} from './styles';

const Event = ({
  id,
  title,
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
        <a className="title-link" href={link}>{title}</a>
        <p className="description">{description}</p>
        <div className="event-details">
          <span className="event-date"><FaRegCalendarAlt /> {startDate} - {endDate}</span>
          <span className="event-location"><FaMapMarkerAlt /> {location}</span>
        </div>
      </div>
      <div className="learn-more">
        <LearnMore href={link}>Website</LearnMore>
      </div>
    </EventCard>
  )
}

const Events = ({events}) => {
  return (
    <Section noPadBottom>
      <HeaderSection>
        <Title>HWA-IN Events</Title>
        <Description>Hodor... Hodor hodor. Hodor, hodor. Hodor. Hodor hodor HODOR! Hodor. Hodor, hodor, hodor hodor. Hodor? Hodor...</Description>
        <HeaderPhotos>
          <div className="header-photo__container">
            <img className="header-photo__image" src="https://www.eye-tech-solutions.com/infocenter/veranstaltungen/image-thumb__720__teaser_image/veranstaltung-impression-doc-2018.jpeg" />
          </div>
          <div className="header-photo__container">
            <img className="header-photo__image" src="https://www.eye-tech-solutions.com/infocenter/veranstaltungen/image-thumb__719__teaser_image/veranstaltung-impression-escrs-2016.jpeg" />
          </div>
          <div className="header-photo__container">
            <img className="header-photo__image" src="https://www.eye-tech-solutions.com/infocenter/veranstaltungen/image-thumb__718__teaser_image/veranstaltung-impression-escrs-2017.jpeg" />
          </div>
        </HeaderPhotos>
      </HeaderSection>
      <EventSection>
        <div className="event-list">
          { events.map(({event}) => (
              <Event {...event} key={event.id} />
            ))
          } 
        </div>
      </EventSection>
    </Section>
  )
};

export default Events;
