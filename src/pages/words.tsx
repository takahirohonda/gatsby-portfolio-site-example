import React from 'react'

import { FlipCards } from '../components/FlipCards'
import { ContentContainer, GlobalStyles } from '../fec'
import { StyledSpace } from '../fec/Space'

const WordsPage: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <ContentContainer>
          <StyledSpace />
          <FlipCards />
        </ContentContainer>
      </main>
    </>
  )
}

export default WordsPage
