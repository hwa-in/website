import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from 'components/Hero';
import { Section, Container } from 'styledComponents';
import WhatsNew from 'components/WhatsNew';
import ProductList from 'components/Products/ProductList';
import EventPreview from 'components/Events/EventPreview';
import { media } from 'style';
import styled from 'styled-components';

const UpperSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 335px;
  margin: 0 auto;

  ${media.tablet`
    max-width: 760px
  `}

  @media (min-width: 990px) {
    flex-direction: row;
    max-width: 960px;
  }
`;

class RootIndex extends React.Component {
  render() {
    const {
      hero: {
        id,
        title,
        superScript,
        subtitle,
        background: {
          backgroundImage,
        },
        heroImage: {
          hero,
        },
      },
      allContentfulNewsStory: {
        newsStories,
      },
      featuredProducts: {
        products,
      },
      allContentfulEvent: {
        events,
      }
    } = this.props.data;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    return (
      <Fragment>
        <Helmet title={siteTitle} />
        <Hero 
          background={backgroundImage}
          heroProduct={hero}
          id={id}
          title={title}
          superScript={superScript}
          subtitle={subtitle}
        >
          <h1>Site Title</h1>
          <h3>Site Description</h3>
        </Hero>
        <Section>
          <UpperSection>
            <EventPreview events={events} />
            <WhatsNew  newsStories={ newsStories } />
          </UpperSection>
        </Section>
          <Section dark noPadBottom>
            <Container>
              <h1>New Products</h1>
            </Container>
          </Section>
          <Section dark>
            <ProductList products={products} />
          </Section>
      </Fragment>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    hero: contentfulHero(id: { eq: "edd30f5a-0c8a-52e9-8ce8-60fb8c510522"}){
      id
      title
      superScript
      subtitle
      background {
        backgroundImage: fluid {
          ...GatsbyContentfulFluid
        }
      }
      heroImage {
        hero: fluid {
          ...GatsbyContentfulFluid_tracedSVG
      }
    }
	}
  allContentfulNewsStory(limit: 2) {
    newsStories: edges {
      newsArticle: node {
          slug
          title
          dateWritten,
          description {
            description
          }
          image {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    featuredProducts: allContentfulProducts {
      products: edges {
        node {
          slug
          title
          imagePreview {
            fluid(maxWidth: 350, maxHeight: 200) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              excerpt(pruneLength: 200)
            }
          }
          subCategory
          category {
            slug
            name
          }
        }
      }
    }
    allContentfulEvent(limit: 2) {
      events: edges {
        event: node {
          id
          title
          slug
          startDate(formatString: "MM.DD.YY")
          endDate(formatString: "MM.DD.YY")
          location
          description {
            description
          }
          link
        }
      }
    }
  }
`