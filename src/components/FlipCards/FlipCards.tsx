import React, { useState } from 'react'
import { FlipCardsVocab } from '@mdhnpm/react-mdh-blog-components'

import words from '../../data/words.json'
import { RandomiseButton } from '../../fec/Buttons'
import { StyledContainerForFlipCard } from '../../fec/Space'

export const FlipCards: React.VFC = () => {
  const [reRender, setReRender] = useState(false)

  const onClickHandler = () => {
    setReRender(!reRender)
  }

  return (
    <StyledContainerForFlipCard>
      <FlipCardsVocab content={words.words} />
      <RandomiseButton onClick={onClickHandler} />
    </StyledContainerForFlipCard>
  )
}
