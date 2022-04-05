import { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 200px;
  perspective: 500px;
`

export const StyledFlipCardContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`

export const StyledFlipCardFront = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
`

export const StyledFlipCardBack = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`

const showBcakAnimate = {
  rotateY: 180,
}

const showFrontAnimate = {
  rotateY: -180,
}

const variants = {
  showBack: showBcakAnimate,
  showFront: showFrontAnimate,
}
const flipTransition = {
  x: { type: 'spring', stiffness: 100 },
  default: { duration: 1 },
}

export const FlipCard = () => {
  const [showBack, setShowBack] = useState(false)

  const onClickHandler = () => {
    setShowBack(!showBack)
  }
  return (
    <StyledCard onClick={onClickHandler}>
      <StyledFlipCardContainer
        animate={showBack ? 'showBack' : 'showFront'}
        variants={variants}
        transition={flipTransition}
      >
        <StyledFlipCardFront>This word</StyledFlipCardFront>
        <StyledFlipCardBack>Back of the card</StyledFlipCardBack>
      </StyledFlipCardContainer>
    </StyledCard>
  )
}
