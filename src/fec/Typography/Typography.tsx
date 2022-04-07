import { css } from 'styled-components'

import { BREAKPOINT, LatoRegular } from '../styles'

export const TextRegular = css`
  ${LatoRegular};
  font-size: 0.875rem;

  @media screen and (min-width: ${BREAKPOINT.SM}px) {
    font-size: 1rem;
  }
`

export const TextRegularNoSizeChangeOnMobile = css`
  ${LatoRegular};
  font-size: 1rem;
`
