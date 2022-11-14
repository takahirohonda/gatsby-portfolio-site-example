import { ReactNode } from 'react'

import { Layout } from '../Layout'

interface PostLayoutProps {
  children: ReactNode
  pageContext: any
}

export const PostLayout = ({ children, pageContext }: PostLayoutProps) => {
  // When we have error here for undefined title, we need to stop and start gatsby.
  // then, it will register the values in frontmatter
  const { title, description } = pageContext.frontmatter

  return (
    <Layout siteTitle={title} description={description}>
      {children}
    </Layout>
  )
}
