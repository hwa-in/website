import React from 'react';
import { Section, Container } from 'styledComponents';
import ProductNav from 'components/Products/ProductNav';
import { Tabs, Tab } from '@material-ui/core';
import { LearnMoreDiv as CatName } from 'styledComponents/LearnMore';
import { graphql } from 'gatsby';
import ProductCard from './ProductCard';
import { variables } from 'style';
import { withStyles } from '@material-ui/core/styles';
import {
  Wrapper,
  ImageContainer,
  DetailsContainer,
  ProductsWrapper
} from './styles';

const styles = (props) => ({
  tabsIndicator: {
    backgroundColor: `${variables.darkGreen}`,
  },
})

const ProductContainer = ({products, category}) => {
  return (
    <ProductsWrapper>
      {
        products.map((product, index) => {
          return (
            <ProductCard 
              key={index}
              {...product}
              categorySlug={category}
            />
          )
        })
      }
    </ProductsWrapper>
  )
}

class CategoryPage extends React.Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render(){
    const { 
      pageContext: {
        slug, title, name,
      }, 
      data: {
        categoryQuery: {
          products,
          description,
          categoryImage,
        },
      },
      classes,
    } = this.props;
    const { value } = this.state;
    const allProducts = products;
    let posterior = products.filter(product => product.subCategory === "Posterior")
    let anterior = products.filter(product => product.subCategory === "Anterior")
    console.log(slug)
    return (
      <Section noPadBottom>
        <ProductNav
          categorySlug={slug}
          categoryName={name}
        />
        <Container>
          <Wrapper>
            <ImageContainer>
              {categoryImage && <img src={categoryImage.fluid.src} alt={title} />}
            </ImageContainer>
            <DetailsContainer>
              <CatName>{name}</CatName>
              {title && <h1>{title}</h1>}
              {description && <p>{description.description}</p>}
            </DetailsContainer>
          </Wrapper>
        </Container>
        <Section noPad>
          <Container>
            <Tabs
              value={value}
              onChange={this.handleChange}
              classes={{ indicator: classes.tabsIndicator }}
              centered
            >
              <Tab label="All Products" />
              <Tab label="Anterior" />
              <Tab label="Posterior" />
            </Tabs>
          </Container>
          <Section dark>
            <Container>
              {value === 0 && <ProductContainer products={allProducts} category={slug} />}
              {value === 1 && <ProductContainer products={anterior} category={slug} /> }
              {value === 2 && <ProductContainer products={posterior} category={slug} />}
            </Container>
          </Section>
        </Section>
      </Section>  
    )
  }
}

export default withStyles(styles)(CategoryPage);

export const ProductQuery = graphql`
  query CategoryBySlug($slug: String!) {
    categoryQuery: contentfulCategory(slug: { eq: $slug}) {
      description {
        description
      }
      categoryImage {
        fluid {
          src
        }
      }
      products {
        id
        slug
        title
        price
        description {
          childMarkdownRemark {
            excerpt(pruneLength: 200)
          }
        }
        subCategory
        imagePreview {
          fluid(maxWidth: 350, maxHeight: 200) {
            src
          }
        }
      }
    }
  }
`;