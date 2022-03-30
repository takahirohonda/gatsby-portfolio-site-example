import styled from 'styled-components'

import { H2Style, Heading, HEADING_TAG } from '../Heading'

export const StyledBlogTitle2 = styled(Heading)`
  ${H2Style};
`

// This is not working...
export const BlogTitle2: React.FC = ({ children }) => (
  <StyledBlogTitle2 renderAs={HEADING_TAG.H1}>{children}</StyledBlogTitle2>
)

export const StyledBlogTitle = styled.h1`
  ${H2Style};
  font-weight: bold;
`

export const BlogTitle: React.FC = ({ children }) => (
  <StyledBlogTitle>{children}</StyledBlogTitle>
)
