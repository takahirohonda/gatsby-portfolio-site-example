// Runs once in the process of building the site
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

const path = require('path')

exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@fec': path.resolve(__dirname, 'src/fec'),
      },
    },
  })
}

// This is required to make new react-jsx work.
// We no longer need to import React.
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  })
}
