import { graphql, Link, useStaticQuery } from 'gatsby'

import { BlogUl } from '../BlogList/BlogList.styled'

export const MdPageList = () => {
  const data =
    useStaticQuery<Queries.getMarkdownPageDataForBlogListQuery>(graphql`
      query getMarkdownPageDataForBlogList {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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

  const posts = data.allMarkdownRemark.nodes

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
