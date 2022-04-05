import { motion } from 'framer-motion'
import styled from 'styled-components'

import { H3Style, Heading, HEADING_TAG } from '../Heading'
import { FredokaOne } from '../styles'

export const StyledBlogTitle = styled(motion.h3)`
  ${H3Style};
  ${FredokaOne};
  font-weight: bold;
  color: red;
`

export const StyledTitleLogo: React.FC = ({ children }) => (
  <StyledBlogTitle>MyDatahack</StyledBlogTitle>
)
