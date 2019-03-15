import React from 'react';
import { FaPrint, FaPhone, FaRegEnvelope } from 'react-icons/fa'
import {
  ContactCardWrapper,
  ContactDetails,
  MoreInfo,
} from './styles';
import { LearnMoreLink as LearnMore } from 'styledComponents/LearnMore';

const ContactCard = (contact) => (
  <ContactCardWrapper>
    <ContactDetails>
      <p className="title">{contact.title}</p>
      { contact.address && <div className="address"><p>{contact.address.address}</p></div> }
      { contact.phoneNumber && <p className="phone"><FaPhone /> {contact.phoneNumber}</p> }
      { contact.faxNumber && <p className="fax"><FaPrint /> {contact.faxNumber}</p>}
    </ContactDetails>
    <MoreInfo>
      {contact.emailAddress && 
        <LearnMore href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer">
          <FaRegEnvelope /> Email
        </LearnMore>
      }
    </MoreInfo>
  </ContactCardWrapper>
);

const ContactInfo = ({contactInfo}) => (
  contactInfo.map(({contact}) => {
    return (
      <ContactCard key={contact.contentful_id} {...contact} />
    )
  })
);

export default ContactInfo;
