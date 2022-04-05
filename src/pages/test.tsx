import { BlogTitle, ContentContainer, GlobalStyles } from '../fec'
import { Animation1, Animation2 } from '../fec/AnimationTest'

const AboutPage = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <ContentContainer>
          <BlogTitle>Testing Components</BlogTitle>

          <br />
          <br />
          <Animation1 />
          <Animation2 />
        </ContentContainer>
      </main>
    </>
  )
}

export default AboutPage
