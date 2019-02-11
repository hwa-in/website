import React, { Fragment } from 'react';
import Section from '../../components/styledComponents/Section';
import FAQ from '../../components/Faq';

const FAQsPage = ({data}) => {
  const {faqs} = data.allContentfulFaq;
  return (
    <Fragment>
      <Section>
        FAQs
        {faqs.map(({faq}, index) => {
          console.log(faq)
          return <FAQ {...faq} key={index}/>
        })}
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