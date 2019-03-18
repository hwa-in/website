import React, { Fragment } from 'react';
import { Section, Container, LearnMore } from 'styledComponents';
import { Link, graphql } from 'gatsby';
import {
  ContactHeader,
  ContactWrapper,
  DiscoverMore,
} from 'styledComponents/pages/Contact';
import ContactForm from 'components/Form';
import ContactInfo from 'components/ContactInfo';


const ContactPage = ({ data, location }) => {
  const { contactInfo } = data.contactQuery;
  const { state } = location;
  return (
    <Fragment>
      <Section padBottom="80px">
        <Container>
          <ContactHeader>
            <h1>HWA-IN Contact: Get in touch with us!</h1>
            <h3>Do you have a question on our products, or other questions or comments? We’ll be glad to help. We look forward to hearing from you.</h3>
            <p>How can we support you? Please briefly describe your question.*</p>
          </ContactHeader>
        </Container>
        <Container style={{alignItems: 'center'}}>
          <Section>
            <ContactWrapper>
              {/* Form  */}
              <div className="form">
                <ContactForm 
                  product={state && state}
                />
              </div>
              {/* Contact info */}
              <div className="contact">
                <ContactInfo
                  contactInfo={contactInfo}
                />
              </div>
            </ContactWrapper>
          </Section>
            <p>The most frequently-asked questions about our products with answers are <Link to="/faq">here.</Link></p>
        </Container>
      </Section>
    </Fragment>
  )
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactInfo {
    contactQuery: allContentfulContactInfo {
      contactInfo: edges {
        contact: node {
          contentful_id
          title
          phoneNumber
          emailAddress
          faxNumber
          address {
            address
          }
        }
      }
    }
  }
`