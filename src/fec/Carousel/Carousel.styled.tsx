import styled, { css } from 'styled-components'

const squareDimension = css`
  width: 300px;
  height: 500px;
`

export const StyledSquare = styled.div`
  ${squareDimension}
  background-color: ${(props) => props.color};
`

// This controls the width of the carousel container.
export const StyledCarouselUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: left;
  list-style-type: none;
  scroll-snap-type: x mandatory;
  width: 350px;
  height: 400px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const StyledCarouselLi = styled.li`
  scroll-snap-align: center;
  scroll-snap-stop: always;
`
