import React from 'react';
import FAQ from 'components/Faq';
import { Section, Container } from 'styledComponents';
import { FaqsContainer, FaqTitle } from './styles';
import { graphql } from 'gatsby';

const FAQsPage = ({data}) => {
  const { faqs } = data.allContentfulFaq;
  return (
    <Section>
      <Container 
        flexDirection={"column"}
      >
        <FaqTitle>FAQS</FaqTitle>
        <FaqsContainer>
          {faqs.map(({faq}, index) => (
              <FAQ {...faq} key={index}/>
            ) 
          )}
        </FaqsContainer>
      </Container>
    </Section>
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