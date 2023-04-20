import React from 'react'

import { BlogList } from '../components/BlogList'
import { Layout } from '../components/Layout'
import { MdPageList } from '../components/MdPageList'

const IndexPage: React.FC = () => {
  return (
    <Layout siteTitle="Home">
      <h2>Blog list</h2>
      <BlogList />
      <h2>Markdown pages</h2>
      <MdPageList />
    </Layout>
  )
}

export default IndexPage
