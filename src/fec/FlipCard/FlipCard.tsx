import { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { TextRegular } from '../Typography'

// This controls the size of the flip card
export const StyledCard = styled.div`
  position: relative;
  width: 340px;
  height: 280px;
  perspective: 500px;
  display: flex;
  justify-content: center;
`

export const StyledFlipCardContainer = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 100%;
  transform-style: preserve-3d;
  color: #2a2727;
  border-radius: 20px;
  border: solid 1px #c7c7c7;
`

export const StyledFlipCardFront = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
`

export const StyledFlipCardBack = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`

export const StyledP = styled.p`
  ${TextRegular}
  margin: 10px;
`

export const StyledHeading = styled(StyledP)`
  font-weight: bold;
`

const showBcakAnimate = {
  rotateY: 180,
}

const showFrontAnimate = {
  rotateY: 0,
}

const variants = {
  showBack: showBcakAnimate,
  showFront: showFrontAnimate,
}
const flipTransition = {
  x: { type: 'spring', stiffness: 100 },
  default: { duration: 1 },
}

export interface FlipCardProps {
  word: string
  definition: string
  usage?: string
}

export const FlipCard: React.VFC<FlipCardProps> = ({
  word,
  definition,
  usage,
}) => {
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
        <StyledFlipCardFront>
          <StyledP>{word}</StyledP>
        </StyledFlipCardFront>
        <StyledFlipCardBack>
          <StyledHeading>Definition:</StyledHeading>
          <StyledP>{definition}</StyledP>
          <StyledHeading>Usage:</StyledHeading>
          <StyledP>{usage}</StyledP>
        </StyledFlipCardBack>
      </StyledFlipCardContainer>
    </StyledCard>
  )
}
