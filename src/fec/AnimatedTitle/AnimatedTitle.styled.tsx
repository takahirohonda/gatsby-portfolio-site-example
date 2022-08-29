import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { BREAKPOINT, FredokaOne, LatoRegular } from '../styles'

export const H3Style = css`
  font-size: 1.375rem;
  line-height: 1.1;
  ${LatoRegular}
  @media screen and (min-width: ${BREAKPOINT.SM}px) {
    font-size: 1.5rem;
    line-height: 1.1;
  }
`

export const StyledBlogTitle = styled(motion.h3)`
  color: red;
  font-weight: bold;
  ${H3Style}
  ${FredokaOne}
`

export const StyledTitleLogo: React.VFC = () => (
  <StyledBlogTitle>MyDatahack</StyledBlogTitle>
)
