import React from "react"

import { Row } from "../components/base/grid"
import { TitleStyled, ParagraphContentStyled } from "../components/styled"
import { PortfolioItem } from "../components/portfolio/item"

import chinocharapa from "./../images/portfolio/chino-charapa.svg"
import christoper from "./../images/portfolio/chirstoper-vasquez.png"
import luchalibro from "./../images/portfolio/lucha-libro.svg"
import bareto from "./../images/portfolio/bareto.svg"
import readyroofing from "./../images/portfolio/ready-roofing.png"
import solida from "./../images/portfolio/solida.svg"
import contintatusan from "./../images/portfolio/contintatusan.png"
import bigfoot from "./../images/portfolio/bigfoot-funpark.png"

import Layout from "../components/layout"
import { NextSeo } from "next-seo"

const Portfolio = [
  {
    id: 1,
    label: "Chino Charapa",
    url: "http://luchalibro.pe/chinocharapa/",
    description: "Delivery fusión comida de la selva y oriental",
    image: chinocharapa,
  },
  {
    id: 2,
    label: "Christopher Vasquez",
    url: "http://luchalibro.pe/christopher-vasquez/",
    description: "Guionista / Scriptwriter",
    image: christoper,
  },
  {
    id: 3,
    label: "Lucha Libro",
    url: "http://luchalibro.pe/",
    description: "Campeonato de improvisación literaria",
    image: luchalibro,
  },
  {
    id: 4,
    label: "Bareto",
    url: "http://baretoweb.com/",
    description: "Banda peruana que fusiona cumbia, chicha y folclore peruano",
    image: bareto,
  },
  {
    id: 5,
    label: "Solida",
    url: "https://solida.com.pe/",
    description: "Proyectos inmobiliarios, ingeniería y construcción",
    image: solida,
  },
  {
    id: 6,
    label: "Con Tinta Tusan",
    url: "https://www.contintatusan.com/",
    description:
      "Exhibición digital literaria que presenta a 26 escritores peruanos de ascendencia china",
    image: contintatusan,
  },
  {
    id: 7,
    label: "Ready Roofing",
    url: "https://readyroofing.com/",
    description:
      "Roofing contractor offering services such as roof repairs and complete installations",
    image: readyroofing,
  },
  {
    id: 8,
    label: "Big Foot Fun Park™",
    url: "https://bigfootfunpark.com/",
    description:
      "Fun Parrk offers a variety of attractions all themed around Bigfoot",
    image: bigfoot,
  },
]

const portafolioReversed = Portfolio.reverse()

const ExperiencePage = () => {
  return (
    <Layout>
      <NextSeo
        title="Experiencia"
        description="This is the description of the home page"
        openGraph={{
          url: "http://cevichelabs.com/",
          title: "Home Page Title",
          description:
            "Laboratorio de soluciones digitales. Consultoría en Marketing Digital, Branding y Business Intelligence, E-Commerce, Sitios Web, Landing Pages",
          images: [
            {
              url: "http://cevichelabs.com/static/images/og-image.jpeg",
              width: 1200,
              height: 630,
              alt: "Laboratorio de soluciones digitales",
            },
          ],
        }}
      />
      <TitleStyled>EXPERIENCIA</TitleStyled>
      <ParagraphContentStyled>
        Tenemos un equipo con múltiples habilidades y conocimientos, todos con
        mucha experiencia desarrollando productos digitales. Hemos
        implementación negocios digitales desde cero, para diferentes
        industrias, eso nos permite entender como aplicar digital a cada tipo de
        negocio, te mostramos un poco las marcas con las que hemos colaborado.
      </ParagraphContentStyled>

      <Row>
        <PortfolioItem items={portafolioReversed} />
      </Row>
    </Layout>
  )
}

export default ExperiencePage
