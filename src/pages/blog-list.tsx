import { BlogList } from '../components/BlogList'
import { Layout } from '../components/Layout'
import { MdPageList } from '../components/MdPageList'

const BlogListPage = () => {
  return (
    <Layout siteTitle="Blog List">
      <h2>Blog list</h2>
      <BlogList />
      <h2>Markdown pages</h2>
      <MdPageList />
    </Layout>
  )
}

export default BlogListPage
