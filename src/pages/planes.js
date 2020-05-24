import React from "react"
import { Link } from "gatsby"
import {
  TitleStyled,
  TitleMinorStyled,
  ParagraphContentStyled,
  ImageSolution,
  SubtitlePackage,
  ItemsPackage,
  ItemPackage,
  ButtonStyled
} from "../components/styled"

import { Grid, Row, Col } from "../components/base/grid"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TiendaVirtual from "./../images/tienda-virtual.jpg"
import OtrasSoluciones from "./../images/otras-soluciones.jpg"

const ButtonPackage = ({title, link}) => {
  return (
    <ButtonStyled>
      <Link to={link}>{title}</Link>
    </ButtonStyled>
  )
}

const ListDescriptionPackage = ({items}) => {
  return (
    <ItemsPackage>
      {items.map(( item, index ) => {
        return (
          <ItemPackage key={index}>{item}</ItemPackage>
        )
      })}
    </ItemsPackage>
  )
}

const PlansPage = () => (
  <Layout>
    <SEO title="Planes" />
    <TitleStyled>NUESTROS PLANES</TitleStyled>
    <ParagraphContentStyled>Queremos ayudar a Pymes y marcas a poder enfrentar la era de la #SUPERDIGITALIZACIÓN, la transformación digital pasó de ser una moda a ser un imperativo, y por eso queremos acércales nuestras solución, planteamos un tipo de solución para cada posibilidad de negocio, al final nuestro propósito es guiar y transformar emprendimientos para que puedan competir:
  </ParagraphContentStyled>
  <Grid>
    <TitleMinorStyled>TIENDA VIRTUAL</TitleMinorStyled>
    <Row>
      <Col sise={1}>
        <ImageSolution src={TiendaVirtual} alt="" />
      </Col>
      <Col sise={1}>
        <SubtitlePackage>MENÚ BÁSICO</SubtitlePackage>
        <ListDescriptionPackage items={
          [
            'Máx. 4 pag / 25 productos',
            'Plantilla personalizada',
            'Modulo de administración',
            'Home/Carrito/Catálogo/Listas',
            'Pasarella de pago/Certificado SSL',
            'SEO / Analytics básico',
            'Estrategia / responsive'
        ]
        } />
        <ButtonPackage  title={'S/ 7.000'} link={'/my-link'} />
      </Col>
      <Col sise={1}>
        <SubtitlePackage>MENÚ INTERMEDIO</SubtitlePackage>
        <ListDescriptionPackage items={
          [
            'Máx. 4 pag / 25 productos',
            'Plantilla personalizada editable',
            'Modulo de administración',
            'Home/Carrito/Catálogo/Listas',
            'Pasarella de pago/Certificado SSL',
            'SEO / Analytics personalizado',
            'Estrategia / copy / responsive / ',
            'Marketing de contenidos'
          ]
        } />
        <ButtonPackage  title={'S/ 7.000'} link={'/my-link'} />
      </Col>
      <Col sise={1}>
        <SubtitlePackage>MENÚ PERSONALIZADO</SubtitlePackage>
        <ListDescriptionPackage items={
          [
            'Máx. 12 pag / 100 productos',
            'Diseño personalizado / UX-UI',
            'Modulo de administración',
            'Home/Carrito/Catálogo/Listas',
            'Pasarella de pago/Certificado SSL',
            'SEO / Analytics / SEO local',
            'Estrategia / copy / responsive / asesoría',
            'Marketing de contenidos / blog'
          ]
        } />
        <ButtonPackage  title={'S/ 7.000'} link={'/my-link'} />
      </Col>
    </Row>
  </Grid>
  <Grid>
    <TitleMinorStyled>OTRAS SOLUCIONES</TitleMinorStyled>
    <Row>
      <Col sise={1}>
        <ImageSolution src={OtrasSoluciones} alt="" />
      </Col>
      <Col sise={1}>
        <SubtitlePackage>WEBSITES</SubtitlePackage>
        <ListDescriptionPackage items={
          [
            'Web site corporativas',
            'Web site promocional',
            'Landing page informativa',
            'Landing page inbound',
            'Landing para productos',
            'Site intranet'
          ]
        } />
        <ButtonPackage  title={'CONSULTAR'} link={'/consultar'} />
      </Col>
      <Col sise={1}>
        <SubtitlePackage>EMAIL MARKETING</SubtitlePackage>
        <ListDescriptionPackage items={
          [
            'Campañas promocionales',
            'Campañas estacionales',
            'Campañas de fidelización',
            'Campañas informativas',
            'Newsletters'
          ]
        } />
        <ButtonPackage  title={'CONSULTAR'} link={'/consultar'} />
      </Col>
      <Col sise={1}>
        <SubtitlePackage>SOCIAL MEDIA</SubtitlePackage>
        <ListDescriptionPackage items={
          [
            'Campañas digitales',
            'Campañas de branding',
            'Campañas de performance',
            'Marketing de contenidos',
            'Servicio de analítica',
            'Piezas para RRSS'
          ]
        } />
        <ButtonPackage  title={'CONSULTAR'} link={'/consultar'} />
      </Col>
    </Row>
  </Grid>
    {/* <Link to="/">Home</Link> */}
  </Layout>
)

export default PlansPage
