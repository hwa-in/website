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
            products: edges {
              product: node {
                id
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
  return Promise.all([blogPages, productPages, jobPostPages])
}
