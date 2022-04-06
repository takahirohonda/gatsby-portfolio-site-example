# Troubleshoot

## 1. Assets including js files are not loading

https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/

We need to add `pathPrefix` to `gatsby-config.js`

```js
module.exports = {
  pathPrefix: '/reponame',
}
```
