import React from "react"

import Layout from "../components/layout"
import Image from "next/image"
import SEO from "../components/seo"
import {
  MainTitle,
  Hero,
  MainCredits,
  ImageContainer,
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
    <ImageContainer>
      <Image
        loading="lazy"
        src={HeroBackground}
        fill
        alt="placeholder"
        style={{ objectFit: "cover" }}
      />
    </ImageContainer>
  </Layout>
)

export default IndexPage
