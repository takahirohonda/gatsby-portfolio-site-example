// This works when we build gatsby, but error in VS code ????
// import { ContentContainer, GlobalStyles, BlogTitle } from '@fec'

// This is for troubleshooting heading.
import { BlogTitle, BlogTitle2, ContentContainer, GlobalStyles } from '../fec'

const HeadingPage = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <ContentContainer>
          <BlogTitle>
            Building AlexNet with TensorFlow and Running it with AWS SageMaker
          </BlogTitle>
          <BlogTitle2>This is not working...</BlogTitle2>
        </ContentContainer>
      </main>
    </>
  )
}

export default HeadingPage
