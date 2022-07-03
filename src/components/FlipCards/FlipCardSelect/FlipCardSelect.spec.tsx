import { fireEvent, render, screen } from '@testing-library/react'

import { OPTIONS } from '../const'
import { FlipCardSelect } from '.'

const mockOnChange = jest.fn()

describe('<FlipCardSelect />', () => {
  it('should render correctly', () => {
    render(
      <FlipCardSelect selectedOption={OPTIONS[1]} onChange={mockOnChange} />
    )

    expect(screen.getByLabelText('Select Category:')).toBeVisible()
    OPTIONS.map((option) =>
      expect(screen.getByText(option)).toBeInTheDocument()
    )

    fireEvent.change(screen.getByTestId('flipcard-select'), {
      target: { value: OPTIONS[3] },
    })
    expect(mockOnChange).toHaveBeenCalled()
  })
})
