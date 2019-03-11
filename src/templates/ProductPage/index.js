import React from 'react';
import { graphql } from 'gatsby';
import { Section, Container } from 'styledComponents';
import ProductNav from 'components/Products/ProductNav';
import { navigate } from 'gatsby';
import LearnMore, { LearnMoreDiv as CatName, LearnMoreButton as ContactUs } from 'styledComponents/LearnMore';
import {
  Wrapper,
  ImageContainer,
  DetailsContainer,
  MoreInfo,
  BenefitsWrapper,
  Benefits,
  BenefitImage,
  FeaturesWrapper,
  Feature,
} from './styles';

const ProductPageTemplate  = ({ data, pageContext }) => {
  const { title, slug, subTitle, imagePreview, benefitImage, features, description, benefits } = data.contentfulProducts;
  const { categorySlug, categoryTitle, categoryName } = pageContext;
  return (
    <Section>
      <ProductNav
        categorySlug={categorySlug}
        categoryName={categoryName}
        productName={title}
        productSlug={slug}
      />
      <Container>
        <Wrapper>
          <ImageContainer>
            {imagePreview && <img src={imagePreview.fluid.src} alt={title} />}
          </ImageContainer>
          <DetailsContainer>
            <CatName>{categoryName}</CatName>
            {title && <h1>{title}</h1>}
            {subTitle && <h3>{subTitle}</h3>}
            {description && <p>{description.description}</p>}
            <MoreInfo>
              {/* <ContactUs>Request a Demo</ContactUs> */}
              <LearnMore to="/contact">Request a Demo</LearnMore>
            </MoreInfo>
          </DetailsContainer>
        </Wrapper>
      </Container>
      { benefits && 
        <Section dark>
          <Container>
            <BenefitsWrapper>
              <Benefits>
                <h2>Benefits at a glance</h2>
                <div className="benefit-content" dangerouslySetInnerHTML={{__html: 
                  benefits.childMarkdownRemark.html,}
                } />
              </Benefits>
              <BenefitImage>
                {benefitImage && <img src={benefitImage.fluid.src} alt="Benefits" />}
                {benefitImage.description && <p>{benefitImage.description}</p>}
              </BenefitImage>
            </BenefitsWrapper>
          </Container>
        </Section> 
      }

      {features && 
        <Section>
          <Container>
            <FeaturesWrapper>
              {features.map(({featureName, featureDescription}, i) => {
                return (
                  <Feature key={i}>
                    {featureName && <h2>{featureName}</h2> }
                    {featureDescription && <p>{featureDescription.featureDescription}</p> }
                    <p>&nbsp;</p>
                  </Feature>
                )
              })}
            </FeaturesWrapper>
          </Container>
        </Section>
      }
    </Section>
  )
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query ProductById($id: String!) {
    contentfulProducts(id: {eq: $id}) {
      title
      subTitle
      slug
      imagePreview {
        fluid {
          src
        }
      }
      benefitImage {
        description
        fluid {
          src
        }
      }
      features {
        featureName
        featureDescription {
          featureDescription
        }
      }
      description {
        description
      }
      benefits {
        childMarkdownRemark {
          html
        }
      }
    } 
  }
`;
