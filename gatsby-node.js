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
                lazerSystem
                category {
                  slug
                  categoryTitle
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
          createPage({
            path: `/products/${product.category.slug}/${product.slug}/`,
            component: productPage,
            context: {
              id: product.id,
              categorySlug: product.category.slug,
              categoryTitle: product.category.categoryTitle,
            },
          })

          if (product.lazerSystem) {
            createPage({
              path: `/products/lazer-systems/${product.slug}/`,
              component: productPage,
              context: {
                id: product.id,
                categorySlug: 'lazer-systems',
                categoryTitle: 'Lazer Systems',
              },
            })
          }
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
                  products {
                    id
                    title
                    slug
                    lazerSystem
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
        const lazerSystemProducts = []
        categories.forEach(({ category }) => {
          createPage({
            path: `/products/${category.slug}/`,
            component: productCategory,
            context: {
              slug: category.slug,
              title: category.categoryTitle,
              products: category.products,
            },
          })

          category.products.forEach((product) => {
            if (product.lazerSystem) {
              lazerSystemProducts.push(product)
            }
          })
        })

        createPage({
          path: `/products/lazer-systems/`,
          component: productCategory,
          context: {
            slug: "lazer-systems",
            title: "Lazer Systems",
            products: lazerSystemProducts,
          },
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
