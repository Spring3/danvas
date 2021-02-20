/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Danv',
    description: "Danv's personal website",
    image:
      'https://user-images.githubusercontent.com/4171202/108579794-e4d54400-7328-11eb-8bda-cfd9811ae3af.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'mafinest',
        short_name: 'manifest',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icon: 'static/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        showSpinner: false,
        color: '#A9E5BB',
      },
    },
    {
      resolve: 'gatsby-plugin-gdpr-cookies',
      options: {
        googleAnalytics: {
          trackingId: 'UA-141684888-1',
        },
      },
    },
    'gatsby-plugin-netlify-cache',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
  ],
};
