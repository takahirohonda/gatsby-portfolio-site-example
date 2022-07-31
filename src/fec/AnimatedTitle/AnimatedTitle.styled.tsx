import { motion } from 'framer-motion'
import styled from 'styled-components'

import { H3Style } from '../Heading'
import { FredokaOne } from '../styles'

export const StyledBlogTitle = styled(motion.h3)`
  color: red;
  font-weight: bold;
  ${H3Style}
  ${FredokaOne}
`

export const StyledTitleLogo: React.VFC = () => (
  <StyledBlogTitle>MyDatahack</StyledBlogTitle>
)
