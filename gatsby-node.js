const Promise = require('bluebird')
const path = require('path')

const handleErrors = (error) => {
  console.error(error)
  reject(error)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPages = new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          handleErrors(result.errors);
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })

  const productPages = new Promise((resolve, reject) => {
    const productPage = path.resolve('./src/templates/product-page.js');
    resolve(
      graphql(
        `
        {
          allStripeSku {
            products: edges {
              product: node {
                id
              }
            }
          }
        }
        `
      ).then(({ data, errors }) => {
        if ( errors ) {
          handleErrors(errors)
        }
        
        const { products } = data.allStripeSku
        products.forEach(({ product }, index) => {
          console.log(product)
          const { id } = product
          createPage({
            path: `/product/${id}/`,
            component: productPage,
            context: {
              id 
            },
          })
        })
      })
    )
  })
  return Promise.all([blogPages, productPages])
}
