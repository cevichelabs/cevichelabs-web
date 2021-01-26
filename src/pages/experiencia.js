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

const Portfolio = [
  {
    id: 1,
    label: 'Chino Charapa',
    url: 'http://chinocharapa.pe/',
    description: 'Delivery fusión comida de la selva y oriental',
    image: chinocharapa
  },
  {
    id: 2,
    label: 'Well Play Store',
    url: 'https://wellplaystore.com/',
    description: 'Catálogo Online de periféricos para gamers',
    image: wellplaystore
  },
  {
    id: 3,
    label: 'luchalibro',
    url: 'http://luchalibro.pe/',
    description: 'Programa de televisión de Canal 7',
    image: luchalibro
  },
  {
    id: 4,
    label: 'Bareto',
    url: 'http://bareto.pe/',
    description: 'Website oficial de la banda peruana ',
    image: bareto
  },
  {
    id: 5,
    label: 'Solida',
    url: 'https://solida.com.pe/',
    description: 'Proyectos inmobiliarios',
    image: solida
  },
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
      <Col size={1}>
        {/* <TitleStyled>¿QUÉ NOS QUIERES PREGUNTAR?</TitleStyled> */}
        {/* <ParagraphStyled align={'left'}>Tenemos un equipo con múltiples habilidades y conocimientos, todos con mucha experiencia desarrollando productos digitales. Hemos implementación negocios digitales desde cero, para diferentes industrias, eso nos permite entender como aplicar digital a cada tipo de negocio, te mostramos un poco las marcas con las que hemos colaborado.
    </ParagraphStyled> */}
      </Col>
      <Col size={1}>
        <br />
      </Col>
    </Row>
    <Row>
      <PortfolioItem
        items={Portfolio}
      />
    </Row>

  </Layout>)
}

export default ExperiencePage
