import React from 'react'

import { OPTIONS } from '../const'

interface FlipCardsSelectProps {
  selectedOption: string
  onChange: (value: string) => void
}

// It's not a good idea to have the option array tightly coupled with the component.
// OPTION should be a prop to make it more component like.
export const FlipCardSelect: React.VFC<FlipCardsSelectProps> = ({
  selectedOption,
  onChange,
}) => {
  return (
    <label htmlFor="card">
      Select Category: <br />
      <select
        name="card"
        id="card"
        data-testid="flipcard-select"
        value={selectedOption}
        onChange={(e) => onChange(e.target.value)}
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
