import styled, { css } from 'styled-components'

const squareDimension = css`
  width: 300px;
  height: 500px;
`

export const StyledSquare = styled.div`
  background-color: ${(props) => props.color};
  ${squareDimension}
`

// This controls the width of the carousel container.
export const StyledCarouselUl = styled.ul`
  display: flex;
  overflow: scroll;
  width: 350px;

  height: 400px;

  align-items: center;
  justify-content: left;
  list-style-type: none;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const StyledCarouselLi = styled.li`
  scroll-snap-align: center;
  scroll-snap-stop: always;
`
