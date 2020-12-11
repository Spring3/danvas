const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = actions;
    const slug = createFilePath({ node, getNode, basePath: 'content' });
    console.log('slug', slug);
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    for (const { node } of data.allMarkdownRemark.edges) {
      if (node.fields.slug === '/cv/') {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/cv.jsx'),
          context: {
            slug: node.fields.slug,
          },
        });
      } else if (node.fields.slug !== '/') {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/projects.jsx'),
          context: {
            slug: node.fields.slug,
          },
        });
      }
    }
  });
};
