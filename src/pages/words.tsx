import React from 'react'
import { FlipCardsVocab } from '@mdhnpm/react-mdh-blog-components'

import words from '../data/words.json'
import { ContentContainer, GlobalStyles } from '../fec'
import { RandomiseButton } from '../fec/Buttons'
import { StyledContainerForFlipCard } from '../fec/Space'

const WordsPage: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <ContentContainer>
          <StyledContainerForFlipCard>
            <FlipCardsVocab content={words.words} />
            <RandomiseButton />
          </StyledContainerForFlipCard>
        </ContentContainer>
      </main>
    </>
  )
}

export default WordsPage
