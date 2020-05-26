import React from "react"
import { 
  TitleStyled,
  ItemSolution,
  ContainImage,
  SubTitleSection,
  SubTitleStyled,
  ImageSolution,
  ParagraphStyled,
  ImageSectionSolution
} from "../components/styled"
import { Grid, Row, Col } from "../components/base/grid"

import Estrategia from "./../images/estrategia.png"
import EstrategiaDigital from "./../images/estrategia-digital.jpg"
import Branding from "./../images/branding.png"
import BrandingDigital from "./../images/branding-digital.jpg"
import Producto from "./../images/producto.png"
import DesarrolloDeProducto from "./../images/desarrollo-de-producto.jpg"
import Contenidos from "./../images/contenidos.png"
import MarketingDeContenidos from "./../images/marketing-de-contenidos.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SolutionsPage = () => (
  <Layout>
    <SEO title="Soluciones" />
    <TitleStyled>SOLUCIONES</TitleStyled>
    <Grid>
      <Row>
        <Col size={1}>
          <ItemSolution>
            <ContainImage>
              <ImageSolution 
                alt="Estrategia" 
                src={Estrategia} 
                width={'84px'}
                height={'84px'}
              />
            </ContainImage>
            <SubTitleSection>ESTRATEGIA DIGITAL</SubTitleSection>
          </ItemSolution>
        </Col>
        <Col size={1}>
          <ItemSolution>
            <ContainImage>
              <ImageSolution 
                alt='Branding' 
                src={Branding} 
                width={'84px'}
                height={'84px'}
              />
            </ContainImage>
            <SubTitleSection>BRANDING DIGITAL</SubTitleSection>
          </ItemSolution>
        </Col>
        <Col size={1}>
          <ItemSolution>
            <ContainImage>
              <ImageSolution 
                alt='Productos' 
                src={Producto} 
                width={'84px'}
                height={'84px'}
              />
            </ContainImage>
            <SubTitleSection>DESARROLLO DE PRODUCTOS</SubTitleSection>
          </ItemSolution>
        </Col>
        <Col size={1}>
          <ItemSolution>
            <ContainImage>
              <ImageSolution 
                alt='Contenidos' 
                src={Contenidos} 
                width={'84px'}
                height={'84px'}
              />
            </ContainImage>
            <SubTitleSection>MARKETING DE CONTENIDOS</SubTitleSection>
          </ItemSolution>
        </Col>
      </Row>
    </Grid>

    <Grid>
      <Row>
        <Col size={2}>
          <ImageSolution 
            alt='Contenidos' 
            src={EstrategiaDigital} 
            width={'834px'}
          />
          <ImageSectionSolution align={'left'}>
            Photo by Curtis Macnewton on Unsplash
          </ImageSectionSolution>
        </Col>
        <Col size={2}>
          <SubTitleStyled>ESTRATEGIA DIGITAL</SubTitleStyled>
          <ParagraphStyled align={'left'}>Nuestra experiencia puede ayudarte a planificar tu marca para que puedas hablar en medios digitales, desde hacer un análisis, hasta desarrollar un control de mando tocando todos los puntos de contacto de tu audiencia, desarrollando una estrategia que se adapte a la naturaleza de tu marca, aportando valor y proyección a tu negocio.</ParagraphStyled>
        </Col>
      </Row>
      <Row>
        <Col size={2}>
          <SubTitleStyled>BRANDING DIGITAL</SubTitleStyled>
          <ParagraphStyled align={'left'}>Para que tu negocio tenga visibilidad, se necesita saber el propósito que cumple dentro del océano de posibilidades en el mundo digital, hoy en día los consumidores valoran mucho más las experiencias que los propios productos, podemos ayudarte a identificar la personalidad y darle forma a tu propuesta de valor para que volteen a mirarte.</ParagraphStyled>
        </Col>
        <Col size={2}>
          <ImageSolution
            alt='Contenidos'
            src={BrandingDigital}
            width={'834px'}
          />
          <ImageSectionSolution align={'right'}>
            Photo by Ben Kolde on Unsplash
          </ImageSectionSolution>
        </Col>
      </Row>
      <Row>
        <Col size={2}>
          <ImageSolution
            alt='Contenidos'
            src={DesarrolloDeProducto} 
            width={'834px'}
          />
          <ImageSectionSolution align={'left'}>
            Photo by Med Bard on Unsplash
          </ImageSectionSolution>
        </Col>
        <Col size={2}>
          <SubTitleStyled>DESARROLLO DE PRODUCTO</SubTitleStyled>
          <ParagraphStyled align={'left'}>Si piensas en desarrollar algún producto digital para tu emprendimiento, website, ecommerce, emailing, social media, medios etc, te ayudamos a identificar el tipo de solución que necesites, desde la etapa de clarificar una idea, el prototipo, el diseño de interfaz, desarrollo, hasta el testing y entrega de producto, liderando todas las etapas.</ParagraphStyled>
        </Col>
      </Row>
      <Row>
        <Col size={2}>
          <SubTitleStyled>MARKETING DE CONTENIDOS</SubTitleStyled>
          <ParagraphStyled align={'left'}>Para que tu negocio tenga visibilidad, se necesita saber el propósito que cumple dentro del océano de posibilidades en el mundo digital, hoy en día los consumidores valoran mucho más las experiencias que los propios productos, podemos ayudarte a identificar la personalidad y darle forma a tu propuesta de valor para que volteen a mirarte.</ParagraphStyled>
        </Col>
        <Col size={2}>
          <ImageSolution
            alt='Contenidos'
            src={MarketingDeContenidos} 
            width={'834px'}
          />
          <ImageSectionSolution align={'right'}>
          Photo by Ian Schneider on Unsplash
          </ImageSectionSolution>
        </Col>
      </Row>
    </Grid>
  </Layout>
)

export default SolutionsPage
