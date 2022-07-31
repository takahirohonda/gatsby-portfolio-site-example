import { css } from 'styled-components'

import { BREAKPOINT, LatoRegular } from '../styles'

export const H1Style = css`
  ${LatoRegular}
  font-size: 32px;
  line-height: 1.25;

  @media screen and (min-width: ${BREAKPOINT.SM}px) {
    font-size: 40px;
    line-height: 1.2;
  }
`

// This is the blog title style
export const H2Style = css`
  ${LatoRegular}
  font-size: 24px;
  line-height: 1.1;
  @media screen and (min-width: ${BREAKPOINT.SM}px) {
    font-size: 30px;
  }
`

export const H3Style = css`
  ${LatoRegular}
  font-size: 22px;
  line-height: 1.1;

  @media screen and (min-width: ${BREAKPOINT.SM}px) {
    font-size: 24px;
    line-height: 1.1;
  }
`

export const H4Style = css`
  ${LatoRegular}
  font-size: 20px;
  line-height: 1.1;

  @media screen and (min-width: ${BREAKPOINT.XS}px) {
    font-size: 22px;
    line-height: 1.1;
  }
`
