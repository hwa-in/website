const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const productPages = new Promise((resolve, reject) => {
    const productPage = path.resolve('./src/templates/ProductPage/index.js');
    resolve(
      graphql(
        `
        {
          allContentfulProducts{
            products: edges {
              product: node {
                id
                slug
                category {
                  slug
                  categoryTitle
                  name
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

        const { products } = result.data.allContentfulProducts;
        products.forEach(({ product }) => {
          product.category.forEach(cat => {
            createPage({
              path: `/products/${cat.slug}/${product.slug}/`,
              component: productPage,
              context: {
                id: product.id,
                categorySlug: cat.slug,
                categoryName: cat.name,
                categoryTitle: cat.categoryTitle,
              },
            })
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
            path: `infocenter/news/${article.slug}/`,
            component: newsArticleTemplate,
            context: {
              slug: article.slug,
            },
          })
        })
      })
    )
  })
  
  const categoryPages = new Promise((resolve, reject) => {
    const productCategory = path.resolve('./src/templates/CategoryPage/index.js');
    resolve(
      graphql(
        `
          {
            allContentfulCategory {
              categories: edges {
                category: node {
                  slug
                  id
                  categoryTitle
                  name
                  products {
                    id
                    title
                    slug
                    subCategory
                  }
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

        const { categories } = result.data.allContentfulCategory;
        categories.forEach(({ category }) => {
          createPage({
            path: `/products/${category.slug}/`,
            component: productCategory,
            context: {
              slug: category.slug,
              name: category.name,
              title: category.categoryTitle,
              products: category.products,
            },
          })
        })
      })
    )
  })

  return Promise.all([
    productPages,
    jobPostPages,
    newsArticlePages,
    categoryPages,
  ])
}
