# Using styled component with framer motion

There are two ways of making this happen.

1. Use `as` prop in the styled component.

```ts
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
```

2. pass a motion element into `styled`

```ts
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
```

3. use `motion.custom`

```ts
const MyCustomComponent = motion.custom(styled.img`
  // your styles ...
`)
```

Ref: https://dev.to/darthknoppix/animate-styled-components-with-framer-motion-2202

## Entire code

```ts
import styled from 'styled-components'
import { motion } from 'framer-motion'

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
```
