import React from "react"
import { Link } from "gatsby"
import { TitleStyled, ParagraphContentStyled } from "../components/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PlansPage = () => (
  <Layout>
    <SEO title="Planes" />
    <TitleStyled>PLANES</TitleStyled>
    <ParagraphContentStyled>Queremos ayudar a Pymes y marcas a poder enfrentar la era de la #SUPERDIGITALIZACIÓN, la transformación digital pasó de ser una moda a ser un imperativo, y por eso queremos acércales nuestras solución, planteamos un tipo de solución para cada posibilidad de negocio, al final nuestro propósito es guiar y transformar emprendimientos para que puedan competir:
  </ParagraphContentStyled>
    <Link to="/">Home</Link>
  </Layout>
)

export default PlansPage
