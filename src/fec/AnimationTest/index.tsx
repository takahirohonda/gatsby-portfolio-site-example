import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledSquare = styled.div`
  width: 200px;
  height: 100px;
  background-color: pink;
`

export const Animation1 = () => (
  <StyledSquare
    as={motion.div}
    animate={{ x: 100, y: 100, opacity: 1 }}
    transition={{
      delay: 1,
      x: { type: 'spring', stiffness: 100 },
      default: { duration: 2 },
    }}
  />
)

export const StyledMotionSquare = styled(motion.div)`
  width: 200px;
  height: 100px;
  background-color: blue;
`

export const Animation2 = () => (
  <StyledMotionSquare
    animate={{ x: 100, y: 100, opacity: 1 }}
    transition={{
      delay: 1,
      x: { type: 'spring', stiffness: 100 },
      default: { duration: 2 },
    }}
  />
)
