import styled from 'styled-components'

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid #04aa6d;
  cursor: pointer;
  background-color: white;
  color: #04aa6d;
  border-radius: 5px;

  &:hover {
    background-color: #04aa6d;
    color: white;
  }
`

interface RandomiseButtonProps {
  onClick: () => void
}
export const RandomiseButton: React.VFC<RandomiseButtonProps> = ({
  onClick,
}) => {
  const onClickHandler = () => {
    onClick()
  }
  return (
    <StyledButton role="button" onClick={() => onClickHandler()}>
      Randomise
    </StyledButton>
  )
}
