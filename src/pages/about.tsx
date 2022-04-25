// This works when we build gatsby, but error in VS code ????
// import { ContentContainer, GlobalStyles, BlogTitle } from '@fec'
import { BlogTitle, ContentContainer, GlobalStyles } from '../fec'

const AboutPage = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <ContentContainer>
          <BlogTitle>
            Building AlexNet with TensorFlow and Running it with AWS SageMaker
          </BlogTitle>
        </ContentContainer>
      </main>
    </>
  )
}

export default AboutPage
