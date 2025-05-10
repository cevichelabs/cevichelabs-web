import styled from "styled-components"
import { colors } from "./constants"

export const MainPage = styled.main`
  text-align: center;
  background-image: ${props => props.background};
`
export const TitleStyled = styled.h2`
  color: ${colors.mainColor};
  font-family: "Archivo Black", sans-serif;
  font-size: 68px;
  height: auto;
  justify-content: center;
  padding-top: 3rem;
  position: relative;
  &:after {
    content: " ";
    display: block;
    margin: 20px auto 0;
    width: 65px;
    height: 3px;
    background: ${colors.red};
  }

  @media (max-width: 1024px) {
    font-size: 25px;
    line-height: 30px;
  }
`

export const TitleMinorStyled = styled(TitleStyled)`
  font-size: 45px;
  line-height: 1;
`

export const MainTitle = styled(TitleStyled)`
  z-index: 1;
  color: ${colors.white};
  width: 100%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 0 10px;
  }
`

export const SubTitleStyled = styled(TitleStyled)`
  font-family: "BenchNine", sans-serif;
  justify-content: left;
  margin: 0 auto 20px;
  padding: 0 0 10px;
  width: 75%;
  font-size: 30px;
  color: ${colors.grayOne};
  &:before {
    margin-top: 15px;
    width: 35px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 10px 0;
  }
`

export const ParagraphStyled = styled.p`
  font-family: "Asap", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 19px;
  width: 75%;
  margin: auto;
  text-align: ${props => props.align};
  color: ${colors.grayOne};
  @media only screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom: 45px;
  }
`

export const ParagraphContentStyled = styled(ParagraphStyled)`
  font-size: 24px;
  line-height: 2.5rem;
  text-align: center;
  max-width: 870px;
  margin: auto;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.7rem;
  }
`

export const Hero = styled.div`
  display: flex;
  position: absolute;
  height: calc(100vh - 150px);
  align-items: center;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const MainCredits = styled.div`
  font-family: Asap;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  width: 100%;
  position: absolute;
  bottom: 10px;
  z-index: 5;
`

export const ImageContainer = styled.div`
  position: relative;
  height: calc(100vh - 150px);
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

export const ImageSectionSolution = styled.div`
  background-color: ${colors.mainColor};
  padding: 10px 2em;
  font-family: "Asap", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  text-align: ${props => props.align};
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
  color: ${colors.grayOne};
`

export const ContainImage = styled.div`
  display: flex;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 1px dotted ${colors.redTwo};
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`

export const SubtitlePackage = styled.h4`
  font-family: BenchNine;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: ${colors.grayOne};
`

export const ItemsPackage = styled.ul`
  margin: 0;
  padding: 0;
  min-height: 350px;
  @media (max-width: 1024px) {
    min-height: auto;
    margin-bottom: 30px;
  }
`

export const ItemPackage = styled.li`
  font-family: "Asap", sans-serif;
  list-style: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${colors.grayOne};
  @media (max-width: 1024px) {
    line-height: 2.25em;
  }
`

export const ButtonStyled = styled.button`
  font-family: BenchNine;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  border: none;
  text-align: center;
  padding: 0;
  background: ${colors.red};
  a {
    padding: 10px 30px;
    color: ${colors.white};
    text-decoration: none;
  }
  @media only screen and (max-width: 480px) {
    margin-bottom: 50px;
  }
`
