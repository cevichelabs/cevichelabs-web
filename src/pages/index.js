import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import Img from "next/image"
import SEO from "../components/seo"
import {
  MainTitle,
  Hero,
  MainCredits
} from "../components/styled"

import HeroBackground from "./../images/hero-background.jpg"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <MainTitle>
        CONSULTORÍA EN MARKETING DIGITAL, BRANDING Y BUSINESS INTELLIGENCE
      </MainTitle>
    </Hero>
    <MainCredits>Photo by Raphael Lovaski on Unsplash</MainCredits>
    <Img
      loading='lazy'
      src={HeroBackground}
      width={'100%'}
      height={'auto'}
      alt='placeholder'
    />
  </Layout>
)

export default IndexPage
