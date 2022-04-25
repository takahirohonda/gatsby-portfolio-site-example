import React from 'react'

import { FlipCards } from '../components/FlipCards'
import { ContentContainer, GlobalStyles } from '../fec'

const WordsPage: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <ContentContainer>
          <FlipCards />
        </ContentContainer>
      </main>
    </>
  )
}

export default WordsPage
