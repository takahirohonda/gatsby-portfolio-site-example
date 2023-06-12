import React from 'react'

import { OPTIONS } from '../const'
import { SelectOptions } from '../FlipCards.types'

interface FlipCardsSelectProps {
  selectedOption: SelectOptions
  onChange: (value: SelectOptions) => void
}

// It's not a good idea to have the option array tightly coupled with the component.
// OPTION should be a prop to make it more component like.
export const FlipCardSelect = ({
  selectedOption,
  onChange,
}: FlipCardsSelectProps) => {
  return (
    <label htmlFor="card">
      Select Category: <br />
      <select
        name="card"
        id="card"
        data-testid="flipcard-select"
        value={selectedOption}
        onChange={(e) => onChange(e.target.value as SelectOptions)}
      >
        {OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}
