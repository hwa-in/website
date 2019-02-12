import React, { Fragment } from 'react';
import Section from '../../components/styledComponents/Section';
import FAQ from '../../components/Faq';
import { graphql } from 'gatsby';
import {FaqStyleContainer} from '../../components/Faq/styles';

const FAQsPage = ({data}) => {
  const {faqs} = data.allContentfulFaq;
  return (
    <Fragment>
      <Section>
        <h2>FAQS</h2>
        <FaqStyleContainer>
        {faqs.map(({faq}, index) => {
          return <FAQ {...faq} key={index}/>
        })}
        </FaqStyleContainer>
      </Section>
    </Fragment>
  )
};

export default FAQsPage;

export const faqQuery = graphql`
query AllFaqs {	
  allContentfulFaq {
    faqs: edges {
      faq: node{
        title
        answer {
          answer
        }
      }
    }
  }
}
`