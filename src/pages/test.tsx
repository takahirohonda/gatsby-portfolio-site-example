import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Layout } from '../components/Layout'
import { BlogTitle } from '../fec'
import { Animation1, Animation2 } from '../fec/AnimationTest'

const TestPage = () => {
  return (
    <Layout siteTitle="Test Page">
      <div className="flex flex-col gap-[24px]">
        <BlogTitle>Animation components check</BlogTitle>
        <br />
        <br />
        <Animation1 />
        <Animation2 />
      </div>
      <div className="flex flex-col gap-[24px] mt-[100px]">
        <StaticImage
          src="../images/test/lake1.jpeg"
          alt="lake photo"
          placeholder="dominantColor"
        />
        <BlogTitle>
          Building AlexNet with TensorFlow and Running it with AWS SageMaker
        </BlogTitle>
        <Link to="/">Back to home</Link>
      </div>
    </Layout>
  )
}

export default TestPage
