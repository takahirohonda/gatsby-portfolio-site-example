import React from 'react'

import { BlogTitle, ContentContainer, GlobalStyles } from '../fec'
import { AnimatedTitle } from '../fec/AnimatedTitle'
import { FlipCards } from '../fec/FlipCard'
import { StyledContainerForFlipCard, StyledSpace } from '../fec/Space'

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
          <StyledContainerForFlipCard>
            <FlipCards />
          </StyledContainerForFlipCard>
          <StyledSpace />
        </ContentContainer>
      </main>
    </>
  )
}

export default IndexPage
