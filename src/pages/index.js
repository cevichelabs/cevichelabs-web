import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { MainTitle, Hero } from "../components/styled"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <MainTitle>CONSULTORÍA EN MARKETING DIGITAL, BRANDING Y BUSINESS INTELLIGENCE</MainTitle>
    </Hero>
    <Image />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div> */}
  </Layout>
)

export default IndexPage
