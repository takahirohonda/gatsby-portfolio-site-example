import { ReactNode } from 'react'
import { ContentContainer } from '@mdhnpm/react-mdh-blog-components'
import { graphql, Link, useStaticQuery } from 'gatsby'

import { GlobalStyles } from '../../fec'
import { AnimatedTitle } from '../../fec/AnimatedTitle'
import { Seo } from '../Seo'
import { NavContainer } from './Layout.styled'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  image?: URL
  path?: string
  siteTitle: string
}

export const Layout = ({
  title,
  description,
  image,
  path,
  siteTitle,
  children,
}: LayoutProps) => {
  const data = useStaticQuery<Queries.GetSiteMetadataForSeoQuery>(graphql`
    query GetSiteMetadataForSeo {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
        }
      }
    }
  `)
  const defaults = data?.site?.siteMetadata
  const titleHead = title || defaults?.title
  const descriptionHead = description || defaults?.description
  const siteUrl = new URL(
    image || defaults?.siteUrl || '',
    defaults?.siteUrl || ''
  )
  const imageHead = new URL(
    path || defaults?.image || '',
    defaults?.siteUrl || ''
  )

  return (
    <>
      <Seo
        title={titleHead || ''}
        description={descriptionHead || ''}
        siteUrl={siteUrl}
        image={imageHead}
      />
      <GlobalStyles />
      <main>
        <ContentContainer>
          <div style={{ marginTop: '36px' }} />
          {/* <AnimatedTitle /> */}

          <NavContainer>
            <Link to="/">Home</Link>
            <Link to="/blog-list">Blog List</Link>
            <Link to="/current">Current Interest</Link>
            <Link to="/words">Flip Cards</Link>
          </NavContainer>
          <h1>{siteTitle}</h1>
          {children}
        </ContentContainer>
      </main>
    </>
  )
}
