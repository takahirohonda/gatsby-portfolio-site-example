import { graphql, Link, useStaticQuery } from 'gatsby'

import { BlogUl } from './BlogList.styled'

export const BlogList = () => {
  const data = useStaticQuery<Queries.getMdxDataForBlogListQuery>(graphql`
    query getMdxDataForBlogList {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            date
            description
            slug
          }
        }
      }
    }
  `)

  const posts = data.allMdx.nodes

  return (
    <BlogUl>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={post?.frontmatter?.slug || ''}>
            {post?.frontmatter?.title}
          </Link>
        </li>
      ))}
    </BlogUl>
  )
}
