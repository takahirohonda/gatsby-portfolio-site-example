import React from 'react'

import { Layout } from '../components/Layout'

const IndexPage: React.FC = () => {
  return (
    <Layout siteTitle="Home">
      <div className="flex flex-col gap-[16px] mt-[24px]">
        <h2 className="text-rose-600">To Read</h2>
        <ol>
          <li>
            <a href="https://www.bloomberg.com/features/2025-sam-altman-interview/">
              Sam Altman Interview
            </a>
          </li>
          <li>
            <a href="https://reactrouter.com/upgrading/v6">
              React Router v6 Upgrade Guide
            </a>
          </li>
          <li>
            <a href="https://medium.com/@nomannayeem/react-router-7-the-ultimate-guide-to-the-new-features-and-framework-capabilities-06e7f06981f6">
              React Router v6 Medium blog
            </a>
          </li>
          <li>
            <a href="https://dzone.com/articles/why-react-router-7-is-a-game-changer-for-react-devs">
              React Router v6 DZone blog
            </a>
          </li>

          <li>
            <a href="https://dionarodrigues.dev/blog/observer-and-pub-sub-patterns-for-reactive-behaviours-in-javascript">
              Observer and pub-sub pattern js
            </a>
          </li>
          <li>
            <a href="https://dev.to/superviz/design-pattern-3-observer-pattern-36eo">
              Design pattern - Observer Pattern
            </a>
          </li>
          <li>
            <a href="https://medium.com/sessionstack-blog/how-javascript-works-the-publisher-subscriber-pattern-9edc62ef1a68">
              How JS works with the pub-sub pattern
            </a>
          </li>
          <li>
            <a href="https://rxjs.dev/guide/overview">Check rx js</a>
          </li>
          <li>
            <a href="https://dev.to/superviz/design-pattern-4-publishersubscriber-pattern-4jg9">
              Another pub-sub pattern
            </a>
          </li>
          <li>
            <a href="https://dev.to/superviz/design-pattern-5-adapter-pattern-4gif">
              Adapter Pattern
            </a>
          </li>

          <li>
            <a href="https://clerk.com/docs/how-clerk-works/overview">
              How Clerk works
            </a>
          </li>
        </ol>
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

export default IndexPage
