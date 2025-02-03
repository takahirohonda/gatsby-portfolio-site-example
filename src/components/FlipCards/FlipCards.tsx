import { useState } from 'react'
import {
  FlipCardsPhrasesAndGrammars,
  FlipCardsQAndA,
  FlipCardsVocab,
  QuoteCards,
} from '@mdhnpm/react-mdh-blog-components'

import firstLine from '../../data/flip-cards/firstLine.json'
import { chordSubstitutionMajor9 } from '../../data/flip-cards/music.json'
import phrase from '../../data/flip-cards/phraseAndGrammars.json'
import quotes from '../../data/flip-cards/quotes.json'
import trivia from '../../data/flip-cards/trivia.json'
import { words2022 } from '../../data/flip-cards/words_2022.json'
import { words2023 } from '../../data/flip-cards/words_2023.json'
import { words2024 } from '../../data/flip-cards/words_2024.json'
import { words2025 } from '../../data/flip-cards/words_2025.json'
import { RandomiseButton } from '../../fec/Buttons'
import { StyledContainerForFlipCard } from '../../fec/Space'
import {
  CHORD_SUB_MAJ_9,
  FIRST_LINE,
  PHRASES_AND_GRAMMARS,
  QUOTES,
  TRIVIA,
  WORDS_2022,
  WORDS_2023,
  WORDS_2024,
  WORDS_2025,
} from './const'
import { RandomiseButtonContainer } from './FlipCards.styled'
import { SelectOptions } from './FlipCards.types'
import { FlipCardSelect } from './FlipCardSelect'

export const FlipCards = () => {
  const [reRender, setReRender] = useState(false)
  const [selectedOption, setSelectedOption] =
    useState<SelectOptions>(WORDS_2024)

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
        {selectedOption === WORDS_2025 && (
          <FlipCardsVocab content={words2025} />
        )}
        {selectedOption === WORDS_2024 && (
          <FlipCardsVocab content={words2024} />
        )}
        {selectedOption === WORDS_2023 && (
          <FlipCardsVocab content={words2023} />
        )}
        {selectedOption === WORDS_2022 && (
          <FlipCardsVocab content={words2022} />
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
        {selectedOption === CHORD_SUB_MAJ_9 && (
          <FlipCardsQAndA content={chordSubstitutionMajor9} />
        )}
        <RandomiseButtonContainer>
          <RandomiseButton onClick={onClickHandler} />
        </RandomiseButtonContainer>
      </StyledContainerForFlipCard>
    </>
  )
}
