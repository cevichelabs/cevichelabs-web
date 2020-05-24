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
  font-size: 68px;
  padding: 60px 0 85px;
  height: auto;
  display: flex;
  justify-content: center;
  position: relative;
  flex-flow: wrap-reverse;
  &:before {
    content: '';
    position: absolute;
    width: 65px;
    height: 0;
    margin-top: 25px;
    border-bottom: 3px solid ${colors.red};
  }
`

export const TitleMinorStyled = styled(TitleStyled)`
  font-size: 45px;
`

export const MainTitle = styled(TitleStyled)`
  position: absolute;
  z-index: 1;
  color: ${colors.white};
  width: 1024px;
`

export const SubTitleStyled = styled(TitleStyled)`
  font-family: 'BenchNine', sans-serif;
  justify-content: left;
  margin: 0 auto 20px;
  width: 75%;
  font-size: 30px;
  color: ${colors.grayOne};
  &:before {
    margin-top: 15px;
    width: 35px;
  }
`

export const ParagraphStyled = styled.p`
  font-family: 'Asap', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 19px;
  width: 75%;
  margin: auto;
  text-align: ${(props) => props.align};
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
  width: 1024px;
  height: 100vh;
  top: 50%;
  margin-top: -30vh;
  position: absolute;
  left: 50%;
  margin-left: -512px;
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
  font-family: 'Asap', sans-serif;
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
`

export const ItemPackage = styled.li`
  font-family: 'Asap', sans-serif;
  list-style: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${colors.grayOne};
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
`