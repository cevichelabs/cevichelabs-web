import React from "react"
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

import { ConsultForm } from "../components/constants"

import { Grid, Row, Col } from "../components/base/grid"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TiendaVirtual from "./../images/tienda-virtual.jpg"
import OtrasSoluciones from "./../images/otras-soluciones.jpg"

const ButtonPackage = ({title, link}) => {
  return (
    <ButtonStyled>
      <a href={link}>{title}</a>
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
        <ImageSolution 
          src={TiendaVirtual}
          data-src={TiendaVirtual}
          alt=""
        />
      </Col>
      <Col sise={1}>
        <SubtitlePackage>MENÚ BÁSICO</SubtitlePackage>
        <ListDescriptionPackage items={
          [
            'Máx. 4 pag / 25 productos',
            'Plantilla personalizada',
            'Modulo de administración',
            'Home / carrito / catálogo / listas',
            'Pasarela de pago / Certificado SSL',
            'SEO / Analytics básico',
            'Estrategia / responsive'
        ]
        } />
        <ButtonPackage  title={'CONSULTAR'} link={ConsultForm} />
      </Col>
      <Col sise={1}>
        <SubtitlePackage>MENÚ INTERMEDIO</SubtitlePackage>
        <ListDescriptionPackage items={
          [
            'Máx. 4 pag / 25 productos',
            'Plantilla personalizada editable',
            'Modulo de administración',
            'Home / carrito / catálogo / listas',
            'Pasarela de pago / Certificado SSL',
            'SEO / Analytics personalizado',
            'Estrategia / copy / responsive / ',
            'Marketing de contenidos'
          ]
        } />
        <ButtonPackage  title={'CONSULTAR'} link={ConsultForm} />
      </Col>
      <Col sise={1}>
        <SubtitlePackage>MENÚ PERSONALIZADO</SubtitlePackage>
        <ListDescriptionPackage items={
          [
            'Máx. 12 pag / 100 productos',
            'Diseño personalizado / UX-UI',
            'Modulo de administración',
            'Home / carrito / catálogo / listas',
            'Pasarela de pago / Certificado SSL',
            'SEO / Analytics / SEO local',
            'Estrategia / copy / responsive / asesoría',
            'Marketing de contenidos / blog'
          ]
        } />
        <ButtonPackage  title={'CONSULTAR'} link={ConsultForm} />
      </Col>
    </Row>
  </Grid>
  <Grid>
    <TitleMinorStyled>OTRAS SOLUCIONES</TitleMinorStyled>
    <Row>
      <Col sise={1}>
        <ImageSolution 
          src={OtrasSoluciones}
          data-src={OtrasSoluciones}
          alt=""
        />
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
        <ButtonPackage  title={'CONSULTAR'} link={ConsultForm} />
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
        <ButtonPackage  title={'CONSULTAR'} link={ConsultForm} />
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
        <ButtonPackage  title={'CONSULTAR'} link={ConsultForm} />
      </Col>
    </Row>
  </Grid>
  </Layout>
)

export default PlansPage
