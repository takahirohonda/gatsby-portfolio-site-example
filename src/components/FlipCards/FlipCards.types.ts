import {
  FIRST_LINE,
  PHRASES_AND_GRAMMARS,
  QUOTES,
  TRIVIA,
  VOCABULARY,
  WORDS_2023,
} from './const'

export type SelectOptions =
  | typeof FIRST_LINE
  | typeof PHRASES_AND_GRAMMARS
  | typeof QUOTES
  | typeof TRIVIA
  | typeof VOCABULARY
  | typeof WORDS_2023
