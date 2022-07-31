import { motion } from 'framer-motion'
import styled from 'styled-components'

import { TextRegularNoSizeChangeOnMobile } from '../../Typography'

// This controls the size of the flip card
export const StyledCard = styled.div`
  position: relative;
  display: flex;
  width: 340px;
  height: 280px;
  justify-content: center;
  perspective: 500px;
`

export const StyledFlipCardContainer = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 100%;
  border: solid 1px #c7c7c7;
  border-radius: 20px;
  color: #2a2727;
  transform-style: preserve-3d;
`

export const StyledFlipCardFront = styled(motion.div)`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
`

export const StyledFlipCardBack = styled(motion.div)`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`

export const StyledP = styled.p`
  margin: 10px;
  font-size: 1rem;
  ${TextRegularNoSizeChangeOnMobile}
`

export const StyledHeading = styled(StyledP)`
  font-weight: bold;
`
