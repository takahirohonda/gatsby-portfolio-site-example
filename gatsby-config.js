/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  pathPrefix: '/mdh-blog-dev',
  siteMetadata: {
    title: `MyDatahack Blog`,
    siteUrl: `https://mydatahack.github.io/mdh-blog-dev`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     "trackingId": ""
    //   }
    // },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png', // This will create favicons.
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}
