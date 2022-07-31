import { css } from 'styled-components'

import { BREAKPOINT, LatoRegular } from '../styles'

export const H1Style = css`
  font-size: 2rem;
  line-height: 1.25;
  ${LatoRegular}

  @media screen and (min-width: ${BREAKPOINT.SM}px) {
    font-size: 2.5rem;
    line-height: 1.2;
  }
`

// This is the blog title style
export const H2Style = css`
  font-size: 1.5rem;
  line-height: 1.1;
  ${LatoRegular}
  @media screen and (min-width: ${BREAKPOINT.SM}px) {
    font-size: 1.875rem;
  }
`

export const H3Style = css`
  font-size: 1.375rem;
  line-height: 1.1;
  ${LatoRegular}
  @media screen and (min-width: ${BREAKPOINT.SM}px) {
    font-size: 1.5rem;
    line-height: 1.1;
  }
`

export const H4Style = css`
  font-size: 1.25rem;
  line-height: 1.1;
  ${LatoRegular}

  @media screen and (min-width: ${BREAKPOINT.SM}px) {
    font-size: 1.375rem;
    line-height: 1.1;
  }
`
