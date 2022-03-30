// This works when we build gatsby, but error in VS code ????
// import { ContentContainer, GlobalStyles, BlogTitle } from '@fec'
import {
  BlogTitle,
  BlogTitle2,
  ContentContainer,
  GlobalStyles,
  HEADING_TAG,
  StyledBlogTitle,
} from '../fec'

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
