import styled from 'styled-components'
import { BREAKPOINT } from '../styles/breakpoints'

const StyledContentContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${BREAKPOINT.XXL}px) {
    width: 1504px;
  }

  @media (min-width: ${BREAKPOINT.XXL}px) {
    width: 1370px;
  }

  @media (min-width: ${BREAKPOINT.XL}px) {
    width: 1170px;
  }

  @media (min-width: ${BREAKPOINT.LG}px) {
    width: 970px;
  }

  @media (min-width: ${BREAKPOINT.MD}px) {
    width: 750px;
  }
`

export { StyledContentContainer as ContentContainer }
