import React from "react"
import { Link } from "gatsby"
import { TitleStyled, ParagraphContentStyled } from "../components/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ConsultPage = () => (
  <Layout>
    <SEO title="Consultar" />
    <TitleStyled>CONSULTAR</TitleStyled>
    <ParagraphContentStyled>Puede llenar el formulario para hacer su consulta:
    </ParagraphContentStyled>
    {/* <Link to="/">Home</Link> */}
  </Layout>
)

export default ConsultPage
