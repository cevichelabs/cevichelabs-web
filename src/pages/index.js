import React from "react"
// import { Link } from "gatsby"

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
        {/* <MainCredits>Photo by Raphael Lovaski on Unsplash</MainCredits> */}
      </MainTitle>
    </Hero>
    <Image />
  </Layout>
)

export default IndexPage
