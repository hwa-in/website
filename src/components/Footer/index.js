import React, { Fragment } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby'
import {
  FooterContainer,
  RouteSection,
  FooterInfo,
  ContactInfo,
} from './styles';
import routes from '../../routes';

const PureFooter = ({categories}) => {
  return (
    <FooterContainer>
      <FooterInfo>
        { categories.map(({category}, i) => (
          <RouteSection key={i}>
            <Link to={`/products/${category.slug}`}><h4>{category.name}</h4></Link>
            <ul>
              {
                category.products.map(({productSlug, productTitle}, i) => (
                  <li key={i}>
                    <Link to={`/products/${category.slug}/${productSlug}`}>
                      {productTitle}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </RouteSection>
        ))}
        <RouteSection>
          <h4>General</h4>
            <ul>
              <li>
                <Link to='/infocenter'>
                  Infocenter
                </Link>
              </li>
              <li>
                <Link to='/infocenter/news'>
                  News
                </Link>
              </li>
              <li>
                <Link to='/infocenter/events'>
                  Events
                </Link>
              </li>
              <li>
                <Link to='/recruit'>
                  Jobs and Careers
                </Link>
              </li>
              <li>
                <Link to='/faqs'>
                  FAQs
                </Link>
              </li>
            </ul>
        </RouteSection>
      </FooterInfo>
      <ContactInfo>
        <Link to='/contact'><h4>Contact</h4></Link>
        <ul>
          <li>客服專線：02-2762-2100</li>
          <li>傳真：02-2760-7630</li>
          <li>總公司：臺北市松山區民生東路5段168號</li>
        </ul>
      </ContactInfo>
        <h3>樺瑩企業股份有限公司 © 2014 Taiwan Hwa-in Ent. Co., Ltd. All Rights Reserved.</h3>
  </FooterContainer>
  )
};

const Footer = () => (
  <Fragment>
    <StaticQuery
      query={graphql`
        query FooterQuery {
          categorQuery: allContentfulCategory {
            categories: edges {
              category: node {
                name
                slug
                categoryImage {
                  fluid {
                    src
                  }
                }
                products {
                  productTitle: title
                  productSlug: slug
                }
              }
            }
          }
        }
      `}
      render={({categorQuery}) => {
        return (
          <PureFooter
            {...categorQuery}
          />
        )
      }}
    />
  </Fragment>
);

export default Footer;