import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Layout } from '../components/Layout'
import { BlogTitle } from '../fec'

const AboutPage = () => {
  return (
    <Layout siteTitle="Home">
      <StaticImage
        src="../images/test/lake1.jpeg"
        alt="lake photo"
        placeholder="dominantColor"
      />
      <BlogTitle>
        Building AlexNet with TensorFlow and Running it with AWS SageMaker
      </BlogTitle>
      <Link to="/">Back to home</Link>
    </Layout>
  )
}

export default AboutPage
