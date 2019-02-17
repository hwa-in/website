const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPages = new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/BlogPost/index.js')
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
          console.error(result.errors);
          reject(result.errors);
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
    const productPage = path.resolve('./src/templates/ProductPage/index.js');
    resolve(
      graphql(
        `
        {
          allStripeSku {
            skus: edges {
              sku: node {
                skuId: id 
                product {
                  productId: id
                }
              }
            }
          }
        }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const { skus } = result.data.allStripeSku;
        skus.forEach(({ sku }) => {
          createPage({
            path: `/products/${sku.product.productId}/${sku.skuId}/`,
            component: productPage,
            context: {
              id: sku.skuId,
              productId: sku.product.productId,
            },
          })
        })
      })
    )
  })

  const jobPostPages = new Promise((resolve, reject) => {
    const jobPageTemplate = path.resolve('./src/templates/JobPage/index.js');
    resolve(
      graphql(
        `
        {
          allContentfulJobs {
            jobs: edges {
              job: node {
                id: contentful_id
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const { jobs } = result.data.allContentfulJobs
        jobs.forEach(({ job }, index) => {
          createPage({
            path: `/recruit/${job.id}/`,
            component: jobPageTemplate,
            context: {
              id: job.id
            },
          })
        })
      })
    )
  })

  const newsArticlePages = new Promise((resolve, reject) => {
    const newsArticleTemplate = path.resolve('./src/templates/NewsArticle/index.js');
    resolve(
      graphql(
        `
        {
          allContentfulNewsStory {
            articles: edges {
              article: node {
                  slug
                }
              }
            }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const { articles } = result.data.allContentfulNewsStory
        articles.forEach(({ article }, index) => {
          createPage({
            path: `/news/${article.slug}/`,
            component: newsArticleTemplate,
            context: {
              slug: article.slug,
            },
          })
        })
      })
    )
  })
  const productCategoryPages = new Promise((resolve, reject) => {
    const productCategory = path.resolve('./src/templates/ProductCategoryPage/index.js');
    resolve(
      graphql(
        `
        {
          allStripeProduct {
            categories: edges {
              category: node {
                id
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const { categories } = result.data.allStripeProduct;
        categories.forEach(({ category }) => {
          createPage({
            path: `/products/${category.id}/`,
            component: productCategory,
            context: {
              id: category.id,
            },
          })
        })
      })
    )
  })
  return Promise.all([
    blogPages,
    productPages,
    jobPostPages,
    newsArticlePages,
    productCategoryPages,
  ])
}
