import {
  FIRST_LINE,
  PHRASES_AND_GRAMMARS,
  QUOTES,
  TRIVIA,
  WORDS_2022,
  WORDS_2023,
} from './const'

export type SelectOptions =
  | typeof FIRST_LINE
  | typeof PHRASES_AND_GRAMMARS
  | typeof QUOTES
  | typeof TRIVIA
  | typeof WORDS_2022
  | typeof WORDS_2023
