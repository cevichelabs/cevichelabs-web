import React from "react"
import { Row, Col } from "../components/base/grid"
import {
  TitleStyled,
  ParagraphStyled,
  ParagraphContentStyled
} from "../components/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ExperiencePage = () => (
  <Layout>
    <SEO title="Experiencia" />
    <TitleStyled>EXPERIENCIA</TitleStyled>
    <ParagraphContentStyled>Tenemos un equipo con múltiples habilidades y conocimientos, todos con mucha experiencia desarrollando productos digitales. Hemos implementación negocios digitales desde cero, para diferentes industrias, eso nos permite entender como aplicar digital a cada tipo de negocio, te mostramos un poco las marcas con las que hemos colaborado.
    </ParagraphContentStyled>

    <Row>
      <Col size={1}>
        <TitleStyled>¿QUÉ NOS QUIERES PREGUNTAR?</TitleStyled>
        <ParagraphStyled align={'left'}>Tenemos un equipo con múltiples habilidades y conocimientos, todos con mucha experiencia desarrollando productos digitales. Hemos implementación negocios digitales desde cero, para diferentes industrias, eso nos permite entender como aplicar digital a cada tipo de negocio, te mostramos un poco las marcas con las que hemos colaborado.
    </ParagraphStyled>
      </Col>
      <Col size={1}>
      </Col>
    </Row>
  </Layout>
)

export default ExperiencePage
