import React from 'react'

import { ContentContainer, GlobalStyles } from '../fec'
import { RandomiseButton } from '../fec/Buttons'
import { FlipCards } from '../fec/FlipCard'
import { StyledContainerForFlipCard } from '../fec/Space'

const WordsPage: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <ContentContainer>
          <StyledContainerForFlipCard>
            <FlipCards />
            <RandomiseButton />
          </StyledContainerForFlipCard>
        </ContentContainer>
      </main>
    </>
  )
}

export default WordsPage
