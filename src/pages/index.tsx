import React from 'react'

import { BlogTitle, ContentContainer, GlobalStyles } from '../fec'
import { AnimatedTitle } from '../fec/AnimatedTitle'
import { FlipCard } from '../fec/FlipCard'

const IndexPage: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <ContentContainer>
          <BlogTitle>Still testing....</BlogTitle>
          <AnimatedTitle />

          <FlipCard />
        </ContentContainer>
      </main>
    </>
  )
}

export default IndexPage
