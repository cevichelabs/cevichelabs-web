import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {
  MainTitle,
  Hero,
  MainCredits
} from "../components/styled"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <MainTitle>
        CONSULTORÍA EN MARKETING DIGITAL, BRANDING Y BUSINESS INTELLIGENCE
      </MainTitle>
    </Hero>
    <MainCredits>Photo by Raphael Lovaski on Unsplash</MainCredits>
    <Image />
  </Layout>
)

export default IndexPage
