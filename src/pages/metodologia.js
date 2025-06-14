import React from "react"
import Image from "next/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  TitleStyled,
  SubTitleStyled,
  ParagraphStyled,
  ImageContainer,
} from "../components/styled"
import metodologia from "./../images/metodologia.svg"
import { Row, Col } from "../components/base/grid"

const MethodologyPage = () => (
  <Layout>
    <SEO title="Metodología" />
    <TitleStyled>METODOLOGÍA</TitleStyled>
    <Row>
      <Col size={2} />
    </Row>
    <Row>
      <Col size={1}>
        <ImageContainer>
          <Image
            alt="Metodología"
            fill
            src={metodologia}
            data-src={metodologia}
            style={{ objectFit: "contain" }}
          />
        </ImageContainer>
      </Col>

      <Col size={1}>
        <SubTitleStyled>GROWTH HACKING</SubTitleStyled>
        <ParagraphStyled align={"left"}>
          Desarrollamos una dinámica estratégica, primero planificando, luego
          abordar cada etapa del proyecto estableciendo una solución a cada
          problema basado en el método “Growth Hacking”, soluciones tecnológicas
          y de comunicación para resolver cada reto.{" "}
        </ParagraphStyled>
      </Col>
    </Row>
    <Row>
      <Col size={2}>
        <br />
      </Col>
    </Row>
  </Layout>
)

export default MethodologyPage
