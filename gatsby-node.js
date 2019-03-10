const Promise = require('bluebird')
const path = require('path')

// Customize Webpack config to prevent sine-wave module from throwing 'window is undefined' error during build
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /sine-waves/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

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
    blogPages,
    productPages,
    jobPostPages,
    newsArticlePages,
    categoryPages,
  ])
}
