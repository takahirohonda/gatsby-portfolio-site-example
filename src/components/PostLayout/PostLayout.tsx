import { ReactNode } from 'react'

import { Layout } from '../Layout'

interface PostLayoutProps {
  children: ReactNode
  pageContext: any
}

export const PostLayout = ({ children, pageContext }: PostLayoutProps) => {
  // const { description } = pageContext?.frontmatter

  const title = pageContext.frontmatter?.title
  const description = pageContext.frontmatter?.description

  console.log(
    `checking frontmatter value: ${JSON.stringify(pageContext.frontmatter)}`
  )

  return (
    <Layout siteTitle={title} description={description}>
      {children}
    </Layout>
  )
}
