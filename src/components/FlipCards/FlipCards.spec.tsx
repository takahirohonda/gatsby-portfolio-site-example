import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {
  FIRST_LINE,
  PHRASES_AND_GRAMMARS,
  QUOTES,
  TRIVIA,
  VOCABULARY,
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
  it('should render default selection', () => {
    renderFlipCards()
    expect(
      (screen.getByRole('option', { name: VOCABULARY }) as HTMLOptionElement)
        .selected
    ).toBe(true)
    expect(screen.getByTestId('flipCardVocab')).toBeVisible()
    expect(
      screen.queryByTestId('flipCardPhrasesAndGrammars')
    ).not.toBeInTheDocument()
    expect(screen.queryByTestId('flipCardQAndA')).not.toBeInTheDocument()
    expect(screen.queryByTestId('flipCardQuote')).not.toBeInTheDocument()
  })

  it.each(testDataProvider)('should select', (data) => {
    renderFlipCards()
    userEvent.selectOptions(
      screen.getByTestId('flipcard-select'),
      screen.getByRole('option', { name: data.select })
    )

    expect(
      (
        screen.getByRole('option', {
          name: data.select,
        }) as HTMLOptionElement
      ).selected
    ).toBe(true)

    const nonSelected = testDataProvider
      .map((dataProvider) => dataProvider.selectedDataId)
      .filter(
        (dataSelectedDataId) => dataSelectedDataId !== data.selectedDataId
      )

    expect(screen.getByTestId(data.selectedDataId)).toBeVisible()
    nonSelected.map((nonSelectedDataId) =>
      expect(screen.queryByTestId(nonSelectedDataId)).not.toBeInTheDocument()
    )
  })
})
