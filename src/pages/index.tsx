import React from 'react'
import { Link } from 'gatsby'

import { BlogTitle, ContentContainer, GlobalStyles } from '../fec'
import { AnimatedTitle } from '../fec/AnimatedTitle'
import { StyledSpace } from '../fec/Space'

const IndexPage: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <ContentContainer>
          <BlogTitle>Still testing....</BlogTitle>
          <StyledSpace />
          <AnimatedTitle />
          <StyledSpace />
          <Link to="/words">Go to words flip cards</Link>
        </ContentContainer>
      </main>
    </>
  )
}

export default IndexPage
