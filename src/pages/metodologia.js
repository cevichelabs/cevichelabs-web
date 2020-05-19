import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { 
  TitleStyled, 
  ParagraphStyled, 
  ImageSolution 
} from "../components/styled"
import metodologia from "./../images/metodologia.svg"
import { Row, Col } from "../components/base/grid"

const MethodologyPage = () => (
  <Layout>
    <SEO title="Metodología" />
      <TitleStyled>METODOLOGÍA</TitleStyled>
    <Row>
      <Col size={1}>
        <ImageSolution alt="Metodología" src={metodologia} />
      </Col>

      <Col size={1}>
        <h2>GROWTH HACKING</h2>
        <ParagraphStyled>Desarrollamos una dinámica estratégica, primero planificando, luego abordar cada etapa del proyecto estableciendo una solución a cada problema basado en el método “Growht Hacking”, soluciones tecnológicas y de comunicación para resolver cada reto. </ParagraphStyled>
      </Col>
    </Row>
    <Link to="/">Home</Link>
  </Layout>
)

export default MethodologyPage
