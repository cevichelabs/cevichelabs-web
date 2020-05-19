import styled from "styled-components"
import { colors } from "./constants"

export const MainPage = styled.main`
  text-align: center;
  background-image: url('./images/el-fondo.jpg');
  height: calc(100vh - 150px);
`

export const TitleStyled = styled.h2`
  font-family: 'Archivo Black', sans-serif;
  color: ${colors.mainColor};
  font-size: 2.5em;
  padding: 60px 0 30px;
  height: auto;
  display: flex;
  justify-content: center;
  position: relative;
  flex-flow: wrap-reverse;
  &:before {
    content: '';
    position: absolute;
    width: 65px;
    height: 0px;
    margin-top: 25px;
    border: 3px solid ${colors.red};
  }
`

export const MainTitle = styled(TitleStyled)`
  position: absolute;
  z-index: 1;
  color: ${colors.white};
  font-size: 3em;
`

export const ParagraphStyled = styled.p`
  font-family: Asap;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 19px;
  color: ${colors.grayOne};
`

export const ParagraphContentStyled = styled(ParagraphStyled)`
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  max-width: 870px;
  margin: auto;
`;

export const Hero = styled.div`
  background-image: url('./images/hero-background.jpg');
  width: 100%;
  height: 793px;
  position: absolute;
`

export const ButtonDown = styled.button`
  width: 75px;
  height: 50px;
  background: ${colors.red};
`

export const ItemSolution = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
`

export const ImageSolution = styled.img`
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 auto;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

export const ImageSectionSolution = styled.div`
  background-color: ${colors.mainColor};
  padding: 10px 2em;
  font-family: Asap;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  text-align: ${(props) => props.align};
  color: rgba(255, 255, 255, 0.5);
`

export const SubTitleSection = styled.h4`
  display: block;
  font-family: BenchNine;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #242424;
`

export const ContainImage = styled.div`
  display: flex;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 1px dotted #f24;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`
