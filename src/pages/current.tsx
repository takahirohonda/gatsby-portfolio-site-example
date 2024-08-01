import { Layout } from '../components/Layout'

const AboutPage = () => {
  return (
    <Layout siteTitle="Current Interest">
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-emerald-600">To watch</h2>
        <ol>
          <li>
            <a href="https://conf.react.dev/talks">React Conf 2024 Talk</a>
          </li>
        </ol>
      </div>
    </Layout>
  )
}

export default AboutPage
