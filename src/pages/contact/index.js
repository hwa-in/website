import React, { Fragment } from 'react';
import { Section, Container, LearnMore } from 'styledComponents';
import Input from '@material-ui/core/Input';
import { Link } from 'gatsby';
import {
  ContactHeader,
  ContactWrapper,
  DiscoverMore,
} from 'styledComponents/pages/Contact';

const ContactPage = (data) => {
  console.log(data)
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
        <Container>
          <Section>
            <ContactWrapper>
              {/* Form  */}
              <div className="form">
                Contact Form
              </div>
              {/* Contact info */}
              <div className="contact">
                Contact info
              </div>
            </ContactWrapper>
          </Section>
            <p>The most frequently-asked questions about our products with answers are <Link to="/faq">here.</Link></p>
        </Container>
      </Section>
      <Section 
        dark
        padBottom="60px"
      >
        <Container>
          <DiscoverMore>
            <h3>Discover our innovative products</h3>
            <p>State-of-the-art eye laser systems, diagnostic systems, treatment tools and more.</p>
            <LearnMore 
              style={{width: '100px', marginTop: '2rem' }}
              to="/products"
              >
            Products
            </LearnMore>
          </DiscoverMore>
        </Container>
      </Section>
    </Fragment>
  )
};

export default ContactPage;