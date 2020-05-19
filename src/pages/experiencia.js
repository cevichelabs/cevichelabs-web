import React from "react"
import { Link } from "gatsby"
import { TitleStyled, ParagraphContentStyled } from "../components/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ExperiencePage = () => (
  <Layout>
    <SEO title="Experiencia" />
    <TitleStyled>EXPERIENCIA</TitleStyled>
    <ParagraphContentStyled>Tenemos un equipo con múltiples skills y conocimientos, todos con mucha experiencia desarrollando productos digitales, hemos implementación negocios digitales desde cero, para diferentes industrias, eso nos permite entender como aplicar digital a cada tipo de negocio, te mostramos un poco las marcas con las que hemos colaborado.
    </ParagraphContentStyled>
    <Link to="/">Home</Link>
  </Layout>
)

export default ExperiencePage
