export const Porfolio = () => {
  return (
    <div>
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
    </div>
  )
}