export enum HEADING_TAG {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
}

export interface HeadingProps {
  renderAs: HEADING_TAG
}

export const Heading: React.FC<HeadingProps> = ({ renderAs, children }) => {
  const HeadingTag = `${renderAs}` as keyof JSX.IntrinsicElements
  return <HeadingTag>{children}</HeadingTag>
}
