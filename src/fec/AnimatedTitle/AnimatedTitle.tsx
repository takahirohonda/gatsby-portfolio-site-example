import React from 'react'
import { motion } from 'framer-motion'

const bounceAnimate = {
  y: [0, 0, 0, -30, -15, 0],
  scaleY: [0, 0, 0, 1.1, 1.1, 0, 0],
}

const bounceTransition = {
  duration: 2,
  times: [0, 0.2, 0.4, 0.43, 0.5, 1],
  type: [
    {
      ease: [0.215, 0.61, 0.355, 1],
    },
    {
      ease: [0.215, 0.61, 0.355, 1],
    },
    {
      ease: [0.755, 0.05, 0.855, 0.06],
    },
    {
      ease: [0.755, 0.05, 0.855, 0.06],
    },
  ],
}
export const AnimatedTitle: React.VFC = () => (
  <motion.p animate={bounceAnimate} transition={bounceTransition}>
    hello
  </motion.p>
)
