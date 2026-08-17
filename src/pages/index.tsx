import type { ReactNode } from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"

import SettupWizard from "@site/static/img/setup-wizard-bro.svg"
import HandCoding from "@site/static/img/hand-coding-bro.svg"
import CleanSetup from "@site/static/img/data-extraction-bro.svg"
import WebSiteCreator from "@site/static/img/website-creator-bro.svg"
import Link from "@docusaurus/Link"

function HomeHeader() {
  return (
    <div className="container">
      <div className="row">
        {/* <div className="col col--6">
              <Heading as="h1" className="hero__title">
                {siteConfig.title}
              </Heading>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div> */}
        <div className="col text--center">
          <SettupWizard className="setup-wizard" width={300} height={300} />
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

function HomeMain() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <div className="container padding-bottom--sm padding-top--lg">
      <div className="column">
        <div className="col text--center">
          <HandCoding className="feature-illu hand-coding" width={200} height={200} />
          <h2>Easy to configure</h2>
          <p>It takes less than 10 minutes and saves hours of work.</p>
        </div>
        <div className="col text--center">
          <CleanSetup className="feature-illu data-extraction" width={300} height={200} />
          <h2>Clean Setup</h2>
          <p>No more AI propaganda in your setup.</p>
        </div>
        <div className="col text--center">
          <WebSiteCreator className="feature-illu website-creator" width={200} height={200} />
          <h2>Accelarates your workflow</h2>
          <p>No distractions, just productivity.</p>
        </div>
      </div>
    </div>
  )
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="hero hero--primary padding-bottom--sm padding-top--sm">
        <HomeHeader />
      </header>
      <main>
        <HomeMain />
      </main>
    </Layout>
  )
}
