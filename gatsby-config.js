/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  pathPrefix: '/mdh-blog-dev',
  siteMetadata: {
    title: 'MyDatahack Blog',
    siteUrl: 'https://mydatahack.github.io/mdh-blog-dev',
    description:
      'MyDatahack blog - web development, life, arts, universe and everything',
    image: 'https://mydatahack.github.io/mdh-blog-dev/icons/icon-512x512.png',
  },
  graphqlTypegen: {
    typesOutputPath: 'src/types/gatsby-types.d.ts',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
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
        name: 'posts',
        path: './src/posts/',
      },
      __key: 'posts',
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: `>`,
              showLineNumbersGlobal: false,
              noInlineHighlight: false,
            },
          },
        ],
        defaultLayouts: {
          default: require.resolve(
            `${__dirname}/src/components/PostLayout/DefaultLayout.tsx`
          ),
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: `>`,
              showLineNumbersGlobal: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
  ],
}
