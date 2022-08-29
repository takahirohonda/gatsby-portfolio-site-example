import styled, { css } from 'styled-components'

import { BREAKPOINT, LatoRegular } from '../styles'
import { PropsWithOnlyChildren } from '../utils/commonTypes'

export const H2Style = css`
  font-size: 1.5rem;
  line-height: 1.1;
  ${LatoRegular}
  @media screen and (min-width: ${BREAKPOINT.SM}px) {
    font-size: 1.875rem;
  }
`

export const StyledBlogTitle = styled.h1`
  ${H2Style};
  font-weight: bold;
`

export const BlogTitle = ({ children }: PropsWithOnlyChildren) => (
  <StyledBlogTitle>{children}</StyledBlogTitle>
)
