import React from 'react'

import { OPTIONS } from '../const'

interface FlipCardsSelectProps {
  selectedOption: string
  onChange: (value: string) => void
}

export const FlipCardSelect: React.VFC<FlipCardsSelectProps> = ({
  selectedOption,
  onChange,
}) => {
  return (
    <label htmlFor="card">
      Select Category: <br />
      <select name="card" id="card" onChange={(e) => onChange(e.target.value)}>
        {OPTIONS.map((option) => (
          <option
            key={option}
            value={option}
            selected={selectedOption === option}
          >
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}
