import React from "react"

import { Row } from "../components/base/grid"
import { TitleStyled, ParagraphContentStyled } from "../components/styled"
import { PortfolioItem } from "../components/portfolio/item"

import at from "./../images/portfolio/at.gif"
import chinocharapa from "./../images/portfolio/chino-charapa.svg"
import christoper from "./../images/portfolio/chirstoper-vasquez.png"
import luchalibro from "./../images/portfolio/lucha-libro.svg"
import bareto from "./../images/portfolio/bareto.svg"
import solida from "./../images/portfolio/solida.svg"
import contintatusan from "./../images/portfolio/contintatusan.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = [
  {
    id: 0,
    label: "Anibal Torres",
    url: "https://www.etorresvasquez.com.pe/",
    description: "Ex-Decano del Colegio de Abogados de Lima",
    image: at,
  },
  {
    id: 1,
    label: "Chino Charapa",
    url: "http://luchalibro.pe/chinocharapa/",
    description: "Delivery fusión comida de la selva y oriental",
    image: chinocharapa,
  },
  {
    id: 2,
    label: "CHRISTOPHER VÁSQUEZ",
    url: "http://luchalibro.pe/christopher-vasquez/",
    description: "Guionista / Scriptwriter",
    image: christoper,
  },
  {
    id: 3,
    label: "luchalibro",
    url: "http://luchalibro.pe/",
    description: "Programa de televisión de Canal 7",
    image: luchalibro,
  },
  {
    id: 4,
    label: "Bareto",
    url: "http://baretoweb.com/",
    description: "Website oficial de la banda peruana ",
    image: bareto,
  },
  {
    id: 5,
    label: "Solida",
    url: "https://solida.com.pe/",
    description: "Proyectos inmobiliarios",
    image: solida,
  },
  {
    id: 6,
    label: "Con Tinta Tusan",
    url: "https://www.contintatusan.com/",
    description: "Tu sanaje",
    image: contintatusan,
  },
]

const ExperiencePage = () => {
  return (
    <Layout>
      <SEO title="Experiencia" />
      <TitleStyled>EXPERIENCIA</TitleStyled>
      <ParagraphContentStyled>
        Tenemos un equipo con múltiples habilidades y conocimientos, todos con
        mucha experiencia desarrollando productos digitales. Hemos
        implementación negocios digitales desde cero, para diferentes
        industrias, eso nos permite entender como aplicar digital a cada tipo de
        negocio, te mostramos un poco las marcas con las que hemos colaborado.
      </ParagraphContentStyled>

      <Row></Row>
      <Row>
        <PortfolioItem items={Portfolio} />
      </Row>
    </Layout>
  )
}

export default ExperiencePage
