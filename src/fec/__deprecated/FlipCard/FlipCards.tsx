import words from '../../../data/words.json'
import { Carousel } from '../Carousel'
import { FlipCard } from './FlipCard'

export const FlipCards = () => {
  return (
    <Carousel
      content={words.words
        .sort(() => Math.random() - 0.5)
        .map((word) => (
          <FlipCard
            key={word.word}
            word={word.word}
            definition={word.definition}
            usage={word.usage}
          />
        ))}
    />
  )
}
