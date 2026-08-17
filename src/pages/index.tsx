import type { ReactNode } from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"

import SettupWizard from "@site/static/img/setup-wizard-bro.svg"
import Link from "@docusaurus/Link"

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className="hero hero--primary padding-bottom--sm padding-top--sm">
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
                to="/docs/intro">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
