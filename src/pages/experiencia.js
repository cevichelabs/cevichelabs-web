import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Row, Col } from "../components/base/grid"
import {
  TitleStyled,
  // ParagraphStyled,
  ParagraphContentStyled
} from "../components/styled"
import { PortfolioItem } from "../components/portfolio/item"

import chinocharapa from "./../images/portfolio/chino-charapa.svg"
import wellplaystore from "./../images/portfolio/well-play-store.svg"
import luchalibro from "./../images/portfolio/lucha-libro.svg"
import bareto from "./../images/portfolio/bareto.svg"
import solida from "./../images/portfolio/solida.svg"


import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioImages = [
  chinocharapa, wellplaystore, luchalibro, bareto, solida
]

const ExperiencePage = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SitePorFolioQuery {
      site {
        siteMetadata {
          portfolio {
            description
            url
            image
          }
        }
      }
    }
  `)

  return (<Layout>
    <SEO title="Experiencia" />
    <TitleStyled>EXPERIENCIA</TitleStyled>
    <ParagraphContentStyled>Tenemos un equipo con múltiples habilidades y conocimientos, todos con mucha experiencia desarrollando productos digitales. Hemos implementación negocios digitales desde cero, para diferentes industrias, eso nos permite entender como aplicar digital a cada tipo de negocio, te mostramos un poco las marcas con las que hemos colaborado.
    </ParagraphContentStyled>

    <Row>
      {/* <Col size={1}>
        <TitleStyled>¿QUÉ NOS QUIERES PREGUNTAR?</TitleStyled>
        <ParagraphStyled align={'left'}>Tenemos un equipo con múltiples habilidades y conocimientos, todos con mucha experiencia desarrollando productos digitales. Hemos implementación negocios digitales desde cero, para diferentes industrias, eso nos permite entender como aplicar digital a cada tipo de negocio, te mostramos un poco las marcas con las que hemos colaborado.
    </ParagraphStyled>
      </Col> */}
      <Col size={1}>
        <br />
        <PortfolioItem
          items={data.site.siteMetadata.portfolio}
          images={PortfolioImages}
        />
      </Col>
    </Row>
  </Layout>)
}

export default ExperiencePage
