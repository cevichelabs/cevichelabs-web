import React from "react"
import { DefaultSeo } from "next-seo"
import SEO from "./../../next-seo.config"
import "./../../public/static/css/layout.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
