import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {
  FIRST_LINE,
  PHRASES_AND_GRAMMARS,
  QUOTES,
  TRIVIA,
  WORDS_2022,
  WORDS_2024,
} from './const'
import { FlipCards } from './FlipCards'

// FIRST_LINE component is the same as QUOTE
const testDataProvider = [
  {
    select: PHRASES_AND_GRAMMARS,
    selectedDataId: 'flipCardPhrasesAndGrammars',
  },
  {
    select: QUOTES,
    selectedDataId: 'flipCardQuote',
  },
  {
    select: TRIVIA,
    selectedDataId: 'flipCardQAndA',
  },
  {
    select: FIRST_LINE,
    selectedDataId: 'flipCardQuote',
  },
]

const renderFlipCards = () => render(<FlipCards />)

describe('<FlipCards />', () => {
  beforeEach(() => {
    mockAllIsIntersecting(true)
  })
  it('should render default selection', async () => {
    renderFlipCards()

    expect(
      (screen.getByRole('option', { name: WORDS_2024 }) as HTMLOptionElement)
        .selected
    ).toBe(true)

    waitFor(() => {
      expect(screen.getByTestId('flipCardVocab')).toBeVisible()
    })

    expect(
      screen.queryByTestId('flipCardPhrasesAndGrammars')
    ).not.toBeInTheDocument()
    expect(screen.queryByTestId('flipCardQAndA')).not.toBeInTheDocument()
    expect(screen.queryByTestId('flipCardQuote')).not.toBeInTheDocument()
  })

  it.each(testDataProvider)('should select', async (data) => {
    renderFlipCards()
    userEvent.selectOptions(
      screen.getByTestId('flipcard-select'),
      screen.getByRole('option', { name: data.select })
    )
    waitFor(() => {
      expect(
        (
          screen.getByRole('option', {
            name: data.select,
          }) as HTMLOptionElement
        ).selected
      ).toBe(true)
    })

    const nonSelected = testDataProvider
      .map((dataProvider) => dataProvider.selectedDataId)
      .filter(
        (dataSelectedDataId) => dataSelectedDataId !== data.selectedDataId
      )

    waitFor(() => {
      expect(screen.getByTestId(data.selectedDataId)).toBeVisible()
    })
    nonSelected.map((nonSelectedDataId) =>
      expect(screen.queryByTestId(nonSelectedDataId)).not.toBeInTheDocument()
    )
  })
})
