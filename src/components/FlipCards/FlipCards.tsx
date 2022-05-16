import React, { useState } from 'react'
import {
  FlipCardsPhrasesAndGrammars,
  FlipCardsQAndA,
  FlipCardsVocab,
  QuoteCards,
} from '@mdhnpm/react-mdh-blog-components'

import firstLine from '../../data/firstLine.json'
import phrase from '../../data/phraseAndGrammars.json'
import quotes from '../../data/quotes.json'
import trivia from '../../data/trivia.json'
import words from '../../data/words.json'
import { RandomiseButton } from '../../fec/Buttons'
import { StyledContainerForFlipCard } from '../../fec/Space'
import {
  FIRST_LINE,
  PHRASES_AND_GRAMMARS,
  QUOTES,
  TRIVIA,
  VOCABULARY,
} from './const'
import { FlipCardSelect } from './FlipCardSelect'

export const FlipCards: React.VFC = () => {
  const [reRender, setReRender] = useState(false)
  const [selectedOption, setSelectedOption] = useState(VOCABULARY)

  const onClickHandler = () => {
    setReRender(!reRender)
  }

  return (
    <>
      <StyledContainerForFlipCard>
        <FlipCardSelect
          selectedOption={selectedOption}
          onChange={setSelectedOption}
        />
      </StyledContainerForFlipCard>
      <StyledContainerForFlipCard>
        {selectedOption === VOCABULARY && (
          <FlipCardsVocab content={words.words} />
        )}
        {selectedOption === PHRASES_AND_GRAMMARS && (
          <FlipCardsPhrasesAndGrammars content={phrase.phrasesAndGrammars} />
        )}
        {selectedOption === FIRST_LINE && (
          <QuoteCards content={firstLine.firstLine} />
        )}
        {selectedOption === QUOTES && <QuoteCards content={quotes.quotes} />}
        {selectedOption === TRIVIA && (
          <FlipCardsQAndA content={trivia.trivia} />
        )}

        <RandomiseButton onClick={onClickHandler} />
      </StyledContainerForFlipCard>
    </>
  )
}
