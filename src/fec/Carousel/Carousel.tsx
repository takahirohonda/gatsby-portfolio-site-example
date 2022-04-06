import { ReactNode } from 'react'

import {
  StyledCarouselLi,
  StyledCarouselUl,
  StyledSquare,
} from './Carousel.styled'

export interface CarouselProps {
  content: ReactNode[]
}

export const Carousel: React.VFC<CarouselProps> = ({ content }) => {
  return (
    <StyledCarouselUl>
      {content.map((node) => (
        <StyledCarouselLi key={node?.toString()}>{node}</StyledCarouselLi>
      ))}
    </StyledCarouselUl>
  )
}

export const Carousel2 = () => {
  return (
    <StyledCarouselUl>
      <StyledCarouselLi>
        <StyledSquare color="red" />
      </StyledCarouselLi>
      <StyledCarouselLi>
        <StyledSquare color="blue" />
      </StyledCarouselLi>
      <StyledCarouselLi>
        <StyledSquare color="pink" />
      </StyledCarouselLi>
      <StyledCarouselLi>
        <StyledSquare color="purple" />
      </StyledCarouselLi>
    </StyledCarouselUl>
  )
}
