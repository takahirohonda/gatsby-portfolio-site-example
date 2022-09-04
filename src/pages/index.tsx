import React from 'react'

import { BlogList } from '../components/BlogList'
import { Layout } from '../components/Layout'

const IndexPage: React.FC = () => {
  return (
    <Layout siteTitle="Home">
      <p>Hello World</p>
      <BlogList />
    </Layout>
  )
}

export default IndexPage
