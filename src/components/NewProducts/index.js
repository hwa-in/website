import React, { Fragment } from 'react';
import { StaticQuery, graphql } from "gatsby"

const NewProductsPure = () => {
  return (
    <div>
      Pure Component
    </div>
  )
};

const NewProducts = () => (
  <StaticQuery
    query={graphql`
      query {
        allStripeSku {
          products: edges {
            product: node { 
              id
              product {
                name
                images
                caption
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      return (
        <Fragment>
          <NewProductsPure />
        </Fragment>
      )
    }}
  />
);

export default NewProducts;
